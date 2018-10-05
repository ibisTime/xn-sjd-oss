import React from 'react';
import { Alert, Card, Spin } from 'antd';
import QRCode from 'qrcode.react';
import { getUserId } from 'common/js/util';
import { C_REGISTER_URL } from 'common/js/config';
import fetch from 'common/js/fetch';

export default class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      fetching: true
    };
  }
  componentDidMount() {
    fetch(730086, { userId: getUserId() }).then((userInfo) => {
      this.setState({
        mobile: userInfo.mobile,
        fetching: false
      });
    }).catch(() => this.setState({ fetching: false }));
  }
  getInfos() {
    return `手机号：${this.state.mobile}`;
  }
  render() {
    const { fetching, mobile } = this.state;
    return (
      <Spin spinning={fetching}>
        <Alert
          message="个人信息"
          description={this.getInfos()}
          type="info"
        />
        <Card title="分享二维码" style={{marginTop: 40}}>
          <QRCode value={`${C_REGISTER_URL}?userReferee=${mobile}&type=A`} />
          <label style={{paddingLeft: 20}}>注册链接：{`${C_REGISTER_URL}?userReferee=${mobile}&type=A`}</label>
        </Card>
      </Spin>
    );
  }
}
