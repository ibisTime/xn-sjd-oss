import React from 'react';
import { Form } from 'antd';
import { showSucMsg } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class TimeAddEdit extends DetailUtil {
  render() {
    const fields = [{
      field: 'id',
      hidden: true
    }, {
      field: 'remark',
      value: '服务时间',
      hidden: true
    }, {
      title: '内容',
      field: 'cvalue',
      required: true
    }];
    return this.buildDetail({
      fields,
      key: 'key',
      code: 'service_time',
      view: false,
      detailCode: 630047,
      editCode: 630042,
      buttons: [{
        title: '保存',
        check: true,
        handler: (params) => {
          this.doFetching();
          fetch(630042, params).then(() => {
            showSucMsg('操作成功');
            this.cancelFetching();
          }).catch(this.cancelFetching);
        }
      }]
    });
  }
}

export default TimeAddEdit;
