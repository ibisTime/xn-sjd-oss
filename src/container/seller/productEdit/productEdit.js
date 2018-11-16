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
    this.state = {
      ...this.state,
      direct: '',
      directLevel: false,
      directUser: false
    };
  }
  addBtns(config) {
    config.buttons = [{
      title: '保存编辑',
      type: 'primary',
      check: true,
      handler: (params) => {
        this.doFetching();
        fetch(630067, {
          userId: getUserId()
        }).then((data) => {
          params.shopCode = data.companyCode;
          fetch(629700, params).then(() => {
            showSucMsg('操作成功');
            this.cancelFetching();
          }).catch(this.cancelFetching);
        }).catch(() => {});
      }
    // }, {
    //   title: '重置',
    //   handler: (params) => {
    //     this.props.form.resetFields();
    //   }
    }];
  }
  render() {
    let fields = [{
      title: '产品大类',
      field: 'parentCategoryCode',
      type: 'select',
      listCode: '629007',
      params: {
        status: '1',
        level: '1',
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: 2
      },
      keyName: 'code',
      valueName: 'name',
      onChange: (v) => {
        this.setState({
          selectData: { ...this.state.selectData, categoryCode: [] }
        });
        this.props.form.resetFields(['categoryCode']);
        fetch(629007, {
          parentCode: v,
          status: '1',
          level: '2',
          orderColumn: 'order_no',
          orderDir: 'asc',
          type: 2
        }).then((data) => {
          this.setState({
            selectData: {
              ...this.state.selectData,
              categoryCode: data
            }
          });
        }).catch(() => {});
      },
      required: true
    }, {
      title: '小类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: { status: '1', level: '2', type: 2 },
      keyName: 'code',
      valueName: 'name',
      required: true
    }, {
      title: '名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '发货地',
      field: 'deliverPlace',
      type: this.view ? '' : 'provSelect',
      required: true
    }, {
      title: '重量(kg)',
      field: 'weight',
      required: true,
      number: true
    }, {
      title: '物流方式',
      field: 'logistics',
      type: 'select',
      key: 'logistics',
      required: true
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
      title: '产品规格列表',
      field: 'specsList',
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
          title: '价格',
          field: 'price',
          amount: true,
          required: true
        }, {
          title: '库存',
          field: 'inventory',
          number: true,
          required: true
        }]
      },
      required: true
    }, {
      title: '产品描述',
      field: 'description',
      type: 'textarea',
      required: true
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629707,
      addCode: 629700,
      editCode: 629701,
      beforeSubmit: (params) => {
        fetch(630067, {
          userId: getUserId()
        }).then((data) => {
          params.shopCode = data.companyCode;
          fetch(629701, params).then(() => {
            showSucMsg('操作成功');
            this.cancelFetching();
          }).catch(this.cancelFetching);
        }).catch(() => {});
      }
    };
    if (!this.code) {
      this.addBtns(config);
    }
    return this.buildDetail(config);
  }
}

export default ProductEdit;
