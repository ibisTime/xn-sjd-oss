import React from 'react';
import { Row, Col } from 'antd';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Notice from '../notice/notice';
import Fbdsdzz from '../fbdsdzz/fbdsdzz';
import Yrydzz from '../yrydzz/yrydzz';
import Fbdyszz from '../fbdyszz/fbdyszz';
import Ycsdyszz from '../ycsdyszz/ycsdyszz';
import fetch from 'common/js/fetch';
import { getUserId, moneyFormat, formatDate } from 'common/js/util';
import { tixianAmountCount, claimCount, getAccount, yongjinAcount } from 'api/count';
import { getUserById } from 'api/user';

export default class OwnComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txclzAmount: 0,
      account0: 0,
      account1: 0,
      account2: 0,
      fbdsdzzMin: 0,
      fbdsdzzMax: 0,
      yrydzzAmount: 0,
      yrydzzCount: 0,
      account: 0,
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
      // 累积提现货款
      tixianAmountCount({ statusList: [5], applyUser: getUserId() }),
      // 发布的树总值
      getUserById(getUserId()),
      // 已认养的总值
      claimCount({ userId: getUserId() }),
      getAccount({ userId: getUserId() }),
      // 累计获得货款
      yongjinAcount({ userId: getUserId(), status: 1 }),
      // 本月货款收入
      yongjinAcount({ userId: getUserId(), createStartDatetime: startTime, createEndDatetime: curTime, status: 1 }),
      fetch(805305, {
        object: 'O',
        start: '1',
        limit: '10',
        orderDir: 'desc',
        orderColumn: 'publish_datetime'
      })
    ])
    .then(([res1, res2, res3, res4, res5, res6, res7, res8]) => {
      this.setState({
        txclzAmount: res1.totalAmount,
        account1: res2.totalAmount,
        fbdsdzzMin: res3.minPrice,
        fbdsdzzMax: res3.maxPrice,
        yrydzzAmount: res4.totalAmount,
        yrydzzCount: res4.treeCount,
        account: res5[0].amount,
        account0: res6.totalAmount,
        account2: res7.totalAmount
      });
      res8.list.length && this.setState({
        data: [{
          title: res8.list[0].title,
          createDatetime: res8.list[0].publishDatetime
        }]
      });
    }).catch();
  }
  goWithdraw = () => {};
  goNotice = () => {
    window.location.href = '/own/notices';
  };
  render() {
    const { account,
      txclzAmount,
      account0,
      account1,
      account2,
      data,
      fbdsdzzMin,
      fbdsdzzMax,
      yrydzzAmount,
      yrydzzCount } = this.state;
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
              title0="累计获得货款"
              account0={account0}
              title1="累计提现货款"
              account1={account1}
              title2="本月货款收入"
              account2={account2}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Fbdsdzz minPrice={fbdsdzzMin} maxPrice={fbdsdzzMax}/>
            <Yrydzz totalAmount={yrydzzAmount} treeCount={yrydzzCount}/>
          </Col>
          <Col span={12}>
            <Notice
              data={data}
              goNotice={this.goNotice}
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Fbdyszz minPrice={fbdsdzzMin} maxPrice={fbdsdzzMax}/>
            <Ycsdyszz totalAmount={yrydzzAmount} treeCount={yrydzzCount}/>
          </Col>
        </Row>
      </div>
    );
  }
}
