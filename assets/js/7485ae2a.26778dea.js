"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[9852],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9533:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7294),a=r(9960),o=r(3438),i=r(6010),c="cardContainer_oEYq",l="cardContainerLink_j77d",s="cardTitle_fwBT",u="cardDescription_H9oO",m="flexGap_a4sr",p="imgWrapper_rDUA",d="overflowHidden_BxRn",f=r(3919);function g(e){var t=e.href,r=e.children,o=(0,i.Z)("card margin-bottom--lg padding--lg",c,t&&l);return t?n.createElement(a.Z,{href:t,className:o},r):n.createElement("div",{className:o},r)}function h(e){var t=e.href,r=e.icon,a=e.title,o=e.description;return n.createElement(g,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:a},r," ",a),n.createElement("div",{className:(0,i.Z)("text--truncate",u),title:o},o))}function v(e){var t=e.item,r=(0,o.Wl)(t);return n.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function y(e){var t,r=e.item,a=(0,f.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(h,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function b(e){var t,r=e.item,a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(g,{href:r.href},n.createElement("div",{className:m},n.createElement("div",{className:p},r.icon),n.createElement("div",{className:d},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:r.label},r.label),n.createElement("div",{className:(0,i.Z)("text--truncate",u),title:null==a?void 0:a.description},null==a?void 0:a.description))))}function E(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(v,{item:t});case"image":return n.createElement(b,{item:t});default:return n.createElement(h,{href:t.href,icon:t.icon,title:t.title,description:t.description})}}function w(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(E,{item:e}))})))}},5470:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return v}});var n=r(3117),a=r(102),o=r(7294),i=r(3905),c=r(9533);function l(e,t){if(void 0===t&&(t=2),0===e)return"0 Bytes";var r=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function s(e){var t=(0,o.useState)(null),r=t[0],n=t[1];return(0,o.useEffect)((function(){fetch(e.tag?"https://api.github.com/repos/"+e.owner+"/"+e.repo+"/releases/tags/"+e.tag:"https://api.github.com/repos/"+e.owner+"/"+e.repo+"/releases/latest").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),r&&r.assets&&r.assets.length>0?o.createElement(c.Z,{items:r.assets.map((function(e){return{type:"layout",href:e.browser_download_url,icon:"\ud83d\udce6",title:e.name,description:r.tag_name+" | "+l(e.size)}}))}):o.createElement(c.Z,{items:[{type:"layout",href:"https://github.com/"+e.owner+"/"+e.repo+"/releases",icon:"\ud83d\udd17",title:"GitHub",description:"Releases"}]})}var u=r(3438),m=r(4996),p=["components"],d={},f="Get started",g={unversionedId:"get-started",id:"get-started",title:"Get started",description:"Download p8g",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/p8g/docs/get-started",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/get-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"C++",permalink:"/p8g/docs/get-started/c++"}},h={},v=[{value:"Download p8g",id:"download-p8g",level:2},{value:"Choose a programming language",id:"choose-a-programming-language",level:2}],y={toc:v};function b(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started"},"Get started"),(0,i.kt)("h2",{id:"download-p8g"},"Download p8g"),(0,i.kt)(s,{owner:"bernhardfritz",repo:"p8g",mdxType:"GitHubReleaseAssets"}),(0,i.kt)("h2",{id:"choose-a-programming-language"},"Choose a programming language"),(0,i.kt)(c.Z,{items:(0,u.jA)().items.map((function(e){return Object.assign({},e,{type:"image",icon:(0,i.kt)("img",{src:(0,m.Z)("/img"+e.href.substring(e.href.lastIndexOf("/"))+".svg")})})})),mdxType:"MyDocCardList"}))}b.isMDXComponent=!0}}]);