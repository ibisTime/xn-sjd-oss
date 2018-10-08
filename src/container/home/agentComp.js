import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List } from 'antd';
import { moneyFormat } from 'common/js/util';
import './home.css';
const data = [];
export default class AgentComp extends React.Component {
  goWithdraw() {}
  render() {
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card>
              <h2>可用佣金金额</h2>
              <p style={{fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</p>
              <Button style={{float: 'right'}} onClick={() => this.goWithdraw()} type="primary">提现</Button>
            </Card>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card>
              <h2>提现处理中</h2>
              <p style={{fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.frozenAmount) || '0.00'}</p>
              <div className="ant-btn" style={{border: 'none', float: 'right'}}></div>
            </Card>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card style={{marginBottom: 10}}>
              <h2 style={{marginBottom: 0}}>累计获得货款
                <label style={{float: 'right', fontWeight: 'normal', fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</label>
              </h2>
            </Card>
            <Card style={{marginBottom: 10}}>
              <h2 style={{marginBottom: 0}}>累计提现货款
                <label style={{float: 'right', fontWeight: 'normal', fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</label>
              </h2>
            </Card>
            <Card>
              <h2 style={{marginBottom: 0}}>本月佣金收入
                <label style={{float: 'right', fontWeight: 'normal', fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</label>
              </h2>
            </Card>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card>
              <h2>待结算金额</h2>
              <p style={{fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.frozenAmount) || '0.00'}</p>
              <div className="ant-btn" style={{border: 'none', float: 'right', height: 120}}></div>
            </Card>
          </Col>
        </Row>
        <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} style={{marginBottom: '20px'}}>
            <List
              header={<h2 style={{marginBottom: 0}}>公告</h2>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
            />
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <Card style={{marginBottom: 10}}>
              <h2>代理概况</h2>
              <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }} style={{fontSize: '20px'}}>
                <Col span={12}>累计：2332个</Col>
                <Col span={12}>新增34个</Col>
              </Row>
            </Card>
            <Card>
              <h2>用户概况</h2>
              <Row gutter={{ xs: 12, sm: 16, md: 24, lg: 32 }} style={{fontSize: '20px'}}>
                <Col span={12}>累计：2332个</Col>
                <Col span={12}>新增34个</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
