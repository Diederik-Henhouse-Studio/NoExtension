function R(){}function ne(e,t){for(const n in t)e[n]=t[n];return e}function ie(e){return e&&typeof e=="object"&&typeof e.then=="function"}function Oe(e,t,n,i,r){e.__svelte_meta={loc:{file:t,line:n,column:i,char:r}}}function K(e){return e()}function G(){return Object.create(null)}function $(e){e.forEach(K)}function re(e){return typeof e=="function"}function je(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let E;function De(e,t){return E||(E=document.createElement("a")),E.href=t,e===E.href}function se(e){return Object.keys(e).length===0}function Ae(e,t){if(e!=null&&typeof e.subscribe!="function")throw new Error(`'${t}' is not a store with a 'subscribe' method`)}function ce(e,...t){if(e==null)return R;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(e,t,n){e.$$.on_destroy.push(ce(t,n))}function Ne(e,t,n,i){if(e){const r=Q(e,t,n,i);return e[0](r)}}function Q(e,t,n,i){return e[1]&&i?ne(n.ctx.slice(),e[1](i(t))):n.ctx}function Te(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(t.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=t.dirty[u]|r[u];return o}return t.dirty|r}return t.dirty}function qe(e,t,n,i,r,o){if(r){const s=Q(t,n,i,o);e.p(s,r)}}function Le(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Pe(e,t,n){return e.set(n),t}let D=!1;function le(){D=!0}function oe(){D=!1}function ue(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function ae(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let l=0;l<t.length;l++){const d=t[l];d.claim_order!==void 0&&c.push(d)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const l=t[c].claim_order,d=(r>0&&t[n[r]].claim_order<=l?r+1:ue(1,r,a=>t[n[a]].claim_order,l))-1;i[c]=n[d]+1;const _=d+1;n[_]=c,r=Math.max(_,r)}const o=[],s=[];let u=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(t[c-1]);u>=c;u--)s.push(t[u]);u--}for(;u>=0;u--)s.push(t[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const d=l<o.length?o[l]:null;e.insertBefore(s[c],d)}}function U(e,t){if(D){for(ae(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function fe(e,t,n){D&&!n?U(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function V(e){e.parentNode.removeChild(e)}function de(e){return document.createElement(e)}function _e(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function z(e){return document.createTextNode(e)}function Ie(){return z(" ")}function Be(){return z("")}function he(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function me(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function ye(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function X(e,t,n,i,r=!1){ye(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const u=e[s];if(t(u)){const c=n(u);return c===void 0?e.splice(s,1):e[s]=c,r||(e.claim_info.last_index=s),u}}for(let s=e.claim_info.last_index-1;s>=0;s--){const u=e[s];if(t(u)){const c=n(u);return c===void 0?e.splice(s,1):e[s]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,u}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function Z(e,t,n,i){return X(e,r=>r.nodeName===t,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(t))}function Re(e,t,n){return Z(e,t,n,de)}function ze(e,t,n){return Z(e,t,n,_e)}function be(e,t){return X(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(t),!0)}function Fe(e){return be(e," ")}function He(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function We(e,t){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t){i.selected=!0;return}}e.selectedIndex=-1}function Ye(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function ve(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}let x;function b(e){x=e}function A(){if(!x)throw new Error("Function called outside component initialization");return x}function Ge(e){A().$$.on_mount.push(e)}function Je(e){A().$$.after_update.push(e)}function Ke(e,t){return A().$$.context.set(e,t),t}const w=[],J=[],O=[],P=[],ee=Promise.resolve();let I=!1;function te(){I||(I=!0,ee.then(F))}function Qe(){return te(),ee}function B(e){O.push(e)}function Ue(e){P.push(e)}const L=new Set;let M=0;function F(){const e=x;do{for(;M<w.length;){const t=w[M];M++,b(t),ge(t.$$)}for(b(null),w.length=0,M=0;J.length;)J.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];L.has(n)||(L.add(n),n())}O.length=0}while(w.length);for(;P.length;)P.pop()();I=!1,L.clear(),b(e)}function ge(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}const j=new Set;let g;function we(){g={r:0,c:[],p:g}}function xe(){g.r||$(g.c),g=g.p}function H(e,t){e&&e.i&&(j.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if(j.has(e))return;j.add(e),g.c.push(()=>{j.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ve(e,t){const n=t.token={};function i(r,o,s,u){if(t.token!==n)return;t.resolved=u;let c=t.ctx;s!==void 0&&(c=c.slice(),c[s]=u);const l=r&&(t.current=r)(c);let d=!1;t.block&&(t.blocks?t.blocks.forEach((_,a)=>{a!==o&&_&&(we(),$e(_,1,1,()=>{t.blocks[a]===_&&(t.blocks[a]=null)}),xe())}):t.block.d(1),l.c(),H(l,1),l.m(t.mount(),t.anchor),d=!0),t.block=l,t.blocks&&(t.blocks[o]=l),d&&F()}if(ie(e)){const r=A();if(e.then(o=>{b(r),i(t.then,1,t.value,o),b(null)},o=>{if(b(r),i(t.catch,2,t.error,o),b(null),!t.hasCatch)throw o}),t.current!==t.pending)return i(t.pending,0),!0}else{if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}}function Xe(e,t,n){const i=t.slice(),{resolved:r}=e;e.current===e.then&&(i[e.value]=r),e.current===e.catch&&(i[e.error]=r),e.block.p(i,n)}const Ze=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function et(e,t){e.d(1),t.delete(e.key)}function tt(e,t,n,i,r,o,s,u,c,l,d,_){let a=e.length,m=o.length,h=a;const C={};for(;h--;)C[e[h].key]=h;const k=[],N=new Map,T=new Map;for(h=m;h--;){const f=_(r,o,h),p=n(f);let y=s.get(p);y?i&&y.p(f,t):(y=l(p,f),y.c()),N.set(p,k[h]=y),p in C&&T.set(p,Math.abs(h-C[p]))}const W=new Set,Y=new Set;function q(f){H(f,1),f.m(u,d),s.set(f.key,f),d=f.first,m--}for(;a&&m;){const f=k[m-1],p=e[a-1],y=f.key,S=p.key;f===p?(d=f.first,a--,m--):N.has(S)?!s.has(y)||W.has(y)?q(f):Y.has(S)?a--:T.get(y)>T.get(S)?(Y.add(y),q(f)):(W.add(S),a--):(c(p,s),a--)}for(;a--;){const f=e[a];N.has(f.key)||c(f,s)}for(;m;)q(k[m-1]);return k}function nt(e,t,n,i){const r=new Set;for(let o=0;o<t.length;o++){const s=i(n(e,t,o));if(r.has(s))throw new Error("Cannot have duplicate keys in a keyed each");r.add(s)}}function it(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function rt(e){e&&e.c()}function st(e,t){e&&e.l(t)}function ke(e,t,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:u}=e.$$;r&&r.m(t,n),i||B(()=>{const c=o.map(K).filter(re);s?s.push(...c):$(c),e.$$.on_mount=[]}),u.forEach(B)}function Se(e,t){const n=e.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){e.$$.dirty[0]===-1&&(w.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ct(e,t,n,i,r,o,s,u=[-1]){const c=x;b(e);const l=e.$$={fragment:null,ctx:null,props:o,update:R,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(_,a,...m)=>{const h=m.length?m[0]:a;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),d&&Ee(e,_)),a}):[],l.update(),d=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){le();const _=pe(t.target);l.fragment&&l.fragment.l(_),_.forEach(V)}else l.fragment&&l.fragment.c();t.intro&&H(e.$$.fragment),ke(e,t.target,t.anchor,t.customElement),oe(),F()}b(c)}class Me{$destroy(){Se(this,1),this.$destroy=R}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function v(e,t){document.dispatchEvent(ve(e,Object.assign({version:"3.49.0"},t),{bubbles:!0}))}function lt(e,t){v("SvelteDOMInsert",{target:e,node:t}),U(e,t)}function ot(e,t,n){v("SvelteDOMInsert",{target:e,node:t,anchor:n}),fe(e,t,n)}function ut(e){v("SvelteDOMRemove",{node:e}),V(e)}function at(e,t,n,i,r,o){const s=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&s.push("preventDefault"),o&&s.push("stopPropagation"),v("SvelteDOMAddEventListener",{node:e,event:t,handler:n,modifiers:s});const u=he(e,t,n,i);return()=>{v("SvelteDOMRemoveEventListener",{node:e,event:t,handler:n,modifiers:s}),u()}}function ft(e,t,n){me(e,t,n),n==null?v("SvelteDOMRemoveAttribute",{node:e,attribute:t}):v("SvelteDOMSetAttribute",{node:e,attribute:t,value:n})}function dt(e,t,n){e[t]=n,v("SvelteDOMSetProperty",{node:e,property:t,value:n})}function _t(e,t){t=""+t,e.wholeText!==t&&(v("SvelteDOMSetData",{node:e,data:t}),e.data=t)}function ht(e){if(typeof e!="string"&&!(e&&typeof e=="object"&&"length"in e)){let t="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&e&&Symbol.iterator in e&&(t+=" You can use a spread to convert this iterable into an array."),new Error(t)}}function mt(e,t,n){for(const i of Object.keys(t))~n.indexOf(i)||console.warn(`<${e}> received an unexpected slot "${i}".`)}class pt extends Me{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}export{ze as $,st as A,ke as B,Se as C,Qe as D,R as E,Ne as F,qe as G,Le as H,Te as I,lt as J,Ae as K,Ce as L,ht as M,nt as N,Ze as O,at as P,tt as Q,Ye as R,pt as S,Ve as T,et as U,B as V,We as W,Xe as X,dt as Y,$ as Z,_e as _,Je as a,J as a0,it as a1,Pe as a2,Ue as a3,De as a4,Ke as b,Ie as c,v as d,Be as e,Fe as f,ot as g,we as h,ct as i,xe as j,H as k,ut as l,de as m,Re as n,Ge as o,pe as p,ft as q,He as r,je as s,$e as t,Oe as u,mt as v,z as w,be as x,_t as y,rt as z};
