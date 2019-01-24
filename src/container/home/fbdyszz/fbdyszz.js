import React from 'react';
import { moneyFormat } from 'common/js/util';
import FbszzImg from './fbszz.png';
import './index.css';

export default class Fbdyszz extends React.Component {
  render() {
    return (
      <div className="fbdsdzz-content">
        <img src={FbszzImg}/>
        <div className="white-infos">
          <div className="info-title">发布的预售总值</div>
          <div className="info-price">
            <label>¥</label>{this.props.minPrice ? moneyFormat(this.props.minPrice) : '0.00'} - {this.props.maxPrice ? moneyFormat(this.props.maxPrice) : '0.00'}
          </div>
        </div>
      </div>
    );
  }
}
