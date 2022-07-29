"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[5511],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3640:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],c={},p="imageMode",s={unversionedId:"reference/imageMode",id:"reference/imageMode",title:"imageMode",description:"Description",source:"@site/docs/reference/imageMode.md",sourceDirName:"reference",slug:"/reference/imageMode",permalink:"/p8g/docs/reference/imageMode",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/reference/imageMode.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"image",permalink:"/p8g/docs/reference/image"},next:{title:"Image",permalink:"/p8g/docs/reference/image_"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imagemode"},"imageMode"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Modifies the location from which images are drawn by changing the way in which parameters given to ",(0,i.kt)("a",{parentName:"p",href:"image"},"image")," are interpreted."),(0,i.kt)("p",null,"The default mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"CORNER"),", which interprets the second and third parameters as the upper-left corner of the image, while the fourth and fifth parameters are its width and height."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"imageMode(CORNERS)")," interprets the second and third parameters as the location of one of the corners, and the fourth and fifth parameters as the location of the diagonally opposite corner. Note, the image is drawn between the coordinates, so it is not necessary that the first corner be the upper left corner."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"imageMode(CENTER)")," interprets the second and third parameters as the images's center point, while the fourth and fifth parameters are its width and height."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"imageMode(RADIUS)")," also uses the second and third parameters as the images's center point, but uses the fourth and fifth parameters to specify half of the images's width and height respectively."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"imageMode(mode)\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mode"),(0,i.kt)("td",{parentName:"tr",align:null},"either CORNER, CORNERS, CENTER, or RADIUS")))))}u.isMDXComponent=!0}}]);