(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trends-user_trends"],{"05eb":function(t,e,i){"use strict";i.r(e);var n=i("7521"),a=i("0e06");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a9d0");var r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"59d859f8",null,!1,n["a"],void 0);e["default"]=o.exports},"0dc5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-00cde8b9]{background:#13131f;color:#cfdadc}body.?%PAGE?%[data-v-00cde8b9]{background:#13131f}.moveable-div[data-v-00cde8b9]{position:fixed ;top:630px;left:350px;right:0;bottom:0;z-index:10;width:60px;height:60px\n  /* Other styles */}",""]),t.exports=e},"0e06":function(t,e,i){"use strict";i.r(e);var n=i("f77f"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},1265:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".moveable-div[data-v-59d859f8]{position:fixed ;top:630px;left:350px;right:0;bottom:0;z-index:10;width:60px;height:60px\n  /* Other styles */}",""]),t.exports=e},2322:function(t,e,i){"use strict";var n=i("fe93"),a=i.n(n);a.a},"3d79":function(t,e,i){"use strict";i.r(e);var n=i("4154"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},4154:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"4af2":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uImage:i("a411").default,homeTrendsfloat:i("05eb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",t._l(t.list,(function(e){return i("v-uni-view",{staticClass:"flex-column pad"},[i("v-uni-view",{staticClass:"flex-row item-center",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_index?uid="+e.uid)}}},[i("v-uni-image",{staticClass:"radius-50 pic-50",attrs:{src:e.tou_img}}),i("v-uni-view",{staticClass:"flex-column ml10 mt6 "},[i("v-uni-view",{staticClass:"item-center"},[t._v(t._s(e.nickname)),1555==e.uid?i("v-uni-image",{staticClass:"pic-20 ml5",attrs:{src:"/static/chat/cer2.png"}}):t._e()],1),i("v-uni-view",{staticClass:"fs12 gray999 flex-row mt6"},[t._v(t._s(e.create_time)),e.location_address?i("v-uni-view",{staticClass:"ml10 flex-center"},[i("v-uni-image",{staticClass:"pic-15 mr5",attrs:{src:"/static/chat/loc.png"}}),t._v(t._s(e.location_address))],1):t._e()],1)],1)],1),i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_trends_details?id="+e.id)}}},[i("v-uni-view",{staticClass:"mt10",staticStyle:{"margin-left":"60px"}},[t._v(t._s(e.content))]),e.imgs[0]?i("v-uni-view",{staticStyle:{"margin-left":"60px"}},[1==e.imgs.length?i("v-uni-view",{staticClass:"flex-space  mt10"},t._l(e.imgs,(function(n){return i("u-image",{staticClass:"  mb5",staticStyle:{width:"150px"},attrs:{mode:"widthFix","border-radius":"2px",src:n+"?s=200_200"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_trends_details?id="+e.id)}}})})),1):e.imgs.length>1&&e.imgs.length<5?i("v-uni-view",{staticClass:"flex-space flex-wrap mt10"},t._l(e.imgs,(function(n){return i("u-image",{staticClass:"  mb5",staticStyle:{width:"49%",height:"100px"},attrs:{mode:"aspectFill","border-radius":"2px",src:n+"?s=200_200"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_trends_details?id="+e.id)}}})})),1):e.imgs.length>4&&e.imgs.length<10?i("v-uni-view",{staticClass:"flex-space flex-wrap mt10"},t._l(e.imgs,(function(n){return i("u-image",{staticClass:"  mb5",staticStyle:{width:"32.3%",height:"100px"},attrs:{mode:"aspectFill","border-radius":"2px",src:n+"?s=200_200"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_trends_details?id="+e.id)}}})})),1):t._e()],1):t._e()],1),i("v-uni-view",{staticClass:"flex-space gray666 mt10",staticStyle:{"margin-left":"60px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/trends/user_trends_details?id="+e.id)}}},[i("v-uni-view",{staticClass:"w50"},[i("v-uni-image",{staticClass:"pic-20",attrs:{src:"/static/share-fill.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/client/member/qrshare")}}})],1),i("v-uni-view",{staticClass:"item-center"},[i("v-uni-image",{staticClass:"pic-20 mr5",attrs:{src:"/static/aixin.png"}}),t._v(t._s(e.loves))],1),i("v-uni-view",{staticClass:"item-center"},[i("v-uni-image",{staticClass:"pic-20 mr5",attrs:{src:"/static/xiaoxi.png"}}),t._v(t._s(e.comments))],1)],1)],1)})),1),i("home-trendsfloat")],1)},s=[]},"5c5c":function(t,e,i){var n=i("1265");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3fe9465c",n,!0,{sourceMap:!1,shadowMode:!1})},"67b4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-image[data-v-3d144b06]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-3d144b06]{width:100%;height:100%}.u-image__loading[data-v-3d144b06], .u-image__error[data-v-3d144b06]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},7521:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"moveable-div ",style:{left:t.x+"px",top:t.y+"px"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.startMoving.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.move.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.stopMoving.apply(void 0,arguments)},touchcancel:function(e){arguments[0]=e=t.$handleEvent(e),t.stopMoving.apply(void 0,arguments)}}},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/trends/user_trends_publish")}}},[i("v-uni-image",{staticClass:"pic-50 radius-50",staticStyle:{"box-shadow":"0px 0px 10px #000"},attrs:{src:"/static/chat/pub.png"}})],1)],1)],1)},a=[]},"7f60":function(t,e,i){"use strict";i.r(e);var n=i("4af2"),a=i("89a3");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ad6d7");var r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"00cde8b9",null,!1,n["a"],void 0);e["default"]=o.exports},8662:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("528f").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},s=[]},"89a3":function(t,e,i){"use strict";i.r(e);var n=i("c4df"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},a411:function(t,e,i){"use strict";i.r(e);var n=i("8662"),a=i("3d79");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("2322");var r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3d144b06",null,!1,n["a"],void 0);e["default"]=o.exports},a9d0:function(t,e,i){"use strict";var n=i("5c5c"),a=i.n(n);a.a},ad6d7:function(t,e,i){"use strict";var n=i("debb"),a=i.n(n);a.a},c4df:function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af");var a=n(i("f07e")),s=n(i("c964")),r=getApp(),o={data:function(){return{now_cat_id:0,key_text:"",pagenum:1,list:[],more_data:1,dingweidizhi:"",latitude:"",longitude:"",x:285,y:510,isMoving:!1,startX:0,startY:0,old:{x:0,y:0}}},components:{},onLoad:function(t){"undefined"!=typeof t.id&&(this.now_cat_id=t.id),this.get_list()},onShow:function(){},onPullDownRefresh:function(){this.get_list(1),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.more_data&&(this.pagenum+=1,this.get_list())},onNavigationBarButtonTap:function(t){console.log(t),this.go("/pages/trends/user_trends_publish")},computed:{},methods:{go:function(t){r.go(t)},go_dianpu:function(t){uni.navigateTo({url:"/pages-user/shop_view?v_supplier_id="+t})},back:function(){uni.navigateBack({delta:1})},get_list:function(t){var e=this;return(0,s.default)((0,a.default)().mark((function i(){var n,s,r;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e,1==t&&(e.pagenum=1,e.more_data=1,uni.stopPullDownRefresh()),s={cat_id:n.now_cat_id,page:n.pagenum,key_text:n.key_text,latitude:n.latitude,longitude:n.longitude,juli:n.juli,paixu:n.paixufagnshi},i.next=5,uni.$api.userTrends.getList(s);case 5:if(r=i.sent,console.log("tttttttttt",r),1==t&&(n.list=[]),0!=r.list.length){i.next=10;break}return i.abrupt("return");case 10:n.list=n.list.concat(r.list),r.list.length<20&&(n.more_data=0),console.log(n.list);case 13:case"end":return i.stop()}}),i)})))()}}};e.default=o},debb:function(t,e,i){var n=i("0dc5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("8e9d5b82",n,!0,{sourceMap:!1,shadowMode:!1})},f77f:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["banners"],data:function(){return{x:285,y:510,screenHeight:0,isMoving:!1,startX:0,startY:0,old:{x:0,y:0}}},methods:{startMoving:function(t){this.isMoving=!0,this.startX=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY},move:function(t){this.isMoving&&(this.x+=t.changedTouches[0].clientX-this.startX,this.y+=t.changedTouches[0].clientY-this.startY,this.startX=t.changedTouches[0].clientX,this.startY=t.changedTouches[0].clientY)},stopMoving:function(){this.isMoving=!1},goto_download:function(){window.location="https://xdaji.github.io/download/"}}};e.default=n},fe93:function(t,e,i){var n=i("67b4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("be32409e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);