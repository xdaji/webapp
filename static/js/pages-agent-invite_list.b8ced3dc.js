(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-agent-invite_list"],{"0c1a":function(e,t,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af");var i=a(n("f07e")),r=a(n("c964")),c=getApp(),s={data:function(){return{cate:1,pagenum:1,list:[],more_data:1,order_id:0,pagesize:20,search_key:"",userInfo:{}}},onReachBottom:function(){this.more_data&&(this.pagenum+=1,this.get_list())},onPullDownRefresh:function(){this.refresh()},onLoad:function(e){this.get_list(),console.log(e),"undefined"!=typeof e.order_id&&(this.order_id=e.order_id),this.get_index_data()},methods:{go:function(e){uni.navigateTo({url:e})},get_index_data:function(){var e=this;return(0,r.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.$api.user.index();case 2:n=t.sent,console.log(n,"uuuuuuuuuuuuuuuu"),e.userInfo=n;case 5:case"end":return t.stop()}}),t)})))()},refresh:function(){this.pagenum=1,this.list=[],this.more_data=1,this.get_list(),setTimeout((function(){uni.stopPullDownRefresh()}),500)},search:function(){this.get_list(1)},clear:function(){this.search_key="",this.get_list(1)},get_list:function(e){var t=this;return(0,r.default)((0,i.default)().mark((function n(){var a,r,c;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t,console.log("开始请求数据"),console.log(a.pagenum),r={p:t.pagenum,search_key:t.search_key},n.next=6,uni.$api.agent.inviteListAll(r);case 6:c=n.sent,1==e&&(a.list=[]),a.list=a.list.concat(c.list),c.list.length<a.pagesize&&(a.more_data=0),console.log(a.list);case 11:case"end":return n.stop()}}),n)})))()},edit_field:function(e,t){var n=this;uni.showModal({title:"编辑分成比例",editable:!0,content:t+"",success:function(t){if(console.log(t),"undefined"!=typeof t.confirm){if(!t.content)return c.tips("不能为空"),!1;var a={set_uid:e,fen_rate:t.content};console.log(a),n.setAgent(a)}}})},setAgent:function(e){var t=this;return(0,r.default)((0,i.default)().mark((function n(){return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,uni.$api.agent.setAgentRate(e);case 2:n.sent,t.tips("保存成功！"),t.refresh();case 5:case"end":return n.stop()}}),n)})))()}}};t.default=s},"11bd":function(e,t,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("e4e6")),r=a(n("44bf")),c=a(n("d63e")),s={en:i.default,"zh-Hans":r.default,"zh-Hant":c.default};t.default=s},1738:function(e,t,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i=n("37dc"),r=a(n("11bd")),c=(0,i.initVueI18n)(r.default),s=c.t,o={name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#000"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,showSync:!1,searchVal:""}},computed:{cancelTextI18n:function(){return this.cancelText||s("uni-search-bar.cancel")},placeholderText:function(){return this.placeholder||s("uni-search-bar.placeholder")}},watch:{value:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler:function(e){var t=this;if(e){if(this.readonly)return;this.show=!0,this.$nextTick((function(){t.showSync=!0}))}}},searchVal:function(e,t){this.$emit("input",e)}},methods:{searchClick:function(){var e=this;this.readonly||this.show||(this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel:function(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard())},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})},blur:function(){uni.hideKeyboard(),this.$emit("blur",{value:this.searchVal})},emitFocus:function(e){this.$emit("focus",e.detail)}}};t.default=o},"39cd":function(e,t,n){"use strict";var a=n("ed2e"),i=n.n(a);i.a},"44bf":function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"}')},"670a":function(e,t,n){"use strict";n.r(t);var a=n("0c1a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"6cc9":function(e,t,n){"use strict";n.r(t);var a=n("982d"),i=n("670a");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"71019536",null,!1,a["a"],void 0);t["default"]=s.exports},8008:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("131f").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.searchClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-searchbar__box-icon-search"},[e._t("searchIcon",[n("uni-icons",{attrs:{color:"#c0c4cc",size:"18",type:"search"}})])],2),e.show||e.searchVal?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",style:"color:"+e.textColor,attrs:{focus:e.showSync,disabled:e.readonly,placeholder:e.placeholderText,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.emitFocus.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)&&!e.readonly?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._t("clearIcon",[n("uni-icons",{attrs:{color:"#c0c4cc",size:"20",type:"clear"}})])],2):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelTextI18n))]):e._e()],1)},r=[]},"857b":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.uni-searchbar[data-v-3364144a]{display:flex;flex-direction:row;position:relative;padding:10px}.uni-searchbar__box[data-v-3364144a]{display:flex;box-sizing:border-box;overflow:hidden;position:relative;flex:1;justify-content:center;flex-direction:row;align-items:center;height:45px;padding:8px 8px 8px 0}.uni-searchbar__box-icon-search[data-v-3364144a]{display:flex;flex-direction:row;padding:0 8px;justify-content:center;align-items:center;color:#b3b3b3}.uni-searchbar__box-search-input[data-v-3364144a]{flex:1;font-size:14px;color:#333}.uni-searchbar__box-icon-clear[data-v-3364144a]{align-items:center;line-height:24px;padding-left:8px;cursor:pointer}.uni-searchbar__text-placeholder[data-v-3364144a]{font-size:14px;color:#b3b3b3;margin-left:5px}.uni-searchbar__cancel[data-v-3364144a]{padding-left:10px;line-height:45px;font-size:14px;color:#333;cursor:pointer}',""]),e.exports=t},"982d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uniSearchBar:n("a4f4").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",[n("v-uni-view",{staticStyle:{background:"#111",color:"#fff"}},[n("uni-search-bar",{attrs:{cancelButton:"none",bgColor:"#333333",textColor:"#ffffff",placeholder:"搜索ID"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}},model:{value:e.search_key,callback:function(t){e.search_key=t},expression:"search_key"}})],1),e.list.length?n("v-uni-view",{staticClass:"lr10 flex-column flex-wrap"},e._l(e.list,(function(t){return n("v-uni-view",{staticClass:"flex-column border-bot-666 pad bg_gray333 mt10 radius-10"},[n("v-uni-view",{staticClass:"flex-space item-center"},[n("v-uni-view",{staticClass:"flex-1 item-center"},[n("v-uni-image",{staticClass:"pic-40 radius-50 border-gray",attrs:{src:e.statics.defaultFace2}}),n("v-uni-view",{staticClass:"flex-row  lr10 mt6 flex-1"},[n("v-uni-view",[n("v-uni-text",{staticClass:"gray999 mr10"},[e._v("ID:")]),e._v(e._s(t.id))],1)],1)],1),t.is_agent?n("v-uni-view",{staticClass:"bg_orange fs10 pad04 h25px flex-center radius-5"},[e._v("代理")]):e._e()],1),n("v-uni-view",{staticClass:"flex-space mt10"},[n("v-uni-view",{staticClass:"mt6 flex-1"},[n("v-uni-text",{staticClass:"gray999 mr10"},[e._v("收入：")]),e._v(e._s(t.total_income))],1),n("v-uni-view",{staticClass:"item-center"},[n("v-uni-text",{staticClass:"gray999 mr10"},[e._v("分成比例：")]),e._v(e._s(t.agent_fen_rate)+"%"),n("v-uni-image",{staticClass:"pic-18 ml10",attrs:{src:"/static/img/edit.png"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.edit_field(t.id,t.agent_fen_rate)}}})],1)],1)],1)})),1):e._e(),0==e.list.length?n("v-uni-view",{staticClass:"flex-column flex-center mt20"},[n("v-uni-image",{staticClass:"mt20 h130px",attrs:{src:"/static/no_data4.png",mode:"heightFix"}}),n("v-uni-view",{staticClass:"mt10 gray999"},[e._v("暂无数据")])],1):e._e()],1)],1)},r=[]},a4f4:function(e,t,n){"use strict";n.r(t);var a=n("8008"),i=n("e25c");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("39cd");var c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"3364144a",null,!1,a["a"],void 0);t["default"]=s.exports},d63e:function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}')},e25c:function(e,t,n){"use strict";n.r(t);var a=n("1738"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},e4e6:function(e){e.exports=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"}')},ed2e:function(e,t,n){var a=n("857b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("2a488204",a,!0,{sourceMap:!1,shadowMode:!1})}}]);