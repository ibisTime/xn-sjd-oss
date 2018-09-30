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
  // 会员账户 -- 账户查询
  {
    path: '/finance/userAccount',
    component: asyncComponent(() => import('container/finance/user-account/user-account'))
  },
  // 会员账户 -- 账户查询 -- 流水
  {
    path: '/finance/userAccount/flows',
    component: asyncComponent(() => import('container/finance/user-flows/user-flows'))
  },
  // 会员账户 -- 流水查询
  {
    path: '/finance/userLedger',
    component: asyncComponent(() => import('container/finance/all-user-flows/all-user-flows'))
  },
  {
    path: '/finance/breakBalance',
    component: asyncComponent(() => import('container/finance/account/account'))
  },
  {
    path: '/finance/breakBalance/ledger',
    component: asyncComponent(() => import('container/finance/account-ledger/account-ledger'))
  },
  {
    path: '/finance/platform_ledger',
    component: asyncComponent(() => import('container/finance/platform-ledger/platform-ledger'))
  },
  {
    path: '/finance/platform_ledger/addedit',
    component: asyncComponent(() => import('container/finance/ledger-addedit/ledger-addedit'))
  },
  {
    path: '/finance/enchashmentRule',
    component: asyncComponent(() => import('container/finance/enchashmentRule/enchashmentRule'))
  },
  {
    path: '/finance/enchashmentRule/addedit',
    component: asyncComponent(() => import('container/finance/enchashmentRule-addedit/enchashmentRule-addedit'))
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
  // 产权端管理 -- 个人设置 -- 系统公告
  {
    path: '/own/notices',
    component: asyncComponent(() => import('container/own/notices/notices'))
  },
  // 产权端管理 -- 个人设置 -- 关于我们
  {
    path: '/own/aboutus',
    component: asyncComponent(() => import('container/own/aboutus/aboutus'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理
  {
    path: '/curing/projects',
    component: asyncComponent(() => import('container/curing/projects/projects'))
  },
  // 产权端管理 -- 业务管理 -- 养护项目管理 -- 详情
  {
    path: '/curing/projects/addedit',
    component: asyncComponent(() => import('container/curing/projects/projects-addedit'))
  },
  // 养护端管理 -- 业务管理 -- 养护项目管理
  {
    path: '/curing/users',
    component: asyncComponent(() => import('container/curing/users/users'))
  },
  // 产权端管理 -- 业务管理 -- 养护项目管理 -- 详情
  {
    path: '/curing/users/addedit',
    component: asyncComponent(() => import('container/curing/users/users-addedit'))
  }
];

export default ROUTES;
