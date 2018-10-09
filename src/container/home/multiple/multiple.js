import React from 'react';
import { moneyFormat } from 'common/js/util';
import './index.css';

export default class Multiple extends React.Component {
  render() {
    return (
      <div className="multiple-wrapper">
        <div className="comp-item">
          <div className="item-title">累计获得货款</div>
          <div className="item-price"><span>¥</span>{moneyFormat(this.props.account0.amount) || '0.00'}</div>
        </div>
        <div className="comp-item">
          <div className="item-title">累计提现货款</div>
          <div className="item-price"><span>¥</span>{moneyFormat(this.props.account1.amount) || '0.00'}</div>
        </div>
        <div className="comp-item">
          <div className="item-title">本月贷款收入</div>
          <div className="item-price"><span>¥</span>{moneyFormat(this.props.account2.amount) || '0.00'}</div>
        </div>
      </div>
    );
  }
}
