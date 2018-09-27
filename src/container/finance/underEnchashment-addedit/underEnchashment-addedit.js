import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class UnderEnchashmentAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'applyUser',
      value: getUserId(),
      hidden: true
    }, {
      field: 'bizType',
      hidden: true,
      value: '-11'
    }, {
      field: 'accountNumber',
      title: '用户账户',
      type: 'select',
      pageCode: '802500',
      // dict: [
      //     ['currency', 'currency'],
      //     ['type', 'account_type']
      // ],
      params: {
        currency: 'CNY'
      },
      keyName: 'accountNumber',
      valueName: '{{realName.DATA}} - {{currency.DATA}} - {{type.DATA}}',
      searchName: 'realName',
      required: true,
      help: '支持户名查询'
    }, {
      field: 'amount',
      title: '取现金额',
      required: true,
      amount: true
    }, {
      field: 'payCardInfo',
      title: '银行类型',
      required: true
    }, {
      field: 'payCardNo',
      title: '银行卡号',
      bankCard: true,
      minlength: 15,
      required: true
    }, {
      field: 'applyNote',
      title: '申请说明',
      maxlength: 255
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 802756,
      addCode: 802751
    });
  }
}

export default UnderEnchashmentAddEdit;
