import{d as t,m as e,a,o as s,c as i,w as n,n as o,b as l,f as r,e as u,g as c,F as d,r as h,p,i as f,j as g,k as m,G as y,l as _,t as w,q as k,u as v,H as x,I as S,J as b,K as C,E as T,x as $,y as z,L as W,M as D,N as X,B as A,C as N,D as j}from"./index-8c7aba04.js";import{_ as I}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as R,a as F}from"./u-button.161f5a48.js";import{_ as Y}from"./uni-icons.3895f5ca.js";import{_ as H}from"./u-transition.b40777e7.js";import{_ as B}from"./u-row.70160b02.js";import{p as M,_ as O,a as P}from"./uni-popup-dialog.a5bc4865.js";import{_ as U}from"./uni-easyinput.258260fe.js";import"./u-loading-icon.31869a23.js";const q=I({name:"u-skeleton",mixins:[e,a,{props:{loading:{type:Boolean,default:t.skeleton.loading},animate:{type:Boolean,default:t.skeleton.animate},rows:{type:[String,Number],default:t.skeleton.rows},rowsWidth:{type:[String,Number,Array],default:t.skeleton.rowsWidth},rowsHeight:{type:[String,Number,Array],default:t.skeleton.rowsHeight},title:{type:Boolean,default:t.skeleton.title},titleWidth:{type:[String,Number],default:t.skeleton.titleWidth},titleHeight:{type:[String,Number],default:t.skeleton.titleHeight},avatar:{type:Boolean,default:t.skeleton.avatar},avatarSize:{type:[String,Number],default:t.skeleton.avatarSize},avatarShape:{type:String,default:t.skeleton.avatarShape}}}],data:()=>({width:0}),watch:{loading(){this.getComponentWidth()}},computed:{rowsArray(){/%$/.test(this.rowsHeight)&&uni.$u.error("rowsHeight参数不支持百分比单位");const t=[];for(let e=0;e<this.rows;e++){let a={},s=uni.$u.test.array(this.rowsWidth)?this.rowsWidth[e]||(e===this.rows-1?"70%":"100%"):e===this.rows-1?"70%":this.rowsWidth,i=uni.$u.test.array(this.rowsHeight)?this.rowsHeight[e]||"18px":this.rowsHeight;a.marginTop=this.title||0!==e?this.title&&0===e?"20px":"12px":0,/%$/.test(s)?a.width=uni.$u.addUnit(this.width*parseInt(s)/100):a.width=uni.$u.addUnit(s),a.height=uni.$u.addUnit(i),t.push(a)}return t},uTitleWidth(){let t=0;return t=/%$/.test(this.titleWidth)?uni.$u.addUnit(this.width*parseInt(this.titleWidth)/100):uni.$u.addUnit(this.titleWidth),uni.$u.addUnit(t)}},mounted(){this.init()},methods:{init(){this.getComponentWidth()},async setNvueAnimation(){},async getComponentWidth(){await uni.$u.sleep(20),this.$uGetRect(".u-skeleton__wrapper__content").then((t=>{this.width=t.width}))}}},[["render",function(t,e,a,g,m,y){const _=f;return s(),i(_,{class:"u-skeleton"},{default:n((()=>[t.loading?(s(),i(_,{key:0,class:"u-skeleton__wrapper",ref:"u-skeleton__wrapper",style:{display:"flex","flex-direction":"row"}},{default:n((()=>[t.avatar?(s(),i(_,{key:0,class:o(["u-skeleton__wrapper__avatar",[`u-skeleton__wrapper__avatar--${t.avatarShape}`,t.animate&&"animate"]]),style:l({height:t.$u.addUnit(t.avatarSize),width:t.$u.addUnit(t.avatarSize)})},null,8,["class","style"])):r("",!0),u(_,{class:"u-skeleton__wrapper__content",ref:"u-skeleton__wrapper__content",style:{flex:"1"}},{default:n((()=>[t.title?(s(),i(_,{key:0,class:o(["u-skeleton__wrapper__content__title",[t.animate&&"animate"]]),style:l({width:y.uTitleWidth,height:t.$u.addUnit(t.titleHeight)})},null,8,["style","class"])):r("",!0),(s(!0),c(d,null,h(y.rowsArray,((e,a)=>(s(),i(_,{class:o(["u-skeleton__wrapper__content__rows",[t.animate&&"animate"]]),key:a,style:l({width:e.width,height:e.height,marginTop:e.marginTop})},null,8,["class","style"])))),128))])),_:1},512)])),_:1},512)):p(t.$slots,"default",{key:1},void 0,!0)])),_:3})}],["__scopeId","data-v-ca8a4da7"]]);const E=I({name:"u-col",mixins:[e,a,{props:{span:{type:[String,Number],default:t.col.span},offset:{type:[String,Number],default:t.col.offset},justify:{type:String,default:t.col.justify},align:{type:String,default:t.col.align},textAlign:{type:String,default:t.col.textAlign}}}],data:()=>({width:0,parentData:{gutter:0},gridNum:12}),options:{virtualHost:!0},computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle(){const t={paddingLeft:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),paddingRight:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:`0 0 ${100/this.gridNum*this.span}%`,marginLeft:100/12*this.offset+"%"};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted(){this.init()},methods:{async init(){this.updateParentData(),this.width=await this.parent.getComponentWidth()},updateParentData(){this.getParentData("u-row")},clickHandler(t){this.$emit("click")}}},[["render",function(t,e,a,r,u,c){const d=f;return s(),i(d,{class:o(["u-col",["u-col-"+t.span]]),ref:"u-col",style:l([c.colStyle]),onClick:c.clickHandler},{default:n((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-5afe83b6"]]);const J=I({name:"u-tag",mixins:[e,a,{props:{type:{type:String,default:t.tag.type},disabled:{type:[Boolean,String],default:t.tag.disabled},size:{type:String,default:t.tag.size},shape:{type:String,default:t.tag.shape},text:{type:[String,Number],default:t.tag.text},bgColor:{type:String,default:t.tag.bgColor},color:{type:String,default:t.tag.color},borderColor:{type:String,default:t.tag.borderColor},closeColor:{type:String,default:t.tag.closeColor},name:{type:[String,Number],default:t.tag.name},plainFill:{type:Boolean,default:t.tag.plainFill},plain:{type:Boolean,default:t.tag.plain},closable:{type:Boolean,default:t.tag.closable},show:{type:Boolean,default:t.tag.show},icon:{type:String,default:t.tag.icon}}}],data:()=>({}),computed:{style(){const t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor(){const t={};return this.color&&(t.color=this.color),t},imgStyle(){const t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize(){return"large"===this.size?15:"medium"===this.size?13:12},iconSize(){return"large"===this.size?21:"medium"===this.size?19:16},elIconColor(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler(){this.$emit("close",this.name)},clickHandler(){this.$emit("click",this.name)}}},[["render",function(t,e,a,c,d,h){const x=k,S=g(m("u-icon"),R),b=f,C=v,T=g(m("u-transition"),H);return s(),i(T,{mode:"fade",show:t.show,style:{display:"inline-flex"}},{default:n((()=>[u(b,{class:"u-tag-wrapper"},{default:n((()=>[u(b,{class:o(["u-tag",[`u-tag--${t.shape}`,!t.plain&&`u-tag--${t.type}`,t.plain&&`u-tag--${t.type}--plain`,`u-tag--${t.size}`,t.plain&&t.plainFill&&`u-tag--${t.type}--plain--fill`]]),onClick:y(h.clickHandler,["stop"]),style:l([{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},h.style])},{default:n((()=>[p(t.$slots,"icon",{},(()=>[t.icon?(s(),i(b,{key:0,class:"u-tag__icon"},{default:n((()=>[t.$u.test.image(t.icon)?(s(),i(x,{key:0,src:t.icon,style:l([h.imgStyle])},null,8,["src","style"])):(s(),i(S,{key:1,color:h.elIconColor,name:t.icon,size:h.iconSize},null,8,["color","name","size"]))])),_:1})):r("",!0)]),!0),u(C,{class:o(["u-tag__text",[`u-tag__text--${t.type}`,t.plain&&`u-tag__text--${t.type}--plain`,`u-tag__text--${t.size}`]]),style:l([h.textColor])},{default:n((()=>[_(w(t.text),1)])),_:1},8,["style","class"])])),_:3},8,["class","onClick","style"]),t.closable?(s(),i(b,{key:0,class:o(["u-tag__close",[`u-tag__close--${t.size}`]]),onClick:y(h.closeHandler,["stop"]),style:l({backgroundColor:t.closeColor})},{default:n((()=>[u(S,{name:"close",size:h.closeSize,color:"#ffffff"},null,8,["size"])])),_:1},8,["class","onClick","style"])):r("",!0)])),_:3})])),_:3},8,["show"])}],["__scopeId","data-v-01d9c262"]]);let L={},V=null;V=function(){var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0;for(let s=0;s<e.length-1;s++)if(t.indexOf(e[s])>0){a=!1;break}return a}(),L={data:()=>({is_show:"none"}),watch:{show(t){this.is_show=this.show}},created(){this.swipeaction=this.getSwipeAction(),this.swipeaction&&Array.isArray(this.swipeaction.children)&&this.swipeaction.children.push(this)},mounted(){this.is_show=this.show},methods:{closeSwipe(t){this.autoClose&&this.swipeaction&&this.swipeaction.closeOther(this)},change(t){this.$emit("change",t.open),this.is_show!==t.open&&(this.is_show=t.open)},appTouchStart(t){if(V)return;const{clientX:e}=t.changedTouches[0];this.clientX=e,this.timestamp=(new Date).getTime()},appTouchEnd(t,e,a,s){if(V)return;const{clientX:i}=t.changedTouches[0];let n=Math.abs(this.clientX-i),o=(new Date).getTime()-this.timestamp;n<40&&o<300&&this.$emit("click",{content:a,index:e,position:s})},onClickForPC(t,e,a){V&&this.$emit("click",{content:e,index:t,position:a})}}};var G=!1;function K(t,e){var a=t.instance,s=a.getDataset().disabled,i=a.getState();et(a,e),(s=("string"==typeof s?JSON.parse(s):s)||!1)||(a.requestAnimationFrame((function(){a.removeClass("ani"),e.callMethod("closeSwipe")})),i.x=i.left||0,function(t){var e=t.instance,a=e.getState();st(e);var s=t.touches[0];G&&it()&&(s=t);a.startX=s.clientX,a.startY=s.clientY}(t))}function Q(t,e){var a=t.instance,s=a.getDataset().disabled,i=a.getState();(s=("string"==typeof s?JSON.parse(s):s)||!1)||(!function(t){var e=t.instance.getState(),a=t.touches[0];G&&it()&&(a=t);e.deltaX=a.clientX-e.startX,e.deltaY=a.clientY-e.startY,e.offsetY=Math.abs(e.deltaY),e.offsetX=Math.abs(e.deltaX),e.direction=e.direction||function(t,e){if(t>e&&t>10)return"horizontal";if(e>t&&e>10)return"vertical";return""}(e.offsetX,e.offsetY)}(t),"horizontal"===i.direction&&(t.preventDefault&&t.preventDefault(),tt(i.x+i.deltaX,a)))}function Z(t,e){var a=t.instance,s=a.getDataset().disabled,i=a.getState();(s=("string"==typeof s?JSON.parse(s):s)||!1)||function(t,e,a){var s=e.getState(),i=s.threshold;s.position;var n=s.isopen||"none",o=s.leftWidth,l=s.rightWidth;if(0===s.deltaX)return void at("none",e,a);at("none"===n&&l>0&&-t>i||"none"!==n&&l>0&&l+t<i?"right":"none"===n&&o>0&&t>i||"none"!==n&&o>0&&o-t<i?"left":"none",e,a)}(i.left,a,e)}function tt(t,e,a){t=t||0;var s,i,n,o=e.getState(),l=o.leftWidth,r=o.rightWidth;o.left=(s=t,i=-r,n=l,Math.min(Math.max(s,i),n)),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+o.left+"px)","-webkit-transform":"translateX("+o.left+"px)"})}))}function et(t,e){var a,s,i=t.getState(),n=e.selectComponent(".button-group--left"),o=e.selectComponent(".button-group--right");a=n.getBoundingClientRect(),s=o.getBoundingClientRect(),i.leftWidth=a.width||0,i.rightWidth=s.width||0,i.threshold=t.getDataset().threshold}function at(t,e,a){var s=e.getState(),i=s.leftWidth,n=s.rightWidth,o="";switch(s.isopen=s.isopen?s.isopen:"none",t){case"left":o=i;break;case"right":o=-n;break;default:o=0}s.isopen!==t&&(s.throttle=!0,a.callMethod("change",{open:t})),s.isopen=t,e.requestAnimationFrame((function(){e.addClass("ani"),tt(o,e)}))}function st(t){var e=t.getState();e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0}function it(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,s=0;s<e.length-1;s++)if(t.indexOf(e[s])>0){a=!1;break}return a}"object"==typeof window&&(G=!0);var nt=!1;const ot={showWatch:function(t,e,a,s){var i=s.getState();et(s,a),t&&"none"!==t?at(t,s,a):(i.left&&at("none",s,a),st(s))},touchstart:K,touchmove:Q,touchend:Z,mousedown:function(t,e){G&&it()&&(K(t,e),nt=!0)},mousemove:function(t,e){G&&it()&&nt&&Q(t)},mouseup:function(t,e){G&&it()&&(Z(t,e),nt=!1)},mouseleave:function(t,e){G&&it()&&(nt=!1)}},lt=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxsswipe"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxsswipe=ot}})},rt={showWatch(t,e,a,s,i){var n=i.state;(a.$el||a.$vm&&a.$vm.$el)&&(this.getDom(s,a,i),t&&"none"!==t?this.openState(t,s,a,i):(n.left&&this.openState("none",s,a,i),this.resetTouchStatus(s,i)))},touchstart(t,e,a){let s=t.instance,i=s.getDataset().disabled,n=a.state;this.getDom(s,e,a),i=this.getDisabledType(i),i||(s.requestAnimationFrame((function(){s.removeClass("ani"),e.callMethod("closeSwipe")})),n.x=n.left||0,this.stopTouchStart(t,e,a))},touchmove(t,e,a){let s=t.instance;if(!s)return;let i=s.getDataset().disabled,n=a.state;if(i=this.getDisabledType(i),i)return;if(this.stopTouchMove(t,a),"horizontal"!==n.direction)return;t.preventDefault&&t.preventDefault();let o=n.x+n.deltaX;this.move(o,s,e,a)},touchend(t,e,a){let s=t.instance,i=s.getDataset().disabled,n=a.state;i=this.getDisabledType(i),i||this.moveDirection(n.left,s,e,a)},move(t,e,a,s){t=t||0;let i=s.state,n=i.leftWidth,o=i.rightWidth;i.left=this.range(t,-o,n),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+i.left+"px)","-webkit-transform":"translateX("+i.left+"px)"})}))},getDom(t,e,a){var s=a.state,i=e.$el||e.$vm&&e.$vm.$el,n=i.querySelector(".button-group--left"),o=i.querySelector(".button-group--right");s.leftWidth=n.offsetWidth||0,s.rightWidth=o.offsetWidth||0,s.threshold=t.getDataset().threshold},getDisabledType:t=>("string"==typeof t?JSON.parse(t):t)||!1,range:(t,e,a)=>Math.min(Math.max(t,e),a),moveDirection(t,e,a,s){var i=s.state,n=i.threshold;i.position;var o=i.isopen||"none",l=i.leftWidth,r=i.rightWidth;0!==i.deltaX?"none"===o&&r>0&&-t>n||"none"!==o&&r>0&&r+t<n?this.openState("right",e,a,s):"none"===o&&l>0&&t>n||"none"!==o&&l>0&&l-t<n?this.openState("left",e,a,s):this.openState("none",e,a,s):this.openState("none",e,a,s)},openState(t,e,a,s){let i=s.state,n=i.leftWidth,o=i.rightWidth,l="";switch(i.isopen=i.isopen?i.isopen:"none",t){case"left":l=n;break;case"right":l=-o;break;default:l=0}i.isopen!==t&&(i.throttle=!0,a.callMethod("change",{open:t})),i.isopen=t,e.requestAnimationFrame((()=>{e.addClass("ani"),this.move(l,e,a,s)}))},getDirection:(t,e)=>t>e&&t>10?"horizontal":e>t&&e>10?"vertical":"",resetTouchStatus(t,e){let a=e.state;a.direction="",a.deltaX=0,a.deltaY=0,a.offsetX=0,a.offsetY=0},stopTouchStart(t,e,a){let s=t.instance,i=a.state;this.resetTouchStatus(s,a);var n=t.touches[0];i.startX=n.clientX,i.startY=n.clientY},stopTouchMove(t,e){t.instance;let a=e.state,s=t.touches[0];a.deltaX=s.clientX-a.startX,a.deltaY=s.clientY-a.startY,a.offsetY=Math.abs(a.deltaY),a.offsetX=Math.abs(a.deltaX),a.direction=a.direction||this.getDirection(a.offsetX,a.offsetY)}},ut={mounted(t,e,a){this.state={}},methods:{showWatch(t,e,a,s){rt.showWatch(t,e,a,s,this)},touchstart(t,e){rt.touchstart(t,e,this)},touchmove(t,e){rt.touchmove(t,e,this)},touchend(t,e){rt.touchend(t,e,this)}}},ct=t=>{t.$renderjs||(t.$renderjs=[]),t.$renderjs.push("renderswipe"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.renderswipe=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),t.mixins.push(ut)},dt={mixins:[L,{},{}],emits:["click","change"],props:{show:{type:String,default:"none"},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},threshold:{type:Number,default:20},leftOptions:{type:Array,default:()=>[]},rightOptions:{type:Array,default:()=>[]}},unmounted(){this.__isUnmounted=!0,this.uninstall()},methods:{uninstall(){this.swipeaction&&this.swipeaction.children.forEach(((t,e)=>{t===this&&this.swipeaction.children.splice(e,1)}))},getSwipeAction(t="uniSwipeAction"){let e=this.$parent,a=e.$options.name;for(;a!==t;){if(e=e.$parent,!e)return!1;a=e.$options.name}return e}}};lt(dt),ct(dt);const ht=I(dt,[["render",function(t,e,a,o,r,g){const m=v,k=f;return s(),i(k,{class:"uni-swipe"},{default:n((()=>[u(k,{class:"uni-swipe_box","change:prop":t.wxsswipe.showWatch,prop:t.is_show,"data-threshold":a.threshold,"data-disabled":a.disabled,onTouchstart:t.wxsswipe.touchstart,onTouchmove:t.wxsswipe.touchmove,onTouchend:t.wxsswipe.touchend},{default:n((()=>[u(k,{class:"uni-swipe_button-group button-group--left"},{default:n((()=>[p(t.$slots,"left",{},(()=>[(s(!0),c(d,null,h(a.leftOptions,((e,a)=>(s(),i(k,{key:a,style:l({backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD"}),class:"uni-swipe_button button-hock",onTouchstart:t.appTouchStart,onTouchend:s=>t.appTouchEnd(s,a,e,"left"),onClick:y((s=>t.onClickForPC(a,e,"left")),["stop"])},{default:n((()=>[u(m,{class:"uni-swipe_button-text",style:l({color:e.style&&e.style.color?e.style.color:"#FFFFFF",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"})},{default:n((()=>[_(w(e.text),1)])),_:2},1032,["style"])])),_:2},1032,["style","onTouchstart","onTouchend","onClick"])))),128))]),!0)])),_:3}),u(k,{class:"uni-swipe_text--center"},{default:n((()=>[p(t.$slots,"default",{},void 0,!0)])),_:3}),u(k,{class:"uni-swipe_button-group button-group--right"},{default:n((()=>[p(t.$slots,"right",{},(()=>[(s(!0),c(d,null,h(a.rightOptions,((e,a)=>(s(),i(k,{key:a,style:l({backgroundColor:e.style&&e.style.backgroundColor?e.style.backgroundColor:"#C7C6CD"}),class:"uni-swipe_button button-hock",onTouchstart:t.appTouchStart,onTouchend:s=>t.appTouchEnd(s,a,e,"right"),onClick:y((s=>t.onClickForPC(a,e,"right")),["stop"])},{default:n((()=>[u(m,{class:"uni-swipe_button-text",style:l({color:e.style&&e.style.color?e.style.color:"#FFFFFF",fontSize:e.style&&e.style.fontSize?e.style.fontSize:"16px"})},{default:n((()=>[_(w(e.text),1)])),_:2},1032,["style"])])),_:2},1032,["style","onTouchstart","onTouchend","onClick"])))),128))]),!0)])),_:3})])),_:3},8,["change:prop","prop","data-threshold","data-disabled","onTouchstart","onTouchmove","onTouchend"])])),_:3})}],["__scopeId","data-v-e63140d5"]]);const pt=I({name:"uniSwipeAction",data:()=>({}),created(){this.children=[]},methods:{resize(){},closeAll(){this.children.forEach((t=>{t.is_show="none"}))},closeOther(t){this.openItem&&this.openItem!==t&&(this.openItem.is_show="none"),this.openItem=t}}},[["render",function(t,e,a,o,l,r){const u=f;return s(),i(u,null,{default:n((()=>[p(t.$slots,"default")])),_:3})}]]);const ft=I({name:"uniPopupMessage",mixins:[M],props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3},maskShow:{type:Boolean,default:!1}},data:()=>({}),created(){this.popup.maskShow=this.maskShow,this.popup.messageChild=this},methods:{timerClose(){0!==this.duration&&(clearTimeout(this.timer),this.timer=setTimeout((()=>{this.popup.close()}),this.duration))}}},[["render",function(t,e,a,l,r,c){const d=v,h=f;return s(),i(h,{class:"uni-popup-message"},{default:n((()=>[u(h,{class:o(["uni-popup-message__box fixforpc-width","uni-popup__"+a.type])},{default:n((()=>[p(t.$slots,"default",{},(()=>[u(d,{class:o(["uni-popup-message-text","uni-popup__"+a.type+"-text"])},{default:n((()=>[_(w(a.message),1)])),_:1},8,["class"])]),!0)])),_:3},8,["class"])])),_:3})}],["__scopeId","data-v-a5e6bfb7"]]),gt=I({__name:"task-item",props:{taskName:{type:String,default:"创建任务"},taskIndex:{type:Number,default:-1},taskType:{type:String,default:""},taskTime:{type:String,default:""},timeStart:{type:String,default:"06:00"},timeEnd:{type:String,default:"23:59"},isRun:{type:Boolean,default:!1},hide:{type:Boolean,default:!1}},emits:["change:isRun","change:taskNameTime","refresh"],setup(t,{expose:e,emit:a}){const i=t,o=x((()=>i.isRun?{label:"success",text:"启用中"}:{label:"info",text:"停用中"})),r=x((()=>t=>t?"":"color: #8f939c;")),h=S("创建任务"==i.taskName?"":i.taskName),p=S(i.taskType),y=S("reserve"==i.taskType?0:"prereserve"==i.taskType?1:"cancel"==i.taskType?2:"signout"==i.taskType?3:""),k=S(i.taskTime),X=t=>{k.value=t.detail.value},A=S(["每日预约","明日预约","取消预约","定时签退"]),N=t=>{y.value=t.detail.value,0==y.value?p.value="reserve":1==y.value?p.value="prereserve":2==y.value?p.value="cancel":3==y.value&&(p.value="signout")},j=x((()=>{let t="";switch(i.isRun||(t="info"),y.value){case 0:return{text:"每日",color:t||"error"};case 1:return{text:"明日",color:t||"primary"};case 2:return{text:"取消",color:t||"warning"};default:return{text:"签退",color:t||"warning"}}})),I=S(null),R=()=>{I.value.open()};e({handleSetTaskConfig:R});const F=S(),H=S(),M=S(),q=S(),L=async()=>{if(!(h.value&&p.value&&k.value))return void $({title:"请填充名称，类型，时间",icon:"none",duration:1e3});const t=z();if("prereserve"==p.value&&!t.canpre)return void $({title:"学校未开通明日预约功能",icon:"none",duration:1e3});const e=W.importObject("libraryReserve"),s=await e.setScheduleTask(h.value,p.value,k.value,i.taskIndex);s.code>0?a("refresh"):(H.value=s.msg,F.value.open()),-1==i.taskIndex&&(h.value="",p.value="",k.value="",y.value="")},V=async()=>{if(i.taskIndex<0)return;a("change:isRun",!i.isRun);const t=W.importObject("libraryReserve");await t.runfrzScheduleTask(i.taskIndex,!i.isRun)},G=async()=>{const t=W.importObject("libraryReserve");await t.delScheduleTask(i.taskIndex),a("refresh")};return(e,a)=>{const p=g(m("uni-icons"),Y),x=v,S=f,$=g(m("u-col"),E),z=g(m("u-tag"),J),W=g(m("u-row"),B),K=g(m("uni-swipe-action-item"),ht),Q=g(m("uni-swipe-action"),pt),Z=g(m("uni-popup-message"),ft),tt=g(m("uni-popup"),O),et=g(m("uni-popup-dialog"),P),at=g(m("uni-easyinput"),U),st=D;return s(),c(d,null,[b(u(S,null,{default:n((()=>[u(Q,null,{default:n((()=>[u(K,{class:"task-item"},{right:n((()=>[u(S,{class:"operation-delete",onClick:G},{default:n((()=>[_("删除")])),_:1})])),default:n((()=>[u(W,{justify:"space-between"},{default:n((()=>[u($,{span:4},{default:n((()=>[u(S,{onClick:R,style:{display:"flex","align-items":"center"}},{default:n((()=>[u(p,{type:"calendar",size:"24",color:"#c0c4cc",style:{"text-align":"center","padding-right":"10px"}}),u(x,null,{default:n((()=>[_(w(k.value),1)])),_:1})])),_:1})])),_:1}),u($,{span:4},{default:n((()=>[u(S,{style:{"padding-left":"5px"},onClick:R},{default:n((()=>[_(w(t.taskName),1)])),_:1})])),_:1}),u(z,{text:T(j).text,onClick:V,type:T(j).color,size:"mini",plain:""},null,8,["text","type"]),u(z,{text:T(o).text,onClick:V,type:T(o).label,size:"mini",plain:""},null,8,["text","type"])])),_:1})])),_:1})])),_:1})])),_:1},512),[[C,!i.hide]]),u(tt,{ref_key:"message",ref:M,type:"message"},{default:n((()=>[u(Z,{type:"success",message:q.value,duration:2e3,"safe-area":""},null,8,["message"])])),_:1},512),u(tt,{ref_key:"alertDialog",ref:F,type:"dialog"},{default:n((()=>[u(et,{type:"error",cancelText:"关闭",confirmText:"确定",title:"提示",content:H.value},null,8,["content"])])),_:1},512),u(tt,{ref_key:"taskConfigDialog",ref:I,type:"dialog"},{default:n((()=>[u(et,{type:"info",title:"配置任务",onConfirm:L},{default:n((()=>[u(S,{class:""},{default:n((()=>[u(W,null,{default:n((()=>[u(p,{type:"font",size:"22",color:"#c0c4cc",style:{"text-align":"center",padding:"10px 0 10px 30px"}}),u(at,{inputBorder:!1,clearable:!1,style:{"padding-left":"5px"},modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=t=>h.value=t),placeholder:"输入名称"},null,8,["modelValue"])])),_:1}),u(W,null,{default:n((()=>[u(st,{class:"popitemrow",value:y.value,range:A.value,onChange:N,start:i.timeStart,end:i.timeEnd},{default:n((()=>[u(S,{style:{display:"flex","align-items":"center"}},{default:n((()=>[u(p,{type:"fire",size:"22",color:"#c0c4cc",style:{"text-align":"center",padding:"10px 15px 10px 30px"}}),u(x,{style:l(T(r)(A.value[y.value]))},{default:n((()=>[_(w(A.value[y.value]||"选择类型"),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["value","range","start","end"])])),_:1}),u(W,null,{default:n((()=>[u(st,{class:"popitemrow",mode:"time",value:k.value,start:i.timeStart,end:i.timeEnd,onChange:X},{default:n((()=>[u(S,{style:{display:"flex","align-items":"center"}},{default:n((()=>[u(p,{type:"calendar",size:"22",color:"#c0c4cc",style:{"text-align":"center",padding:"10px 15px 10px 30px"}}),u(x,{style:l(T(r)(k.value))},{default:n((()=>[_(w(k.value||"选择时间"),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["value","start","end"])])),_:1})])),_:1})])),_:1})])),_:1},512)],64)}}},[["__scopeId","data-v-93d89f4c"]]),mt=I({__name:"task",setup(t){const e=X();A((async()=>{await e.refreshTask()})),N((async()=>{await e.refreshTask(),j()}));const a=S(),o=()=>{a.value.handleSetTaskConfig()};return(t,l)=>{const r=g(m("u-skeleton"),q),p=g(m("u-button"),F),y=f;return s(),i(y,{class:"container"},{default:n((()=>[u(r,{class:"skeleton-task",rows:"3",loading:!T(e).tasks,title:!1,rowsHeight:"40"},null,8,["loading"]),(s(!0),c(d,null,h(T(e).tasks,((t,a)=>(s(),i(gt,{key:t.name+t.type+t.time+t.isRun,taskName:t.name,taskType:t.type,taskTime:t.time,taskIndex:a,isRun:t.isRun,"onChange:taskNameTime":(e=String,a=String)=>{t.name=e,t.time=a},"onChange:isRun":e=>t.isRun=e,onRefresh:T(e).refreshTask},null,8,["taskName","taskType","taskTime","taskIndex","isRun","onChange:taskNameTime","onChange:isRun","onRefresh"])))),128)),u(gt,{ref_key:"taskItem",ref:a,hide:"",onRefresh:T(e).refreshTask},null,8,["onRefresh"]),u(p,{plain:"",type:"primary",onClick:o,customStyle:{height:"43px"}},{default:n((()=>[_("创建任务")])),_:1})])),_:1})}}},[["__scopeId","data-v-0e98526d"]]);export{mt as default};
