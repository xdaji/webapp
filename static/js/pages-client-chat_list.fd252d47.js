(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-chat_list"],{"02e7":function(t,e,i){"use strict";i.r(e);var n=i("2a69"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"0fa0":function(t,e,i){var n=i("f495d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1d8df52a",n,!0,{sourceMap:!1,shadowMode:!1})},"1b64":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'uni-page-body[data-v-3d7a89c2]{color:#fff}.msg_list[data-v-3d7a89c2]{position:relative;overflow:hidden}.msg_list[data-v-3d7a89c2]::before{background:#222;content:"";position:absolute;width:100%;margin-left:40px;bottom:0;height:1px}.tou_img_box[data-v-3d7a89c2]{position:relative}.tou_img_box uni-text[data-v-3d7a89c2]{content:"";position:absolute;top:-7px;right:-7px;width:20px;height:20px;background:red;border-radius:50%;color:#fff;font-size:9px;-webkit-transform:scale(.8);transform:scale(.8);text-align:center;line-height:18px}',""]),t.exports=e},2305:function(t,e,i){"use strict";i.r(e);var n=i("8ed3"),o=i("d734");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("f224");var r=i("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3d7a89c2",null,!1,n["a"],void 0);e["default"]=u.exports},2322:function(t,e,i){"use strict";var n=i("fe93"),o=i.n(n);o.a},"2a69":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var o=n(i("ed13")),a=i("37dc"),r=n(i("7b21")),u=(0,a.initVueI18n)(r.default),s=u.t,l={name:"uniPopupDialog",mixins:[o.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"info",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||s("uni-popup.ok")},closeText:function(){return this.cancelText||s("uni-popup.cancel")},placeholderText:function(){return this.placeholder||s("uni-popup.placeholder")},titleText:function(){return this.title||s("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){try{this.popup.disableMask()}catch(t){console.log(t.message)}"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=l},"3b41":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[i("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",["checkbox"===t.inputType?i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"checkbox"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):"radio"===t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:t.inputType},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])],2),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[1==t.showClose?i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1):t._e(),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",style:t.showClose?"border-left-width:0px":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},o=[]},"3d79":function(t,e,i){"use strict";i.r(e);var n=i("4154"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},4154:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"67b4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-image[data-v-3d144b06]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-3d144b06]{width:100%;height:100%}.u-image__loading[data-v-3d144b06], .u-image__error[data-v-3d144b06]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"7ad0":function(t,e,i){"use strict";i.r(e);var n=i("3b41"),o=i("02e7");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("f0e5");var r=i("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3090be88",null,!1,n["a"],void 0);e["default"]=u.exports},"7b21":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("b725")),a=n(i("dfc3")),r=n(i("a771")),u={en:o.default,"zh-Hans":a.default,"zh-Hant":r.default};e.default=u},"83a9":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("f07e")),a=n(i("c964")),r=(getApp(),{data:function(){return{cate:1,pagenum:1,list:[],more_data:1,order_id:0,timer:null,kefu_id:1555,new_to_uid:"",uid:0}},onLoad:function(t){var e=this;console.log(t),"undefined"!=typeof t.order_id&&(this.order_id=t.order_id),setTimeout((function(){e.init()}),500)},onHide:function(){},onUnload:function(){},onShow:function(){uni.getStorageSync("userinfo")?this.uid=uni.getStorageSync("userinfo").id:this.uid=0},onPullDownRefresh:function(){},onNavigationBarButtonTap:function(t){console.log(t),this.add_chat()},methods:{go:function(t){uni.navigateTo({url:t})},add_chat:function(){this.$refs.addRefs.open()},add_chat_save:function(){0==this.new_to_uid&&this.error("请输入用户id"),this.$refs.addRefs.close(),this.go("/pages/client/chat_message??to_uid="+this.new_to_uid),this.new_to_uid=""},init:function(){var t=this;console.log("sssssssssss2",uni.getStorageSync("userinfo")),uni.getStorageSync("userinfo")?(this.uid=uni.getStorageSync("userinfo").id,console.log("tttt222",this.uid)):this.uid=0,console.log("getcccccccccccccc",this.uid),this.uid>0&&(console.log("ccccccccccccccccccccccccccc",this.uid),this.get_list()),setTimeout((function(){t.init()}),6e3)},get_list:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var i,n,a;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,console.log("开始请求数据"),n={id:i.id},e.next=5,uni.$api.chat.getChatList(n);case 5:a=e.sent,t.list=a.list,t.$forceUpdate(),console.log("更新会话列表"),console.log(a,"chattttttttttttttttttttt");case 10:case"end":return e.stop()}}),e)})))()}}});e.default=r},8662:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("528f").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]},"8ed3":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uImage:i("a411").default,uniPopup:i("9f83").default,uniPopupDialog:i("7ad0").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",[i("v-uni-view",{staticClass:"pad "},[i("v-uni-view",{staticClass:" flex-column "},t._l(t.list,(function(e){return t.uid>0?i("v-uni-view",{staticClass:"flex-space item-center radius-10  radius-10  pad pb15 msg_list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/client/chat_message?to_uid="+e.uid)}}},[i("v-uni-view",{staticClass:"flex-row item-center tou_img_box"},[i("u-image",{staticClass:"radius-10 pic-45",attrs:{src:e.avatar,"border-radius":"5px","error-icon":"/static/tou_sq.png"}}),e.unread>0?i("v-uni-text",[t._v(t._s(e.unread))]):t._e()],1),i("v-uni-view",{staticClass:"flex-column flex-1 pl10"},[e.uid!=t.kefu_id?i("v-uni-view",{staticClass:" fs18   flex-1"},[t._v(t._s(e.nick))]):i("v-uni-view",{staticClass:" fs16   flex-1 item-center",staticStyle:{color:"deeppink"}},[t._v("官方客服"),i("v-uni-image",{staticClass:"pic-15 ml5",attrs:{src:"/static/chat/cer2.png"}})],1),1==e.type?i("v-uni-view",{staticClass:"gray999 fs12 mt6 txt_nowrap"},[t._v("[图片]")]):i("v-uni-view",{staticClass:"gray999 fs12 mt6 txt_nowrap"},[t._v(t._s(e.message))])],1),i("v-uni-view",{staticClass:"w120px fs9  aright gray666",staticStyle:{"margin-top":"-20px"}},[t._v(t._s(t.timeAgo(e.post_time)))])],1):t._e()})),1),t.uid?t._e():i("v-uni-view",{staticClass:"flex-center flex-column mt25",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/login/login")}}},[i("v-uni-image",{staticStyle:{width:"122px"},attrs:{src:"/static/chat/no_login.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"flex-center gray999"},[t._v("请先登录")])],1)],1)],1),i("uni-popup",{ref:"addRefs"},[i("uni-popup-dialog",{attrs:{title:"新建聊天"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.addRefs.close()},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.add_chat_save()}}},[i("v-uni-view",{staticClass:"flex-center"},[t._v("对方ID："),i("v-uni-input",{staticClass:"bg_black w100px h30px",attrs:{type:"text"},model:{value:t.new_to_uid,callback:function(e){t.new_to_uid=e},expression:"new_to_uid"}})],1)],1)],1)],1)},a=[]},a411:function(t,e,i){"use strict";i.r(e);var n=i("8662"),o=i("3d79");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2322");var r=i("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3d144b06",null,!1,n["a"],void 0);e["default"]=u.exports},a771:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},b725:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},d734:function(t,e,i){"use strict";i.r(e);var n=i("83a9"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},dfc3:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},ed13:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}};e.default=n},f0e5:function(t,e,i){"use strict";var n=i("0fa0"),o=i.n(n);o.a},f224:function(t,e,i){"use strict";var n=i("fcdc"),o=i.n(n);o.a},f495d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.uni-popup-dialog[data-v-3090be88]{width:300px;border-radius:11px;background-color:#222}.uni-dialog-title[data-v-3090be88]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-3090be88]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-3090be88]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px;color:#fff}.uni-dialog-content-text[data-v-3090be88]{font-size:14px;color:#fff}.uni-dialog-button-group[data-v-3090be88]{display:flex;flex-direction:row;border-top-color:#444;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-3090be88]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-3090be88]{border-left-color:#444;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-3090be88]{font-size:16px;color:#999}.uni-button-color[data-v-3090be88]{color:#fff}.uni-dialog-input[data-v-3090be88]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#eee}.uni-popup__success[data-v-3090be88]{color:#4cd964}.uni-popup__warn[data-v-3090be88]{color:#f0ad4e}.uni-popup__error[data-v-3090be88]{color:#dd524d}.uni-popup__info[data-v-3090be88]{color:#909399}',""]),t.exports=e},fcdc:function(t,e,i){var n=i("1b64");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("e398862c",n,!0,{sourceMap:!1,shadowMode:!1})},fe93:function(t,e,i){var n=i("67b4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("be32409e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);