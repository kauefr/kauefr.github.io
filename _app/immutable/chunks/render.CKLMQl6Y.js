import{j as O,i as k,k as T,l as H,H as I,m as L,n as E,p as v,q as R,r as V,t as p,u as C,v as M,w as Y,x as q,y as B,z as P,A as $,B as j,C as z,D as S,e as F,E as W,F as G}from"./runtime.CQCcoJ4f.js";import{r as J,a as K}from"./disclose-version.CQESjHBY.js";const Q=new Set,A=new Set;function w(r){var N;var e=this,d=e.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],t=i[0]||r.target,o=0,_=r.__root;if(_){var f=i.indexOf(_);if(f!==-1&&(e===document||e===window)){r.__root=e;return}var u=i.indexOf(e);if(u===-1)return;f<=u&&(o=f)}if(t=i[o]||r.target,t!==e){O(r,"currentTarget",{configurable:!0,get(){return t||d}});try{for(var h,s=[];t!==null;){var n=t.assignedSlot||t.parentNode||t.host||null;try{var a=t["__"+c];if(a!==void 0&&!t.disabled)if(k(a)){var[l,...g]=a;l.apply(t,[r,...g])}else a.call(t,r)}catch(m){h?s.push(m):h=m}if(r.cancelBubble||n===e||n===null)break;t=n}if(h){for(let m of s)queueMicrotask(()=>{throw m});throw h}}finally{r.__root=e,delete r.currentTarget}}}const U=["touchstart","touchmove"];function X(r){return U.includes(r)}function er(r,e){e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function Z(r,e){return D(r,e)}function tr(r,e){T(),e.intro=e.intro??!1;const d=e.target,c=S,i=p;try{for(var t=H(d);t&&(t.nodeType!==8||t.data!==I);)t=L(t);if(!t)throw E;v(!0),R(t),V();const o=D(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==C)throw M(),E;return v(!1),o}catch(o){if(o===E)return e.recover===!1&&Y(),T(),q(d),v(!1),Z(r,e);throw o}finally{v(c),R(i),J()}}const y=new Map;function D(r,{target:e,anchor:d,props:c={},events:i,context:t,intro:o=!0}){T();var _=new Set,f=s=>{for(var n=0;n<s.length;n++){var a=s[n];if(!_.has(a)){_.add(a);var l=X(a);e.addEventListener(a,w,{passive:l});var g=y.get(a);g===void 0?(document.addEventListener(a,w,{passive:l}),y.set(a,1)):y.set(a,g+1)}}};f(B(Q)),A.add(f);var u=void 0,h=P(()=>{var s=d??e.appendChild($());return j(()=>{if(t){z({});var n=G;n.c=t}i&&(c.$$events=i),S&&K(s,null),u=r(s,c)||{},S&&(F.nodes_end=p),t&&W()}),()=>{var l;for(var n of _){e.removeEventListener(n,w);var a=y.get(n);--a===0?(document.removeEventListener(n,w),y.delete(n)):y.set(n,a)}A.delete(f),b.delete(u),s!==d&&((l=s.parentNode)==null||l.removeChild(s))}});return b.set(u,h),u}let b=new WeakMap;function ar(r){const e=b.get(r);e&&e()}export{tr as h,Z as m,er as s,ar as u};
