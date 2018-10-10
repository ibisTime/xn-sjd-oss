import { combineReducers } from 'redux';

import { user } from './redux/user';
import { menu } from './redux/menu';
import { securityRole } from './redux/security/role';
import { securityMenu } from './redux/security/menu';
import { securitySysParam } from './redux/security/sysParam';
import { securityUser } from './redux/security/user';
import { securityDataDict } from './redux/security/dataDict';
import { publicBanner } from './redux/public/banner';
import { publicNotice } from './redux/public/notice';
/** ***** 财务管理start ***** **/
// 财务管理--平台账户
import { platformDistributionRules } from './redux/finance/platform/distributionRules';
import { platformGradationRules } from './redux/finance/platform/gradationRules';
import { platformIntegralRules } from './redux/finance/platform/integralRules';
import { platformTppRules } from './redux/finance/platform/tppRules';
import { platformAccount } from './redux/finance/platform/account';
import { platformAccountFlows } from './redux/finance/platform/accountFlows';
import { platformAccountList } from './redux/finance/platform/accountList';
import { platformFlows } from './redux/finance/platform/flows';
// 财务管理--充值管理
import { rechargeRecharges } from './redux/finance/recharge/recharges';
import { rechargeRecords } from './redux/finance/recharge/records';
// 财务管理--取现管理
import { withdrawRules } from './redux/finance/withdraw/rules';
import { withdrawWithdraw } from './redux/finance/withdraw/withdraw';
import { withdrawRecords } from './redux/finance/withdraw/records';
// 业务管理--产权方管理
import { propertyProperty } from './redux/biz/property/property';
import { propertyPropertyAccounts } from './redux/biz/property/property-accounts';
import { propertyBinds } from './redux/biz/property/binds';
import { propertyTypes } from './redux/biz/property/types';
import { propertyProducts } from './redux/biz/property/products';
import { propertyTrees } from './redux/biz/property/trees';
import { propertyAccounts } from './redux/biz/property/accounts';
import { propertyFlows } from './redux/biz/property/flows';
// 业务管理--养护方管理
import { conserveConserve } from './redux/biz/conserve/conserve';
import { conserveBinds } from './redux/biz/conserve/conserve-binds';
import { conserveConserveAccounts } from './redux/biz/conserve/conserve-accounts';
import { conserveUsers } from './redux/biz/conserve/users';
import { conserveProjects } from './redux/biz/conserve/projects';
import { conserveRecords } from './redux/biz/conserve/records';
import { conserveAccounts } from './redux/biz/conserve/accounts';
import { conserveFlows } from './redux/biz/conserve/flows';
// 业务管理--用户管理
import { userUsers } from './redux/biz/user/users';
import { userUserAccounts } from './redux/biz/user/user-accounts';
import { userSignIn } from './redux/biz/user/signIn';
import { userShares } from './redux/biz/user/shares';
import { userGives } from './redux/biz/user/gives';
import { userAccounts } from './redux/biz/user/accounts';
import { userAccountFlows } from './redux/biz/user/account-flows';
import { userFlows } from './redux/biz/user/flows';
// 业务管理--认养管理
import { claimGroupOrders } from './redux/biz/claim/groupOrders';
import { claimPersonOrders } from './redux/biz/claim/personOrders';
import { claimRights } from './redux/biz/claim/rights';
import { claimRightsLogs } from './redux/biz/claim/rights-logs';
import { claimGiftOrders } from './redux/biz/claim/giftOrders';
import { claimRightsRecords } from './redux/biz/claim/records';
import { claimRightsArticles } from './redux/biz/claim/articles';
import { claimRightsTppOrders } from './redux/biz/claim/tppOrders';
// 业务管理--情感频道
import { emotionArticles } from './redux/biz/emotion/articles';
// 业务管理--道具管理
import { propProps } from './redux/biz/prop/props';
import { propBuyRecords } from './redux/biz/prop/buyRecords';
import { propUseRecords } from './redux/biz/prop/useRecords';
// 业务管理--业务规则
import { rulesWeight } from './redux/biz/rules/weight';
// 代理管理--代理商管理
import { agentAgents } from './redux/agent/agents';
import { agentAgentsAccounts } from './redux/agent/agents-accounts';
import { agentSettlement } from './redux/agent/settlement';
import { agentAchievement } from './redux/agent/achievement';
import { agentAccounts } from './redux/agent/accounts';
import { agentFlows } from './redux/agent/flows';
// 产权端--业务管理
import { ownProducts } from './redux/own/products';
import { ownClaimOrders } from './redux/own/claimOrders';
import { ownTrees } from './redux/own/trees';
// 产权端--资金管理
import { ownAccounts } from './redux/own/accounts';
import { ownFlows } from './redux/own/flows';
import { ownWithdraw } from './redux/own/withdraw';
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
import { proxyUsers } from './redux/proxy/users';
import { proxySubordinates } from './redux/proxy/subordinates';
import { proxySettled } from './redux/proxy/settled';
import { proxyUnSettled } from './redux/proxy/unsettled';
import { proxyFlows } from './redux/proxy/flows';
// 代理商--业务员管理
import { proxySalesmen } from './redux/proxy/salesmen';
// 业务员--我的用户
import { salemanUsers } from './redux/saleman/users';

export default combineReducers({
  user,
  menu,
  securityRole,
  securityMenu,
  securityUser,
  securitySysParam,
  securityDataDict,
  publicBanner,
  publicNotice,
  platformDistributionRules,
  platformGradationRules,
  platformIntegralRules,
  platformTppRules,
  platformAccount,
  platformAccountFlows,
  platformAccountList,
  platformFlows,
  rechargeRecharges,
  rechargeRecords,
  withdrawRules,
  withdrawWithdraw,
  withdrawRecords,
  propertyProperty,
  propertyPropertyAccounts,
  propertyBinds,
  propertyTypes,
  propertyProducts,
  propertyTrees,
  propertyAccounts,
  propertyFlows,
  conserveConserve,
  conserveBinds,
  conserveConserveAccounts,
  conserveUsers,
  conserveProjects,
  conserveRecords,
  conserveAccounts,
  conserveFlows,
  userUsers,
  userUserAccounts,
  userSignIn,
  userShares,
  userGives,
  userAccounts,
  userAccountFlows,
  userFlows,
  claimGroupOrders,
  claimPersonOrders,
  claimRights,
  claimRightsLogs,
  claimGiftOrders,
  claimRightsRecords,
  claimRightsArticles,
  claimRightsTppOrders,
  emotionArticles,
  propProps,
  propBuyRecords,
  propUseRecords,
  rulesWeight,
  agentAgents,
  agentAgentsAccounts,
  agentSettlement,
  agentAchievement,
  agentAccounts,
  agentFlows,
  ownProducts,
  ownClaimOrders,
  ownTrees,
  ownAccounts,
  ownFlows,
  ownWithdraw,
  ownNotices,
  curingTasks,
  curingProjects,
  curingUsers,
  curingFlows,
  curingOwns,
  proxyUsers,
  proxySubordinates,
  proxySettled,
  proxyUnSettled,
  proxyFlows,
  proxySalesmen,
  salemanUsers
});
