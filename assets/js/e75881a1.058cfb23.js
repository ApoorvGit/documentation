"use strict";(self.webpackChunkk_8_s_designer=self.webpackChunkk_8_s_designer||[]).push([[2872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,g=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="How to use",u={unversionedId:"Tutorial CLI/How-to-use",id:"Tutorial CLI/How-to-use",title:"How to use",description:"Learn to generate output using the CLI.",source:"@site/docs/Tutorial CLI/How-to-use.md",sourceDirName:"Tutorial CLI",slug:"/Tutorial CLI/How-to-use",permalink:"/docs/Tutorial CLI/How-to-use",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial CLI",permalink:"/docs/category/tutorial-cli"}},l={},p=[{value:"Download the package",id:"download-the-package",level:2},{value:"Using the help option",id:"using-the-help-option",level:2},{value:"Generating the output",id:"generating-the-output",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Learn to generate output using the CLI."),(0,o.kt)("h2",{id:"download-the-package"},"Download the package"),(0,o.kt)("p",null,"Run the below command inside terminal to install the package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install k8s-designer\n")),(0,o.kt)("h2",{id:"using-the-help-option"},"Using the help option"),(0,o.kt)("p",null,"You can have a look at the different options the package offers using the -h option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k8s-designer -h\n")),(0,o.kt)("h2",{id:"generating-the-output"},"Generating the output"),(0,o.kt)("p",null,"You can generate the output using the json configurations specified with the -f option, under a custom folder specified with the -o option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"k8s-designer -f path-to-configurations.json -o path-to-project-directory\n")))}d.isMDXComponent=!0}}]);