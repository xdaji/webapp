(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-live_video"],{"0c1f":function(i,t,e){"use strict";e.r(t);var n=e("6894"),o=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=o.a},2322:function(i,t,e){"use strict";var n=e("fe93"),o=e.n(n);o.a},3912:function(i,t,e){"use strict";var n=e("c235"),o=e.n(n);o.a},"3d79":function(i,t,e){"use strict";e.r(t);var n=e("4154"),o=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=o.a},4154:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(i){i?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var i={};return i.width=this.$u.addUnit(this.width),i.height=this.$u.addUnit(this.height),i.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),i.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(i.opacity=this.opacity,i.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),i}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(i){this.loading=!1,this.isError=!0,this.$emit("error",i)},onLoadHandler:function(){var i=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){i.durationTime=i.duration,i.opacity=1,setTimeout((function(){i.removeBgColor()}),i.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=n},"5f79":function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uImage:e("a411").default},o=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-swiper",{staticClass:"swiper",style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px; ",attrs:{circular:!0,current:i.current,vertical:!0,duration:"300"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.swiperChange.apply(void 0,arguments)}}},i._l(i.displaySwiperList,(function(t,o){return n("v-uni-swiper-item",{key:o},[0!=Math.abs(i.displayIndex-o)?n("v-uni-view",{staticStyle:{"z-index":"999"}},[0!=Math.abs(i.displayIndex-o)?n("v-uni-video",{style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px;",attrs:{id:t._id,controls:i.controls,autoplay:!0,loop:!1,src:t.video_url,poster:t.img},on:{ended:function(t){arguments[0]=t=i.$handleEvent(t),i.ended.apply(void 0,arguments)},controlstoggle:function(t){arguments[0]=t=i.$handleEvent(t),i.controlstoggle.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapVideoHover()},fullscreenchange:function(t){arguments[0]=t=i.$handleEvent(t),i.fullscreenchange.apply(void 0,arguments)},timeupdate:function(t){arguments[0]=t=i.$handleEvent(t),i.videoTimeUpdateEvent.apply(void 0,arguments)}}}):i._e()],1):i._e(),0==Math.abs(i.displayIndex-o)?n("v-uni-view",[0==Math.abs(i.displayIndex-o)?n("v-uni-video",{style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px;",attrs:{id:t._id,controls:i.controls,autoplay:!0,isplay:!0,loop:!i.isplay,"enable-progress-gesture":!1,src:t.video_url,poster:t.img},on:{ended:function(t){arguments[0]=t=i.$handleEvent(t),i.ended.apply(void 0,arguments)},controlstoggle:function(t){arguments[0]=t=i.$handleEvent(t),i.controlstoggle.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapVideoHover()},fullscreenchange:function(t){arguments[0]=t=i.$handleEvent(t),i.fullscreenchange.apply(void 0,arguments)},timeupdate:function(t){arguments[0]=t=i.$handleEvent(t),i.videoTimeUpdateEvent.apply(void 0,arguments)}}}):i._e()],1):i._e(),i.isqp?n("v-uni-view",{staticClass:"userInfo"},[n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=i.$handleEvent(e),i.cLike(t.like,t.id,t.mid)}}},[1*t.like==1?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("dca0")}}):i._e(),1*t.like==2?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("9f77")}}):i._e(),n("v-uni-text",{class:{likeNumActive:t.like},staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v(i._s(t.like_n))])],1),n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.share.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"5px"},attrs:{src:e("f7f5")}}),n("v-uni-text",{staticClass:"text-shadow",staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v("分享")])],1)],1):i._e(),i.isqp?n("v-uni-view",{staticClass:"contentcd"},[n("v-uni-text",{staticClass:"userName",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.title))]),n("v-uni-text",{staticClass:"wordss",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.msg))])],1):i._e()],1)})),1),n("v-uni-cover-view",{staticClass:"right_bar"},[n("v-uni-cover-view",{staticClass:"flex-row item-center",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list22()}}},[n("v-uni-cover-image",{staticClass:"ml5",staticStyle:{width:"61px",height:"20px"},attrs:{src:"/static/list.png"}})],1)],1),1==i.show_right_list?n("v-uni-cover-view",{staticClass:"right_list",style:{height:i.right_list_height+"px"}},[n("v-uni-cover-view",{staticClass:"close_btn ",staticStyle:{"z-index":"99",position:"relative"},style:{top:i.right_close_top+"px"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list=0}}},[n("v-uni-cover-image",{staticClass:"pic-12 close_img",staticStyle:{width:"12px",height:"12px","z-index":"99"},attrs:{src:"/static/sanjiao.png"}})],1),n("v-uni-cover-view",{staticClass:"right_list_main",staticStyle:{width:"100px","margin-left":"10px"},style:{height:i.right_list_height+"px"}},[n("v-uni-scroll-view",{staticStyle:{position:"absolute",height:"100%"},style:{height:i.right_list_height+"px"},attrs:{"scroll-y":"true"}},[n("v-uni-cover-view",{staticClass:"mb10"}),i._l(i.originList,(function(t,e){return n("v-uni-cover-view",{key:e,staticClass:" pb10 mb10 ml10  pad5",class:i.now_video_id==t.id?"bg_pink":"",staticStyle:{position:"relative",width:"80px",overflow:"hidden"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tap_right(e)}}},[n("u-image",{staticClass:"pic-70 radius-5",attrs:{mode:"aspectFill",src:t.img,width:"70px",height:"70px","border-radius":"5px"}}),n("v-uni-text",{staticClass:"fs12  text-center  h40px mt10  over-hide",staticStyle:{color:"#ffffff"}},[i._v(i._s(t.name))])],1)}))],2)],1)],1):i._e()],1)},s=[]},"67b4":function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-image[data-v-3d144b06]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-3d144b06]{width:100%;height:100%}.u-image__loading[data-v-3d144b06], .u-image__error[data-v-3d144b06]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),i.exports=t},6894:function(i,t,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("14d9"),e("a9e3");var o=n(e("f07e")),s=n(e("c964")),a=n(e("c4b8")),r=uni.createInnerAudioContext(),d={data:function(){return{sharedata:{type:2,strShareUrl:"",strShareTitle:"分享标题",strShareSummary:"分享总结",strShareImageUrl:""},fenji:1,controls:!0,originList:[],displaySwiperList:[],displayIndex:0,originIndex:0,windowWidth:0,windowHeight:0,current:0,oid:0,isplay:!0,playCount:2,nodate:!0,duration:500,issp:"",isqp:!0,page:1,urls:a.default.webUrl,baymid:0,scrollTop:0,vid:0,is_vip:0,mid:0,isbuylx:0,safeArea:0,uid:0,show_right_list:0,right_list_width:0,right_list_height:0,right_close_top:0,freed_time:30}},onLoad:function(i){var t=this;console.log("eeeeeee-----",i),i.fxpid&&i.fxpid>0&&uni.setStorage({key:"fxpid",data:i.fxpid}),uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id),uni.getSystemInfo({success:function(i){t.safeArea=i.safeAreaInsets.bottom}}),uni.setStorage({key:"isbuy",data:1}),i.vid&&(this.vid=i.vid),i.mid&&(this.mid=i.mid),this.windowWidth=uni.getSystemInfoSync().windowWidth,this.windowHeight=uni.getSystemInfoSync().windowHeight-this.safeArea,this.right_list_height=this.windowHeight,this.right_close_top=this.windowHeight/2},onShow:function(){uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id,this.is_vip=2==uni.getStorageSync("userinfo").group_id?1:0,console.log(uni.getStorageSync("userinfo"),"vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")),this.gxdd();try{var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.play()}catch(t){console.log(t.message)}},onHide:function(){var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.pause()},onShareAppMessage:function(i){},methods:{fullscreenchange:function(i){i.detail.fullScreen||plus.screen.lockOrientation("portrait-primary")},show_right_list22:function(){this.show_right_list=1},share:function(){var i=this;return(0,s.default)((0,o.default)().mark((function t(){var e,n,s;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.$api.index.shareDomain();case 2:e=t.sent,n=e.list[0].url,s=n+"/?pid="+i.uid+"&vid="+i.now_video_id,uni.setClipboardData({data:s,complete:function(){uni.showToast({title:"分享连接已复制到剪贴板"})}});case 6:case"end":return t.stop()}}),t)})))()},gxdd:function(){uni.getStorageSync("isbuy");console.log("更新列表"),this.page=1,this.Recommend()},buyAct:function(i){1==i&&(i=this.originList[this.baymid].mid);var t=this.originList[this.baymid];if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.isbuylx=i,uni.setStorage({key:"buydata",data:t}),uni.setStorage({key:"isbuy",data:1}),this.downbuy(),uni.navigateTo({url:"/pages/client/tuan/buy?id="+this.id+"&mid="+i})},govip:function(){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.downbuy(),uni.navigateTo({url:"/pages/client/vipcard/index"})},timeupdate:function(i){i.detail.currentTime>0&&1==this.originList[this.originIndex].pays&&(uni.createVideoContext(this.originList[this.originIndex]._id,this).seek(0),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause(),this.fenji=2,this.baymid=this.originIndex)},selectThisVideo:function(i,t){var e=this;this.down(),1==t?(this.baymid=i,this.fenji=2):(this.duration=20,this.originIndex=i,this.initSwiperData(i),setTimeout((function(){e.duration=500}),500))},down:function(){this.$refs.select.close()},downbuy:function(){this.$refs.select.close()},tapVideoHover:function(i,t){this.right_list_width=0,this.show_right_list=0,this.isqp=!this.isqp},tapVides:function(){this.isqp=!this.isqp},Recommend:function(){var i=this,t=0;uni.getStorageSync("userinfo")&&(t=uni.getStorageSync("userinfo").id);var e=0;1==this.page&&(e=this.vid),uni.request({url:this.urls+"/api/live/recommand?page="+this.page+"&uid="+t+"&vid="+e+"&mid="+this.mid+"&token="+uni.getStorageSync("userinfo").token,success:function(t){if(console.log(t),t.data.data.length>0){var e=t.data.data;t.data.midlog;if(1==i.page)i.originList=t.data.data,i.originIndex=0,i.initSwiperData(i.originIndex);else for(var n=0;n<e.length;n++)i.originList.push(e[n]);i.page=i.page+1}else i.nodate=!1}})},ended:function(){this.isplay&&(this.displayIndex<2?this.current=this.displayIndex+1:this.current=0,this.isqp=!0,console.log("显示swiper Index:",this.displayIndex))},initSwiperData:function(){var i=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.originIndex;this.isqp=!1;var e=this.originList.length,n=[];n[this.displayIndex]=this.originList[t],n[this.displayIndex-1==-1?2:this.displayIndex-1]=this.originList[t-1==-1?e-1:t-1],n[this.displayIndex+1==3?0:this.displayIndex+1]=this.originList[t+1==e?0:t+1],this.displaySwiperList=n,r.pause(),this.oid>=this.originList.length&&(this.oid=0),this.oid<0&&(this.oid=this.originList.length-1),this.now_video_id=this.originList[t].id,console.log(this.now_video_id,"nowwwwwwwwwwwwwwwwwwwwwwwwww"),uni.createVideoContext(this.originList[this.oid]._id,this).stop(),1==this.originList[t].pays?(this.isqp=!0,this.baymid=this.originIndex,this.fenji=1):setTimeout((function(){i.isqp=!0,console.log("qqqqqq:",i.originList[t]._id),uni.getBackgroundAudioManager(i.originList[t]._id,i).play(),i.bfjl(i.originList[t].mid)}),500);var o=this.originList.length-this.playCount;t==o&&this.nodate&&this.Recommend()},swiperChange:function(i){var t=i.detail.current,e=this.originList.length;this.displayIndex-t==2||this.displayIndex-t==-1?(this.originIndex=this.originIndex+1==e?0:this.originIndex+1,this.displayIndex=this.displayIndex+1==3?0:this.displayIndex+1,this.oid=this.originIndex-1,this.initSwiperData(this.originIndex)):this.displayIndex-t!=-2&&this.displayIndex-t!=1||(this.originIndex=this.originIndex-1==-1?e-1:this.originIndex-1,this.displayIndex=this.displayIndex-1==-1?2:this.displayIndex-1,this.oid=this.originIndex+1,this.initSwiperData(this.originIndex))},tap_right:function(i){this.originIndex=i,this.initSwiperData(this.originIndex);var t=uni.createVideoContext(this.originList[this.originIndex]._id,this);t.play()},detail:function(i,t){var e=1;uni.getStorageSync("userinfo")&&(e=uni.getStorageSync("userinfo").id),uni.navigateTo({url:"/pages/client/tuan/detail?vid="+i+"&mid="+t+"&fxpid="+e})},toComment:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.displaySwiperList[this.displayIndex];this.displaySwiperList[this.displayIndex].iszj=1==i?2:1;var n={vid:t,mid:e};n.token=uni.getStorageSync("userinfo").token,n.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/videorecord",data:n,success:function(i){},fail:function(i,t){}})},bfjl:function(i){if(uni.getStorageSync("userinfo")){var t={vid:this.vid,mid:i};t.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/video/bfjl",data:t,success:function(i){},fail:function(i,t){}})}},controlstoggle:function(i){console.log(i.detail.show),this.issp=i.detail.show},cLike:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;var n=this.displaySwiperList[this.displayIndex];1==i?(this.displaySwiperList[this.displayIndex].like=2,n.like_n+=1):(this.displaySwiperList[this.displayIndex].like=1,n.like_n-=1),console.log(t);var o={vid:t,mid:e};o.token=uni.getStorageSync("userinfo").token,o.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/tapLove",data:o,success:function(i){},fail:function(i,t){}})},denglu:function(){uni.showModal({title:"温馨提示",content:"请先登录",showCancel:!0,confirmText:"登录",success:function(i){i.confirm?uni.navigateTo({url:"/pages/login/login"}):i.cancel}})},videoTimeUpdateEvent:function(i){console.log(i),i.target.id!=this.originList[this.originIndex]._id&&uni.createVideoContext(i.target.id,this).pause();var t=Number(i.detail.currentTime);if(console.log("播放进度条改变",t),t>=this.freed_time&&0==this.uid){console.log("试看结束-login-first-sssssssssssssss",t),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause();var e=uni.createVideoContext(this.originList[this.originIndex]._id,this);e.exitFullScreen(),e.pause(),e.seek(0),uni.showModal({title:"溫馨提示",content:"请先登录",showCancel:!0,confirmText:"確定",success:function(i){i.confirm?window.location=a.default.downloadUrl:i.cancel}})}else if(t>=this.freed_time&&0==this.is_vip&&this.uid>0){console.log("试看结束sssssssssssssss",t),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause();var n=uni.createVideoContext(this.originList[this.originIndex]._id,this);n.exitFullScreen(),n.pause(),n.seek(0),uni.showModal({title:"溫馨提示",content:"试看已经结束，是否前往充值vip？",showCancel:!0,confirmText:"確定",success:function(i){i.confirm?uni.navigateTo({url:"/pages/client/vipcard/index"}):i.cancel}})}}},created:function(){}};t.default=d},8662:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uIcon:e("528f").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-image",style:[i.wrapStyle,i.backgroundStyle],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onClick.apply(void 0,arguments)}}},[i.isError?i._e():e("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==i.shape?"50%":i.$u.addUnit(i.borderRadius)},attrs:{src:i.src,mode:i.mode,"lazy-load":i.lazyLoad,"show-menu-by-longpress":i.showMenuByLongpress},on:{error:function(t){arguments[0]=t=i.$handleEvent(t),i.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=i.$handleEvent(t),i.onLoadHandler.apply(void 0,arguments)}}}),i.showLoading&&i.loading?e("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==i.shape?"50%":i.$u.addUnit(i.borderRadius),backgroundColor:this.bgColor}},[i.$slots.loading?i._t("loading"):e("u-icon",{attrs:{name:i.loadingIcon,width:i.width,height:i.height}})],2):i._e(),i.showError&&i.isError&&!i.loading?e("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==i.shape?"50%":i.$u.addUnit(i.borderRadius)}},[i.$slots.error?i._t("error"):e("u-icon",{attrs:{name:i.errorIcon,width:i.width,height:i.height}})],2):i._e()],1)},s=[]},"967c":function(i,t,e){"use strict";e.r(t);var n=e("5f79"),o=e("0c1f");for(var s in o)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(s);e("3912");var a=e("f0c5"),r=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"7b41ea52",null,!1,n["a"],void 0);t["default"]=r.exports},"9f77":function(i,t,e){i.exports=e.p+"static/aixinRed.png"},a411:function(i,t,e){"use strict";e.r(t);var n=e("8662"),o=e("3d79");for(var s in o)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(s);e("2322");var a=e("f0c5"),r=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"3d144b06",null,!1,n["a"],void 0);t["default"]=r.exports},c235:function(i,t,e){var n=e("f085");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("96619494",n,!0,{sourceMap:!1,shadowMode:!1})},dca0:function(i,t,e){i.exports=e.p+"static/aixin.png"},f085:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,"\nuni-page-body[data-v-7b41ea52]{background:#000}body.?%PAGE?%[data-v-7b41ea52]{background:#000}\n.title[data-v-7b41ea52]{width:100%;display:flex;justify-content:center;align-items:center;height:%?60?%}.wrap_content[data-v-7b41ea52]{border-radius:%?20?%;display:flex;justify-content:center;align-items:center;background:grey;color:#0ff;height:100%;font-size:80px;margin:%?0?% %?40?%}.container[data-v-7b41ea52]{background-color:#000}.item[data-v-7b41ea52]{\r\n\t\t/* width : 750rpx; */background-color:#000;position:relative}.videoHover[data-v-7b41ea52]{position:absolute;top:0;left:0;flex:1;background-color:rgba(0,0,0,.1);justify-content:center;align-items:center\r\n\t\t\r\n\t\t/* border-style: dashed;\r\n\t\tborder-color: #DD524D;\r\n\t\tborder-width: 1px; */}.playState[data-v-7b41ea52]{width:%?160?%;height:%?160?%;opacity:.2}.userInfo[data-v-7b41ea52]{position:absolute;z-index:99;right:10px;width:%?100?%;text-align:center;flex-direction:column}\n.userInfo[data-v-7b41ea52]{bottom:40%}\n.userAvatar[data-v-7b41ea52]{border-radius:500%;margin-bottom:15px;border-style:solid;border-width:2px;border-color:#fff}.userAvatar[data-v-7b41ea52]{width:%?100?%;height:%?100?%}.likeIco[data-v-7b41ea52],.shareIco[data-v-7b41ea52],.commentIco[data-v-7b41ea52]{width:%?60?%;height:%?60?%;margin-top:15px}.likeNum[data-v-7b41ea52],.commentNum[data-v-7b41ea52],.shareTex[data-v-7b41ea52]{color:#fff;font-size:%?30?%;text-align:center;margin:5px}.likeNumActive[data-v-7b41ea52]{color:red}.contentcd[data-v-7b41ea52]{width:%?720?%;z-index:99;position:absolute;bottom:%?70?%;\r\n\t  /* justify-content: center; */padding:%?15?%;flex-direction:column;justify-content:flex-start;color:#fff}.userName[data-v-7b41ea52]{font-size:%?30?%;color:#fff;margin-top:%?80?%;margin-left:%?-12?%}.words[data-v-7b41ea52]{margin-top:%?16?%;font-size:%?30?%;color:#fff;margin-bottom:%?20?%}.wordss[data-v-7b41ea52]{margin-top:%?10?%;font-size:%?26?%;color:#fff}.root[data-v-7b41ea52]{background-color:#000}.gdfgjh[data-v-7b41ea52]{font-size:%?30?%;font-weight:600;line-height:%?90?%;background:#fff;border-radius:%?18?%;padding:0 %?20?%;text-align:center;margin-bottom:%?20?%}.right_bar[data-v-7b41ea52]{position:fixed;top:85px;right:10px;color:#fff}.right_list[data-v-7b41ea52]{position:fixed;top:0;right:0;color:#fff;width:100px;height:700px;z-index:10}.right_list_main[data-v-7b41ea52]{background:#222}.close_btn[data-v-7b41ea52]{background:#333;width:10px;height:40px;position:absolute!important;top:50vh;margin-top:-20px;left:2px;z-index:99;border-top-left-radius:4px;border-bottom-left-radius:4px}.close_img[data-v-7b41ea52]{margin-top:13px;margin-right:2px}",""]),i.exports=t},f7f5:function(i,t,e){i.exports=e.p+"static/share-fill.png"},fe93:function(i,t,e){var n=e("67b4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("be32409e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);