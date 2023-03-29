"use strict";(self.webpackChunkk_8_s_designer=self.webpackChunkk_8_s_designer||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Documentation",l={unversionedId:"intro",id:"intro",title:"Documentation",description:"Locale Dropdown",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial GUI",permalink:"/docs/category/tutorial-gui"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:r(2733).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Welcome to k8s designer, a tool that helps you ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"generate boilerplates, Docker Compose files, and Kubernetes manifests"))," for your project. With k8s designer, you can easily set up your project to run in a Kubernetes cluster.\nLet's explore ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"K8s Designer in less than 10 minutes")),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The process of creating boilerplate code, setting configuration options, generating Dockerfile, Docker-Compose files and images, and creating Kubernetes manifest files can be time-consuming and error-prone.\nThese tasks can delay the project timeline, add additional costs, and reduce the efficiency of the development team."),(0,o.kt)("p",null,"Therefore, We're making it easy for you to achieve your goal.\nYou can use it either through a graphical user interface (GUI) or a command-line interface (CLI).\nThis guide will walk you through the steps required to get started with k8s designer.\nYou can achieve your goal in two ways:- "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using Graphical User Interface(GUI)"),(0,o.kt)("li",{parentName:"ul"},"Using Command Line Interface(CLI)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Locale Dropdown",src:r(3412).Z,width:"866",height:"576"})),(0,o.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Graphical User Interface ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Account in any registry such as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/features/packages"},"ghcr")," or ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"dockerhub")," registry for the images to be pushed"))),(0,o.kt)("li",{parentName:"ul"},"For Command Line Interface",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"NODE")," version 16.14 or above for installation of NPM package that is needed to generate boilerplate, docker-compose & k8s-manifests files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"DOCKER")," for the images to be build and pushed.")))))}d.isMDXComponent=!0},3412:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/undraw_folder_files_re_2cbm1-69bf1dcc3008bf38b8fd60fe238a0755.svg"},2733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/welcome-ad1cf6387565aef549ec3258ea0a7f3f.svg"}}]);