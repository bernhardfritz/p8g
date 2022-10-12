"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[8964],{7666:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return k}});var s=t(3117),o=t(102),a=(t(7294),t(3905)),r=t(5488),i=t(5162),u=t(6975),d=t(4678),l=["components"],c={description:"C | Java | JavaScript"},m="Mouse events",p={unversionedId:"mouse-events",id:"mouse-events",title:"Mouse events",description:"C | Java | JavaScript",source:"@site/examples/mouse-events.md",sourceDirName:".",slug:"/mouse-events",permalink:"/p8g/examples/mouse-events",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/examples/mouse-events.md",tags:[],version:"current",frontMatter:{description:"C | Java | JavaScript"},sidebar:"examples",previous:{title:"Keyboard events",permalink:"/p8g/examples/keyboard-events"},next:{title:"Noise",permalink:"/p8g/examples/noise"}},v={},k=[],g={toc:k};function b(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mouse-events"},"Mouse events"),(0,a.kt)(d.Z,{src:"/examples/mouse-events.html",mdxType:"Emscripten"}),(0,a.kt)(r.Z,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"c",title:"mouse_events.c",mdxType:"CodeBlock"},'#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\nint once;\n\nvoid draw() {\n    if (!once) {\n        background(220);\n        once = 1;\n    }\n}\n\nvoid keyPressed() {}\nvoid keyReleased() {}\n\nvoid mouseMoved() {\n    ellipseMode(CENTER);\n    ellipse(mouseX, mouseY, 50, 50);\n}\n\nvoid mousePressed() {\n    background(220);\n}\n\nvoid mouseReleased() {}\nvoid mouseWheel(float delta) {}\n\nint main() {\n    run(320, 320, "Mouse events");\n}')),(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"java",title:"MouseEvents.java",mdxType:"CodeBlock"},'import io.github.bernhardfritz.p8g.Sketch;\n\npublic class MouseEvents extends Sketch {\n\n    private boolean once;\n\n    @Override\n    protected void draw() {\n        if (!once) {\n            background(220);\n            once = true;\n        }\n    }\n\n    @Override\n    protected void mouseMoved() {\n        ellipseMode(CENTER);\n        ellipse(mouseX, mouseY, 50, 50);\n    }\n\n    @Override\n    protected void mousePressed() {\n        background(220);\n    }\n\n    public static void main(String[] args) {\n        Sketch sketch = new MouseEvents();\n        sketch.run(320, 320, "Mouse events");\n    }\n}\n')),(0,a.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)(u.Z,{language:"html",title:"index.html",mdxType:"CodeBlock"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Mouse events</title>\n  </head>\n  <body>\n    <script type="module" src="mouse-events.js"><\/script>\n  </body>\n</html>'),(0,a.kt)(u.Z,{language:"js",title:"mouse-events.js",mdxType:"CodeBlock"},"import p8g, {\n  background,\n  createCanvas,\n  CENTER,\n  ellipseMode,\n  ellipse,\n  mouseX,\n  mouseY,\n} from 'p8g.js';\n\nlet once = false;\n\np8g.draw = () => {\n  if (!once) {\n    background(220);\n    once = true;\n  }\n};\n\np8g.mouseMoved = () => {\n  ellipseMode(CENTER);\n  ellipse(mouseX, mouseY, 50, 50);\n};\n\ncreateCanvas(320, 320);\n"))))}b.isMDXComponent=!0},4678:function(e,n,t){t.d(n,{Z:function(){return r}});var s=t(7294),o=t(6649),a=t(4996);function r(e){return s.createElement(o.Z,{src:(0,a.Z)(e.src),style:{width:"1px",minWidth:"100%"}})}}}]);