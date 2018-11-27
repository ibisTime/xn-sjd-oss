import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class PreSaleProductEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.state = {
      ...this.state
    };
  }
  // componentDidMount() {
  //   let userKind = getUserKind();
  //   this.setState({ userKind });
  //   getUserDetail(getUserId()).then((data) => {
  //     this.setState({ 'projectCode': data.projectCode });
  //   });
  // }
  addBtns(config) {
    config.buttons = [{
      title: '保存编辑',
      type: 'primary',
      check: true,
      handler: (params) => {
        this.doFetching();
        params.ownerId = getUserId();
          let url;
          if(!this.code) {
            url = 629400;
          }else {
            url = 629401;
          }
          fetch(url, params).then(() => {
              showSucMsg('操作成功');
              this.cancelFetching();
              // this.props.history.push('/own/preSaleProducts');
          }).catch(this.cancelFetching);
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
        level: '2',
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: '1'
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
          // level: '2',
          orderColumn: 'order_no',
          orderDir: 'asc'
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
      title: '产品小类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: { status: '1', level: '3', type: '1' },
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
      title: '年限',
      field: 'adoptYear',
      required: true,
      number: true
    }, {
      title: '属地',
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
      title: '单棵树产量',
      field: 'singleOutput',
      required: true
    }, {
      title: '产量单位',
      field: 'outputUnit',
      type: 'select',
      key: 'output_unit',
      required: true
    }, {
      title: '包装重量',
      field: 'packWeight',
      required: true
    }, {
      title: '包装单位',
      field: 'packUnit',
      type: 'select',
      key: 'pack_unit',
      required: true
    }, {
      title: '预售时间',
      field: 'adoptDatetime',
      type: 'date',
      rangedate: ['adoptStartDatetime', 'adoptEndDatetime'],
      required: true
    }, {
      title: '预计收获时间',
      field: 'harvestDatetime',
      type: 'date',
      required: true
    }, {
      title: '预计发货时间',
      field: 'deliverDatetime',
      type: 'date',
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
      title: '最大积分抵扣比例(%)',
      field: 'maxJfdkRate',
      number: true,
      required: true
    }, {
      title: '价格列表',
      field: 'presellSpecsList',
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
          title: '包装数量',
          field: 'packCount',
          required: true
        }, {
          title: '价格',
          field: 'price',
          amount: true,
          required: true
        }, {
          title: '间隔(小时)',
          field: 'intervalHours'
        }, {
          title: '涨幅(%)',
          field: 'increase'
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
        detail: true,
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
          title: '纬度',
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
      title: '产品描述',
      field: 'description',
      type: 'textarea',
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    fields = fields.concat([]);
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629416,
      addCode: 629400,
      editCode: 629401,
      beforeSubmit: (params) => {
        params.ownerId = getUserId();
        return params;
      }
    };
    if (!this.code) {
      this.addBtns(config);
    }
    return this.buildDetail(config);
  }
}

export default PreSaleProductEdit;
