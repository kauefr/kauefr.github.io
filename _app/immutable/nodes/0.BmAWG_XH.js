import{a as w,t as H}from"../chunks/disclose-version.DajhIUqf.js";import{D as pe,E as te,F as E,K as q,P as he,k as ge,W as ne,$ as me,a0 as Q,J as F,L as I,a1 as se,Y as B,a2 as be,ak as U,h as W,e as R,al as Ee,am as xe,z as ke,s as X,an as Ae,ao as Ne,V as ye,ap as Te,aq as ie,M as Ie,Q as Se,I as we,a3 as He,x as Le,j as G,ar as Me,a4 as le,p as O,aj as K,l as ve,a as $,f as x,c as g,r as h,as as oe,t as k,B as T,A as Ce,at as Re}from"../chunks/runtime.BIUu9KCQ.js";import{s as M,d as Oe,a as $e}from"../chunks/render.BeC6czE0.js";import{l as Z,t as De,_ as C}from"../chunks/Localization.svelte.CuLc-XqH.js";import{i as Pe,p as qe}from"../chunks/proxy.s0KqU443.js";let V=null;function Fe(e,a){return a}function Ve(e,a,r,t){for(var n=[],i=a.length,l=0;l<i;l++)Ne(a[l].e,n,!0);var _=i>0&&n.length===0&&r!==null;if(_){var u=r.parentNode;ye(u),u.append(r),t.clear(),N(e,a[0].prev,a[i-1].next)}Te(n,()=>{for(var s=0;s<i;s++){var v=a[s];_||(t.delete(v.k),N(e,v.prev,v.next)),ie(v.e,!_)}})}function Ye(e,a,r,t,n,i=null){var l=e,_={flags:a,items:new Map,first:null};{var u=e;l=E?q(Ie(u)):u.appendChild(pe())}E&&he();var s=null;te(()=>{var v=r(),o=ge(v)?v:v==null?[]:ne(v),c=o.length;let d=!1;if(E){var p=l.data===me;p!==(c===0)&&(l=Q(),q(l),F(!1),d=!0)}if(E){for(var b=null,f,m=0;m<c;m++){if(I.nodeType===8&&I.data===Se){l=I,d=!0,F(!1);break}var L=o[m],y=t(L,m);f=ue(I,_,b,null,L,y,m,n,a),_.items.set(y,f),b=f}c>0&&q(Q())}E||ze(o,_,l,n,a,t),i!==null&&(c===0?s?se(s):s=B(()=>i(l)):s!==null&&be(s,()=>{s=null})),d&&F(!0)}),E&&(l=I)}function ze(e,a,r,t,n,i){var l=e.length,_=a.items,u=a.first,s=u,v,o=null,c=[],d=[],p,b,f,m;for(m=0;m<l;m+=1){if(p=e[m],b=i(p,m),f=_.get(b),f===void 0){var L=s?s.e.nodes_start:r;o=ue(L,a,o,o===null?a.first:o.next,p,b,m,t,n),_.set(b,o),c=[],d=[],s=o.next;continue}if(Be(f,p,m),f.e.f&U&&se(f.e),f!==s){if(v!==void 0&&v.has(f)){if(c.length<d.length){var y=d[0],A;o=y.prev;var J=c[0],D=c[c.length-1];for(A=0;A<c.length;A+=1)j(c[A],y,r);for(A=0;A<d.length;A+=1)v.delete(d[A]);N(a,J.prev,D.next),N(a,o,J),N(a,D,y),s=y,o=D,m-=1,c=[],d=[]}else v.delete(f),j(f,s,r),N(a,f.prev,f.next),N(a,f,o===null?a.first:o.next),N(a,o,f),o=f;continue}for(c=[],d=[];s!==null&&s.k!==b;)s.e.f&U||(v??(v=new Set)).add(s),d.push(s),s=s.next;if(s===null)continue;f=s}c.push(f),o=f,s=f.next}if(s!==null||v!==void 0){for(var P=v===void 0?[]:ne(v);s!==null;)P.push(s),s=s.next;var _e=P.length;if(_e>0){var de=l===0?r:null;Ve(a,P,de,_)}}W.first=a.first&&a.first.e,W.last=o&&o.e}function Be(e,a,r,t){R(e.v,a),e.i=r}function ue(e,a,r,t,n,i,l,_,u){var s=V;try{var v=(u&Ee)!==0,o=(u&xe)===0,c=v?o?ke(n):X(n):n,d=u&Ae?X(l):l,p={i:d,v:c,k:i,a:null,e:null,prev:r,next:t};return V=p,p.e=B(()=>_(e,c,d),E),p.e.prev=r&&r.e,p.e.next=t&&t.e,r===null?a.first=p:(r.next=p,r.e.next=p.e),t!==null&&(t.prev=p,t.e.prev=p.e),p}finally{V=s}}function j(e,a,r){for(var t=e.next?e.next.e.nodes_start:r,n=a?a.e.nodes_start:r,i=e.e.nodes_start;i!==t;){var l=we(i);n.before(i),i=l}}function N(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Ke(e,a,...r){var t=e,n=Le,i;te(()=>{n!==(n=a())&&(i&&(ie(i),i=null),i=B(()=>n(t,...r)))},He),E&&(t=I)}let ee=!1;function Je(){ee||(ee=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const r of e.target.elements)(a=r.__on_r)==null||a.call(r)})},{capture:!0}))}function Y(e,a,r,t){var n=e.__attributes??(e.__attributes={});E&&(n[a]=e.getAttribute(a),e.nodeName==="LINK")||n[a]!==(n[a]=r)&&(r==null?e.removeAttribute(a):typeof r!="string"&&Qe(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var ae=new Map;function Qe(e){var a=ae.get(e.nodeName);if(a)return a;ae.set(e.nodeName,a=[]);for(var r,t=G(e);t.constructor.name!=="Element";){r=Me(t);for(var n in r)r[n].set&&a.push(n);t=G(t)}return a}function re(e,a){var r=e.__className,t=Ue(a);E&&e.className===t?e.__className=t:(r!==t||E&&e.className!==t)&&(a==null?e.removeAttribute("class"):e.className=t,e.__className=t)}function Ue(e){return e??""}function We(e,a,r,t=r){e.addEventListener(a,r);const n=e.__on_r;n?e.__on_r=()=>{n(),t()}:e.__on_r=t,Je()}function fe(e,a,r){if(e.multiple)return Ge(e,a);for(var t of e.options){var n=S(t);if(Pe(n,a)){t.selected=!0;return}}(!r||a!==void 0)&&(e.selectedIndex=-1)}function Xe(e,a){le(()=>{var r=new MutationObserver(()=>{var t=e.__value;fe(e,t)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function ce(e,a,r=a){var t=!0;We(e,"change",()=>{var n;if(e.multiple)n=[].map.call(e.querySelectorAll(":checked"),S);else{var i=e.querySelector(":checked");n=i&&S(i)}r(n)}),le(()=>{var n=a();if(fe(e,n,t),t&&n===void 0){var i=e.querySelector(":checked");i!==null&&(n=S(i),r(n))}e.__value=n,t=!1}),Xe(e)}function Ge(e,a){for(var r of e.options)r.selected=~a.indexOf(S(r))}function S(e){return"__value"in e?e.__value:e.value}const Ze=!1,_a=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ze},Symbol.toStringTag,{value:"Module"})),z=new Map([["Home","/"],["Seven Seas Idle","/ssi"]]);var je=H("<option> </option>"),ea=H('<div class="control has-icons-left"><div class="select"><select></select></div> <span class="icon is-left has-text-inherit"><i class="fa-solid fa-earth-americas"></i></span></div>');function aa(e,a){O(a,!0);let r=K(qe(Z.currentLocale));ve(()=>{Z.currentLocale=x(r),document.documentElement.setAttribute("lang",x(r))});var t=ea(),n=g(t),i=g(n);Ye(i,21,()=>Object.entries(De),Fe,(l,_)=>{let u=()=>x(_)[0],s=()=>x(_)[1];var v=je(),o={},c=g(v);h(v),k(()=>{o!==(o=u())&&(v.value=(v.__value=u())==null?"":u()),M(c,s()["locale-name"])}),w(l,v)}),h(i),h(n),oe(2),h(t),ce(i,()=>x(r),l=>R(r,l)),w(e,t),$()}var ra=H('<div class="control has-icons-left"><div class="select"><select><option> </option><option selected> </option></select></div> <span class="icon is-left has-text-inherit"><i class="fa-solid fa-circle-half-stroke"></i></span></div>');function ta(e,a){O(a,!0);let r=K("dark");ve(()=>{document.documentElement.setAttribute("data-theme",x(r))});var t=ra(),n=g(t),i=g(n),l=g(i);l.value=(l.__value="light")==null?"":"light";var _=g(l);k(()=>M(_,C("theme-light"))),h(l);var u=T(l);u.value=(u.__value="dark")==null?"":"dark";var s=g(u);k(()=>M(s,C("theme-dark"))),h(u),h(i),h(n),oe(2),h(t),ce(i,()=>x(r),v=>R(r,v)),w(e,t),$()}const na=(e,a)=>R(a,!x(a));var sa=H('<nav class="navbar"><div class="navbar-brand"><a class="navbar-item">kaue.rodrigues</a> <button aria-label="menu" role="menu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></button></div> <div><div class="navbar-start"><a class="navbar-item"> </a> <a class="navbar-item">Seven Seas Idle</a></div> <div class="navbar-end"><div class="navbar-item"><!></div> <div class="navbar-item"><!></div></div></div></nav>');function ia(e,a){O(a,!0);let r=K(!1);var t=sa(),n=g(t),i=g(n);k(()=>Y(i,"href",z.get("Home")));var l=T(i,2);l.__click=[na,r],h(n);var _=T(n,2),u=g(_),s=g(u);k(()=>Y(s,"href",z.get("Home")));var v=g(s);k(()=>M(v,C("Home"))),h(s);var o=T(s,2);k(()=>Y(o,"href",z.get("Seven Seas Idle"))),h(u);var c=T(u,2),d=g(c),p=g(d);aa(p,{}),h(d);var b=T(d,2),f=g(b);ta(f,{}),h(b),h(c),h(_),h(t),k(()=>{re(l,`navbar-burger ${(x(r)?"is-active":"")??""}`),re(_,`navbar-menu ${(x(r)?"is-active":"")??""}`)}),w(e,t),$()}Oe(["click"]);var la=H("<!> <!>",1);function da(e,a){O(a,!0);var r=la();$e(i=>{k(()=>Re.title=C("Homepage Title"))});var t=Ce(r);ia(t,{});var n=T(t,2);Ke(n,()=>a.children),w(e,r),$()}export{da as component,_a as universal};
