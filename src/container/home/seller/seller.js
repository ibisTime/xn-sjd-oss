import React from 'react';
import { Row, Col, Avatar } from 'antd';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Notice from '../notice/notice';
import fetch from 'common/js/fetch';
import { moneyFormat, getUserId, formatDate } from 'common/js/util';
import { tixianAmountCount, claimCount, getAccount, yhcqsy } from 'api/count';
import { getUser } from 'api/user';
import AvatarImg from '../platformComp/avatar.png';

export default class CuringComp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [],
        yhData: [],
        pname: '',
        mobile: '',
        txclzAmount: 0,
        account1: 0,
        account: 0,
        account0: 0,
        account2: 0
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
      // 公告
      fetch(805305, {
          object: 'B',
          status: 1,
          start: '1',
          limit: '10',
          orderDir: 'desc',
          orderColumn: 'publish_datetime'
      }),
      // 用户信息
      getUser(),
      // 累计获得货款
      yhcqsy({ userId: getUserId(), accountType: 'B' }),
      // 本月货款收入
      yhcqsy({ userId: getUserId(), accountType: 'B', dateStart: startTime, dateEnd: curTime })
    ]).then(([res1, res2, res3, res4, res5, res6, res7]) => {
        this.setState({
          txclzAmount: res1.totalAmount,
          account1: res2.totalAmount,
          account: res3[0].amount,
          mobile: res5.mobile,
          account0: res6.totalAmount,
          account2: res7.totalAmount
        });
        res4.list.length && this.setState({
            data: [{
                title: res4.list[0].title,
                createDatetime: res4.list[0].publishDatetime
            }]
        });
    }).catch();
  }
  // goWithdraw() {
  //     window.location.href = '/proxy/withdraw/apply';
  // }
  goNotice = () => {
      window.location.href = '/seller/notices';
  };
    render() {
        const title0 = '累计获得货款';
        const title1 = '累计提现货款';
        const title2 = '本月货款收入';
        const { account, txclzAmount, account1, account0, account2 } = this.state;
        return (
            <div className="platform-wrapper">
                <div className="avatar-wrapper">
                    <Avatar size={80} src={AvatarImg} />
                    <div className="user-name">{this.state.mobile}</div>
                    <div className="user-role">商家</div>
                </div>
                <div className="platform-content">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
                        <Col span={8} style={{marginBottom: '20px'}}>
                            <Kyyjje account={account} goWithdraw={this.goWithdraw} isseller="ok"/>
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
                    </Row>
                </div>
            </div>
        );
    }
}
