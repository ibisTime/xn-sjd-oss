import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ArticlesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '标题',
      field: 'title'
    }, {
      title: '公开程度',
      field: 'openLevel',
      type: 'select',
      key: 'article_open_level'
    }, {
      title: '内容',
      field: 'content'
    }, {
      title: '照片',
      field: 'photo'
    }, {
      title: '收藏总数',
      field: 'collectCount',
      formatter: (v, d) => {
         return d.collectCount ? d.collectCount : '0';
      }
    }, {
      title: '点赞总数',
      field: 'pointCount',
      formatter: (v, d) => {
          return d.pointCount ? d.pointCount : '0';
      }
    }, {
      title: '阅读总数',
      field: 'readCount',
      formatter: (v, d) => {
          return d.readCount ? d.readCount : '0';
      }
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
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629346
    });
  }
}

export default ArticlesAddEdit;
