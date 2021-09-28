(this["webpackJsonpkurrency-konverter"]=this["webpackJsonpkurrency-konverter"]||[]).push([[0],{85:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(66),o=c.n(r),s=c(109),i=c(30),l=c(2),j=c(3),u=c(110),d=c(103),b=c(105),h=c(107),O=c(71),x=c(104),g=c(108),f=c(5),p=function(e,t,c){return 0===+t||t.startsWith("+")||t.startsWith("-")?t:c?"from"===e?"+".concat(t):"-".concat(t):"from"===e?"-".concat(t):"+".concat(t)},v=function(e,t){return t?"from"===e?"green.500":"red.500":"from"===e?"red.500":"green.500"},y=function(e){var t=e.type,c=e.value,n=e.isInvalid,a=e.isReversed,r=e.onChange;return Object(f.jsxs)(g.c,{"aria-label":t,value:p(t,c,a),precision:2,clampValueOnBlur:!1,variant:"flushed",size:"lg",focusBorderColor:"cyan.400",errorBorderColor:"red.500",isInvalid:n,onChange:r,children:[Object(f.jsx)(g.d,{color:v(t,a)}),Object(f.jsxs)(g.e,{children:[Object(f.jsx)(g.b,{border:"none"}),Object(f.jsx)(g.a,{border:"none"})]})]})},m=c(102),S=function(e){var t=e.type,c=e.value,n=e.currencies,a=e.onChange;return Object(f.jsx)(m.a,{name:"select-".concat(t),"aria-label":"select-".concat(t),value:c,onChange:a,width:"auto",variant:"flushed",size:"lg",focusBorderColor:"cyan.400",_hover:{cursor:"pointer"},minWidth:"75px",children:n.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))})},B=function(e){var t=e.type,c=e.account,n=e.symbol,a=e.handleChange,r=e.handleSelect,o=e.isReversed,s=e.accountsKeys,i=e.currency,l=e.inputVal,j=e.exceeds;return Object(f.jsxs)(d.a,{children:["from"===t&&Object(f.jsxs)(d.a,{"data-testid":"account-".concat(t),color:j?"red.500":"gray.500",alignSelf:"center",children:["Balance: ",n,c]}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(S,{type:t,value:i,currencies:s,onChange:r(t)}),Object(f.jsx)(y,{type:t,value:l,isInvalid:j,isReversed:o,onChange:a(t)})]}),"to"===t&&Object(f.jsxs)(d.a,{"data-testid":"account-".concat(t),color:j?"red.500":"gray.500",alignSelf:"center",marginTop:"6px",children:["Balance: ",n,c]})]})},C=c(101),R=function(e){return Object(f.jsx)(C.a,Object(i.a)(Object(i.a)({viewBox:"0 0 512 512"},e),{},{children:Object(f.jsx)("path",{d:"m365.291 168.033a295.963 295.963 0 0 0 -293.291 295.967 24 24 0 0 1 -48 0 343.66 343.66 0 0 1 341.376-343.968l31.958 23.968zm-14.891 91.167 128-96a24 24 0 0 0 0-38.4l-128-96a24 24 0 1 0 -28.8 38.4l102.4 76.8-102.4 76.8a24 24 0 1 0 28.8 38.4z",fill:"currentColor"})}))},U=c(106),k=function(){return Object(f.jsxs)(d.a,{align:"center",padding:8,"data-testid":"error-placeholder",children:[Object(f.jsx)(b.a,{as:"h1",size:"lg",marginBottom:1,color:"red.500",children:":("}),Object(f.jsx)(U.a,{children:"An error occured while loading currency rates."}),Object(f.jsx)(U.a,{children:"Trying one more time in several seconds..."})]})},w={USD:"$",EUR:"\u20ac",GBP:"\xa3"},E=function(){var e=Object(n.useState)({USD:1,EUR:0,GBP:0}),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({USD:"100",EUR:"200",GBP:"0"}),o=Object(j.a)(r,2),s=o[0],x=o[1],g=Object(n.useState)("USD"),p=Object(j.a)(g,2),v=p[0],y=p[1],m=Object(n.useState)("EUR"),S=Object(j.a)(m,2),C=S[0],U=S[1],E=Object(n.useState)("1"),z=Object(j.a)(E,2),F=z[0],W=z[1],D=Object(n.useState)("0"),G=Object(j.a)(D,2),P=G[0],_=G[1],I=Object(n.useState)(!1),N=Object(j.a)(I,2),V=N[0],K=N[1],J=Object(n.useState)(!1),T=Object(j.a)(J,2),A=T[0],L=T[1],M=(0,Object.keys)(s),$=!V&&+F>+s[v],q=V&&+P>+s[C];Object(n.useEffect)((function(){fetch("https://openexchangerates.org/api/latest.json?app_id=".concat("df6831b373d143a6ba70c3b88c270bad","&base=").concat("USD".toLowerCase())).then((function(e){return e.json()})).then((function(e){var t,c=(t={},Object(l.a)(t,e.base,1),Object(l.a)(t,"EUR",e.rates.EUR),Object(l.a)(t,"GBP",e.rates.GBP),t);a(c)})).catch((function(){L(!0)}))}),[]),Object(n.useEffect)((function(){_(String((+F*(c[C]/c[v])).toFixed(2))),L(!1)}),[c]);var H=function(e){return function(t){var n=t.target.value;"from"===e?(n===C&&U(v),y(n),_(String((+F*(c[C]/c[n])).toFixed(2)))):(n===v&&y(C),U(n),_(String((+F*(c[n]/c[v])).toFixed(2))))}},Q=function(e){return function(t){var n=function(e){return e.replace(/^\x2D+/,"")}(t),a=n.split("."),r=Object(j.a)(a,3),o=r[1],s=r[2];o&&o.length>2||"string"===typeof s||n.startsWith(".")||n.startsWith("0")||n.endsWith("+")||n.endsWith("-")||("from"===e?(W(n),_(String((+n*(c[C]/c[v])).toFixed(2)))):(_(n),W(String((+n*(c[v]/c[C])).toFixed(2)))))}};return A?Object(f.jsx)(k,{}):Object(f.jsxs)(u.a,{align:"center",padding:8,spacing:6,children:[Object(f.jsxs)(d.a,{children:[Object(f.jsxs)(b.a,{as:"h1",size:"lg",marginBottom:1,children:["Sell ",v]}),Object(f.jsxs)(d.a,{"data-testid":"rate",color:"gray.500",children:[w[v],"1 = ",w[C],(c[C]/c[v]).toFixed(6)]})]}),Object(f.jsxs)(d.a,{position:"relative",children:[Object(f.jsx)(B,{type:"from",account:s[v],symbol:w[v],handleChange:Q,handleSelect:H,isReversed:V,accountsKeys:M,currency:v,inputVal:F,exceeds:$}),Object(f.jsx)(B,{type:"to",account:s[C],symbol:w[C],handleChange:Q,handleSelect:H,isReversed:V,accountsKeys:M,currency:C,inputVal:P,exceeds:q}),Object(f.jsx)(h.a,{icon:Object(f.jsx)(R,{color:"cyan.400"}),"aria-label":"reverse",onClick:function(){return K(!V)},variant:"ghost",size:"lg",transform:"rotate(".concat(V?-45:145,"deg)"),isRound:!0,_hover:{bg:"cyan.100"},_active:{bg:"cyan.100"},_focus:{bg:"cyan.100"},position:"absolute",top:"calc(50% - 24px)",right:"75px"})]}),Object(f.jsx)(O.a,{"aria-label":"buy/sell",onClick:function(){var e,t=V?Number(F):-Number(F),c=V?-Number(P):Number(P);x(Object(i.a)(Object(i.a)({},s),{},(e={},Object(l.a)(e,v,(+s[v]+t).toFixed(2)),Object(l.a)(e,C,(+s[C]+c).toFixed(2)),e)))},disabled:$||q,colorScheme:"cyan",color:"white",size:"lg",width:"200px",children:V?"Buy ".concat(v," with ").concat(C):"Sell ".concat(v," for ").concat(C)})]})};c(85);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(E,{})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.9f6163f7.chunk.js.map