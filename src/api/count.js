import fetch from 'common/js/fetch';

// 新增用户统计
export function getNewUserNum(data) {
  return fetch(629901, {...data});
}

// 提现金额统计
export function tixianAmountCount(data) {
  return fetch(629903, {...data});
}

// 产权方已认养的总值
export function claimCount(data) {
  return fetch(629904, {...data});
}

// 列表查询各端账户总余额
export function getAmount(data) {
  return fetch(802302, {...data});
}

// 列表查询用户账户
export function getAccount(data) {
  return fetch(802301, {...data});
}

// 代理商佣金统计
export function yongjinAcount(data) {
  return fetch(629902, {...data});
}

// 养护产权收益
export function yhcqsy(data) {
  return fetch(629905, {...data});
}