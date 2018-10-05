import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List } from 'antd';
import { moneyFormat } from 'common/js/util';
import './home.css';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];
export default class PlatformComp extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="新增用户">10</Card>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card title="总用户数">100</Card>
          </Col>
        </Row>
        <Row style={{marginTop: 20}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} style={{marginBottom: '20px'}}>
            <List
              header={<div>公告</div>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
