import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class Htck extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
    }
    render() {
        const fields = [{
            title: '合同详情',
            field: 'contract',
            type: 'textarea'
        }];
        return this.buildDetail({
            fields,
            code: this.code,
            view: true,
            detailCode: 629206
        });
    }
}

export default Htck;
