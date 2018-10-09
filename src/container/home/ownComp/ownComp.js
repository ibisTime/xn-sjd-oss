import React from 'react';
import { Row, Col } from 'antd';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Notice from '../notice/notice';
import Fbdsdzz from '../fbdsdzz/fbdsdzz';
import Yrydzz from '../yrydzz/yrydzz';

export default class OwnComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        title: '氧林1.0.0正式上线了',
        createDatetime: '2018-09-05'
      }]
    };
  }
  goWithdraw = () => {}
  render() {
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
            <Multiple account0={this.props.cnyAccount} account1={this.props.cnyAccount} account2={this.props.cnyAccount}/>
          </Col>
        </Row>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Notice data={this.state.data}/>
          </Col>
          <Col span={12}>
            <Fbdsdzz account={this.props.cnyAccount}/>
            <Yrydzz account={this.props.cnyAccount}/>
          </Col>
        </Row>
      </div>
    );
  }
}
