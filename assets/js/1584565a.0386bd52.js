"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[2964],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,g=e.values,v=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==j&&!b.some((function(e){return e.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,O=y.setTabGroupChoices,T=(0,r.useState)(j),E=T[0],I=T[1],N=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=w[v];null!=x&&x!==E&&b.some((function(e){return e.value===x}))&&I(x)}var J=function(e){var t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==E&&(Z(t),I(a),null!=v&&O(v,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=N.indexOf(e.currentTarget)+1;n=null!=(a=N[r])?a:N[0];break;case"ArrowLeft":var l,i=N.indexOf(e.currentTarget)-1;n=null!=(l=N[i])?l:N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:J,onClick:J},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return v}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(941),o=n(4996),u=n(5488),s=n(5162),c=["components"],p={description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile."},d="Java",m={unversionedId:"get-started/java",id:"get-started/java",title:"Java",description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.",source:"@site/docs/get-started/java.md",sourceDirName:"get-started",slug:"/get-started/java",permalink:"/p8g/docs/get-started/java",draft:!1,editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/get-started/java.md",tags:[],version:"current",frontMatter:{description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile."},sidebar:"docs",previous:{title:"C",permalink:"/p8g/docs/get-started/c"},next:{title:"JavaScript",permalink:"/p8g/docs/get-started/js"}},g={},v=[{value:"Hello rectangle!",id:"hello-rectangle",level:2},{value:"Build and run with an IDE",id:"build-and-run-with-an-ide",level:2},{value:"IntelliJ IDEA",id:"intellij-idea",level:3},{value:"Eclipse",id:"eclipse",level:3},{value:"Build and run from the command line",id:"build-and-run-from-the-command-line",level:2}],f={toc:v};function h(e){var t=e.components,p=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java"},"Java"),(0,l.kt)("h2",{id:"hello-rectangle"},"Hello rectangle!"),(0,l.kt)("div",{className:"flex"},(0,l.kt)("div",{style:{flex:1}},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=HelloRectangle.java",title:"HelloRectangle.java"},'import io.github.bernhardfritz.p8g.Sketch;\n\npublic class HelloRectangle extends Sketch {\n    @Override\n    public void draw() {\n        background(220);\n        rect(50, 50, 100, 100);\n    }\n\n    public static void main(String[] args) {\n        Sketch sketch = new HelloRectangle();\n        sketch.run(320, 320, "Hello rectangle!");\n    }\n}\n'))),(0,l.kt)(i.Z,{alt:"Screenshot",sources:{light:(0,o.Z)("/img/hello-rectangle-light.png"),dark:(0,o.Z)("/img/hello-rectangle-dark.png")},width:"320",mdxType:"ThemedImage"})),(0,l.kt)("h2",{id:"build-and-run-with-an-ide"},"Build and run with an IDE"),(0,l.kt)("h3",{id:"intellij-idea"},"IntelliJ IDEA"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IntelliJ project settings",src:n(6277).Z,width:"2272",height:"1778"})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"macOS users should start their application passing ",(0,l.kt)("code",null,"-XstartOnFirstThread")," as a VM option."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IntelliJ run configuration",src:n(1945).Z,width:"2304",height:"1568"}))),(0,l.kt)("p",null,"Tested on IntelliJ IDEA Community 2021.3.3."),(0,l.kt)("h3",{id:"eclipse"},"Eclipse"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eclipse project settings",src:n(6209).Z,width:"2784",height:"1778"})),(0,l.kt)("details",null,(0,l.kt)("summary",null,"macOS users should start their application passing ",(0,l.kt)("code",null,"-XstartOnFirstThread")," as a VM option."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Eclipse run configuration",src:n(5029).Z,width:"2784",height:"1778"}))),(0,l.kt)("p",null,"Tested on Eclipse 4.23."),(0,l.kt)("h2",{id:"build-and-run-from-the-command-line"},"Build and run from the command line"),(0,l.kt)(u.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -cp .;p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on Windows 10 with OpenJDK installed from ",(0,l.kt)("a",{parentName:"p",href:"https://adoptium.net/"},"https://adoptium.net/"),".")),(0,l.kt)(s.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -XstartOnFirstThread -cp .:p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on macOS Mojave 10.14.6 with OpenJDK installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"brew install --cask temurin"),".")),(0,l.kt)(s.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 HelloRectangle.java\n\u2514\u2500\u2500 p8g.jar\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"javac -cp p8g.jar HelloRectangle.java\njava -cp .:p8g.jar HelloRectangle\n")),(0,l.kt)("p",null,"Tested on Ubuntu 20.04.3 LTS with OpenJDK installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt install temurin-17-jdk"),"."))))}h.isMDXComponent=!0},6209:function(e,t,n){t.Z=n.p+"assets/images/eclipse-project-settings-fc46d35704ba91b121b10a84e3b5da0a.png"},5029:function(e,t,n){t.Z=n.p+"assets/images/eclipse-run-configuration-a3740ae064b73170f7565b4229a2cc31.png"},6277:function(e,t,n){t.Z=n.p+"assets/images/intellij-project-settings-a8ab630aa50acead9b7573961c8b998a.png"},1945:function(e,t,n){t.Z=n.p+"assets/images/intellij-run-configuration-6ccf6c26d2a88e01097b1fbd246579c3.png"}}]);