import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Button, Spin } from 'antd';
import { initData } from '@redux/finance/platform/account';
import { moneyFormat } from 'common/js/util';

const { Meta } = Card;

@connect(
  state => state.platformAccount,
  { initData }
)
class Account extends React.Component {
  componentDidMount() {
    this.props.initData();
  }
  // 资金流水
  goFlow(accountNumber) {
    this.props.history.push(`/platform/account/flows?code=${accountNumber}`);
  }
  // 提现回录
  goWithdraw(accountNumber) {
    this.props.history.push(`/platform/account/enter?code=${accountNumber}`);
  }
  render() {
    return (
      <div>
        <Spin spinning={this.props.fetching}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="支付宝账户" extra={
                <Button onClick={() => this.goFlow(this.props.aliAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.aliAccount.amount)}
                <Button
                  style={{float: 'right'}}
                  onClick={() => this.goWithdraw(this.props.aliAccount.accountNumber)} type="primary">提现回录</Button>
              </Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="微信账户" extra={
                <Button onClick={() => this.goFlow(this.props.wxAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.wxAccount.amount)}
                <Button
                  style={{float: 'right'}}
                  onClick={() => this.goWithdraw(this.props.wxAccount.accountNumber)} type="primary">提现回录</Button>
              </Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="线下账户" extra={
                <Button onClick={() => this.goFlow(this.props.offAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.offAccount.amount)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="平台余额" extra={
                <Button onClick={() => this.goFlow(this.props.cnyAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.cnyAccount.amount)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="积分池余额" extra={
                <Button onClick={() => this.goFlow(this.props.jfAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.jfAccount.amount)}</Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="积分发放额" extra={
                <Button onClick={() => this.goFlow(this.props.jfAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.jfAccount.outAmount)}</Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="积分回收额" extra={
                <Button onClick={() => this.goFlow(this.props.jfAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.jfAccount.inAmount)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="碳泡泡余额" extra={
                <Button onClick={() => this.goFlow(this.props.tppAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.tppAccount.amount)}</Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="碳泡泡发放额" extra={
                <Button onClick={() => this.goFlow(this.props.tppAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.tppAccount.outAmount)}</Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="碳泡泡回收额" extra={
                <Button onClick={() => this.goFlow(this.props.tppAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(this.props.tppAccount.inAmount)}</Card>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default Account;
