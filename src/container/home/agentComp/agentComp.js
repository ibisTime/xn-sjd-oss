import React from 'react';
import { Row, Col, Card } from 'antd';
import Notice from '../notice/notice';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Djsje from '../djsje/djsje';
import UserInfo from '../userInfo/userInfo';
import UsersImg from './users.png';
import agentImg from './agent.png';
import fetch from 'common/js/fetch';
import { getUserId, formatDate } from 'common/js/util';
import { tixianAmountCount, getAccount, yongjinAcount, getNewUserNum } from 'api/count';

export default class AgentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCount: 0,
      totalCount: 0,
      amount: 0,
      data: []
    };
  }
  getMonth() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    return firstDay;
  }
  componentDidMount() {
    let curTime = formatDate(new Date());
    let startTime = formatDate(this.getMonth());
    Promise.all([
      // 提现处理中
      tixianAmountCount({ statusList: [1, 3], applyUser: getUserId() }),
      // 累积提现佣金
      tixianAmountCount({ statusList: [5], applyUser: getUserId() }),
      // 可用佣金金额
      getAccount({ userId: getUserId() }),
      // 待结算金额
      yongjinAcount({ userId: getUserId(), status: 0 }),
      // 累计获得佣金
      yongjinAcount({ userId: getUserId(), status: 1 }),
      // 本月佣金收入
      yongjinAcount({ userId: getUserId(), createStartDatetime: startTime, createEndDatetime: curTime, status: 1 }),
      // 代理概况(共）
      getNewUserNum({ userId: getUserId(), type: 'A' }),
      // 用户概况（新增）
      getNewUserNum({ userId: getUserId(), type: 'A', createDatetimeStart: curTime, createDatetimeEnd: curTime }),
      // 公告
      fetch(805305, {
        object: 'A',
        status: 1,
        start: '1',
        limit: '10',
        orderDir: 'desc',
        orderColumn: 'publish_datetime'
      })
    ]).then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => {
      this.setState({
        txclzAmount: res1.totalAmount,
        account1: res2.totalAmount,
        account: res3[0].amount,
        djsAmount: res4.totalAmount,
        account0: res5.totalAmount,
        account2: res6.totalAmount,
        dailiCount: res7.agentUserCount,
        userCount: res7.userCount,
        dailiNew: res8.agentUserCount,
        userNew: res8.userCount
      });
      res9.list.length && this.setState({
        data: [{
          title: res9.list[0].title,
          createDatetime: res9.list[0].publishDatetime
        }]
      });
    }).catch();
  }
  goWithdraw() {}
  goNotice = () => {
    window.location.href = '/proxy/notices';
  }
  render() {
    const { txclzAmount,
      account,
      account0,
      account1,
      account2,
      djsAmount, dailiCount, dailiNew, userCount, userNew } = this.state;
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Kyyjje account={account} goWithdraw={this.goWithdraw} isseller="123"/>
          </Col>
          <Col span={8}>
            <Txclz account={txclzAmount}/>
          </Col>
          <Col span={8}>
            <Multiple
              title0="累计获得佣金"
              account0={account0}
              title1="累计提现佣金"
              account1={account1}
              title2="本月佣金收入"
              account2={account2}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Notice
              data={this.state.data}
              goNotice={this.goNotice}
            />
          </Col>
          <Col span={12}>
            <Djsje style={{padding: 16}} amount={djsAmount}/>
            <UserInfo icon={agentImg} title="代理概况" totalCount={dailiCount} addCount={dailiNew}/>
            <UserInfo icon={UsersImg} title="用户概况" totalCount={userCount} addCount={userNew} style={{marginBottom: 0}}/>
          </Col>
        </Row>
      </div>
    );
  }
}
