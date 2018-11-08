import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TypesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.state = {
      ...this.state,
      isTop: true,
      type: '0'
    };
  }
  render() {
    const fields = [{
      title: '名称',
      field: 'name',
      required: true
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '认养'
      }, {
        dkey: '1',
        dvalue: '预售'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      required: true,
      onChange: (v) => {
        this.setState({ type: v });
      }
    }, {
      // 认养
      title: '上级编号',
      field: 'parentCode',
      type: 'select',
      listCode: '629007',
      params: {
        status: 1,
        level: 1,
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: 0
      },
      keyName: 'code',
      valueName: 'name',
      onChange: (v) => {
        if (v && this.state.isTop) {
          this.setState({ isTop: false });
        } else if (!v && !this.state.isTop) {
          this.setState({ isTop: true });
        }
      },
      hidden: this.state.type === '1' || this.view
    }, {
      // 预售
      title: '上级编号',
      field: 'parentCode1',
      type: 'select',
      listCode: '629007',
      params: {
        status: 1,
        level: 2,
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: 1
      },
      keyName: 'code',
      valueName: 'name',
      onChange: (v) => {
        if (v && this.state.isTop) {
          this.setState({ isTop: false });
        } else if (!v && !this.state.isTop) {
          this.setState({ isTop: true });
        }
      },
      hidden: this.state.type === '0' || this.view
    }, {
      // 预售
      title: '上级编号',
      field: 'parentCode12',
      type: 'select',
      listCode: '629007',
      params: {
        status: 1,
        level: 2,
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: 1
      },
      keyName: 'code',
      valueName: 'name',
      formatter: (v, d) => {
        return d.parentCode;
      },
      hidden: !this.view
    }, {
      title: '图片',
      field: 'pic',
      type: 'img',
      single: true,
      required: this.state.isTop && this.type === '0'
    }, {
      title: '次序',
      field: 'orderNo',
      help: '数字越小，排序越靠前',
      integer: true,
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629006,
      addCode: 629000,
      editCode: 629001,
      beforeSubmit: (params) => {
        params.parentCode = params.parentCode || params.parentCode1;
        params.parentCode1 && delete params.parentCode1;
        return params;
      }
    });
  }
}

export default TypesAddEdit;
