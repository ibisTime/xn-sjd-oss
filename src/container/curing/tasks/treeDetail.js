import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class CuringTasksTreeDetail extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
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

export default CuringTasksTreeDetail;
