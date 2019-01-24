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
} from '@redux/seller/notices';
import { listWrapper } from 'common/js/build-list';
import { getUserId, showWarnMsg } from 'common/js/util';

@listWrapper(
    state => ({
        ...state.sellerNotices,
        parentCode: state.menu.subMenuCode
    }),
    { setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData }
)
class SelleerNotices extends React.Component {
    render() {
        const fields = [{
            title: '标题',
            field: 'title'
        }, {
            title: '发布时间',
            field: 'createDatetime',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            pageCode: 805305,
            searchParams: {
              status: 1,
              object: 'B',
              start: '1',
              limit: '10',
              orderDir: 'desc',
              orderColumn: 'publish_datetime'
            },
            btnEvent: {
                detail: (keys, items) => {
                    if (!keys || !keys.length) {
                        showWarnMsg('请选择记录');
                    } else if (keys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/own/notices/addedit?code=${keys[0]}&v=1}`);
                    }
                }
            }
        });
    }
}

export default SelleerNotices;
