import React from 'react';
import {Form} from 'antd';
// import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail-withO2M';
import fetch from 'common/js/fetch';
import XLSX from 'xlsx';
import {
    getQueryString,
    showWarnMsg,
    showSucMsg,
    formatDate,
    getUserName,
    isUndefined,
    getUserId,
    moneyFormat
} from 'common/js/util';

@Form.create()
class ProductEdit extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.state = {
            ...this.state,
            direct: '',
            directLevel: false,
            directUser: false
        };
    }

    makeCols = (refstr) => {
        var o = [];
        var range = XLSX.utils.decode_range(refstr);
        for (var i = 0; i <= range.e.c; ++i) {
            o.push({name: XLSX.utils.encode_col(i), key: i});
        }
        return o;
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
                } else {
                    params.directType && delete params.directType;
                    params.directLevel && delete params.directLevel;
                    params.directUser && delete params.directUser;
                }
                // let treeList = [];
                // this.state.data.forEach((d, i) => {
                //   if (i > 0 && d.length) {
                //     console.log(d);
                //     treeList.push({
                //       treeNumber: d[1],
                //       age: d[2],
                //       longitude: d[3],
                //       latitude: d[4],
                //       pic: d[5],
                //       remark: d[6]
                //     });
                //   }
                // });
                // params.treeList = treeList;
                fetch(629010, params).then(() => {
                    showSucMsg('操作成功');
                    // debugger;
                    // this.props.form.resetFields();
                    this.cancelFetching();
                    window.location.href = '/own/products';
                    // this.props.history.push('/own/products');
                }).catch(this.cancelFetching);
            }
        }
            // , {
            //   title: '重置',
            //   handler: (params) => {
            //     this.props.form.resetFields(['listPic']);
            //   }
            // }
        ];
    }

    handleChange = (file) => {
        try {
            const reader = new FileReader();
            const rABS = !!reader.readAsBinaryString;
            reader.onload = (e) => {
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, {type: rABS ? 'binary' : 'array'});
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                let data = XLSX.utils.sheet_to_json(ws, {header: 1});
                this.setState({data: data, cols: this.makeCols(ws['!ref'])});
                this.setState({
                    data: data,
                    cols: this.makeCols(ws['!ref']),
                    fileList: [{
                        uid: file.uid,
                        name: file.name,
                        status: 'done'
                    }]
                });
            };
            if (rABS) {
                reader.readAsBinaryString(file);
            } else {
                reader.readAsArrayBuffer(file);
            }
        } catch (error) {
            showWarnMsg('请上传正确的文件！');
        }
    }

    render() {
        let fields = [{
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
            }, {
                title: '名称',
                field: 'name',
                required: true,
                maxlength: 100
            }, {
                title: '学名',
                field: 'scientificName',
                required: true,
                maxlength: 100
            }, {
                title: '级别',
                field: 'rank',
                type: 'select',
                required: true,
                data: [{
                    dkey: '一级(500年以上)',
                    dvalue: '一级(500年以上)'
                }, {
                    dkey: '二级(300年-500年)',
                    dvalue: '二级(300年-500年)'
                }, {
                    dkey: '三级(100年以上)',
                    dvalue: '三级(100年以上)'
                }],
                keyName: 'dkey',
                valueName: 'dvalue',
                onChange: (v) => {
                    if (v === '一级(500年以上)' && !this.state.directLevel) {
                        this.setState({directLevel: true, directUser: false, directType: false});
                    } else if (v === '二级(300年-500年)' && !this.state.directUser) {
                        this.setState({directUser: true, directLevel: false, directType: false});
                    } else if (v === '三级(100年以上)' && !this.state.directType) {
                        this.setState({directUser: false, directLevel: false, directType: true});
                    }
                }
            }];
        if (this.state.directLevel) {
            fields = fields.concat([{
                title: '树龄',
                field: 'age',
                integer: true,
                required: true,
                number1: true
            }]);
        } else if (this.state.directUser) {
            fields = fields.concat([{
                title: '树龄',
                field: 'age',
                integer: true,
                required: true,
                number2: true
            }]);
        } else if (this.state.directType) {
            fields = fields.concat([{
                title: '树龄',
                field: 'age',
                required: true,
                number3: true
            }]);
        }
        fields = fields.concat([{
            title: '品种',
            field: 'variety',
            required: true,
            maxlength: 30
        }, {
            title: '古树产地',
            field: 'originPlace',
            required: true,
            maxlength: 100
        }, {
            title: '区域',
            field: 'province',
            type: 'citySelect',
            required: true
        }, {
            title: '乡政/街道',
            field: 'town',
            required: true,
            maxlength: 100
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
            key: 'yl_sell_type',
            required: true,
            onChange: (v) => {
                // let direct = v === '2';
                // if (direct !== this.state.direct) {
                //   this.setState({ direct });
                // }
                // let direct = v;
                // if (direct !== this.state.direct) {
                //   this.setState({ direct });
                // }
                this.setState({direct: v});
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
                    this.setState({directLevel: true, directUser: false});
                } else if (v === '2' && !this.state.directUser) {
                    this.setState({directUser: true, directLevel: false});
                }
            }
        }, {
            title: '针对等级',
            field: 'directLevel',
            _keys: ['directObject'],
            type: 'select',
            key: 'user_level',
            hidden: this.state.direct !== '2' || !this.state.directLevel,
            required: this.state.direct === '2' && this.state.directLevel
        }, {
            title: '针对用户',
            field: 'directUser',
            _keys: ['directObject'],
            type: 'select',
            multiple: true,
            pageCode: 805120,
            params: {status: '0'},
            keyName: 'userId',
            searchName: 'mobile',
            placeholder: '请输入手机号搜索',
            valueName: '{{mobile.DATA}}-{{nickname.DATA}}',
            hidden: this.state.direct !== '2' || !this.state.directUser,
            required: this.state.direct === '2' && this.state.directUser
        }, {
            title: '募集时间',
            field: 'raiseStartDatetime',
            type: 'date',
            rangedate: ['raiseStartDatetime', 'raiseEndDatetime'],
            hidden: this.state.direct !== '3',
            required: this.state.direct === '3'
        }, {
            title: '认养时间',
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
        }]);
        if (this.code) {
            fields = fields.concat([{
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
                        title: '古树产地',
                        required: true,
                        field: 'originPlace'
                    }, {
                        title: '所在市',
                        required: true,
                        field: 'city'
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
            }]);
        } else {
            fields = fields.concat([{
                title: '树木列表',
                field: 'treeList',
                type: 'o2m',
                options: {
                    add: true,
                    edit: true,
                    delete: true,
                    import: true,
                    fields: [{
                        title: '树木编号',
                        field: 'treeNumber',
                        required: true
                    }, {
                        title: '古树产地',
                        required: true,
                        field: 'originPlace'
                    }, {
                        title: '所在市',
                        required: true,
                        field: 'city'
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
            }]);
            // fields = fields.concat([{
            //   title: '树木列表',
            //   field: 'treeList',
            //   type: 'file',
            //   handleChange: this.handleChange,
            //   required: true,
            //   hidden: this.code
            // }]);
        }
        fields = fields.concat([{
            title: '产品描述',
            field: 'description',
            type: 'textarea',
            required: true
        }, {
            title: '备注',
            field: 'remark',
            maxlength: 250
        }]);
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
                } else {
                    params.directType && delete params.directType;
                    params.directLevel && delete params.directLevel;
                    params.directUser && delete params.directUser;
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
