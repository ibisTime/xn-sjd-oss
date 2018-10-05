import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List } from 'antd';
import { moneyFormat } from 'common/js/util';
import './home.css';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];
export default class AgentComp extends React.Component {
  goWithdraw() {}
  render() {
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="可用佣金金额" extra={
              <Button onClick={() => this.goWithdraw()} type="primary">提现</Button>
            }>¥{moneyFormat(this.props.cnyAccount.amount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="提现处理中">¥{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="待结算金额">¥{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="累计获得货款">{moneyFormat(this.props.cnyAccount.amount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="累计提现货款">{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="本月佣金收入">{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
        </Row>
        <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="代理概况">
              <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
                <Col span={12}>累计：2332个</Col>
                <Col span={12}>新增34个</Col>
              </Row>
            </Card>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="用户概况">
              <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
                <Col span={12}>累计：2332个</Col>
                <Col span={12}>新增34个</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: 20}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} style={{marginBottom: '20px'}}>
            <List
              header={<div>公告</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
