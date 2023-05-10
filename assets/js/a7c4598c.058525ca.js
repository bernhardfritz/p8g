"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[1529],{4989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return f}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=t(5488),u=t(5162),i=t(9819),s=t(4678),d=["components"],c={description:"C | JavaScript"},p="Keyboard events",m={unversionedId:"keyboard-events",id:"keyboard-events",title:"Keyboard events",description:"C | JavaScript",source:"@site/examples/keyboard-events.md",sourceDirName:".",slug:"/keyboard-events",permalink:"/p8g/examples/keyboard-events",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/examples/keyboard-events.md",tags:[],version:"current",frontMatter:{description:"C | JavaScript"},sidebar:"examples",previous:{title:"Flappy Bird",permalink:"/p8g/examples/flappy-bird"},next:{title:"Mouse events",permalink:"/p8g/examples/mouse-events"}},v={},f=[],b={toc:f};function h(e){var n=e.components,t=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"keyboard-events"},"Keyboard events"),(0,l.kt)(s.Z,{src:"/examples/keyboard-events.html",mdxType:"Emscripten"}),(0,l.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"c",title:"keyboard_events.c",mdxType:"CodeBlock"},'#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\n#include <stdio.h>\n#include <string.h>\n\nchar buf[16] = "Press any key";\n\nvoid draw() {\n    background(0);\n    fill(255);\n    textSize(32);\n    text(buf, width / 2.f - (strlen(buf) * 18.f) / 2.f, height / 2.f + 8.f);\n}\n\nvoid keyPressed() {\n    snprintf(buf, 16, "keyCode: %d", keyCode);\n}\n\nvoid keyReleased() {}\nvoid mouseMoved() {}\nvoid mousePressed() {}\nvoid mouseReleased() {}\nvoid mouseWheel(float delta) {}\n\nint main() {\n    run(320, 320, "Keyboard events");\n}')),(0,l.kt)(u.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)(i.Z,{language:"html",title:"index.html",mdxType:"CodeBlock"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Keyboard events</title>\n  </head>\n  <body>\n    <script type="module" src="keyboard-events.js"><\/script>\n  </body>\n</html>\n'),(0,l.kt)(i.Z,{language:"js",title:"keyboard_events.js",mdxType:"CodeBlock"},"import p8g, {\n  background,\n  createCanvas,\n  fill,\n  height,\n  keyCode,\n  text,\n  textSize,\n  width,\n} from 'p8g.js';\n\nlet str = 'Press any key';\n\np8g.draw = () => {\n  background(0);\n  fill(255);\n  textSize(32);\n  text(str, width / 2 - (str.length * 18) / 2, height / 2 + 8);\n};\n\np8g.keyPressed = () => {\n  str = `keyCode: ${keyCode}`;\n};\n\ncreateCanvas(320, 320);\n"))))}h.isMDXComponent=!0},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6010),l="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(3117),a=t(7294),l=t(6010),o=t(2389),u=t(7392),i=t(7094),s=t(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,m=e.defaultValue,v=e.values,f=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,u.l)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),C=x.tabGroupChoices,T=x.setTabGroupChoices,Z=(0,a.useState)(g),w=Z[0],E=Z[1],N=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=C[f];null!=S&&S!==w&&y.some((function(e){return e.value===S}))&&E(S)}var I=function(e){var n=e.currentTarget,t=N.indexOf(n),r=y[t].value;r!==w&&(_(n),E(r),null!=f&&T(f,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;t=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var l,o=N.indexOf(e.currentTarget)-1;t=null!=(l=N[o])?l:N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function m(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},4678:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7294),a=t(6649),l=t(4996);function o(e){return r.createElement(a.Z,{src:(0,l.Z)(e.src),style:{width:"1px",minWidth:"100%"}})}}}]);