"use strict";(self["webpackChunkbk_pc"]=self["webpackChunkbk_pc"]||[]).push([[5319],{6098:function(e,a,r){r.d(a,{d:function(){return t}});const t=()=>{const e=async(e,a,r)=>{e.createdAt&&(e.fromTime=e.createdAt[0],e.toTime=e.createdAt[1],delete e.createdAt),await a(e),r()},a=async(e,a)=>{await a(e)};return{search:e,reset:a}}},22416:function(e,a,r){r.d(a,{Z:function(){return i}});var t=r(40130),n=r(47178),l=r(40670);function i(){const e=e=>{const a=e.type,r="add"===a?"新增":"编辑";l.Z.dialog({showLang:!0,langTogether:!0,dialog:{width:"80%",title:r+"奖品"},modelField:"data",data:{password:""},params:{option:{labelPosition:"left",column:[{label:"奖品图片",prop:"imgUrl",listType:"picture-img",tip:"建议尺寸200*200px",type:"upload",span:24,action:"/api/admin/upload",rules:[{required:!0,message:"请上传图片",trigger:"blur"}],data:{moduleName:"type"},propsHttp:{res:"data",url:"url"},headers:{}},{label:"奖品名称",prop:"link",placeholder:"请输入奖品名称",span:24,rules:[{required:!0,message:"请输入奖品名称",trigger:"blur"}]},{label:"奖品价值",prop:"link",placeholder:"请输入奖品价值",type:"number",span:24,rules:[{required:!0,message:"请输入奖品价值",trigger:"blur"}]},{label:"类型名称",prop:"imgType",type:"select",span:24,rules:[{required:!0,message:"请选择分类",trigger:"blur"}],dicData:[{label:"小图",value:0},{label:"大图",value:1}]},{label:"备注",prop:"remarks",placeholder:"请输入备注",span:24,type:"textarea",rows:3,rules:[{required:!0,message:"请输入备注",trigger:"blur"}]}]}},ok(e,a){e()},cancel(){}})},a=(e,a,r)=>{t.T.confirm("确定要删除该吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a(e).then((e=>{(0,n.z8)({type:"success",message:"删除成功"}),r({})})).catch((e=>{(0,n.z8)({type:"error",message:"删除失败"})}))})).catch((()=>{(0,n.z8)({type:"info",message:"Delete canceled"})}))};return{prizeManage:e,prizeDelete:a}}},75319:function(e,a,r){r.r(a),r.d(a,{default:function(){return C}});r(57658);var t=r(73396),n=r(87139),l=r(44870),i=r(7877),p=r(47178),o=r(44775);const s={editBtn:!1,delBtn:!1,stripe:!0,border:!0,addBtn:!1,searchSpan:7,searchMenuSpan:24,searchGutter:50,columnBtn:!0,align:"center",searchMenuPosition:"right",menuWidth:180,column:[{label:"奖品ID",prop:"id"},{label:"奖品名称",prop:"prizeName",width:"180px"},{label:"奖品名称",prop:"keyword",hide:!0,search:!0},{label:"图片",prop:"image",type:"img"},{label:"奖品类型",prop:"prizeType",type:"select",dicData:[{label:"实物类",value:1},{label:"彩金类",value:2},{label:"谢谢惠顾",value:3}],width:"120px",search:!0},{label:"价值",prop:"prizeAmount"},{label:"备注",prop:"remark",width:"100px"},{label:"操作人",prop:"createBy",width:"120px"},{label:"操作时间",prop:"updateTime",width:"100px"},{label:"时间范围",prop:"timeRange",type:"datetime",searchRange:!0,search:!0,hide:!0,startPlaceholder:"创建时间（开始）",endPlaceholder:"创建时间（结束）"}]};var u=s,d=r(51826),c=(r(21703),r(40670)),g=r(26666),m=r(61073);const b=(0,l.ref)(`${m.O9}/normal/uploadimg!execute.action`),h=(e,a)=>{let r;return function(...t){clearTimeout(r),r=setTimeout((()=>{e.apply(this,t)}),a)}},f=(e,a,r)=>{c.Z.dialog({showLang:!0,isPrizeUpload:!0,langLimit:!0,langTogether:!1,specialInput:"content",cacheArrName:"i18nNames",dialog:{title:a,width:"50%"},submitText:"保存",data:e,showTable:!1,modelField:"data",params:{option:{column:[{label:"奖品名称",prop:"content",rules:[{required:!0,message:"请输入奖品名称",trigger:"blur"}],span:24},{label:"奖品图片",prop:"image",type:"upload",listType:"picture-img",span:24,data:{moduleName:"prize"},propsHttp:{res:"",url:"data"},action:b.value,tip:"建议尺寸200*200px",rules:[{required:!0,message:"请上传奖品图片",trigger:"blur"}]},{label:"奖品价值",prop:"prizeAmount",rules:[{required:!0,message:"请输入奖品价值",trigger:"blur"},{message:"奖品价值不能小于0",trigger:"blur",validator:(e,a,r)=>{a<0?r(new Error("奖品价值不能小于0")):r()}}],span:24,type:"number"},{label:"彩金类型",prop:"prizeType",span:24,rules:[{required:!0,message:"请选择彩金类型",trigger:"blur"}],type:"select",dicData:[{label:"实物类",value:1},{label:"彩金类",value:2},{label:"谢谢惠顾",value:3}]},{label:"备注",prop:"remark",span:24,type:"textarea"}]}},ok:h((function(a,t){const n=t.i18nNames.find((e=>""===e.content));if(n){let e="";return e="en"===n.lang?"英文":"中文",void(0,g.bM)({title:`必须填写奖品的${e}标题`,type:"warning",position:"bottom-right"})}(0,i.kQ)(t,e.username).then((e=>{a(),(0,g.bM)({title:"操作成功",type:"success",position:"bottom-right"}),r({})}))}),500),cancel(){}})};var y=r(6098),w=r(22416),k=r(1120),z=r(42325),v={__name:"PrizeManagement",setup(e){const{prizeDelete:a}=(0,w.Z)(),{search:r,reset:s}=(0,y.d)(),{tableRef:c,tableLoading:g,pageObj:b,sizeChange:h,currentChange:v,getTableData:T,tableData:C}=(0,d.D)(i.oX),x=((0,l.ref)([{categoryId:"123123132"}]),(0,z.DP)());let _="";(0,l.ref)("");x.username&&(_=x.username),_||((0,p.z8)({message:"请先登录",type:"error"}),k.Z.push("/none"));const D=()=>{f({username:_,id:"",prizeType:"",prizeAmount:0,image:"",i18nNames:[{lang:"en",content:""},{lang:"cn",content:""}],remark:""},"新增奖品",T)},q=async(e,a)=>{r(e,T,a)},A=()=>{s({},T)},N=()=>{s({},T)},W=e=>{a({prizeId:e.id},i.cu,T)},B=e=>{const a=o.kN.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.4)"});(0,i.kh)(e.id).then((e=>{a.close(),f({...e.data.data,username:_},"编辑奖品",T)}))};return(e,a)=>{const r=(0,t.up)("el-button"),i=(0,t.up)("el-dropdown-item"),p=(0,t.up)("el-dropdown-menu"),o=(0,t.up)("el-dropdown"),s=(0,t.up)("avue-crud"),d=(0,t.up)("el-card");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",{class:(0,n.normalizeClass)(["app-container",{"h-90vh":!(0,l.unref)(m.r8)}])},[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{ref_key:"tableRef",ref:c,page:(0,l.unref)(b),"onUpdate:page":a[0]||(a[0]=e=>(0,l.isRef)(b)?b.value=e:null),"table-loading":(0,l.unref)(g),onSearchChange:q,onSearchReset:A,onSizeChange:(0,l.unref)(h),onCurrentChange:(0,l.unref)(v),onRefreshChange:N,option:(0,l.unref)(u),data:(0,l.unref)(C)},{"menu-left":(0,t.w5)((({size:e})=>[(0,t.Wm)(r,{type:"primary",icon:"el-icon-document-add",size:e,onClick:D},{default:(0,t.w5)((()=>[(0,t.Uk)("新增奖品 ")])),_:2},1032,["size"])])),prizeType:(0,t.w5)((({row:e})=>[(0,t._)("div",null,(0,n.toDisplayString)(e.prizeType/1===1?"实物类":2===e.prizeType?"彩金类":"谢谢惠顾"),1)])),menu:(0,t.w5)((({row:e})=>[(0,t.Wm)(o,{"split-button":"",type:"primary"},{dropdown:(0,t.w5)((()=>[(0,t.Wm)(p,{"split-button":""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{onClick:a=>B(e)},{default:(0,t.w5)((()=>[(0,t.Uk)("修改")])),_:2},1032,["onClick"]),(0,t.Wm)(i,{onClick:a=>W(e)},{default:(0,t.w5)((()=>[(0,t.Uk)("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,t.w5)((()=>[(0,t.Uk)(" 操作 ")])),_:2},1024)])),_:1},8,["page","table-loading","onSizeChange","onCurrentChange","option","data"])])),_:1})],2)])}}};const T=v;var C=T}}]);