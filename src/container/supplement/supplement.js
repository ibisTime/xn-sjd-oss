import React from 'react';
import { Form, Alert, Card } from 'antd';
import { getQueryString, getUserId, getKindByUrl, isUndefined, judgeStatus } from 'common/js/util';
import { isFullUser } from 'api/user';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Supplement extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getUserId();
    this.kind = getKindByUrl();
    console.log(this.kind);
    this.state = {
      ...this.state,
      readonly: false,
      isFailed: false
    };
  }
  componentWillUnmount() {
    let bizCode = getKindByUrl() === 'A' ? 730086 : 630067;
    // let bizCode = 730086;
    fetch(bizCode, { userId: getUserId() }).then(data => {
      let url = judgeStatus(data.status);
      console.log(url);
      if (url) {
        this.props.history.replace(url);
      }
    });
  }
  getExtra() {
    // TO_FILL("-1", "待填写资料"), TO_APPROVE("0", "待审核"), APPROVE_NO("1", "审核不通过"), NORMAL(
    // "2", "审核通过/正常"), Li_Locked("3", "程序锁定"), Ren_Locked("4", "人工锁定");
    let { pageData } = this.state;
    if (pageData) {
      return pageData.status === '0'
        ? '资料审核中，请耐心等待'
        : pageData.status === '1'
          ? '资料审核不通过，请重新填写资料' : '';
    }
    return '';
  }
  addBtns(config) {
    let { pageData } = this.state;
    if (pageData && (pageData.status === '1' || pageData.status === '-1')) {
      config.buttons = [{
        title: '提交审核',
        type: 'primary',
        check: true,
        handler: (params) => {
          this.doFetching();
          let bizCode = this.kind === 'A' ? 730073 : 630061;
          // let bizCode = 730073;
          fetch(bizCode, params).then(() => {
            let code = this.kind === 'A' ? 730086 : 630067;
            // let code = 730086;
            fetch(code, { userId: this.code }).then((data) => {
              this.setState({
                readonly: true,
                pageData: data
              });
              this.cancelFetching();
            }).then(this.cancelFetching);
          }).catch(this.cancelFetching);
        }
      }];
    } else {
      config.buttons = [];
    }
  }
  getIsTop() {
    let { pageData } = this.state;
    return (isUndefined(pageData) || isUndefined(pageData.parentUserId) ||
      pageData.parentUserId === '0') ? '1' : '0';
  }
  getFieldsByKind() {
    return this.kind === 'A' ? [{
      title: '上级代理手机号',
      field: 'refUserMobile',
      formatter: (v, d) => d.parentAgentUser ? d.parentAgentUser.mobile : '',
      required: false
    }, {
      title: '公司/组织名称',
      field: 'name',
      _keys: ['company', 'name'],
      placeholder: '若您是个人请直接填写姓名',
      required: true
    }, {
      title: '负责人',
      field: 'charger',
      _keys: ['company', 'charger'],
      required: true
    }, {
      title: '负责人联系方式',
      field: 'chargeMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true,
      required: true
    }, {
      title: '辖区',
      field: 'province',
      type: 'citySelect',
      formatter: (v, d) => {
        let result = [];
        if (d.company) {
          let prov = d.company.province;
          if (prov) {
              let city = d.company.city ? d.company.city : '全部';
              let area = d.company.area ? d.company.area : '全部';
              result = [prov, city, area];
          } else {
              result = [];
          }
        }
        return result;
      },
      required: true
    }, {
      title: '地址',
      field: 'address',
      _keys: ['company', 'address'],
      required: true
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      _keys: ['company', 'bussinessLicense'],
      type: 'img',
      single: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode']
    }, {
      title: '备注',
      field: 'remark'
    }] : [{
      title: '公司/组织名称',
      field: 'companyName',
      _keys: ['company', 'name'],
      placeholder: '若您是个人请直接填写姓名',
      required: true
    }, {
      title: '负责人',
      field: 'companyCharger',
      _keys: ['company', 'charger'],
      required: true
    }, {
      title: '负责人联系方式',
      field: 'chargerMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true,
      required: true
    }, {
      title: '地址',
      field: 'companyAddress',
      _keys: ['company', 'address'],
      required: true
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      _keys: ['company', 'bussinessLicense'],
      type: 'img',
      single: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode']
    }, {
      title: '备注',
      field: 'remark',
      hidden: this.state.readonly
    }, {
      title: '备注',
      field: 'remark',
      _keys: ['company', 'remark'],
      hidden: !this.state.readonly
    }];
  }
  render() {
    let fields = this.getFieldsByKind();
    let config = {
      fields,
      key: 'userId',
      code: this.code,
      view: this.state.readonly,
      detailCode: this.kind === 'A' ? 730086 : 630067,
      // detailCode: 730086,
      afterDetail: () => {
        let userInfo = this.state.pageData;
        // TO_FILL("-1", "待填写资料"), TO_APPROVE("0", "待审核"), APPROVE_NO("1", "审核不通过"), NORMAL(
        // "2", "审核通过/正常"), Li_Locked("3", "程序锁定"), Ren_Locked("4", "人工锁定");
        if (userInfo.status === '0') {
          this.setState({ readonly: true });
        } else if (userInfo.status === '1' || userInfo.status === '-1') {
          this.setState({ isFailed: userInfo.status === '1' });
        } else {
          this.props.history.push('/');
        }
      }
    };
    this.addBtns(config);
    return (
      <div style={{ padding: 40 }}>
        <Card title="补充资料" extra={this.getExtra()}>
          {this.buildDetail(config)}
        </Card>
      </div>
    );
  }
}

export default Supplement;
