import{_ as G,j as K,r as f,u as Q,i as W,ai as X,l as Z,m as ee,p as te,o as I,c as M,e as a,w as u,a as d,t as g,b as r,f as j,y as x,n as oe,bF as R,al as ne,T as b,I as se,bq as ae,R as le,S as ie}from"./index-d71e1836.js";import{B as ue}from"./index-2b37af5f.js";import"./index-bb63e648.js";import{C as re}from"./index-9f084461.js";import"./index-27d29771.js";import{F as de}from"./index-ac66dd73.js";import{s as me,a as pe}from"./product.api-4494d699.js";import{D as ce}from"./index-bdd8c117.js";import{F as ve}from"./index-9cb38fbf.js";import{D as fe}from"./function-call-3e6c5181.js";const A=T=>(le("data-v-9e40474f"),T=T(),ie(),T),be={class:"edit-product-pop"},ge={class:"title"},_e={class:"tip pt-2 pb-2 pl-4 pr-4"},Te=A(()=>d("span",null,"%",-1)),ke={class:"tips pt-2 pb-2 pl-4 pr-4"},we={class:"tip pt-2 pb-2 pl-4 pr-4"},ye={class:"tip pt-2 pb-2 pl-4 pr-4"},he={class:"tip pt-2 pb-2 pl-4 pr-4"},xe=A(()=>d("span",null,"%",-1)),Ce={style:{margin:"16px"}},Ve={__name:"editProfit",props:{isEdit:Boolean,productArry:Array},emits:["back","update"],setup(T,{emit:P}){const C=T,N=K();f("true");const{t:s}=Q(),H=W(),h=f(!1),k=f(!1),w=f(!1),V=f(!1),U=f(new Date),$=f(""),D=f(""),O=f("");X();const q=Z(),o=f({startTime:"",endTime:"",discount:"",percent:""}),S=ee(()=>{let e={};return N.userInfo.token?e={...N.userInfo}:q.push("/login"),e}),B=e=>{switch(e){case 1:k.value=!0;break;case 2:w.value=!0;break;case 3:V.value=!0;break}},F=e=>{switch(e){case 1:k.value=!1,o.value.startTime=R($.value).format("YYYY-MM-DD");break;case 2:w.value=!1,o.value.endTime=R(D.value).format("YYYY-MM-DD");break;case 3:V.value=!1,o.value.recTime=z(O.value);break}},Y=e=>{switch(e){case 1:k.value=!1;break;case 2:w.value=!1;break;case 3:V.value=!1;break}},J=e=>{const t="sm";if([].includes(t)&&(!S.value.phoneverif||!S.value.emailverif)){const i=S.value.phoneverif?"bindEmailTips":"\u8BF7\u7ED1\u5B9A\u624B\u673A\u53F7";fe.confirm({title:s("dialogTips"),message:s(i),cancelButtonText:s("cancel"),confirmButtonText:s("gotoSet"),confirmButtonColor:"#1552F0",cancelButtonColor:"#999"}).then(()=>{ne("/personalInfo")}).catch(()=>{console.log("cancel")});return}const{startTime:p,endTime:c,discount:_}=o.value;if(p||c){const i=new Date(p.replace(/-/g,"/")+" 00:00:00").getTime(),v=new Date(c.replace(/-/g,"/")+" 00:00:00").getTime();if(!_){b(s("\u8BF7\u8BBE\u7F6E\u6298\u6263\u6BD4\u4F8B"));return}if(i>v){b(s("\u5F00\u59CB\u65F6\u95F4\u5E94\u5C0F\u4E8E\u7ED3\u675F\u65F6\u95F4"));return}}if(Number(_)&&(!p||!c)){b(s("\u8BF7\u6B63\u786E\u586B\u5199\u6D3B\u52A8\u5F00\u542F\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4"));return}let l={goodsIds:C.productArry.join(","),...o.value};if(o.value.percent>m.max||o.value.percent<m.min)b(s("\u767E\u5206\u6BD4\u8BBE\u7F6E\u8303\u56F4\u4E3A")+`\uFF1A${m.min}% ~ ${m.max}%`);else{const i=/^\+?[1-9][0-9]*$/;i.test(String(Number(o.value.percent)))?Number(o.value.discount)&&!i.test(String(Number(o.value.discount)))?b(s("\u6298\u6263\u6BD4\u4F8B\u5FC5\u987B\u4E3A\u6B63\u6574\u6570")):(h.value=!0,l.startTime=l.startTime+" 00:00:00",l.endTime=l.endTime+" 00:00:00",l.profit=(o.value.percent/100).toFixed(2),l.discount=(o.value.discount/100).toFixed(2),l.percent=(o.value.percent/100).toFixed(2),b.loading({forbidClick:!0}),pe(l).then(()=>{b(s("\u4E0A\u67B6\u6210\u529F")),L()}).catch(v=>{const y=typeof v.data=="string"?JSON.parse(v.data):v.data;y&&y._$1?b({message:s(v.msg,{_$1:y._$1}),duration:2e3}):b({message:s(v.msg),duration:2e3}),h.value=!1})):b(s("\u767E\u5206\u6BD4\u5FC5\u987B\u4E3A\u6B63\u6574\u6570"))}},m=te({min:5,max:20});me().then(e=>{m.min=Number(e.sysParaMin),m.max=Number(e.sysParaMax)});const L=()=>{E(),P("update")},E=()=>{P("close");for(const e in o.value)o.value[e]="";setTimeout(()=>{h.value=!1},500)},z=e=>{let t=e.getFullYear(),p=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,c=e.getDate()<10?"0"+e.getDate():e.getDate(),_=e.getHours()<10?"0"+e.getHours():e.getHours(),l=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return t+"-"+p+"-"+c+" "+_+":"+l+":"+i};return(e,t)=>{const p=de,c=re,_=se,l=ce,i=ae,v=ue,y=ve;return I(),M("div",{class:oe(["editProduct",{"is-ar":r(H)}])},[a(i,{show:C.isEdit,"onUpdate:show":t[16]||(t[16]=n=>C.isEdit=n),round:"",closeable:"",onClickCloseIcon:E,style:{height:"65%",width:"95%"}},{default:u(()=>[d("div",be,[d("div",ge,g(r(s)("\u6DFB\u52A0\u5546\u54C1")),1),a(y,null,{default:u(()=>[d("div",_e,g(r(s)("product.25")),1),a(c,{class:"input-field",inset:""},{default:u(()=>[a(p,{modelValue:o.value.percent,"onUpdate:modelValue":t[0]||(t[0]=n=>o.value.percent=n),type:"number",placeholder:r(s)("\u767E\u5206\u6BD4"),rules:[{required:!0,message:r(s)("\u8BF7\u586B\u5199\u767E\u5206\u6BD4"),max:m.max,min:m.min}]},{button:u(()=>[Te]),_:1},8,["modelValue","placeholder","rules"])]),_:1}),d("div",ke,[j(g(e.$t("\u5C06\u9009\u4E2D\u7684\u5546\u54C1\u53D1\u5E03\u5230\u4F60\u7684\u5E97\u94FA\uFF0C\u5E76\u586B\u5199\u5546\u54C1\u5229\u6DA6\u6BD4\u4F8B\uFF0C\u63A8\u8350\u6BD4\u4F8B"))+": ",1),d("span",null,g(m.min)+"%-"+g(m.max)+"%",1)]),d("div",we,g(e.$t("\u6298\u6263\u5F00\u59CB\u65E5\u671F")),1),a(c,{class:"input-field",inset:"",style:{position:"relative"}},{default:u(()=>[o.value.startTime?(I(),M("div",{key:0,class:"time-clear",onClick:t[1]||(t[1]=n=>o.value.startTime="")},[a(_,{name:"cross"})])):x("v-if",!0),a(p,{onClickInput:t[2]||(t[2]=n=>B(1)),modelValue:o.value.startTime,"onUpdate:modelValue":t[3]||(t[3]=n=>o.value.startTime=n),placeholder:r(s)("\u6298\u6263\u5F00\u59CB\u65E5\u671F")},null,8,["modelValue","placeholder"]),a(i,{show:k.value,"onUpdate:show":t[7]||(t[7]=n=>k.value=n),round:"",position:"bottom"},{default:u(()=>[a(l,{"min-date":U.value,"cancel-button-text":e.$t("\u53D6\u6D88"),"confirm-button-text":e.$t("\u786E\u5B9A"),modelValue:$.value,"onUpdate:modelValue":t[4]||(t[4]=n=>$.value=n),type:"date",title:r(s)("\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"),onConfirm:t[5]||(t[5]=n=>F(1)),onCancel:t[6]||(t[6]=n=>Y(1))},null,8,["min-date","cancel-button-text","confirm-button-text","modelValue","title"])]),_:1},8,["show"])]),_:1}),d("div",ye,g(e.$t("\u6298\u6263\u7ED3\u675F\u65E5\u671F")),1),a(c,{class:"input-field",inset:"",style:{position:"relative"}},{default:u(()=>[o.value.endTime?(I(),M("div",{key:0,class:"time-clear",onClick:t[8]||(t[8]=n=>o.value.endTime="")},[a(_,{name:"cross"})])):x("v-if",!0),a(p,{onClickInput:t[9]||(t[9]=n=>B(2)),modelValue:o.value.endTime,"onUpdate:modelValue":t[10]||(t[10]=n=>o.value.endTime=n),placeholder:r(s)("\u6298\u6263\u7ED3\u675F\u65E5\u671F")},null,8,["modelValue","placeholder"])]),_:1}),d("div",he,g(e.$t("\u6298\u6263\u6BD4\u4F8B")),1),a(c,{class:"input-field",inset:""},{default:u(()=>[a(p,{modelValue:o.value.discount,"onUpdate:modelValue":t[11]||(t[11]=n=>o.value.discount=n),type:"number",placeholder:r(s)("\u6298\u6263\u6BD4\u4F8B")},{button:u(()=>[xe]),_:1},8,["modelValue","placeholder"])]),_:1}),a(i,{show:w.value,"onUpdate:show":t[15]||(t[15]=n=>w.value=n),round:"",position:"bottom"},{default:u(()=>[a(l,{"min-date":U.value,"cancel-button-text":e.$t("\u53D6\u6D88"),"confirm-button-text":e.$t("\u786E\u5B9A"),modelValue:D.value,"onUpdate:modelValue":t[12]||(t[12]=n=>D.value=n),type:"date",title:r(s)("\u9009\u62E9\u5B8C\u6574\u65F6\u95F4"),onConfirm:t[13]||(t[13]=n=>F(2)),onCancel:t[14]||(t[14]=n=>Y(2))},null,8,["min-date","cancel-button-text","confirm-button-text","modelValue","title"])]),_:1},8,["show"]),d("div",Ce,[a(v,{disabled:h.value,block:"",class:"btn-content",type:"primary",onClick:J,"native-type":"submit"},{default:u(()=>[j(g(r(s)("product.26")),1)]),_:1},8,["disabled"])])]),_:1})])]),_:1},8,["show"]),x(` <fx-header fixed>
      <template #title>\u7F16\u8F91\u5546\u54C1</template>
    </fx-header> `),x(` <van-popup v-model:show="show" position="bottom">
      <div>
        <van-date-picker v-model="fromData.recTime" title="\u9009\u62E9\u65E5\u671F"   ></van-date-picker>

      </div>
    </van-popup> `)],2)}}},Ye=G(Ve,[["__scopeId","data-v-9e40474f"],["__file","D:/caishen/mall-app-h5-vue/mall-app-h5-vue/src/views/product/components/editProfit.vue"]]);export{Ye as e};