import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TreesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '所属产品',
      field: 'productName'
    }, {
      title: '品种',
      field: 'variety'
    }, {
      title: '树龄',
      field: 'age'
    }, {
      title: '区域',
      field: 'province',
      type: 'citySelect'
    }, {
      title: '乡政/街道',
      field: 'town'
    }, {
      title: '经度',
      field: 'longitude'
    }, {
      title: '纬度',
      field: 'latitude'
    }, {
      title: '实景图',
      field: 'pic',
      type: 'img'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tree_status'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629036,
      buttons: [{
        title: '打开地图链接',
        check: true,
        type: 'primary',
        handler: (params) => {
          window.open(`//uri.amap.com/marker?position=${this.state.pageData.longitude},${this.state.pageData.latitude}`);
          // window.open(`//uri.amap.com/marker?position=116.397726,39.903767`);
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

export default TreesAddEdit;
