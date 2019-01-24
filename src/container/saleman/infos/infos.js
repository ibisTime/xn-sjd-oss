import React from 'react';
import { Alert, Card, Spin } from 'antd';
import QRCode from 'qrcode.react';
import { getUserId } from 'common/js/util';
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
    Promise.all([
      fetch(730086, { userId: getUserId() }),
      fetch(630047, { ckey: 'REGISTER_URL' })
    ]).then(([res1, res2]) => {
      this.setState({
        mobile: res1.mobile,
        registerUrl: res2.cvalue,
        fetching: false
      });
    });
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
    const { fetching, mobile, registerUrl } = this.state;
    return (
      <Spin spinning={fetching}>
        <Alert
          message="个人信息"
          description={this.getInfos()}
          type="info"
        />
        <Card title="分享二维码" style={{marginTop: 40}}>
          <QRCode value={`${registerUrl}?userReferee=${mobile}&type=A`} />
          <label style={{paddingLeft: 20}}>注册链接：{`${registerUrl}?userReferee=${mobile}&type=S`}</label>
        </Card>
      </Spin>
    );
  }
}
