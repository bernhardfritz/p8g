"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[1529],{4989:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return y}});var r=t(3117),a=t(102),s=(t(7294),t(3905)),d=t(5488),i=t(5162),o=t(6975),l=t(4678),p=["components"],c={description:"C | JavaScript"},u="Keyboard events",m={unversionedId:"keyboard-events",id:"keyboard-events",title:"Keyboard events",description:"C | JavaScript",source:"@site/examples/keyboard-events.md",sourceDirName:".",slug:"/keyboard-events",permalink:"/p8g/examples/keyboard-events",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/examples/keyboard-events.md",tags:[],version:"current",frontMatter:{description:"C | JavaScript"},sidebar:"examples",previous:{title:"Flappy Bird",permalink:"/p8g/examples/flappy-bird"},next:{title:"Mouse events",permalink:"/p8g/examples/mouse-events"}},k={},y=[],b={toc:y};function f(e){var n=e.components,t=(0,a.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"keyboard-events"},"Keyboard events"),(0,s.kt)(l.Z,{src:"/examples/keyboard-events.html",mdxType:"Emscripten"}),(0,s.kt)(d.Z,{groupId:"lang",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"c",title:"keyboard_events.c",mdxType:"CodeBlock"},'#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\n#include <stdio.h>\n#include <string.h>\n\nchar buf[16] = "Press any key";\n\nvoid draw() {\n    background(0);\n    fill(255);\n    textSize(32);\n    text(buf, width / 2.f - (strlen(buf) * 18.f) / 2.f, height / 2.f + 8.f);\n}\n\nvoid keyPressed() {\n    snprintf(buf, 16, "keyCode: %d", keyCode);\n}\n\nint main() {\n    run(320, 320, "Keyboard events");\n}')),(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)(o.Z,{language:"html",title:"index.html",mdxType:"CodeBlock"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Keyboard events</title>\n  </head>\n  <body>\n    <script type="module" src="keyboard-events.js"><\/script>\n  </body>\n</html>\n'),(0,s.kt)(o.Z,{language:"js",title:"keyboard_events.js",mdxType:"CodeBlock"},"import p8g, {\n  background,\n  createCanvas,\n  fill,\n  height,\n  keyCode,\n  text,\n  textSize,\n  width,\n} from 'p8g.js';\n\nlet str = 'Press any key';\n\np8g.draw = () => {\n  background(0);\n  fill(255);\n  textSize(32);\n  text(str, width / 2 - (str.length * 18) / 2, height / 2 + 8);\n};\n\np8g.keyPressed = () => {\n  str = `keyCode: ${keyCode}`;\n};\n\ncreateCanvas(320, 320);\n"))))}f.isMDXComponent=!0},4678:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7294),a=t(6649),s=t(4996);function d(e){return r.createElement(a.Z,{src:(0,s.Z)(e.src),style:{width:"1px",minWidth:"100%"}})}}}]);