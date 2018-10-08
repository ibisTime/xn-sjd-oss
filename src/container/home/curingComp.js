import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List } from 'antd';
import { moneyFormat } from 'common/js/util';
import './home.css';
const data = [];
export default class CuringComp extends React.Component {
  goWithdraw() {}
  render() {
    return (
      <div>
        <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="可用佣金金额" extra={
              <Button onClick={() => this.goWithdraw()} type="primary">提现</Button>
            }>¥{moneyFormat(this.props.cnyAccount.amount)}</Card>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="提现处理中">¥{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="累计获得货款">¥{moneyFormat(this.props.cnyAccount.amount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="累计提现货款">¥{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
          </Col>
          <Col span={8} style={{marginBottom: '20px'}}>
            <Card title="本月贷款收入">¥{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
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
