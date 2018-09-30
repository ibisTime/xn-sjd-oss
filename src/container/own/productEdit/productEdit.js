import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ProductEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  addBtns(config) {
    config.buttons = [{
      title: '保存编辑',
      type: 'primary',
      check: true,
      handler: (params) => {
        this.doFetching();
        params.ownerId = getUserId();
        fetch(629010, params).then(() => {
          showSucMsg('操作成功');
          this.cancelFetching();
        }).catch(this.cancelFetching);
      }
    }, {
      title: '重置',
      handler: (params) => {
        this.props.form.resetFields();
      }
    }];
  }
  render() {
    const fields = [{
      title: '产品分类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: { status: '1' },
      keyName: 'code',
      valueName: 'name',
      required: true
    }, {
      title: '名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '学名',
      field: 'scientificName',
      required: true,
      maxlength: 30
    }, {
      title: '级别',
      field: 'rank',
      required: true,
      maxlength: 30
    }, {
      title: '品种',
      field: 'variety',
      required: true,
      maxlength: 30
    }, {
      title: '产地',
      field: 'originPlace',
      required: true,
      maxlength: 30
    }, {
      title: '区域',
      field: 'province',
      type: 'citySelect',
      required: true
    }, {
      title: '乡政/街道',
      field: 'town',
      required: true,
      maxlength: 30
    }, {
      title: '列表图片',
      field: 'listPic',
      type: 'img',
      single: true,
      required: true
    }, {
      title: '详情Banner图片',
      field: 'bannerPic',
      type: 'img',
      required: true
    }, {
      title: '销售分类',
      field: 'sellType',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '个人'
      }, {
        dkey: '1',
        dvalue: '定向'
      }, {
        dkey: '2',
        dvalue: '捐赠'
      }, {
        dkey: '3',
        dvalue: '集体'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      required: true
    }, {
      title: '募集时间',
      field: 'raiseStartDatetime',
      type: 'date',
      rangedate: ['raiseStartDatetime', 'raiseEndDatetime']
    }, {
      title: '募集总数',
      field: 'raiseCount'
    }, {
      title: '产品规格列表',
      field: 'productSpecsList',
      type: 'o2m',
      options: {
        add: true,
        edit: true,
        delete: true,
        fields: [{
          title: '名称',
          field: 'name',
          required: true
        }, {
          title: '认养价格',
          field: 'price',
          amount: true,
          required: true
        }, {
          title: '认养年限',
          field: 'year',
          'Z+': true,
          required: true
        }, {
          title: '认养时间',
          field: 'startDatetime',
          type: 'date',
          rangedate: ['startDatetime', 'endDatetime'],
          required: true
        }]
      },
      required: true
    }, {
      title: '树木列表',
      field: 'treeList',
      type: 'o2m',
      options: {
        add: true,
        edit: true,
        delete: true,
        fields: [{
          title: '树木编号',
          field: 'treeNumber',
          required: true
        }, {
          title: '树龄',
          field: 'age',
          required: true
        }, {
          title: '经度',
          field: 'longitude',
          required: true
        }, {
          title: '维度',
          field: 'latitude',
          required: true
        }, {
          title: '实景图',
          field: 'pic',
          type: 'img'
        }, {
          title: '备注',
          field: 'remark'
        }]
      },
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629026,
      addCode: 629010,
      editCode: 629011,
      beforeSubmit: (params) => {
        params.ownerId = getUserId();
      }
    };
    if (!this.code) {
      this.addBtns(config);
    }
    return this.buildDetail(config);
  }
}

export default ProductEdit;
