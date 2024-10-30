var hn=Array.isArray,dn=Array.from,En=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyDescriptors,yn=Object.prototype,wn=Array.prototype,jt=Object.getPrototypeOf;const Tn=()=>{};function mn(t){return t()}function Ht(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,at=4,N=8,ut=16,g=32,G=64,D=128,U=256,p=512,A=1024,M=2048,k=4096,L=8192,Yt=16384,it=32768,An=65536,Ut=1<<18,ft=1<<19,et=Symbol("$state");function _t(t){return t===this.v}function Bt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ct(t){return!Bt(t,this.v)}function Vt(t){throw new Error("effect_in_teardown")}function $t(){throw new Error("effect_in_unowned_derived")}function Kt(t){throw new Error("effect_orphan")}function Gt(){throw new Error("effect_update_depth_exceeded")}function gn(){throw new Error("hydration_failed")}function Rn(t){throw new Error("props_invalid_value")}function Dn(){throw new Error("state_descriptors_fixed")}function In(){throw new Error("state_prototype_fixed")}function Zt(){throw new Error("state_unsafe_local_read")}function Wt(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:_t,version:0}}function Sn(t){return Xt(tt(t))}function On(t){var r;const n=tt(t);return n.equals=ct,f!==null&&f.l!==null&&((r=f.l).s??(r.s=[])).push(n),n}function Xt(t){return u!==null&&u.f&y&&(d===null?an([t]):d.push(t)),t}function kn(t,n){return u!==null&&J()&&u.f&y&&(d===null||!d.includes(t))&&Wt(),t.equals(n)||(t.v=n,t.version=Nt(),vt(t,A),J()&&a!==null&&a.f&p&&!(a.f&g)&&(v!==null&&v.includes(t)?(E(a,A),W(a)):m===null?un([t]):m.push(t))),n}function vt(t,n){var r=t.reactions;if(r!==null)for(var e=J(),s=r.length,o=0;o<s;o++){var l=r[o],i=l.f;i&A||!e&&l===a||(E(l,n),i&(p|D)&&(i&y?vt(l,M):W(l)))}}const xn=1,Nn=2,Cn=16,Pn=1,Fn=2,qn=4,bn=8,Mn=16,Ln=1,jn=2,zt="[",Jt="[!",Qt="]",pt={},Hn=Symbol();function ht(t){console.warn("hydration_mismatch")}let x=!1;function Yn(t){x=t}let w;function B(t){if(t===null)throw ht(),pt;return w=t}function Un(){return B(C(w))}function Bn(t){if(x){if(C(w)!==null)throw ht(),pt;w=t}}function Vn(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===Qt){if(t===0)return n;t-=1}else(r===zt||r===Jt)&&(t+=1)}var e=C(n);n.remove(),n=e}}var st,tn,dt,Et;function $n(){if(st===void 0){st=window,tn=document;var t=Element.prototype,n=Node.prototype;dt=rt(n,"firstChild").get,Et=rt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function yt(t=""){return document.createTextNode(t)}function X(t){return dt.call(t)}function C(t){return Et.call(t)}function Kn(t){if(!x)return X(t);var n=X(w);return n===null&&(n=w.appendChild(yt())),B(n),n}function Gn(t,n){if(!x){var r=X(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function Zn(t,n=1,r=!1){let e=x?w:t;for(;n--;)e=C(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var o=yt();return e==null||e.before(o),B(o),o}return B(e),e}function Wn(t){t.textContent=""}function wt(t){a===null&&u===null&&Kt(),u!==null&&u.f&D&&$t(),nt&&Vt()}function nn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&G)!==0,o=a,l={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var i=S;try{ot(!0),Z(l),l.f|=Yt}catch(T){throw j(l),T}finally{ot(i)}}else n!==null&&W(l);var _=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&ft)===0;if(!_&&!s&&e&&(o!==null&&nn(l,o),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(l)}return l}function Xn(t){const n=P(N,null,!1);return E(n,p),n.teardown=t,n}function zn(t){wt();var n=a!==null&&(a.f&N)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:u})}else{var e=Tt(t);return e}}function Jn(t){return wt(),mt(t)}function Qn(t){const n=P(G,t,!0);return()=>{j(n)}}function Tt(t){return P(at,t,!1)}function mt(t){return P(N,t,!0)}function tr(t){return mt(t)}function nr(t,n=0){return P(N|ut|n,t,!0)}function rr(t,n=!0){return P(N|g,t,!0,n)}function At(t){var n=t.teardown;if(n!==null){const r=nt,e=u;lt(!0),$(null);try{n.call(null)}finally{lt(r),$(e)}}}function j(t,n=!0){var r=!1;if((n||t.f&Ut)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var o=e===s?null:C(e);e.remove(),e=o}r=!0}Pt(t,n&&!r),b(t,0),E(t,L);var l=t.transitions;if(l!==null)for(const _ of l)_.stop();At(t);var i=t.parent;i!==null&&i.first!==null&&gt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function gt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function er(t,n){var r=[];Rt(t,r,!0),rn(r,()=>{j(t),n&&n()})}function rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Rt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,o=(e.f&it)!==0||(e.f&g)!==0;Rt(e,n,o?r:!1),e=s}}}function sr(t){Dt(t,!0)}function Dt(t,n){if(t.f&k){t.f^=k,H(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&it)!==0||(r.f&g)!==0;Dt(r,s?n:!1),r=e}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}let V=!1,z=[];function It(){V=!1;const t=z.slice();z=[],Ht(t)}function or(t){V||(V=!0,queueMicrotask(It)),z.push(t)}function en(){V&&It()}function sn(t){let n=y|A;a===null?n|=D:a.f|=ft;const r={children:null,deps:null,equals:_t,f:n,fn:t,reactions:null,v:null,version:0,parent:a};if(u!==null&&u.f&y){var e=u;(e.children??(e.children=[])).push(r)}return r}function lr(t){const n=sn(t);return n.equals=ct,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?on(e):j(e)}}}function Ot(t){var n,r=a;K(t.parent);try{St(t),n=Ct(t)}finally{K(r)}var e=(I||t.f&D)&&t.deps!==null?M:p;E(t,e),t.equals(n)||(t.v=n,t.version=Nt())}function on(t){St(t),b(t,0),E(t,L),t.children=t.deps=t.reactions=t.fn=null}const kt=0,ln=1;let Y=kt,q=!1,S=!1,nt=!1;function ot(t){S=t}function lt(t){nt=t}let R=[],O=0;let u=null;function $(t){u=t}let a=null;function K(t){a=t}let d=null;function an(t){d=t}let v=null,h=0,m=null;function un(t){m=t}let xt=0,I=!1,f=null;function Nt(){return++xt}function J(){return f!==null&&f.l===null}function H(t){var l,i;var n=t.f;if(n&A)return!0;if(n&M){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var o=r[s];if(H(o)&&Ot(o),e&&a!==null&&!I&&!((i=o==null?void 0:o.reactions)!=null&&i.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}e||E(t,p)}return!1}function fn(t,n,r){throw t}function Ct(t){var T;var n=v,r=h,e=m,s=u,o=I,l=d;v=null,h=0,m=null,u=t.f&(g|G)?null:t,I=!S&&(t.f&D)!==0,d=null;try{var i=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(b(t,h),_!==null&&h>0)for(_.length=h+v.length,c=0;c<v.length;c++)_[h+c]=v[c];else t.deps=_=v;if(!I)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(b(t,h),_.length=h);return i}finally{v=n,h=r,m=e,u=s,I=o,d=l}}function _n(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(E(n,M),n.f&(D|U)||(n.f^=U),b(n,0))}function b(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)_n(t,r[e])}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;j(r,n),r=e}}function Z(t){var n=t.f;if(!(n&L)){E(t,p);var r=a,e=f;a=t,f=t.ctx;try{n&ut||Pt(t),At(t);var s=Ct(t);t.teardown=typeof s=="function"?s:null,t.version=xt}catch(o){fn(o)}finally{a=r,f=e}}}function Ft(){O>1e3&&(O=0,Gt()),O++}function qt(t){var n=t.length;if(n!==0){Ft();var r=S;S=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var o=[];bt(s,o),cn(o)}}finally{S=r}}}function cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(L|k))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?gt(e):e.fn=null))}}function vn(){if(q=!1,O>1001)return;const t=R;R=[],qt(t),q||(O=0)}function W(t){Y===kt&&(q||(q=!0,queueMicrotask(vn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|g)){if(!(r&p))return;n.f^=p}}R.push(n)}function bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,o=(s&g)!==0,l=o&&(s&p)!==0;if(!l&&!(s&k))if(s&N){o?r.f^=p:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&at&&e.push(r);var _=r.next;if(_===null){let F=r.parent;for(;F!==null;){if(t===F)break t;var c=F.next;if(c!==null){r=c;continue t}F=F.parent}}r=_}for(var T=0;T<e.length;T++)i=e[T],n.push(i),bt(i,n)}function Mt(t){var n=Y,r=R;try{Ft();const s=[];Y=ln,R=s,q=!1,qt(r);var e=t==null?void 0:t();return en(),(R.length>0||s.length>0)&&Mt(),O=0,e}finally{Y=n,R=r}}async function ar(){await Promise.resolve(),Mt()}function ur(t){var n=t.f;if(n&L)return t.v;if(u!==null){d!==null&&d.includes(t)&&Zt();var r=u.deps;v===null&&r!==null&&r[h]===t?h++:v===null?v=[t]:v.push(t),m!==null&&a!==null&&a.f&p&&!(a.f&g)&&m.includes(t)&&(E(a,A),W(a))}if(n&y){var e=t;H(e)&&Ot(e)}return t.v}function ir(t){const n=u;try{return u=null,t()}finally{u=n}}const pn=~(A|M|p);function E(t,n){t.f=t.f&pn|n}function fr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:tt(!1)})}function _r(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=a,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var o=l[s];K(o.effect),$(o.reaction),Tt(o.fn)}}finally{K(r),$(e)}}f=n.p,n.m=!0}return{}}function cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(et in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&et in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Lt(r);for(let s in e){const o=e[s].get;if(o)try{o.call(t)}catch{}}}}}export{tn as $,yt as A,rr as B,fr as C,x as D,_r as E,f as F,nr as G,zt as H,it as I,Tn as J,j as K,Gn as L,Jn as M,zn as N,ir as O,Ht as P,cr as Q,mn as R,et as S,Xn as T,Hn as U,On as V,tr as W,Kn as X,Bn as Y,Zn as Z,Ut as _,wn as a,Ln as a0,jn as a1,Jt as a2,Vn as a3,sr as a4,er as a5,k as a6,xn as a7,Cn as a8,Nn as a9,Rt as aa,rn as ab,Tt as ac,Sn as ad,mt as ae,or as af,Rn as ag,An as ah,qn as ai,ct as aj,Pn as ak,Fn as al,bn as am,sn as an,lr as ao,Mn as ap,Mt as aq,ar,Bt as as,Dn as b,kn as c,ur as d,a as e,In as f,rt as g,jt as h,hn as i,En as j,$n as k,X as l,C as m,pt as n,yn as o,Yn as p,B as q,Un as r,tt as s,w as t,Qt as u,ht as v,gn as w,Wn as x,dn as y,Qn as z};
