import React from 'react';
import { Form, Input, Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import { showSucMsg } from 'common/js/util';
import fetch from 'common/js/fetch';
import '../login/login.css';

const FormItem = Form.Item;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: '',
      fetching: false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ fetching: true });
        values.kind = 'O';
        fetch(630060, values).then(() => {
          this.setState({ fetching: false });
          showSucMsg('注册成功');
          setTimeout(() => {
            this.setState({ redirectTo: '/login' });
          }, 1500);
        }).catch(() => this.setState({ fetching: false }));
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-body">
        {this.state.redirectTo ? <Redirect to={this.state.redirectTo}/> : null}
        <div className="login-wrap">
          <div className="login-img"></div>
          <div className="login-form">
            <div className="login-logo"></div>
            <Form onSubmit={this.handleSubmit} className="login-form-wrapper">
              <FormItem className="form-item">
                {getFieldDecorator('mobile', {
                  rules: [{
                    required: true,
                    message: '请输入手机号!'
                  }, {
                    pattern: /^1[3|4|5|6|7|8|9]\d{9}$/,
                    message: '手机格式不对'
                  }]
                })(<Input placeholder="手机号"/>)}
              </FormItem>
              <FormItem className="form-item">
                {getFieldDecorator('loginPwd', {
                  rules: [{
                    required: true,
                    message: '请输入密码!'
                  }]
                })(<Input type="password" placeholder="密码"/>)}
              </FormItem>
              <FormItem className="button-wrap">
                <Button type="primary" htmlType="submit" loading={this.state.fetching}
                        className="login-form-button">注册</Button>
              </FormItem>
            </Form>
            <div className="bottom-tip">
              <div className="tip-border"></div>
              <div className="tip-text">已有帐号？<Link to='/login'>去登录</Link></div>
              <div className="tip-border"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Register);
