import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Button, Spin } from 'antd';
import { initData } from '@redux/own/accounts';
import { moneyFormat } from 'common/js/util';

const { Meta } = Card;

@connect(
  state => state.ownAccounts,
  { initData }
)
class OwnAccounts extends React.Component {
  componentDidMount() {
    this.props.initData();
  }
  goWithdraw() {
    let pathname = this.props.location.pathname;
    if (pathname.indexOf('/own') !== -1) {
      this.props.history.push('/own/withdraw/apply');
    } else if (pathname.indexOf('/curing') !== -1) {
      this.props.history.push('/curing/withdraw/apply');
    } else {
      this.props.history.push('/proxy/withdraw/apply');
    }
  }
  render() {
    return (
      <div>
        <Spin spinning={this.props.fetching}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="可用佣金金额" extra={
                <Button onClick={() => this.goWithdraw()} type="primary">提现</Button>
              }>{moneyFormat(this.props.cnyAccount.amount)}</Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="提现处理中">{moneyFormat(this.props.cnyAccount.frozenAmount)}</Card>
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default OwnAccounts;
