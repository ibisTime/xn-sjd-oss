import React from 'react';
import { Form, Card, Alert, Button, Spin } from 'antd';
import { getRules, showSucMsg, getUserId } from 'common/js/util';
import { formItemLayout } from 'common/js/config';
import { getUser } from 'api/user';
import CInput from 'component/cInput/cInput';
import CSelect from 'component/cSelect/cSelect';
import fetch from 'common/js/fetch';

const { Item: FormItem } = Form;

@Form.create()
class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {},
      bankList: [],
      mobile: '',
      fetching: true
    };
  }
  componentDidMount() {
    Promise.all([
      fetch(802026, { userId: getUserId() }),
      fetch(802116),
      getUser()
    ]).then(([bankCards, bankList, userInfo]) => {
      this.setState({
        pageData: bankCards.length ? bankCards[0] : {},
        bankList,
        mobile: userInfo.mobile,
        fetching: false
      });
    }).catch(() => this.setState({ fetching: false }));
  }
  getInfos() {
    return `手机号：${this.state.mobile}`;
  }
  // 获取输入框类型的控件
  getInputComp(item, initVal, rules) {
    const props = {
      rules,
      initVal,
      title: item.title,
      field: item.field,
      label: item.title,
      readonly: item.readonly,
      getFieldDecorator: this.props.form.getFieldDecorator,
      getFieldError: this.props.form.getFieldError,
      getFieldValue: this.props.form.getFieldValue
    };
    return <CInput key={item.field} {...props} />;
  }
  // 获取选择框类型的控件
  getBankSelectComp() {
    const props = {
      initVal: this.state.pageData.bankCode,
      rules: getRules({ required: true }),
      field: 'bankCode',
      label: '银行',
      keyName: 'bankCode',
      valueName: 'bankName',
      getFieldDecorator: this.props.form.getFieldDecorator,
      getFieldValue: this.props.form.getFieldValue,
      getFieldError: this.props.form.getFieldError,
      list: this.state.bankList
    };
    return <CSelect key='bankCode' {...props} />;
  }
  // 新增/保存银行卡
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let bankCode = values.bankCode;
        values.bankName = this.state.bankList.find(v => v.bankCode === bankCode).bankName;
        let bizCode = 802020;
        if (this.state.pageData.code) {
          bizCode = 802022;
          values.code = this.state.pageData.code;
        } else {
          values.userId = getUserId();
          values.currency = 'CNY';
          values.type = '1';
        }
        this.setState({ fetching: true });
        fetch(bizCode, values).then((code) => {
          showSucMsg('操作成功');
          if (bizCode === 802020) {
            values.code = code;
          }
          this.setState({
            pageData: {
              ...this.state.pageData,
              ...values
            },
            fetching: false
          });
        }).catch(() => this.setState({ fetching: false }));
      }
    });
  }
  render() {
    const { pageData, fetching } = this.state;
    return (
      <Spin spinning={fetching}>
        <Alert
          message="个人信息"
          description={this.getInfos()}
          type="info"
        />
        <Card title="银行卡信息" style={{marginTop: 40}}>
          <Form className="detail-form-wrapper" onSubmit={this.handleSubmit}>
            {this.getInputComp({ title: '姓名', field: 'realName', readonly: !!pageData.code },
              pageData.realName, getRules({ required: true, maxlength: 20 }))}
            {this.getInputComp({ title: '卡号', field: 'bankcardNumber' },
              pageData.bankcardNumber, getRules({ required: true, bankCard: true }))}
            {this.getBankSelectComp()}
            {this.getInputComp({ title: '支行', field: 'subbranch' },
              pageData.subbranch, getRules({ required: true, maxlength: 30 }))}
            {this.getInputComp({ title: '绑定手机号', field: 'bindMobile' },
              pageData.bindMobile, getRules({ required: true, mobile: true }))}
            <FormItem className="cform-item-btn" key='btns' {...formItemLayout} label="&nbsp;">
              <Button type="primary" htmlType="submit">保存</Button>
            </FormItem>
          </Form>
        </Card>
      </Spin>
    );
  }
}

export default Infos;
