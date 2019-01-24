import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ArticlesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.check = !!getQueryString('check', this.props.location.search);
  }
  // 新增修改文章
  saveArticle(dealType, params) {
    this.doFetching();
    params.dealType = dealType;
    params.publishUserId = getUserId();
    let bizCode = this.code ? 629341 : 629340;
    fetch(bizCode, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  // 审核文章
  checkArticle(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    fetch(629342, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    let fields = [{
      title: '树木编号',
      field: 'treeNo',
      type: 'select',
      pageCode: 629035,
      keyName: 'treeNumber',
      valueName: '{{scientificName.DATA}} {{treeNumber.DATA}}',
      required: true
    }, {
      title: '标题',
      field: 'title',
      required: true
    }, {
      title: '内容',
      field: 'content',
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      title: '照片',
      field: 'photo',
      type: 'img',
      required: true
    }];
    let config = {
      code: this.code,
      view: this.view,
      detailCode: 629346
    };
    // 新增、修改
    if (!this.view) {
      fields = fields.concat([{
        title: '公开程度',
        field: 'openLevel',
        hidden: true,
        value: '1'
      }, {
        title: '类型',
        field: 'type',
        hidden: true,
        value: '1'
      }]);
      config.buttons = [{
        title: '保存',
        type: 'primary',
        handler: (params) => {
          this.saveArticle(0, params);
        }
      }, {
        title: '提交',
        type: 'primary',
        check: true,
        handler: (params) => {
          this.saveArticle(1, params);
        }
      }, {
        title: '返回',
        handler: (params) => {
          this.props.history.go(-1);
        }
      }];
    } else {
      fields = [{
        title: '公开程度',
        field: 'openLevel',
        type: 'select',
        key: 'article_open_level'
      }, {
        title: '类型',
        field: 'type',
        type: 'select',
        key: 'article_type'
      }].concat(fields);
      if (this.check) {
        config.buttons = [{
          title: '通过',
          check: true,
          type: 'primary',
          handler: (params) => {
            this.checkArticle(1, params);
          }
        }, {
          title: '不通过',
          check: true,
          type: 'primary',
          handler: (params) => {
            this.checkArticle(0, params);
          }
        }, {
          title: '返回',
          handler: (params) => {
            this.props.history.go(-1);
          }
        }];
      } else {
        fields = fields.concat([{
          title: '收藏总数',
          field: 'collectCount'
        }, {
          title: '点赞总数',
          field: 'pointCount'
        }, {
          title: '阅读总数',
          field: 'readCount'
        }, {
          title: '状态',
          field: 'status',
          type: 'select',
          key: 'article_status'
        }, {
          title: 'UI位置',
          field: 'location',
          type: 'select',
          data: [{
            key: '0',
            value: '普通'
          }, {
            key: '1',
            value: '热门'
          }],
          keyName: 'key',
          valueName: 'value'
        }, {
          title: 'UI次序',
          field: 'orderNo'
        }, {
          title: '发布时间',
          field: 'publishDatetime',
          type: 'datetime'
        }]);
      }
    }
    config.fields = fields;
    return this.buildDetail(config);
  }
}

export default ArticlesAddEdit;
