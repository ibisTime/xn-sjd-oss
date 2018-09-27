import React from 'react';
import { Form } from 'antd';
import DetailUtil from 'common/js/build-detail';
import { showSucMsg } from 'common/js/util';
import fetch from 'common/js/fetch';

@Form.create()
class HotLineAddEdit extends DetailUtil {
  render() {
    const fields = [{
      field: 'id',
      hidden: true
    }, {
      title: '内容',
      field: 'cvalue',
      required: true
    }, {
      field: 'remark',
      hidden: true,
      value: '服务热线'
    }];
    return this.buildDetail({
      fields,
      key: 'key',
      code: 'telephone',
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

export default HotLineAddEdit;
