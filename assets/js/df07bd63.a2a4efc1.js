"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1497],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>c,withMDXComponents:()=>p});var l=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),p=function(e){return function(t){var r=c(t.components);return l.createElement(e,a({},t,{components:r}))}},c=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},x=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?l.createElement(b,u(u({ref:t},s),{},{components:r})):l.createElement(b,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=x;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[b]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}x.displayName="MDXCreateElement"},44004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=r(58168),n=(r(96540),r(15680));const a={id:"bxl.BuildResult"},i="bxl.BuildResult type",u={unversionedId:"api/bxl/bxl.BuildResult",id:"api/bxl/bxl.BuildResult",title:"bxl.BuildResult type",description:"The result of building in bxl.",source:"@site/../docs/api/bxl/bxl.BuildResult.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl.BuildResult",permalink:"/docs/api/bxl/bxl.BuildResult",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl.BuildResult"},sidebar:"apiSidebar",previous:{title:"bxl.AuditContext type",permalink:"/docs/api/bxl/bxl.AuditContext"},next:{title:"bxl.ConfiguredTargetNode type",permalink:"/docs/api/bxl/bxl.ConfiguredTargetNode"}},o={},s=[{value:"bxl.BuildResult.artifacts",id:"bxlbuildresultartifacts",level:2},{value:"bxl.BuildResult.failures",id:"bxlbuildresultfailures",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.mdx)(c,(0,l.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"bxlbuildresult-type"},(0,n.mdx)("inlineCode",{parentName:"h1"},"bxl.BuildResult")," type"),(0,n.mdx)("p",null,"The result of building in bxl."),(0,n.mdx)("h2",{id:"bxlbuildresultartifacts"},"bxl.BuildResult.artifacts"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.BuildResult.artifacts() -> None | bxl_built_artifacts_iterable\n")),(0,n.mdx)("p",null,"Returns an optional iterable of artifacts that was successfully built."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.artifacts())\n")),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"bxlbuildresultfailures"},"bxl.BuildResult.failures"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.BuildResult.failures() -> None | bxl_failed_artifacts_iterable\n")),(0,n.mdx)("p",null,"Returns an optional of iterable of artifacts that failed to be built."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.failures())\n")))}d.isMDXComponent=!0}}]);