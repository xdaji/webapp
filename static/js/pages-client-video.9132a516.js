(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-video"],{"31ec":function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,".title[data-v-5de11ce2]{width:100%;display:flex;justify-content:center;align-items:center;height:%?60?%}.wrap_content[data-v-5de11ce2]{border-radius:%?20?%;display:flex;justify-content:center;align-items:center;background:grey;color:#0ff;height:100%;font-size:80px;margin:%?0?% %?40?%}.container[data-v-5de11ce2]{background-color:#000}.item[data-v-5de11ce2]{\r\n\t\t/* width : 750rpx; */background-color:#000;position:relative}.videoHover[data-v-5de11ce2]{position:absolute;top:40px;left:0;flex:1;background-color:rgba(0,0,0,.1);justify-content:center;align-items:center\r\n\t\t\r\n\t\t/* border-style: dashed;\r\n\t\tborder-color: #DD524D;\r\n\t\tborder-width: 1px; */}.playState[data-v-5de11ce2]{width:%?160?%;height:%?160?%;opacity:.2}.userInfo[data-v-5de11ce2]{position:absolute;z-index:99;right:10px;width:%?100?%;text-align:center;flex-direction:column}\n.userInfo[data-v-5de11ce2]{bottom:40%}\n.userAvatar[data-v-5de11ce2]{border-radius:500%;margin-bottom:15px;border-style:solid;border-width:2px;border-color:#fff}.userAvatar[data-v-5de11ce2]{width:%?100?%;height:%?100?%}.likeIco[data-v-5de11ce2],.shareIco[data-v-5de11ce2],.commentIco[data-v-5de11ce2]{width:%?60?%;height:%?60?%;margin-top:15px}.likeNum[data-v-5de11ce2],.commentNum[data-v-5de11ce2],.shareTex[data-v-5de11ce2]{color:#fff;font-size:%?30?%;text-align:center;margin:5px}.likeNumActive[data-v-5de11ce2]{color:red}.contentcd[data-v-5de11ce2]{width:%?720?%;z-index:99;position:absolute;bottom:60px;left:20px;\r\n\t  /* justify-content: center; */padding:%?15?%;flex-direction:column;justify-content:flex-start;color:#fff}.userName[data-v-5de11ce2]{font-size:%?30?%;color:#fff;margin-top:%?80?%;margin-left:%?-12?%}.words[data-v-5de11ce2]{margin-top:%?16?%;font-size:%?30?%;color:#fff;margin-bottom:%?20?%}.wordss[data-v-5de11ce2]{margin-top:%?10?%;font-size:%?26?%;color:#fff}.root[data-v-5de11ce2]{background-color:#000}.right_bar[data-v-5de11ce2]{position:fixed;top:65px;right:10px;color:#fff}.right_list[data-v-5de11ce2]{position:fixed;top:0;right:0;color:#fff;width:0;height:700px;z-index:10}.right_list_main[data-v-5de11ce2]{background:#222}.close_btn[data-v-5de11ce2]{background:#333;width:10px;height:40px;position:absolute!important;top:50vh;margin-top:-20px;left:2px;z-index:99;border-top-left-radius:4px;border-bottom-left-radius:4px}.close_img[data-v-5de11ce2]{margin-top:13px;margin-right:2px}.speed_one[data-v-5de11ce2]{margin-right:5px;border:1px solid #eee;padding:2px 4px;font-size:12px;color:#fff}.active[data-v-5de11ce2]{background:#ff1493!important}",""]),i.exports=t},4956:function(i,t,e){var n=e("31ec");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var o=e("4f06").default;o("bacbc142",n,!0,{sourceMap:!1,shadowMode:!1})},7736:function(i,t,e){"use strict";var n=e("4956"),o=e.n(n);o.a},"89b2":function(i,t,e){"use strict";e.r(t);var n=e("a4ab"),o=e("c607d");for(var s in o)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return o[i]}))}(s);e("7736");var a=e("f0c5"),r=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"5de11ce2",null,!1,n["a"],void 0);t["default"]=r.exports},a4ab:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uImage:e("a411").default,uniPopup:e("9f83").default,uniPopupDialog:e("7ad0").default},o=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-swiper",{staticClass:"swiper",style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px; ",attrs:{circular:!0,current:i.current,vertical:!0,duration:"300"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.swiperChange.apply(void 0,arguments)}}},i._l(i.displaySwiperList,(function(t,o){return n("v-uni-swiper-item",{key:o,staticStyle:{position:"relative"}},[n("v-uni-view",{staticStyle:{"z-index":"10"}},[n("v-uni-video",{style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px;",attrs:{id:t._id,controls:i.controls,autoplay:!1,loop:!0,isplay:!1,"show-center-play-btn":!0,"enable-progress-gesture":!0,"enable-play-gesture":!0,format:"m3u8","play-strategy":2,src:t.video_url,poster:t.img},on:{ended:function(t){arguments[0]=t=i.$handleEvent(t),i.ended.apply(void 0,arguments)},controlstoggle:function(t){arguments[0]=t=i.$handleEvent(t),i.controlstoggle.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapVideoHover()},play:function(t){arguments[0]=t=i.$handleEvent(t),i.play.apply(void 0,arguments)},pause:function(t){arguments[0]=t=i.$handleEvent(t),i.pause.apply(void 0,arguments)},fullscreenchange:function(t){arguments[0]=t=i.$handleEvent(t),i.fullscreenchange.apply(void 0,arguments)},timeupdate:function(t){arguments[0]=t=i.$handleEvent(t),i.videoTimeUpdateEvent.apply(void 0,arguments)}}})],1),i.isqp?n("v-uni-view",{staticClass:"userInfo"},[n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.video_set.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"35px",height:"35px",position:"absolute",right:"5px"},attrs:{src:e("13fc")}}),n("v-uni-text",{staticClass:"text-shadow",staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v("设置")])],1),n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=i.$handleEvent(e),i.cLike(t.like,t.id,t.mid)}}},[1*t.like==1?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("dca0")}}):i._e(),1*t.like==2?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("9f77")}}):i._e(),n("v-uni-text",{staticClass:"text-shadow",class:{likeNumActive:t.like},staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v(i._s(t.like_n))])],1),n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.share.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"5px"},attrs:{src:e("f7f5")}}),n("v-uni-text",{staticClass:"text-shadow",staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v("分享")])],1)],1):i._e(),i.isqp?n("v-uni-view",{staticClass:"contentcd",on:{click:function(e){e.stopPropagation(),arguments[0]=e=i.$handleEvent(e),i.copy(t.title)}}},[n("v-uni-text",{staticClass:"userName",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.name))]),n("v-uni-text",{staticClass:"wordss",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.msg))])],1):i._e()],1)})),1),n("v-uni-cover-view",{staticClass:"right_bar"},[n("v-uni-cover-view",{staticClass:"flex-row item-center",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list22()}}},[n("v-uni-cover-image",{staticClass:"ml5",staticStyle:{width:"61px",height:"20px"},attrs:{src:"/static/list.png"}})],1)],1),1==i.show_right_list?n("v-uni-cover-view",{staticClass:"right_list",style:{width:i.right_list_width+"px",height:i.right_list_height+"px"}},[n("v-uni-cover-view",{staticClass:"close_btn ",staticStyle:{"z-index":"99",position:"relative"},style:{top:i.right_close_top+"px"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list=0}}},[n("v-uni-cover-image",{staticClass:"pic-12 close_img",staticStyle:{width:"12px",height:"12px","z-index":"99"},attrs:{src:"/static/sanjiao.png"}})],1),n("v-uni-cover-view",{staticClass:"right_list_main",staticStyle:{width:"100px","margin-left":"10px"},style:{height:i.right_list_height+"px"}},[n("v-uni-scroll-view",{staticStyle:{position:"absolute",height:"100%"},style:{height:i.right_list_height+"px"},attrs:{"scroll-y":"true"}},[n("v-uni-cover-view",{staticClass:"mb10"}),i._l(i.originList,(function(t,e){return n("v-uni-cover-view",{key:e,staticClass:" pb10 mb10 ml10  pad5",class:i.now_video_id==t.id?"bg_pink":"",staticStyle:{position:"relative",width:"80px",overflow:"hidden"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tap_right(e)}}},[n("u-image",{staticClass:"radius-5",staticStyle:{height:"43px"},attrs:{src:i.himg2(t.img),mode:"aspectFill","border-radius":"5px"}}),n("v-uni-text",{staticClass:"times_box",staticStyle:{top:"30px",left:"10px !important","font-size":"9px",width:"30px",height:"14px","line-height":"14px"}},[i._v(i._s(i.video_time(t.video_seconds)))]),n("v-uni-text",{staticClass:"fs12  text-center  h40px mt10  over-hide",staticStyle:{color:"#ffffff",position:"relative",overflow:"hidden"}},[i._v(i._s(t.name))])],1)}))],2)],1)],1):i._e(),n("uni-popup",{ref:"set_box"},[n("uni-popup-dialog",{on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.$refs.set_box.close()},confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.$refs.set_box.close()}}},[n("v-uni-view",{staticClass:"flex-row fs14 speed_box"},[n("v-uni-text",{staticStyle:{color:"#fff"}},[i._v("倍速：")]),i._l(i.speedList,(function(t,e){return n("v-uni-text",{key:e,staticClass:"flex-row speed_one",class:i.speedIndex==e?"active":"",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.speedHandle(e)}}},[i._v(i._s(t)+" 倍")])}))],2)],1)],1)],1)},s=[]},c607d:function(i,t,e){"use strict";e.r(t);var n=e("e057"),o=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=o.a},e057:function(i,t,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(e("f07e")),s=n(e("c964"));e("ac1f"),e("466d"),e("5319"),e("14d9"),e("caad6"),e("2532"),e("e25e"),e("a9e3");var a=n(e("c4b8")),r=(uni.createInnerAudioContext(),{data:function(){return{controls:!0,originList:[],displaySwiperList:[],displayIndex:0,originIndex:0,now_video_id:0,windowWidth:0,windowHeight:0,current:0,oid:0,isplay:!0,playCount:2,nodate:!0,issp:"",isqp:!0,page:1,urls:a.default.webUrl,uid:0,is_vip:0,videoDirect:0,show_pause_btn:0,show_right_list:0,right_list_width:0,right_list_height:0,right_close_top:0,freed_time:30,tips_open:0,speedList:[.8,1,1.25,1.5,2],speedIndex:1,isPageVisible:!1}},onShareAppMessage:function(i){},onLoad:function(i){var t=this;console.log("eeeeeee-----",i),i.fxpid&&i.fxpid>0&&uni.setStorage({key:"fxpid",data:i.fxpid}),uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id,this.is_vip=2==uni.getStorageSync("userinfo").group_id?1:0),this.windowWidth=uni.getSystemInfoSync().windowWidth,this.windowHeight=uni.getSystemInfoSync().windowHeight,this.right_list_height=this.windowHeight,this.right_close_top=this.windowHeight/2,this.Recommend(),uni.$on("pause",(function(i){console.log("全局 parseeeeeeeeeeeeeeeeeeee22",i);var e=uni.createVideoContext(t.originList[t.originIndex]._id,t);e.pause()}))},onHide:function(){var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.pause(),this.videolog(),this.isPageVisible=!1},onUnload:function(){this.videolog(),this.isPageVisible=!1},onShow:function(){this.isPageVisible=!0,uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id,this.is_vip=2==uni.getStorageSync("userinfo").group_id?1:0,console.log(uni.getStorageSync("userinfo"),"vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"));try{var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.play()}catch(t){console.log(t.message)}},methods:{copy:function(i){var t=this;uni.setClipboardData({data:i,success:function(){t.tips("复制成功")},fail:function(i){console.log(i),t.tips(i)}})},himg2:function(i){i+="";return"null"!=i.match(/\/cover/)?i.replace(".jpg","_h_small.jpg"):i},videolog:function(){return(0,s.default)((0,o.default)().mark((function i(){var t,e;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t=uni.getStorageSync("videolog"),t){i.next=3;break}return i.abrupt("return");case 3:return e={ids:t,from_domain:uni.getStorageSync("from_domain")},i.next=6,uni.$api.video.videolog(e);case 6:i.sent,uni.setStorageSync("videolog",[]);case 8:case"end":return i.stop()}}),i)})))()},fullscreenchange:function(i){i.detail.fullScreen||plus.screen.lockOrientation("portrait-primary")},play:function(){if(this.show_pause_btn=0,!this.isPageVisible){console.log("play 事件暂停播放");var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.pause()}},pause:function(){this.show_pause_btn=1},play_btn:function(){console.log(this.displayIndex,"第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个第几个"),console.log(this.originList);var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);0==this.show_pause_btn?(this.show_pause_btn=1,i.pause()):(this.show_pause_btn=0,i.play())},show_right_list22:function(){var i=this;i.right_list_width=0,this.show_right_list=1;var t=setInterval((function(){i.right_list_width>=100&&(i.right_list_width=100,clearInterval(t)),i.right_list_width+=10}),1)},share:function(){var i=this;return(0,s.default)((0,o.default)().mark((function t(){var e,n,s;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.$api.index.shareDomain();case 2:e=t.sent,n=e.list[0].url,s=n+"/?pid="+i.uid+"&vid="+i.now_video_id,uni.setClipboardData({data:s,complete:function(){uni.showToast({title:"分享连接已复制到剪贴板"})}});case 6:case"end":return t.stop()}}),t)})))()},video_set:function(){this.$refs.set_box.open()},tapVideoHover:function(){this.right_list_width=0,this.show_right_list=0,this.isqp=!this.isqp},Recommend:function(){var i=this,t=0;uni.getStorageSync("userinfo")&&(t=uni.getStorageSync("userinfo").id),uni.request({url:this.urls+"/api/video/videoRecommend?page="+this.page+"&uid="+t,success:function(t){if(1==t.data.isempty){for(var e=t.data.data,n=0;n<e.length;n++)i.originList.push(e[n]);1==i.page&&i.initSwiperData(),i.page=i.page+1}else i.nodate=!1}})},ended:function(){},initSwiperData:function(){var i=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.originIndex;console.log("--------当前数据 Index:",t);var e=this.originList.length,n=[];n[this.displayIndex]=this.originList[t],n[this.displayIndex-1==-1?2:this.displayIndex-1]=this.originList[t-1==-1?e-1:t-1],n[this.displayIndex+1==3?0:this.displayIndex+1]=this.originList[t+1==e?0:t+1],this.displaySwiperList=n,this.oid>=this.originList.length&&(this.oid=0),this.oid<0&&(this.oid=this.originList.length-1),console.log("++++++++++++上一条播放数据 Index:",this.oid),this.now_video_id=this.originList[t].id,console.log(this.now_video_id,"nowwwwwwwwwwwwwwwwwwwwwwwwww");var o=uni.getStorageSync("videolog");o||(o=[]),o.includes(this.now_video_id)||(o.push(this.now_video_id),uni.setStorageSync("videolog",o)),console.log("bofangqian1111:"),uni.createVideoContext(this.originList[this.oid]._id,this).pause(),console.log("bofangqian2222:"),setTimeout((function(){console.log("qqqqqq:",i.originList[t]._id),uni.createVideoContext(i.originList[t]._id,i).play()}),500);var s=this.originList.length-this.playCount;t==s&&this.nodate&&this.Recommend()},swiperChange:function(i){var t=i.detail.current,e=this.originList.length;this.displayIndex-t==2||this.displayIndex-t==-1?(this.originIndex=this.originIndex+1==e?0:this.originIndex+1,this.displayIndex=this.displayIndex+1==3?0:this.displayIndex+1,this.oid=this.originIndex-1,this.initSwiperData(this.originIndex)):this.displayIndex-t!=-2&&this.displayIndex-t!=1||(this.originIndex=this.originIndex-1==-1?e-1:this.originIndex-1,this.displayIndex=this.displayIndex-1==-1?2:this.displayIndex-1,this.oid=this.originIndex+1,this.initSwiperData(this.originIndex)),this.isqp=!0},tap_right:function(i){this.originIndex=i,this.initSwiperData(this.originIndex)},detail:function(i,t){var e=1;uni.getStorageSync("userinfo")&&(e=uni.getStorageSync("userinfo").id),uni.navigateTo({url:"/pages/client/tuan/detail?vid="+i+"&mid="+t+"&fxpid="+e})},toComment:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.displaySwiperList[this.displayIndex];this.displaySwiperList[this.displayIndex].iszj=1==i?2:1;var n={vid:t,mid:e};n.token=uni.getStorageSync("userinfo").token,n.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/videorecord",data:n,success:function(i){},fail:function(i,t){}})},controlstoggle:function(i){console.log(i.detail.show),this.issp=i.detail.show},cLike:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;var n=this.displaySwiperList[this.displayIndex];1==i?(this.displaySwiperList[this.displayIndex].like=2,n.like_n+=1):(this.displaySwiperList[this.displayIndex].like=1,n.like_n-=1),console.log(t);var o={vid:t,mid:e};o.token=uni.getStorageSync("userinfo").token,o.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/tapLove",data:o,success:function(i){},fail:function(i,t){}})},denglu:function(){uni.showModal({title:"温馨提示",content:"请先登录",showCancel:!0,confirmText:"登录",success:function(i){i.confirm?uni.navigateTo({url:"/pages/login/login"}):i.cancel}})},video_time:function(i){var t=parseInt(i/60),e=i-60*t;return e<10&&(e="0"+e),t<10&&(t="0"+t),t+":"+e},videoTimeUpdateEvent:function(i){console.log(i),console.log("Video current time:",i.detail.currentTime),this.isPageVisible||uni.createVideoContext(i.target.id,this).pause(),i.target.id!=this.originList[this.originIndex]._id&&uni.createVideoContext(i.target.id,this).pause();var t=Number(i.detail.currentTime);if(console.log("播放进度条改变",t),t>=this.freed_time&&0==this.is_vip){console.log("试看结束sssssssssssssss",t),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause();var e=uni.createVideoContext(this.originList[this.originIndex]._id,this);e.exitFullScreen(),e.pause(),e.seek(0),uni.showModal({title:"溫馨提示",content:"试看已经结束，是否前往充值vip？",showCancel:!0,confirmText:"確定",success:function(i){i.confirm?uni.navigateTo({url:"/pages/client/vipcard/index"}):i.cancel}})}},speedHandle:function(i){this.speedIndex=i;var t=uni.createVideoContext(this.originList[this.originIndex]._id,this);t.playbackRate(Number(this.speedList[i])),t.play()}},created:function(){}});t.default=r}}]);