import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId, clearUser } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Aboutus extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getUserId();
        this.state = {
            ...this.state
        };
    }
    render() {
        let fields = [{
            field: 'kind',
            value: 'O',
            hidden: true
        }];
        fields = fields.concat([ {
            title: '情感推文图',
            field: 'cvalue',
            type: 'img',
            single: true,
            required: true
        }]);
        fields = fields.concat([{
            title: '备注',
            field: 'remark'
        }]);
        return this.buildDetail({
            fields,
            key: 'ckey',
            code: 'ARTICLE_PIC',
            detailCode: 630047,
            buttons: [
                  {
                    title: '保存',
                    check: true,
                    handler: (params) => {
                        this.doFetching();
                        params.id = this.state.pageData.id;
                        console.log(this.state.pageData);
                        fetch(630042, params).then(() => {
                            this.cancelFetching();
                            showSucMsg('操作成功');
                        }).catch(this.cancelFetching);
                    }
                }
            ]
        });
    }
}

export default Aboutus;
