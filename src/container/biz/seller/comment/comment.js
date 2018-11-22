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
          field: 'nickname',
          title: '评论人'
        }, {
          field: 'cName',
          title: '评论对象'
        }, {
          field: 'commentDatetime',
          title: '评论时间',
          type: 'datetime'
        }, {
          field: 'status',
          title: '状态',
          type: 'select',
          key: 'comment_status',
          search: true
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
