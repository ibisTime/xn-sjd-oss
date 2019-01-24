import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/seller/withdraw';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, getUserId } from 'common/js/util';

@listWrapper(
    state => ({
        ...state.sellerWithdraw,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class SellerWithdraw extends React.Component {
    render() {
        const fields = [{
            field: 'code',
            title: '编号'
        }, {
            field: 'payCardInfo',
            title: '收款银行'
        }, {
            field: 'payCardNo',
            title: '收款卡号'
        }, {
            field: 'amount',
            title: '取现金额',
            amount: true
        }, {
            field: 'fee',
            title: '手续费',
            amount: true
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'withdraw_status',
            search: true
        }, {
            field: 'applyDatetime',
            title: '申请时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }];
        return this.props.buildList({
            fields,
            pageCode: 802355,
            searchParams: {
                channelType: 90,
                applyUser: getUserId()
            },
            btnEvent: {
                apply: (keys, items) => {
                    this.props.history.push(`${this.props.location.pathname}/apply`);
                }
            }
        });
    }
}

export default SellerWithdraw;
