"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[60],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4244:function(e,t,r){r.r(t),r.d(t,{assets:function(){return T},contentTitle:function(){return k},default:function(){return B},frontMatter:function(){return j},metadata:function(){return P},toc:function(){return C}});var n=r(3117),o=r(102),a=r(7294),i=r(3905),c=r(9960),l=r(9575),s=r(6010),u="cardContainer_oEYq",p="cardContainerLink_j77d",d="cardTitle_fwBT",m="cardDescription_H9oO",f=r(3919);function g(e){var t=e.href,r=e.children,n=(0,s.Z)("card margin-bottom--lg padding--lg",u,t&&p);return t?a.createElement(c.Z,{href:t,className:n},r):a.createElement("div",{className:n},r)}function h(e){var t=e.href,r=e.icon,n=e.title,o=e.description;return a.createElement(g,{href:t},a.createElement("h2",{className:(0,s.Z)("text--truncate",d),title:n},r," ",n),a.createElement("div",{className:(0,s.Z)("text--truncate",m),title:o},o))}function y(e){var t=e.item,r=(0,l.Wl)(t);return a.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.items.length+" items"})}function v(e){var t,r=e.item,n=(0,f.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,l.xz)(null!=(t=r.docId)?t:void 0);return a.createElement(h,{href:r.href,icon:n,title:r.label,description:null==o?void 0:o.description})}function b(e){var t=e.item;switch(t.type){case"link":return a.createElement(v,{item:t});case"category":return a.createElement(y,{item:t});default:return a.createElement(h,{href:t.href,icon:t.icon,title:t.title,description:t.description})}}function w(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(b,{item:e}))})))}function E(e,t){if(void 0===t&&(t=2),0===e)return"0 Bytes";var r=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function O(e){var t=(0,a.useState)(null),r=t[0],n=t[1];return(0,a.useEffect)((function(){fetch(e.tag?"https://api.github.com/repos/"+e.owner+"/"+e.repo+"/releases/tags/"+e.tag:"https://api.github.com/repos/"+e.owner+"/"+e.repo+"/releases/latest").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),r&&r.assets&&r.assets.length>0?a.createElement(w,{items:r.assets.map((function(e){return{type:"layout",href:e.browser_download_url,icon:"\ud83d\udce6",title:e.name,description:r.tag_name+" | "+E(e.size)}}))}):a.createElement(w,{items:[{type:"layout",href:"https://github.com/"+e.owner+"/"+e.repo+"/releases",icon:"\ud83d\udd17",title:"GitHub",description:"Releases"}]})}var x=["components"],j={},k="Get started",P={unversionedId:"get-started/index",id:"get-started/index",title:"Get started",description:"Download p8g",source:"@site/docs/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/p8g/docs/get-started/",editUrl:"https://github.com/bernhardfritz/p8g/docs/get-started/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"C",permalink:"/p8g/docs/get-started/c"}},T={},C=[{value:"Download p8g",id:"download-p8g",level:2},{value:"Choose a programming language",id:"choose-a-programming-language",level:2}],D={toc:C};function B(e){var t=e.components,r=(0,o.Z)(e,x);return(0,i.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started"},"Get started"),(0,i.kt)("h2",{id:"download-p8g"},"Download p8g"),(0,i.kt)(O,{owner:"bernhardfritz",repo:"p8g",mdxType:"GitHubReleaseAssets"}),(0,i.kt)("h2",{id:"choose-a-programming-language"},"Choose a programming language"),(0,i.kt)(w,{items:(0,l.jA)().items,mdxType:"MyDocCardList"}))}B.isMDXComponent=!0}}]);