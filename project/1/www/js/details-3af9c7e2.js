import{_ as b,i as N,u as V,ai as $,r as v,q as S,T as P,c as d,e as D,w as I,a as t,b as s,n as w,t as i,y as r,F as m,x as h,b1 as A,o as a,f as C,aG as l}from"./index-761f4b55.js";import{e as q}from"./product.api-52badaf7.js";import"./index-a031ac32.js";import"./stringify-825d57d9.js";import"./___vite-browser-external_commonjs-proxy-a9c64161.js";const G={class:"details"},L={class:"list ml-4 mr-4 mt-4"},T={class:"item pl-3 pr-3 pb-3 pt-3 flex"},z={class:"flex-1 flex left"},B={class:"product-img-wrap w-20 h-20"},F=["src"],H={class:"name"},U={class:"Specification"},E={key:0},J={key:0,class:"money"},M={key:0,class:"pl-4 pr-4 font-14"},O={class:"flex details-item pl-3 pr-3"},R={class:"title"},j={class:"text"},K={class:"flex details-item pl-3 pr-3"},Q={class:"title"},W={class:"text"},X={class:"flex details-item pl-3 pr-3"},Y={class:"title"},Z={class:"text"},ss={class:"flex details-item pl-3 pr-3"},ts={class:"title"},es={class:"text"},is={class:"flex details-item pl-3 pr-3"},cs={class:"title"},os={class:"text"},ds={class:"flex details-item pl-3 pr-3"},as={class:"title"},ls={class:"text"},rs={key:1,class:"spec-container"},ns={class:"spec-content"},_s={class:"col-item header"},us={class:"item"},ps={class:"item"},vs={key:0,class:"item"},ms={key:1,class:"item"},hs={class:"item"},fs={__name:"details",setup(xs){const g=N(),{t:c}=V(),k=$();let e=v({});const p=v([]),f=v([]);return S(()=>{e.value=JSON.parse(k.query.item),P.loading({forbidClick:!0,duration:0}),q({sellerGoodsId:e.value.id}).then(x=>{const _=x.sellerGoodsSkuDtoList||[];if(_.length){let n=[c("\u91C7\u8D2D\u4EF7"),c("\u9500\u552E\u4EF7"),c("\u6298\u6263\u4EF7"),c("\u5229\u6DA6")];n=[...(_[0].goodsAttributeVos||[]).map(u=>u.attrName),...n],p.value=n}f.value=_,P.clear()})}),(x,_)=>{const n=A;return a(),d("div",G,[D(n,{fixed:""},{title:I(()=>[C(i(s(c)("product.11")),1)]),_:1}),t("div",L,[t("div",T,[t("div",z,[t("div",B,[t("img",{class:"product-img",src:s(e).imgUrl1},null,8,F)]),t("div",{class:w(["product-info",{"is-ar":s(g)}])},[t("div",H,i(s(e).name),1),t("div",U,[r(" <span>{{t('product.4')}}: {{ info.unit }}</span> "),s(e).categoryName?(a(),d("span",E,i(s(e).categoryName),1)):r("v-if",!0),t("span",null,i(s(c)("product.9"))+": "+i(s(e).soldNum),1)]),s(e).systemPrice||s(e).systemPrice===0?(a(),d("div",J,"$"+i(s(e).discountPrice?s(l)(s(e).discountPrice):s(l)(s(e).sellingPrice)),1)):r("v-if",!0)],2)]),r(` <div class="number">
              x1
            </div> `)])]),s(e).systemPrice||s(e).systemPrice===0?(a(),d("div",M,[t("div",O,[t("div",R,i(s(c)("product.9")),1),t("div",j,i(s(e).soldNum),1)]),t("div",K,[t("div",Q,i(s(c)("product.12")),1),t("div",W,"$"+i(s(e).discountPrice?s(l)(s(e).discountPrice):s(l)(s(e).sellingPrice)),1)]),r(` <div class="flex details-item pl-3 pr-3">
        <div class="title">Discount Price</div>
        <div class="text">$18.90</div>
      </div> `),t("div",X,[t("div",Y,i(s(c)("product.13")),1),t("div",Z,"$"+i(s(l)(s(e).systemPrice)),1)]),t("div",ss,[t("div",ts,i(s(c)("product.14")),1),t("div",es,"$"+i(s(e).discountPrice?s(l)(s(e).discountPrice-s(e).systemPrice):s(l)(s(e).discountPrice-s(e).sellingPrice)),1)]),t("div",is,[t("div",cs,i(s(c)("product.15")),1),t("div",os,i(s(e).isShelf/1===1?s(c)("product.17"):s(c)("product.18")),1)]),t("div",ds,[t("div",as,i(s(c)("product.16")),1),t("div",ls,i(s(e).recTime/1===1?s(c)("product.17"):s(c)("product.18")),1)])])):r("v-if",!0),p.value.length?(a(),d("div",rs,[t("div",ns,[t("div",_s,[(a(!0),d(m,null,h(p.value,o=>(a(),d("div",{key:o,class:"item"},i(o),1))),128))]),(a(!0),d(m,null,h(f.value,(o,y)=>(a(),d("div",{key:y,class:"col-item"},[(a(!0),d(m,null,h(o.goodsAttributeVos,(u,ys)=>(a(),d("div",{key:u.attrValue,class:"item"},i(u.attrValue),1))),128)),t("div",us,"$"+i(s(l)(o.systemPrice)),1),t("div",ps,"$"+i(s(l)(o.sellingPrice)),1),o.discountPrice?(a(),d("div",vs,"$"+i(s(l)(o.discountPrice)),1)):(a(),d("div",ms,"--")),t("div",hs,"$"+i(o.discountPrice?s(l)(o.discountPrice-o.systemPrice):s(l)(o.sellingPrice-o.systemPrice)),1)]))),128))])])):r("v-if",!0)])}}},Vs=b(fs,[["__scopeId","data-v-42a057c9"],["__file","D:/Users/zq/zq/mall-app-h5-vue/mall-app-h5-vue/src/views/product/details.vue"]]);export{Vs as default};