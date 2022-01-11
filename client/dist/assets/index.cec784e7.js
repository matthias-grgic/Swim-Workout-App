import{j as x,s,N as u,L as y,W as v,r as m,R as b,a as f,b as L,c as w,B as k}from"./vendor.081033fd.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}};j();const e=x.exports.jsx,o=x.exports.jsxs;function C(){return e("div",{children:"Create"})}function S({transferedWodList:a}){const c=a.map((i,d)=>o(R,{children:[e("div",{children:e("h4",{children:i.name})}),o("div",{children:["Type:",i.type]}),o("div",{children:["Video:",i.video]}),o("div",{children:["Definition: ",i.definition]}),o("div",{children:["Equipment: ",i.equipment]}),o("div",{children:["Length: ",i.length]})]},d));return e(M,{children:c})}const M=s.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
`,R=s.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border-bottom: 1px solid #d1d1d1;
    padding: 15px;
`;function W({transferedList:a}){const c=a.map((i,d)=>o(I,{children:[e("div",{children:e("h4",{children:i.name})}),o("div",{children:["Type:",i.type]}),o("div",{children:["Video:",i.video]}),o("div",{children:["Definition: ",i.definition]}),o("div",{children:["Equipment: ",i.equipment]}),o("div",{children:["Length: ",i.length]})]},d));return e(O,{children:c})}const O=s.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
`,I=s.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border-bottom: 1px solid #d1d1d1;
    padding: 15px;
`;var E="/assets/home.3b2918d6.svg",q="/assets/create.2af21189.svg",z="/assets/favourites.3ca4d2ea.svg",A="/assets/settings.fbbf0eb4.svg",D="/assets/currentworkout.9a33add4.svg";function T(){return o(G,{children:[e(u,{to:"/",children:e(h,{src:E,alt:"home"})}),e(u,{to:"/CurrentWorkout",children:e(h,{src:D,alt:"currentworkout"})}),e(u,{to:"/ExerciseList",children:e(h,{src:z,alt:"favourites"})}),e(u,{to:"/Create",children:e(h,{src:q,alt:"create"})}),e(u,{to:"/Settings",children:e(h,{src:A,alt:"settings"})})]})}const G=s.div`
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 1;
    justify-content: space-around;
    padding: 0.5rem;
    gap: 1rem;
    width: 100%;
    background: rgba(240, 240, 240, 0);
`,h=s.img`
    width: 38px;
`;function N(){return e(_,{children:"SWIM"})}const _=s.div`
    position: fixed;
    top: 0;
    font-family: "Righteous", Arial;
    font-size: 3rem;
    padding-top: 8px;
`;function P({transferedList:a}){const i=((t,l,p)=>t.slice(l,p))(a,-1),d=Object.assign({},...i.map(t=>({name:t.name,type:t.type,video:t.video,definition:t.definition,equipment:t.equipment,length:t.length}))),n=async()=>{try{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)};return await(await fetch("http://localhost:4000/postworkoutlist",t)).json()}catch(t){console.error(t)}};return o(F,{children:[o(y,{to:"/CurrentWorkout",children:[e(B,{onClick:()=>n(),children:"GO"})," "]}),e(H,{type:"range"}),o(V,{children:[e(g,{type:"checkbox"}),e(g,{type:"checkbox"}),e(g,{type:"checkbox"}),e(g,{type:"checkbox"}),e(g,{type:"checkbox"})]})]})}const B=s.button`
    color: white;
    font-size: 2.5rem;
    font-family: "Righteous", Arial;
    cursor: pointer;
    padding: 0.25em 1em;
    border-radius: 50%;
    border: none;
    width: 225px;
    height: 225px;
    transition: all 0.1s ease-in-out;
    margin-top: 15px;
    background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
    &:active {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        color: white;
    }
    &:hover {
        background-image: linear-gradient(-225deg, #c6eef8 0%, #b9b6e5 100%);
        transition: all 1s ease;
        color: white;
    }
`,F=s.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;s.img``;const H=s.input``,V=s.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`,g=s.input``;function $(){return e("div",{children:"Settings"})}function J(){const[a,c]=m.exports.useState([]);m.exports.useEffect(()=>{async function n(){try{const p=(await(await fetch("http://localhost:4000/getexerciselist")).json()).map(r=>({id:r._id,name:r.name,type:r.type,video:r.video,definition:r.definition,length:r.length}));c(p)}catch(t){console.error(t)}}return n()},[]);const[i,d]=m.exports.useState([]);return m.exports.useEffect(()=>{async function n(){try{const p=(await(await fetch("http://localhost:4000/getworkoutlist")).json()).map(r=>({id:r._id,name:r.name,type:r.type,video:r.video,definition:r.definition,equipment:r.equipment,length:r.length}));d(p)}catch(t){console.error(t)}}return n()},[]),o(Q,{children:[e(K,{}),e(N,{}),o(b,{children:[e(f,{path:"/",element:e(P,{transferedList:a})}),e(f,{path:"/CurrentWorkout",element:e(S,{transferedWodList:i})}),e(f,{path:"/ExerciseList",element:e(W,{transferedList:a})}),e(f,{path:"/Create",element:e(C,{})}),e(f,{path:"/Settings",element:e($,{})})]}),e(T,{})]})}const K=v`
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`,Q=s.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1rem;
`;L.render(e(w.StrictMode,{children:e(k,{children:e(J,{})})}),document.getElementById("root"));
