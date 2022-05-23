"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(3117),r=n(7294),l=n(2389),i=n(9575),o=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),j=k.tabGroupChoices,y=k.setTabGroupChoices,w=(0,r.useState)(b),O=w[0],T=w[1],E=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=j[m];null!=I&&I!==O&&f.some((function(e){return e.value===I}))&&T(I)}var Z=function(e){var t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==O&&(N(t),T(a),null!=m&&y(m,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},g)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:x,onFocus:Z,onClick:Z},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return v}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(9750),o=n(4996),u=n(9877),c=n(8215),s=["components"],p={},d="Java",m={unversionedId:"get-started/java",id:"get-started/java",title:"Java",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.",source:"@site/docs/get-started/java.md",sourceDirName:"get-started",slug:"/get-started/java",permalink:"/p8g/docs/get-started/java",editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/get-started/java.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C",permalink:"/p8g/docs/get-started/c"},next:{title:"Reference",permalink:"/p8g/docs/reference/"}},g={},v=[{value:"Hello rectangle!",id:"hello-rectangle",level:2},{value:"Build and run with an IDE",id:"build-and-run-with-an-ide",level:2},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"Eclipse",id:"eclipse",level:3},{value:"Build and run from the command line",id:"build-and-run-from-the-command-line",level:2}],f={toc:v};function h(e){var t=e.components,p=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java"},"Java"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.")),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_(programming_language)"},"https://en.wikipedia.org/wiki/Java_(programming_language)")),(0,l.kt)("h2",{id:"hello-rectangle"},"Hello rectangle!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=HelloRectangle.java",title:"HelloRectangle.java"},'import io.github.bernhardfritz.p8g.Sketch;\n\npublic class HelloRectangle extends Sketch {\n    @Override\n    public void draw() {\n        background(100);\n        rect(50, 50, 100, 100);\n    }\n\n    public static void main(String[] args) {\n        Sketch sketch = new HelloRectangle();\n        sketch.run(400, 400, "Hello rectangle!");\n    }\n}\n')),(0,l.kt)(i.Z,{alt:"Screenshot",sources:{light:(0,o.Z)("/img/hello-rectangle-light.png"),dark:(0,o.Z)("/img/hello-rectangle-dark.png")},mdxType:"ThemedImage"}),(0,l.kt)("h2",{id:"build-and-run-with-an-ide"},"Build and run with an IDE"),(0,l.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IntelliJ project settings",src:n(6277).Z,width:"2272",height:"1778"})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"macOS users should start their application passing ",(0,l.kt)("code",null,"-XstartOnFirstThread")," as a VM option."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IntelliJ run configuration",src:n(1945).Z,width:"2304",height:"1568"}))),(0,l.kt)("p",null,"Tested on IntelliJ IDEA Community 2021.3.3."),(0,l.kt)("h3",{id:"eclipse"},"Eclipse"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eclipse project settings",src:n(6209).Z,width:"2784",height:"1778"})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"macOS users should start their application passing ",(0,l.kt)("code",null,"-XstartOnFirstThread")," as a VM option."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eclipse run configuration",src:n(5029).Z,width:"2784",height:"1778"}))),(0,l.kt)("p",null,"Tested on Eclipse 4.23."),(0,l.kt)("h2",{id:"build-and-run-from-the-command-line"},"Build and run from the command line"),(0,l.kt)(u.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -cp .;p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on Windows 10 with OpenJDK installed from ",(0,l.kt)("a",{parentName:"p",href:"https://adoptium.net/"},"https://adoptium.net/"),".")),(0,l.kt)(c.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -XstartOnFirstThread -cp .:p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on macOS Mojave 10.14.6 with OpenJDK installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"brew install --cask temurin"),".")),(0,l.kt)(c.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -cp .:p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on Ubuntu 20.04.3 LTS with OpenJDK installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt install temurin-17-jdk"),"."))))}h.isMDXComponent=!0},6209:function(e,t,n){t.Z=n.p+"assets/images/eclipse-project-settings-fc46d35704ba91b121b10a84e3b5da0a.png"},5029:function(e,t,n){t.Z=n.p+"assets/images/eclipse-run-configuration-a3740ae064b73170f7565b4229a2cc31.png"},6277:function(e,t,n){t.Z=n.p+"assets/images/intellij-project-settings-a8ab630aa50acead9b7573961c8b998a.png"},1945:function(e,t,n){t.Z=n.p+"assets/images/intellij-run-configuration-6ccf6c26d2a88e01097b1fbd246579c3.png"}}]);