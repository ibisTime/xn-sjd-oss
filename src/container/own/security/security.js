import React from 'react';
import { Form, Input, Button, Spin, Row, Col, Card } from 'antd';
import { showSucMsg, getUserId, getKindByUrl } from 'common/js/util';
import { formItemLayout } from 'common/js/config';
import fetch from 'common/js/fetch';

const { Item: FormItem } = Form;
let time = 0;

@Form.create()
class Security extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      fetching: true,
      captText: '获取验证码',
      disabled: false,
      captFetching: false
    };
    this.kind = getKindByUrl();
  }
  componentDidMount() {
    let bizCode = this.kind === 'A' ? 730086 : 630067;
    fetch(bizCode, { userId: getUserId() }).then(userInfo => {
      this.setState({
        mobile: userInfo.mobile,
        fetching: false
      });
    }).catch(() => this.setState({ fetching: false }));
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  // 设置交易密码
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ fetching: true });
        values.userId = getUserId();
        let bizCode = this.kind === 'A' ? 730082 : 630070;
        fetch(bizCode, values).then((code) => {
          showSucMsg('操作成功');
          this.setState({ fetching: false });
        }).catch(() => this.setState({ fetching: false }));
      }
    });
  }
  // 获取验证码
  getSmsCode = (e) => {
    e.preventDefault();
    this.props.form.validateFields(['mobile'], (err, values) => {
      if (!err) {
        this.setState({ captFetching: true, disabled: true });
        fetch(630090, {
          mobile: this.state.mobile,
          bizType: this.kind === 'A' ? 730082 : 630070
        }).then(() => {
          this.setState({ captFetching: false });
          this.sendSmsSuc();
        }).catch(() => this.setState({ captFetching: false, disabled: false }));
      }
    });
  }
  // 验证码发送成功，进入60s倒计时
  sendSmsSuc() {
    time++;
    if (time === 60) {
      time = 0;
      clearTimeout(this.timer);
      this.setState({ disabled: false, captText: '获取验证码' });
    } else {
      this.setState({ captText: `${60 - time}s` });
      this.timer = setTimeout(() => {
        this.sendSmsSuc();
      }, 1000);
    }
  }
  render() {
    const { fetching, mobile, captFetching, disabled, captText } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={fetching}>
        <Card title="交易密码设置">
          <Form className="detail-form-wrapper" onSubmit={this.handleSubmit}>
            <FormItem key='mobile' {...formItemLayout} label='手机号'>
              <div className="readonly-text">{mobile}</div>
            </FormItem>
            <FormItem key='smsCaptcha' {...formItemLayout} label='验证码'>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('smsCaptcha', {
                    rules: [{ required: true, message: '请输入验证码' }]
                  })(<Input placeholder="验证码" />)}
                </Col>
                <Col span={12}>
                  <Button
                    style={{minWidth: 102}}
                    onClick={this.getSmsCode}
                    loading={captFetching}
                    disabled={disabled} >{captText}</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem key='tradePwd' {...formItemLayout} label='交易密码'>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('tradePwd', {
                    rules: [{
                      required: true,
                      message: '请输入交易密码!'
                    }]
                  })(<Input type="password" placeholder="交易密码"/>)}
                </Col>
              </Row>
            </FormItem>
            <FormItem className="cform-item-btn" key='btns' {...formItemLayout} label="&nbsp;">
              <Button type="primary" htmlType="submit">保存</Button>
            </FormItem>
          </Form>
        </Card>
      </Spin>
    );
  }
}

export default Security;
