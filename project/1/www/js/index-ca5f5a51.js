import{D as z,E as I,H as R,J as l,K as C,d as D,L as N,M as L,e as o,I as O,N as q,O as w,P as E}from"./index-761f4b55.js";const[U,a]=z("button"),_=I({},R,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var H=D({name:U,props:_,emits:["click"],setup(n,{emit:g,slots:t}){const f=N(),b=()=>t.loading?t.loading():o(w,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return b();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(n.icon)return o(O,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},x=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:a("text")},[e])},m=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?q(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=n,v=[a([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[L]:d}];return o(e,{type:h,class:v,style:m(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),x(),u==="right"&&c()])]})}}});const K=E(H);export{K as B};