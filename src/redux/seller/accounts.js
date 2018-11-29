import { getAccountsByCurUserId } from 'api/account';

const PREFIX = 'SELLER_ACCOUNTS_';
const SET_CNY_ACCOUNT = PREFIX + 'SET_CNY_ACCOUNT';
const SET_TG_ACCOUNT = PREFIX + 'SET_TG_ACCOUNT';
const SET_JF_ACCOUNT = PREFIX + 'SET_JF_ACCOUNT';
const LOADING = PREFIX + 'LOADING';
const CANCEL_LOADING = PREFIX + 'CANCEL_LOADING';

const initState = {
    cnyAccount: {},
    fetching: true
};

export function sellerAccounts(state = initState, action) {
    switch(action.type) {
        case SET_CNY_ACCOUNT:
            return {...state, cnyAccount: action.payload};
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

// 设置平台盈亏账户
function setCnyAccount(data) {
    return { type: SET_CNY_ACCOUNT, payload: data };
}

// 初始化页面数据
export function initData() {
    return dispatch => {
        dispatch(doFetching());
        getAccountsByCurUserId().then((accounts) => {
            dispatch(cancelFetching());
            accounts.forEach(account => {
                if (account.currency === 'CNY') {
                    dispatch(setCnyAccount(account));
                }
            });
        }).catch(() => dispatch(cancelFetching()));
    };
}
