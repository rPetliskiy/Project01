(this.webpackJsonpproject01=this.webpackJsonpproject01||[]).push([[0],{146:function(e,t,c){},148:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(43),n=c.n(r),i=c(27),a=c.n(i),j=c(53),o=c.n(j),h=c(56),d=c(50),b=c(28),p=c(40),l=c(10),O=(c(145),c(31)),u=c(32),x=c(34),f=c(33),m=c(149),k=c(150),y=c(151),v=c.p+"static/media/persik.ae9f0072.png",g=(c(146),c(4)),C=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(g.jsxs)(l.j,{id:this.props.id,children:[Object(g.jsx)(l.k,{children:"Persik"}),Object(g.jsx)("img",{className:"Persik",src:v,alt:"Persik The Cat"}),Object(g.jsx)(l.e,{children:"\u0422\u0443\u0442 \u0441\u043a\u043e\u0440\u043e \u0447\u0442\u043e-\u0442\u043e \u0431\u0443\u0434\u0435\u0442 :)"}),Object(g.jsx)(l.g,{children:Object(g.jsxs)(l.l,{children:[Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"money",children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(l.m,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"account",children:Object(g.jsx)(y.a,{})})]})})]})}}]),c}(s.Component),U=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(){return Object(O.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(g.jsxs)(l.j,{id:this.props.id,children:[Object(g.jsx)(l.k,{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),this.props.fetchedUser&&Object(g.jsx)(l.h,{header:Object(g.jsx)(l.i,{mode:"secondary",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),children:Object(g.jsxs)(l.e,{before:this.props.fetchedUser.photo_200?Object(g.jsx)(l.c,{src:this.props.fetchedUser.photo_200}):null,href:"https://vk.com/id".concat(this.props.fetchedUser.id),children:["".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name),Object(g.jsx)("br",{}),"ID: ".concat(this.props.fetchedUser.id)]})}),Object(g.jsx)(l.h,{children:Object(g.jsx)(l.d,{stretched:!0,size:"l",before:Object(g.jsx)(y.a,{}),children:"\u041e \u043d\u0430\u0441"})}),Object(g.jsx)(l.g,{children:Object(g.jsxs)(l.l,{children:[Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"money",children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"home",children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(l.m,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(y.a,{})})]})})]})}}]),c}(s.Component),_=c(49),A=c(152),P=function(e){Object(x.a)(c,e);var t=Object(f.a)(c);function c(e){var s;return Object(O.a)(this,c),(s=t.call(this,e)).state={rub:0},s.adClick=s.adClick.bind(Object(_.a)(s)),s}return Object(u.a)(c,[{key:"adClick",value:function(){var e=this;a.a.send("VKWebAppShowNativeAds",{ad_format:"preloader"}).then((function(t){"true"===t.result&&e.setState({rub:100*Math.round((state.rub+.2)/100)})})).catch((function(e){}))}},{key:"render",value:function(){return Object(g.jsxs)(l.j,{id:this.props.id,children:[Object(g.jsx)(l.k,{children:"Persik"}),this.props.fetchedUser&&Object(g.jsx)(l.h,{header:Object(g.jsx)(l.i,{mode:"secondary",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),children:Object(g.jsx)(l.e,{before:this.props.fetchedUser.photo_200?Object(g.jsx)(l.c,{src:this.props.fetchedUser.photo_200}):null,children:"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name)})}),Object(g.jsxs)(l.h,{header:Object(g.jsx)(l.i,{mode:"secondary",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),children:[Object(g.jsxs)(l.e,{before:Object(g.jsx)(A.a,{}),children:["\u0411\u0430\u043b\u0430\u043d\u0441: ".concat(this.state.rub,"\u20bd"),Object(g.jsx)("br",{}),"ProjectCoins: 0"]}),Object(g.jsx)(l.f,{children:Object(g.jsx)(l.d,{onClick:this.adClick,before:Object(g.jsx)(m.a,{}),size:"m",stretched:!0,mode:"secondary",children:"+0.02"})})]}),Object(g.jsxs)(l.g,{children:[Object(g.jsxs)(l.l,{children:[Object(g.jsx)(l.m,{style:{color:"var(--text_primary)"},children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"home",children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(l.m,{onClick:this.props.go,"data-to":"account",children:Object(g.jsx)(y.a,{})})]}),"                                                                                                                            "]})]})}}]),c}(s.Component),w=function(){var e=Object(s.useState)("home"),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(null),i=Object(d.a)(n,2),j=i[0],O=i[1],u=Object(s.useState)(Object(g.jsx)(p.a,{size:"large"})),x=Object(d.a)(u,2),f=x[0],m=x[1];Object(s.useEffect)((function(){function e(){return(e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,O(t),m(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var r=document.createAttribute("scheme");r.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),a.a.send("VKWebAppJoinGroup",{group_id:203012199}).then((function(e){})).catch((function(e){})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return Object(g.jsx)(l.a,{children:Object(g.jsx)(l.b,{children:Object(g.jsxs)(b.a,{activePanel:c,popout:f,children:[Object(g.jsx)(C,{id:"home",fetchedUser:j,go:k}),Object(g.jsx)(U,{id:"account",fetchedUser:j,go:k}),Object(g.jsx)(P,{id:"money",fetchedUser:j,go:k})]})})})};a.a.send("VKWebAppInit"),n.a.render(Object(g.jsx)(w,{}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.c9e39985.chunk.js.map