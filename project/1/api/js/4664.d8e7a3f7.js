"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[4664],{78169:function(t,a,s){s.r(a),s.d(a,{default:function(){return g}});s(73927);var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"page-content"},[t.currentData?a("cancel-dialog",{attrs:{"dialog-show":t.cancelShow,"dialog-data":t.currentData},on:{"update:dialogShow":function(a){t.cancelShow=a},"update:dialog-show":function(a){t.cancelShow=a},done:()=>t.$router.back()}}):t._e(),t.currentData?a("reminds-dialog",{attrs:{"dialog-show":t.remindShow,"dialog-data":t.currentData},on:{"update:dialogShow":function(a){t.remindShow=a},"update:dialog-show":function(a){t.remindShow=a}}}):t._e(),a("van-nav-bar",{attrs:{"safe-area-inset-top":"",fixed:"",title:t.$t("订单详情"),"left-arrow":""},on:{"click-left":()=>t.$router.push({path:"/order",dir:"left",query:{type:t.$route.query.index}})}}),a("div",{staticStyle:{width:"100%",height:"46px"}}),t.currentData?a("div",{staticClass:"info-content"},[a("div",{staticClass:"order-info-content"},[a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("流水号"))+"：")]),a("div",[a("div",{staticClass:"copy",on:{click:function(a){return t.copyHandle(t.currentData.id)}}},[a("span",{staticClass:"nowrap",staticStyle:{width:"200px"}},[t._v(t._s(t.currentData.id))]),a("img",{attrs:{src:t.copyIcon,alt:""}})]),a("p",{staticClass:"tips"},[t._v(t._s(t.$formatZoneDate(t.currentData.createTime)))])])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("收件地址"))+"：")]),a("div",[a("p",[t._v(" "+t._s(t.currentData.postcode)+" "+t._s(t.currentData.province)+" "+t._s(t.currentData.city)+" ")]),a("p",[t._v(t._s(t.currentData.country))]),a("p",[t._v(t._s(t.currentData.address))]),a("p",[t._v(t._s(t.currentData.contacts))]),a("p",[t._v(" "+t._s(t.currentData.phone?.indexOf("|")>-1?t.currentData.phone.split("|")[1]:t.currentData.phone)+" ")])])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("商品数量"))+"：")]),a("div",[t._v(t._s(t.goodsTotalNum))])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("订单总额"))+"：")]),a("div",{staticClass:"money"},[t._v(" $"+t._s(t.priceFormat(t.totalPrice+t.currentData.tax+t.currentData.fees))+" ")])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("税费"))+"：")]),a("div",{staticClass:"money"},[t._v("$"+t._s(t.currentData.tax?t.priceFormat(t.currentData.tax):"0.00"))])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("运费"))+"：")]),a("div",{staticClass:"money"},[t._v("$"+t._s(t.currentData.fees?t.priceFormat(t.currentData.fees):"0.00"))])]),a("div",{staticClass:"item"},[a("p",{staticClass:"p80"},[t._v(t._s(t.$t("总金额"))+"：")]),a("div",{staticClass:"money"},[t._v(" $"+t._s(t.priceFormat(t.$plus(t.$plus(t.totalPrice,t.currentData.tax),t.currentData.fees)))+" ")])])]),t.currentData?a("div",{staticClass:"goods-info-content"},t._l(t.goodsData,(function(s,e){return a("div",{key:e,staticClass:"order-info-content"},[a("div",{staticClass:"goods-item",on:{click:function(a){return t.repeatPurchase(s)}}},[a("div",{staticClass:"poster"},[a("img",{attrs:{src:s.goodsIcon,alt:""}})]),a("div",{staticClass:"name"},[a("div",{staticClass:"title"},[t._v(t._s(s.goodsName))]),s.attributes?a("div",{},t._l(s.attributes,(function(s,e){return s.attrName&&s.attrValue?a("span",{key:e,staticClass:"attribute"},[t._v(" "+t._s(s.attrName)+":"+t._s(s.attrValue))]):t._e()})),0):t._e()])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("数量"))+"：")]),a("div",[t._v(t._s(s.goodsNum))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("单价"))+"：")]),a("div",{staticClass:"money"},[t._v("$"+t._s(t.priceFormat(s.goodsReal)))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("总价"))+"：")]),a("div",{staticClass:"money"},[t._v(" $"+t._s(t.priceFormat(t.$operation(s.goodsReal,s.goodsNum,"times")))+" ")])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("税费"))+"：")]),a("div",{staticClass:"money"},[t._v("$"+t._s(s.tax?t.priceFormat(s.tax):"0.00"))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("运费"))+"：")]),a("div",{staticClass:"money"},[t._v("$"+t._s(s.fees?t.priceFormat(s.fees):"0.00"))])]),a("div",{staticClass:"item"},[a("p",[t._v(t._s(t.$t("总计"))+"：")]),a("div",{staticClass:"money"},[t._v(" "+t._s(t.priceFormat(s.goodsReal*s.goodsNum+s.tax+s.fees))+" ")])])])})),0):t._e()]):t._e(),t.currentData&&-1!==Number(t.currentData.status)?a("div",{staticClass:"page-footer"},[0===Number(t.currentData.status)?a("div",{staticClass:"btn",on:{click:function(a){t.cancelShow=!0}}},[t._v(" "+t._s(t.$t("取消订单"))+" ")]):t._e(),0===Number(t.currentData.status)?a("div",{staticClass:"btn color",on:{click:function(a){return t.openPeddingPay(t.currentData)}}},[t._v(" "+t._s(t.$t("立即付款"))+" ")]):t._e(),1===Number(t.currentData.status)?a("div",{staticClass:"btn color",on:{click:function(a){return t.remindHandle(t.currentData)}}},[t._v(" "+t._s(t.$t("提醒发货"))+" ")]):t._e(),3===Number(t.currentData.status)?a("div",{staticClass:"btn",on:{click:function(a){return t.openPage("/orderRefund",{id:t.currentData.id,a:t.currentData.prizeReal})}}},[t._v(" "+t._s(t.$t("申请退货"))+" ")]):t._e(),3===Number(t.currentData.status)?a("div",{staticClass:"btn color",on:{click:function(a){return t.orderPick(t.currentData)}}},[t._v(" "+t._s(t.$t("确认收货"))+" ")]):t._e(),Number(t.currentData.status)>0?a("div",{staticClass:"btn",on:{click:function(a){return t.openPage("/order/logistics",{id:t.currentData.id})}}},[t._v(" "+t._s(t.$t("查看物流"))+" ")]):t._e(),4===Number(t.currentData.status)?a("div",{staticClass:"btn",on:{click:function(a){return t.openPage("/orderEvaluate",{id:t.currentData.id})}}},[t._v(" "+t._s(t.$t("立即评价"))+" ")]):t._e(),6===Number(t.currentData.status)?a("div",{staticClass:"tips"},[Boolean(t.$route.query.returnStatus)?t._e():a("span",[t._v(t._s(t.$t("未退款"))+" ")]),1===Number(t.$route.query.returnStatus)?a("span",{staticClass:"running"},[t._v(t._s(t.$t("退款中")))]):t._e(),2===Number(t.$route.query.returnStatus)?a("span",{staticClass:"success"},[t._v(t._s(t.$t("退款成功")))]):t._e(),3===Number(t.$route.query.returnStatus)?a("span",{staticClass:"fail"},[t._v(t._s(t.$t("退款失败")))]):t._e()]):t._e()]):t._e()],1)},r=[],i=(s(2605),s(81388)),o=(s(43635),s(93407)),n=(s(59144),s(30296)),c=s(69208),u=s(73941),d=s(17223),l=s(90021),_=s(14534),p={name:"OrderDetails",components:{[n.Z.name]:n.Z,[o.Z.name]:o.Z,[i.Z.name]:i.Z,CancelDialog:c.Z,RemindsDialog:u.Z},data(){return{copyIcon:s(78481),cancelShow:!1,remindShow:!1,currentData:null,orderId:null,totalPrice:0,goodsData:[],timezone:""}},computed:{goodsTotalNum(){let t=0;return this.goodsData.forEach((a=>{t+=a.goodsNum})),t}},mounted(){this.$nextTick((()=>{const{id:t}=this.$route.query;t?(this.orderId=t,this.getDataInfo(),this.getOrderGoods()):((0,o.Z)(this.$t("订单号不存在")),setTimeout((()=>{this.$router.back()}),1500))})),this.timezone=localStorage.getItem("timeZone")},methods:{repeatPurchase(t){if(1!=t?.isShelf||1!=t?.isValid)return this.$notify(this.$t("该商品已下架"),"warning");this.$router.push("/CommodityDetails?sellerGoodsId="+t.goodsId)},time(t){let a=this.dayjs;return a().tz(this.timezone).format(t)},priceFormat(t){return(0,d.XY)(t)},copyHandle(t){this.$copyText(t).then((()=>{(0,o.Z)(this.$t("复制成功"))}),(()=>{(0,o.Z)(this.$t("复制失败"))}))},getDataInfo(){o.Z.loading({duration:0,forbidClick:!0}),(0,l.nJ)({orderId:this.orderId,type:1}).then((t=>{this.currentData=t.orderInfo,o.Z.clear()})).catch((()=>{o.Z.clear()}))},getOrderGoods(){(0,l.K7)({orderId:this.orderId}).then((t=>{this.goodsData=t.pageList||[],this.goodsData.forEach((t=>{this.totalPrice+=t.goodsReal*t.goodsNum}))}))},openPeddingPay(t){const a=[{orderList:t.id}];this.$router.push({path:"/PendingPayment",query:{orderList:JSON.stringify(a),total:this.$operation(t.discountPrice,t.goodsCount,"times")||this.$operation(t.priceReal,t.goodsCount,"times")}})},remindHandle(t){const a=localStorage.getItem("remindStore")?JSON.parse(localStorage.getItem("remindStore")):[];a.includes(t.id)?(0,o.Z)(this.$t("该订单已提醒过啦~")):this.remindShow=!0},openPage(t,a){const s={path:t};a&&(s.query=a),this.$router.push(s)},orderPick(t){i.Z.confirm({title:this.$t("提示"),message:this.$t("确认收货吗？"),confirmButtonText:this.$t("确认"),cancelButtonText:this.$t("取消")}).then((()=>{o.Z.loading({duration:0,message:this.$t("提交中"),forbidClick:!0});const a={orderId:t.id};(0,l.lI)(a).then((()=>{o.Z.clear(),this.currentData=null,this.getDataInfo()})).catch((()=>{o.Z.clear()}))})).catch((()=>{_.log("cancel")}))}}},m=p,v=s(80062),h=(0,v.Z)(m,e,r,!1,null,"e957a374",null),g=h.exports}}]);