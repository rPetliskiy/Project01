(this.webpackJsonpproject01=this.webpackJsonpproject01||[]).push([[0],{146:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(43),n=c.n(r),a=c(27),i=c.n(a),j=c(54),o=c.n(j),h=c(57),d=c(51),b=c(28),l=c(40),p=c(9),O=(c(145),c(32)),u=c(33),x=c(35),f=c(34),m=c(149),k=c(150),v=c(151),y=c.p+"static/media/persik.ae9f0072.png",g=(c(146),c(4)),C=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(g.jsxs)(p.j,{id:this.props.id,children:[Object(g.jsx)(p.k,{children:"Persik"}),Object(g.jsx)("img",{className:"Persik",src:y,alt:"Persik The Cat"}),Object(g.jsx)(p.e,{children:"\u0422\u0443\u0442 \u0441\u043a\u043e\u0440\u043e \u0447\u0442\u043e-\u0442\u043e \u0431\u0443\u0434\u0435\u0442 :)"}),Object(g.jsx)(p.g,{children:Object(g.jsxs)(p.m,{children:[Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"money",children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(p.n,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"account",children:Object(g.jsx)(v.a,{})})]})})]})}}]),c}(s.Component),U=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(g.jsxs)(p.j,{id:this.props.id,children:[Object(g.jsx)(p.k,{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),this.props.fetchedUser&&Object(g.jsx)(p.h,{header:Object(g.jsx)(p.i,{mode:"secondary",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),children:Object(g.jsxs)(p.e,{before:this.props.fetchedUser.photo_200?Object(g.jsx)(p.c,{src:this.props.fetchedUser.photo_200}):null,href:"https://vk.com/id".concat(this.props.fetchedUser.id),children:["".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name),Object(g.jsx)("br",{}),"ID: ".concat(this.props.fetchedUser.id)]})}),Object(g.jsx)(p.h,{children:Object(g.jsx)(p.d,{stretched:!0,size:"l",before:Object(g.jsx)(v.a,{}),children:"\u041e \u043d\u0430\u0441"})}),Object(g.jsx)(p.g,{children:Object(g.jsxs)(p.m,{children:[Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"money",children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"home",children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(p.n,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(v.a,{})})]})})]})}}]),c}(s.Component),_=c(50),S=c(152),w=c(153),A=c(154),K=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(e){var s;return Object(O.a)(this,c),(s=t.call(this,e)).state={text:"",snackbar:null,rub:0},s.adClick=s.adClick.bind(Object(_.a)(s)),s}return Object(u.a)(c,[{key:"adClick",value:function(){var e=this;i.a.send("VKWebAppShowNativeAds",{ad_format:"reward"}).then((function(t){if(!0===t.result){if(e.setState((function(e){return{rub:Math.round(100*(e.rub+.02))/100}})),e.state.snackbar)return;e.setState({snackbar:Object(g.jsx)(p.l,{onClose:function(){return e.setState({snackbar:null})},before:Object(g.jsx)(p.c,{size:36,style:{background:"var(--accent)"},children:Object(g.jsx)(S.a,{fill:"#fff",width:28,height:28})}),children:"> \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e 0,02\u20bd"})})}})).catch((function(t){e.state.snackbar||e.setState({snackbar:Object(g.jsx)(p.l,{onClose:function(){return e.setState({snackbar:null})},before:Object(g.jsx)(p.c,{size:36,style:{background:"var(--var(--destructive))"},children:Object(g.jsx)(w.a,{fill:"#fff",width:28,height:28})}),children:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c \u0438\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d VK"})})}))}},{key:"render",value:function(){return Object(g.jsxs)(p.j,{id:this.props.id,children:[Object(g.jsx)(p.k,{children:"Persik"}),this.props.fetchedUser&&Object(g.jsx)(p.h,{header:Object(g.jsx)(p.i,{mode:"secondary",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),children:Object(g.jsx)(p.e,{before:this.props.fetchedUser.photo_200?Object(g.jsx)(p.c,{src:this.props.fetchedUser.photo_200}):null,children:"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name)})}),Object(g.jsxs)(p.h,{header:Object(g.jsx)(p.i,{mode:"secondary",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),children:[Object(g.jsxs)(p.e,{before:Object(g.jsx)(A.a,{}),children:["\u0411\u0430\u043b\u0430\u043d\u0441: ".concat(this.state.rub,"\u20bd"),Object(g.jsx)("br",{}),"ProjectCoins: 0"]}),Object(g.jsx)(p.f,{children:Object(g.jsx)(p.d,{onClick:this.adClick,before:Object(g.jsx)(m.a,{}),size:"m",stretched:!0,mode:"secondary",children:"+0.02"})})]}),this.state.snackbar,Object(g.jsxs)(p.g,{children:[Object(g.jsxs)(p.m,{children:[Object(g.jsx)(p.n,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"home",children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(p.n,{onClick:this.props.go,"data-to":"account",children:Object(g.jsx)(v.a,{})})]}),"                                                                                                                            "]})]})}}]),c}(s.Component),P=function(){var e=Object(s.useState)("home"),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(null),a=Object(d.a)(n,2),j=a[0],O=a[1],u=Object(s.useState)(Object(g.jsx)(l.a,{size:"large"})),x=Object(d.a)(u,2),f=x[0],m=x[1];Object(s.useEffect)((function(){function e(){return(e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,O(t),m(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var r=document.createAttribute("scheme");r.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),i.a.send("VKWebAppJoinGroup",{group_id:203012199}).then((function(e){})).catch((function(e){})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return Object(g.jsx)(p.a,{children:Object(g.jsx)(p.b,{children:Object(g.jsxs)(b.a,{activePanel:c,popout:f,children:[Object(g.jsx)(C,{id:"home",fetchedUser:j,go:k}),Object(g.jsx)(U,{id:"account",fetchedUser:j,go:k}),Object(g.jsx)(K,{id:"money",fetchedUser:j,go:k})]})})})};i.a.send("VKWebAppInit"),n.a.render(Object(g.jsx)(P,{}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.9ef7888b.chunk.js.map