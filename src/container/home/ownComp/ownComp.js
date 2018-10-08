import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Table } from 'antd';
import { moneyFormat, dateFormat } from 'common/js/util';
import MoneyImg from '../img/money.png';
import TimeImg from '../img/time.png';
import NoticeImg from '../img/notice.png';
import FbszzImg from '../img/fbszz.png';
import './ownComp.css';

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title'
}, {
  title: '发表时间',
  dataIndex: 'createDatetime',
  key: 'createDatetime',
  render: (v) => dateFormat(v)
}];
const data = [{
  title: '氧林1.0.0正式上线了',
  createDatetime: '2018-09-05'
}];

export default class OwnComp extends React.Component {
  goWithdraw() {}
  render() {
    return (
      <div>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30}}>
          <Col span={8} style={{marginBottom: '20px'}}>
            <div className="kyyjje-wrapper">
              <div className="title"><img src={MoneyImg}/>可用佣金金额</div>
              <div className="price-content"><label>¥</label>{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</div>
              <div onClick={() => this.goWithdraw()} className="btn-brd">提现</div>
            </div>
          </Col>
          <Col span={8}>
            <div className="kyyjje-wrapper txclz-wrapper">
              <div className="title"><img src={TimeImg}/>提现处理中</div>
              <div className="price-content"><label>¥</label>{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</div>
              <div className="tip">预计到账时间：2018年10月25日 12:00:00</div>
            </div>
          </Col>
          <Col span={8}>
            <div className="kyyjje-wrapper multiple-wrapper">
              <div className="comp-item">
                <div className="item-title">累计获得货款</div>
                <div className="item-price"><span>¥</span>{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</div>
              </div>
              <div className="comp-item">
                <div className="item-title">累计提现货款</div>
                <div className="item-price"><span>¥</span>{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</div>
              </div>
              <div className="comp-item">
                <div className="item-title">本月贷款收入</div>
                <div className="item-price"><span>¥</span>{moneyFormat(this.props.cnyAccount.amount) || '0.00'}</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 6, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <div className="notice-wrapper">
              <div className="notice-title"><img src={NoticeImg}/>系统公告</div>
              <Table className="notice-table-wrapper" columns={columns} dataSource={data} pagination={false}/>
            </div>
          </Col>
          <Col span={12} style={{marginBottom: '20px'}}>
            <div className="white-content">
              <img src={FbszzImg}/>
              <div className="white-infos">
                <div className="info-title">发布的树的总值</div>
                <div className="info-price">¥{moneyFormat(this.props.cnyAccount.frozenAmount) || '0.00'}</div>
              </div>
            </div>
            <div className="white-content">
              <h2>已认养的总值</h2>
              <p style={{fontSize: '20px'}}>¥{moneyFormat(this.props.cnyAccount.frozenAmount) || '0.00'}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
