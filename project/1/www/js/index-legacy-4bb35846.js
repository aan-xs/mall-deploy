System.register(["./index-legacy-12f59ca9.js"],(function(e,n){"use strict";var a,t,o,c,i,l,w,s,d,p,g,r,f,v,m,b,u,h,U,R,k,x=document.createElement("style");return x.textContent=".avatar-content[data-v-ddc11a54]{width:100%;min-height:calc(100vh - 46px);background-color:#fff;overflow:hidden;padding-top:20px}.avatar-content>.item[data-v-ddc11a54]{width:25vw;height:25vw;float:left;padding:4vw;position:relative}.avatar-content>.item>img[data-v-ddc11a54]{border-radius:50%}.avatar-content>.item>.check[data-v-ddc11a54]{width:22px;height:22px;border-radius:50%;background-color:var(--site-main-color);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;border:1px solid #fff;right:4vw;bottom:4vw}.avatar-content>.item>.check .van-icon[data-v-ddc11a54]{color:#fff;font-size:12px}.save-btn[data-v-ddc11a54]{color:var(--site-main-color)}\n",document.head.appendChild(x),{setters:[e=>{a=e._,t=e.l,o=e.j,c=e.r,i=e.I,l=e.c,w=e.e,s=e.w,d=e.a,p=e.F,g=e.x,r=e.b,f=e.b1,v=e.o,m=e.f,b=e.t,u=e.y,h=e.R,U=e.S,R=e.T,k=e.cp}],execute:function(){const n=[new URL("/www/png/name-06e7e6f2.png",self.location),new URL("/www/png/name-6e79b4d8.png",self.location),new URL("/www/png/name-b2bb3866.png",self.location),new URL("/www/png/name-e5c455cc.png",self.location),new URL("/www/png/name-c4f095b9.png",self.location),new URL("/www/png/name-61e1a338.png",self.location),new URL("/www/png/name-9a6f541c.png",self.location),new URL("/www/png/name-195c213d.png",self.location),new URL("/www/png/name-36248e5c.png",self.location),new URL("/www/png/name-eb40a9be.png",self.location),new URL("/www/png/name-219d8586.png",self.location),new URL("/www/png/name-d5dbab23.png",self.location),new URL("/www/png/name-fb2f3616.png",self.location),new URL("/www/png/name-c3062cb0.png",self.location),new URL("/www/png/name-76e71516.png",self.location),new URL("/www/png/name-656cd634.png",self.location),new URL("/www/png/name-693679bf.png",self.location),new URL("/www/png/name-3e40215a.png",self.location),new URL("/www/png/name-6f4809d9.png",self.location),new URL("/www/png/name-abbd7e16.png",self.location)],x=(e=>(h("data-v-ddc11a54"),e=e(),U(),e))((()=>d("div",{style:{height:"46px"}},null,-1))),L={class:"avatar-content"},y=["onClick"],_=["src"],C={key:0,class:"check"},I={__name:"index",setup(e){const a=t(),h=o(),U=c(1);if(h.userInfo.token){const e=Number(h.userInfo.avatar);isNaN(e)||(U.value=e)}else a.push("/login");const I=async()=>{R.loading({duration:0,forbidClick:!0}),await k({idx:U.value}),await h.getUserInfo(!0),a.back()};return(e,a)=>{const t=f,o=i;return v(),l("div",null,[w(t,{fixed:!0},{title:s((()=>[m(b(e.$t("avatar")),1)])),right:s((()=>[d("div",{onClick:I,class:"save-btn"},b(e.$t("save")),1)])),_:1}),x,d("div",L,[(v(!0),l(p,null,g(r(n),((e,n)=>(v(),l("div",{key:n,class:"item",onClick:e=>(e=>{e+1!==U.value&&(U.value=e+1)})(n)},[d("img",{src:e,alt:""},null,8,_),n+1===U.value?(v(),l("div",C,[w(o,{name:"success"})])):u("v-if",!0)],8,y)))),128))])])}}};e("default",a(I,[["__scopeId","data-v-ddc11a54"],["__file","D:/Users/zq/zq/mall-app-h5-vue/mall-app-h5-vue/src/views/changeAvatar/index.vue"]]))}}}));