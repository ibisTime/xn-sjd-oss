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
import { getUserId, moneyFormat } from 'common/js/util';
import { tixianAmountCount, claimCount, getAccount } from 'api/count';
import { getUserById } from 'api/user';

export default class OwnComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txclzAmount: 0,
      account1: 0,
      fbdsdzzMin: 0,
      fbdsdzzMax: 0,
      yrydzzAmount: 0,
      yrydzzCount: 0,
      account: 0,
      data: []
    };
  }
  componentDidMount() {
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
      fetch(805305, {
        object: 'O',
        start: '1',
        limit: '10',
        orderDir: 'desc',
        orderColumn: 'publish_datetime'
      })
    ])
    .then(([res1, res2, res3, res4, res5, res6]) => {
      res6.list.length && this.setState({
        txclzAmount: res1.totalAmount,
        account1: res2.totalAmount,
        fbdsdzzMin: res3.minPrice,
        fbdsdzzMax: res3.maxPrice,
        yrydzzAmount: res4.totalAmount,
        yrydzzCount: res4.treeCount,
        account: res5[0].amount,
        data: [{
          title: res6.list[0].title,
          createDatetime: res6.list[0].publishDatetime
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
      account1,
      data,
      fbdsdzzMin,
      fbdsdzzMax,
      yrydzzAmount,
      yrydzzCount } = this.state;
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Kyyjje account={account} goWithdraw={this.goWithdraw}/>
          </Col>
          <Col span={8}>
            <Txclz account={txclzAmount}/>
          </Col>
          <Col span={8}>
            <Multiple
              title0="累计获得货款"
              account0={this.props.cnyAccount}
              title1="累计提现货款"
              account1={account1}
              title2="本月货款收入"
              account2={this.props.cnyAccount}/>
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
