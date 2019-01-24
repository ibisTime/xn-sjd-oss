import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class TreesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.productType = getQueryString('productType', this.props.location.search); // 0 认养  1  预售
  }
  render() {
    const fields = [{
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '所属产品',
      field: 'productName'
    }, {
      title: '产权方',
      field: 'ownerName'
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
      field: 'longitude',
      hidden: this.productType === '1'
    }, {
      title: '纬度',
      field: 'latitude',
      hidden: this.productType === '1'
    }, {
      title: '实景图',
      field: 'pic',
      type: 'img'
    }, {
      title: '被认养次数',
      field: 'adoptCount'
    }, {
      title: '文章数',
      field: 'articleCount'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629036
    });
  }
}

export default TreesAddEdit;
