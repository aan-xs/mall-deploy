import{_ as ue,i as de,u as pe,l as ve,ai as me,r as n,aY as he,q as ge,cG as x,I as fe,a$ as _e,c as r,e as S,w as f,F as O,x as R,y as c,a as o,t as v,h as Ae,aT as ke,b as a,z as V,n as ye,cH as _,T as A,o as l,aW as Se,aG as z,V as we,R as Le,S as Ce,cI as xe}from"./index-a2850886.js";import{P as be}from"./index-8fc155db.js";import{L as Ie}from"./index-ec0d0903.js";import{E as Ne}from"./index-00da0b3a.js";import"./index-49d61071.js";import"./index-937c8bb4.js";import{S as Ue}from"./index-a8f9759a.js";import{_ as Ge}from"./search-icon-8ae5f679.js";import{_ as Ee}from"./more-f6d49895.js";import{e as Be}from"./editProfit-fd41e984.js";import{h as He,g as Oe}from"./product.api-aac5b431.js";import{c as Re}from"./index-b18c89e2.js";import"./use-id-e2fa0a8e.js";import"./index-03c7d4c5.js";import"./index-be5e5189.js";import"./index-67918318.js";import"./index-143800df.js";import"./index-7d141f93.js";import"./function-call-750a1ab4.js";import"./index-7522669c.js";import"./stringify-4b0a72d6.js";import"./___vite-browser-external_commonjs-proxy-349ceac5.js";const Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAwCAYAAABqkJjhAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKESURBVHgB7Zk9btswFMefZHu0obGeqt7AtT14q3qC+gZtTpD4BE5u0Gzd7J6g6tipymbAH0lOEGXyGO2G7fwZUAmT6ItiqMAAf4BASnoE/6RIPurRIkU6nY6LxC1oHl0BUsCikvR6vSGSMa6OTLn9fh8iOVutVlMqQY1K0O12x5Zl/UL2A0mCcg6uYbvddtbr9T+SRLqHIfYHKpwIjyL02i1L88qi3EcShg/KjdDTP0mCMoJvULHLb/1ms3kUBEGu2Jh+v38KoWN+G223208Y1oXL2yQBm2CC2KjRaIxkxDIWi8UpPX0Np16vS80BKcH0/HNez2azkMrxN87sdjuXJJAV/O4cnOCHSYex6dm27eUZYxi4sPvOb0Pc/6YSYB58o6f122fDK68Mhg7zOb7FJlKtVruhAwAN/cqGhEMHAr6E8zAkmDMgYQVAS46JNwRG51TAKbwVqHssCDwTXoXMnSc6DjQg5F6J+MIeUkVgj7KP88vl8pU+s6zpxgjWjRGsmzopAk/J1mv2uxSkLX/8v8/LsimKcg/DrU/4dcnFv67Etv9zmz+kiLJgeKPPPOtQipsXNv1Sm/UkzKTTjRGsGyNYN0awboxg3RjBulEWjI1NkSBM9CItjbJgbB1H2LFdQPgoY697xGyYLSmivIGfz+fskMXLskF8wUfi0xtgJp1ujGDdJArGjL+L8zg0caki+N91TOISmNbDjxFxLEfHVBFCdJ/SovKJyxp6eIoCceEhwq8ThOxLHQ8UxIHYL6j3RHg2TTJMPVhEnJadUFbWuyLMySB47SW9S510WOxZa8+pevxWqzVMe5l7dDsYDNzNZnOCVisHQbLAcGBR/ylOSoMsu3tYs9QwhJVNvQAAAABJRU5ErkJggg==";const J=w=>(Le("data-v-77847b5f"),w=w(),Ce(),w),Je=J(()=>o("img",{class:"search-icon",src:Ge},null,-1)),Te={key:0,class:"result-list pl-4 pr-4"},ze=["onClick"],Me={key:1,class:"search-history"},je={class:"title"},Pe=J(()=>o("img",{src:Ve,alt:"",class:"delete-icon"},null,-1)),Ye={key:0,class:"content"},qe=["onClick"],De={key:2,class:"list ml-4 mr-4 mt-4 mb-4"},Fe=["onClick"],Ke={class:"flex-1 flex left"},$e={class:"product-img-wrap w-20 h-20",style:{overflow:"hidden"}},Qe=["src"],Xe={class:"product-info"},We={class:"name"},Ze={class:"Specification"},es={key:0,style:{"margin-right":"20px"}},ss={key:1},ts={class:"money"},os={class:"item-more-content"},as=["onClick"],ls=J(()=>o("img",{class:"more-icon",src:Ee},null,-1)),ns=[ls],is={__name:"index",setup(w){const M=de(),{t:k}=pe(),T=ve(),j=me(),p=n(j.query.id);let u=n(""),m=n(1),P=n(""),b=n(!1);n({});const h=n([]),I=n([]),Y=n(!1),g=n(!1),N=n(!1);let d=n([]);const q=()=>{},D=new URL("/www/png/name-20d65991.png",self.location),U=n(null);he(()=>{U.value&&console.log(U.value)}),ge(()=>{p.value/1===1?x("searchOne")&&(d.value=x("searchOne")):x("searchTwo")&&(d.value=x("searchTwo"))});const L=xe(()=>{u.value.trim()?(m.value=1,h.value=[],A.loading({forbidClick:!0,loadingType:"spinner"}),E(),F()):A({message:k("\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u5B57"),duration:2e3})},500),F=()=>{const e=u.value.trim(),s=p.value/1===1?"searchOne":"searchTwo";if(e!="")if(d.value.length==0)d.value.push(e),_(s,d.value);else{const i=Re(d.value);i.unshift(e);const C=[...new Set(i)];d.value=C,_(s,C)}},K=()=>{p.value/1===1?_("searchOne",[]):_("searchTwo",[])},$=()=>{u.value=""},Q=e=>{u.value=e,L()},X=e=>{d.value=[],p.value/1===1?_("searchOne",""):_("searchTwo","")},W=()=>{Y.value=!1,L()},Z=()=>{let e={pageNum:m.value,pageSize:20,keyword:u.value};He(e).then(s=>{console.log(s),A.clear(),m.value++;for(let i=0;i<s.pageList.length;i++)s.pageList[i].check=!1,h.value.push(s.pageList[i]);g.value=!1,s.pageList.length<20?(m.value>1&&A(k("\u6CA1\u6709\u66F4\u591A\u6570\u636E")),N.value=!0):m.value++})},ee=()=>{let e={name:u.value,categoryId:"",pageNum:m.value,pageSize:20};Oe(e).then(s=>{A.clear(),console.log("\u5546\u5BB6\u81EA\u5DF1\u7684\u5546\u54C1",s);for(let i=0;i<s.pageList.length;i++)h.value.push(s.pageList[i]);g.value=!1,s.pageList.length<20?(m.value>1&&A(k("\u6CA1\u6709\u66F4\u591A\u6570\u636E")),N.value=!0):m.value++})},G=n(null);p.value/1===2?G.value=ee:G.value=Z;const E=()=>{console.log(123),G.value()},se=e=>{console.log("ssss",e),u.value="",I.value=[],P.value=e.goodsId,m.value=1,h.value=[],E()};let B=n([]);const te=e=>{p.value/1===1?T.push({path:"/productPage/productEdit",query:{item:JSON.stringify(e)}}):(B.value=[],B.value.push(e.id),b.value=!0)},oe=(e,s)=>{e.sellingPrice=s},ae=()=>{b.value=!1},le=e=>{p.value/1===1&&T.push({path:"/productPage/details",query:{item:JSON.stringify(e)}})};return(e,s)=>{const i=fe,C=Ue,ne=_e,ie=Ne,re=Ie,ce=be;return l(),r("div",{class:ye(["search-container",{"is-ar":a(M)}])},[S(ne,{fixed:"","left-arrow":"",onClickLeft:s[2]||(s[2]=()=>e.$router.back())},{title:f(()=>[c('        <van-search v-model="keyword" shape="round" @blur="record" @update:model-value="search" :clearable="false"'),c('          placeholder="\u8BF7\u8F93\u5165\u5546\u54C1" @input="inputHandle">'),S(C,{modelValue:a(u),"onUpdate:modelValue":s[0]||(s[0]=t=>Se(u)?u.value=t:u=t),shape:"round",clearable:!1,placeholder:e.$t("\u8BF7\u8F93\u5165\u5546\u54C1"),onInput:q},{"left-icon":f(()=>[Je]),"right-icon":f(()=>[a(u)?(l(),V(i,{key:0,name:"cross",onClick:$,size:"14",color:"#333333"})):c("v-if",!0)]),_:1},8,["modelValue","placeholder"])]),right:f(()=>[o("div",{onClick:s[1]||(s[1]=(...t)=>a(L)&&a(L)(...t))},v(e.$t("\u641C\u7D22")),1)]),_:1}),I.value.length>0?(l(),r("div",Te,[(l(!0),r(O,null,R(I.value,(t,y)=>(l(),r("div",{class:"result-list-item pt-2 pb-2",onClick:H=>se(t),key:y},v(t.name),9,ze))),128))])):c("v-if",!0),h.value.length==0?(l(),r("div",Me,[o("div",je,[o("p",null,v(e.$t("\u5386\u53F2\u641C\u7D22")),1),Ae(o("div",{class:"clear",onClick:K},[Pe,o("p",{onClick:X},v(e.$t("\u6E05\u7A7A")),1)],512),[[ke,a(d).length>0]])]),a(d).length>0?(l(),r("div",Ye,[(l(!0),r(O,null,R(a(d),(t,y)=>(l(),r("div",{key:y,class:"item",onClick:H=>Q(t)},v(t),9,qe))),128))])):c("v-if",!0),a(d).length?c("v-if",!0):(l(),V(ie,{key:1,image:a(D).href,description:a(k)("noData")},null,8,["image","description"]))])):c("v-if",!0),h.value.length>0?(l(),r("div",De,[S(ce,{"loading-text":e.$t("\u52A0\u8F7D\u4E2D"),"loosing-text":e.$t("\u91CA\u653E\u4EE5\u5237\u65B0"),"pulling-text":e.$t("\u4E0B\u62C9\u4EE5\u5237\u65B0"),modelValue:g.value,"onUpdate:modelValue":s[4]||(s[4]=t=>g.value=t),onRefresh:W},{default:f(()=>[S(re,{ref_key:"checkEl",ref:U,loading:g.value,"onUpdate:loading":s[3]||(s[3]=t=>g.value=t),finished:N.value,"finished-text":e.$t("\u6CA1\u6709\u66F4\u591A\u4E86"),onLoad:E},{default:f(()=>[(l(!0),r(O,null,R(h.value,(t,y)=>(l(),r("div",{class:"item pl-3 pr-3 pb-3 pt-3 flex",onClick:H=>le(t),key:y},[o("div",Ke,[o("div",$e,[o("img",{class:"product-img",src:t.imgUrl1},null,8,Qe),c('                <div class="delete-wrap" @click.stop="deleteGood(item)">\u5220\u9664</div>')]),o("div",Xe,[o("div",We,v(t.name),1),o("div",Ze,[t.categoryName?(l(),r("span",es,v(t.categoryName),1)):c("v-if",!0),c(" <span>{{t('product.4')}}: {{ item.unit || '-' }}</span> "),p.value/1===1?(l(),r("span",ss,v(a(k)("sales"))+": "+v(t.soldNum),1)):c("v-if",!0)]),o("div",ts,"$"+v(p.value/1===1?a(z)(t.sellingPrice):a(z)(t.systemPrice)),1)])]),o("div",os,[o("div",{class:"more",onClick:we(H=>te(t),["stop"])},ns,8,as),p.value/1===1?(l(),V(i,{key:0,name:"arrow",size:"20px",style:{top:"50%",right:"0",position:"absolute","margin-top":"-10px"}})):c("v-if",!0)])],8,Fe))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["loading-text","loosing-text","pulling-text","modelValue"])])):c("v-if",!0),S(Be,{isEdit:a(b),onUpdate:oe,productArry:a(B),onClose:ae},null,8,["isEdit","productArry"])],2)}}},Us=ue(is,[["__scopeId","data-v-77847b5f"],["__file","D:/Users/zq/zq/mall-app-h5-vue/mall-app-h5-vue/src/views/search/index.vue"]]);export{Us as default};