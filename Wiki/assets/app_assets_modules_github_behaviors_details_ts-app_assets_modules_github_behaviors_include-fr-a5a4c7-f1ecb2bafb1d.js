"use strict";(()=>{var x=Object.defineProperty;var t=(R,L)=>x(R,"name",{value:L,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-a5a4c7"],{97261:(R,L,r)=>{r.d(L,{S:()=>y});function d(p){const o=document.querySelectorAll(p);if(o.length>0)return o[o.length-1]}t(d,"queryLast");function A(){const p=d("meta[name=analytics-location]");return p?p.content:window.location.pathname}t(A,"pagePathname");function _(){const p=d("meta[name=analytics-location-query-strip]");let o="";p||(o=window.location.search);const a=d("meta[name=analytics-location-params]");a&&(o+=(o?"&":"?")+a.content);for(const i of document.querySelectorAll("meta[name=analytics-param-rename]")){const m=i.content.split(":",2);o=o.replace(new RegExp(`(^|[?&])${m[0]}($|=)`,"g"),`$1${m[1]}$2`)}return o}t(_,"pageQuery");function y(){return`${window.location.protocol}//${window.location.host}${A()+_()}`}t(y,"requestUri")},78784:(R,L,r)=>{r.d(L,{O4:()=>C,jo:()=>T,Qp:()=>S});var d=r(47458),A=r(59753);const _="ontransitionend"in window;function y(n,l){if(!_){l();return}const g=Array.from(n.querySelectorAll(".js-transitionable"));n.classList.contains("js-transitionable")&&g.push(n);for(const f of g){const w=p(f);f instanceof HTMLElement&&(f.addEventListener("transitionend",()=>{f.style.display="",f.style.visibility="",w&&o(f,function(){f.style.height=""})},{once:!0}),f.style.boxSizing="content-box",f.style.display="block",f.style.visibility="visible",w&&o(f,function(){f.style.height=getComputedStyle(f).height}),f.offsetHeight)}l();for(const f of g)if(f instanceof HTMLElement&&p(f)){const w=getComputedStyle(f).height;f.style.boxSizing="",w==="0px"?f.style.height=`${f.scrollHeight}px`:f.style.height="0px"}}t(y,"performTransition");function p(n){return getComputedStyle(n).transitionProperty==="height"}t(p,"isTransitioningHeight");function o(n,l){n.style.transition="none",l(),n.offsetHeight,n.style.transition=""}t(o,"withoutTransition");var a=r(96776);function i(n,l){l.find(g=>{const f=n.querySelectorAll(g),w=f[f.length-1];if(w&&document.activeElement!==w)return w.focus(),!0})}t(i,"findAndFocusByQuerySelector");function m(n){i(n,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}t(m,"restoreAutofocus");function c(n){!n.classList.contains("tooltipped")||(n.classList.remove("tooltipped"),n.addEventListener("mouseleave",()=>{n.classList.add("tooltipped"),n.blur()},{once:!0}))}t(c,"hideTooltip");function E(n){return[...document.querySelectorAll(".js-details-container")].filter(l=>l.getAttribute("data-details-container-group")===n)}t(E,"groupMembers");function h(n){return[...n.querySelectorAll(".js-details-target")].filter(l=>l.closest(".js-details-container")===n)}t(h,"containerTargets");function v(n,l){const g=n.getAttribute("data-details-container-group");return g?((0,a.uQ)(n,()=>{for(const f of E(g))f!==n&&s(f,l)}),g):null}t(v,"toggleGroup");function s(n,l){n.classList.toggle("open",l),n.classList.toggle("Details--on",l);for(const g of h(n))g.setAttribute("aria-expanded",l.toString())}t(s,"updateOpenState");function S(n,l){var g,f;const w=n.getAttribute("data-details-container")||".js-details-container",M=n.closest(w),D=(g=l==null?void 0:l.force)!=null?g:!M.classList.contains("open"),I=(f=l==null?void 0:l.withGroup)!=null?f:!1;y(M,()=>{s(M,D);const e=I?v(M,D):null;Promise.resolve().then(()=>{m(M),c(n),M.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:D}})),e&&M.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:D,group:e}}))})})}t(S,"toggleDetailsTarget");function T(n){const l=n.getAttribute("data-details-container")||".js-details-container",f=n.closest(l).classList;return f.contains("Details--on")||f.contains("open")}t(T,"isDetailsTargetExpanded");function O(n){const l=n.altKey,g=n.currentTarget;S(g,{withGroup:l}),n.preventDefault()}t(O,"handleDetailsTargetClick"),(0,A.on)("click",".js-details-target",O),(0,d.Z)(function({target:n}){n&&C(n)});function C(n){let l=!1,g=n.parentElement;for(;g;)g.classList.contains("Details-content--shown")&&(l=!0),g.classList.contains("js-details-container")&&(g.classList.toggle("open",!l),g.classList.toggle("Details--on",!l),l=!1),g=g.parentElement}t(C,"ensureExpanded")},52694:(R,L,r)=>{r.d(L,{h:()=>A});var d=r(59753);(0,d.on)("click",".js-skip-to-content",function(i){const m=document.getElementById("start-of-content");if(m){const c=m.nextElementSibling;c instanceof HTMLElement&&(c.setAttribute("tabindex","-1"),c.setAttribute("data-skipped-to-content","1"),c.focus())}i.preventDefault()});function A(){let i=!1;const m=document.getElementById("start-of-content");if(m){const c=m.nextElementSibling;if(c instanceof HTMLElement)return i=c.getAttribute("data-skipped-to-content")==="1",i&&c.removeAttribute("data-skipped-to-content"),i}}t(A,"hasSkippedToContent");const _="ontouchstart"in document;function y(){return window.innerWidth>1012}t(y,"compatibleDesktop");for(const i of document.querySelectorAll(".HeaderMenu-details"))i.addEventListener("toggle",o),_||(i.addEventListener("mouseover",a),i.addEventListener("mouseleave",a));let p=!1;function o(i){if(!p){p=!0;for(const m of document.querySelectorAll(".HeaderMenu-details"))m!==i.currentTarget&&m.removeAttribute("open");setTimeout(()=>p=!1)}}t(o,"onMenuToggle");function a(i){const{currentTarget:m}=i;!(m instanceof HTMLElement)||!y()||(i.type==="mouseover"&&i instanceof MouseEvent?i.target instanceof Node&&i.relatedTarget instanceof Node&&m.contains(i.target)&&!m.contains(i.relatedTarget)&&m.setAttribute("open",""):m.removeAttribute("open"))}t(a,"onMenuHover")},54294:(R,L,r)=>{r.d(L,{$:()=>i,G:()=>a});var d=r(16246),A=r(64463),_=r(59753);(0,A.N7)("include-fragment, poll-include-fragment",{subscribe:c=>(0,d.qC)((0,d.RB)(c,"error",o),(0,d.RB)(c,"loadstart",p))}),(0,_.on)("click","include-fragment button[data-retry-button]",({currentTarget:c})=>{const E=c.closest("include-fragment"),h=E.src;E.src="",E.src=h});function y(c,E){const h=c.currentTarget;if(h instanceof Element){for(const v of h.querySelectorAll("[data-show-on-error]"))v instanceof HTMLElement&&(v.hidden=!E);for(const v of h.querySelectorAll("[data-hide-on-error]"))v instanceof HTMLElement&&(v.hidden=E)}}t(y,"toggleElements");function p(c){y(c,!1)}t(p,"onLoad");function o(c){y(c,!0)}t(o,"onError");function a({currentTarget:c}){c instanceof Element&&i(c)}t(a,"loadDeferredContentByEvent");function i(c){const E=c.closest("details");E&&m(E)}t(i,"loadDeferredContent");function m(c){const E=c.getAttribute("data-deferred-details-content-url");if(E){c.removeAttribute("data-deferred-details-content-url");const h=c.querySelector("include-fragment, poll-include-fragment");h&&(h.src=E)}}t(m,"setIncludeFragmentSrc")},4512:(R,L,r)=>{r.d(L,{O3:()=>a,SX:()=>y,_g:()=>p,a8:()=>_,lB:()=>o});let d=0;const A=new Set;function _(i){A.add(i)}t(_,"observeStickyHeaderHeight");function y(i){A.delete(i)}t(y,"unobserveStickyHeaderHeight");function p(){return d}t(p,"getBaseStickyHeaderHeight");function o(i){d=i,i?document.body.style.setProperty("--base-sticky-header-height",`${i}px`):document.body.style.removeProperty("--base-sticky-header-height");for(const m of A)m(i)}t(o,"setBaseStickyHeaderHeight");const a="var(--base-sticky-header-height, 0px)"},8777:(R,L,r)=>{r.d(L,{H:()=>c});var d=r(52694),A=r(75488),_=r(64463),y=r(4512);let p=!1;const o=[];function a(){o.length?i():m()}t(a,"manageObservers");function i(){p||(window.addEventListener("resize",E),document.addEventListener("scroll",E),p=!0)}t(i,"addObservers");function m(){window.removeEventListener("resize",E),document.removeEventListener("scroll",E),p=!1}t(m,"removeObservers");function c(){h(!0)}t(c,"forceStickyRelayout");function E(){h()}t(E,"checkElementsForStickingHandler");function h(e=!1){for(const u of o)if(u.element.offsetHeight>0){const{element:b,placeholder:P,top:k}=u,B=b.getBoundingClientRect();if(P){const H=P.getBoundingClientRect();b.classList.contains("is-stuck")?H.top>D(b,k)?S(u):T(u):B.top<=D(b,k)?s(u):e&&T(u)}else B.top-D(b,k)<.1?s(u):S(u)}}t(h,"checkElementsForSticking");function v(e){const{position:u}=window.getComputedStyle(e);return/sticky/.test(u)}t(v,"browserHasSticky");function s({element:e,placeholder:u,top:b}){if(u){const P=e.getBoundingClientRect();I(e,D(e,b)),e.style.left=`${P.left}px`,e.style.width=`${P.width}px`,e.style.marginTop="0",e.style.position="fixed",u.style.display="block"}e.classList.add("is-stuck")}t(s,"pinSet");function S({element:e,placeholder:u}){u&&(e.style.position="static",e.style.marginTop=u.style.marginTop,u.style.display="none"),e.classList.remove("is-stuck")}t(S,"unpinSet");function T({element:e,placeholder:u,offsetParent:b,top:P}){if(u&&!(0,d.h)()){const k=e.getBoundingClientRect(),B=u.getBoundingClientRect();if(I(e,D(e,P)),e.style.left=`${B.left}px`,e.style.width=`${B.width}px`,b){const H=b.getBoundingClientRect();H.bottom<k.height+parseInt(String(P))&&(e.style.top=`${H.bottom-k.height}px`)}}}t(T,"updatePinnedSet");function O(e){if(v(e))return null;const u=e.previousElementSibling;if(u&&u.classList.contains("is-placeholder"))return u;const b=document.createElement("div");return b.style.visibility="hidden",b.style.display="none",b.style.height=window.getComputedStyle(e).height,b.className=e.className,b.classList.remove("js-sticky"),b.classList.add("is-placeholder"),e.parentNode.insertBefore(b,e)}t(O,"findOrCreatePlaceholder");function C(e){const u=O(e),b=window.getComputedStyle(e).position;e.style.position="static";const P=e.offsetParent;e.style.position="fixed";const k=M(e),B={element:e,placeholder:u,offsetParent:P,top:k==="auto"?0:parseInt(k||"0")};e.style.position=b,o.push(B)}t(C,"createSet");function n(e){const u=o.map(b=>b.element).indexOf(e);o.splice(u,1)}t(n,"removeSet");async function l(e){await A.C,C(e),h(),a()}t(l,"initializeSet"),(0,_.N7)(".js-sticky",{constructor:HTMLElement,add(e){!e.isConnected||l(e)},remove(e){n(e),a()}}),(0,_.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(e){g(e)},remove(){(0,y._g)()>0&&((0,y.lB)(0),f(),c())}}),(0,_.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:w});async function g(e){if(e.offsetParent===null)return;await A.C;const u=Math.floor(e.getBoundingClientRect().height);u>0&&((0,y.lB)(u),f(),c())}t(g,"initializeNotificationShelf");function f(){for(const e of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))w(e)}t(f,"updateTopOffsets");function w(e){if(e.classList.contains("js-notification-top-shelf"))return;const u=parseInt(M(e))||0;I(e,u+(0,y._g)())}t(w,"updateTopOffset");function M(e){const u=e.getAttribute("data-original-top");if(u!=null)return u;const b=window.getComputedStyle(e).top;return e.setAttribute("data-original-top",b),b}t(M,"getOriginalTop");function D(e,u){return e.classList.contains("js-notification-top-shelf")?u:u+(0,y._g)()}t(D,"withShelfOffset");function I(e,u){e.style.setProperty("top",`${u}px`,"important")}t(I,"setTopImportant")},31579:(R,L,r)=>{r.d(L,{Z:()=>A});class d{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}t(d,"NoOpStorage");function A(_,y={throwQuotaErrorsOnSet:!1},p=window){let o;try{o=p[_]}catch{o=new d}const{throwQuotaErrorsOnSet:a}=y;function i(E){try{return o.getItem(E)}catch{return null}}t(i,"getItem");function m(E,h){try{o.setItem(E,h)}catch(v){if(a&&v.message.toLowerCase().includes("quota"))throw v}}t(m,"setItem");function c(E){try{o.removeItem(E)}catch{}}return t(c,"removeItem"),{getItem:i,setItem:m,removeItem:c}}t(A,"safeStorage")},30855:(R,L,r)=>{r.d(L,{LS:()=>_,cl:()=>y,rV:()=>A});var d=r(31579);const{getItem:A,setItem:_,removeItem:y}=(0,d.Z)("sessionStorage")},71692:(R,L,r)=>{r.d(L,{Ak:()=>s,F2:()=>w,F6:()=>n,FP:()=>h,LD:()=>E,OE:()=>c,Po:()=>m,QE:()=>y,Rl:()=>g,Xk:()=>O,Ys:()=>C,aN:()=>f,wP:()=>l});var d=r(30855),A=r(97261),_=r(77552);const y=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",START:"soft-nav:start",END:"soft-nav:end"}),p="soft-navigation-fail",o="soft-navigation-referrer",a="soft-navigation-marker",i="reload";function m(){return(0,d.rV)(a)==="1"}t(m,"inSoftNavigation");function c(){return Boolean(S())}t(c,"hasSoftNavFailure");function E(){performance.mark(a),(0,d.LS)(a,"1"),(0,d.LS)(o,(0,A.S)()||window.location.href)}t(E,"startSoftNav");function h(){(0,d.LS)(a,"0")}t(h,"endSoftNav");function v(){(0,d.LS)(a,"0"),(0,d.cl)(o),(0,d.cl)(p)}t(v,"clearSoftNav");function s(M){(0,d.LS)(p,M||i)}t(s,"setSoftNavFailReason");function S(){return(0,d.rV)(p)}t(S,"getSoftNavFailReason");let T=0;function O(){T+=1,document.dispatchEvent(new CustomEvent(y.SUCCESS,{detail:T}))}t(O,"softNavSucceeded");function C(){const M=S()||i;document.dispatchEvent(new CustomEvent(y.ERROR,{detail:M})),T=0,v(),(0,_.b)({turboFailureReason:M})}t(C,"softNavFailed");function n(){document.dispatchEvent(new CustomEvent(y.INITIAL)),T=0,v()}t(n,"softNavInitial");function l(){return(0,d.rV)(o)||document.referrer}t(l,"getSoftNavReferrer");function g(){return performance.getEntriesByName(a).length===0?0:performance.measure(a,a).duration}t(g,"getDurationSinceLastSoftNav");function f(){document.dispatchEvent(new Event(y.START))}t(f,"beginProgressBar");function w(){document.dispatchEvent(new Event(y.END))}t(w,"completeProgressBar")},83151:(R,L,r)=>{r.d(L,{kc:()=>y,lA:()=>p,zT:()=>_});var d=r(51847),A=r(8777);function _(o){if(o.hasAttribute("data-ignore-sticky-scroll"))return;const a=o.ownerDocument;setTimeout(()=>{a&&a.defaultView&&(o.scrollIntoView(),a.defaultView.scrollBy(0,-p(a)))},0)}t(_,"scrollIntoView");function y(o){const a=(0,d.Kt)(o);a&&_(a)}t(y,"scrollToFragmentTarget");function p(o){(0,A.H)();const a=o.querySelectorAll(".js-sticky-offset-scroll"),i=o.querySelectorAll(".js-position-sticky"),m=Math.max(0,...Array.from(a).map(h=>{const{top:v,height:s}=h.getBoundingClientRect();return v===0?s:0}))+Math.max(0,...Array.from(i).map(h=>{const{top:v,height:s}=h.getBoundingClientRect(),S=parseInt(getComputedStyle(h).top);if(!h.parentElement)return 0;const T=h.parentElement.getBoundingClientRect().top;return v===S&&T<0?s:0})),c=o.querySelectorAll(".js-position-sticky-stacked"),E=Array.from(c).reduce((h,v)=>{const{height:s,top:S}=v.getBoundingClientRect(),T=S<0,O=v.classList.contains("is-stuck");return h+(!T&&O?s:0)},0);return m+E}t(p,"computeFixedYOffset")},34692:(R,L,r)=>{r.d(L,{H5:()=>i,Of:()=>E,x0:()=>c,z8:()=>m});var d=r(10795),A=r(64463),_=r(5638),y=r(96776),p=r(98016);const o=new WeakMap,a={};function i(){for(const S of Object.keys(a))delete a[S];const s=history.state||{};s.staleRecords=a,(0,p.lO)(s,"",location.href),window.location.reload()}t(i,"reload");function m(){if(Object.keys(a).length>0){const s=history.state||{};s.staleRecords=a,(0,p.lO)(s,"",location.href)}}t(m,"registerStaleRecords");async function c(s){if(o.get(s))return;const S=s.hasAttribute("data-retain-focus"),T=s.getAttribute("data-url");if(!T)throw new Error("could not get url");const O=new AbortController;o.set(s,O);try{const C=await fetch(T,{signal:O.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!C.ok)return;const n=await C.text();if((0,d.M)(s,S)){console.warn("Failed to update content with interactions",s);return}return a[T]=n,h(s,n,S)}catch{}finally{o.delete(s)}}t(c,"updateContent");async function E(s,S,T=!1){const O=o.get(s);O==null||O.abort();const C=s.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!T&&C&&C===s&&(a[C.getAttribute("data-url")||""]=S),h(s,S)}t(E,"replaceContent");function h(s,S,T=!1){return(0,y._8)(document,()=>{const O=(0,_.r)(document,S.trim()),C=T&&s.ownerDocument&&s===s.ownerDocument.activeElement?O.querySelector("*"):null,n=Array.from(s.querySelectorAll("details[open][id]")).map(l=>l.id);s.tagName==="DETAILS"&&s.id&&s.hasAttribute("open")&&n.push(s.id);for(const l of s.querySelectorAll(".js-updatable-content-preserve-scroll-position")){const g=l.getAttribute("data-updatable-content-scroll-position-id")||"";v.set(g,l.scrollTop)}for(const l of n){const g=O.querySelector(`#${l}`);g&&g.setAttribute("open","")}s.replaceWith(O),C instanceof HTMLElement&&C.focus()})}t(h,"replace");const v=new Map;(0,A.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(s){const S=s.getAttribute("data-updatable-content-scroll-position-id");if(!S)return;const T=v.get(S);T!=null&&(s.scrollTop=T)}})}}]);})();

//# sourceMappingURL=app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_behaviors_include-fr-a5a4c7-23d7a045bbf3.js.map