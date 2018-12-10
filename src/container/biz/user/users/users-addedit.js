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
      personAuthStatusFlag: false,
      auth: false
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
      type: 'datetime',
      onChange: (v) => {
        if(this.state.pageData.userExt.authStatus) {
          this.setState({ auth: true });
        }
        if(this.state.pageData.userExt.companyAuthStatus) {
          this.setState({ companyAuthStatusFlag: true, personAuthStatusFlag: false });
        } else if(this.state.pageData.userExt.personAuthStatus) {
          this.setState({ companyAuthStatusFlag: false, personAuthStatusFlag: true });
        }
      }
    }, {
      title: '认证状态',
      field: 'authStatus',
      value: '已认证',
      hidden: !this.state.auth
    }, {
      title: '认证状态',
      field: 'authStatus',
      value: '未认证',
      hidden: this.state.auth
    }, {
      title: '认证类型',
      field: 'personAuthStatus',
      value: '个人认证',
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
    }, {
      title: '真实姓名',
      field: 'realName',
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
    }, {
      title: '身份证号',
      field: 'idNo',
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
    }, {
      title: '简介',
      field: 'introduce',
      _keys: ['userExt', 'introduce'],
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
    }, {
      title: '身份证正面照',
      field: 'idPic',
      _keys: ['userExt', 'idPic'],
      type: 'img',
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
    }, {
      title: '身份证反面照',
      field: 'backIdPic',
      _keys: ['userExt', 'backIdPic'],
      type: 'img',
      hidden: !this.state.auth || this.state.companyAuthStatusFlag
  }, {
      title: '认证类型',
      field: 'companyAuthStatus',
      value: '企业认证',
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业名称',
      field: 'companyName',
      _keys: ['userExt', 'companyName'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业地址',
      field: 'companyAddress',
      _keys: ['userExt', 'companyAddress'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业法人姓名',
      field: 'companyChargerName',
      _keys: ['userExt', 'companyChargerName'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业法人联系方式',
      field: 'companyChargerMobile',
      _keys: ['userExt', 'companyChargerMobile'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业法人身份证',
      field: 'companyChargerIdNo',
      _keys: ['userExt', 'companyChargerIdNo'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业联系人',
      field: 'companyContactName',
      _keys: ['userExt', 'companyContactName'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业联系人电话',
      field: 'companyContactMobile',
      _keys: ['userExt', 'companyContactMobile'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业联系人地址',
      field: 'companyContactAddress',
      _keys: ['userExt', 'companyContactAddress'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业开户行',
      field: 'companyBank',
      _keys: ['userExt', 'companyBank'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业开户账号',
      field: 'companyBankNumber',
      _keys: ['userExt', 'companyBankNumber'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '企业注册统一码',
      field: 'bussinessLicenseId',
      _keys: ['userExt', 'bussinessLicenseId'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '简介',
      field: 'companyIntroduce',
      _keys: ['userExt', 'companyIntroduce'],
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '身份证正面照片',
      field: 'companyChargerIdPic',
      _keys: ['userExt', 'companyChargerIdPic'],
      type: 'img',
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '身份证反面照片',
      field: 'companyChargerBackIdPic',
      _keys: ['userExt', 'companyChargerBackIdPic'],
      type: 'img',
      hidden: !this.state.auth || this.state.personAuthStatusFlag
    }, {
      title: '营业执照照片',
      field: 'bussinessLicense',
      _keys: ['userExt', 'bussinessLicense'],
      type: 'img',
      hidden: !this.state.auth || this.state.personAuthStatusFlag
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
