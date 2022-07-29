"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[5831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},c="line",p={unversionedId:"reference/line",id:"reference/line",title:"line",description:"Description",source:"@site/docs/reference/line.md",sourceDirName:"reference",slug:"/reference/line",permalink:"/p8g/docs/reference/line",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/reference/line.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"keyReleased",permalink:"/p8g/docs/reference/keyReleased"},next:{title:"loadImage",permalink:"/p8g/docs/reference/loadImage"}},u={},f=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"line"},"line"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Draws a line (a direct path between two points) to the screen. Lines are drawn with a default width of 1 pixel. This width can be modified by using the ",(0,o.kt)("a",{parentName:"p",href:"strokeWeight"},"strokeWeight")," function. A line cannot be filled, therefore the ",(0,o.kt)("a",{parentName:"p",href:"fill"},"fill")," function will not affect the color of a line. So to color a line, use the ",(0,o.kt)("a",{parentName:"p",href:"stroke"},"stroke")," function."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"line(x1, y1, x2, y2)\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x1"),(0,o.kt)("td",{parentName:"tr",align:null},"x-coordinate of the first point")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"y1"),(0,o.kt)("td",{parentName:"tr",align:null},"y-coordinate of the first point")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"x2"),(0,o.kt)("td",{parentName:"tr",align:null},"x-coordinate of the second point")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"y2"),(0,o.kt)("td",{parentName:"tr",align:null},"y-coordinate of the second point")))))}d.isMDXComponent=!0}}]);