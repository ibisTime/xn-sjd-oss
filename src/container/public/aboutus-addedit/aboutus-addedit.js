import React from 'react';
import { Form } from 'antd';
import { showSucMsg } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class AboutusAddEdit extends DetailUtil {
  render() {
    const fields = [{
      field: 'id',
      hidden: true
    }, {
      field: 'remark',
      value: '关于我们',
      hidden: true
    }, {
      title: '角色名称',
      field: 'cvalue',
      type: 'textarea',
      required: true
    }];
    return this.buildDetail({
      fields,
      key: 'key',
      code: 'about_us',
      detailCode: 630047,
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

export default AboutusAddEdit;
