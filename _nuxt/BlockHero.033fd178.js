import"./MDCSlot.7fe580b8.js";import _ from"./ButtonLink.54594aa6.js";import m from"./Terminal.7e5c0a7b.js";import f from"./VideoPlayer.7b2d42d5.js";import{r as n}from"./slot.c6d72157.js";import{d as y,b as o,c as a,e as s,f as r,F as h,X as c,w as k,D as i,t as d,a5 as v,k as $}from"./entry.67f90318.js";import"./index.1b042999.js";const B={class:"block-hero"},b={class:"layout"},w={class:"content"},g={key:0,class:"announce"},H={class:"title"},S={class:"description"},q={key:1,class:"extra"},V={class:"actions"},x=["href"],A={class:"support"},C=y({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,N)=>{const l=_,u=m,p=f;return o(),a("section",B,[s("div",b,[s("div",w,[t.$slots.announce?(o(),a("p",g,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):r("",!0),s("h1",H,[n(t.$slots,"title",{unwrap:"p"},()=>[i(" Hero Title ")],!0)]),s("p",S,[n(t.$slots,"description",{unwrap:"p"},()=>[i(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",q,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):r("",!0),s("div",V,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),a(h,{key:1},[e.cta?(o(),c(l,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:k(()=>[i(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):r("",!0)],64))])]),s("div",A,[v(t.$slots,"support",{},()=>[e.snippet?(o(),c(u,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(p,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const P=$(C,[["__scopeId","data-v-dbab33d0"]]);export{P as default};
