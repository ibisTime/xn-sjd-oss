webpackJsonp([235],{1227:function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,a,c=(i(478),i(479)),u=i(1),d=(i.n(u),i(17)),s=i(585),f=i(34),p=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h=(o=c.a.create())(a=function(e){function t(e){r(this,t);var i=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.code=Object(d.i)("code",i.props.location.search),i.view=!!Object(d.i)("v",i.props.location.search),i.check=!!Object(d.i)("check",i.props.location.search),i.state=Object.assign({},i.state,{direct:!1,directLevel:!1,directUser:!1}),i}return l(t,e),p(t,[{key:"checkProduct",value:function(e,t){var i=this;this.doFetching(),t.approveResult=e,Object(f.a)(629403,t).then(function(e){i.cancelFetching(),Object(d.B)("\u64cd\u4f5c\u6210\u529f"),setTimeout(function(){i.props.history.go(-1)},1e3)}).catch(this.cancelFetching)}},{key:"render",value:function(){var e=this,t=[{title:"\u4ea7\u54c1\u7c7b\u578b",field:"parentCategoryCode",type:"select",listCode:"629007",params:{status:"1",level:"2"},keyName:"code",valueName:"name",required:!0},{title:"\u540d\u79f0",field:"name",required:!0,maxlength:100},{title:"\u5b66\u540d",field:"scientificName",required:!0,maxlength:100},{title:"\u7ea7\u522b",field:"rank",required:!0,maxlength:30},{title:"\u54c1\u79cd",field:"variety",required:!0,maxlength:30},{title:"\u5c5e\u5730",field:"originPlace",required:!0,maxlength:100},{title:"\u533a\u57df",field:"province",type:"citySelect",required:!0},{title:"\u4e61\u653f/\u8857\u9053",field:"town",required:!0,maxlength:100},{title:"\u5355\u68f5\u6811\u4ea7\u91cf",field:"singleOutput",required:!0},{title:"\u4ea7\u91cf\u5355\u4f4d",field:"outputUnit",type:"select",key:"output_unit",required:!0},{title:"\u5305\u88c5\u91cd\u91cf",field:"packWeight",required:!0},{title:"\u5305\u88c5\u5355\u4f4d",field:"packUnit",type:"select",key:"pack_unit",required:!0},{title:"\u9884\u552e\u65f6\u95f4",field:"adoptDatetime",type:"date",rangedate:["adoptStartDatetime","adoptEndDatetime"],required:!0},{title:"\u9884\u8ba1\u6536\u83b7\u65f6\u95f4",field:"harvestDatetime",type:"date",required:!0},{title:"\u9884\u8ba1\u53d1\u8d27\u65f6\u95f4",field:"deliverDatetime",type:"date",required:!0},{title:"\u5217\u8868\u56fe\u7247",field:"listPic",type:"img",single:!0,required:!0},{title:"\u8be6\u60c5Banner\u56fe\u7247",field:"bannerPic",type:"img",required:!0},{title:"\u4ef7\u683c\u5217\u8868",field:"presellSpecsList",type:"o2m",options:{add:!0,edit:!0,delete:!0,fields:[{title:"\u540d\u79f0",field:"name",required:!0},{title:"\u5305\u88c5\u6570\u91cf",field:"packCount",required:!0},{title:"\u4ef7\u683c",field:"price",amount:!0,required:!0},{title:"\u95f4\u9694(\u5c0f\u65f6)",field:"intervalHours"},{title:"\u6da8\u5e45(%)",field:"increase"}]},required:!0},{title:"\u6811\u6728\u5217\u8868",field:"treeList",type:"o2m",options:{add:!0,edit:!0,delete:!0,detail:!0,fields:[{title:"\u6811\u6728\u7f16\u53f7",field:"treeNumber",required:!0},{title:"\u6811\u9f84",field:"age",required:!0},{title:"\u7ecf\u5ea6",field:"longitude",required:!0},{title:"\u7eac\u5ea6",field:"latitude",required:!0},{title:"\u5b9e\u666f\u56fe",field:"pic",type:"img"},{title:"\u5907\u6ce8",field:"remark"}]},required:!0},{title:"\u4ea7\u54c1\u63cf\u8ff0",field:"description",type:"textarea",required:!0},{title:"\u5907\u6ce8",field:"remark",maxlength:250,readonly:!this.check}];t=t.concat([]);var i={fields:t,code:this.code,view:this.view,detailCode:629416,addCode:629400,editCode:629401,beforeSubmit:function(e,t){if(!t)return!1}};return this.check&&(i.buttons=[{title:"\u901a\u8fc7",check:!0,type:"primary",handler:function(t){e.checkProduct(1,t)}},{title:"\u4e0d\u901a\u8fc7",check:!0,type:"primary",handler:function(t){e.checkProduct(0,t)}},{title:"\u8fd4\u56de",handler:function(t){e.props.history.go(-1)}}]),this.buildDetail(i)}}]),t}(s.a))||a;t.default=h},585:function(e,t,i){"use strict";function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}i.d(t,"a",function(){return f});var a=(i(478),i(479)),c=i(1),u=i.n(c),d=i(613),s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),f=(a.a.Item,function(e){function t(){var e,i,o,a;n(this,t);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return i=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.setO2MSelect=function(e,t){o.setState(function(i){return{selectedRowKeys:Object.assign({},i.selectedRowKeys,r({},e,t))}})},o.setO2MData=function(e,t){o.setState(function(i){return{pageData:Object.assign({},i.pageData,r({},e,t))}})},a=i,l(o,a)}return o(t,e),s(t,[{key:"getTableItem",value:function(e,t){var i={list:t,hidden:e.hidden,inline:e.inline,field:e.field,title:e.title,label:this.getLabel(e),readonly:e.readonly,options:e.options,selectedRowKeys:this.state.selectedRowKeys[e.field]||[],setO2MSelect:this.setO2MSelect,setO2MData:this.setO2MData};return u.a.createElement(CO2M,Object.assign({key:e.field},i))}}]),t}(d.a))}});