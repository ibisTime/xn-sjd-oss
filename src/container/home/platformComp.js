import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List, Avatar, Tooltip, Icon } from 'antd';
import { moneyFormat } from 'common/js/util';
import './home.css';

const data = [];
const { Meta } = Card;

export default class PlatformComp extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <Card actions={[
              <Tooltip placement="bottom" title='修改头像'><Icon type="edit" /></Tooltip>,
              <Tooltip placement="bottom" title='修改密码'><Icon type="lock" /></Tooltip>]}>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="用户姓名"
                  description="超级管理员"
                />
            </Card>
          </Col>
          <Col span={18}>
            <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
              <Col span={12} style={{marginBottom: '20px'}}>
                <Card>
                  <h2>新增用户</h2>
                  <p style={{fontSize: '20px'}}>10</p>
                </Card>
              </Col>
              <Col span={12} style={{marginBottom: '20px'}}>
                <Card>
                  <h2>总用户数</h2>
                  <p style={{fontSize: '20px'}}>100</p>
                </Card>
              </Col>
            </Row>
            <Row style={{marginTop: 20}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={24} style={{marginBottom: '20px'}}>
                <List
                  header={<h2 style={{marginBottom: 0}}>公告</h2>}
                  bordered
                  dataSource={data}
                  renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
