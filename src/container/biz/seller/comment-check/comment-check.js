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
} from '@redux/biz/seller/comment-check';
import {listWrapper} from 'common/js/build-list';
import {showWarnMsg} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bizSellerCommentCheck,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class CommentCheck extends React.Component {
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
        }];
        return this.props.buildList({
          fields,
          pageCode: 629755,
          searchParams: {
            status: 'A',
            orderColumn: 'comment_datetime',
            orderDir: 'desc'
          },
          btnEvent: {
            // 审核
            check: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else {
                this.props.history.push(`/biz-comment/comment-check/addedit?check=1&v=1&code=${keys[0]}`);
              }
            }
          }
        });
    }
}

export default CommentCheck;
