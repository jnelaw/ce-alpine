import{u as m}from"./asyncData.844bccfe.js";import{M as c,I as p,d as i,ah as u,r as l,N as e,l as d}from"./entry.5566e4a0.js";import f from"./Ellipsis.f67a514e.js";import _ from"./ComponentPlaygroundData.e7834ec3.js";import"./TabsHeader.af8ed7f9.js";import"./ComponentPlaygroundProps.8c1e40fd.js";import"./ProseH4.503fe28a.js";import"./ProseCodeInline.a3159ffc.js";import"./Badge.60511ea1.js";import"./ContentSlot.628abe72.js";import"./ProseP.564b3a2b.js";import"./index.43d0bcb6.js";import"./ComponentPlaygroundSlots.vue.be14eb39.js";import"./ComponentPlaygroundTokens.vue.6914fabc.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const S=d(g,[["__scopeId","data-v-ffdff82a"]]);export{S as default};
