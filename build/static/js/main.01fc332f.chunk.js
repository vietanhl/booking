(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[2],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(75),n(9)),l=(n(76),n(15)),u=n(5),s=n(10),m=n(18),d=n.n(m),f=n(108),h=d()({loader:function(){return n.e(8).then(n.bind(null,340))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),p=d()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(12)]).then(n.bind(null,332))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),g=d()({loader:function(){return n.e(14).then(n.bind(null,326))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),v=d()({loader:function(){return n.e(15).then(n.bind(null,327))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),E=d()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,336))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),b=d()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(10)]).then(n.bind(null,334))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),k=d()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,338))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),w=d()({loader:function(){return n.e(13).then(n.bind(null,329))},loading:function(){return r.a.createElement(f.a,{color:"dark"})}}),S=n(23),y=n(21);function I(){var e=Object(i.a)(["\n  background-color: white;\n"]);return I=function(){return e},e}function O(){var e=Object(i.a)(["\n  text-align: center;\n  list-style: none;\n  font-family: 'Abril Fatface', cursive;\n  background-color: white;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  color: #282c34;\n"]);return O=function(){return e},e}var _=n(69).SocialIcon,A=s.a.div(O()),x=s.a.p(I()),j=function(){return r.a.createElement(A,null,r.a.createElement(S.a,null),r.a.createElement(x,null,r.a.createElement(_,{url:y.f,style:{marginRight:"20px"}}),r.a.createElement(_,{network:"email",onClick:function(){window.open("mailto:".concat(y.e))},style:{marginRight:"20px"}}),r.a.createElement("b",null,"\xa9 ",y.c," - January 2020")))},D=n(29),P=function(e){return Object(a.useEffect)((function(){if(!/access_token|id_token|error/.test(e.location.hash))throw new Error("Invalid callback URL.");console.log(e.auth),e.auth.handleAuthentication()}),[e.auth,e.location.hash]),r.a.createElement("div",null,r.a.createElement("p",null,"Loading ..."))},N=n(44),T=n(19),L=n.n(T),U=n(22),B=n(33),F=n(42),R=n(39),z=n.n(R),J=(n(87),n(45)),q=n.n(J),C=n(47),W=function(){var e=Object(U.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,a=function(){var e=Object(U.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("".concat(C.c,"/").concat(t)).then((function(e){n=e.data})).catch((function(e){console.log("error "+e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=4,a();case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=Object(F.b)(z.a),n=new Date,o=Object(a.useState)(n.toISOString().substring(10,0)),c=Object(B.a)(o,2),i=c[0],l=c[1],u=Object(a.useState)([{id:15,title:"1Treatment",start:n,end:n,employee:"test"}]),s=Object(B.a)(u,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){function e(){return(e=Object(U.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(i);case 2:t=e.sent,n=t.map((function(e){return{id:parseInt(e.ID),title:e.Info.Client.FirstName,start:new Date(e.Info.StartTime),end:new Date(e.Info.EndTime),employee:e.EmployeeId}})),d(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),r.a.createElement("div",{style:{height:"800px",width:"1000px",fontSize:"10px"}},r.a.createElement(F.a,{localizer:t,events:m,startAccessor:"start",endAccessor:"end",defaultDate:z()().toDate(),defaultView:"day",dayLayoutAlgorithm:"overlap",timeslots:5,formats:{dateFormat:"D",weekdayFormat:"dddd"},min:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),9),max:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),18),step:12,eventPropGetter:function(e){return{style:{backgroundColor:"5eb603958451d805f9e3215e"!==e.employee?"#3174ad":"#ad4ca4",width:"10%"}}},onNavigate:function(e,t){l(e.toISOString().substring(10,0))}}))},H=n(46),M=function(e){var t=new D.a(e.history);return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,Object.assign({auth:t},e)),r.a.createElement(N.a,{title:"Booking Management"}),r.a.createElement(Y,e))};function K(){var e=Object(i.a)(["\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: calc(15px + 1vmin);\n  color: #282c34;\n"]);return K=function(){return e},e}function Q(){var e=Object(i.a)([""]);return Q=function(){return e},e}s.a.div(Q());var G=s.a.body(K()),V=function(e){var t=new D.a(e.history);return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,r.a.createElement(l.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:function(e){return r.a.createElement(h,Object.assign({auth:t},e))}}),r.a.createElement(u.b,{path:"/home",component:function(e){return r.a.createElement(h,Object.assign({auth:t},e))}}),r.a.createElement(u.b,{path:"/treatment",component:p}),r.a.createElement(u.b,{path:"/contact",component:g}),r.a.createElement(u.b,{path:"/login",component:v}),r.a.createElement(u.b,{path:"/book",component:E}),r.a.createElement(u.b,{path:"/confirmation",component:b}),r.a.createElement(u.b,{path:"/order",component:k}),r.a.createElement(u.b,{path:"/callback",component:function(e){return r.a.createElement(P,Object.assign({auth:t},e))}}),r.a.createElement(u.b,{path:"/scopes",component:function(e){return t.isAuthenticated()&&t.userHasScopes(["read:customer"])?r.a.createElement(M,Object.assign({auth:t},e)):r.a.createElement(u.a,{to:"/"})}}),r.a.createElement(u.b,{path:"*",component:w})))),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(105);c.a.render(r.a.createElement(l.a,{forceRefresh:!0},r.a.createElement(u.b,{component:V})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a="Paper&Pen",r="07401427189",o="https://www.instagram.com/01viet/",c="paperandpenltd@gmail.com",i="Belvedere Road, London",l="http://localhost:3000"},23:function(e,t,n){"use strict";var a=n(9),r=n(0),o=n.n(r),c=n(10);function i(){var e=Object(a.a)(["\n    color: #282c34;\n    width: 100%;\n  "]);return i=function(){return e},e}t.a=function(){var e=c.a.hr(i());return o.a.createElement(e,null)}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(63),r=n(64),o=function e(t){var n=this;Object(a.a)(this,e),this.history=void 0,this.userProfile=void 0,this.auth0=void 0,this.requestedScopes=void 0,this.login=function(){localStorage.setItem("redirect_on_login",JSON.stringify(n.history.location)),n.auth0.authorize()},this.handleAuthentication=function(){n.auth0.parseHash((function(e,t){if(t&&t.accessToken&&t.idToken){n.setSession(t);var a="undefined"===localStorage.getItem("redirect_on_login")?"/":JSON.parse(localStorage.getItem("redirect_on_login")||"");n.history.push(a)}else e&&(n.history.push("/"),alert("Error: ".concat(e.error)),console.log(e));localStorage.removeItem("redirect_on_login")}))},this.setSession=function(e){var t=JSON.stringify(1e3*e.expiresIn*(new Date).getTime()),a=e.scope||n.requestedScopes||"";localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),localStorage.setItem("scopes",JSON.stringify(a))},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expires_at")||"{}");if((new Date).getTime()<e)return!0},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("scopes"),n.userProfile=null,n.history.push("/"),n.auth0.logout({clientID:"PalYUmcqWSfe6TeKptEAn1N25az3OQeU",returnTo:"http://localhost:3000"})},this.getAccessToken=function(){var e=localStorage.getItem("access_token");return e||n.login(),e},this.userHasScopes=function(e){var t=JSON.parse(localStorage.getItem("scopes")||"").split(" ");return e.every((function(e){return t.includes(e)}))},this.history=t,this.userProfile=null,this.requestedScopes="openid profile email read:customer",this.auth0=new r.a.WebAuth({domain:"viet-dev.auth0.com",clientID:"PalYUmcqWSfe6TeKptEAn1N25az3OQeU",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:this.requestedScopes,audience:"http://localhost:3001"})}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(9),r=n(0),o=n.n(r),c=n(10),i=n(23);function l(){var e=Object(a.a)(["\n  font-family: Abril Fatface, cursive;\n  text-align: center;\n  font-weight: lighter;\n  font-size: calc(18px + 1vmin);\n  margin-block-end: 1em;\n"]);return l=function(){return e},e}var u=c.a.div(l()),s=function(e){var t=e.title;return o.a.createElement(u,{className:"heading"},o.a.createElement(i.a,null),t,o.a.createElement(i.a,null))}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(9),r=n(0),o=n.n(r),c=n(10),i=n(15),l=n(27),u=function(e){var t=e.auth,n=t.isAuthenticated;t.login;return o.a.createElement(o.a.Fragment,null,n()?null:o.a.createElement(l.a,{variant:"outline-secondary",size:"lg",onClick:e.auth.login},"Login"))},s=function(e){var t=e.auth,n=t.isAuthenticated;t.login;return o.a.createElement(o.a.Fragment,null,n()?o.a.createElement(l.a,{variant:"outline-secondary",size:"lg",onClick:e.auth.logout},"Logout"):null)},m=n(21);function d(){var e=Object(a.a)(["\n  display: inline;\n  padding-right: 50px;\n  text-align: left;\n\n  &:hover {\n    color: #282c34;\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(a.a)(["\n  display: inline;\n  padding-right: 50px;\n\n  &:hover {\n    color: #282c34;\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n  padding-top: 20px;\n  text-align: center;\n  list-style: none;\n  font-family: 'Abril Fatface', cursive;\n\n  &:hover {\n    color: #282c34;\n  }\n"]);return h=function(){return e},e}var p=c.a.ul(h()),g=c.a.li(f()),v=c.a.li(d()),E=function(e){var t=e.auth.isAuthenticated;return o.a.createElement("div",null,o.a.createElement(p,null,o.a.createElement(v,null," ",o.a.createElement(i.c,{className:"heading",to:"/home"},m.c)," "),o.a.createElement(g,null," ",o.a.createElement(i.c,{className:"menu-heading",to:"/treatment"},"Book Now")," "),o.a.createElement(g,null," ",o.a.createElement(i.c,{className:"menu-heading",to:"/contact"},"Contact")," "),o.a.createElement(g,null,t()?o.a.createElement(i.c,{className:"menu-heading",to:"/scopes"},"Admin"):null," "),o.a.createElement(g,null,t()?o.a.createElement(s,e):o.a.createElement(u,e))))}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i}));var a={API_BASE_URL:"https://basicv2.azurewebsites.net"},r="".concat(a.API_BASE_URL,"/availability"),o="".concat(a.API_BASE_URL,"/book"),c=("".concat(a.API_BASE_URL,"/admin/employee"),"".concat(a.API_BASE_URL,"/admin/operatinghours"),"".concat(a.API_BASE_URL,"/admin/treatment")),i="".concat(a.API_BASE_URL,"/book")},70:function(e,t,n){e.exports=n(106)},75:function(e,t,n){},76:function(e,t,n){}},[[70,3,5]]]);
//# sourceMappingURL=main.01fc332f.chunk.js.map