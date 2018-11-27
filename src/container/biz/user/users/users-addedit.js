import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class UsersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.state = {
      ...this.state,
      companyAuthStatusFlag: false,
      personAuthStatusFlag: false
    };
  }
  render() {
    const fields = [{
      title: '手机号',
      field: 'mobile'
    }, {
      title: '推荐人',
      field: 'mobile',
      formatter: (v, d) => d.refereeUser ? d.refereeUser.mobile : ''
    }, {
      title: '昵称',
      field: 'nickname'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'user_status'
    }, {
      title: '注册时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '认证状态',
      field: 'authStatus',
      _keys: ['userExt', 'authStatus'],
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '未认证'
      }, {
        dkey: '1',
        dvalue: '已认证'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      search: true,
      onChange: (v) => {
        console.log(this.state.pageData);
        if(this.state.pageData.userExt.companyAuthStatus) {
          this.setState({ companyAuthStatusFlag: true, personAuthStatusFlag: false });
          // this.companyAuthStatus = true;
          // this.personAuthStatus = false;
        } else {
          this.setState({ companyAuthStatusFlag: false, personAuthStatusFlag: true });
          // this.companyAuthStatus = false;
          // this.personAuthStatus = true;
        }
      }
    }, {
      title: '认证类型',
      field: 'personAuthStatus',
      value: '个人认证',
      hidden: this.state.companyAuthStatusFlag
    }, {
      title: '真实姓名',
      field: 'realName',
      hidden: this.state.companyAuthStatusFlag
    }, {
      title: '身份证号',
      field: 'idNo',
      hidden: this.state.companyAuthStatusFlag
    }, {
      title: '简介',
      field: 'introduce',
      _keys: ['userExt', 'introduce'],
      hidden: this.state.companyAuthStatusFlag
    }, {
      title: '身份证照',
      field: 'idPic',
      _keys: ['userExt', 'idPic'],
      type: 'img',
      hidden: this.state.companyAuthStatusFlag
    }, {
      title: '认证类型',
      field: 'companyAuthStatus',
      value: '企业认证',
      hidden: this.state.personAuthStatusFlag
    }, {
      title: '企业名称',
      field: 'companyName',
      _keys: ['userExt', 'companyName'],
      hidden: this.state.personAuthStatusFlag
    }, {
      title: '营业执照号',
      field: 'bussinessLicenseId',
      _keys: ['userExt', 'bussinessLicenseId'],
      hidden: this.state.personAuthStatusFlag
    }, {
      title: '简介',
      field: 'companyIntroduce',
      _keys: ['userExt', 'companyIntroduce'],
      hidden: this.state.personAuthStatusFlag
    }, {
      title: '营业执照照片',
      field: 'bussinessLicense',
      _keys: ['userExt', 'bussinessLicense'],
      type: 'img',
      hidden: this.state.personAuthStatusFlag
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 805121
    });
  }
}

export default UsersAddEdit;
