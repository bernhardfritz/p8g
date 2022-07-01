"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[1097],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),h=a,d=f["".concat(s,".").concat(h)]||f[h]||l[h]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),p=["components"],i={},s="push",c={unversionedId:"reference/push",id:"reference/push",title:"push",description:"Description",source:"@site/docs/reference/push.md",sourceDirName:"reference",slug:"/reference/push",permalink:"/p8g/docs/reference/push",editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/reference/push.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pop",permalink:"/p8g/docs/reference/pop"},next:{title:"rect",permalink:"/p8g/docs/reference/rect"}},u={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2}],f={toc:l};function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push"},"push"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"push"},"push")," function saves the current drawing style settings and transformations, while ",(0,o.kt)("a",{parentName:"p",href:"pop"},"pop")," restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with ",(0,o.kt)("a",{parentName:"p",href:"push"},"push"),", it builds on the current style and transform information. The ",(0,o.kt)("a",{parentName:"p",href:"push"},"push")," and ",(0,o.kt)("a",{parentName:"p",href:"pop"},"pop")," functions can be embedded to provide more control."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"push"},"push")," stores information related to the current transformation state and style settings controlled by the following functions: ",(0,o.kt)("a",{parentName:"p",href:"fill"},"fill"),", ",(0,o.kt)("a",{parentName:"p",href:"noFill"},"noFill"),", ",(0,o.kt)("a",{parentName:"p",href:"noStroke"},"noStroke"),", ",(0,o.kt)("a",{parentName:"p",href:"stroke"},"stroke"),", ",(0,o.kt)("a",{parentName:"p",href:"strokeWeight"},"strokeWeight"),", ",(0,o.kt)("a",{parentName:"p",href:"rectMode"},"rectMode"),", ",(0,o.kt)("a",{parentName:"p",href:"ellipseMode"},"ellipseMode"),", ",(0,o.kt)("a",{parentName:"p",href:"colorMode"},"colorMode"),", ",(0,o.kt)("a",{parentName:"p",href:"applyMatrix"},"applyMatrix"),", ",(0,o.kt)("a",{parentName:"p",href:"resetMatrix"},"resetMatrix"),", ",(0,o.kt)("a",{parentName:"p",href:"rotate"},"rotate"),", ",(0,o.kt)("a",{parentName:"p",href:"scale"},"scale"),", ",(0,o.kt)("a",{parentName:"p",href:"translate"},"translate"),"."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"push()\n")))}h.isMDXComponent=!0}}]);