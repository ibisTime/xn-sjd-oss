import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/system/role/menu',
    component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/role',
    component: asyncComponent(() => import('container/security/user/assign'))
  },
  {
    path: '/system/user/pwd_reset',
    component: asyncComponent(() => import('container/security/user/pwdReset'))
  },
  //  系统参数
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  //  系统参数修改
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/security/dataDict/dataDict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/security/dataDict-addedit/dataDict-addedit'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  // 系统管理 -- 消息推送 -- 公告管理
  {
    path: '/public/notice',
    component: asyncComponent(() => import('container/public/notice/notice'))
  },
  // 系统管理 -- 消息推送 -- 公告管理 -- 详情
  {
    path: '/public/notice/addedit',
    component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
  },
  // 系统管理 -- 文章管理 -- 注册协议
  {
    path: '/public/registrationAgreement',
    component: asyncComponent(() => import('container/public/registrationAgreement/registrationAgreement'))
  },
  // 系统管理 -- 文章管理 -- 攻略
  {
    path: '/public/strategy',
    component: asyncComponent(() => import('container/public/strategy/strategy'))
  },
  // 系统管理 -- 广告位管理 -- banner管理
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  // 系统管理 -- 广告位管理 -- banner管理 -- 详情
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  // 财务管理 -- 平台账户 -- 分销规则设置
  {
    path: '/platform/distributionRules',
    component: asyncComponent(() => import('container/finance/platform/distributionRules/distributionRules'))
  },
  // 财务管理 -- 平台账户 -- 分销规则设置 -- 详情
  {
    path: '/platform/distributionRules/addedit',
    component: asyncComponent(() => import('container/finance/platform/distributionRules/distributionRules-addedit'))
  },
  // 财务管理 -- 规则设置 -- 预售分销规则设置
  {
    path: '/platform/pre-distributionRules',
    component: asyncComponent(() => import('container/finance/platform/pre-distributionRules/pre-distributionRules'))
  },
  // 财务管理 -- 规则设置 -- 预售分销规则设置 -- 详情
  {
    path: '/platform/pre-distributionRules/addedit',
    component: asyncComponent(() => import('container/finance/platform/pre-distributionRules/pre-distributionRules-addedit'))
  },
  // 财务管理 -- 规则设置 -- 商城分销规则设置
  {
    path: '/platform/mall-distributionRules',
    component: asyncComponent(() => import('container/finance/platform/mall-distributionRules/mall-distributionRules'))
  },
  // 财务管理 -- 规则设置 -- 商城分销规则设置 -- 详情
  {
    path: '/platform/mall-distributionRules/addedit',
    component: asyncComponent(() => import('container/finance/platform/mall-distributionRules/mall-distributionRules-addedit'))
  },
  // 财务管理 -- 规则设置 -- 用户推荐送钱规则
  {
    path: '/platform/invitationMoneyRules',
    component: asyncComponent(() => import('container/finance/platform/invitationMoneyRules/invitationMoneyRules'))
  },
  // 财务管理 -- 规则设置 -- 用户推荐送钱规则 -- 详情
  {
    path: '/platform/invitationMoneyRules/addedit',
    component: asyncComponent(() => import('container/finance/platform/invitationMoneyRules/invitationMoneyRules-addedit'))
  },
  // 财务管理 -- 平台账户 -- 级差设置
  {
    path: '/platform/gradationRules',
    component: asyncComponent(() => import('container/finance/platform/gradationRules/gradationRules'))
  },
  // 财务管理 -- 平台账户 -- 级差设置 -- 详情
  {
    path: '/platform/gradationRules/addedit',
    component: asyncComponent(() => import('container/finance/platform/gradationRules/gradationRules-addedit'))
  },
  // 财务管理 -- 平台账户 -- 积分规则
  {
    path: '/platform/integralRules',
    component: asyncComponent(() => import('container/finance/platform/integralRules/integralRules'))
  },
  // 财务管理 -- 平台账户 -- 积分规则
  {
    path: '/platform/payRules',
    component: asyncComponent(() => import('container/finance/platform/payRules/payRules'))
  },
  // 财务管理 -- 平台账户 -- 会员等级设置
  {
    path: '/platform/memberLevel',
    component: asyncComponent(() => import('container/finance/platform/memberLevel/memberLevel'))
  },
  {
    path: '/platform/memberLevel/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 积分规则 -- 详情
  {
    path: '/platform/integralRules/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/platform/payRules/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 碳泡泡规则
  {
    path: '/platform/tppRules',
    component: asyncComponent(() => import('container/finance/platform/tppRules/tppRules'))
  },
  // 财务管理 -- 平台账户 -- 碳泡泡规则 -- 详情
  {
    path: '/platform/tppRules/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 平台账户 -- 邀请好友设置
  {
    path: '/platform/invitation',
    component: asyncComponent(() => import('container/finance/platform/invitation/invitation'))
  },
  // 财务管理 -- 平台账户 -- 邀请好友设置 -- 详情
  {
    path: '/platform/invitation/addedit',
    component: asyncComponent(() => import('container/finance/platform/invitation/invitation-addedit'))
  },
  // 财务管理 -- 平台账户 -- 账户查询
  {
    path: '/platform/account',
    component: asyncComponent(() => import('container/finance/platform/account/account'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 流水查询
  {
    path: '/platform/account/flows',
    component: asyncComponent(() => import('container/finance/platform/account/account-flows'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 提现回录
  {
    path: '/platform/account/enter',
    component: asyncComponent(() => import('container/finance/platform/account/account-enter'))
  },
  // 财务管理 -- 平台账户 -- 账户查询 -- 资金分布
  {
    path: '/platform/account/accounts',
    component: asyncComponent(() => import('container/finance/platform/account/account-list'))
  },
  // 财务管理 -- 平台账户 -- 流水查询
  {
    path: '/platform/flows',
    component: asyncComponent(() => import('container/finance/platform/flows/flows'))
  },
  // 财务管理 -- 充值管理 -- 线下充值
  {
    path: '/recharge/recharges',
    component: asyncComponent(() => import('container/finance/recharge/recharges/recharges'))
  },
  // 财务管理 -- 充值管理 -- 线下充值 -- 详情
  {
    path: '/recharge/recharges/addedit',
    component: asyncComponent(() => import('container/finance/recharge/recharges/recharges-addedit'))
  },
  // 财务管理 -- 充值管理 -- 充值查询
  {
    path: '/recharge/records',
    component: asyncComponent(() => import('container/finance/recharge/records/records'))
  },
  // 财务管理 -- 充值管理 -- 充值查询 -- 详情
  {
    path: '/recharge/records/addedit',
    component: asyncComponent(() => import('container/finance/recharge/recharges/recharges-addedit'))
  },
  // 财务管理 -- 取现管理 -- 取现规则
  {
    path: '/withdraw/rules',
    component: asyncComponent(() => import('container/finance/withdraw/rules/rules'))
  },
  // 财务管理 -- 取现管理 -- 取现规则 -- 详情
  {
    path: '/withdraw/rules/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/withdraw',
    component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw'))
  },
  // 财务管理 -- 取现管理 -- 线下取现 -- 详情
  {
    path: '/withdraw/withdraw/addedit',
    component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw-addedit'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/records',
    component: asyncComponent(() => import('container/finance/withdraw/records/records'))
  },
  // 财务管理 -- 取现管理 -- 线下取现
  {
    path: '/withdraw/records/addedit',
    component: asyncComponent(() => import('container/finance/withdraw/withdraw/withdraw-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 产权方管理
  {
    path: '/property/property',
    component: asyncComponent(() => import('container/biz/property/property/property'))
  },
  // 业务管理 -- 产权方管理 -- 产权方管理 -- 待申请
  {
    path: '/property/property/addedit',
    component: asyncComponent(() => import('container/biz/property/property/property-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 产权方管理
  {
    path: '/property/binds',
    component: asyncComponent(() => import('container/biz/property/binds/binds'))
  },
  // 业务管理 -- 产权方管理 -- 产权方管理 -- 待申请
  {
    path: '/property/binds/addedit',
    component: asyncComponent(() => import('container/biz/property/binds/binds-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 产权方管理  -- 账户查询
  {
    path: '/property/property/accounts',
    component: asyncComponent(() => import('container/biz/property/property/property-accounts'))
  },
  // 业务管理 -- 产权方管理 -- 产品分类管理
  {
    path: '/property/types',
    component: asyncComponent(() => import('container/biz/property/types/types'))
  },
  // 业务管理 -- 产权方管理 -- 产品分类管理
  {
    path: '/property/types/addedit',
    component: asyncComponent(() => import('container/biz/property/types/types-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 预售产品分类管理
  {
    path: '/pre/preTypes',
    component: asyncComponent(() => import('container/biz/property/pre-types/pre-types'))
  },
  // 业务管理 -- 产权方管理 -- 产品分类管理
  {
    path: '/pre/preTypes/addedit',
    component: asyncComponent(() => import('container/biz/property/pre-types/pre-types-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 产品管理
  {
    path: '/property/products',
    component: asyncComponent(() => import('container/biz/property/products/products'))
  },
    // 业务管理 -- 产权方管理 -- 预售产品管理
  {
    path: '/property/preSaleProducts',
    component: asyncComponent(() => import('container/biz/property/preSaleProducts/preSaleProducts'))
  },
  // 业务管理 -- 产权方管理 -- 预售产品管理 -- 审核、详情
  {
      path: '/property/preSaleProducts/addedit',
      component: asyncComponent(() => import('container/biz/property/preSaleProducts/preSaleProducts-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 产品管理 -- 审核、详情
  {
    path: '/property/products/addedit',
    component: asyncComponent(() => import('container/biz/property/products/products-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 古树管理
  {
    path: '/property/trees',
    component: asyncComponent(() => import('container/biz/property/trees/trees'))
  },
  // 业务管理 -- 产权方管理 -- 古树管理 -- 详情
  {
    path: '/property/trees/addedit',
    component: asyncComponent(() => import('container/biz/property/trees/trees-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 账户查询
  {
    path: '/property/accounts',
    component: asyncComponent(() => import('container/biz/property/accounts/accounts'))
  },
  // 业务管理 -- 产权方管理 -- 账户查询 -- 流水查询
  {
    path: '/property/accounts/flows',
    component: asyncComponent(() => import('container/biz/user/accounts/account-flows'))
  },
  // 业务管理 -- 产权方管理 -- 账户查询 -- 流水查询 -- 详情
  {
    path: '/property/accounts/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 产权方管理 -- 流水查询
  {
    path: '/property/flows',
    component: asyncComponent(() => import('container/biz/property/flows/flows'))
  },
  // 业务管理 -- 商家管理 -- 商家管理
  {
    path: '/seller/seller',
    component: asyncComponent(() => import('container/biz/seller/seller'))
  },
  // 业务管理 -- 商家管理 -- 商家管理 -- 待申请
  {
    path: '/seller/seller/addedit',
    component: asyncComponent(() => import('container/biz/seller/seller-addedit'))
  },
  // 业务管理 -- 商家管理 -- 商家管理 -- 账户查询
  {
    path: '/seller/seller/accounts',
    component: asyncComponent(() => import('container/biz/seller/seller-accounts'))
  },
  // 业务管理 -- 商家管理 -- 商品分类管理
  {
    path: '/seller/types',
    component: asyncComponent(() => import('container/biz/seller/types/types'))
  },
  // 业务管理 -- 商家管理 -- 商品分类管理 -- 新增
  {
    path: '/seller/types/addedit',
    component: asyncComponent(() => import('container/biz/seller/types/types-addedit'))
  },
  // 业务管理 -- 商家管理 -- 商品管理
  {
    path: '/seller/biz-products',
    component: asyncComponent(() => import('container/biz/seller/products/products'))
  },
  // 业务管理 -- 商家管理 -- 商品管理 -- 详情
  {
    path: '/seller/biz-products/addedit',
    component: asyncComponent(() => import('container/biz/seller/productEdit/productEdit'))
  },
  // 商城管理 -- 商城管理 -- 邮费查询
  {
    path: '/seller/biz-postage',
    component: asyncComponent(() => import('container/biz/seller/postage/postage'))
  },
  // 商城管理 -- 商城管理 -- 邮费查询 -- 详情
  {
    path: '/seller/biz-postage/addedit',
    component: asyncComponent(() => import('container/biz/seller/postage/postage-addedit'))
  },
  // 商城管理 -- 商城管理 -- 售后查询
  {
    path: '/seller/after-sale',
    component: asyncComponent(() => import('container/biz/seller/after-sale/after-sale'))
  },
  // 商城管理 -- 商城管理 -- 售后查询 -- 详情
  {
    path: '/seller/after-sale/addedit',
    component: asyncComponent(() => import('container/biz/seller/after-sale/after-sale-addedit'))
  },
  // 业务管理 -- 商家管理 -- 商城订单管理
  {
    path: '/seller/biz-order',
    component: asyncComponent(() => import('container/biz/seller/order/order'))
  },
  // 业务管理 -- 商家管理 -- 商城订单管理 -- 单店铺订单
  {
    path: '/seller/biz-order/orderSingle',
    component: asyncComponent(() => import('container/biz/seller/order/orderSingle'))
  },
  // 业务管理 -- 商家管理 -- 商城订单管理 -- 单店铺订单 -- 详情
  {
    path: '/seller/biz-order/addedit',
    component: asyncComponent(() => import('container/biz/seller/order/order-addedit'))
  },
  // 商城管理 -- 商城管理 -- 账户查询
  {
    path: '/seller/biz-accounts',
    component: asyncComponent(() => import('container/biz/seller/accounts/accounts'))
  },
  // 商城管理 -- 商城管理 -- 账户查询 -- 流水查询
  {
    path: '/seller/biz-accounts/flows',
    component: asyncComponent(() => import('container/biz/seller/accounts/account-flows'))
  },
  // 商城管理 -- 商城管理 -- 流水查询
  {
    path: '/seller/biz-flows',
    component: asyncComponent(() => import('container/biz/seller/flows/flows'))
  },
  // 商城管理 -- 商城管理 -- 流水查询 -- 详情
  {
    path: '/seller/biz-flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 关键字设置
  {
    path: '/biz-comment/keyword',
    component: asyncComponent(() => import('container/biz/seller/keyword/keyword'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 关键字设置 -- 详情
  {
    path: '/biz-comment/keyword/addedit',
    component: asyncComponent(() => import('container/biz/seller/keyword/keyword-addedit'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 评论审核
  {
    path: '/biz-comment/comment-check',
    component: asyncComponent(() => import('container/biz/seller/comment-check/comment-check'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 评论审核 -- 审核
  {
    path: '/biz-comment/comment-check/addedit',
    component: asyncComponent(() => import('container/biz/seller/comment-check/comment-check-addedit'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 评论查询
  {
    path: '/biz-comment/comment',
    component: asyncComponent(() => import('container/biz/seller/comment/comment'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 关键字设置 -- 详情
  {
    path: '/biz-comment/comment/addedit',
    component: asyncComponent(() => import('container/biz/seller/comment/comment-addedit'))
  },
  // 业务管理 -- 商城管理 -- 客服管理 -- 消息查询
  {
    path: '/biz-message/message',
    component: asyncComponent(() => import('container/biz/seller/messages/messages'))
  },
  // 业务管理 -- 商城管理 -- 客服管理 -- 待回复消息 -- 回复
  {
    path: '/biz-message/message/addedit',
    component: asyncComponent(() => import('container/biz/seller/unread/unread-addedit'))
  },
  // 业务管理 -- 商城管理 -- 客服管理 -- 待回复消息
  {
    path: '/biz-message/unread',
    component: asyncComponent(() => import('container/biz/seller/unread/unread'))
  },
  // 业务管理 -- 商城管理 -- 客服管理 -- 待回复消息 -- 回复
  {
    path: '/biz-message/unread/addedit',
    component: asyncComponent(() => import('container/biz/seller/unread/unread-addedit'))
  },
  // 业务管理 -- 商城管理 -- 评论管理 -- 关键字设置 -- 详情
  {
    path: '/biz-comment/comment/addedit',
    component: asyncComponent(() => import('container/biz/seller/comment/comment-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 养护方管理
  {
    path: '/conserve/conserve',
    component: asyncComponent(() => import('container/biz/conserve/conserve/conserve'))
  },
  // 业务管理 -- 养护方管理 -- 养护方管理 -- 待申请
  {
    path: '/conserve/conserve/addedit',
    component: asyncComponent(() => import('container/biz/conserve/conserve/conserve-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 养护方管理 -- 绑定产权方
  {
    path: '/conserve/conserve/binds',
    component: asyncComponent(() => import('container/biz/conserve/conserve/conserve-binds'))
  },
  // 业务管理 -- 养护方管理 -- 养护方管理 -- 绑定产权方 -- 详情
  {
    path: '/conserve/conserve/binds/addedit',
    component: asyncComponent(() => import('container/biz/property/property/property-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 养护方管理 -- 账户查询
  {
    path: '/conserve/conserve/accounts',
    component: asyncComponent(() => import('container/biz/conserve/conserve/conserve-accounts'))
  },
  // 业务管理 -- 养护方管理 -- 养护人查看
  {
    path: '/conserve/users',
    component: asyncComponent(() => import('container/biz/conserve/users/users'))
  },
  // 业务管理 -- 养护方管理 -- 养护项目查看
  {
    path: '/conserve/projects',
    component: asyncComponent(() => import('container/biz/conserve/projects/projects'))
  },
  // 业务管理 -- 养护方管理 -- 养护项目查看 -- 详情
  {
    path: '/conserve/projects/addedit',
    component: asyncComponent(() => import('container/biz/conserve/projects/projects-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 养护记录管理
  {
    path: '/conserve/records',
    component: asyncComponent(() => import('container/biz/conserve/records/records'))
  },
  // 业务管理 -- 养护方管理 -- 养护记录管理 -- 详情
  {
    path: '/conserve/records/addedit',
    component: asyncComponent(() => import('container/curing/tasks/tasks-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 账户查询
  {
    path: '/conserve/accounts',
    component: asyncComponent(() => import('container/biz/conserve/accounts/accounts'))
  },
  // 业务管理 -- 养护方管理 -- 账户查询 -- 流水查询
  {
    path: '/conserve/accounts/flows',
    component: asyncComponent(() => import('container/biz/user/accounts/account-flows'))
  },
  // 业务管理 -- 养护方管理 -- 账户查询 -- 流水查询 -- 详情
  {
    path: '/conserve/accounts/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 流水查询
  {
    path: '/conserve/flows',
    component: asyncComponent(() => import('container/biz/conserve/flows/flows'))
  },
  // 业务管理 -- 用户管理 -- 会员查询
  {
    path: '/user/users',
    component: asyncComponent(() => import('container/biz/user/users/users'))
  },
  // 业务管理 -- 用户管理 -- 会员查询 -- 详情
  {
    path: '/user/users/addedit',
    component: asyncComponent(() => import('container/biz/user/users/users-addedit'))
  },
  // 业务管理 -- 用户管理 -- 会员查询 -- 账户查询
  {
    path: '/user/users/accounts',
    component: asyncComponent(() => import('container/biz/user/users/user-accounts'))
  },
  // // 业务管理 -- 用户管理 -- 签到记录
  // {
  //   path: '/user/users/signIn',
  //   component: asyncComponent(() => import('container/biz/user/users/user-signIn'))
  // },
  // 业务管理 -- 签到记录
  {
    path: '/user/signIn',
    component: asyncComponent(() => import('container/biz/user/sign-in/sign-in'))
  },
  // 业务管理 -- 用户管理 -- 分享记录
  {
    path: '/user/shares',
    component: asyncComponent(() => import('container/biz/user/shares/shares'))
  },
  // 业务管理 -- 用户管理 -- 碳泡泡赠送记录
  {
    path: '/user/gives',
    component: asyncComponent(() => import('container/biz/user/gives/gives'))
  },
  // 业务管理 -- 用户管理 -- 账户查询
  {
    path: '/user/accounts',
    component: asyncComponent(() => import('container/biz/user/accounts/accounts'))
  },
  // 业务管理 -- 用户管理 -- 账户查询 -- 流水查询
  {
    path: '/user/accounts/flows',
    component: asyncComponent(() => import('container/biz/user/accounts/account-flows'))
  },
  // 业务管理 -- 用户管理 -- 账户查询 -- 流水查询 -- 详情
  {
    path: '/user/accounts/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 用户管理 -- 流水查询
  {
    path: '/user/flows',
    component: asyncComponent(() => import('container/biz/user/flows/flows'))
  },
  // 业务管理 -- 用户管理 -- 流水查询 -- 详情
  {
    path: '/user/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 业务管理 -- 认养管理 -- 集体认养订单管理
  {
    path: '/claim/groupOrders',
    component: asyncComponent(() => import('container/biz/claim/groupOrders/groupOrders'))
  },
  // 业务管理 -- 认养管理 -- 集体认养订单管理 -- 详情
  {
    path: '/claim/groupOrders/addedit',
    component: asyncComponent(() => import('container/biz/claim/groupOrders/groupOrders-addedit'))
  },
  // 业务管理 -- 认养管理 -- 个人认养订单管理
  {
    path: '/claim/personOrders',
    component: asyncComponent(() => import('container/biz/claim/personOrders/personOrders'))
  },
  // 业务管理 -- 认养管理 -- 个人认养订单管理 -- 详情
  {
    path: '/claim/personOrders/addedit',
    component: asyncComponent(() => import('container/biz/claim/personOrders/personOrders-addedit'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询
  {
    path: '/claim/rights',
    component: asyncComponent(() => import('container/biz/claim/rights/rights'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 日志查看
  {
    path: '/claim/rights/logs',
    component: asyncComponent(() => import('container/biz/claim/rights/rights-logs'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 发放礼物
  {
    path: '/claim/rights/giveGift',
    component: asyncComponent(() => import('container/biz/claim/rights/giveGift'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 礼物订单
  {
    path: '/claim/rights/giftOrders',
    component: asyncComponent(() => import('container/biz/claim/rights/giftOrders'))
  },
    // 业务管理 -- 认养管理 -- 认养权查询 -- 证书
  {
    path: '/claim/rights/certificate',
    component: asyncComponent(() => import('container/biz/claim/rights/certificate'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 礼物订单 -- 详情
  {
    path: '/claim/rights/giftOrders/addedit',
    component: asyncComponent(() => import('container/biz/claim/rights/giveGift'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 礼物订单 -- 发货
  {
    path: '/claim/rights/giftOrders/delivery',
    component: asyncComponent(() => import('container/biz/claim/rights/delivery'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 转送记录
  {
    path: '/claim/rights/records',
    component: asyncComponent(() => import('container/biz/claim/rights/records'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 转送记录 -- 详情
  {
    path: '/claim/rights/records/addedit',
    component: asyncComponent(() => import('container/biz/claim/rights/records-addedit'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 对应文章
  {
    path: '/claim/rights/articles',
    component: asyncComponent(() => import('container/biz/claim/rights/articles'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 对应文章 -- 详情
  {
    path: '/claim/rights/articles/addedit',
    component: asyncComponent(() => import('container/biz/claim/rights/articles-addedit'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 碳泡泡产生订单
  {
    path: '/claim/rights/tppOrders',
    component: asyncComponent(() => import('container/biz/claim/rights/tppOrders'))
  },
  // 业务管理 -- 认养管理 -- 认养权查询 -- 碳泡泡产生订单 -- 详情
  {
    path: '/claim/rights/tppOrders/addedit',
    component: asyncComponent(() => import('container/biz/claim/rights/tppOrders-addedit'))
  },
  // 业务管理 -- 预售管理 -- 预售订单管理
  {
    path: '/pre/preOrder',
    component: asyncComponent(() => import('container/biz/pre/preOrder/preOrder'))
  },
  // 业务管理 -- 预售管理 -- 预售订单管理 -- 详情
  {
    path: '/pre/preOrder/addedit',
    component: asyncComponent(() => import('container/biz/pre/preOrder/preOrder-addedit'))
  },
  // 业务管理 -- 预售管理 -- 寄售订单管理
  {
    path: '/pre/conOrder',
    component: asyncComponent(() => import('container/biz/pre/conOrder/conOrder'))
  },
  // 业务管理 -- 预售管理 -- 寄售订单管理 -- 详情
  {
    path: '/pre/conOrder/addedit',
    component: asyncComponent(() => import('container/biz/pre/conOrder/conOrder-addedit'))
  },
  // 业务管理 -- 预售管理 -- 资产管理
  {
    path: '/pre/asset',
    component: asyncComponent(() => import('container/biz/pre/asset/asset'))
  },
  // 业务管理 -- 预售管理 -- 资产管理
  {
    path: '/pre/asset/wuliudan',
    component: asyncComponent(() => import('container/biz/pre/asset/wuliudan'))
  },
  // 认养预售 -- 预售管理 -- 预售发货查询
  {
    path: '/pre/fahuo',
    component: asyncComponent(() => import('container/biz/pre/fahuo/fahuo'))
  },
  // 业务管理 -- 预售管理 -- 资产管理
  {
    path: '/pre/fahuo/addedit',
    component: asyncComponent(() => import('container/biz/pre/fahuo/fahuo-addedit'))
  },
  // 业务管理 -- 预售管理 -- 资产管理 -- 详情
  {
    path: '/pre/asset/wuliudan/fahuo',
    component: asyncComponent(() => import('container/biz/pre/asset/fahuo-addedit'))
  },
  // 业务管理 -- 情感频道
  {
    path: '/emotion/articles',
    component: asyncComponent(() => import('container/biz/emotion/articles/articles'))
  },
  // 业务管理 -- 情感频道 -- 详情
  {
    path: '/emotion/articles/addedit',
    component: asyncComponent(() => import('container/biz/emotion/articles/articles-addedit'))
  },
  // 业务管理 -- 道具管理 -- 道具管理
  {
    path: '/prop/props',
    component: asyncComponent(() => import('container/biz/prop/props/props'))
  },
  // 业务管理 -- 道具管理 -- 道具管理 -- 详情
  {
    path: '/prop/props/addedit',
    component: asyncComponent(() => import('container/biz/prop/props/props-addedit'))
  },
  // 业务管理 -- 道具管理 -- 道具购买记录
  {
    path: '/prop/buyRecords',
    component: asyncComponent(() => import('container/biz/prop/buyRecords/buyRecords'))
  },
  // 业务管理 -- 道具管理 -- 道具使用记录
  {
    path: '/prop/useRecords',
    component: asyncComponent(() => import('container/biz/prop/useRecords/useRecords'))
  },
  // 业务管理 -- 道具管理 -- 道具管理
  {
    path: '/danmu/danmu',
    component: asyncComponent(() => import('container/biz/danmu/danmu'))
  },
  // 业务管理 -- 道具管理 -- 道具管理 -- 详情
  {
    path: '/danmu/danmu/addedit',
    component: asyncComponent(() => import('container/biz/danmu/danmu-addedit'))
  },
  // 业务管理 -- 业务规则 -- 好友排行权重设置
  {
    path: '/rules/weight',
    component: asyncComponent(() => import('container/biz/rules/weight/weight'))
  },
  // 业务管理 -- 业务规则 -- 好友排行权重设置 -- 详情
  {
    path: '/rules/weight/addedit',
    component: asyncComponent(() => import('container/biz/rules/weight/weight-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 代理商管理
  {
    path: '/agent/agents',
    component: asyncComponent(() => import('container/agent/agents/agents'))
  },
  // 代理管理 -- 代理商管理 -- 代理商管理 -- 重置密码
  {
    path: '/agent/agents/pwd_reset',
    component: asyncComponent(() => import('container/agent/agents/agents-pwdReset'))
  },
  // 代理管理 -- 代理商管理 -- 代理商管理 -- 详情
  {
    path: '/agent/agents/addedit',
    component: asyncComponent(() => import('container/agent/agents/agents-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 代理商管理 -- 账户查询
  {
    path: '/agent/agents/accounts',
    component: asyncComponent(() => import('container/agent/agents/agents-accounts'))
  },
  // 代理管理 -- 代理商管理 -- 认养结算
  {
    path: '/agent/settlement',
    component: asyncComponent(() => import('container/agent/settlement/settlement'))
  },
  // 代理管理 -- 代理商管理 -- 认养结算 -- 详情
  {
    path: '/agent/settlement/addedit',
    component: asyncComponent(() => import('container/agent/settlement/settlement-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 预售结算
  {
    path: '/agent/pre-settlement',
    component: asyncComponent(() => import('container/agent/pre-settlement/pre-settlement'))
  },
  // 代理管理 -- 代理商管理 -- 预售结算 -- 详情
  {
    path: '/agent/pre-settlement/addedit',
    component: asyncComponent(() => import('container/agent/pre-settlement/pre-settlement-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 集体结算
  {
    path: '/agent/group-settlement',
    component: asyncComponent(() => import('container/agent/group-settlement/group-settlement'))
  },
  // 代理管理 -- 代理商管理 -- 集体结算 -- 详情
  {
    path: '/agent/group-settlement/addedit',
    component: asyncComponent(() => import('container/agent/group-settlement/group-settlement-addedit'))
  },
  // 代理管理 -- 商家管理 -- 商城结算
  {
    path: '/mall/mall-settlement',
    component: asyncComponent(() => import('container/agent/mall-settlement/mall-settlement'))
  },
  // 代理管理 -- 商家管理 -- 商城结算 -- 详情
  {
    path: '/mall/mall-settlement/addedit',
    component: asyncComponent(() => import('container/agent/mall-settlement/mall-settlement-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 业绩查询
  {
    path: '/agent/achievement',
    component: asyncComponent(() => import('container/agent/achievement/achievement'))
  },
  // 代理管理 -- 代理商管理 -- 账户查询
  {
    path: '/agent/accounts',
    component: asyncComponent(() => import('container/agent/accounts/accounts'))
  },
  // 代理管理 -- 代理商管理 -- 账户查询 -- 流水查询
  {
    path: '/agent/accounts/flows',
    component: asyncComponent(() => import('container/biz/user/accounts/account-flows'))
  },
  // 代理管理 -- 代理商管理 -- 账户查询 -- 流水查询 -- 详情
  {
    path: '/agent/accounts/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 流水查询
  {
    path: '/agent/flows',
    component: asyncComponent(() => import('container/agent/flows/flows'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理
  {
    path: '/own/products',
    component: asyncComponent(() => import('container/own/products/products'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理 -- 编辑/详情
  {
    path: '/own/products/addedit',
    component: asyncComponent(() => import('container/own/productEdit/productEdit'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理 -- 详情
  {
    path: '/own/products/detail',
    component: asyncComponent(() => import('container/own/productDetail/productDetail'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理 -- 树木查看
  {
    path: '/own/products/viewTrees',
    component: asyncComponent(() => import('container/own/trees/trees'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理 -- 树木查看 -- 详情
  {
    path: '/own/products/viewTrees/addedit',
    component: asyncComponent(() => import('container/own/trees/trees-addedit'))
  },
    // 产权端管理 -- 业务管理 -- 产品管理 -- 编辑/详情
  {
    path: '/own/preSaleProducts/addedit',
    component: asyncComponent(() => import('container/own/preSaleProductEdit/preSaleProductEdit'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理
  {
    path: '/own/trees',
    component: asyncComponent(() => import('container/own/trees/trees'))
  },
  // 产权端管理 -- 业务管理 -- 产品管理 -- 编辑/详情
  {
    path: '/own/trees/addedit',
    component: asyncComponent(() => import('container/own/trees/trees-addedit'))
  },
  // 产权端管理 -- 业务管理 -- 多棵产品编辑
  {
    path: '/own/productEdit',
    component: asyncComponent(() => import('container/own/productEdit/productEdit'))
  },
    // 产权端管理 -- 业务管理 -- 预售产品编辑
  {
    path: '/own/preSaleProductEdit',
    component: asyncComponent(() => import('container/own/preSaleProductEdit/preSaleProductEdit'))
  },
    // 产权端管理 -- 业务管理 -- 预售产品列表
  {
    path: '/own/preSaleProducts',
    component: asyncComponent(() => import('container/own/preSaleProducts/preSaleProducts'))
  },
  // 产权端管理 -- 业务管理 -- 认养权管理
  {
    path: '/own/claimOrders',
    component: asyncComponent(() => import('container/own/claimOrders/claimOrders'))
  },
  // 产权端管理 -- 业务管理 -- 认养权管理 -- 详情
  {
    path: '/own/claimOrders/addedit',
    component: asyncComponent(() => import('container/own/claimOrders/claimOrders-addedit'))
  },
  // 产权端管理 -- 业务管理 -- 养护方绑定
  {
    path: '/own/claimBind',
    component: asyncComponent(() => import('container/own/claimBind/claimBind'))
  },
  // 产权端管理 -- 业务管理 -- 资产管理
  {
    path: '/own/asset',
    component: asyncComponent(() => import('container/own/asset/asset'))
  },
  // 产权端管理 -- 业务管理 -- 资产管理
  {
    path: '/own/wuliudan',
    component: asyncComponent(() => import('container/own/asset/wuliudan'))
  },
  // 产权端管理 -- 业务管理 -- 资产管理
  {
    path: '/own/asset/wuliudan/fahuo',
    component: asyncComponent(() => import('container/own/asset/fahuo-addedit'))
  },
  // 产权端管理 -- 资金管理 -- 我的账户
  {
    path: '/own/accounts',
    component: asyncComponent(() => import('container/own/accounts/accounts'))
  },
  // 产权端管理 -- 资金管理 -- 账户流水
  {
    path: '/own/flows',
    component: asyncComponent(() => import('container/own/flows/flows'))
  },
  // 产权端管理 -- 资金管理 -- 账户流水 -- 详情
  {
    path: '/own/flows/addedit',
    component: asyncComponent(() => import('container/finance/flows-addedit/flows-addedit'))
  },
  // 产权端管理 -- 资金管理 -- 提现
  {
    path: '/own/withdraw',
    component: asyncComponent(() => import('container/own/withdraw/withdraw'))
  },
  // 产权端管理 -- 资金管理 -- 提现 -- 详情
  {
    path: '/own/withdraw/addedit',
    component: asyncComponent(() => import('container/own/withdraw/withdraw-addedit'))
  },
  // 产权端管理 -- 资金管理 -- 提现 -- 申请
  {
    path: '/own/withdraw/apply',
    component: asyncComponent(() => import('container/own/withdraw/apply'))
  },
  // 产权端管理 -- 个人设置 -- 个人信息
  {
    path: '/own/infos',
    component: asyncComponent(() => import('container/own/infos/infos'))
  },
  // 产权端管理 -- 个人设置 -- 系统公告
  {
    path: '/own/notices',
    component: asyncComponent(() => import('container/own/notices/notices'))
  },
  // 产权端管理 -- 个人设置 -- 系统公告 -- 打开
  {
    path: '/own/notices/addedit',
    component: asyncComponent(() => import('container/own/notices/notices-addedit'))
  },
  // 产权端管理 -- 个人设置 -- 安全管理
  {
    path: '/own/security',
    component: asyncComponent(() => import('container/own/security/security'))
  },
  // 产权端管理 -- 个人设置 -- 关于我们
  {
    path: '/own/aboutus',
    component: asyncComponent(() => import('container/own/aboutus/aboutus'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理
  {
    path: '/curing/tasks',
    component: asyncComponent(() => import('container/curing/tasks/tasks'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理 -- 详情
  {
    path: '/curing/tasks/addedit',
    component: asyncComponent(() => import('container/curing/tasks/tasks-addedit'))
  },
  // 养护端管理 -- 业务管理 -- 养护记录查询
  {
    path: '/curing/tasks/records',
    component: asyncComponent(() => import('container/curing/tasks/tasks-records'))
  },
  // 养护端管理 -- 业务管理 -- 养护记录查询 -- 详情
  {
    path: '/curing/tasks/records/addedit',
    component: asyncComponent(() => import('container/curing/tasks/tasks-addedit'))
  },
  // 养护端管理 -- 业务管理 -- 养护记录查询 -- 详情
  {
    path: '/curing/tasks/treeDetail',
    component: asyncComponent(() => import('container/curing/tasks/treeDetail'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理
  {
    path: '/curing/projects',
    component: asyncComponent(() => import('container/curing/projects/projects'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理 -- 详情
  {
    path: '/curing/projects/addedit',
    component: asyncComponent(() => import('container/curing/projects/projects-addedit'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理
  {
    path: '/curing/users',
    component: asyncComponent(() => import('container/curing/users/users'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理 -- 详情
  {
    path: '/curing/users/addedit',
    component: asyncComponent(() => import('container/curing/users/users-addedit'))
  },
  // 养护端管理 -- 业务管理 -- 我的产权方
  {
    path: '/curing/owns',
    component: asyncComponent(() => import('container/curing/owns/owns'))
  },
  // 养护端管理 -- 业务管理 -- 我的产权方 -- 详情
  {
    path: '/curing/owns/addedit',
    component: asyncComponent(() => import('container/curing/owns/owns-addedit'))
  },
  // 养护端管理 -- 资金管理 -- 提现
  {
    path: '/curing/accounts',
    component: asyncComponent(() => import('container/own/accounts/accounts'))
  },
  // 养护端管理 -- 资金管理 -- 提现
  {
    path: '/curing/withdraw',
    component: asyncComponent(() => import('container/own/withdraw/withdraw'))
  },
  // 养护端管理 -- 资金管理 -- 提现 -- 详情
  {
    path: '/curing/withdraw/addedit',
    component: asyncComponent(() => import('container/own/withdraw/withdraw-addedit'))
  },
  // 养护端管理 -- 资金管理 -- 提现 -- 申请
  {
    path: '/curing/withdraw/apply',
    component: asyncComponent(() => import('container/own/withdraw/apply'))
  },
  // 养护端管理 -- 资金管理 -- 账户流水
  {
    path: '/curing/flows',
    component: asyncComponent(() => import('container/curing/flows/flows'))
  },
  // 养护端管理 -- 资金管理 -- 账户流水 -- 详情
  {
    path: '/curing/flows/addedit',
    component: asyncComponent(() => import('container/curing/flows/flows-addedit'))
  },
  // 养护端管理 -- 个人设置 -- 个人信息
  {
    path: '/curing/infos',
    component: asyncComponent(() => import('container/own/infos/infos'))
  },
  // 养护端管理 -- 个人设置 -- 系统公告
  {
    path: '/curing/notices',
    component: asyncComponent(() => import('container/curing/notices/notices'))
  },
  // 养护端管理 -- 个人设置 -- 系统公告 -- 打开
  {
    path: '/curing/notices/addedit',
    component: asyncComponent(() => import('container/curing/notices/notices-addedit'))
  },
  // 养护端管理 -- 个人设置 -- 安全管理
  {
    path: '/curing/security',
    component: asyncComponent(() => import('container/own/security/security'))
  },
  // 养护端管理 -- 个人设置 -- 关于我们
  {
    path: '/curing/aboutus',
    component: asyncComponent(() => import('container/curing/aboutus/aboutus'))
  },
  // 代理商 -- 代理商 -- 用户查询
  {
    path: '/proxy/users',
    component: asyncComponent(() => import('container/proxy/users/users'))
  },
  // 代理商 -- 代理商 -- 下级代理查询
  {
    path: '/proxy/subordinates',
    component: asyncComponent(() => import('container/proxy/subordinates/subordinates'))
  },
  // 代理商 -- 代理商 -- 下级代理查询 -- 详情
  {
    path: '/proxy/subordinates/addedit',
    component: asyncComponent(() => import('container/proxy/subordinates/subordinates-addedit'))
  },
  // 代理商 -- 代理商 -- 已结算佣金
  {
    path: '/proxy/settled',
    component: asyncComponent(() => import('container/proxy/settled/settled'))
  },
  // 代理商 -- 代理商 -- 待结算佣金
  {
    path: '/proxy/unsettled',
    component: asyncComponent(() => import('container/proxy/unsettled/unsettled'))
  },
  // 代理商 -- 代理商 -- 流水查询
  {
    path: '/proxy/accounts',
    component: asyncComponent(() => import('container/own/accounts/accounts'))
  },
  // 代理商 -- 代理商 -- 流水查询
  {
    path: '/proxy/flows',
    component: asyncComponent(() => import('container/proxy/flows/flows'))
  },
  // 代理商 -- 代理商 -- 提现
  {
    path: '/proxy/withdraw',
    component: asyncComponent(() => import('container/own/withdraw/withdraw'))
  },
  // 代理商 -- 代理商 -- 提现 -- 详情
  {
    path: '/proxy/withdraw/addedit',
    component: asyncComponent(() => import('container/own/withdraw/withdraw-addedit'))
  },
  // 代理商 -- 代理商 -- 提现 -- 申请
  {
    path: '/proxy/withdraw/apply',
    component: asyncComponent(() => import('container/own/withdraw/apply'))
  },
  // 代理商 -- 业务员管理 -- 业务员查询
  {
    path: '/proxy/salesmen',
    component: asyncComponent(() => import('container/proxy/salesmen/salesmen'))
  },
  // 代理商 -- 业务员管理 -- 业务员查询 -- 详情
  {
    path: '/proxy/salesmen/addedit',
    component: asyncComponent(() => import('container/proxy/salesmen/salesmen-addedit'))
  },
  // 代理商 -- 个人设置 -- 个人信息
  {
    path: '/proxy/infos',
    component: asyncComponent(() => import('container/proxy/infos/infos'))
  },
  // 代理商 -- 个人设置 -- 公告管理
  {
    path: '/proxy/notices',
    component: asyncComponent(() => import('container/proxy/notices/notices'))
  },
  // 代理商 -- 个人设置 -- 公告管理 -- 打开
  {
    path: '/proxy/notices/addedit',
    component: asyncComponent(() => import('container/proxy/notices/notices-addedit'))
  },
  // 代理商 -- 个人设置 -- 安全管理
  {
    path: '/proxy/security',
    component: asyncComponent(() => import('container/own/security/security'))
  },
  // 养护端管理 -- 个人设置 -- 关于我们
  {
    path: '/proxy/aboutus',
    component: asyncComponent(() => import('container/proxy/aboutus/aboutus'))
  },
  // 业务员 -- 业务员 -- 我的用户
  {
    path: '/saleman/users',
    component: asyncComponent(() => import('container/saleman/users/users'))
  },
  // 业务员 -- 业务员 -- 推荐链接
  {
    path: '/saleman/infos',
    component: asyncComponent(() => import('container/saleman/infos/infos'))
  },
  // 业务员 -- 业务员 -- 公告
  {
    path: '/saleman/notices',
    component: asyncComponent(() => import('container/own/notices/notices'))
  },
  // 商家端 -- 业务管理 -- 产品列表
  {
    path: '/seller/products',
    component: asyncComponent(() => import('container/seller/products/products'))
  },
  // 商家端 -- 业务管理 -- 产品发布
  {
    path: '/seller/productEdit',
    component: asyncComponent(() => import('container/seller/productEdit/productEdit'))
  },
  // 商家端 -- 业务管理 -- 产品发布
  {
    path: '/seller/products/addedit',
    component: asyncComponent(() => import('container/seller/productEdit/productEdit'))
  },
  // 商家端 -- 业务管理 -- 订单管理
  {
    path: '/seller/order',
    component: asyncComponent(() => import('container/seller/order/order'))
  },
  // 商家端 -- 业务管理 -- 订单管理 -- 详情
  {
    path: '/seller/order/addedit',
    component: asyncComponent(() => import('container/seller/order/order-addedit'))
  },
  // 商家端 -- 业务管理 -- 邮费模板
  {
    path: '/seller/postage',
    component: asyncComponent(() => import('container/seller/postage/postage'))
  },
  // 商家端 -- 业务管理 -- 默认邮费
  {
    path: '/seller/defPostage',
    component: asyncComponent(() => import('container/seller/defPostage/def-postage'))
  },
  // 商家端 -- 业务管理 -- 邮费模板 -- 详情
  {
    path: '/seller/postage/addedit',
    component: asyncComponent(() => import('container/seller/postage/postage-addedit'))
  },
  // 商家端 -- 默认邮费 -- 详情
  {
    path: '/seller/defpostage/addedit',
    component: asyncComponent(() => import('container/seller/defPostage/defpostage-addedit'))
  },
  // 商家端 -- 业务管理 -- 售后订单管理
  {
    path: '/seller/shouhou-order',
    component: asyncComponent(() => import('container/seller/shouhou-order/shouhou-order'))
  },
  // 商家端 -- 业务管理 -- 售后订单管理 -- 详情
  {
    path: '/seller/shouhou-order/addedit',
    component: asyncComponent(() => import('container/seller/shouhou-order/shouhou-order-addedit'))
  },
  // 商家端 -- 资金管理 -- 我的账户
  {
      path: '/seller/accounts',
      component: asyncComponent(() => import('container/seller/accounts/accounts'))
  },
  // 商家端 -- 资金管理 -- 账户流水
  {
      path: '/seller/flows',
      component: asyncComponent(() => import('container/seller/flows/flows'))
  },
  // 商家端 -- 资金管理 -- 提现
  {
      path: '/seller/withdraw',
      component: asyncComponent(() => import('container/seller/withdraw/withdraw'))
  },
  // 商家端 -- 资金管理 -- 提现 -- 详情
  {
    path: '/seller/withdraw/addedit',
    component: asyncComponent(() => import('container/seller/withdraw/withdraw-addedit'))
  },
  // 商家端 -- 资金管理 -- 提现 -- 申请
  {
    path: '/seller/withdraw/apply',
    component: asyncComponent(() => import('container/seller/withdraw/apply'))
  },
  // 商家端 -- 消息管理 -- 待回复消息
  {
      path: '/seller/unread',
      component: asyncComponent(() => import('container/seller/unread/unread'))
  },
  // 商家端 -- 消息管理 -- 消息查询
  {
    path: '/seller/message',
    component: asyncComponent(() => import('container/seller/messages/messages'))
  },
  // 商家端 -- 消息管理 -- 待回复消息 -- 回复
  {
      path: '/seller/message/addedit',
      component: asyncComponent(() => import('container/seller/unread/unread-addedit'))
  },
  // 商家端 -- 个人设置 -- 个人信息
  {
    path: '/seller/infos',
    component: asyncComponent(() => import('container/seller/infos/infos'))
  },
  // 商家端 -- 个人设置 -- 系统公告
  {
      path: '/seller/notices',
      component: asyncComponent(() => import('container/seller/notices/notices'))
  },
  // 商家端 -- 个人设置 -- 系统公告详情
  {
      path: '/seller/notices/addedit',
      component: asyncComponent(() => import('container/seller/notices/notices-addedit'))
  },
  // 商家端 -- 个人设置 -- 安全设置
  {
      path: '/seller/security',
      component: asyncComponent(() => import('container/seller/security/security'))
  },
  // 商家端 -- 个人设置 -- 关于我们
  {
      path: '/seller/aboutus',
      component: asyncComponent(() => import('container/seller/aboutus/aboutus'))
  },
  // 商家端 -- banner
  {
    path: '/seller/banner',
    component: asyncComponent(() => import('container/seller/banner/banner'))
  },
  // 商家端 -- banner -- 详情
  {
    path: '/seller/banner/addedit',
    component: asyncComponent(() => import('container/seller/banner/banner-addedit'))
  }
];

export default ROUTES;
