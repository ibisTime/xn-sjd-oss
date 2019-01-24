import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TppOrdersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '碳泡泡数量',
      field: 'quantity'
    }, {
      title: '生成时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '过期时间',
      field: 'invalidDatetime',
      type: 'datetime'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '待收取'
      }, {
        dkey: '1',
        dvalue: '已收完'
      }, {
        dkey: '2',
        dvalue: '已过期'
      }],
      keyName: 'dkey',
      valueName: 'dvalue'
    }, {
      title: '收取人昵称',
      field: 'takerNickname',
        formatter: (v, d) => {
        if(d.takeUser) {
            return d.takeUser.nickname;
        }
        }
      // render: (v, d) => d.takeUser ? d.takeUser.nickname : '-'
    }, {
      title: '收取时间',
      field: 'takeDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629356
    });
  }
}

export default TppOrdersAddEdit;
