webpackJsonp([6],{585:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var a=(n(478),n(479)),c=n(1),u=n.n(c),f=n(613),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=(a.a.Item,function(e){function t(){var e,n,l,a;r(this,t);for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f];return n=l=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),l.setO2MSelect=function(e,t){l.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,i({},e,t))}})},l.setO2MData=function(e,t){l.setState(function(n){return{pageData:Object.assign({},n.pageData,i({},e,t))}})},a=n,o(l,a)}return l(t,e),s(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return u.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(f.a))},699:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,a,c=(n(478),n(479)),u=n(1),f=(n.n(u),n(17)),s=n(585),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=(l=c.a.create())(a=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(f.i)("code",n.props.location.search),n.view=!!Object(f.i)("v",n.props.location.search),n}return o(t,e),p(t,[{key:"render",value:function(){var e=[{title:"\u6d41\u6c34\u7f16\u53f7",field:"code"},{title:"\u6237\u540d",field:"realName"},{title:"\u8d26\u53f7",field:"accountNumber"},{title:"\u5e01\u79cd",field:"currency",type:"select",key:"currency"},{title:"\u6e20\u9053",field:"channelType",type:"select",key:"channel_type"},{title:"\u4e1a\u52a1\u7c7b\u578b",field:"bizType",type:"select",key:"biz_type"},{title:"\u751f\u6210\u8bf4\u660e",field:"bizNote"},{title:"\u53d8\u52a8\u91d1\u989d",field:"transAmountString",amount:!0},{title:"\u53d8\u52a8\u524d\u91d1\u989d",field:"preAmountString",amount:!0},{title:"\u53d8\u52a8\u540e\u91d1\u989d",field:"postAmountString",amount:!0},{title:"\u72b6\u6001",field:"status",type:"select",key:"jour_status"},{title:"\u521b\u5efa\u65f6\u95f4",field:"createDatetime",type:"datetime"},{title:"\u5173\u8054\u5355\u53f7",field:"refNo"},{title:"\u62df\u5bf9\u8d26\u65f6\u95f4",field:"workDate"},{title:"\u5bf9\u8d26\u4eba",field:"checkUser"},{title:"\u5bf9\u8d26\u65f6\u95f4",field:"checkDatetime",type:"datetime"},{title:"\u8c03\u8d26\u4eba",field:"adjustUser"},{title:"\u8c03\u8d26\u65f6\u95f4",field:"adjustDatetime",type:"datetime"},{title:"\u5907\u6ce8",field:"remark",maxlength:250}];return this.buildDetail({fields:e,code:this.code,view:this.view,detailCode:802321})}}]),t}(s.a))||a;t.default=d}});