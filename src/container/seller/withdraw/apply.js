import React from 'react';
import { Form, Card, Alert, Button, Spin } from 'antd';
import { getRules, showSucMsg, showWarnMsg, getUserId, moneyFormat,
  getKindByUrl, isUndefined } from 'common/js/util';
import { formItemLayout } from 'common/js/config';
import CInput from 'component/cInput/cInput';
import CSelect from 'component/cSelect/cSelect';
import fetch from 'common/js/fetch';

const { Item: FormItem } = Form;

@Form.create()
class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      montimes: '',
      qxbs: '',
      dbzdje: '',
      rate: '',
      dzts: '',
      bankList: [],
      account: {},
      fee: 0,
      fetching: true
    };
    this.kind = getKindByUrl();
    // this.kind = 'B';
  }
  componentDidMount() {
    Promise.all([
      fetch(630045, { type: 'WITH', start: 1, limit: 10 }),
      fetch(802301, { userId: getUserId(), currency: 'CNY' }),
      fetch(802026, { userId: getUserId() })
    ]).then(([rules, accounts, bankCards]) => {
      let montimes;
      let qxbs;
      let dbzdje;
      let rate;
      let dzts;
      rules.list.forEach(v => {
        // 每月取现次数
        if (v.ckey === 'USERMONTIMES') {
          montimes = v.cvalue;
          // 取现金额倍数
        } else if (v.ckey === 'USERQXBS') {
          qxbs = v.cvalue;
          // 取现单笔最大金额
        } else if (v.ckey === 'QXDBZDJE') {
          dbzdje = v.cvalue;
          // 取现手续费率
        } else if (v.ckey === 'USERQXFL') {
          rate = v.cvalue;
          // 取现到账天数
        } else if (v.ckey === 'USERDZTS') {
          dzts = v.cvalue;
        }
      });
      this.setState({
        montimes,
        qxbs,
        dbzdje,
        rate,
        dzts,
        account: accounts[0],
        bankList: bankCards,
        fetching: false
      });
    }).catch(() => this.setState({ fetching: false }));
  }
  getInfos() {
    const { montimes, qxbs, dbzdje, rate, dzts } = this.state;
    return (<div>
      <div>取现到账天数: T + {dzts}</div>
      <div>取现手续费率: {rate}</div>
      <div>取现单笔最大金额: {dbzdje}</div>
      <div>取现金额倍数: {qxbs}</div>
      <div>每月取现次数: {montimes}</div>
    </div>);
  }
  // 获取输入框类型的控件
  getInputComp(item, rules, initVal, onChange) {
    const props = {
      rules,
      initVal,
      onChange,
      title: item.title,
      field: item.field,
      label: item.title,
      type: item.type,
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
      rules: getRules({ required: true }),
      field: 'payCardInfo',
      label: '收款卡号',
      keyName: 'code',
      valueName: '{{bankName.DATA}} {{bankcardNumber.DATA}}',
      getFieldDecorator: this.props.form.getFieldDecorator,
      getFieldValue: this.props.form.getFieldValue,
      getFieldError: this.props.form.getFieldError,
      list: this.state.bankList
    };
    return <CSelect key='payCardInfo' {...props} />;
  }
  // 提现
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { account, dbzdje, qxbs } = this.state;
        values.amount *= 1000;
        if (account.amount < values.amount) {
          showWarnMsg('提现金额不能大于可用余额');
          return;
        }
        if (dbzdje * 1000 < values.amount) {
          showWarnMsg('提现金额不能大于取现大笔最大金额');
          return;
        }
        if (values.amount % (qxbs * 1000)) {
          showWarnMsg('提现金额必须为取现金额倍数的整数倍');
          return;
        }
        this.setState({ fetching: true });
        let code = values.payCardInfo;
        let bankInfo = this.state.bankList.find(v => v.code === code);
        values.applyUser = getUserId();
        values.payCardInfo = bankInfo.bankName + bankInfo.subbranch;
        values.payCardNo = bankInfo.bankcardNumber;
        values.accountNumber = account.accountNumber;
        values.applyUserType = this.kind;
        fetch(802350, values).then((code) => {
          showSucMsg('操作成功');
          this.setState({ fetching: false });
          setTimeout(() => {
            this.props.history.go(-1);
          }, 1000);
        }).catch(() => this.setState({ fetching: false }));
      }
    });
  }
  // 返回
  back = () => {
    this.props.history.go(-1);
  }
  // 取现金额改变时费率跟着变动
  handleAmountChange = (v) => {
    const { rate } = this.state;
    if (isUndefined(v) || isNaN(v)) {
      this.setState({ fee: 0 });
    } else {
      this.setState({ fee: v * 1000 * rate });
    }
  }
  render() {
    const { fetching, account, fee } = this.state;
    return (
      <Spin spinning={fetching}>
        <Alert
          message="提现说明"
          description={this.getInfos()}
          type="info"
        />
        <Card title="提现信息" style={{marginTop: 40}}>
          <Form className="detail-form-wrapper" onSubmit={this.handleSubmit}>
            {this.getInputComp({ title: '可用余额', field: 'enableAmount', readonly: true },
              getRules({}), moneyFormat(account.amount))}
            {this.getInputComp({ title: '取现金额', field: 'amount' },
              getRules({ required: true, amount: true }), '', this.handleAmountChange)}
            {this.getInputComp({ title: '手续费', field: 'fee', readonly: true },
              getRules({}), moneyFormat(fee))}
            {this.getBankSelectComp()}
            {this.getInputComp({ title: '取现说明', field: 'applyNote' },
              getRules({ required: true, maxlength: 40 }))}
            {this.getInputComp({ title: '交易密码', field: 'tradePwd', type: 'password' },
              getRules({ required: true }))}
            <FormItem className="cform-item-btn" key='btns' {...formItemLayout} label="&nbsp;">
              <Button type="primary" htmlType="submit" style={{marginRight: 20}}>提交申请</Button>
              <Button onClick={this.back}>返回</Button>
            </FormItem>
          </Form>
        </Card>
      </Spin>
    );
  }
}

export default Apply;
