webpackJsonp([242],{1305:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,a,c=(n(478),n(479)),s=n(1),u=(n.n(s),n(17)),f=n(585),p=(n(34),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),b=(l=c.a.create())(a=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(u.i)("code",n.props.location.search),n.view=!!Object(u.i)("v",n.props.location.search),n}return o(t,e),p(t,[{key:"render",value:function(){var e=[{title:"\u7f16\u53f7",field:"code",search:!0},{title:"\u53d1\u8d27\u6570\u91cf",field:"deliverCount"},{title:"\u7701",field:"province"},{title:"\u5e02",field:"city"},{title:"\u533a",field:"area"},{title:"\u8be6\u7ec6\u5730\u5740",field:"address"},{title:"\u6536\u8d27\u4eba",field:"receiver"},{title:"\u6536\u8d27\u4eba\u624b\u673a\u53f7",field:"receiverMobile"},{title:"\u72b6\u6001",field:"status",type:"select",key:"presell_logistics_status",search:!0},{field:"logisticsCompany",title:"\u7269\u6d41\u516c\u53f8",type:"select",key:"logistics_company"},{field:"logisticsNumber",title:"\u7269\u6d41\u5355\u53f7"}];return this.buildDetail({fields:e,code:this.code,view:this.view,detailCode:629466})}}]),t}(f.a))||a;t.default=b},585:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var a=(n(478),n(479)),c=n(1),s=n.n(c),u=n(613),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(a.a.Item,function(e){function t(){var e,n,l,a;i(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.setO2MSelect=function(e,t){l.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,r({},e,t))}})},l.setO2MData=function(e,t){l.setState(function(n){return{pageData:Object.assign({},n.pageData,r({},e,t))}})},a=n,o(l,a)}return l(t,e),f(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return s.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(u.a))}});