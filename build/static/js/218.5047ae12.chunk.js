webpackJsonp([218],{1353:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,c,l=(n(478),n(479)),u=n(1),s=(n.n(u),n(17)),f=n(585),p=n(34),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),d=(a=l.a.create())(c=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.code=Object(s.i)("code",n.props.location.search),n.view=!!Object(s.i)("v",n.props.location.search),n}return r(t,e),h(t,[{key:"saveArticle",value:function(e,t){var n=this;this.doFetching(),t.dealType=e,t.publishUserId=Object(s.n)();var i=this.code?629341:629340;Object(p.a)(i,t).then(function(e){n.cancelFetching(),Object(s.B)("\u64cd\u4f5c\u6210\u529f"),setTimeout(function(){n.props.history.go(-1)},1e3)}).catch(this.cancelFetching)}},{key:"checkArticle",value:function(e,t){var n=this;this.doFetching(),t.approveResult=e,Object(p.a)(629342,t).then(function(e){n.cancelFetching(),Object(s.B)("\u64cd\u4f5c\u6210\u529f"),setTimeout(function(){n.props.history.go(-1)},1e3)}).catch(this.cancelFetching)}},{key:"render",value:function(){var e=this,t=[{title:"\u6811\u6728\u7f16\u53f7",field:"treeNumber"},{title:"\u6240\u5c5e\u4ea7\u54c1",field:"productName"},{title:"\u54c1\u79cd",field:"variety"},{title:"\u6811\u9f84",field:"age"},{title:"\u533a\u57df",field:"province",type:"citySelect"},{title:"\u4e61\u653f/\u8857\u9053",field:"town"},{title:"\u7ecf\u5ea6",field:"longitude"},{title:"\u7eac\u5ea6",field:"latitude"},{title:"\u5b9e\u666f\u56fe",field:"pic",type:"img"},{title:"\u72b6\u6001",field:"status",type:"select",key:"tree_status"},{title:"\u5907\u6ce8",field:"remark"}];return this.buildDetail({fields:t,code:this.code,view:this.view,detailCode:629036,buttons:[{title:"\u6253\u5f00\u5730\u56fe\u94fe\u63a5",check:!0,type:"primary",handler:function(t){window.open("//uri.amap.com/marker?position="+e.state.pageData.longitude+","+e.state.pageData.latitude)}},{title:"\u8fd4\u56de",handler:function(t){e.props.history.go(-1)}}]})}}]),t}(f.a))||c;t.default=d},585:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var c=(n(478),n(479)),l=n(1),u=n.n(l),s=n(613),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=(c.a.Item,function(e){function t(){var e,n,a,c;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.setO2MSelect=function(e,t){a.setState(function(n){return{selectedRowKeys:Object.assign({},n.selectedRowKeys,i({},e,t))}})},a.setO2MData=function(e,t){a.setState(function(n){return{pageData:Object.assign({},n.pageData,i({},e,t))}})},c=n,r(a,c)}return a(t,e),f(t,[{key:"getTableItem",value:function(e,t){var n={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return u.a.createElement(CO2M,Object.assign({key:e.field},n))}}]),t}(s.a))}});