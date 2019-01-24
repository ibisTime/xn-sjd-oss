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
  goAdd(currency) {
    this.currency = currency;
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
        values.currency = this.currency;
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
    const { aliAccount, wxAccount, offAccount, aClientAccount, oClientAccount,
      mClientAccount, cClientAccount, bClientAccount, cnyAccount, tppAccount, jfAccount } = this.props;
    return (
      <div>
        <Spin spinning={this.props.fetching}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="支付宝账户" extra={
                <Button onClick={() => this.goFlow(aliAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(aliAccount.amount || 0)}
                <Button
                  style={{float: 'right'}}
                  onClick={() => this.goWithdraw(aliAccount.accountNumber)} type="primary">提现回录</Button>
              </Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="微信账户" extra={
                <Button onClick={() => this.goFlow(wxAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(wxAccount.amount || 0)}
                <Button
                  style={{float: 'right'}}
                  onClick={() => this.goWithdraw(wxAccount.accountNumber)} type="primary">提现回录</Button>
              </Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="线下账户" extra={
                <Button onClick={() => this.goFlow(offAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(offAccount.amount || 0)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 32 }}>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="分销商总余额" extra={
                <Button onClick={() => this.goAccounts(aClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(aClientAccount.amount || 0)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="产权方总余额" extra={
                <Button onClick={() => this.goAccounts(oClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(oClientAccount.amount || 0)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="养护方总余额" extra={
                <Button onClick={() => this.goAccounts(mClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(mClientAccount.amount || 0)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="商家总余额" extra={
                <Button onClick={() => this.goAccounts(bClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(bClientAccount.amount || 0)}</Card>
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <Card title="用户总余额" extra={
                <Button onClick={() => this.goAccounts(cClientAccount.type)} type="primary">资金分布</Button>
              }>¥{moneyFormat(cClientAccount.amount || 0)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="平台余额" extra={
                <Button onClick={() => this.goFlow(cnyAccount.accountNumber)} type="primary">资金流水</Button>
              }>¥{moneyFormat(cnyAccount.amount || 0)}</Card>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="积分池">
                <p>总额：¥{moneyFormat(jfAccount.totalAmount || 0)}</p>
                <p>余额：¥{moneyFormat(jfAccount.amount || 0)}</p>
                <p>历史总发放额：¥{moneyFormat(jfAccount.historyOutAmount || 0)}</p>
                <p>历史总回收额：¥{moneyFormat(jfAccount.historyInAmount || 0)}</p>
                <div style={{textAlign: 'center'}}>
                  <Button onClick={() => this.goAdd(jfAccount.currency)} type="primary">手动增发</Button>
                  <Button style={{marginLeft: 20}} onClick={() => this.goFlow(jfAccount.accountNumber)} type="primary">资金流水</Button>
                </div>
              </Card>
            </Col>
            <Col span={8} style={{marginBottom: '20px'}}>
              <Card title="碳泡泡池">
                <p>总额：¥{moneyFormat(tppAccount.totalAmount || 0)}</p>
                <p>余额：¥{moneyFormat(tppAccount.amount || 0)}</p>
                <p>历史总发放额：¥{moneyFormat(tppAccount.historyOutAmount || 0)}</p>
                <p>历史总回收额：¥{moneyFormat(tppAccount.historyInAmount || 0)}</p>
                <div style={{textAlign: 'center'}}>
                  <Button onClick={() => this.goAdd(tppAccount.currency)} type="primary">手动增发</Button>
                  <Button style={{marginLeft: 20}} onClick={() => this.goFlow(tppAccount.accountNumber)} type="primary">资金流水</Button>
                </div>
              </Card>
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
