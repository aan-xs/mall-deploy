System.register(["./index-legacy-8819b039.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.X}],execute:function(){e("a",(e=>a({url:"/wap/api/newOnlinechat!list.action",method:"GET",params:{message_id:e.message_id||"",show_img:e.show_img||!0}}))),e("_",(()=>a({url:"/wap/api/newOnlinechat!unread.action",method:"GET"}))),e("b",((e="text",t="")=>a({url:"/wap/api/newOnlinechat!send.action",method:"GET",params:{type:e,content:t}})))}}}));