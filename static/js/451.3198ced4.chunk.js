(self.webpackChunkuse_wallet_example=self.webpackChunkuse_wallet_example||[]).push([[451],{1187:function(t,e,r){t.exports=r(9640)},9640:function(t,e,r){var n=r(6690).default,i=r(9728).default,s=function(){"use strict";function t(e,r){n(this,t),this.channelName=e,this.onMessage=r,this._installListener(),this._requests=new Map,this._nextId=0,this._defaultTimeout=4e3}return i(t,[{key:"_installListener",value:function(){var t=this;this._listener=function(e){if(e.data&&"string"===typeof e.data){var r;try{if(!(r=JSON.parse(e.data)).channel||r.channel!==t.channelName)return;if("object"!==typeof r.message)return}catch(a){return}if("undefined"!==typeof r.replyId){if("number"!==typeof r.replyId||r.replyId%1!==0)return;var n=t._requests.get(r.replyId);if(n){if(e.origin!==n.targetOrigin)return;clearTimeout(n.timeout),t._requests.delete(r.replyId),n.resolve(r.message)}}else{if("number"!==typeof r.id||r.id%1!==0||!t.onMessage)return;var i=t.channelName,s=r.id,o=e.origin;t.onMessage(r.message,e.origin,e.source,(function(t){var r={channel:i,replyId:s,message:t};e.source.postMessage(JSON.stringify(r),o)}),t)}}},window.addEventListener("message",this._listener)}},{key:"sendMessage",value:function(t,e,r,n){var i;try{i=new URL(r).origin}catch(a){throw new Error("Invalid origin URL")}var s={channel:this.channelName,id:this.getNextId(),message:e};if(n&&n.waitForReply){var o=this;return new Promise((function(e,r){var a=setTimeout((function(){o._requests.get(s.id)&&(o._requests.delete(s.id),r(new Error("Timeout expired for the message response")))}),n&&n.timeout?n.timeout:o._defaultTimeout);o._requests.set(s.id,{timeout:a,resolve:e,targetOrigin:i}),t.postMessage(JSON.stringify(s),i)}))}t.postMessage(JSON.stringify(s),i)}},{key:"close",value:function(){window.removeEventListener("message",this._listener),this._listener=null,delete this._requests}},{key:"getNextId",value:function(){return this._nextId+=1,this._nextId}}]),t}();t.exports=s},4451:function(t,e,r){t.exports=r(6478)},6478:function(t,e,r){var n=r(9778).Buffer,i=r(4704).default,s=r(7061).default,o=r(7156).default,a=r(6690).default,u=r(9728).default,c=r(5253).openPopup,p=r(6531),l=p.sleep,h=p.prepareTxn,g=r(4233),d=r(6151),f=null,w=function(){"use strict";function t(e){a(this,t),f||(f=new d),this.bridge=f,this.timeout=e&&e.timeout?e.timeout:16e5,this.url=e&&e.bridgeUrl?e.bridgeUrl:"https://wallet.myalgo.com/bridge",this.url.endsWith("/")&&(this.url=this.url.slice(0,-1)),this.currentConnectPopup=null,this.currentSigntxPopup=null,this.currentSignLogicSigPopup=null,this.currentTealSignPopup=null,this.currentSignBytesPopup=null,this.options={waitForReply:!0,timeout:this.timeout},this.disableLedgerNano=!(!e||!e.disableLedgerNano)&&e.disableLedgerNano}return u(t,[{key:"connect",value:function(){var t=o(s().mark((function t(){var e,r,n=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{shouldSelectOneAccount:!1,openManager:!1},this.currentConnectPopup&&(this.currentConnectPopup.closed?this.currentConnectPopup=null:this.focusWindow(this.currentConnectPopup)),t.prev=2,this.currentConnectPopup=c(this.url+"/connect.html"),t.next=6,this.waitForWindowToLoad(this.currentConnectPopup);case 6:return t.next=8,this.bridge.sendMessage(this.currentConnectPopup,{method:"unlock",params:Object.assign(e,{disableLedgerNano:this.disableLedgerNano})},this.url,this.options);case 8:if(r=t.sent,this.closeWindow(this.currentConnectPopup),this.currentConnectPopup=null,"error"!==r.status){t.next=13;break}throw new Error(r.message);case 13:return t.abrupt("return",r.data.accounts);case 16:throw t.prev=16,t.t0=t.catch(2),this.closeWindow(this.currentConnectPopup),this.currentConnectPopup=null,t.t0;case 21:case"end":return t.stop()}}),t,this,[[2,16]])})));return function(){return t.apply(this,arguments)}}()},{key:"signTransaction",value:function(){var t=o(s().mark((function t(e,r){var o,a,u,p,l,g;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentSigntxPopup&&(this.currentSigntxPopup.closed?this.currentSigntxPopup=null:this.focusWindow(this.currentSigntxPopup)),o=Array.isArray(e)?Array.from(e).map((function(t){return h(t)})):h(e),t.prev=2,this.currentSigntxPopup=c(this.url+"/signtx.html"),t.next=6,this.waitForWindowToLoad(this.currentSigntxPopup);case 6:return t.next=8,this.bridge.sendMessage(this.currentSigntxPopup,{method:"transaction",params:{txn:o,settings:{disableLedgerNano:this.disableLedgerNano},options:r}},this.url,this.options);case 8:if(a=t.sent,this.closeWindow(this.currentSigntxPopup),this.currentSigntxPopup=null,"error"!==a.status){t.next=13;break}throw new Error(a.message);case 13:if(!Array.isArray(a.data)){t.next=18;break}u=[],p=i(a.data);try{for(p.s();!(l=p.n()).done;)(g=l.value).blob=new Uint8Array(n.from(g.blob,"hex")),u.push(g)}catch(s){p.e(s)}finally{p.f()}return t.abrupt("return",u);case 18:return a.data.blob=new Uint8Array(n.from(a.data.blob,"hex")),t.abrupt("return",a.data);case 22:throw t.prev=22,t.t0=t.catch(2),this.closeWindow(this.currentSigntxPopup),this.currentSigntxPopup=null,t.t0;case 27:case"end":return t.stop()}}),t,this,[[2,22]])})));return function(e,r){return t.apply(this,arguments)}}()},{key:"signLogicSig",value:function(){var t=o(s().mark((function t(e,r){var i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentSignLogicSigPopup&&(this.currentSignLogicSigPopup.closed?this.currentSignLogicSigPopup=null:this.focusWindow(this.currentSignLogicSigPopup)),t.prev=1,this.currentSignLogicSigPopup=c(this.url+"/logicsigtx.html"),t.next=5,this.waitForWindowToLoad(this.currentSignLogicSigPopup);case 5:return i=e,e.constructor===Uint8Array&&(i=n.from(e).toString("base64")),t.next=9,this.bridge.sendMessage(this.currentSignLogicSigPopup,{method:"logicsig",params:{logic:i,address:r}},this.url,this.options);case 9:if(o=t.sent,this.closeWindow(this.currentSignLogicSigPopup),this.currentSignLogicSigPopup=null,"error"!==o.status){t.next=14;break}throw new Error(o.message);case 14:return t.abrupt("return",new Uint8Array(n.from(o.data.signedTeal,"base64")));case 17:throw t.prev=17,t.t0=t.catch(1),this.closeWindow(this.currentSignLogicSigPopup),this.currentSignLogicSigPopup=null,t.t0;case 22:case"end":return t.stop()}}),t,this,[[1,17]])})));return function(e,r){return t.apply(this,arguments)}}()},{key:"tealSign",value:function(){var t=o(s().mark((function t(e,r,i){var o,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentTealSignPopup&&(this.currentTealSignPopup.closed?this.currentTealSignPopup=null:this.focusWindow(this.currentTealSignPopup)),t.prev=1,this.currentTealSignPopup=c(this.url+"/tealsign.html"),t.next=5,this.waitForWindowToLoad(this.currentTealSignPopup);case 5:return o=e,e.constructor===Uint8Array&&(o=n.from(e).toString("base64")),t.next=9,this.bridge.sendMessage(this.currentTealSignPopup,{method:"tealsign",params:{data:o,contractAddress:r,address:i}},this.url,this.options);case 9:if(a=t.sent,this.closeWindow(this.currentTealSignPopup),this.currentTealSignPopup=null,"error"!==a.status){t.next=14;break}throw new Error(a.message);case 14:return t.abrupt("return",new Uint8Array(n.from(a.data.signature,"base64")));case 17:throw t.prev=17,t.t0=t.catch(1),this.closeWindow(this.currentTealSignPopup),this.currentTealSignPopup=null,t.t0;case 22:case"end":return t.stop()}}),t,this,[[1,17]])})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"signBytes",value:function(){var t=o(s().mark((function t(e,r){var i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.currentSignBytesPopup&&(this.currentSignBytesPopup.closed?this.currentSignBytesPopup=null:this.focusWindow(this.currentSignBytesPopup)),t.prev=1,this.currentSignBytesPopup=c(this.url+"/signbytes.html"),t.next=5,this.waitForWindowToLoad(this.currentSignBytesPopup);case 5:return i=n.from(e).toString("base64"),t.next=8,this.bridge.sendMessage(this.currentSignBytesPopup,{method:"signbytes",params:{data:i,address:r}},this.url,this.options);case 8:if(o=t.sent,this.closeWindow(this.currentSignBytesPopup),this.currentSignBytesPopup=null,"error"!==o.status){t.next=13;break}throw new Error(o.message);case 13:return t.abrupt("return",new Uint8Array(n.from(o.data.signature,"base64")));case 16:throw t.prev=16,t.t0=t.catch(1),this.closeWindow(this.currentSignBytesPopup),this.currentSignBytesPopup=null,t.t0;case 21:case"end":return t.stop()}}),t,this,[[1,16]])})));return function(e,r){return t.apply(this,arguments)}}()},{key:"waitForWindowToLoad",value:function(){var t=o(s().mark((function t(e){var r,n,i=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.length>1&&void 0!==i[1]?i[1]:30,n=0;case 2:if(!(n<r)){t.next=20;break}return t.next=5,l(300);case 5:if(e){t.next=7;break}return t.abrupt("break",20);case 7:return t.prev=7,t.next=10,f.sendMessage(e,{method:"status"},this.url);case 10:if("success"!=t.sent.status){t.next=13;break}return t.abrupt("return");case 13:t.next=17;break;case 15:t.prev=15,t.t0=t.catch(7);case 17:n++,t.next=2;break;case 20:throw new Error(g.WINDOW_NOT_LOADED);case 21:case"end":return t.stop()}}),t,this,[[7,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"closeWindow",value:function(t){t&&!t.closed&&t.close&&t.close()}},{key:"focusWindow",value:function(t){throw t&&t.focus?(t.focus(),new Error(g.WINDOW_IS_OPENED)):new Error(g.INVALID_WINDOW)}}]),t}();t.exports=w},6151:function(t,e,r){var n=r(6690).default,i=r(9728).default,s=r(1187),o=function(){"use strict";function t(e){n(this,t);var r=this;this.options={waitForReply:!0,timeout:250},this.listenerCallback=e,this.bridge=new s("wallet-bridge-communication-channel",(function(t,e,n,i){r.listenerCallback&&r.listenerCallback(t,n)}))}return i(t,[{key:"sendMessage",value:function(t,e,r,n){return this.bridge.sendMessage(t,e,r,n||this.options)}},{key:"setNewListener",value:function(t){this.listenerCallback=t}},{key:"close",value:function(){this.bridge.close()}}]),t}();t.exports=o},5253:function(t,e,r){var n=r(4233).WINDOW_NOT_OPENED,i={width:400,height:600};t.exports={openPopup:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r=e,s=r.name,o=void 0===s?"":s,a=r.width,u=r.height,c=r.top,p=void 0===c?0:c,l=r.left,h=void 0===l?0:l;a&&(window.outerWidth?h=Math.round((window.outerWidth-a)/2)+window.screenX:window.screen.width&&(h=Math.round((window.screen.width-a)/2))),u&&(window.outerHeight?p=Math.round((window.outerHeight-u)/2)+window.screenY:window.screen.height&&(p=Math.round((window.screen.height-u)/2))),a&&u&&(e={top:p,left:h,width:a,height:u,status:1,toolbar:0,menubar:0,resizable:1,scrollbars:1});var g,d=Object.keys(e).map((function(t){var r=e[t];if(null!==r&&void 0!==r&&"function"===typeof r.toString)return"".concat(t,"=").concat(r.toString())})).filter(Boolean).join(",");try{g=window.open(t,o,d)}catch(f){throw new Error("".concat(n," - ").concat(f.stack||f.message))}if(!g||window.closed)throw new Error("".concat(n," - blocked"));return g}}},4233:function(t){t.exports={WINDOW_NOT_LOADED:"Window not loaded",WINDOW_IS_OPENED:"Windows is opened",WINDOW_NOT_OPENED:"Can not open popup window",INVALID_WINDOW:"Invalid window"}},6531:function(t,e,r){var n=r(9778).Buffer;t.exports={sleep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;return new Promise((function(e){return setTimeout(e,t)}))},prepareTxn:function(t){if(t.constructor===Uint8Array)return n.from(t).toString("base64");if("string"===typeof t)return t;var e=Object.assign({},t);if(e.note&&e.note.constructor===Uint8Array&&(e.note=n.from(e.note).toString("base64")),e.assetMetadataHash&&e.assetMetadataHash.constructor===Uint8Array&&(e.assetMetadataHash=n.from(e.assetMetadataHash).toString("base64")),e.group&&e.group.constructor===Uint8Array&&(e.group=n.from(e.group).toString("base64")),"appl"===e.type&&e.appApprovalProgram&&e.appApprovalProgram.constructor===Uint8Array&&(e.appApprovalProgram=n.from(e.appApprovalProgram).toString("base64")),"appl"===e.type&&e.appClearProgram&&e.appClearProgram.constructor===Uint8Array&&(e.appClearProgram=n.from(e.appClearProgram).toString("base64")),"appl"===e.type&&e.appArgs&&e.appArgs.length>0)for(var r=0;r<e.appArgs.length;r++)e.appArgs[r].constructor===Uint8Array&&(e.appArgs[r]=n.from(e.appArgs[r]).toString("base64"));return e}}}}]);
//# sourceMappingURL=451.3198ced4.chunk.js.map