import React from 'react';
import {Form} from 'antd';
import {getQueryString, showSucMsg, getUserId, clearUser} from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Aboutus extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        console.log(this.code);
        this.state = {
            ...this.state
        };
    }

    render() {
        const fields = [{
            field: 'kind',
            value: 'O',
            hidden: true
        },
            {
                title: '产品分类',
                field: 'parentCategoryCode',
                type: 'select',
                listCode: '629007',
                params: {
                    status: '1',
                    level: '1',
                    orderColumn: 'order_no',
                    orderDir: 'asc',
                    type: '0'
                },
                keyName: 'code',
                valueName: 'name',
                onChange: (v) => {
                    this.setState({
                        selectData: {...this.state.selectData, categoryCode: []}
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
                    }).catch(() => {
                    });
                },
                required: true
            }, {
                title: '小类',
                field: 'categoryCode',
                type: 'select',
                listCode: '629007',
                params: {status: '1', level: '2'},
                keyName: 'code',
                valueName: 'name',
                required: true
            }];
        return this.buildDetail({
            fields,
            pageCode: 629025,
            //     view: this.view,
            code: this.code,
            detailCode: 629026,
            buttons: [
                {
                    title: '保存',
                    check: true,
                    handler: (params) => {
                        this.doFetching();
                        fetch(629016, params).then(() => {
                            this.cancelFetching();
                            showSucMsg('操作成功');
                            setTimeout(() => {
                                this.props.history.go(-1);
                            }, 1000);
                        }).catch(this.cancelFetching);
                    }
                }
            ]
        });
    }
}

export default Aboutus;
