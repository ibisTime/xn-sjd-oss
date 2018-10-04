import { combineReducers } from 'redux';
import { user } from './redux/user';
import { menu } from './redux/menu';
import { securityRole } from './redux/security/role';
import { securityMenu } from './redux/security/menu';
import { securitySysParam } from './redux/security/sysParam';
import { securityUser } from './redux/security/user';
import { securityDataDict } from './redux/security/dataDict';
import { securityCompConstruct } from './redux/security/compConstruct';
import { securityPost } from './redux/security/post';
import { publicBanner } from './redux/public/banner';
import { publicNotice } from './redux/public/notice';
/** ***** 财务管理start ***** **/
// 财务管理--平台账户
import { platformDistributionRules } from './redux/finance/platform/distributionRules';
import { platformGradationRules } from './redux/finance/platform/gradationRules';
import { platformAccount } from './redux/finance/platform/account';
import { platformAccountFlows } from './redux/finance/platform/accountFlows';
import { platformFlows } from './redux/finance/platform/flows';
// 财务管理--充值管理
import { rechargeRecharges } from './redux/finance/recharge/recharges';
import { rechargeRecords } from './redux/finance/recharge/records';
// 会员账户--账户查询
import { financeUserAccount } from './redux/finance/user-account';
// 会员账户--账户查询--流水
import { financeUserFlows } from './redux/finance/user-flows';
// 会员账户--流水查询
import { financeAllUserFlows } from './redux/finance/all-user-flows';
import { financeEnchashmentRule } from '@redux/finance/enchashmentRule';
import { financeUnderEnchashment } from '@redux/finance/underEnchashment';
import { financeEnchashments } from '@redux/finance/enchashments';
// 业务管理--产权方管理
import { propertyProperty } from './redux/biz/property/property';
import { propertyBinds } from './redux/biz/property/binds';
import { propertyTypes } from './redux/biz/property/types';
import { propertyProducts } from './redux/biz/property/products';
import { propertyTrees } from './redux/biz/property/trees';
import { propertyFlows } from './redux/biz/property/flows';
// 业务管理--养护方管理
import { conserveConserve } from './redux/biz/conserve/conserve';
import { conserveBinds } from './redux/biz/conserve/conserve-binds';
import { conserveUsers } from './redux/biz/conserve/users';
import { conserveProjects } from './redux/biz/conserve/projects';
import { conserveRecords } from './redux/biz/conserve/records';
import { conserveFlows } from './redux/biz/conserve/flows';
// 业务管理--用户管理
import { userUsers } from './redux/biz/user/users';
// 业务管理--认养管理
import { claimGroupOrders } from './redux/biz/claim/groupOrders';
import { claimPersonOrders } from './redux/biz/claim/personOrders';
// 代理管理--代理商管理
import { agentAgents } from './redux/agent/agents';
import { agentSettlement } from './redux/agent/settlement';
import { agentAchievement } from './redux/agent/achievement';
import { agentFlows } from './redux/agent/flows';
// 产权端--业务管理
import { ownProducts } from './redux/own/products';
import { ownClaimOrders } from './redux/own/claimOrders';
import { ownTrees } from './redux/own/trees';
// 产权端--资金管理
import { ownAccounts } from './redux/own/accounts';
import { ownFlows } from './redux/own/flows';
// 产权端--个人设置
import { ownNotices } from './redux/own/notices';
// 养护端--业务管理
import { curingTasks } from './redux/curing/tasks';
import { curingProjects } from './redux/curing/projects';
import { curingUsers } from './redux/curing/users';
import { curingOwns } from './redux/curing/owns';
// 养护端--资金管理
import { curingFlows } from './redux/curing/flows';
// 代理商--代理商
import { proxyFlows } from './redux/proxy/flows';
// 代理商--业务员管理
import { proxySalesmen } from './redux/proxy/salesmen';

export default combineReducers({
  user,
  menu,
  securityRole,
  securityMenu,
  securityUser,
  securitySysParam,
  securityDataDict,
  securityCompConstruct,
  securityPost,
  publicBanner,
  publicNotice,
  platformDistributionRules,
  platformGradationRules,
  platformAccount,
  platformAccountFlows,
  platformFlows,
  rechargeRecharges,
  rechargeRecords,
  financeUserAccount,
  financeUserFlows,
  financeEnchashmentRule,
  financeUnderEnchashment,
  financeEnchashments,
  propertyProperty,
  propertyBinds,
  propertyTypes,
  propertyProducts,
  propertyTrees,
  propertyFlows,
  conserveConserve,
  conserveBinds,
  conserveUsers,
  conserveProjects,
  conserveRecords,
  conserveFlows,
  userUsers,
  claimGroupOrders,
  claimPersonOrders,
  agentAgents,
  agentSettlement,
  agentAchievement,
  agentFlows,
  ownProducts,
  ownClaimOrders,
  ownTrees,
  ownAccounts,
  ownFlows,
  ownNotices,
  curingTasks,
  curingProjects,
  curingUsers,
  curingFlows,
  curingOwns,
  proxyFlows,
  proxySalesmen
});
