import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar } from 'antd';
import UserCountCard from '../userCountCard/userCountCard';
import Notice from '../notice/notice';
import AvatarImg from './avatar.png';
import AddImg from './add.png';
import TotalImg from './total.png';
import './index.css';
import fetch from 'common/js/fetch';
import { formatDate } from 'common/js/util';
import { getNewUserNum } from 'api/count';

const data = [];

export default class PlatformComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addCount: 0,
      totalCount: 0,
      data: []
    };
  }
  componentDidMount() {
    let curTime = formatDate(new Date());
    Promise.all([
      getNewUserNum({ type: 'P' }),
      getNewUserNum({ type: 'P', createDatetimeStart: curTime, createDatetimeEnd: curTime }),
      fetch(805305, {
        object: 'P',
        start: '1',
        limit: '10',
        orderDir: 'desc',
        orderColumn: 'publish_datetime'
      })
    ]).then(([res1, res2, res3]) => {
      console.log('1', res1, res2, res3);
      this.setState({
        totalCount: res1.userTotalCount,
        addCount: res2.userTotalCount,
        data: [{
          title: res3.list[0].title,
          createDatetime: res3.list[0].publishDatetime
        }]
      });
    }).catch();
  }
  goNotice = () => {
    window.location.href = '/public/notice';
  }
  render() {
    const { addCount, totalCount } = this.state;
    return (
      <div className="platform-wrapper">
        <div className="avatar-wrapper">
          <Avatar size={80} src={AvatarImg} />
          <div className="user-name">ADMIN</div>
          <div className="user-role">超级管理员</div>
        </div>
        <div className="platform-content">
          <Row gutter={{ xs: 6, sm: 12, md: 24, lg: 32 }}>
            <Col span={6} style={{marginBottom: '20px'}}>
              <UserCountCard bgImage={AddImg} title='新增用户' subTitle="NEW USERS" count={addCount} />
            </Col>
            <Col span={6} style={{marginBottom: '20px'}}>
              <UserCountCard bgImage={TotalImg} title='总用户数' subTitle="TOTAL USERS" count={totalCount} />
            </Col>
          </Row>
          <Row style={{marginTop: 20}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24} style={{marginBottom: '20px'}}>
              <Notice
                data={this.state.data}
                goNotice={this.goNotice}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
