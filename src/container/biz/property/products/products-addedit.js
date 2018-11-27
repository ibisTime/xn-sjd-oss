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
    fetch(629013, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
    render() {
        let fields = [{
            title: '产品分类',
            field: 'parentCategoryCode',
            type: 'select',
            listCode: '629007',
            params: {
                status: '1',
                level: '1',
                orderColumn: 'order_no',
                orderDir: 'asc'
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
            title: '小类',
            field: 'categoryCode',
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
            title: '古树产地',
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
            title: '认养分类',
            field: 'sellType',
            type: 'select',
            key: 'sell_type',
            required: true,
            onChange: (v) => {
                // console.log(v);
                // let direct = v === '2';
                // if (direct !== this.state.direct) {
                //   this.setState({ direct });
                // }
                // let direct = v;
                // if (direct !== this.state.direct) {
                //   this.setState({ direct });
                // }
                this.setState({ direct: v });
            }
        }, {
            title: '定向类型',
            field: 'directType',
            type: 'select',
            data: [{
                dkey: '1',
                dvalue: '针对某一等级用户'
            }, {
                dkey: '2',
                dvalue: '针对个人用户'
            }],
            // hidden: !this.state.direct,
            // required: this.state.direct,
            hidden: this.state.direct !== '2',
            required: this.state.direct === '2',
            onChange: (v) => {
                if (v === '1' && !this.state.directLevel) {
                    this.setState({ directLevel: true, directUser: false });
                } else if (v === '2' && !this.state.directUser) {
                    this.setState({ directUser: true, directLevel: false });
                }
            }
        }];
      if(this.state.directLevel) {
        fields = fields.concat([{
          title: '针对等级',
          field: 'directObjectName'
        }]);
      } else if(this.state.directUser) {
        fields = fields.concat([{
          title: '针对用户',
          field: 'directObjectName'
        }]);
      }
      fields = fields.concat([{
        title: '募集时间',
        field: 'raiseStartDatetime',
        type: 'date',
        rangedate: ['raiseStartDatetime', 'raiseEndDatetime'],
        hidden: this.state.direct !== '3',
        required: this.state.direct === '3'
      }, {
        title: '年限',
        field: 'startDatetime',
        type: 'date',
        rangedate: ['startDatetime', 'endDatetime'],
        hidden: this.state.direct !== '3',
        required: this.state.direct === '3'
      }, {
        title: '募集总数',
        field: 'raiseCount',
        hidden: this.state.direct !== '4',
        required: this.state.direct === '4'
      }, {
        title: '最大积分抵扣比例(%)',
        field: 'maxJfdkRate',
        number: true,
        required: true
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
            title: '认养时间',
            field: 'startDatetime1',
            type: 'date',
            rangedate: ['startDatetime', 'endDatetime'],
            hidden: this.state.direct === '3',
            required: this.state.direct !== '3',
            noVisible: this.state.direct === '3'
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
      }]);
        let config = {
            fields,
            code: this.code,
            view: this.view,
            detailCode: 629026,
            addCode: 629010,
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
