import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg } from 'common/js/util';
import fetch from 'common/js/fetch';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class KeywordAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.check = getQueryString('check', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  checkComment(approveResult, params) {
    this.doFetching();
    params.approver = getUserId();
    params.approveResult = approveResult;
    fetch(629751, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    let fields = [{
      field: 'content',
      title: '内容',
      type: 'textarea'
    }, {
      field: 'status',
      title: '状态',
      type: 'select',
      key: 'comment_status',
      search: true
    }, {
      field: 'nickname',
      title: '评论人'
    }, {
      field: 'cName',
      title: '评论对象'
    }, {
      field: 'commentDatetime',
      title: '评论时间',
      type: 'datetime'
    }, {
      field: this.check ? 'approveNote' : 'remark',
      title: '审核说明',
      readonly: !this.check
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629756,
      buttons: [{
        title: '通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkComment(1, params);
        }
      }, {
        title: '不通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkComment(0, params);
        }
      }, {
        title: '返回',
        handler: (params) => {
          this.props.history.go(-1);
        }
      }]
    });
  }
}

export default KeywordAddedit;
