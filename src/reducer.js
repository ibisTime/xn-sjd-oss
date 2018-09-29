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
/** ***** 财务管理start ***** **/
// 会员账户--账户查询
import { financeUserAccount } from './redux/finance/user-account';
// 会员账户--账户查询--流水
import { financeUserFlows } from './redux/finance/user-flows';
// 会员账户--流水查询
import { financeAllUserFlows } from './redux/finance/all-user-flows';
import { financeAccount } from './redux/finance/account';
import { financePlatformLedger } from '@redux/finance/platform-ledger';
import { financeEnchashmentRule } from '@redux/finance/enchashmentRule';
import { financeUnderEnchashment } from '@redux/finance/underEnchashment';
import { financeEnchashments } from '@redux/finance/enchashments';
// 业务管理--产权方管理
import { propertyProperty } from './redux/biz/property/property';
import { propertyTypes } from './redux/biz/property/types';
import { propertyProducts } from './redux/biz/property/products';
import { propertyTrees } from './redux/biz/property/trees';
// 业务管理--养护方管理
import { conserveConserve } from './redux/biz/conserve/conserve';
// 业务管理--用户管理
import { userUsers } from './redux/biz/user/users';
// 产权端管理--业务管理
import { ownProducts } from './redux/own/products';
import { ownClaimOrders } from './redux/own/claimOrders';

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
  financeUserAccount,
  financeUserFlows,
  financeAccount,
  financePlatformLedger,
  financeEnchashmentRule,
  financeUnderEnchashment,
  financeEnchashments,
  propertyProperty,
  propertyTypes,
  propertyProducts,
  propertyTrees,
  conserveConserve,
  userUsers,
  ownProducts,
  ownClaimOrders
});
