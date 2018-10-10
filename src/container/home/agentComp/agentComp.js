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

export default class AgentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCount: 0,
      totalCount: 0,
      amount: 0,
      data: [{
        title: '氧林1.0.0正式上线了',
        createDatetime: '2018-09-05'
      }]
    };
  }
  goWithdraw() {}
  render() {
    const { amount, addCount, totalCount } = this.state;
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Kyyjje account={this.props.cnyAccount} goWithdraw={this.goWithdraw}/>
          </Col>
          <Col span={8}>
            <Txclz account={this.props.cnyAccount}/>
          </Col>
          <Col span={8}>
            <Multiple
              title0="累计获得佣金"
              account0={this.props.cnyAccount}
              title1="累计提现佣金"
              account1={this.props.cnyAccount}
              title2="本月佣金收入"
              account2={this.props.cnyAccount}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Notice data={this.state.data}/>
          </Col>
          <Col span={12}>
            <Djsje style={{padding: 16}} amount={amount}/>
            <UserInfo icon={agentImg} title="代理概况" totalCount={totalCount} addCount={addCount}/>
            <UserInfo icon={UsersImg} title="用户概况" totalCount={totalCount} addCount={addCount} style={{marginBottom: 0}}/>
          </Col>
        </Row>
      </div>
    );
  }
}
