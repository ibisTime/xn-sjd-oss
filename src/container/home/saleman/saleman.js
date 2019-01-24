import React from 'react';
import { Row, Col } from 'antd';
import NormalBox from '../normalBox/normalBox';
import NormalPersonBox from '../normalPersonBox/normalPersonBox';
import LjhdyjImg from './ljhdyj.png';
import SyyjsrImg from './syyjsr.png';
import DjsjeImg from './djsje.png';
import BlueImg from './blue.png';
import GreenImg from './green.png';
import RedImg from './red.png';
import UserImg from './user.png';
import UsersImg from './users.png';
import fetch from 'common/js/fetch';
import { formatDate, getUserId } from 'common/js/util';
import { yongjinAcount, getNewUserNum } from 'api/count';

export default class Saleman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yhData: []
    };
  }
  getDate() {
    let nowdays = new Date();
    let year = nowdays.getFullYear();
    let month = nowdays.getMonth();
    if(month === 0) {
      month = 12;
      year = year - 1;
    }
    if (month < 10) {
      month = '0' + month;
    }
    let firstDay = year + '-' + month + '-' + '01'; // 上个月的第一天
    let myDate = new Date(year, month, 0);
    let lastDay = year + '-' + month + '-' + myDate.getDate(); // 上个月的最后一天
    return {
      firstDay: firstDay,
      lastDay: lastDay
    };
  }
  componentDidMount() {
    let curTime = formatDate(new Date());
    let firstDay = this.getDate().firstDay;
    let lastDay = this.getDate().lastDay;
    Promise.all([
      // 累计获得佣金
      yongjinAcount({ userId: getUserId(), status: 1 }),
      // 上月佣金收入
      yongjinAcount({ userId: getUserId(), createStartDatetime: firstDay, createEndDatetime: lastDay, status: 1 }),
      // 待结算金额
      yongjinAcount({ userId: getUserId(), status: 0 }),
      // 代理概况(共）
      getNewUserNum({ userId: getUserId(), type: 'A' }),
      // 用户概况（新增）
      getNewUserNum({ userId: getUserId(), type: 'A', createDatetimeStart: curTime, createDatetimeEnd: curTime })
    ]).then(([res1, res2, res3, res4, res5]) => {
      this.setState({
        account0: res1.totalAmount,
        account1: res2.totalAmount,
        account2: res3.totalAmount,
        userCount: res4.userCount,
        userNew: res5.userCount
      });
    }).catch();
  }
  goWithdraw() {}
  render() {
    const { account0, account1, account2, userCount, userNew } = this.state;
    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <NormalBox
              icon={LjhdyjImg}
              title='累计获得佣金'
              account={account0}
              bgImage={BlueImg}/>
          </Col>
          <Col span={8}>
            <NormalBox
              icon={SyyjsrImg}
              title='上月佣金收入'
              account={account1}
              bgImage={GreenImg}/>
          </Col>
          <Col span={8}>
            <NormalBox
              icon={DjsjeImg}
              title='待结算金额'
              account={account2}
              bgImage={RedImg}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 12, sm: 24, md: 24, lg: 32 }}>
          <Col span={12}>
            <NormalPersonBox icon={UserImg} title="新增用户" amount={userNew || 0}/>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <NormalPersonBox icon={UsersImg} title="累计用户" amount={userCount || 0}/>
          </Col>
        </Row>
      </div>
    );
  }
}
