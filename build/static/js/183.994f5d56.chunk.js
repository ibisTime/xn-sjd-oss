webpackJsonp([183],{1407:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,l,c=(n(478),n(479)),u=n(1),f=(n.n(u),n(17)),s=n(585),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(a=c.a.create())(l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(f.i)("code",n.props.location.search),n.view=!!Object(f.i)("v",n.props.location.search),n}return i(t,e),p(t,[{key:"render",value:function(){var e=[{field:"status",hidden:!0,value:1},{field:"type",value:7,hidden:!0},{field:"parentCode",value:0,hidden:!0},{title:"banner\u540d\u79f0",field:"name",required:!0},{title:"\u987a\u5e8f",field:"orderNo",help:"\u6570\u5b57\u8d8a\u5c0f\uff0c\u6392\u5e8f\u8d8a\u9760\u524d",required:!0},{title:"banner\u56fe\u7247",field:"pic",type:"img",help:"690*300",required:!0,single:!0},{title:"url\u5730\u5740",field:"url"},{title:"\u5907\u6ce8",field:"remark",maxlength:250}];return this.buildDetail({fields:e,code:this.code,view:this.view,addCode:630500,editCode:630502,detailCode:630507,beforeSubmit:function(e){return e.shopCode=Object(f.g)(),e}})}}]),t}(s.a))||l;t.default=d},585:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var l=(n(478),n(479)),c=n(1),u=n.n(c),f=n(613),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(l.a.Item,function(e){function t(){var e,n,a,l;o(this,t);for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.setO2MSelect=function(e,t){a.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,r({},e,t))}})},a.setO2MData=function(e,t){a.setState(function(n){return{pageData:Object.assign({},n.pageData,r({},e,t))}})},l=n,i(a,l)}return a(t,e),s(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return u.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(f.a))}});