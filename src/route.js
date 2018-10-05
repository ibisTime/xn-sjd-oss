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
  {
    path: '/system/user/post',
    component: asyncComponent(() => import('container/security/user/post'))
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
  {
    path: '/system/compConstruct',
    component: asyncComponent(() => import('container/security/compConstruct/compConstruct'))
  },
  {
    path: '/system/post',
    component: asyncComponent(() => import('container/security/post/post'))
  },
  {
    path: '/public/aboutus_addedit',
    component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
  },
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  {
    path: '/public/notice',
    component: asyncComponent(() => import('container/public/notice/notice'))
  },
  {
    path: '/public/notice/addedit',
    component: asyncComponent(() => import('container/public/notice-addedit/notice-addedit'))
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
  // 会员账户 -- 流水查询
  {
    path: '/finance/userLedger',
    component: asyncComponent(() => import('container/finance/all-user-flows/all-user-flows'))
  },
  {
    path: '/finance/breakBalance/ledger',
    component: asyncComponent(() => import('container/finance/account-ledger/account-ledger'))
  },
  {
    path: '/finance/platform_ledger/addedit',
    component: asyncComponent(() => import('container/finance/ledger-addedit/ledger-addedit'))
  },
  {
    path: '/finance/underEnchashment',
    component: asyncComponent(() => import('container/finance/underEnchashment/underEnchashment'))
  },
  {
    path: '/finance/underEnchashment/addedit',
    component: asyncComponent(() => import('container/finance/underEnchashment-addedit/underEnchashment-addedit'))
  },
  {
    path: '/finance/underEnchashment/check',
    component: asyncComponent(() => import('container/finance/underEnchashment-check/underEnchashment-check'))
  },
  {
    path: '/finance/enchashments',
    component: asyncComponent(() => import('container/finance/enchashments/enchashments'))
  },
  {
    path: '/finance/enchashments/addedit',
    component: asyncComponent(() => import('container/finance/enchashments-addedit/enchashments-addedit'))
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
  // 业务管理 -- 产权方管理 -- 产品管理
  {
    path: '/property/products',
    component: asyncComponent(() => import('container/biz/property/products/products'))
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
  // 业务管理 -- 产权方管理 -- 流水查询
  {
    path: '/property/flows',
    component: asyncComponent(() => import('container/biz/property/flows/flows'))
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
    component: asyncComponent(() => import('container/biz/conserve/records/records-addedit'))
  },
  // 业务管理 -- 养护方管理 -- 流水查询
  {
    path: '/conserve/flows',
    component: asyncComponent(() => import('container/biz/conserve/flows/flows'))
  },
  // 业务管理 -- 养护方管理 -- 流水查询
  {
    path: '/user/users',
    component: asyncComponent(() => import('container/biz/user/users/users'))
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
  // 代理管理 -- 代理商管理 -- 代理商管理 -- 详情
  {
    path: '/agent/agents/addedit',
    component: asyncComponent(() => import('container/agent/agents/agents-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 结算管理
  {
    path: '/agent/settlement',
    component: asyncComponent(() => import('container/agent/settlement/settlement'))
  },
  // 代理管理 -- 代理商管理 -- 结算管理 -- 详情
  {
    path: '/agent/settlement/addedit',
    component: asyncComponent(() => import('container/agent/settlement/settlement-addedit'))
  },
  // 代理管理 -- 代理商管理 -- 业绩查询
  {
    path: '/agent/achievement',
    component: asyncComponent(() => import('container/agent/achievement/achievement'))
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
  // 产权端管理 -- 资金管理 -- 账户流水 -- 详情
  {
    path: '/own/flows/addedit',
    component: asyncComponent(() => import('container/curing/flows/flows-addedit'))
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
    component: asyncComponent(() => import('container/own/notices/notices'))
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
    path: '/proxy/flows',
    component: asyncComponent(() => import('container/proxy/flows/flows'))
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
    component: asyncComponent(() => import('container/own/notices/notices'))
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
  }
];

export default ROUTES;
