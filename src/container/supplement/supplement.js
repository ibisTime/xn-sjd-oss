import React from 'react';
import { Form, Alert, Card } from 'antd';
import { getQueryString, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Supplement extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getUserId();
    this.state = {
      ...this.state,
      readonly: false,
      isFailed: false
    };
  }
  getExtra() {
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
    if (pageData && (pageData.status === '1' || pageData.status === '6')) {
      config.buttons = [{
        title: '提交审核',
        type: 'primary',
        check: true,
        handler: (params) => {
          this.doFetching();
          // 630300填写公司资料 630302修改公司信息
          let bizCode = pageData.status === '1' ? 630302 : 630300;
          fetch(bizCode, params).then(() => {
            this.setState({
              readonly: true,
              pageData: {
                ...pageData,
                status: '0'
              }
            });
            this.cancelFetching();
          }).catch(this.cancelFetching);
        }
      }];
    } else {
      config.buttons = [];
    }
  }
  render() {
    const fields = [{
      title: '名称',
      field: 'companyName',
      required: true
    }, {
      title: '负责人',
      field: 'companyCharger',
      required: true
    }, {
      title: '联系方式',
      field: 'chargerMobile',
      mobile: true,
      required: true
    }, {
      title: '地址',
      field: 'companyAddress',
      required: true
    }, {
      title: '简介',
      field: 'description',
      type: 'textarea',
      normalArea: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      type: 'img',
      single: true
    }, {
      title: '上传合同模版',
      field: 'contractTemplate',
      type: 'file'
    }, {
      title: '上传证书模版',
      field: 'certificateTemplate',
      type: 'file'
    }];
    let config = {
      fields,
      key: 'userId',
      code: this.code,
      view: this.state.readonly,
      detailCode: 630067,
      editCode: 630302,
      afterDetail: () => {
        let userInfo = this.state.pageData;
        // 0 待审核 1 审核不通过 2 合伙中 3 已解除合伙 4 已注销 5 正常 6 待填写公司资料
        if (userInfo.status === '0') {
          this.setState({ readonly: true });
        } else if (userInfo.status === '1' && userInfo.status === '6') {
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
