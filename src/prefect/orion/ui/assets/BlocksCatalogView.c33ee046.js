import{d as k,b as y,Y as i,c as t,W as b,e as m,h as o,o as _,f,w as l,g as s,aK as T,aL as d,q as g}from"./index.51b7df8a.js";import{u as v}from"./usePageTitle.5f1ff030.js";const x=k({__name:"BlocksCatalogView",setup(B){const c=y(),a=i("blockTypeSlug"),n=t(()=>a.value?[a.value]:null),u=b(c.blockTypes.getBlockTypeBySlug,n),e=t(()=>u.response),p=t(()=>e.value?`Block Type: ${e.value.name}`:null);return v(p),(C,S)=>{const r=m("p-layout-default");return o(e)?(_(),f(r,{key:0,class:"blocks-catalog-view"},{header:l(()=>[s(o(T),{"block-type":o(e)},null,8,["block-type"])]),default:l(()=>[s(o(d),{"block-type":o(e)},null,8,["block-type"])]),_:1})):g("",!0)}}});export{x as default};