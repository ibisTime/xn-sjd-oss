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
import { publicTweets } from './redux/public/tweets';
import { publicAuditNotice } from './redux/public/auditnotice';
/** ***** 财务管理start ***** **/
// 财务管理--平台账户
import { platformDistributionRules } from './redux/finance/platform/distributionRules';
import { platformPreDistributionRules } from './redux/finance/platform/pre-distributionRules';
import { platformMallDistributionRules } from './redux/finance/platform/mall-distributionRules';
import { platformInvitationMoneyRules } from './redux/finance/platform/invitationMoneyRules';
import { platformGradationRules } from './redux/finance/platform/gradationRules';
import { platformIntegralRules } from './redux/finance/platform/integralRules';
import { platformPayRules } from './redux/finance/platform/payRules';
import { platformMemberLevel } from './redux/finance/platform/memberLevel';
import { platformTppRules } from './redux/finance/platform/tppRules';
import { platformInvitation } from './redux/finance/platform/invitation';
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
import { propertyPreTypes } from './redux/biz/property/pre-types';
import { propertyProducts } from './redux/biz/property/products';
import { propertyTrees } from './redux/biz/property/trees';
import { propertyAccounts } from './redux/biz/property/accounts';
import { propertyFlows } from './redux/biz/property/flows';
// 业务管理-商家管理
import { sellerSeller } from './redux/biz/seller/seller';
import { sellerTypes } from './redux/biz/seller/types';
import { bizSellerProducts } from './redux/biz/seller/products';
import { bizSellerOrder } from './redux/biz/seller/order';
import { bizSellerOrderSingle } from './redux/biz/seller/order-single';
import { bizSellerKeyword } from './redux/biz/seller/keyword';
import { bizSellerCommentCheck } from './redux/biz/seller/comment-check';
import { bizSellerComment } from './redux/biz/seller/comment';
import { bizSellerMessage } from './redux/biz/seller/message';
import { bizSellerUnread } from './redux/biz/seller/unread';
import { sellerAfterSale } from './redux/biz/seller/after-sale';
import { bizSellerAccounts } from './redux/biz/seller/accounts';
import { bizSellerFlows } from './redux/biz/seller/flows';
import { bizSellerSellerAccounts } from './redux/biz/seller/seller-accounts';
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
// 业务管理-预售管理
import { prePreOrder } from './redux/biz/pre/preOrder';
import { preConOrder } from './redux/biz/pre/conOrder';
import { preAsset } from './redux/biz/pre/asset';
import { preFahuo } from './redux/biz/pre/fahuo';
// 业务管理--情感频道
import { emotionArticles } from './redux/biz/emotion/articles';
// 业务管理--道具管理
import { propProps } from './redux/biz/prop/props';
import { propBuyRecords } from './redux/biz/prop/buyRecords';
import { propUseRecords } from './redux/biz/prop/useRecords';
// 认养预售--弹幕管理
import { danmuDanmu } from './redux/biz/danmu/danmu';
// 业务管理--业务规则
import { rulesWeight } from './redux/biz/rules/weight';
// 代理管理--代理商管理
import { agentAgents } from './redux/agent/agents';
import { agentAgentsAccounts } from './redux/agent/agents-accounts';
import { agentSettlement } from './redux/agent/settlement';
import { agentPreSettlement } from './redux/agent/pre-settlement';
import { agentGroupSettlement } from './redux/agent/group-settlement';
import { agentMallSettlement } from './redux/agent/mall-settlement';
import { agentAchievement } from './redux/agent/achievement';
import { agentAccounts } from './redux/agent/accounts';
import { agentFlows } from './redux/agent/flows';
// 产权端--业务管理
import { ownProducts } from './redux/own/products';
import { ownClaimOrders } from './redux/own/claimOrders';
import { ownTrees } from './redux/own/trees';
import { ownAsset } from './redux/own/asset';
import { ownWuliudan } from './redux/own/wuliudan';
// 产权端--资金管理
import { ownAccounts } from './redux/own/accounts';
import { ownFlows } from './redux/own/flows';
import { ownWithdraw } from './redux/own/withdraw';
// 产权端--个人设置
import { ownNotices } from './redux/own/notices';
// 养护端--业务管理
import { curingTasks } from './redux/curing/tasks';
import { curingTasksRecords } from './redux/curing/tasks-records';
import { curingProjects } from './redux/curing/projects';
import { curingUsers } from './redux/curing/users';
import { curingOwns } from './redux/curing/owns';
import { curingNotices } from './redux/curing/notices';
// 养护端--资金管理
import { curingFlows } from './redux/curing/flows';
// 代理商--代理商
import { proxyUsers } from './redux/proxy/users';
import { proxySubordinates } from './redux/proxy/subordinates';
import { proxySettled } from './redux/proxy/settled';
import { proxyUnSettled } from './redux/proxy/unsettled';
import { proxyFlows } from './redux/proxy/flows';
import { proxyNotices } from './redux/proxy/notices';
// 代理商--业务员管理
import { proxySalesmen } from './redux/proxy/salesmen';
// 业务员--我的用户
import { salemanUsers } from './redux/saleman/users';
// 商家端--业务管理
import { sellerProducts } from './redux/seller/products';
import { sellerDefPostage } from './redux/seller/defpostage';
import { sellerOrder } from './redux/seller/order';
import { sellerPostage } from './redux/seller/postage';
import { sellerShouhouOrder } from './redux/seller/shouhou-order';
import { sellerFlows } from './redux/seller/flows';
import { sellerAccounts } from './redux/seller/accounts';
import { sellerWithdraw } from './redux/seller/withdraw';
import { sellerUnread } from './redux/seller/unread';
import { sellerMessage } from './redux/seller/message';
import { sellerNotices } from './redux/seller/notices';
import { sellerBanner } from './redux/seller/banner';

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
  platformPreDistributionRules,
  platformMallDistributionRules,
  platformInvitationMoneyRules,
  platformGradationRules,
  platformIntegralRules,
  platformPayRules,
  platformMemberLevel,
  platformTppRules,
  platformInvitation,
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
  propertyPreTypes,
  propertyProducts,
  propertyTrees,
  propertyAccounts,
  propertyFlows,
  sellerSeller,
  sellerTypes,
  bizSellerProducts,
  bizSellerOrder,
  bizSellerOrderSingle,
  bizSellerKeyword,
  bizSellerCommentCheck,
  bizSellerComment,
  bizSellerMessage,
  bizSellerUnread,
  bizSellerAccounts,
  bizSellerFlows,
  bizSellerSellerAccounts,
  sellerAfterSale,
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
  prePreOrder,
  preConOrder,
  preAsset,
  preFahuo,
  emotionArticles,
  propProps,
  propBuyRecords,
  propUseRecords,
  danmuDanmu,
  rulesWeight,
  agentAgents,
  agentAgentsAccounts,
  agentSettlement,
  agentPreSettlement,
  agentGroupSettlement,
  agentMallSettlement,
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
  ownAsset,
  ownWuliudan,
  curingTasks,
  curingTasksRecords,
  curingProjects,
  curingUsers,
  curingFlows,
  curingOwns,
  curingNotices,
  proxyUsers,
  proxySubordinates,
  proxySettled,
  proxyUnSettled,
  proxyFlows,
  proxySalesmen,
  proxyNotices,
  salemanUsers,
  sellerProducts,
  sellerDefPostage,
  sellerOrder,
  sellerPostage,
  sellerShouhouOrder,
  sellerFlows,
  sellerAccounts,
  sellerWithdraw,
  sellerUnread,
  sellerMessage,
  sellerNotices,
  sellerBanner,
  publicTweets,
  publicAuditNotice
});
