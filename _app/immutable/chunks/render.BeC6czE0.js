import{C as V,k as M,D as k,E as Y,H as F,F as v,G as C,I as R,J as m,K as b,L as h,M as H,N as S,O as N,P,Q as W,R as $,T as q,V as B,W as G,X as J,Y as K,p as Q,h as X,a as j,m as z}from"./runtime.BIUu9KCQ.js";import{b as U}from"./disclose-version.DajhIUqf.js";const I=new Set,D=new Set;function ne(e){for(var a=0;a<e.length;a++)I.add(e[a]);for(var s of D)s(e)}function T(e){var A;var a=this,s=a.ownerDocument,d=e.type,f=((A=e.composedPath)==null?void 0:A.call(e))||[],r=f[0]||e.target,l=0,y=e.__root;if(y){var u=f.indexOf(y);if(u!==-1&&(a===document||a===window)){e.__root=a;return}var c=f.indexOf(a);if(c===-1)return;u<=c&&(l=u)}if(r=f[l]||e.target,r!==a){V(e,"currentTarget",{configurable:!0,get(){return r||s}});try{for(var p,i=[];r!==null;){var n=r.assignedSlot||r.parentNode||r.host||null;try{var t=r["__"+d];if(t!==void 0&&!r.disabled)if(M(t)){var[_,...w]=t;_.apply(r,[e,...w])}else t.call(r,e)}catch(E){p?i.push(E):p=E}if(e.cancelBubble||n===a||n===null)break;r=n}if(p){for(let E of i)queueMicrotask(()=>{throw E});throw p}}finally{e.__root=a,delete e.currentTarget}}}let o;function Z(){o=void 0}function oe(e){let a=null,s=v;var d;if(v){for(a=h,o===void 0&&(o=H(document.head));o!==null&&(o.nodeType!==8||o.data!==C);)o=R(o);o===null?m(!1):o=b(R(o))}v||(d=document.head.appendChild(k()));try{Y(()=>e(d),F)}finally{s&&(m(!0),o=h,b(a))}}const x=["touchstart","touchmove"];function ee(e){return x.includes(e)}function se(e,a){a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ae(e,a){return L(e,a)}function ie(e,a){S(),a.intro=a.intro??!1;const s=a.target,d=v,f=h;try{for(var r=H(s);r&&(r.nodeType!==8||r.data!==C);)r=R(r);if(!r)throw N;m(!0),b(r),P();const l=L(e,{...a,anchor:r});if(h===null||h.nodeType!==8||h.data!==W)throw $(),N;return m(!1),l}catch(l){if(l===N)return a.recover===!1&&q(),S(),B(s),m(!1),ae(e,a);throw l}finally{m(d),b(f),Z()}}const g=new Map;function L(e,{target:a,anchor:s,props:d={},events:f,context:r,intro:l=!0}){S();var y=new Set,u=i=>{for(var n=0;n<i.length;n++){var t=i[n];if(!y.has(t)){y.add(t);var _=ee(t);a.addEventListener(t,T,{passive:_});var w=g.get(t);w===void 0?(document.addEventListener(t,T,{passive:_}),g.set(t,1)):g.set(t,w+1)}}};u(G(I)),D.add(u);var c=void 0,p=J(()=>{var i=s??a.appendChild(k());return K(()=>{if(r){Q({});var n=z;n.c=r}f&&(d.$$events=f),v&&U(i,null),c=e(i,d)||{},v&&(X.nodes_end=h),r&&j()}),()=>{var _;for(var n of y){a.removeEventListener(n,T);var t=g.get(n);--t===0?(document.removeEventListener(n,T),g.delete(n)):g.set(n,t)}D.delete(u),O.delete(c),i!==s&&((_=i.parentNode)==null||_.removeChild(i))}});return O.set(c,p),c}let O=new WeakMap;function de(e){const a=O.get(e);a&&a()}export{oe as a,ne as d,ie as h,ae as m,se as s,de as u};