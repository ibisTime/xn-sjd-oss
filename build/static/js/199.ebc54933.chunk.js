webpackJsonp([199],{1368:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,a,l=(n(478),n(479)),s=n(1),u=(n.n(s),n(17)),f=n(585),p=n(34),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=(c=l.a.create())(a=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(u.i)("code",n.props.location.search),n.view=!!Object(u.i)("v",n.props.location.search),n.check=!!Object(u.i)("check",n.props.location.search),n}return i(t,e),y(t,[{key:"checkUser",value:function(e,t){var n=this;this.doFetching(),t.approveResult=e,Object(p.a)(630062,t).then(function(e){n.cancelFetching(),Object(u.B)("\u64cd\u4f5c\u6210\u529f"),setTimeout(function(){n.props.history.go(-1)},1e3)}).catch(this.cancelFetching)}},{key:"render",value:function(){var e=[{title:"\u7528\u6237\u540d",field:"loginName",hidden:!this.code,maxlength:30},{title:"\u516c\u53f8\u540d\u79f0",field:"companyName",_keys:["company","name"]},{title:"\u516c\u53f8\u8d1f\u8d23\u4eba",field:"companyCharger",_keys:["company","charger"]},{title:"\u8d1f\u8d23\u4eba\u8054\u7cfb\u65b9\u5f0f",field:"chargerMobile",_keys:["company","chargeMobile"],mobile:!0},{title:"\u516c\u53f8\u5730\u5740",field:"companyAddress",_keys:["company","address"]}];return this.buildDetail({fields:e,key:"userId",code:this.code,view:this.view,detailCode:730086})}}]),t}(f.a))||a;t.default=h},585:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var a=(n(478),n(479)),l=n(1),s=n.n(l),u=n(613),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=(a.a.Item,function(e){function t(){var e,n,c,a;r(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=c=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),c.setO2MSelect=function(e,t){c.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,o({},e,t))}})},c.setO2MData=function(e,t){c.setState(function(n){return{pageData:Object.assign({},n.pageData,o({},e,t))}})},a=n,i(c,a)}return c(t,e),f(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return s.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(u.a))}});