"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5254],{3905:(t,e,r)=>{r.r(e),r.d(e,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){return function(e){var r=c(e.components);return n.createElement(t,i({},e,{components:r}))}},c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},f="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||h[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[f]="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85875:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"bxl.EnsuredArtifact"},l="bxl.EnsuredArtifact type",o={unversionedId:"api/bxl/bxl.EnsuredArtifact",id:"api/bxl/bxl.EnsuredArtifact",title:"bxl.EnsuredArtifact type",description:"An artifact that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of the artifact rather than the standard representation.",source:"@site/../docs/api/bxl/bxl.EnsuredArtifact.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl.EnsuredArtifact",permalink:"/docs/api/bxl/bxl.EnsuredArtifact",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl.EnsuredArtifact"},sidebar:"apiSidebar",previous:{title:"bxl.CqueryContext type",permalink:"/docs/api/bxl/bxl.CqueryContext"},next:{title:"bxl.FileNode type",permalink:"/docs/api/bxl/bxl.FileNode"}},p={},u=[{value:"bxl.EnsuredArtifact.abs_path",id:"bxlensuredartifactabs_path",level:2},{value:"bxl.EnsuredArtifact.rel_path",id:"bxlensuredartifactrel_path",level:2}],s={toc:u};function c(t){let{components:e,...r}=t;return(0,a.mdx)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"bxlensuredartifact-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"bxl.EnsuredArtifact")," type"),(0,a.mdx)("p",null,"An artifact that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of the artifact rather than the standard representation."),(0,a.mdx)("p",null,"Ensured artifacts are serializable and hashable."),(0,a.mdx)("h2",{id:"bxlensuredartifactabs_path"},"bxl.EnsuredArtifact.abs","_","path"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.EnsuredArtifact.abs_path()\n")),(0,a.mdx)("p",null,"Converts this artifact to be printed by its absolute path. Note that this will only print out the absolute path via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,a.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_abs_path(ctx):\n    actions = ctx.bxl_actions().actions\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output) # currently defaults to creating an EnsuredArtifact with a relative path\n\n    ensured_with_abs_path = ensured.abs_path() # create a new EnsuredArtifact with absolute path to reuse\n    print(ensured_with_abs_path) # should return something like <ensured artifact ... >\n    ctx.output.print(ensured_with_abs_path) # should return the absolute path of the artifact\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxlensuredartifactrel_path"},"bxl.EnsuredArtifact.rel","_","path"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def bxl.EnsuredArtifact.rel_path()\n")),(0,a.mdx)("p",null,"Converts this artifact to be printed by its path relative to the project root. Note that this will only print out the relative path via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,a.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rel_path(ctx):\n    actions = ctx.bxl_actions().actions\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output) # currently defaults to creating an EnsuredArtifact with a relative path\n\n    ensured_with_rel_path = ensured.rel_path() # create a new EnsuredArtifact with relative path to reuse\n    print(ensured_with_rel_path) # should return something like <ensured artifact ... >\n    ctx.output.print(ensured_with_rel_path) # should return the relative path of the artifact\n')))}c.isMDXComponent=!0}}]);