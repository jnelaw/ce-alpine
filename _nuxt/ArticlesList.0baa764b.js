import v from"./ArticlesListItem.a2f19a0e.js";import w from"./ProseA.c542b613.js";import g from"./ProseCodeInline.a3159ffc.js";import{u as k}from"./asyncData.844bccfe.js";import{d as A,Y as I,I as S,M as c,b as a,c as r,e as o,g as i,F as b,Z as C,D as e,w as d,p as L,j as B,s as N,$ as V,X as D,l as F}from"./entry.5566e4a0.js";import"./date.824a539b.js";const P=t=>(L("data-v-685376b2"),t=t(),B(),t),T={key:0,class:"articles-list"},Y={class:"featured"},j={class:"layout"},q={key:1,class:"tour"},E=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=I(async()=>k("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=S(()=>m.value||[]);return(X,Z)=>{var p;const l=v,f=w,h=g;return(p=c(n))!=null&&p.length?(a(),r("div",T,[o("div",Y,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",j,[(a(!0),r(b,null,C(c(n).slice(1),(y,x)=>(a(),D(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",q,[E,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const O=F(M,[["__scopeId","data-v-685376b2"]]);export{O as default};
