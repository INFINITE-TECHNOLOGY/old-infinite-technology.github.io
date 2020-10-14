(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{337:function(t,e,n){"use strict";n.r(e);n(85),n(29),n(38);var o=n(21),r=n(174),c=n(127),h=n(13),l={components:{OptionSelector:c.default,Authorizer:r.default},props:{scopeName:void 0},data:function(){return{prototypeAuthorization:void 0,authorization:void 0,authorized:!1,disabled:void 0}},methods:{inquire:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios({method:"get",url:"".concat("https://ascend-remit.herokuapp.com","/ascend/public/granting/inquire?scopeName=").concat(t,"&serverNamespace=OrbitSaaS"),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},getAuthorizationList:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.inquire(t);case 2:if(r=n.sent,null===(o=r.data)||void 0===o?void 0:o.length){n.next=7;break}throw"No suitable prototype authorizations found for scope name '".concat(t,"'");case 7:return n.abrupt("return",r.data);case 8:case"end":return n.stop()}}),n)})))()},logAuth:function(){this.$authorizationRepository.forEach((function(t){console.log(t.guid),console.log(t.name),console.log(t.expiryDate),console.log(new Date+1e4),console.log(Date.parse(t.expiryDate)>(new Date).getUTCDate()+1e4),console.log(t.scopes.find((function(t){return t.name===t.scopeName}))),t.scopes.forEach((function(t){console.log(t.name)}))}))},grantByScope:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===t.$authorizationRepository.find((function(e){return void 0!==e.scopes.find((function(e){return e.name===t.scopeName}))&&Date.parse(e.expiryDate)>(new Date).getUTCDate()+1e4}))?(t.unauthorize(),n=t,h.default.nextTick((function(){n.getAuthorizationList(n.scopeName).then((function(t){n.$refs.AuthorizationSelector.selectOption(t).then((function(t){n.prototypeAuthorization=t,n.$refs.Authorizer.authorize(n.prototypeAuthorization).then((function(t){n.authorization=t,n.authorize()}))}))}))}))):t.authorize();case 2:case"end":return e.stop()}}),e)})))()},authorize:function(){this.$eventBus.$emit("authorize"),this.authorized=!0},unauthorize:function(){this.$eventBus.$emit("unauthorize"),this.authorized=!1}},mounted:function(){var t=this;this.disabled||(this.grantByScope(),setInterval((function(){t.authorized&&t.grantByScope()}),3e3))}},d=n(20),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.authorized||this.disabled?e("div",[this._t("default")],2):e("div",[e("OptionSelector",{ref:"AuthorizationSelector",attrs:{label:"Authorization"}}),this._v(" "),e("Authorizer",{ref:"Authorizer"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OptionSelector:n(127).default,Authorizer:n(174).default})},414:function(t,e,n){"use strict";n.r(e);var o={layout:"withHeader",components:{Authorized:n(337).default},methods:{}},r=n(20),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"indigo-gradient",staticStyle:{height:"100vh"}},[e("Authorized",{attrs:{scopeName:"registeredUserScope"}},[e("div",{staticClass:"container container-main"},[e("div",[e("div",{staticStyle:{width:"300px"}}),this._v(" "),e("h2",{staticClass:"text-center text-white"},[this._v("\n          Settings\n        ")]),this._v(" "),e("hr"),this._v(" "),e("b-button",{staticStyle:{width:"100%"},attrs:{variant:"outline-white",to:"main"}},[e("span",{staticClass:"float-left"},[e("font-awesome-icon",{attrs:{icon:["fas","cog"],size:"1x"}})],1),this._v("\n          Menu\n        ")])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Authorized:n(337).default})}}]);