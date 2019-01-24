import React from 'react';
import { Form } from 'antd';
// import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';
import XLSX from 'xlsx';
import { getQueryString, showWarnMsg, showSucMsg, formatDate, getUserName, isUndefined, getUserId, moneyFormat } from 'common/js/util';

@Form.create()
class PreSaleProductEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.state = {
      ...this.state
    };
  }
  makeCols = (refstr) => {
    var o = [];
    var range = XLSX.utils.decode_range(refstr);
    for (var i = 0; i <= range.e.c; ++i) {
      o.push({ name: XLSX.utils.encode_col(i), key: i });
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
        let url;
        if(!this.code) {
          url = 629400;
        }else {
          url = 629401;
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
          fetch(url, params).then(() => {
              showSucMsg('操作成功');
              this.cancelFetching();
              window.location.href = '/own/preSaleProducts';
              // this.props.history.push('/own/preSaleProducts');
          }).catch(this.cancelFetching);
      }
    // }, {
    //   title: '重置',
    //   handler: (params) => {
    //     this.props.form.resetFields();
    //   }
    }];
  }
  handleChange = (file) => {
    try {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = (e) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        let data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        console.log(data);
        this.setState({ data: data, cols: this.makeCols(ws['!ref']) });
        let statusNum;
        // for (let i = 5; i < data.length; i++) {
        //   data[i][7] = formatDate(data[i][7]);
        //   if (isUndefined(data[i][6]) || isUndefined(data[i][7])) {
        //     showWarnMsg('请确定已发工资或发放日期填写完整填写！');
        //     statusNum = true;
        //     return;
        //   }
        // }
        // if (!statusNum) {
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
      title: '产品大类',
      field: 'parentCategoryCode',
      type: 'select',
      listCode: '629007',
      params: {
        status: '1',
        level: '2',
        orderColumn: 'order_no',
        orderDir: 'asc',
        type: '1'
      },
      keyName: 'code',
      valueName: 'name',
      onChange: (v) => {
        this.setState({
          selectData: { ...this.state.selectData, categoryCode: [] }
        });
        this.props.form.resetFields(['categoryCode']);
        fetch(629007, {
          parentCode: v,
          status: '1',
          // level: '2',
          orderColumn: 'order_no',
          orderDir: 'asc'
        }).then((data) => {
          this.setState({
            selectData: {
              ...this.state.selectData,
              categoryCode: data
            }
          });
        }).catch(() => {});
      },
      required: true
    }, {
      title: '产品小类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: { status: '1', level: '3', type: '1' },
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
      required: true,
      maxlength: 30
    }, {
      title: '品种',
      field: 'variety',
      required: true,
      maxlength: 30
    }, {
      title: '年限',
      field: 'adoptYear',
      required: true,
      number: true
    }, {
      title: '属地',
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
      title: '单棵树产量',
      field: 'singleOutput',
      required: true
    }, {
      title: '产量单位',
      field: 'outputUnit',
      type: 'select',
      key: 'output_unit',
      required: true
    }, {
      title: '包装重量',
      field: 'packWeight',
      required: true
    }, {
      title: '包装单位',
      field: 'packUnit',
      type: 'select',
      key: 'pack_unit',
      required: true
    }, {
      title: '预售时间',
      field: 'adoptDatetime',
      type: 'date',
      rangedate: ['adoptStartDatetime', 'adoptEndDatetime'],
      required: true
    }, {
      title: '预计收获时间',
      field: 'harvestDatetime',
      type: 'date',
      required: true
    }, {
      title: '预计发货时间',
      field: 'deliverDatetime',
      type: 'date',
      required: true
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
      title: '价格列表',
      field: 'presellSpecsList',
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
          title: '包装数量',
          field: 'packCount',
          required: true
        }, {
          title: '价格',
          field: 'price',
          amount: true,
          required: true
        }, {
          title: '间隔(小时)',
          field: 'intervalHours'
        }, {
          title: '涨幅(%)',
          field: 'increase'
        }]
      },
      required: true
    }];
    if(this.code) {
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
      // fields = fields.concat([{
      //   title: '树木列表',
      //   field: 'treeList',
      //   type: 'file',
      //   handleChange: this.handleChange,
      //   required: true,
      //   hidden: this.code
      // }]);
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
      detailCode: 629416,
      addCode: 629400,
      editCode: 629401,
      beforeSubmit: (params) => {
        params.ownerId = getUserId();
        return params;
      }
    };
    if (!this.code) {
      this.addBtns(config);
    }
    return this.buildDetail(config);
  }
}

export default PreSaleProductEdit;
