webpackJsonp([226],{1244:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,l,c=(n(478),n(479)),s=n(1),u=(n.n(s),n(17)),f=n(585),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(a=c.a.create())(l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(u.i)("code",n.props.location.search),n.view=!!Object(u.i)("v",n.props.location.search),n}return i(t,e),d(t,[{key:"render",value:function(){var e=this,t=[{title:"\u8ba2\u5355\u7f16\u53f7",field:"orderCode"},{title:"\u4ea7\u54c1\u540d\u79f0",field:"commodityName"},{title:"\u89c4\u683c\u540d\u79f0",field:"specsName"},{title:"\u6570\u91cf",field:"quantity"},{title:"\u8ba2\u5355\u91d1\u989d",field:"amount",amount:!0},{title:"\u5b9e\u9645\u652f\u4ed8\u91d1\u989d",field:"payAmount",amount:!0},{title:"\u62b5\u6263\u7684\u4eba\u6c11\u5e01",field:"cnyDeductAmount",amount:!0},{title:"\u4f7f\u7528\u79ef\u5206\u6570\u91cf",field:"jfDeductAmount",amount:!0},{title:"\u8ba2\u5355\u72b6\u6001",field:"status",type:"select",key:"commodity_order_detail_status"},{title:"\u5730\u5740\u4fe1\u606f",field:"province",formatter:function(e,t){return t.address&&t.address.province+" "+t.address.city+" "+t.address.district+" "+t.address.detailAddress}},{title:"\u6536\u8d27\u4eba",field:"addressee",_keys:["address","addressee"]},{title:"\u6536\u8d27\u4eba\u624b\u673a\u53f7",field:"mobile",_keys:["address","mobile"]}],n={fields:t,code:this.code,view:!0,detailCode:629736};return this.fahuo&&(n.buttons=[{title:"fahuo",check:!0,type:"primary",handler:function(t){e.checkOrder(1,t)}},{title:"\u8fd4\u56de",handler:function(t){e.props.history.go(-1)}}]),this.buildDetail(n)}}]),t}(f.a))||l;t.default=p},585:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return d});var l=(n(478),n(479)),c=n(1),s=n.n(c),u=n(613),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(l.a.Item,function(e){function t(){var e,n,a,l;o(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.setO2MSelect=function(e,t){a.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,r({},e,t))}})},a.setO2MData=function(e,t){a.setState(function(n){return{pageData:Object.assign({},n.pageData,r({},e,t))}})},l=n,i(a,l)}return a(t,e),f(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return s.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(u.a))}});