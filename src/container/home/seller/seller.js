import React from 'react';
import { Row, Col } from 'antd';
import Kyyjje from '../kyyjje/kyyjje';
import Txclz from '../txclz/txclz';
import Multiple from '../multiple/multiple';
import Notice from '../notice/notice';
import Zjyhrw from '../zjyhrw/zjyhrw';
import fetch from 'common/js/fetch';
import { moneyFormat, getUserId } from 'common/js/util';
import { tixianAmountCount, claimCount, getAccount } from 'api/count';
import { getUserById } from 'api/user';
import AvatarImg from "../platformComp/avatar.png";

export default class CuringComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            yhData: []
        };
    }
    componentDidMount() {
        Promise.all([
            // 提现处理中
            tixianAmountCount({ statusList: [1, 3], applyUser: getUserId() }),
            // 累积提现货款
            tixianAmountCount({ statusList: [5], applyUser: getUserId() }),
            getAccount({ userId: getUserId() }),
            // 公告
            fetch(805305, {
                object: 'M',
                start: '1',
                limit: '10',
                orderDir: 'desc',
                orderColumn: 'publish_datetime'
            })
        ]).then(([res1, res2, res3, res4]) => {
            res4.list.length && this.setState({
                txclzAmount: res1.totalAmount,
                account1: res2.totalAmount,
                account: res3[0].amount,
                data: [{
                    title: res4.list[0].title,
                    createDatetime: res4.list[0].publishDatetime
                }]
            });
        }).catch();
    }
    goWithdraw() {
        let pathname = this.props.location.pathname;
        if (pathname.indexOf('/own') !== -1) {
            this.props.history.push('/own/withdraw/apply');
        } else if (pathname.indexOf('/curing') !== -1) {
            this.props.history.push('/curing/withdraw/apply');
        } else {
            this.props.history.push('/proxy/withdraw/apply');
        }
    }
    goNotice = () => {
        window.location.href = '/curing/notices';
    }
    render() {
        const title0 = '累计获得货款';
        const title1 = '累计提现货款';
        const title2 = '本月货款收入';
        const { account, txclzAmount, account1 } = this.state;
        return (
            <div>
                <div className="avatar-wrapper">
                    <Avatar size={80} src={AvatarImg} />
                    <div className="user-name">ADMIN</div>
                    <div className="user-role">超级管理员</div>
                </div>
                <div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 4}}>
                        <Col span={8} style={{marginBottom: '20px'}}>
                            <Kyyjje account={account} goWithdraw={this.goWithdraw}/>
                        </Col>
                        <Col span={8}>
                            <Txclz account={txclzAmount}/>
                        </Col>
                        <Col span={8}>
                            <Multiple
                                title0={title0}
                                title1={title1}
                                title2={title2}
                                account0={this.props.cnyAccount}
                                account1={account1}
                                account2={this.props.cnyAccount}/>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 12, sm: 24, md: 24, lg: 32 }}>
                        <Col span={12}>
                            <Notice
                                data={this.state.data}
                                goNotice={this.goNotice}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
