import { getAccountsByUserId } from 'api/account';
import { SYS_USER } from 'common/js/config';

const PREFIX = 'PLATFORM_ACCOUNT_';
const SET_ALIPAY_ACCOUNT = PREFIX + 'SET_ALIPAY_ACCOUNT';
const SET_WX_ACCOUNT = PREFIX + 'SET_WX_ACCOUNT';
const SET_OFFLINE_ACCOUNT = PREFIX + 'SET_OFFLINE_ACCOUNT';
const SET_CNY_ACCOUNT = PREFIX + 'SET_CNY_ACCOUNT';
const SET_JF_ACCOUNT = PREFIX + 'SET_JF_ACCOUNT';
const SET_TPP_ACCOUNT = PREFIX + 'SET_TPP_ACCOUNT';
const LOADING = PREFIX + 'LOADING';
const CANCEL_LOADING = PREFIX + 'CANCEL_LOADING';

// ALIPAY、WEIXIN、OFFLINE、CNY、JF、TPP
const initState = {
  aliAccount: {},
  wxAccount: {},
  offAccount: {},
  cnyAccount: {},
  jfAccount: {},
  tppAccount: {},
  fetching: true
};

export function platformAccount(state = initState, action) {
  switch(action.type) {
    case SET_ALIPAY_ACCOUNT:
      return {...state, aliAccount: action.payload};
    case SET_WX_ACCOUNT:
      return {...state, wxAccount: action.payload};
    case SET_OFFLINE_ACCOUNT:
      return {...state, offAccount: action.payload};
    case SET_CNY_ACCOUNT:
      return {...state, cnyAccount: action.payload};
    case SET_JF_ACCOUNT:
      return {...state, jfAccount: action.payload};
    case SET_TPP_ACCOUNT:
      return {...state, tppAccount: action.payload};
    case LOADING:
      return {...state, fetching: true};
    case CANCEL_LOADING:
      return {...state, fetching: false};
    default:
      return state;
  }
}

// 显示loading
function doFetching() {
  return { type: LOADING };
}

// 隐藏loading
function cancelFetching() {
  return { type: CANCEL_LOADING };
}
// 设置平台支付宝账户
function setAlipayAccount(data) {
  return { type: SET_ALIPAY_ACCOUNT, payload: data };
}
// 设置平台微信账户
function setWXAccount(data) {
  return { type: SET_WX_ACCOUNT, payload: data };
}
// 设置平台线下充值账户
function setOffAccount(data) {
  return { type: SET_OFFLINE_ACCOUNT, payload: data };
}
// 设置平台余额账户
function setCnyAccount(data) {
  return { type: SET_CNY_ACCOUNT, payload: data };
}
// 设置平台积分账户
function setJfAccount(data) {
  return { type: SET_JF_ACCOUNT, payload: data };
}
// 设置平台碳泡泡账户
function setTppAccount(data) {
  return { type: SET_TPP_ACCOUNT, payload: data };
}

// 初始化页面数据
export function initData() {
  return dispatch => {
    dispatch(doFetching());
    getAccountsByUserId(SYS_USER).then((accounts) => {
      dispatch(cancelFetching());
      // ALIPAY、WEIXIN、OFFLINE、CNY、JF、TPP
      accounts.forEach(account => {
        if (account.currency === 'ALIPAY') {
          dispatch(setAlipayAccount(account));
        } else if (account.currency === 'WEIXIN') {
          dispatch(setWXAccount(account));
        } else if (account.currency === 'OFFLINE') {
          dispatch(setOffAccount(account));
        } else if (account.currency === 'CNY') {
          dispatch(setCnyAccount(account));
        } else if (account.currency === 'JF') {
          dispatch(setJfAccount(account));
        } else if (account.currency === 'TPP') {
          dispatch(setTppAccount(account));
        }
      });
    }).catch(() => dispatch(cancelFetching()));
  };
}