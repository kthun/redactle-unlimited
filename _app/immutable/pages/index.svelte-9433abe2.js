import{S as Je,i as ze,s as Se,l as ce,g as P,n as ue,d as X,e as T,t as E,c as U,a as z,h as j,b as W,K as re,J as m,j as se,L as Le,M as Me,p as $,q as pe,r as M,N as de,k as D,m as q,O as xe,P as Ve,Q as Ce,R as he,T as Pe,o as be,U as De,x as He,y as Ee,z as je,C as Ae}from"../chunks/index-f6daf259.js";function qe(l){let e,n=(l[3]?"\u2588".repeat(l[1].length):l[1])+"",s,a;return{c(){e=T("span"),s=E(n),this.h()},l(t){e=U(t,"SPAN",{id:!0,class:!0});var c=z(e);s=j(c,n),c.forEach(X),this.h()},h(){W(e,"id",l[0]),W(e,"class",a=re((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-1wn3cpb")},m(t,c){P(t,e,c),m(e,s)},p(t,c){c&10&&n!==(n=(t[3]?"\u2588".repeat(t[1].length):t[1])+"")&&se(s,n),c&1&&W(e,"id",t[0]),c&12&&a!==(a=re((t[2]?"highlight":"")+(t[3]?" redacted":""))+" svelte-1wn3cpb")&&W(e,"class",a)},d(t){t&&X(e)}}}function Ke(l){let e,n=(l[3]?"\u2588".repeat(l[1].length-`${l[1].length}`.length):l[1])+"",s,a,t=l[3]&&Xe(l);return{c(){e=T("span"),t&&t.c(),s=E(n),this.h()},l(c){e=U(c,"SPAN",{id:!0,class:!0});var o=z(e);t&&t.l(o),s=j(o,n),o.forEach(X),this.h()},h(){W(e,"id",l[0]),W(e,"class",a=re((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-1wn3cpb")},m(c,o){P(c,e,o),t&&t.m(e,null),m(e,s)},p(c,o){c[3]?t?t.p(c,o):(t=Xe(c),t.c(),t.m(e,s)):t&&(t.d(1),t=null),o&10&&n!==(n=(c[3]?"\u2588".repeat(c[1].length-`${c[1].length}`.length):c[1])+"")&&se(s,n),o&1&&W(e,"id",c[0]),o&12&&a!==(a=re((c[2]?"highlight":"")+(c[3]?" redacted":""))+" svelte-1wn3cpb")&&W(e,"class",a)},d(c){c&&X(e),t&&t.d()}}}function Xe(l){let e,n=l[1].length+"",s;return{c(){e=T("span"),s=E(n),this.h()},l(a){e=U(a,"SPAN",{class:!0});var t=z(e);s=j(t,n),t.forEach(X),this.h()},h(){W(e,"class","char_count svelte-1wn3cpb")},m(a,t){P(a,e,t),m(e,s)},p(a,t){t&2&&n!==(n=a[1].length+"")&&se(s,n)},d(a){a&&X(e)}}}function $e(l){let e;function n(t,c){return t[1].length>2?Ke:qe}let s=n(l),a=s(l);return{c(){a.c(),e=ce()},l(t){a.l(t),e=ce()},m(t,c){a.m(t,c),P(t,e,c)},p(t,[c]){s===(s=n(t))&&a?a.p(t,c):(a.d(1),a=s(t),a&&(a.c(),a.m(e.parentNode,e)))},i:ue,o:ue,d(t){a.d(t),t&&X(e)}}}function et(l,e,n){let{id:s}=e,{value:a=""}=e,{highlight:t=!1}=e,{redacted:c=!1}=e;return l.$$set=o=>{"id"in o&&n(0,s=o.id),"value"in o&&n(1,a=o.value),"highlight"in o&&n(2,t=o.highlight),"redacted"in o&&n(3,c=o.redacted)},[s,a,t,c]}class Be extends Je{constructor(e){super(),ze(this,e,et,$e,Se,{id:0,value:1,highlight:2,redacted:3})}}var tt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Oe={exports:{}};(function(l){(function(e){if(typeof n!="function"){var n=function(f){return f};n.nonNative=!0}const s=n("plaintext"),a=n("html"),t=n("comment"),c=/<(\w*)>/g,o=/<\/?([^\s\/>]+)/;function r(f,g,y){f=f||"",g=g||[],y=y||"";let B=G(g,y);return Y(f,B)}function i(f,g){f=f||[],g=g||"";let y=G(f,g);return function(N){return Y(N||"",y)}}r.init_streaming_mode=i;function G(f,g){return f=R(f),{allowable_tags:f,tag_replacement:g,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function Y(f,g){if(typeof f!="string")throw new TypeError("'html' parameter must be a string");let y=g.allowable_tags,B=g.tag_replacement,N=g.state,_=g.tag_buffer,Q=g.depth,k=g.in_quote_char,A="";for(let O=0,J=f.length;O<J;O++){let w=f[O];if(N===s)switch(w){case"<":N=a,_+=w;break;default:A+=w;break}else if(N===a)switch(w){case"<":if(k)break;Q++;break;case">":if(k)break;if(Q){Q--;break}k="",N=s,_+=">",y.has(v(_))?A+=_:A+=B,_="";break;case'"':case"'":w===k?k="":k=k||w,_+=w;break;case"-":_==="<!-"&&(N=t),_+=w;break;case" ":case`
`:if(_==="<"){N=s,A+="< ",_="";break}_+=w;break;default:_+=w;break}else if(N===t)switch(w){case">":_.slice(-2)=="--"&&(N=s),_="";break;default:_+=w;break}}return g.state=N,g.tag_buffer=_,g.depth=Q,g.in_quote_char=k,A}function R(f){let g=new Set;if(typeof f=="string"){let y;for(;y=c.exec(f);)g.add(y[1])}else!n.nonNative&&typeof f[n.iterator]=="function"?g=new Set(f):typeof f.forEach=="function"&&f.forEach(g.add,g);return g}function v(f){let g=o.exec(f);return g?g[1].toLowerCase():null}l.exports?l.exports=r:e.striptags=r})(tt)})(Oe);var me=Oe.exports;function lt(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}var ee={$(l){return typeof l=="string"?document.querySelector(l):l},extend(...l){return Object.assign(...l)},cumulativeOffset(l){let e=0,n=0;do e+=l.offsetTop||0,n+=l.offsetLeft||0,l=l.offsetParent;while(l);return{top:e,left:n}},directScroll(l){return l&&l!==document&&l!==document.body},scrollTop(l,e){let n=e!==void 0;return this.directScroll(l)?n?l.scrollTop=e:l.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(l,e){let n=e!==void 0;return this.directScroll(l)?n?l.scrollLeft=e:l.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const nt={container:"body",duration:500,delay:0,offset:0,easing:lt,onStart:ue,onDone:ue,onAborting:ue,scrollX:!1,scrollY:!0},st=l=>{let{offset:e,duration:n,delay:s,easing:a,x:t=0,y:c=0,scrollX:o,scrollY:r,onStart:i,onDone:G,container:Y,onAborting:R,element:v}=l;typeof e=="function"&&(e=e());var f=ee.cumulativeOffset(Y),g=v?ee.cumulativeOffset(v):{top:c,left:t},y=ee.scrollLeft(Y),B=ee.scrollTop(Y),N=g.left-f.left+e,_=g.top-f.top+e,Q=N-y,k=_-B;let A=!0,O=!1,J=Le()+s,w=J+n;function x(S,u,d){o&&ee.scrollLeft(S,d),r&&ee.scrollTop(S,u)}function te(S){S||(O=!0,i(v,{x:t,y:c}))}function I(S){x(Y,B+k*S,y+Q*S)}function K(){A=!1}return Me(S=>{if(!O&&S>=J&&te(!1),O&&S>=w&&(I(1),K(),G(v,{x:t,y:c})),!A)return R(v,{x:t,y:c}),!1;if(O){const u=S-J,d=0+1*a(u/n);I(d)}return!0}),te(s),I(0),K},at=l=>{let e=ee.extend({},nt,l);return e.container=ee.$(e.container),e.element=ee.$(e.element),e},ot=l=>st(at(l));function Ge(l,e,n){const s=l.slice();return s[28]=e[n],s[30]=n,s}function _e(l,e,n){const s=l.slice();return s[31]=e[n],s[30]=n,s}function Ze(l,e,n){const s=l.slice();return s[33]=e[n],s}function ye(l,e,n){const s=l.slice();return s[33]=e[n],s}function Fe(l){let e,n;return{c(){e=T("p"),n=E("loading..."),this.h()},l(s){e=U(s,"P",{class:!0});var a=z(e);n=j(a,"loading..."),a.forEach(X),this.h()},h(){W(e,"class","svelte-1c5tla1")},m(s,a){P(s,e,a),m(e,n)},d(s){s&&X(e)}}}function Re(l){let e,n,s=Object.keys(l[0]).length+"",a,t;return{c(){e=T("p"),n=E("Solved in "),a=E(s),t=E(" guesses!"),this.h()},l(c){e=U(c,"P",{class:!0});var o=z(e);n=j(o,"Solved in "),a=j(o,s),t=j(o," guesses!"),o.forEach(X),this.h()},h(){W(e,"class","svelte-1c5tla1")},m(c,o){P(c,e,o),m(e,n),m(e,a),m(e,t)},p(c,o){o[0]&1&&s!==(s=Object.keys(c[0]).length+"")&&se(a,s)},d(c){c&&X(e)}}}function it(l){let e,n,s,a=l[31].tokens,t=[];for(let o=0;o<a.length;o+=1)t[o]=Ye(Ze(l,a,o));const c=o=>$(t[o],1,1,()=>{t[o]=null});return{c(){e=T("p");for(let o=0;o<t.length;o+=1)t[o].c();n=D(),this.h()},l(o){e=U(o,"P",{class:!0});var r=z(e);for(let i=0;i<t.length;i+=1)t[i].l(r);n=q(r),r.forEach(X),this.h()},h(){W(e,"class","svelte-1c5tla1")},m(o,r){P(o,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null);m(e,n),s=!0},p(o,r){if(r[0]&4){a=o[31].tokens;let i;for(i=0;i<a.length;i+=1){const G=Ze(o,a,i);t[i]?(t[i].p(G,r),M(t[i],1)):(t[i]=Ye(G),t[i].c(),M(t[i],1),t[i].m(e,n))}for(be(),i=a.length;i<t.length;i+=1)c(i);pe()}},i(o){if(!s){for(let r=0;r<a.length;r+=1)M(t[r]);s=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)$(t[r]);s=!1},d(o){o&&X(e),he(t,o)}}}function ct(l){let e,n,s,a=l[31].tokens,t=[];for(let o=0;o<a.length;o+=1)t[o]=ke(ye(l,a,o));const c=o=>$(t[o],1,1,()=>{t[o]=null});return{c(){e=T("h2");for(let o=0;o<t.length;o+=1)t[o].c();n=D(),this.h()},l(o){e=U(o,"H2",{id:!0,class:!0});var r=z(e);for(let i=0;i<t.length;i+=1)t[i].l(r);n=q(r),r.forEach(X),this.h()},h(){W(e,"id","headline-section-"+l[30]),W(e,"class","svelte-1c5tla1")},m(o,r){P(o,e,r);for(let i=0;i<t.length;i+=1)t[i].m(e,null);m(e,n),s=!0},p(o,r){if(r[0]&4){a=o[31].tokens;let i;for(i=0;i<a.length;i+=1){const G=ye(o,a,i);t[i]?(t[i].p(G,r),M(t[i],1)):(t[i]=ke(G),t[i].c(),M(t[i],1),t[i].m(e,n))}for(be(),i=a.length;i<t.length;i+=1)c(i);pe()}},i(o){if(!s){for(let r=0;r<a.length;r+=1)M(t[r]);s=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)$(t[r]);s=!1},d(o){o&&X(e),he(t,o)}}}function Ye(l){let e,n;return e=new Be({props:{id:l[33].id,value:l[33].value,redacted:l[33].redacted,highlight:l[33].highlight||!1}}),{c(){He(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,a){je(e,s,a),n=!0},p(s,a){const t={};a[0]&4&&(t.id=s[33].id),a[0]&4&&(t.value=s[33].value),a[0]&4&&(t.redacted=s[33].redacted),a[0]&4&&(t.highlight=s[33].highlight||!1),e.$set(t)},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){Ae(e,s)}}}function ke(l){let e,n;return e=new Be({props:{id:l[33].id,value:l[33].value,redacted:l[33].redacted,highlight:l[33].highlight||!1}}),{c(){He(e.$$.fragment)},l(s){Ee(e.$$.fragment,s)},m(s,a){je(e,s,a),n=!0},p(s,a){const t={};a[0]&4&&(t.id=s[33].id),a[0]&4&&(t.value=s[33].value),a[0]&4&&(t.redacted=s[33].redacted),a[0]&4&&(t.highlight=s[33].highlight||!1),e.$set(t)},i(s){n||(M(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){Ae(e,s)}}}function Qe(l){let e,n,s,a;const t=[ct,it],c=[];function o(r,i){return r[31].headline?0:1}return e=o(l),n=c[e]=t[e](l),{c(){n.c(),s=ce()},l(r){n.l(r),s=ce()},m(r,i){c[e].m(r,i),P(r,s,i),a=!0},p(r,i){let G=e;e=o(r),e===G?c[e].p(r,i):(be(),$(c[G],1,1,()=>{c[G]=null}),pe(),n=c[e],n?n.p(r,i):(n=c[e]=t[e](r),n.c()),M(n,1),n.m(s.parentNode,s))},i(r){a||(M(n),a=!0)},o(r){$(n),a=!1},d(r){c[e].d(r),r&&X(s)}}}function we(l){let e,n,s=l[28]+"",a,t,c=l[0][l[28]]+"",o,r,i,G,Y;return{c(){e=T("span"),n=T("b"),a=E(s),t=E("("),o=E(c),r=E(")"),this.h()},l(R){e=U(R,"SPAN",{class:!0});var v=z(e);n=U(v,"B",{});var f=z(n);a=j(f,s),f.forEach(X),t=j(v,"("),o=j(v,c),r=j(v,")"),v.forEach(X),this.h()},h(){W(e,"class",i=re((l[4]==l[28]?"highlight":"")+(l[0][l[28]]>0?" hit":" miss")+" word")+" svelte-1c5tla1")},m(R,v){P(R,e,v),m(e,n),m(n,a),m(e,t),m(e,o),m(e,r),G||(Y=de(e,"click",function(){De(l[6](l[28],!0))&&l[6](l[28],!0).apply(this,arguments)}),G=!0)},p(R,v){l=R,v[0]&1&&s!==(s=l[28]+"")&&se(a,s),v[0]&1&&c!==(c=l[0][l[28]]+"")&&se(o,c),v[0]&17&&i!==(i=re((l[4]==l[28]?"highlight":"")+(l[0][l[28]]>0?" hit":" miss")+" word")+" svelte-1c5tla1")&&W(e,"class",i)},d(R){R&&X(e),G=!1,Y()}}}function Te(l){let e,n=we(l);return{c(){n&&n.c(),e=ce()},l(s){n&&n.l(s),e=ce()},m(s,a){n&&n.m(s,a),P(s,e,a)},p(s,a){n?n.p(s,a):(n=we(s),n.c(),n.m(e.parentNode,e))},d(s){n&&n.d(s),s&&X(e)}}}function rt(l){let e,n,s,a,t,c,o,r,i,G,Y,R,v,f,g,y=Object.keys(l[0]).length+"",B,N,_,Q,k,A,O,J,w,x,te,I,K,S,u,d=l[5]&&Fe(),V=l[1]&&Re(l),Z=l[2],p=[];for(let h=0;h<Z.length;h+=1)p[h]=Qe(_e(l,Z,h));const L=h=>$(p[h],1,1,()=>{p[h]=null});let C=Object.keys(l[0]).reverse(),H=[];for(let h=0;h<C.length;h+=1)H[h]=Te(Ge(l,C,h));return{c(){e=T("div"),n=T("nav"),s=T("h1"),a=E("Redactle Unlimited"),t=D(),c=T("p"),o=E(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),r=D(),i=T("div"),d&&d.c(),G=D(),V&&V.c(),Y=D();for(let h=0;h<p.length;h+=1)p[h].c();R=D(),v=T("div"),f=T("h3"),g=E("Guesses ("),B=E(y),N=E(")"),_=D(),Q=T("form"),k=T("button"),A=E("\u25B2 Top"),O=D(),J=T("input"),w=D(),x=T("input"),te=D(),I=T("guess-list");for(let h=0;h<H.length;h+=1)H[h].c();this.h()},l(h){e=U(h,"DIV",{id:!0,class:!0});var F=z(e);n=U(F,"NAV",{class:!0});var b=z(n);s=U(b,"H1",{class:!0});var le=z(s);a=j(le,"Redactle Unlimited"),le.forEach(X),t=q(b),c=U(b,"P",{class:!0});var ge=z(c);o=j(ge,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),ge.forEach(X),b.forEach(X),r=q(F),i=U(F,"DIV",{id:!0,class:!0});var ae=z(i);d&&d.l(ae),G=q(ae),V&&V.l(ae),Y=q(ae);for(let ne=0;ne<p.length;ne+=1)p[ne].l(ae);ae.forEach(X),R=q(F),v=U(F,"DIV",{id:!0,class:!0});var oe=z(v);f=U(oe,"H3",{class:!0});var fe=z(f);g=j(fe,"Guesses ("),B=j(fe,y),N=j(fe,")"),fe.forEach(X),_=q(oe),Q=U(oe,"FORM",{id:!0,class:!0});var ie=z(Q);k=U(ie,"BUTTON",{id:!0,type:!0,class:!0});var ve=z(k);A=j(ve,"\u25B2 Top"),ve.forEach(X),O=q(ie),J=U(ie,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,class:!0}),w=q(ie),x=U(ie,"INPUT",{id:!0,type:!0,class:!0}),ie.forEach(X),te=q(oe),I=U(oe,"GUESS-LIST",{class:!0});var We=z(I);for(let ne=0;ne<H.length;ne+=1)H[ne].l(We);We.forEach(X),oe.forEach(X),F.forEach(X),this.h()},h(){W(s,"class","svelte-1c5tla1"),W(c,"class","info svelte-1c5tla1"),W(n,"class","svelte-1c5tla1"),W(i,"id","article"),W(i,"class","svelte-1c5tla1"),W(f,"class","svelte-1c5tla1"),W(k,"id","btn-top"),W(k,"type","button"),W(k,"class","svelte-1c5tla1"),W(J,"id","input-guess"),W(J,"placeholder","guess a word..."),W(J,"autocomplete","off"),W(J,"class","svelte-1c5tla1"),W(x,"id","submit"),W(x,"type","submit"),x.value="Guess",W(x,"class","svelte-1c5tla1"),W(Q,"id","guess-form"),W(Q,"class","svelte-1c5tla1"),xe(I,"class","svelte-1c5tla1"),W(v,"id","guesses"),W(v,"class","svelte-1c5tla1"),W(e,"id","main"),W(e,"class","svelte-1c5tla1")},m(h,F){P(h,e,F),m(e,n),m(n,s),m(s,a),m(n,t),m(n,c),m(c,o),m(e,r),m(e,i),d&&d.m(i,null),m(i,G),V&&V.m(i,null),m(i,Y);for(let b=0;b<p.length;b+=1)p[b].m(i,null);m(e,R),m(e,v),m(v,f),m(f,g),m(f,B),m(f,N),m(v,_),m(v,Q),m(Q,k),m(k,A),m(Q,O),m(Q,J),Ve(J,l[3]),m(Q,w),m(Q,x),m(v,te),m(v,I);for(let b=0;b<H.length;b+=1)H[b].m(I,null);K=!0,S||(u=[de(k,"click",l[8]),de(J,"input",l[9]),de(Q,"submit",Ce(l[7]))],S=!0)},p(h,F){if(h[5]?d||(d=Fe(),d.c(),d.m(i,G)):d&&(d.d(1),d=null),h[1]?V?V.p(h,F):(V=Re(h),V.c(),V.m(i,Y)):V&&(V.d(1),V=null),F[0]&4){Z=h[2];let b;for(b=0;b<Z.length;b+=1){const le=_e(h,Z,b);p[b]?(p[b].p(le,F),M(p[b],1)):(p[b]=Qe(le),p[b].c(),M(p[b],1),p[b].m(i,null))}for(be(),b=Z.length;b<p.length;b+=1)L(b);pe()}if((!K||F[0]&1)&&y!==(y=Object.keys(h[0]).length+"")&&se(B,y),F[0]&8&&J.value!==h[3]&&Ve(J,h[3]),F[0]&81){C=Object.keys(h[0]).reverse();let b;for(b=0;b<C.length;b+=1){const le=Ge(h,C,b);H[b]?H[b].p(le,F):(H[b]=Te(le),H[b].c(),H[b].m(I,null))}for(;b<H.length;b+=1)H[b].d(1);H.length=C.length}},i(h){if(!K){for(let F=0;F<Z.length;F+=1)M(p[F]);K=!0}},o(h){p=p.filter(Boolean);for(let F=0;F<p.length;F+=1)$(p[F]);K=!1},d(h){h&&X(e),d&&d.d(),V&&V.d(),he(p,h),he(H,h),S=!1,Pe(u)}}}let ut=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const Ie="solved_game_history";function ft(){return JSON.parse(window.localStorage.getItem(Ie)||"{}")}function dt(){let l=document.getElementById("headline-section-0");l&&l.scrollIntoView()}function Ue(l,e){return`${ht(l).replaceAll("=","a")}${e}`}function ht(l){let e=encodeURIComponent(l).replace(/%([a-f0-9]{2})/gi,(n,s)=>String.fromCharCode(parseInt(s,16)));return btoa(e)}function pt(l){let e=atob(l).replace(/[\x80-\uffff]/g,n=>`%${n.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ne(l){return l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function bt(l,e,n){let s=[],a={},t=!1;const c=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let o={};c.forEach(u=>o[u]=1);const r=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let i=[],G={},Y="",R="",v=0,f={},g=!0,y="";B();function B(){const u=Math.floor(Math.random()*r.length);y=pt(r[u]),fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${y}`).then(d=>d.json()).then(d=>{let V=0,Z=d.lead.sections[0].text,p=N(Z);V+=p.length,s.push({text:p,headline:me(d.lead.displaytitle)});let L=0;for(;V<1e5&&L<d.remaining.sections.length;)Z=d.remaining.sections[L].text,p=N(Z),V+=p.length,s.push({text:p,headline:me(d.remaining.sections[L].line)}),L++;_()})}function N(u){if(typeof window!="undefined"){console.log("removing tags");var d=new window.DOMParser,V=d.parseFromString(u,"text/html");["style","table"].forEach(L=>{let C=V.getElementsByTagName(L);Array.prototype.slice.call(C,0).forEach(h=>h.remove())}),u=V.body.innerHTML}let Z=me(u);return Z=Z.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),Z=Z.replace(/\[\d+\]/ig,""),Z}function _(){console.log("rendering..."),n(2,i=[]),f={};for(const u in s)A(s[u].headline,!0),A(s[u].text,!1);n(5,g=!1)}function Q(){let u=i[0].tokens.find(d=>d.redacted);n(1,t=u===void 0),t&&(k(),_())}function k(){let u=ft(),d=new Date,V={title:y,guesses:Object.keys(a).length,time:d.getTime()};u[y]=V,window.localStorage.setItem(Ie,JSON.stringify(u)),console.log(`solved: ${t}`)}function A(u,d){let V=[...u.matchAll(ut)],Z=O(V);i.push({headline:d,tokens:Z})}function O(u){let d=[];for(const V in u){let Z=u[V][1];if(Z){let p=Ne(Z);f[p]=p in f?f[p]+1:1;let L={value:Z,wordNormal:p,id:Ue(p,f[p]-1),redacted:w(p),highlight:p==R};p in G||(G[p]=[]),G[p].push(L),d.push(L)}u[V][2]&&d.push({value:u[V][2]})}return d}function J(u){!G.hasOwnProperty(u)||(G[u].forEach(d=>{d.redacted=w(u),d.highlight=u==R}),n(2,i=[...i]))}function w(u){return!t&&!o.hasOwnProperty(u)&&!a.hasOwnProperty(u)}function x(u,d){v=R==u?v+1:0,u in f&&f[u]>0&&(v=v%f[u]);let V=R==u&&v==0;n(4,R=u),i.forEach(L=>{L.tokens.filter(C=>C.highlight==!0).forEach(C=>{C.highlight=!1})});const Z=Ue(R,v);document.getElementById(Z)&&d&&ot({container:"#article",element:`#${Z}`,duration:V?500:150,offset:-25}),J(u)}function te(){let u=Ne(Y);if(!I(u)){console.log("invalid guess"),n(3,Y="");return}n(0,a[u]=f[u]||0,a),x(u,!1),n(3,Y=""),Q(),u=="togglecheats"&&(n(1,t=!t),_())}function I(u){return!(u in o||/^\w+$/.test(u)==!1)}const K=()=>dt();function S(){Y=this.value,n(3,Y)}return[a,t,i,Y,R,g,x,te,K,S]}class gt extends Je{constructor(e){super(),ze(this,e,bt,rt,Se,{},null,[-1,-1])}}export{gt as default};