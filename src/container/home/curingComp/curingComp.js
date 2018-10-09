import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, List } from 'antd';
import { moneyFormat } from 'common/js/util';
import '../home.css';
const data = [];
const yhData = [
  '养护任务1',
  '养护任务2',
  '养护任务3',
  '养护任务4',
  '养护任务5',
  '养护任务6',
  '养护任务7'
];
export default class CuringComp extends React.Component {
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
            <Card style={{marginBottom: 10}}>
              <h2 style={{marginBottom: 0}}>本月贷款收入
                <label style={{float: 'right', fontWeight: 'normal', fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</label>
              </h2>
            </Card>
            <List
              header={<h2 style={{marginBottom: 0}}>公告</h2>}
              bordered
              dataSource={data}
              renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
            />
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <List
              header={<h2 style={{marginBottom: 0}}>最近养护任务</h2>}
              bordered
              dataSource={yhData}
              renderItem={item => (<List.Item><Link to='/'>{item}</Link></List.Item>)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
