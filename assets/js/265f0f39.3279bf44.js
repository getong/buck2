"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5319],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>o,MDXProvider:()=>x,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){return function(n){var t=m(n.components);return a.createElement(e,i({},n,{components:t}))}},m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},x=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=m(t),x=r,u=s["".concat(l,".").concat(x)]||s[x]||c[x]||i;return t?a.createElement(u,d(d({ref:n},o),{},{components:t})):a.createElement(u,d({ref:n},o))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[u]="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},71840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={id:"list"},l="list type",d={unversionedId:"api/starlark/list",id:"api/starlark/list",title:"list type",description:"list.append",source:"@site/../docs/api/starlark/list.generated.md",sourceDirName:"api/starlark",slug:"/api/starlark/list",permalink:"/docs/api/starlark/list",draft:!1,tags:[],version:"current",frontMatter:{id:"list"},sidebar:"apiSidebar",previous:{title:"dict type",permalink:"/docs/api/starlark/dict"},next:{title:"string type",permalink:"/docs/api/starlark/string"}},p={},o=[{value:"list.append",id:"listappend",level:2},{value:"list.clear",id:"listclear",level:2},{value:"list.extend",id:"listextend",level:2},{value:"list.index",id:"listindex",level:2},{value:"list.insert",id:"listinsert",level:2},{value:"list.pop",id:"listpop",level:2},{value:"list.remove",id:"listremove",level:2}],s={toc:o};function m(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"list-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"list")," type"),(0,r.mdx)("h2",{id:"listappend"},"list.append"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.append(el, /) -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7append"},"list.append"),": append an element to a list."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.append(x)")," appends ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," to the list L, and returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"append")," fails if the list is frozen or has active iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"x = []\nx.append(1)\nx.append(2)\nx.append(3)\nx == [1, 2, 3]\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listclear"},"list.clear"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.clear() -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7clear"},"list.clear"),": clear a list"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.clear()")," removes all the elements of the list L and returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),".\nIt fails if the list is frozen or if there are active iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"x = [1, 2, 3]\nx.clear()\nx == []\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listextend"},"list.extend"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.extend(other: typing.Iterable, /) -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7extend"},"list.extend"),": extend a list with another iterable's content."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.extend(x)")," appends the elements of ",(0,r.mdx)("inlineCode",{parentName:"p"},"x"),", which must be iterable, to\nthe list L, and returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"extend")," fails if ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," is not iterable, or if the list L is frozen or has\nactive iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = []\nx.extend([1, 2, 3])\nx.extend(["foo"])\nx == [1, 2, 3, "foo"]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listindex"},"list.index"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.index(\n    needle,\n    start: None | int = None,\n    end: None | int = None,\n    /\n) -> int\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7index"},"list.index"),": get the index of an element in the list."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.index(x[, start[, end]])")," finds ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," within the list L and returns its\nindex."),(0,r.mdx)("p",null,"The optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"end")," parameters restrict the portion of\nlist L that is inspected.  If provided and not ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),", they must be list\nindices of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"int"),". If an index is negative, ",(0,r.mdx)("inlineCode",{parentName:"p"},"len(L)")," is effectively\nadded to it, then if the index is outside the range ",(0,r.mdx)("inlineCode",{parentName:"p"},"[0:len(L)]"),", the\nnearest value within that range is used; see ",(0,r.mdx)("a",{parentName:"p",href:"#indexing"},"Indexing"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"index")," fails if ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," is not found in L, or if ",(0,r.mdx)("inlineCode",{parentName:"p"},"start")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"end"),"\nis not a valid index (",(0,r.mdx)("inlineCode",{parentName:"p"},"int")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),")."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = ["b", "a", "n", "a", "n", "a"]\nx.index("a") == 1      # bAnana\nx.index("a", 2) == 3   # banAna\nx.index("a", -2) == 5  # bananA\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listinsert"},"list.insert"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.insert(index: int, el, /) -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7insert"},"list.insert"),": insert an element in a list."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.insert(i, x)")," inserts the value ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," in the list L at index ",(0,r.mdx)("inlineCode",{parentName:"p"},"i"),",\nmoving higher-numbered elements along by one.  It returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,r.mdx)("p",null,"As usual, the index ",(0,r.mdx)("inlineCode",{parentName:"p"},"i")," must be an ",(0,r.mdx)("inlineCode",{parentName:"p"},"int"),". If its value is negative,\nthe length of the list is added, then its value is clamped to the\nnearest value in the range ",(0,r.mdx)("inlineCode",{parentName:"p"},"[0:len(L)]")," to yield the effective index."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"insert")," fails if the list is frozen or has active iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = ["b", "c", "e"]\nx.insert(0, "a")\nx.insert(-1, "d")\nx == ["a", "b", "c", "d", "e"]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listpop"},"list.pop"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.pop(index: int = _, /)\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7pop"},"list.pop"),": removes and returns the last element of a list."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.pop([index])")," removes and returns the last element of the list L, or,\nif the optional index is provided, at that index."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"pop")," fails if the index is negative or not less than the length of\nthe list, of if the list is frozen or has active iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"x = [1, 2, 3]\nx.pop() == 3\nx.pop() == 2\nx == [1]\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"listremove"},"list.remove"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def list.remove(needle, /) -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#list%C2%B7remove"},"list.remove"),": remove a value from a list"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"L.remove(x)")," removes the first occurrence of the value ",(0,r.mdx)("inlineCode",{parentName:"p"},"x")," from the\nlist L, and returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"remove")," fails if the list does not contain ",(0,r.mdx)("inlineCode",{parentName:"p"},"x"),", is frozen, or has\nactive iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"x = [1, 2, 3, 2]\nx.remove(2)\nx == [1, 3, 2]\nx.remove(2)\nx == [1, 3]\n")),(0,r.mdx)("p",null,"A subsequent call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"x.remove(2)")," would yield an error because the\nelement won't be found."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"x = [1, 2, 3, 2]\nx.remove(2)\nx.remove(2)\nx.remove(2) # error: not found\n")))}m.isMDXComponent=!0}}]);