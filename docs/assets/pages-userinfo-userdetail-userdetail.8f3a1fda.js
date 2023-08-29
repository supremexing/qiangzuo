import{z as t,o as e,c as i,w as n,i as o,e as a,l as s,j as l,k as u}from"./index-eceb727c.js";import{_ as r,b as c,c as g}from"./uni-list.2e932eb9.js";import{a as p,_ as m}from"./uni-popup-dialog.d104d7cb.js";import{a as d}from"./u-button.24f96c27.js";import{s as f,m as h}from"./store.cb2133c7.js";import{_ as k}from"./plugin-vueexport-helper.1b428a4d.js";import"./uni-icons.27ec2038.js";import"./u-loading-icon.09ae71e1.js";const v=k({computed:{userInfo:()=>f.userInfo},data:()=>({univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},showLoginManage:!1,setNicknameIng:!1}),async onShow(){this.univerifyStyle.authButton.title="本机号码一键绑定",this.univerifyStyle.otherLoginButton.title="其他号码绑定"},async onLoad(t){t.showLoginManage&&(this.showLoginManage=!0)},methods:{login(){t({url:"/pages/login/login"})},logout(){h.logout()},changePassword(){t({url:"/pages/retrieve/retrieve"})},setNickname(t){t?(h.updateUserInfo({nickname:t}),this.setNicknameIng=!1,this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate(){t({url:"/pages/userinfo/deactivate/deactivate"})},gotoDebugPage(){t({url:"/pages/debug/debug"})}}},[["render",function(t,f,h,k,v,x){const y=l(u("u-avatar"),r),_=l(u("uni-list-item"),c),I=l(u("uni-list"),g),C=l(u("uni-popup-dialog"),p),j=l(u("uni-popup"),m),b=l(u("u-button"),d),T=o;return e(),i(T,{class:"content"},{default:n((()=>[a(I,null,{default:n((()=>[a(_,{class:"item",title:"用户头像",link:""},{footer:n((()=>[a(y,{src:x.userInfo.avatar,shape:"square",size:"60"},null,8,["src"])])),_:1}),a(_,{class:"item",onClick:f[0]||(f[0]=t=>x.setNickname("")),title:"用户昵称",rightText:x.userInfo.nickname||"未设置",link:""},null,8,["rightText"]),a(_,{class:"item",title:"手机号码",rightText:x.userInfo.mobile,link:""},null,8,["rightText"]),a(_,{class:"item",title:"会员到期",rightText:x.userInfo.vip_date_str,link:""},null,8,["rightText"])])),_:1}),a(I,{class:"mt10"},{default:n((()=>[a(_,{class:"item",onClick:x.gotoDebugPage,title:"开发调试",link:""},null,8,["onClick"]),a(_,{class:"item",onClick:x.changePassword,title:"修改密码",link:""},null,8,["onClick"]),a(_,{onClick:x.deactivate,title:"注销账号",link:"navigateTo"},null,8,["onClick"])])),_:1}),a(j,{ref:"dialog",type:"dialog"},{default:n((()=>[a(C,{mode:"input",value:x.userInfo.nickname,onConfirm:x.setNickname,inputType:v.setNicknameIng?"nickname":"text",title:"设置昵称",placeholder:"请输入要设置的昵称"},null,8,["value","onConfirm","inputType"])])),_:1},512),a(b,{onClick:x.logout,type:"error",plain:"",customStyle:{height:"44px",width:"93%",margin:"20px auto"}},{default:n((()=>[s("退出登录")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-2023ba56"]]);export{v as default};
