(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),i=n.n(s),o=(n(49),n(41)),r=n(12),j=(n(50),n(81)),l=n(83),b=n(84),u=n(37),O=n.n(u),f=n(38),d=n.n(f),x=n(39),h=n.n(x),p=n(4),v=Object(j.a)({root:{marginTop:"auto"}}),m=function(e){var t=v(),n=e.value,a=e.onChange;return Object(p.jsxs)(l.a,{value:n,onChange:function(e,t){a(t)},showLabels:!0,className:t.root,children:[Object(p.jsx)(b.a,{label:"Recents",icon:Object(p.jsx)(O.a,{})}),Object(p.jsx)(b.a,{label:"Favorites",icon:Object(p.jsx)(d.a,{})}),Object(p.jsx)(b.a,{label:"Nearby",icon:Object(p.jsx)(h.a,{})})]})},w=n(85),g=Object(j.a)({root:{display:"flex",justifyContent:"center",fontSize:100},buttons:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 20%"}}),y=function(e){var t=g(),n=c.a.useState(new Date),s=Object(r.a)(n,2),i=s[0],o=s[1],j=c.a.useState(new Date),l=Object(r.a)(j,2),b=l[0],u=l[1],O=c.a.useState(0),f=Object(r.a)(O,2),d=f[0],x=f[1],h=c.a.useState(new Date),v=Object(r.a)(h,2),m=v[0],y=v[1],D=c.a.useState(!1),S=Object(r.a)(D,2),C=S[0],N=S[1],k=e.lap,T=e.resetLap;Object(a.useEffect)((function(){if(!C){var e=setInterval((function(){o(new Date)}),10);return function(){clearInterval(e)}}}),[i,C]);var I=function(){var e=i.getTime()-b.getTime()-d,t=Math.floor(e/10)%100,n=Math.floor(e/1e3)%60,a=Math.floor(e/1e3/60);return"".concat(a,":").concat(n>=10?n:"0"+n,".").concat(t)};return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:t.root,children:I()}),Object(p.jsxs)("div",{className:t.buttons,children:[Object(p.jsx)(w.a,{variant:"contained",onClick:function(){return k(I())},children:"Lap"}),Object(p.jsx)(w.a,{variant:"contained",onClick:function(){if(C){var e=(new Date).getTime()-m.getTime();x(d+e)}else y(new Date);N(!C)},children:C?"unpause":"pause"}),Object(p.jsx)(w.a,{variant:"contained",onClick:function(){o(new Date),u(new Date),x(0),y(new Date),N(!1),T()},children:"Reset"})]})]})},D=n(86),S=n(87),C=n(88),N=n(89),k=n(40),T=n.n(k),I=Object(j.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"},content:{}}),L=function(){var e=I(),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)([]),j=Object(r.a)(i,2),l=j[0],b=j[1];return Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)("div",{className:e.content,children:Object(p.jsx)(y,{lap:function(e){b([].concat(Object(o.a)(l),[e]))},resetLap:function(){b([])}})}),Object(p.jsx)(D.a,{dense:!1,children:l.map((function(e,t){return Object(p.jsxs)(S.a,{children:[Object(p.jsx)(C.a,{children:Object(p.jsx)(T.a,{})}),Object(p.jsx)(N.a,{primary:e})]},t)}))}),Object(p.jsx)(m,{value:c,onChange:function(e){s(e)}})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.2561bfdf.chunk.js.map