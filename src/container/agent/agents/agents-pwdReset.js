import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class PwdReset extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('userId', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'userId',
      hidden: true,
      value: this.code
    }, {
      field: 'adminUserId',
      hidden: true,
      value: getUserId()
    }, {
      field: 'loginName',
      title: '用户名',
      readonly: true
    }, {
      title: '新密码',
      field: 'loginPwd',
      type: 'password'
    }, {
      title: '管理员密码',
      field: 'adminPwd',
      type: 'password'
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 730086,
      editCode: 730078
    });
  }
}

export default PwdReset;
