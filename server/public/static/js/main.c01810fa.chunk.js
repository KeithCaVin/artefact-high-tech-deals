(this["webpackJsonpartefact-high-tech-deals"]=this["webpackJsonpartefact-high-tech-deals"]||[]).push([[0],{39:function(e,a,t){},40:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t.n(c),n=t(30),s=t.n(n),i=(t(39),t(40),t(16)),o=t.n(i),j=t(31),l=t(12),m=t(17),d=t(9),h=t(32),b=t.n(h),g=t(0),x=function(e){return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)("div",{className:"amazon-data",children:[Object(g.jsx)("h1",{children:"Amazon Items"}),e.pData.amazonData.map((function(e,a){return"https://www.amazon.aeundefined"===e.amazonLink?"":Object(g.jsx)("div",{className:"amazon-data amazon-item",children:Object(g.jsxs)("a",{href:e.amazonLink,target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("div",{className:"img-container",children:Object(g.jsx)("img",{src:e.amazonImg,alt:"#"})}),Object(g.jsx)("h2",{children:e.amazonName}),Object(g.jsxs)("p",{children:["AED ",e.amazonPrice,".00"]})]})},a)}))]})})},O=function(e){return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)("div",{className:"virgin-data",children:[Object(g.jsx)("h1",{children:"Virgin Megastore"}),e.pData.virginData.map((function(e,a){var t=e.virginImg,c=e.virginLink,r=e.virginName,n=e.virginPrice;return Object(g.jsx)("div",{className:"virgin-data virgin-item",children:Object(g.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("img",{src:t,alt:"#"}),Object(g.jsx)("h2",{children:r}),Object(g.jsx)("p",{children:n})]})},a)}))]})})},u=function(e){return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)("div",{className:"axiom-data",children:[Object(g.jsx)("h1",{children:"Axiom Items"}),e.pData.axiomData.map((function(e,a){var t=e.axiomImg,c=e.axiomLink,r=e.axiomName,n=e.axiomPrice;return Object(g.jsx)("div",{className:"axiom-data axiom-item",children:Object(g.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)("img",{src:t,alt:"#"}),Object(g.jsx)("h2",{children:r}),Object(g.jsx)("p",{children:n})]})},a)}))]})})},p=function(e){return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)("div",{className:"item-data",children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(x,{pData:e.itemList.aData}),Object(g.jsx)(O,{pData:e.itemList.vData}),Object(g.jsx)(u,{pData:e.itemList.xData})]})})})},f=t.p+"static/media/logo.4b3e54df.png",v=t.p+"static/media/amazonlogo.7fe12f5c.png",N=t.p+"static/media/virginlogo.98929dc8.png",z=t.p+"static/media/axiomlogo.08fe225e.jpg",D=function(){var e=Object(c.useState)({searchWord:""}),a=Object(d.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(!1),i=Object(d.a)(s,2),h=i[0],x=i[1],O=Object(c.useState)(!1),u=Object(d.a)(O,2),D=u[0],k=u[1],L=Object(c.useState)([]),w=Object(d.a)(L,2),F=w[0],S=w[1],W=Object(c.useState)(0),y=Object(d.a)(W,2),I=y[0],C=y[1],P=Object(c.useRef)(null),A=function(){var e=Object(j.a)(o.a.mark((function e(a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c={searchWord:t.searchWord.trim()},t.searchWord&&0!==t.searchWord.trim().length){e.next=7;break}return alert("Please input a valid item"),e.abrupt("return");case 7:return 0===I&&(P.current.style.filter="blur(5px)",k(!0),C(1)),e.next=10,b.a.get("http://localhost:3005/get_items",{params:{word:c.searchWord}}).then((function(e){S(e.data)}));case 10:window.history.replaceState(null,null,"?keyword=".concat(c.searchWord)),k(!1),x(!0);case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsxs)("div",{className:"page-logo",children:[Object(g.jsx)("img",{className:"htd-logo",src:f,alt:"logo"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"text",name:"searchWord",placeholder:"Search for a product",value:t.searchWord,onChange:function(e){n(Object(m.a)(Object(m.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))},required:!0}),Object(g.jsx)("button",{className:"search-btn",type:"submit",onClick:A,children:" Search"})]})]}),!1===h&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"ecommerce-logos",ref:P,children:[Object(g.jsx)("h1",{className:"home-message",children:"Compare and Get the best deals from these amazing stores!"}),Object(g.jsxs)("div",{className:"store-logos",children:[Object(g.jsx)("img",{className:"amazon-logo",src:v,alt:"Amazon Logo"}),Object(g.jsx)("img",{className:"virgin-logo",src:N,alt:"Virgin Megastore Logo"}),Object(g.jsx)("img",{className:"axiom-logo",src:z,alt:"Axiom Logo"})]})]})}),!0===D&&Object(g.jsx)("div",{className:"lds-dual-ring"}),!0===h&&Object(g.jsx)("div",{className:"searched-data",children:Object(g.jsx)(p,{itemList:F})})]})},k=t(33),L=t(2);var w=function(){return Object(g.jsx)(k.a,{basename:"/high-tech-deals",children:Object(g.jsx)("div",{className:"page",children:Object(g.jsx)(L.a,{component:D,path:"/",exact:!0})})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.c01810fa.chunk.js.map