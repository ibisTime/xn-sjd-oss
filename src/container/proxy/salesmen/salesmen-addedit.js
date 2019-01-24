import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ConserveAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'parentUserId',
      value: getUserId(),
      hidden: true
    }, {
      title: '手机号',
      field: 'mobile',
      required: true,
      mobile: true
    }, {
      title: '密码',
      field: 'loginPwd',
      type: 'password',
      required: true,
      maxlength: 30
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 730086,
      addCode: 730081
    });
  }
}

export default ConserveAddEdit;
