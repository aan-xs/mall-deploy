"use strict";(self["webpackChunkbk_pc"]=self["webpackChunkbk_pc"]||[]).push([[5917],{95917:function(e,l,a){a.r(l),a.d(l,{default:function(){return b}});var t=a(73396),o=a(87139),d=a(44870),u=a(44161),n=a(61073);const i={class:"main"},r={class:"select"},m={class:"opt"},p={class:"table"};var s={__name:"ListCommodity",setup(e){const l=(0,d.ref)({id:"",goodName:"",categoryId:""}),a=(0,d.ref)([]),s=(0,d.ref)([]);let c=(0,d.ref)(1);const b=(0,d.ref)(!1);let f=(0,d.ref)(0),g=(0,d.ref)(8);const w=(0,d.ref)(!1),v=()=>{const e={thisPageNumber:c.value,pageSize:g.value,id:l.value.id};Object.keys(e).forEach((l=>{e[l]||delete e[l]})),(0,u.Z)({method:"post",url:`${n.O9}/admin_war_exploded/systemGoods/list.action`,data:e}).then((async e=>{s.value=e.data.data.elements,f.value=e.data.data.totalElements}))},h=()=>{(0,u.Z)({method:"post",url:`${n.O9}/admin_war_exploded/systemGoods/getAllAttributeCategory.action`}).then((e=>{const l=e.data.data;a.value=l}))};v(),h();const y=e=>{g.value=e,v()},_=e=>{c.value=e,v()},W=()=>{},$=e=>{(0,u.Z)({method:"post",url:`${n.O9}/admin_war_exploded/systemGoods/delete.action`,data:{id:e.id}}).then((e=>{v()}))},k=e=>{},C=()=>{v()},U=()=>{l.value={id:"",goodName:"",categoryId:""},v()};return(e,u)=>{const n=(0,t.up)("el-input"),v=(0,t.up)("el-form-item"),h=(0,t.up)("el-option"),D=(0,t.up)("el-select"),V=(0,t.up)("el-button"),S=(0,t.up)("el-form"),z=(0,t.up)("el-table-column"),I=(0,t.up)("el-table"),N=(0,t.up)("el-pagination");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("div",r,[(0,t.Wm)(S,{inline:!0,model:l.value,class:"demo-form-inline"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{label:e.$t("商品名称")},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:l.value.goodName,"onUpdate:modelValue":u[0]||(u[0]=e=>l.value.goodName=e),placeholder:e.$t("商品名称")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,t.Wm)(v,{label:e.$t("商品ID")},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:l.value.id,"onUpdate:modelValue":u[1]||(u[1]=e=>l.value.id=e),placeholder:e.$t("商品ID")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,t.Wm)(v,{label:e.$t("商品分类")},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{modelValue:l.value.categoryId,"onUpdate:modelValue":u[2]||(u[2]=e=>l.value.categoryId=e),placeholder:e.$t("商品分类")},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,(e=>((0,t.wg)(),(0,t.j4)(h,{label:e.name,key:e.id,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,{type:"primary",onClick:C},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.toDisplayString)(e.$t("查询")),1)])),_:1}),(0,t.Wm)(V,{type:"primary",onClick:U},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.toDisplayString)(e.$t("重置")),1)])),_:1})])),_:1})])),_:1},8,["model"])]),(0,t._)("div",m,[(0,t.Wm)(V,{type:"primary",onClick:W},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.toDisplayString)(e.$t("新增商品")),1)])),_:1})]),(0,t._)("div",p,[(0,t.Wm)(I,{data:s.value,style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{prop:"id",label:e.$t("商品ID"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{label:e.$t("封面图"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"goodName",label:e.$t("商品名称"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"categoryName",label:e.$t("商品分类"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"systemPrice",label:e.$t("进货价格"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"isShelf",label:e.$t("标签"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"date",label:e.$t("排序"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{prop:"date",label:e.$t("销量"),width:"180"},null,8,["label"]),(0,t.Wm)(z,{label:e.$t("操作"),width:"180"},{default:(0,t.w5)((l=>[(0,t.Wm)(V,{onClick:e=>k(l.row)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.toDisplayString)(e.$t("编辑")),1)])),_:2},1032,["onClick"]),(0,t.Wm)(V,{type:"danger",onClick:e=>$(l.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("$t('删除')")])),_:2},1032,["onClick"])])),_:1},8,["label"])])),_:1},8,["data"]),(0,t.Wm)(N,{class:"mt-15","current-page":(0,d.unref)(c),"onUpdate:currentPage":u[3]||(u[3]=e=>(0,d.isRef)(c)?c.value=e:c=e),"page-size":(0,d.unref)(g),"onUpdate:pageSize":u[4]||(u[4]=e=>(0,d.isRef)(g)?g.value=e:g=e),"page-sizes":[10,20,30,50],small:w.value,background:b.value,layout:"total, sizes, prev, pager, next, jumper",total:(0,d.unref)(f),onSizeChange:y,onCurrentChange:_},null,8,["current-page","page-size","small","background","total"])])])}}};const c=s;var b=c}}]);