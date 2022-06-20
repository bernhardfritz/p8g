"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[4396],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3117),a=n(7294),l=n(2389),o=n(9575),i=n(6010),c="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),k=w.tabGroupChoices,y=w.setTabGroupChoices,_=(0,a.useState)(b),N=_[0],T=_[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==N&&h.some((function(e){return e.value===x}))&&T(x)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==N&&(E(t),T(r),null!=m&&y(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},7902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return f}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=n(9750),i=n(4996),c=n(9877),s=n(8215),u=["components"],p={},d="C",m={unversionedId:"get-started/c",id:"get-started/c",title:"C",description:"C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.",source:"@site/docs/get-started/c.md",sourceDirName:"get-started",slug:"/get-started/c",permalink:"/p8g/docs/get-started/c",editUrl:"https://github.com/bernhardfritz/p8g/edit/master/docs/docs/get-started/c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/p8g/docs/get-started/"},next:{title:"Java",permalink:"/p8g/docs/get-started/java"}},g={},f=[{value:"Hello rectangle!",id:"hello-rectangle",level:2},{value:"Build and run from the command line",id:"build-and-run-from-the-command-line",level:2}],h={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"c"},"C"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"C is an imperative procedural language. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.")),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/C_(programming_language)"},"https://en.wikipedia.org/wiki/C_(programming_language)")),(0,l.kt)("h2",{id:"hello-rectangle"},"Hello rectangle!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c",metastring:"title=hello_rectangle.c",title:"hello_rectangle.c"},'#define USING_NAMESPACE_P8G\n#include "p8g.h"\n\nvoid draw(void) {\n    background(100);\n    rect(50, 50, 100, 100);\n}\n\nint main(void) {\n    run(400, 400, "Hello rectangle!");\n    return 0;\n}\n')),(0,l.kt)(o.Z,{alt:"Screenshot",sources:{light:(0,i.Z)("/img/hello-rectangle-light.png"),dark:(0,i.Z)("/img/hello-rectangle-dark.png")},mdxType:"ThemedImage"}),(0,l.kt)("h2",{id:"build-and-run-from-the-command-line"},"Build and run from the command line"),(0,l.kt)(c.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 glfw.dll\n\u251c\u2500\u2500 hello_rectangle.c\n\u251c\u2500\u2500 p8g.dll\n\u2514\u2500\u2500 p8g.h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gcc hello_rectangle.c -L. -lp8g\n.\\a.exe\n")),(0,l.kt)("p",null,"Tested on Windows 10 with ",(0,l.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z"},"https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/8.1.0/threads-posix/seh/x86_64-8.1.0-release-posix-seh-rt_v6-rev0.7z")," extracted to ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\mingw64\\bin")," added to ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable.")),(0,l.kt)(s.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 hello_rectangle.c\n\u251c\u2500\u2500 libglfw.3.dylib\n\u251c\u2500\u2500 libp8g.dylib\n\u2514\u2500\u2500 p8g.h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcc hello_rectangle.c -L. -lp8g\ninstall_name_tool -add_rpath @executable_path/. a.out\n./a.out\n")),(0,l.kt)("p",null,"Tested on macOS Mojave 10.14.6 with command line tools installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"xcode-select --install"),".")),(0,l.kt)(s.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 hello_rectangle.c\n\u251c\u2500\u2500 libglfw.so\n\u251c\u2500\u2500 libp8g.so\n\u2514\u2500\u2500 p8g.h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcc hello_rectangle.c -L. -lp8g -Wl,-rpath=.\n./a.out\n")),(0,l.kt)("p",null,"Tested on Ubuntu 20.04.3 LTS with build essentials installed via ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt install build-essential"),".")),(0,l.kt)(s.Z,{value:"web",label:"Web",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 hello_rectangle.c\n\u251c\u2500\u2500 p8g.h\n\u251c\u2500\u2500 p8g.wasm\n\u2514\u2500\u2500 p8g.html\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"emcc -s MAIN_MODULE=2 -sEXPORTED_FUNCTIONS=_main -o hello_rectangle.html hello_rectangle.c p8g.wasm -s MIN_WEBGL_VERSION=2 -s MAX_WEBGL_VERSION=2 -s FULL_ES3=1 -s USE_GLFW=3 --shell-file p8g.html\nemrun --no_browser hello_rectangle.html\n")),(0,l.kt)("p",null,"Tested on macOS Mojave 10.14.6 with Emscripten SDK 3.1.8 downloaded and installed from ",(0,l.kt)("a",{parentName:"p",href:"https://emscripten.org/docs/getting_started/downloads.html"},"https://emscripten.org/docs/getting_started/downloads.html"),"."))))}v.isMDXComponent=!0}}]);