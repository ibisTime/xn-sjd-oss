import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ProductsAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.check = !!getQueryString('check', this.props.location.search);
    this.state = {
      ...this.state,
      direct: false,
      directLevel: false,
      directUser: false
    };
  }
  checkProduct(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    fetch(629403, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
    render() {
        let fields = [{
            title: '产品类型',
            field: 'parentCategoryCode',
            type: 'select',
            listCode: '629007',
            params: { status: '1', level: '2' },
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
            maxlength: 250,
          readonly: !this.check
        }];
        fields = fields.concat([]);
        let config = {
            fields,
            code: this.code,
            view: this.view,
            detailCode: 629416,
            addCode: 629400,
            editCode: 629401,
            beforeSubmit: (params, e) => {
              if(!e) {
                return false;
              }
            }
        };
          if (this.check) {
            config.buttons = [{
              title: '通过',
              check: true,
              type: 'primary',
              handler: (params) => {
                this.checkProduct(1, params);
              }
            }, {
              title: '不通过',
              check: true,
              type: 'primary',
              handler: (params) => {
                this.checkProduct(0, params);
              }
            }, {
              title: '返回',
              handler: (params) => {
                this.props.history.go(-1);
              }
            }];
          }
        return this.buildDetail(config);
    }
}

export default ProductsAddEdit;
