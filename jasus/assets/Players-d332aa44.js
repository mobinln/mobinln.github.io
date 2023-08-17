import{g as q,c as A,k as B,s as y,d as l,_ as b,e as $,r as h,u as M,f as z,h as G,j as t,i as U,l as O,m as W,n as K,o as E,B as L,a as I,b as F,p as X}from"./index-d4a6f146.js";import{u as H,a as J,C as Q,B as V}from"./index-00320eff.js";import{G as Y,a as Z,b as rr}from"./index.esm-41a9ad22.js";import{m as er,T as C}from"./motion-39debe21.js";import"./Modal-5ca26b2e.js";function ar(e){return q("MuiLinearProgress",e)}A("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const tr=["className","color","value","valueBuffer","variant"];let p=e=>e,w,_,N,R,S,D;const j=4,or=B(w||(w=p`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),nr=B(_||(_=p`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ir=B(N||(N=p`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),sr=e=>{const{classes:r,variant:a,color:o}=e,n={root:["root",`color${l(o)}`,a],dashed:["dashed",`dashedColor${l(o)}`],bar1:["bar",`barColor${l(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${l(o)}`,a==="buffer"&&`color${l(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return O(n,ar,r)},k=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?W(e.palette[r].main,.62):K(e.palette[r].main,.5),lr=y("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${l(a.color)}`],r[a.variant]]}})(({ownerState:e,theme:r})=>b({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:k(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),cr=y("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${l(a.color)}`]]}})(({ownerState:e,theme:r})=>{const a=k(r,e.color);return b({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},$(R||(R=p`
    animation: ${0} 3s infinite linear;
  `),ir)),dr=y("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>b({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${j}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${j}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&$(S||(S=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),or)),ur=y("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${l(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>b({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:k(r,e.color),transition:`transform .${j}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&$(D||(D=p`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),nr)),fr=h.forwardRef(function(r,a){const o=M({props:r,name:"MuiLinearProgress"}),{className:n,color:P="primary",value:g,valueBuffer:v,variant:s="indeterminate"}=o,x=z(o,tr),d=b({},o,{color:P,variant:s}),c=sr(d),u=G(),f={},m={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let i=g-100;u.direction==="rtl"&&(i=-i),m.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&v!==void 0){let i=(v||0)-100;u.direction==="rtl"&&(i=-i),m.bar2.transform=`translateX(${i}%)`}return t.jsxs(lr,b({className:U(c.root,n),ownerState:d,role:"progressbar"},f,{ref:a},x,{children:[s==="buffer"?t.jsx(cr,{className:c.dashed,ownerState:d}):null,t.jsx(dr,{className:c.bar1,ownerState:d,style:m.bar1}),s==="determinate"?null:t.jsx(ur,{className:c.bar2,ownerState:d,style:m.bar2})]}))}),mr=fr;function xr({onNext:e}){var i;const r=H(),a=J(),o=E(),[n,P]=h.useState(0),[g,v]=h.useState(0),[s,x]=h.useState(!1),[d,c]=h.useState(!1),u=((i=r==null?void 0:r[n])==null?void 0:i.type)==="spy",f=()=>{s?(x(!1),P(T=>T+1),v((n+1)*100/((r==null?void 0:r.length)||0)),n+1===(r==null?void 0:r.length)&&e()):x(!0)},m=()=>{o(X()),c(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Q,{open:d,disabled:u,content:u?"شما که جاسوس هستید...حتما دستت خورده :)":"آیا مطمئنید که دستتان به این دکمه اشتباهی نخورده؟",onClose:()=>c(!1),onConfirm:m}),t.jsxs(er.div,{initial:{x:-100,opacity:0},animate:{x:0,opacity:1},exit:{x:100,opacity:0},style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(C,{variant:"h4",textAlign:"center",children:["بازیکن شماره ",n+1]}),t.jsx(L,{mt:"auto",children:s?t.jsxs(t.Fragment,{children:[t.jsx(C,{textAlign:"center",variant:"h4",children:u?t.jsx(Y,{}):t.jsx(Z,{})}),t.jsx(C,{textAlign:"center",variant:"h4",children:u?"شما جاسوس هستید":a})]}):t.jsx(C,{textAlign:"justify",variant:"h4",children:t.jsx(rr,{})})}),t.jsxs(L,{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",mt:"auto",mb:2,children:[t.jsx(I,{variant:"contained",endIcon:t.jsx(F,{}),onClick:f,children:n<((r==null?void 0:r.length)||0)?"نمایش":"شروع بازی"}),n<1&&t.jsx(I,{variant:"contained",endIcon:t.jsx(V,{}),onClick:()=>c(!0),children:"تعویض کلمه"})]}),t.jsx(mr,{variant:"determinate",color:"primary",value:g,sx:{width:"100%"}})]})]})}export{xr as default};
