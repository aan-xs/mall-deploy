import{D as x,K as d,Z as L,J as P,d as B,r as u,aj as E,m as $,a9 as f,a0 as D,g as j,ba as C,aO as N,e as r,h as R,c4 as U,ag as z,s as _,I as F,P as J}from"./index-761f4b55.js";const[K,o]=x("image"),O={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var T=B({name:K,props:O,emits:["load","error"],setup(e,{emit:g,slots:l}){const n=u(!1),t=u(!0),s=u(),{$Lazyload:i}=E().proxy,b=$(()=>{const a={width:f(e.width),height:f(e.height)};return D(e.radius)&&(a.overflow="hidden",a.borderRadius=f(e.radius)),a});j(()=>e.src,()=>{n.value=!1,t.value=!0});const v=a=>{t.value=!1,g("load",a)},h=a=>{n.value=!0,t.value=!1,g("error",a)},m=(a,c,y)=>y?y():r(F,{name:a,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),S=()=>{if(t.value&&e.showLoading)return r("div",{class:o("loading")},[m(e.loadingIcon,o("loading-icon"),l.loading)]);if(n.value&&e.showError)return r("div",{class:o("error")},[m(e.errorIcon,o("error-icon"),l.error)])},k=()=>{if(n.value||!e.src)return;const a={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?R(r("img",z({ref:s},a),null),[[U("lazy"),e.src]]):r("img",z({src:e.src,onLoad:v,onError:h},a),null)},w=({el:a})=>{const c=()=>{a===s.value&&t.value&&v()};s.value?c():_(c)},I=({el:a})=>{a===s.value&&!n.value&&h()};return i&&C&&(i.$on("loaded",w),i.$on("error",I),N(()=>{i.$off("loaded",w),i.$off("error",I)})),()=>{var a;return r("div",{class:o({round:e.round,block:e.block}),style:b.value},[k(),S(),(a=l.default)==null?void 0:a.call(l)])}}});const Z=J(T);export{Z as I};