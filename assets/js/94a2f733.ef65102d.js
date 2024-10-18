"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8562],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){return function(t){var r=c(t.components);return n.createElement(e,i({},t,{components:r}))}},c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(o,".").concat(d)]||s[d]||h[d]||i;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=_;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},25682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(58168),a=(r(96540),r(15680));const i={id:"ensured_artifact_group"},o="ensured_artifact_group type",p={unversionedId:"api/bxl/ensured_artifact_group",id:"api/bxl/ensured_artifact_group",title:"ensured_artifact_group type",description:"An artifact group that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of each artifact in the group rather than the standard representation.",source:"@site/../docs/api/bxl/ensured_artifact_group.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/ensured_artifact_group",permalink:"/docs/api/bxl/ensured_artifact_group",draft:!1,tags:[],version:"current",frontMatter:{id:"ensured_artifact_group"},sidebar:"apiSidebar",previous:{title:"digest_config type",permalink:"/docs/api/bxl/digest_config"},next:{title:"file_set type",permalink:"/docs/api/bxl/file_set"}},u={},l=[{value:"ensured_artifact_group.abs_path",id:"ensured_artifact_groupabs_path",level:2},{value:"ensured_artifact_group.rel_path",id:"ensured_artifact_grouprel_path",level:2}],s={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.mdx)(c,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"ensured_artifact_group-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"ensured_artifact_group")," type"),(0,a.mdx)("p",null,"An artifact group that will be materialized to buck-out at the end of the bxl invocation. These artifacts can be printed to bxl's results. Doing so will print the path of each artifact in the group rather than the standard representation."),(0,a.mdx)("p",null,"Ensured artifact groups are serializable and hashable."),(0,a.mdx)("h2",{id:"ensured_artifact_groupabs_path"},"ensured","_","artifact","_","group.abs","_","path"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def ensured_artifact_group.abs_path() -> ensured_artifact_group\n")),(0,a.mdx)("p",null,"Converts each artifact in this artifact group to be printed by its absolute path. Note that this will only print out the absolute path via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,a.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact group."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_abs_path(ctx):\n    # some target with RunInfo outputs\n    result = ctx.analysis("root//bin/kind:target_with_outputs")\n    ensured = ctx.output.ensure_multiple(result.providers()[RunInfo]) # currently defaults to creating an EnsuredArtifactGroup with a relative path\n\n    ensured_with_abs_path = ensured.abs_path() # create a new EnsuredArtifactGroup with absolute path to reuse\n    print(ensured_with_abs_path) # should return something like <ensured group ... >\n    ctx.output.print(ensured_with_abs_path) # should return the absolute path of the artifact\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"ensured_artifact_grouprel_path"},"ensured","_","artifact","_","group.rel","_","path"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"def ensured_artifact_group.rel_path() -> ensured_artifact_group\n")),(0,a.mdx)("p",null,"Converts each artifact in this artifact group to be printed by its path relative to the project root. Note that this will only print out the relative path via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),". Starlark's ",(0,a.mdx)("inlineCode",{parentName:"p"},"print()")," will print out the display info for an ensured artifact group."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rel_path(ctx):\n    # some target with RunInfo outputs\n    result = ctx.analysis("root//bin/kind:target_with_outputs")\n    ensured = ctx.output.ensure_multiple(result.providers()[RunInfo]) # currently defaults to creating an EnsuredArtifactGroup with a relative path\n\n    ensured_with_rel_path = ensured.rel_path() # create a new EnsuredArtifact with relative path to reuse\n    print(ensured_with_rel_path) # should return something like <ensured group ... >\n    ctx.output.print(ensured_with_rel_path) # should return the relative path of the artifact\n')))}d.isMDXComponent=!0}}]);