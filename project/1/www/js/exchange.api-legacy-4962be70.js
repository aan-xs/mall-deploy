System.register(["./index-legacy-8819b039.js"],(function(a,t){"use strict";var e,i;return{setters:[a=>{e=a.X,i=a.Y}],execute:function(){a("a",(()=>e({url:"/wap/api/channelBlockchain!list.action",method:i.POST,loadingPass:!0}))),a("e",(a=>e({url:"/wap/api/withdraw!fee.action",method:i.POST,loadingPass:!0,data:a}))),a("c",(a=>e({url:"/wap/api/withdraw!withdraw_open.action",method:i.POST,data:a,loadingPass:!0}))),a("d",(a=>e({url:"/wap/api/withdraw!apply.action",method:i.POST,data:a}))),a("h",(a=>e({url:"/wap/api/rechargeBlockchain!recharge_open.action",method:i.POST,data:a,loadingPass:!0}))),a("g",(a=>e({url:"/wap/api/rechargeBlockchain!recharge.action",method:i.POST,data:a}))),a("k",(a=>e({url:"/wap/api/rechargeBlockchain!list.action",method:i.POST,data:a}))),a("r",(a=>e({url:"/wap/api/rechargeBlockchain!get.action",method:i.POST,data:a}))),a("f",(a=>e({url:"/wap/api/withdraw!list.action",method:i.POST,data:a}))),a("w",(a=>e({url:"/wap/api/withdraw!get.action",method:i.POST,data:a}))),a("b",(a=>e({url:"/wap/api/user!bindWithdrawAddress.action",method:i.POST,data:a}))),a("t",(a=>e({url:"/wap/api/thirdPartyRecharge!getCoinList.action",method:i.POST,data:a}))),a("j",(a=>e({url:"/wap/api/thirdPartyRecharge!recharge.action",method:i.POST,data:a}))),a("i",((a,t="PHP_recharge")=>e({url:`/wap/api/thirdPartyRecharge!${t}.action`,method:i.POST,data:a})))}}}));