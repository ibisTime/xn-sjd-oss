import React from 'react';
import { Form, Spin, Button, Card } from 'antd';
import { tailFormItemLayout, formItemLayout } from 'common/js/config';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';
import CSearchSelect from 'component/cSearchSelect/cSearchSelect';
import { getUserById } from 'api/user';
import './claimBind.css';

const FormItem = Form.Item;
const dictInfo = {
  1: '审核中',
  2: '审核不通过',
  3: '已绑定',
  4: '已解除'
};

@Form.create()
class ClaimBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      bindInfo: {}
    };
  }
  componentDidMount() {
    this.getBindInfo();
  }
  getBindInfo() {
    fetch(629607, {
      ownerId: getUserId()
    }).then(data => {
      if (data.length) {
        getUserById(data[0].maintainId).then(userInfo => {
          let bindInfo = {
            ...userInfo,
            ...data[0]
          };
          this.setState({
            bindInfo,
            fetching: false
          });
        }).catch(() => this.setState({ fetching: false }));
      } else {
        this.setState({
          fetching: false,
          bindInfo: data.length ? data[0] : {}
        });
      }
    }).catch(() => this.setState({ fetching: false }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return false;
      }
      this.setState({ fetching: true });
      let bizCode = this.state.bindInfo.code ? 629601 : 629600;
      let code = this.state.bindInfo.code || '';
      fetch(bizCode, {
        code,
        maintainId: values.maintainId,
        ownerId: getUserId(),
        updater: getUserId()
      }).then(() => {
        this.getBindInfo();
      }).catch(() => this.setState({ fetching: false }));
    });
  }
  // 获取搜索框类型的控件
  getSearchSelectItem() {
    const props = {
      initVal: '',
      rules: [{
        required: true,
        message: '必填字段'
      }],
      params: { status: 2, kind: 'M' },
      pageCode: 630065,
      searchName: 'keyword',
      field: 'maintainId',
      label: '帐号',
      keyName: 'userId',
      valueName: (d) => {
        return d.company ? `公司名称:${d.company.name}-联系方式:${d.company.chargeMobile}` : '';
      },
      onChange: (v) => {},
      getFieldDecorator: this.props.form.getFieldDecorator,
      getFieldValue: this.props.form.getFieldValue,
      getFieldError: this.props.form.getFieldError,
      isLoaded: !this.state.isLoaded
    };
    return <CSearchSelect key='maintainId' {...props} />;
  }
  getStatus() {
    console.log(this.state.bindInfo);
    return dictInfo[this.state.bindInfo.status] || '';
  }
  render() {
    const { fetching, bindInfo } = this.state;
    return (
      <Spin spinning={fetching}>
        <Form className="detail-form-wrapper" onSubmit={this.handleSubmit}>
          {this.getSearchSelectItem()}
          <FormItem className="cform-item-btn" key='btns' {...formItemLayout} label="&nbsp;">
            <Button type="primary" htmlType="submit">申请绑定</Button>
          </FormItem>
          <FormItem className={`cform-item-btn ${bindInfo.code ? '' : 'hidden'}`} key='card' {...formItemLayout} label="&nbsp;">
            <Card title="养护方信息" extra={this.getStatus()} style={{ width: 300, marginLeft: -62, marginTop: 36 }}>
              <p>帐&nbsp;&nbsp;&nbsp;&nbsp;号：{bindInfo.loginName}</p>
              <p>名&nbsp;&nbsp;&nbsp;&nbsp;称：{bindInfo.company ? bindInfo.company.name : ''}</p>
              <p>负&nbsp;责&nbsp;人：{bindInfo.company ? bindInfo.company.charger : ''}</p>
              <p>联系方式：{bindInfo.company ? bindInfo.company.chargeMobile : ''}</p>
              <p>备&nbsp;&nbsp;&nbsp;&nbsp;注：{bindInfo.remark || ''}</p>
            </Card>
          </FormItem>
        </Form>
      </Spin>
    );
  }
}

export default ClaimBind;
