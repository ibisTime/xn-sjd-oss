import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Button, Spin, Modal, Form } from 'antd';
import { initData } from '@redux/finance/platform/account';
import { moneyFormat, getUserId, showSucMsg } from 'common/js/util';
import fetch from 'common/js/fetch';
import { formItemLayout } from 'common/js/config';
import CInput from 'component/cInput/cInput';

const { Meta } = Card;

@connect(
  state => state.platformAccount,
  { initData }
)
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      btnFetching: false
    };
  }
  componentDidMount() {
    this.props.initData();
  }
  // 资金流水
  goFlow(accountNumber) {
    this.props.history.push(`/platform/account/flows?code=${accountNumber}`);
  }
  // 资金分布
  goAccounts(type) {
    this.props.history.push(`/platform/account/accounts?type=${type}`);
  }
  // 提现回录
  goWithdraw(accountNumber) {
    this.props.history.push(`/platform/account/enter?code=${accountNumber}`);
  }
  // 手动增发
  goAdd() {
    // this.props.jfAccount.accountNumber
    this.setState({ visible: true });
  }
  onCancel = () => {
    this.setState({ visible: false });
  }
  // 获取输入框类型的控件
  getInputComp(field, title, amount) {
    let rules = [{
      required: true,
      message: '必填字段'
    }];
    if (amount) {
      rules.push({
        pattern: /(^[1-9](,\d{3}|[0-9])*(\.\d{1,2})?$)|([0])/,
        message: '金额必须>=0，且小数点后最多2位'
      });
    }
    const props = {
      rules,
      title,
      field,
      label: title,
      getFieldDecorator: this.props.form.getFieldDecorator,
      getFieldError: this.props.form.getFieldError,
      getFieldValue: this.props.form.getFieldValue
    };
    return <CInput key={field} {...props} />;
  }
  // 页面提交
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ btnFetching: true });
        values.updater = getUserId();
        values.amount *= 1000;
        fetch(802342, values).then(() => {
          this.props.initData();
          showSucMsg('操作成功');
          this.setState({
            btnFetching: false,
            visible: false
          });
        }).catch(() => this.setState({ btnFetching: false }));
      }
    });
  }
  render() {
    const { visible, btnFetching } = this.state;
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
          <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 32 }}>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="分销商总余额" extra={
                <Button onClick={() => this.goAccounts(this.props.aClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(this.props.aClientAccount.amount)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="产权方总余额" extra={
                <Button onClick={() => this.goAccounts(this.props.oClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(this.props.oClientAccount.amount)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="养护方总余额" extra={
                <Button onClick={() => this.goAccounts(this.props.mClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(this.props.mClientAccount.amount)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="用户总余额" extra={
                <Button onClick={() => this.goAccounts(this.props.cClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(this.props.cClientAccount.amount)}</Card>
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
              }>¥{moneyFormat(this.props.jfAccount.amount)}
              <Button
                style={{float: 'right'}}
                onClick={() => this.goAdd()} type="primary">手动增发</Button>
              </Card>
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
        <Modal
          className="build-modal-detail"
          destroyOnClose
          visible={visible}
          title='手动增发'
          onCancel={this.onCancel}
          style={{minWidth: 820}}
          footer={null}>
          <Form className="detail-form-wrapper" onSubmit={this.handleSubmit}>
            {this.getInputComp('amount', '金额', true)}
            {this.getInputComp('bizNote', '说明')}
            <Form.Item style={{marginTop: 20}} className="cform-item-btn" key='btns' {...formItemLayout} label="&nbsp;">
              <Button type="primary" htmlType="submit" loading={btnFetching}>保存</Button>
              <Button style={{marginLeft: 20}} onClick={this.onCancel}>返回</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(Account);
