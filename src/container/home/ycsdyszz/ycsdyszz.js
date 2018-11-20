import React from 'react';
import { moneyFormat } from 'common/js/util';
import BagImg from './bag.png';
import './index.css';

export default class Ycsdyszz extends React.Component {
  render() {
    return (
      <div className="yrydzz-content">
        <img src={BagImg}/>
        <div className="white-infos">
          <div className="info-title">已出售的预售总值</div>
          <div className="info-price">
            <label>¥</label>{moneyFormat(this.props.totalAmount) || '0.00'}
            <span className="info-amount">{this.props.treeCount}<span className="info-unit">棵</span></span>
          </div>
        </div>
      </div>
    );
  }
}
