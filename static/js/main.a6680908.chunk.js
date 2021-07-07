(this.webpackJsonpmixer=this.webpackJsonpmixer||[]).push([[0],{192:function(e){e.exports=JSON.parse('[{"desc":"\u521b\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u800c\u6ca1\u6709\u6765\u81ea\u7236\u5206\u652f\u7684\u4efb\u4f55\u5386\u53f2\u8bb0\u5f55","cmd":"git checkout --orphan [branch_name]"},{"desc":"\u6f02\u4eae\u7684\u65e5\u5fd7","cmd":"git log --graph --pretty=format:\'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset\' --abbrev-commit --date=relative"},{"desc":"\u66f4\u6539\u6700\u540e\u7684\u63d0\u4ea4\u4fe1\u606f","cmd":"commit --amend -m [message]"},{"desc":"\u6e05\u7406\u8fdc\u7a0b\u5206\u652f","cmd":"git remote prune origin"},{"desc":"\u8bbe\u7f6e\u522b\u540d","cmd":"git config --global alias.[new_alias] \'[previous_git_command]\'","example":"git config --global alias.save commit"}]')},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},215:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),l=n.n(r),s=(n(203),n(66)),o=(n(204),n(55)),u=n(26),i=(n(205),n(6));var j=n(364);var b=n(30),d=n(95),m=n(362),O=n(58),x=n(365),h=(n(215),d.a.Option);var p=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(b.a)(r,2),s=l[0],o=l[1],u=Object(a.useState)("s"),j=Object(b.a)(u,2),p=j[0],f=j[1],v=Object(a.useState)(!1),g=Object(b.a)(v,2),y=g[0],C=g[1];return Object(a.useEffect)((function(){o(new Date(Number(n)*("s"===p?1e3:1)).toLocaleString("zh-ch",{hour12:y}))}),[y,n,p]),Object(i.jsxs)("div",{className:"timestamp",children:["\u65f6\u95f4\u6233",Object(i.jsx)(m.a,{value:n,onChange:function(e){c(e.target.value)}}),Object(i.jsxs)(d.a,{defaultValue:p,onChange:function(e){f(e)},children:[Object(i.jsx)(h,{value:"s",children:"\u79d2(s)"}),Object(i.jsx)(h,{value:"ms",children:"\u6beb\u79d2(ms)"})]}),Object(i.jsx)(O.a,{onClick:function(){o(new Date(Number(n)*("s"===p?1e3:1)).toLocaleString("zh-ch",{hour12:y}))},children:"\u8f6c\u6362 >> "}),"hour12:",Object(i.jsx)(x.a,{onChange:function(e){return C(e)}}),Object(i.jsx)(m.a,{value:s,addonAfter:"\u5317\u4eac\u65f6\u95f4"})]})},f=n(53),v=n.n(f),g=n(187),y=n.n(g),C=n(367),S=n(363),N=n(81);var I=function(e){var t=e.text,n=e.children;return Object(i.jsx)(N.a,{title:"\u590d\u5236",children:Object(i.jsx)(O.a,{icon:Object(i.jsx)(C.a,{}),className:"copy",onClick:function(){var e=new y.a(".copy",{text:function(){return t}});e.on("success",(function(){S.b.info("\u590d\u5236\u6210\u529f"),e.destroy()})),e.on("error",(function(){S.b.info("\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u590d\u5236"),e.destroy()}))},children:n})})};var B=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)("div",{className:"name-format",children:[Object(i.jsx)(m.a,{onChange:function(e){var t=e.target.value;c([{type:"camelCase",text:v.a.camelCase(t)},{type:"bigCamelCase",text:v.a.upperFirst(v.a.camelCase(t))},{type:"kebabCase",text:v.a.kebabCase(t)},{type:"lowerCase",text:v.a.lowerCase(t)},{type:"snakeCase",text:v.a.snakeCase(t)},{type:"upperSnakeCase",text:v.a.snakeCase(t).toUpperCase()},{type:"startCase",text:v.a.startCase(t)},{type:"upperCase",text:v.a.upperCase(t)}])},placeholder:"\u8bf7\u8f93\u5165"}),Object(i.jsx)(j.b,{bordered:!0,dataSource:n,renderItem:function(e){return Object(i.jsxs)(j.b.Item,{style:{display:"flex"},children:[e.type,": ",e.text,Object(i.jsx)(I,{text:e.text})]})}})]})},k=m.a.TextArea;var w=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(O.a,{onClick:function(){try{var e=JSON.parse(n),t=JSON.stringify(e,null,"\t");c(t)}catch(a){S.b.error("\u8f6c\u6362\u6709\u8bef"),console.error(a)}},children:"\u683c\u5f0f\u5316"}),Object(i.jsx)(I,{text:n}),Object(i.jsx)(k,{value:n,onChange:function(e){c(e.target.value)},autoSize:!0,showCount:!0})]})},D=n(357),G=n(358),F=n(361),J=n(360),z=n(123),E=n(191),M=n.n(E),U=-123456.789,T=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(b.a)(r,2),s=l[0],o=l[1],u=Object(a.useState)(void 0),j=Object(b.a)(u,2),d=j[0],m=j[1],O=Object(a.useState)("decimal"),h=Object(b.a)(O,2),p=h[0],f=h[1],v=Object(a.useState)("CNY"),g=Object(b.a)(v,2),y=g[0],C=g[1],S=Object(a.useState)("acre"),N=Object(b.a)(S,2),B=N[0],k=N[1],w=Object(a.useState)(!0),E=Object(b.a)(w,2),T=E[0],Y=E[1],A=Object(a.useState)("symbol"),L=Object(b.a)(A,2),_=L[0],P=L[1],R=Object(a.useState)("standard"),W=Object(b.a)(R,2),V=W[0],H=W[1];return Object(a.useEffect)((function(){var e={style:p,currency:y,unit:B,useGrouping:T,currencyDisplay:_,currencySign:V};console.log(e),o("new Intl.NumberFormat(".concat(JSON.stringify(d),", ").concat(JSON.stringify(e,null,"\t"),").format(").concat(U,")")),c(new Intl.NumberFormat(d,e).format(U))}),[d,p,y,B,T,_,V]),Object(i.jsxs)("div",{style:{padding:"10px"},children:[Object(i.jsxs)(D.a,{gutter:16,children:[Object(i.jsx)(G.a,{span:12,children:Object(i.jsx)(F.a,{title:"\u539f\u503c",value:U})}),Object(i.jsx)(G.a,{span:12,children:Object(i.jsx)(F.a,{title:"\u7ed3\u679c",value:n})})]}),Object(i.jsxs)(J.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{locales:d,style:p,currency:y,unit:B,useGrouping:T,currencyDisplay:_,currencySign:V},children:[Object(i.jsx)(J.a.Item,{label:"locales",name:"locales",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return m(e.target.value)},children:[Object(i.jsx)(z.a.Button,{value:void 0,children:"Undefined"}),Object(i.jsx)(z.a.Button,{value:"zh",children:"\u4e2d"}),Object(i.jsx)(z.a.Button,{value:"en",children:"\u82f1"}),Object(i.jsx)(z.a.Button,{value:"ar",children:"Arabic"}),Object(i.jsx)(z.a.Button,{value:"ru",children:"Russian"}),Object(i.jsx)(z.a.Button,{value:"ja",children:"Japanese"}),Object(i.jsx)(z.a.Button,{value:"ko",children:"Korean"})]})}),Object(i.jsx)(J.a.Item,{label:"style",name:"style",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return f(e.target.value)},children:[Object(i.jsx)(z.a.Button,{value:"decimal",children:"decimal(Default)"}),Object(i.jsx)(z.a.Button,{value:"currency",children:"currency"}),Object(i.jsx)(z.a.Button,{value:"percent",children:"percent"}),Object(i.jsx)(z.a.Button,{value:"unit",children:"unit"})]})}),"currency"===p?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(J.a.Item,{label:"currency",name:"currency",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return C(e.target.value)},children:[Object(i.jsx)(z.a.Button,{value:"CNY",children:"CNY\u4eba\u6c11\u5e01"}),Object(i.jsx)(z.a.Button,{value:"USD",children:"USD\u7f8e\u5143"}),Object(i.jsx)(z.a.Button,{value:"EUR",children:"EUR\u6b27\u5143"}),Object(i.jsx)(z.a.Button,{value:"Yen",children:"Yen\u65e5\u5143"})]})}),Object(i.jsx)(J.a.Item,{label:"currencyDisplay",name:"currencyDisplay",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return P(e.target.value)},children:[Object(i.jsx)(z.a.Button,{value:"symbol",children:"symbol(default)"}),Object(i.jsx)(z.a.Button,{value:"narrowSymbol",children:"narrowSymbol"}),Object(i.jsx)(z.a.Button,{value:"code",children:"code"}),Object(i.jsx)(z.a.Button,{value:"name",children:"name"})]})}),Object(i.jsx)(J.a.Item,{label:"currencySign",name:"currencySign",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return H(e.target.value)},children:[Object(i.jsx)(z.a,{value:"standard",children:"standard"}),Object(i.jsx)(z.a,{value:"accounting",children:"accounting"})]})})]}):null,"unit"===p?Object(i.jsx)(J.a.Item,{label:"unit",name:"unit",children:Object(i.jsxs)(z.a.Group,{onChange:function(e){return k(e.target.value)},children:[Object(i.jsx)(z.a.Button,{value:"acre",children:"\u571f\u5730"}),Object(i.jsx)(z.a.Button,{value:"day",children:"\u5929"}),Object(i.jsx)(z.a.Button,{value:"degree",children:"\u5ea6"})]})}):null,Object(i.jsx)(J.a.Item,{label:"useGrouping",name:"useGrouping",valuePropName:"checked",children:Object(i.jsx)(x.a,{onChange:function(e){return Y(e)}})})]}),Object(i.jsx)(I,{text:s,children:"\u590d\u5236\u4ee3\u7801"}),Object(i.jsx)(M.a,{value:s,autoSize:!0,showCount:!0})]})},Y=n(359),A=n(366),L=n(52),_=n.n(L),P=n(192),R=[{path:"/",name:"Home",type:"menu",label:"\u9996\u9875",component:function(e){return Object(i.jsx)("div",{className:"home"})}},{path:"/tool",name:"Tool",type:"menu",label:"\u5de5\u5177",component:function(e){var t=R.filter((function(e){return e.path.startsWith("/tool/")}));return Object(i.jsx)("div",{className:"tool",children:Object(i.jsx)(j.b,{bordered:!0,dataSource:t,renderItem:function(e){return Object(i.jsx)(j.b.Item,{children:Object(i.jsx)(o.b,{to:e.path,children:e.label})})}})})}},{path:"/tool/timestamp",name:"Timestamp",label:"\u65f6\u95f4\u6233",component:p},{path:"/tool/name-format",name:"NameFormat",label:"\u547d\u540d\u683c\u5f0f\u5316",component:B},{path:"/tool/json-format",name:"JSONFormat",label:"JSON\u683c\u5f0f\u5316",component:w},{path:"/tool/symbol",name:"Symbol",label:"\u4e00\u4e9b\u7b26\u53f7",component:function(){var e=[{name:"\u5192\u53f7",en:":",cn:"\uff1a"},{name:"\u5c0f\u62ec\u53f7",en:"()",cn:"\uff08\uff09"},{name:"\u4e2d\u62ec\u53f7",en:"[]",cn:"\u3010\u3011"},{name:"\u5206\u53f7",en:";",cn:"\uff1b"},{name:"\u5f15\u53f7",en:"''",cn:"\u201c\u201d"},{name:"\u9017\u53f7",en:",",cn:"\uff0c"}].map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{key:t})}));return Object(i.jsxs)(Y.a,{dataSource:e,children:[Object(i.jsx)(_.a,{title:"\u540d\u79f0",dataIndex:"name"}),Object(i.jsx)(_.a,{title:"\u4e2d\u6587",dataIndex:"cn"}),Object(i.jsx)(_.a,{title:"\u82f1\u6587",dataIndex:"en"}),Object(i.jsx)(_.a,{title:"\u64cd\u4f5c",render:function(e,t){return Object(i.jsx)(A.b,{size:"middle",children:Object(i.jsx)(I,{text:t.cn})})}})]})}},{path:"/MDN",name:"MDN",type:"menu",label:"MDN",component:function(e){var t=R.filter((function(e){return e.path.startsWith("/MDN/")}));return Object(i.jsx)(j.b,{bordered:!0,dataSource:t,renderItem:function(e){return Object(i.jsx)(j.b.Item,{children:Object(i.jsx)(o.b,{to:e.path,children:e.label})})}})}},{path:"/MDN/Intl",name:"Intl",label:"Intl",component:T},{path:"/gist",name:"Gist",type:"menu",label:"Gist",component:function(e){var t=R.filter((function(e){return e.path.startsWith("/gist/")}));return Object(i.jsx)(j.b,{bordered:!0,dataSource:t,renderItem:function(e){return Object(i.jsx)(j.b.Item,{children:Object(i.jsx)(o.b,{to:e.path,children:e.label})})}})}},{path:"/gist/git",name:"Git",label:"Git",component:function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Y.a,{dataSource:P.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{key:t})})),children:[Object(i.jsx)(_.a,{title:"description",dataIndex:"desc"},"desc"),Object(i.jsx)(_.a,{title:"command",dataIndex:"cmd"},"cmd"),Object(i.jsx)(_.a,{title:"Example",dataIndex:"example"},"example"),Object(i.jsx)(_.a,{title:"\u64cd\u4f5c",render:function(e,t){return Object(i.jsx)(A.b,{size:"middle",children:Object(i.jsx)(I,{text:t.cmd})})}},"action")]})})}}];var W=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(o.a,{children:Object(i.jsx)(u.c,{children:R.map((function(e){return Object(i.jsx)(u.a,{path:e.path,exact:!0,render:function(t){var n=t.location;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("nav",{className:"menu",children:Object(i.jsx)("ul",{children:R.filter((function(e){return"menu"===e.type})).map((function(e){return Object(i.jsx)("li",{className:n.pathname===e.path?"active":"",children:Object(i.jsx)(o.b,{to:e.path,children:e.label})},e.name)}))})}),Object(i.jsx)(e.component,Object(s.a)({},t))]})}},e.name)}))})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,368)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root")),V()}},[[354,1,2]]]);
//# sourceMappingURL=main.a6680908.chunk.js.map