import{d as e,m as t,a as n,j as i,k as o,o as a,c as s,w as l,e as u,p as r,f as d,b as c,n as p,i as h,R as m,af as f,ag as g,ah as y,L as S,I as b,g as x,l as C,t as _,F as v}from"./index-eceb727c.js";import{_ as I,a as T}from"./u-button.24f96c27.js";import{_ as k}from"./plugin-vueexport-helper.1b428a4d.js";import{_ as w}from"./u-toast.c7c7522a.js";const $=k({name:"u-input",mixins:[t,n,{props:{modelValue:{type:[String,Number],default:e.input.value},type:{type:String,default:e.input.type},fixed:{type:Boolean,default:e.input.fixed},disabled:{type:Boolean,default:e.input.disabled},disabledColor:{type:String,default:e.input.disabledColor},clearable:{type:Boolean,default:e.input.clearable},password:{type:Boolean,default:e.input.password},maxlength:{type:[String,Number],default:e.input.maxlength},placeholder:{type:String,default:e.input.placeholder},placeholderClass:{type:String,default:e.input.placeholderClass},placeholderStyle:{type:[String,Object],default:e.input.placeholderStyle},showWordLimit:{type:Boolean,default:e.input.showWordLimit},confirmType:{type:String,default:e.input.confirmType},confirmHold:{type:Boolean,default:e.input.confirmHold},holdKeyboard:{type:Boolean,default:e.input.holdKeyboard},focus:{type:Boolean,default:e.input.focus},autoBlur:{type:Boolean,default:e.input.autoBlur},disableDefaultPadding:{type:Boolean,default:e.input.disableDefaultPadding},cursor:{type:[String,Number],default:e.input.cursor},cursorSpacing:{type:[String,Number],default:e.input.cursorSpacing},selectionStart:{type:[String,Number],default:e.input.selectionStart},selectionEnd:{type:[String,Number],default:e.input.selectionEnd},adjustPosition:{type:Boolean,default:e.input.adjustPosition},inputAlign:{type:String,default:e.input.inputAlign},fontSize:{type:[String,Number],default:e.input.fontSize},color:{type:String,default:e.input.color},prefixIcon:{type:String,default:e.input.prefixIcon},prefixIconStyle:{type:[String,Object],default:e.input.prefixIconStyle},suffixIcon:{type:String,default:e.input.suffixIcon},suffixIconStyle:{type:[String,Object],default:e.input.suffixIconStyle},border:{type:String,default:e.input.border},readonly:{type:Boolean,default:e.input.readonly},shape:{type:String,default:e.input.shape},formatter:{type:[Function,null],default:e.input.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}}],data:()=>({innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:e=>e}),watch:{modelValue:{immediate:!0,handler(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{isShowClear(){const{clearable:e,readonly:t,focused:n,innerValue:i}=this;return!!e&&!t&&!!n&&""!==i},inputClass(){let e=[],{border:t,disabled:n,shape:i}=this;return"surround"===t&&(e=e.concat(["u-border","u-input--radius"])),e.push(`u-input--${i}`),"bottom"===t&&(e=e.concat(["u-border-bottom","u-input--no-radius"])),e.join(" ")},wrapperStyle(){const e={};return this.disabled&&(e.backgroundColor=this.disabledColor),"none"===this.border?e.padding="0":(e.paddingTop="6px",e.paddingBottom="6px",e.paddingLeft="9px",e.paddingRight="9px"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},inputStyle(){return{color:this.color,fontSize:uni.$u.addUnit(this.fontSize),textAlign:this.inputAlign}}},emits:["update:modelValue","focus","blur","change","confirm","clear","keyboardheightchange"],methods:{setFormatter(e){this.innerFormatter=e},onInput(e){let{value:t=""}=e.detail||{};const n=(this.formatter||this.innerFormatter)(t);this.innerValue=t,this.$nextTick((()=>{this.innerValue=n,this.valueChange()}))},onBlur(e){this.$emit("blur",e.detail.value),uni.$u.sleep(50).then((()=>{this.focused=!1})),uni.$u.formValidate(this,"blur")},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",this.innerValue)},onkeyboardheightchange(){this.$emit("keyboardheightchange")},valueChange(){const e=this.innerValue;this.$nextTick((()=>{this.$emit("update:modelValue",e),this.changeFromInner=!0,this.$emit("change",e),uni.$u.formValidate(this,"change")}))},onClear(){this.innerValue="",this.$nextTick((()=>{this.valueChange(),this.$emit("clear")}))},clickHandler(){}}},[["render",function(e,t,n,f,g,y){const S=i(o("u-icon"),I),b=h,x=m;return a(),s(b,{class:p(["u-input",y.inputClass]),style:c([y.wrapperStyle])},{default:l((()=>[u(b,{class:"u-input__content"},{default:l((()=>[e.prefixIcon||e.$slots.prefix?(a(),s(b,{key:0,class:"u-input__content__prefix-icon"},{default:l((()=>[r(e.$slots,"prefix",{},(()=>[u(S,{name:e.prefixIcon,size:"18",customStyle:e.prefixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):d("",!0),u(b,{class:"u-input__content__field-wrapper",onClick:y.clickHandler},{default:l((()=>[u(x,{class:"u-input__content__field-wrapper__field",style:c([y.inputStyle]),type:e.type,focus:e.focus,cursor:e.cursor,value:g.innerValue,"auto-blur":e.autoBlur,disabled:e.disabled||e.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":e.placeholderClass,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,password:e.password||"password"===e.type||void 0,ignoreCompositionEvent:e.ignoreCompositionEvent,onInput:y.onInput,onBlur:y.onBlur,onFocus:y.onFocus,onConfirm:y.onConfirm,onKeyboardheightchange:y.onkeyboardheightchange},null,8,["style","type","focus","cursor","value","auto-blur","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","password","ignoreCompositionEvent","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])])),_:1},8,["onClick"]),y.isShowClear?(a(),s(b,{key:1,class:"u-input__content__clear",onClick:y.onClear},{default:l((()=>[u(S,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):d("",!0),e.suffixIcon||e.$slots.suffix?(a(),s(b,{key:2,class:"u-input__content__subfix-icon"},{default:l((()=>[r(e.$slots,"suffix",{},(()=>[u(S,{name:e.suffixIcon,size:"18",customStyle:e.suffixIconStyle},null,8,["name","customStyle"])]),!0)])),_:3})):d("",!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-01bd05ec"]]);const B=k({name:"u-code",mixins:[t,n,{props:{seconds:{type:[String,Number],default:e.code.seconds},startText:{type:String,default:e.code.startText},changeText:{type:String,default:e.code.changeText},endText:{type:String,default:e.code.endText},keepRunning:{type:Boolean,default:e.code.keepRunning},uniqueKey:{type:String,default:e.code.uniqueKey}}}],data(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler(e){this.secNum=e}}},methods:{checkKeepRunning(){let e=Number(f(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);let t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,g(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start(){this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((()=>{--this.secNum?this.changeEvent(this.changeText.replace(/x|X/,this.secNum)):(clearInterval(this.timer),this.timer=null,this.changeEvent(this.endText),this.secNum=this.seconds,this.$emit("end"),this.canGetCode=!0)}),1e3)},reset(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent(e){this.$emit("change",e)},setTimeToStorage(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){let e=Math.floor(+new Date/1e3);y({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}},[["render",function(e,t,n,i,o,l){const u=h;return a(),s(u,{class:"u-code"})}],["__scopeId","data-v-301ebeb6"]]),N=k({__name:"u-pupu-sms-code",props:{mobile:String|Number,password:String},setup(e,{expose:t}){const n=e,s=S.importObject("libraryAccount"),r=b(""),d=b("获取验证码"),c=b(null),p=b(null),m=e=>{d.value=e},f=async()=>{c.value.canGetCode&&(/^1\d{10}$/.test(n.mobile)?(await s.sendSMS(n.mobile),c.value.start()):p.value.show({message:"请输入有效的手机号"}))};return t({getSMSCode:()=>r.value,handleSaveForeToken:async()=>n.mobile&&formData.sms?await pupuClient.register(n.mobile,n.password,formData.sms):(p.value.show({message:"请输入有效信息"}),!1),handleSendSMS:f}),(e,t)=>{const n=i(o("u-input"),$),s=i(o("u-code"),B),g=i(o("u-button"),T),y=h,S=i(o("u-toast"),w);return a(),x(v,null,[u(y,{class:"sms"},{default:l((()=>[u(n,{class:"input-sms",maxlength:"4",type:"number",fontSize:"18",placeholderStyle:"font-size:15px; color:#C8C9CC",prefixIconStyle:"font-size:25px; color #909399; padding-right:5px;",prefixIcon:"email",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),placeholder:"请输入短信验证码"},null,8,["modelValue"]),u(s,{ref_key:"refSmsCode",ref:c,onChange:m,seconds:"120",changeText:"已发送Xs"},null,512),u(g,{class:"button-sms",type:"primary",plain:!0,onClick:f},{default:l((()=>[C(_(d.value),1)])),_:1})])),_:1}),u(S,{ref_key:"refToast",ref:p,duration:"200",position:"bottom"},null,512)],64)}}},[["__scopeId","data-v-fee66ee4"]]);export{N as _};
