"use strict";(self["webpackChunkbk_pc"]=self["webpackChunkbk_pc"]||[]).push([[5572],{95572:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});a(57658);var i=a(73396),n=a(87139),l=a(44870),o=a(49242),r=a(7877),s=a(51826),p=a(40670),d=a(61073),c=a(26666),u=a(40130),m=a(55743),g=a.n(m),h=a(42325),b=a(91097);const f={searchMenuSpan:6,searchGutter:50,searchLabelWidth:80,border:!0,addBtn:!1,delBtn:!1,editBtn:!1,refreshBtn:!1,searchShowBtn:!1,searchBtnText:"查询",emptyBtnText:"重置",emptyBtnIcon:"el-icon-refresh",searchLabelPosition:"right",searchSpan:7,align:"center",menuWidth:200,column:[{label:"活动名称（中文）",prop:"title",minWidth:"40",align:"center",search:!1},{label:"活动名称",prop:"keyword",minWidth:"40",align:"center",search:!0,hide:!0},{label:"活动类型",prop:"type",minWidth:"40",align:"center"},{label:"活动状态",prop:"status",minWidth:"40",align:"center",search:!0,type:"select",dicData:[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}]},{label:"活动开始时间",prop:"startTime",minWidth:"40",align:"center"},{label:"活动结束时间",prop:"endTime",minWidth:"40",align:"center"},{label:"活动链接",prop:"url",align:"center"},{label:"是否展示",prop:"isShow",align:"center",width:120},{label:"操作者",prop:"lastOperator",minWidth:"40",align:"center"},{label:"创建时间",prop:"createTime"}]},w=9,y=["href"];var v={__name:"EventsList",setup(e){const t=(e,t)=>{let a;return function(...i){clearTimeout(a),a=setTimeout((()=>{e.apply(this,i)}),t)}},{tableRef:a,tableLoading:m,pageObj:v,sizeChange:C,currentChange:T,getTableData:D,tableData:k}=(0,s.D)(r.FD),M=e=>e?g()(e).format("YYYY-MM-DD HH:mm:ss"):"",S=e=>{switch(e.status){case 0:return"禁用";case 1:return"启用";case 2:return"活动结束"}},W=async(e,t)=>{e.timeRange&&e.timeRange.length&&(e.fromTime=g()(e["timeRange"][0]).format("YYYY-MM-DD HH:mm:ss"),e.toTime=g()(e["timeRange"][1]).format("YYYY-MM-DD HH:mm:ss"),delete e.timeRange),await D(e),t()},Y=(0,h.DP)();let _="";const x=(0,l.ref)("");if(Y.username&&(_=Y.username),Y.url){const e="https://"+Y.url.split("https://")[1].split("/")[0];x.value=e+"/www/#/activity/turntable"}const R=(0,l.ref)([]);(0,r.te)().then((e=>{R.value=e.data.data.map((e=>({label:e.title,value:e.type,id:e.id})))}));const z=(e,a=!0)=>{const i=e.config.map((e=>({label:e.title,labelWidth:"160px",prop:e.code,placeholder:e.description,span:24,labelPosition:"top",rules:[{required:!0,message:`请输入${e.title}`,trigger:"blur"}]})));p.Z.dialog({showLang:!0,langLimit:!0,langTogether:!1,specialInput:"title",specialInput2:"description",cacheArrName:"i18nContents",dialog:{title:e.title,width:"70%"},submitText:"保存",data:e.data,showTable:!1,modelField:"data",params:{option:{column:[{label:"标题",labelWidth:"160px",labelPosition:"top",prop:"title",rules:[{required:!0,message:"请输入标题",trigger:"blur"}],span:24},{label:"活动类型",labelPosition:"top",labelWidth:"160px",prop:"type",disabled:!0,span:24,rules:[{required:!0,message:"请选择活动类型",trigger:"blur"}],type:"select",dicData:R},{type:"datetimerange",labelPosition:"top",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss",startPlaceholder:"时间日期开始范围自定义",endPlaceholder:"时间日期结束范围自定义",label:"活动时间",labelWidth:"160px",prop:"timeRange",span:24,rules:[{required:!0,message:"请选择活动时间",trigger:"blur"}]},{label:"活动介绍",labelPosition:"top",labelWidth:"160px",span:24,prop:"description",rules:[{required:!0,message:"请输入活动内容",trigger:"blur"}],component:"avueUeditor",customConfig:{width:"500px",lineHeights:["1","1.15","1.6","2","2.5","3"]},data:{moduleName:"activity"},propsHttp:{res:"",url:"data"},action:I.value},{label:"奖项配置表格",labelPosition:"top",labelWidth:"160px",prop:"prizeList",span:24,data:{}},{label:"活动状态",labelPosition:"top",labelWidth:"160px",prop:"status",span:24,type:"radio",dicData:[{label:"启用",value:1},{label:"禁用",value:0}]}].concat(i)}},ok:t((function(t,i){const n=$(i.prizeList).length;if(n>0)return void(0,c.bM)({title:"提示",position:"bottom-right",message:`奖项配置表格中有${n}个奖项未更换`,type:"error"});i.startTime=i.timeRange[0],i.endTime=i.timeRange[1],delete i.timeRange;let l=e.config.map((e=>{const t={code:e.code,value:i[e.code]};return delete i[e.code],t}));i.activityConfigInfos=l,i.templateId=e.templateId,i.title=i.i18nContents[1].title;let o=0;i.prizeList.forEach((e=>{o=(0,b.O)(o).plus(e.odds).toNumber()})),1===o?(a||(i.id=e.id),(0,r.xn)(i,_).then((e=>{"0"===e.data.code?((0,c.bM)({title:"提示",position:"bottom-right",message:"操作成功",type:"success"}),D({}),t()):(0,c.bM)({title:"提示",position:"bottom-right",message:e.data.msg,type:"error"})}))):(0,c.bM)({title:"提示",position:"bottom-right",message:"奖项概率总和必须等于1",type:"error"})}),500),cancel(){}})},I=(0,l.ref)(`${d.O9}/normal/uploadimg!execute.action`),H=e=>{(0,r.Rs)(e.id).then((t=>{const a=t.data.data.activityConfigInfos,i=q(t.data.data.prizeList),n=t.data.data.templateId;z({title:"新增活动",data:{title:"",type:e.value,timeRange:[],description:"",i18nContents:[{lang:"en",title:"",description:""},{lang:"cn",title:"",description:""}],prizeList:i,status:0},config:a,templateId:n,idDisabled:!1})}))},L=e=>{(0,r.r2)(e.id).then((t=>{const a=t.data.data,i=a.activityConfigInfos.reduce(((e,t)=>(e[t.code]=t.value,e)),{});z({title:"编辑活动",data:{title:a.title,type:a.type,timeRange:[a.startTime,a.endTime],description:"",i18nContents:a.i18nContents,prizeList:a.prizeList,status:a.status,activityCode:a.activityCode,imageUrl:a.imageUrl,...i},config:a.activityConfigInfos,templateId:a.templateId,idDisabled:!0,id:e.id},!1)}))},B=async e=>{u.T.confirm("确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,r.cC)(e.id).then((e=>{(0,c.bM)({title:"提示",position:"bottom-right",message:"操作成功",type:"success"}),D({})}))})).catch((()=>{}))},P=e=>{1===e.isShow?u.T.confirm("营销活动只能展示1个活动，是否设置该活动为展示?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,r.cZ)({id:e.id,show:1}).then((e=>{"0"===e.data.code?(0,c.bM)({type:"success",message:"修改成功",position:"bottom-right"}):(0,c.bM)({type:"error",message:e.data.msg,position:"bottom-right"}),D({})}))})).catch((()=>{e.show=0})):(0,r.cZ)({id:e.id,show:0}).then((e=>{"0"===e.data.code?(0,c.bM)({type:"success",message:"修改成功",position:"bottom-right"}):(0,c.bM)({type:"error",message:e.data.msg,position:"bottom-right"}),D({})}))},U=()=>{},q=e=>{const t=e;if(t.length<w){const e=w-t.length;for(let a=0;a<e;a++)t.push({id:"",poolId:"",prizeName:"",prizeType:1,prizeAmount:"0",defaultPrize:"",maxQuantity:0,odds:0,image:""})}return t},$=e=>e.filter((e=>"default"===e.id));return(e,t)=>{const r=(0,i.up)("el-switch"),s=(0,i.up)("el-dropdown-item"),p=(0,i.up)("el-dropdown-menu"),c=(0,i.up)("el-dropdown"),u=(0,i.up)("el-button"),g=(0,i.up)("avue-crud"),h=(0,i.up)("el-card");return(0,i.wg)(),(0,i.iD)("div",{class:(0,n.normalizeClass)(["app-container",{"h-90vh":!(0,l.unref)(d.r8)}])},[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{ref_key:"tableRef",ref:a,page:(0,l.unref)(v),"onUpdate:page":t[0]||(t[0]=e=>(0,l.isRef)(v)?v.value=e:null),"table-loading":(0,l.unref)(m),option:(0,l.unref)(f),data:(0,l.unref)(k),onSearchChange:W,onSearchReset:U,onSizeChange:(0,l.unref)(C),onCurrentChange:(0,l.unref)(T)},{createTime:(0,i.w5)((({row:e})=>[(0,i._)("div",null,(0,n.toDisplayString)(M(e.createTime)),1)])),startTime:(0,i.w5)((({row:e})=>[(0,i._)("div",null,(0,n.toDisplayString)(M(e.startTime)),1)])),endTime:(0,i.w5)((({row:e})=>[(0,i._)("div",null,(0,n.toDisplayString)(M(e.endTime)),1)])),type:(0,i.w5)((({row:e})=>[(0,i._)("div",null,(0,n.toDisplayString)(R.value.find((t=>t.value===e.type))?.label),1)])),status:(0,i.w5)((({row:e})=>[(0,i._)("div",null,(0,n.toDisplayString)(S(e)),1)])),url:(0,i.w5)((({row:e})=>[(0,i._)("a",{href:x.value+`?id=${e.id}`,target:"_blank"},(0,n.toDisplayString)(x.value+`?id=${e.id}`),9,y)])),isShow:(0,i.w5)((({row:e})=>[0==e.isShow||1==e.isShow?((0,i.wg)(),(0,i.j4)(r,{key:0,"inactive-value":0,"active-value":1,modelValue:e.isShow,"onUpdate:modelValue":t=>e.isShow=t,onChange:t=>P(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])):(0,i.kq)("",!0)])),"menu-left":(0,i.w5)((()=>[(0,i.Wm)(c,{"split-button":"",type:"primary"},{dropdown:(0,i.w5)((()=>[(0,i.Wm)(p,{"split-button":""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(R.value,((e,t)=>((0,i.wg)(),(0,i.j4)(s,{key:t,onClick:t=>H(e)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.toDisplayString)(e?.label),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:(0,i.w5)((()=>[(0,i.Uk)(" 新增活动 ")])),_:1})])),menu:(0,i.w5)((({row:e})=>[(0,i.Wm)(u,{type:"primary",icon:"el-icon-edit",onClick:(0,o.iM)((t=>L(e)),["stop"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 编辑")])),_:2},1032,["onClick"]),0===e.status?((0,i.wg)(),(0,i.j4)(u,{key:0,type:"primary",icon:"el-icon-edit",onClick:(0,o.iM)((t=>B(e)),["stop"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 删除 ")])),_:2},1032,["onClick"])):(0,i.kq)("",!0)])),_:1},8,["page","table-loading","option","data","onSizeChange","onCurrentChange"])])),_:1})],2)}}};const C=v;var T=C}}]);