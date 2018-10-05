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
      direct: false,
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
        params.ownerId = getUserId();
        // 如果销售类型选择定向
        if (params.sellType === '2') {
          params.directObject = params.directType === '1'
            ? params.directLevel : params.directUser;
        }
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
        dkey: '1',
        dvalue: '个人'
      }, {
        dkey: '2',
        dvalue: '定向'
      }, {
        dkey: '3',
        dvalue: '捐赠'
      }, {
        dkey: '4',
        dvalue: '集体'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      required: true,
      onChange: (v) => {
        let direct = v === '2';
        if (direct !== this.state.direct) {
          this.setState({ direct });
        }
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
      hidden: !this.state.direct,
      required: this.state.direct,
      onChange: (v) => {
        if (v === '1' && !this.state.directLevel) {
          this.setState({ directLevel: true, directUser: false });
        } else if (v === '2' && !this.state.directUser) {
          this.setState({ directUser: true, directLevel: false });
        }
      }
    }, {
      title: '针对等级',
      field: 'directLevel',
      _keys: ['directObject'],
      type: 'select',
      key: 'user_level',
      hidden: !this.state.directLevel,
      required: this.state.directLevel
    }, {
      title: '针对用户',
      field: 'directUser',
      _keys: ['directObject'],
      type: 'select',
      pageCode: 805120,
      params: { status: '0' },
      keyName: 'userId',
      valueName: '{{mobile.DATA}}-{{nickname.DATA}}',
      searchName: 'mobile',
      hidden: !this.state.directUser,
      required: this.state.directUser
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
      title: '产品描述',
      field: 'description',
      type: 'textarea',
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
        // 如果销售类型选择定向
        if (params.sellType === '2') {
          params.directObject = params.directType === '1'
            ? params.directLevel : params.directUser;
        }
        return params;
      }
    };
    if (!this.code) {
      this.addBtns(config);
    }
    return this.buildDetail(config);
  }
}

export default ProductEdit;