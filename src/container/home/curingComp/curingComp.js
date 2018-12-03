import React from 'react';
import { Row, Col } from 'antd';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Notice from '../notice/notice';
import Zjyhrw from '../zjyhrw/zjyhrw';
import fetch from 'common/js/fetch';
import { moneyFormat, getUserId, formatDate } from 'common/js/util';
import { tixianAmountCount, claimCount, getAccount, yhcqsy } from 'api/count';
import { getUserById } from 'api/user';

export default class CuringComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yhData: []
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
      // 累积提现货款
      tixianAmountCount({ statusList: [5], applyUser: getUserId() }),
      getAccount({ userId: getUserId() }),
      // 累计获得货款
      yhcqsy({ userId: getUserId(), accountType: 'M' }),
      // 本月获得货款
      yhcqsy({ userId: getUserId(), accountType: 'M', dateStart: startTime, dateEnd: curTime }),
      // 公告
      fetch(805305, {
        status: 1,
        object: 'M',
        start: '1',
        limit: '10',
        orderDir: 'desc',
        orderColumn: 'publish_datetime'
      }),
      // 最新养护任务
      fetch(629635, {
        start: '1',
        limit: '1',
        maintain: getUserId(),
        orderDir: 'desc',
        orderColumn: 'update_datetime'
      })
    ]).then(([res1, res2, res3, res4, res5, res6, res7]) => {
      this.setState({
        txclzAmount: res1.totalAmount,
        account1: res2.totalAmount,
        account: res3[0].amount,
        account0: res4.totalAmount,
        account2: res5.totalAmount
      });
      res6.list.length && this.setState({
        data: [{
          title: res6.list[0].title,
          createDatetime: res6.list[0].publishDatetime
        }]
      });
      res7.list.length && this.setState({
        yhData: [{
          code: res7.list[0].code,
          treeNumber: res7.list[0].treeNumber,
          age: res7.list[0].age,
          status: res7.list[0].status,
          updateDatetime: res7.list[0].updateDatetime,
          maintainerName: res7.list[0].maintainerName
        }]
      });
      }).catch();
  }
  goWithdraw() {}
  goNotice = () => {
    window.location.href = '/curing/notices';
  }
  goRecord = () => {
    // console.log(this.state);
    window.location.href = `/curing/tasks/addedit?n=${this.state.yhData[0].treeNumber}&code=${this.state.yhData[0].code}&v=1`;
  }
  render() {
    const title0 = '累计获得货款';
    const title1 = '累计提现货款';
    const title2 = '本月货款收入';
    const { account, txclzAmount, account0, account1, account2 } = this.state;
    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Kyyjje account={account} goWithdraw={this.goWithdraw} isseller="123"/>
          </Col>
          <Col span={8}>
            <Txclz account={txclzAmount}/>
          </Col>
          <Col span={8}>
            <Multiple
              title0={title0}
              title1={title1}
              title2={title2}
              account0={account0}
              account1={account1}
              account2={account2}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 12, sm: 24, md: 24, lg: 32 }}>
          <Col span={12}>
            <Notice
              data={this.state.data}
              goNotice={this.goNotice}
            />
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Zjyhrw
              data={this.state.yhData}
              goRecord={this.goRecord}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
