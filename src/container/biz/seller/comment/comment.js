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
} from '@redux/biz/seller/comment';
import {listWrapper} from 'common/js/build-list';
import {showWarnMsg} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bizSellerComment,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class Comment extends React.Component {
    render() {
        const fields = [{
            field: 'content',
            title: '内容'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'comment_status',
            search: true
        }, {
            field: 'userId',
            title: '评论人'
        }, {
            field: 'commodityCode',
            title: '评论对象'
        }, {
            field: 'commentDatetime',
            title: '评论时间',
            type: 'datetime'
        }];
        return this.props.buildList({
          fields,
          pageCode: 629755,
          searchParams: {
            orderColumn: 'comment_datetime',
            orderDir: 'desc'
          }
        });
    }
}

export default Comment;
