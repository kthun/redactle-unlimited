import{S as ke,i as Ue,s as Ne,e as k,t as j,c as U,a as T,h as E,d as X,b as V,K as oe,g as D,J as m,j as ae,n as pe,l as re,p as L,q as ue,r as x,L as ce,k as M,m as O,M as xe,N as We,O as Ae,P as he,Q as Be,o as fe,R as Ie,x as we,y as Je,z as Te,C as ze}from"../chunks/index-87fdb8f6.js";function Me(s){let e,t=(s[3]?"\u2588".repeat(s[1].length):s[1])+"",l,c;return{c(){e=k("span"),l=j(t),this.h()},l(n){e=U(n,"SPAN",{id:!0,class:!0});var r=T(e);l=E(r,t),r.forEach(X),this.h()},h(){V(e,"id",s[0]),V(e,"class",c=oe(s[2]?"highlight":"")+" svelte-s9xmm7")},m(n,r){D(n,e,r),m(e,l)},p(n,[r]){r&10&&t!==(t=(n[3]?"\u2588".repeat(n[1].length):n[1])+"")&&ae(l,t),r&1&&V(e,"id",n[0]),r&4&&c!==(c=oe(n[2]?"highlight":"")+" svelte-s9xmm7")&&V(e,"class",c)},i:pe,o:pe,d(n){n&&X(e)}}}function Oe(s,e,t){let{id:l}=e,{value:c=""}=e,{highlight:n=!1}=e,{redacted:r=!1}=e;return s.$$set=a=>{"id"in a&&t(0,l=a.id),"value"in a&&t(1,c=a.value),"highlight"in a&&t(2,n=a.highlight),"redacted"in a&&t(3,r=a.redacted)},[l,c,n,r]}class Se extends ke{constructor(e){super(),Ue(this,e,Oe,Me,Ne,{id:0,value:1,highlight:2,redacted:3})}}var Ce=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},He={exports:{}};(function(s){(function(e){if(typeof t!="function"){var t=function(f){return f};t.nonNative=!0}const l=t("plaintext"),c=t("html"),n=t("comment"),r=/<(\w*)>/g,a=/<\/?([^\s\/>]+)/;function o(f,b,N){f=f||"",b=b||[],N=N||"";let A=G(b,N);return z(f,A)}function i(f,b){f=f||[],b=b||"";let N=G(f,b);return function(Q){return z(Q||"",N)}}o.init_streaming_mode=i;function G(f,b){return f=Y(f),{allowable_tags:f,tag_replacement:b,state:l,tag_buffer:"",depth:0,in_quote_char:""}}function z(f,b){if(typeof f!="string")throw new TypeError("'html' parameter must be a string");let N=b.allowable_tags,A=b.tag_replacement,Q=b.state,F=b.tag_buffer,y=b.depth,R=b.in_quote_char,I="";for(let C=0,H=f.length;C<H;C++){let w=f[C];if(Q===l)switch(w){case"<":Q=c,F+=w;break;default:I+=w;break}else if(Q===c)switch(w){case"<":if(R)break;y++;break;case">":if(R)break;if(y){y--;break}R="",Q=l,F+=">",N.has(W(F))?I+=F:I+=A,F="";break;case'"':case"'":w===R?R="":R=R||w,F+=w;break;case"-":F==="<!-"&&(Q=n),F+=w;break;case" ":case`
`:if(F==="<"){Q=l,I+="< ",F="";break}F+=w;break;default:F+=w;break}else if(Q===n)switch(w){case">":F.slice(-2)=="--"&&(Q=l),F="";break;default:F+=w;break}}return b.state=Q,b.tag_buffer=F,b.depth=y,b.in_quote_char=R,I}function Y(f){let b=new Set;if(typeof f=="string"){let N;for(;N=r.exec(f);)b.add(N[1])}else!t.nonNative&&typeof f[t.iterator]=="function"?b=new Set(f):typeof f.forEach=="function"&&f.forEach(b.add,b);return b}function W(f){let b=a.exec(f);return b?b[1].toLowerCase():null}s.exports?s.exports=o:e.striptags=o})(Ce)})(He);var Le=He.exports;function Ve(s,e,t){const l=s.slice();return l[27]=e[t],l[29]=t,l}function ge(s,e,t){const l=s.slice();return l[30]=e[t],l[29]=t,l}function Ge(s,e,t){const l=s.slice();return l[32]=e[t],l}function Xe(s,e,t){const l=s.slice();return l[32]=e[t],l}function Ze(s){let e,t;return{c(){e=k("p"),t=j("loading..."),this.h()},l(l){e=U(l,"P",{class:!0});var c=T(e);t=E(c,"loading..."),c.forEach(X),this.h()},h(){V(e,"class","svelte-cd82sx")},m(l,c){D(l,e,c),m(e,t)},d(l){l&&X(e)}}}function _e(s){let e,t,l=Object.keys(s[0]).length+"",c,n;return{c(){e=k("p"),t=j("Solved in "),c=j(l),n=j(" guesses!"),this.h()},l(r){e=U(r,"P",{class:!0});var a=T(e);t=E(a,"Solved in "),c=E(a,l),n=E(a," guesses!"),a.forEach(X),this.h()},h(){V(e,"class","svelte-cd82sx")},m(r,a){D(r,e,a),m(e,t),m(e,c),m(e,n)},p(r,a){a[0]&1&&l!==(l=Object.keys(r[0]).length+"")&&ae(c,l)},d(r){r&&X(e)}}}function Pe(s){let e,t,l,c=s[30].tokens,n=[];for(let a=0;a<c.length;a+=1)n[a]=ve(Ge(s,c,a));const r=a=>L(n[a],1,1,()=>{n[a]=null});return{c(){e=k("p");for(let a=0;a<n.length;a+=1)n[a].c();t=M(),this.h()},l(a){e=U(a,"P",{class:!0});var o=T(e);for(let i=0;i<n.length;i+=1)n[i].l(o);t=O(o),o.forEach(X),this.h()},h(){V(e,"class","svelte-cd82sx")},m(a,o){D(a,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null);m(e,t),l=!0},p(a,o){if(o[0]&4){c=a[30].tokens;let i;for(i=0;i<c.length;i+=1){const G=Ge(a,c,i);n[i]?(n[i].p(G,o),x(n[i],1)):(n[i]=ve(G),n[i].c(),x(n[i],1),n[i].m(e,t))}for(fe(),i=c.length;i<n.length;i+=1)r(i);ue()}},i(a){if(!l){for(let o=0;o<c.length;o+=1)x(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)L(n[o]);l=!1},d(a){a&&X(e),he(n,a)}}}function De(s){let e,t,l,c=s[30].tokens,n=[];for(let a=0;a<c.length;a+=1)n[a]=Fe(Xe(s,c,a));const r=a=>L(n[a],1,1,()=>{n[a]=null});return{c(){e=k("h2");for(let a=0;a<n.length;a+=1)n[a].c();t=M(),this.h()},l(a){e=U(a,"H2",{id:!0,class:!0});var o=T(e);for(let i=0;i<n.length;i+=1)n[i].l(o);t=O(o),o.forEach(X),this.h()},h(){V(e,"id","headline-section-"+s[29]),V(e,"class","svelte-cd82sx")},m(a,o){D(a,e,o);for(let i=0;i<n.length;i+=1)n[i].m(e,null);m(e,t),l=!0},p(a,o){if(o[0]&4){c=a[30].tokens;let i;for(i=0;i<c.length;i+=1){const G=Xe(a,c,i);n[i]?(n[i].p(G,o),x(n[i],1)):(n[i]=Fe(G),n[i].c(),x(n[i],1),n[i].m(e,t))}for(fe(),i=c.length;i<n.length;i+=1)r(i);ue()}},i(a){if(!l){for(let o=0;o<c.length;o+=1)x(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)L(n[o]);l=!1},d(a){a&&X(e),he(n,a)}}}function ve(s){let e,t;return e=new Se({props:{id:s[32].id,value:s[32].value,redacted:s[32].redacted,highlight:s[32].highlight||!1}}),{c(){we(e.$$.fragment)},l(l){Je(e.$$.fragment,l)},m(l,c){Te(e,l,c),t=!0},p(l,c){const n={};c[0]&4&&(n.id=l[32].id),c[0]&4&&(n.value=l[32].value),c[0]&4&&(n.redacted=l[32].redacted),c[0]&4&&(n.highlight=l[32].highlight||!1),e.$set(n)},i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ze(e,l)}}}function Fe(s){let e,t;return e=new Se({props:{id:s[32].id,value:s[32].value,redacted:s[32].redacted,highlight:s[32].highlight||!1}}),{c(){we(e.$$.fragment)},l(l){Je(e.$$.fragment,l)},m(l,c){Te(e,l,c),t=!0},p(l,c){const n={};c[0]&4&&(n.id=l[32].id),c[0]&4&&(n.value=l[32].value),c[0]&4&&(n.redacted=l[32].redacted),c[0]&4&&(n.highlight=l[32].highlight||!1),e.$set(n)},i(l){t||(x(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){ze(e,l)}}}function Re(s){let e,t,l,c;const n=[De,Pe],r=[];function a(o,i){return o[30].headline?0:1}return e=a(s),t=r[e]=n[e](s),{c(){t.c(),l=re()},l(o){t.l(o),l=re()},m(o,i){r[e].m(o,i),D(o,l,i),c=!0},p(o,i){let G=e;e=a(o),e===G?r[e].p(o,i):(fe(),L(r[G],1,1,()=>{r[G]=null}),ue(),t=r[e],t?t.p(o,i):(t=r[e]=n[e](o),t.c()),x(t,1),t.m(l.parentNode,l))},i(o){c||(x(t),c=!0)},o(o){L(t),c=!1},d(o){r[e].d(o),o&&X(l)}}}function Ye(s){let e,t,l=s[27]+"",c,n,r=s[0][s[27]]+"",a,o,i,G,z;return{c(){e=k("span"),t=k("b"),c=j(l),n=j("("),a=j(r),o=j(")"),this.h()},l(Y){e=U(Y,"SPAN",{class:!0});var W=T(e);t=U(W,"B",{});var f=T(t);c=E(f,l),f.forEach(X),n=E(W,"("),a=E(W,r),o=E(W,")"),W.forEach(X),this.h()},h(){V(e,"class",i=oe((s[4]==s[27]?"highlight":"")+(s[0][s[27]]>0?" hit":" miss")+" word")+" svelte-cd82sx")},m(Y,W){D(Y,e,W),m(e,t),m(t,c),m(e,n),m(e,a),m(e,o),G||(z=ce(e,"click",function(){Ie(s[6](s[27]))&&s[6](s[27]).apply(this,arguments)}),G=!0)},p(Y,W){s=Y,W[0]&1&&l!==(l=s[27]+"")&&ae(c,l),W[0]&1&&r!==(r=s[0][s[27]]+"")&&ae(a,r),W[0]&17&&i!==(i=oe((s[4]==s[27]?"highlight":"")+(s[0][s[27]]>0?" hit":" miss")+" word")+" svelte-cd82sx")&&V(e,"class",i)},d(Y){Y&&X(e),G=!1,z()}}}function Qe(s){let e,t=Ye(s);return{c(){t&&t.c(),e=re()},l(l){t&&t.l(l),e=re()},m(l,c){t&&t.m(l,c),D(l,e,c)},p(l,c){t?t.p(l,c):(t=Ye(l),t.c(),t.m(e.parentNode,e))},d(l){t&&t.d(l),l&&X(e)}}}function qe(s){let e,t,l,c,n,r,a,o,i,G,z,Y,W,f,b,N=Object.keys(s[0]).length+"",A,Q,F,y,R,I,C,H,w,P,se,h,p,J,B,g=s[5]&&Ze(),_=s[1]&&_e(s),K=s[2],v=[];for(let u=0;u<K.length;u+=1)v[u]=Re(ge(s,K,u));const Ee=u=>L(v[u],1,1,()=>{v[u]=null});let ee=Object.keys(s[0]).reverse(),S=[];for(let u=0;u<ee.length;u+=1)S[u]=Qe(Ve(s,ee,u));return{c(){e=k("div"),t=k("nav"),l=k("h1"),c=j("Redactle Unlimited"),n=M(),r=k("p"),a=j(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),o=M(),i=k("div"),g&&g.c(),G=M(),_&&_.c(),z=M();for(let u=0;u<v.length;u+=1)v[u].c();Y=M(),W=k("div"),f=k("h3"),b=j("Guesses ("),A=j(N),Q=j(")"),F=M(),y=k("form"),R=k("button"),I=j("\u25B2 Top"),C=M(),H=k("input"),w=M(),P=k("input"),se=M(),h=k("guess-list");for(let u=0;u<S.length;u+=1)S[u].c();this.h()},l(u){e=U(u,"DIV",{id:!0,class:!0});var Z=T(e);t=U(Z,"NAV",{class:!0});var d=T(t);l=U(d,"H1",{class:!0});var q=T(l);c=E(q,"Redactle Unlimited"),q.forEach(X),n=O(d),r=U(d,"P",{class:!0});var de=T(r);a=E(de,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),de.forEach(X),d.forEach(X),o=O(Z),i=U(Z,"DIV",{id:!0,class:!0});var le=T(i);g&&g.l(le),G=O(le),_&&_.l(le),z=O(le);for(let $=0;$<v.length;$+=1)v[$].l(le);le.forEach(X),Y=O(Z),W=U(Z,"DIV",{id:!0,class:!0});var te=T(W);f=U(te,"H3",{class:!0});var ie=T(f);b=E(ie,"Guesses ("),A=E(ie,N),Q=E(ie,")"),ie.forEach(X),F=O(te),y=U(te,"FORM",{id:!0,class:!0});var ne=T(y);R=U(ne,"BUTTON",{id:!0,type:!0,class:!0});var be=T(R);I=E(be,"\u25B2 Top"),be.forEach(X),C=O(ne),H=U(ne,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,class:!0}),w=O(ne),P=U(ne,"INPUT",{id:!0,type:!0,class:!0}),ne.forEach(X),se=O(te),h=U(te,"GUESS-LIST",{class:!0});var me=T(h);for(let $=0;$<S.length;$+=1)S[$].l(me);me.forEach(X),te.forEach(X),Z.forEach(X),this.h()},h(){V(l,"class","svelte-cd82sx"),V(r,"class","info svelte-cd82sx"),V(t,"class","svelte-cd82sx"),V(i,"id","article"),V(i,"class","svelte-cd82sx"),V(f,"class","svelte-cd82sx"),V(R,"id","btn-top"),V(R,"type","button"),V(R,"class","svelte-cd82sx"),V(H,"id","input-guess"),V(H,"placeholder","guess a word..."),V(H,"autocomplete","off"),V(H,"class","svelte-cd82sx"),V(P,"id","submit"),V(P,"type","submit"),P.value="Guess",V(P,"class","svelte-cd82sx"),V(y,"id","guess-form"),V(y,"class","svelte-cd82sx"),xe(h,"class","svelte-cd82sx"),V(W,"id","guesses"),V(W,"class","svelte-cd82sx"),V(e,"id","main"),V(e,"class","svelte-cd82sx")},m(u,Z){D(u,e,Z),m(e,t),m(t,l),m(l,c),m(t,n),m(t,r),m(r,a),m(e,o),m(e,i),g&&g.m(i,null),m(i,G),_&&_.m(i,null),m(i,z);for(let d=0;d<v.length;d+=1)v[d].m(i,null);m(e,Y),m(e,W),m(W,f),m(f,b),m(f,A),m(f,Q),m(W,F),m(W,y),m(y,R),m(R,I),m(y,C),m(y,H),We(H,s[3]),m(y,w),m(y,P),m(W,se),m(W,h);for(let d=0;d<S.length;d+=1)S[d].m(h,null);p=!0,J||(B=[ce(R,"click",s[8]),ce(H,"input",s[9]),ce(y,"submit",Ae(s[7]))],J=!0)},p(u,Z){if(u[5]?g||(g=Ze(),g.c(),g.m(i,G)):g&&(g.d(1),g=null),u[1]?_?_.p(u,Z):(_=_e(u),_.c(),_.m(i,z)):_&&(_.d(1),_=null),Z[0]&4){K=u[2];let d;for(d=0;d<K.length;d+=1){const q=ge(u,K,d);v[d]?(v[d].p(q,Z),x(v[d],1)):(v[d]=Re(q),v[d].c(),x(v[d],1),v[d].m(i,null))}for(fe(),d=K.length;d<v.length;d+=1)Ee(d);ue()}if((!p||Z[0]&1)&&N!==(N=Object.keys(u[0]).length+"")&&ae(A,N),Z[0]&8&&H.value!==u[3]&&We(H,u[3]),Z[0]&81){ee=Object.keys(u[0]).reverse();let d;for(d=0;d<ee.length;d+=1){const q=Ve(u,ee,d);S[d]?S[d].p(q,Z):(S[d]=Qe(q),S[d].c(),S[d].m(h,null))}for(;d<S.length;d+=1)S[d].d(1);S.length=ee.length}},i(u){if(!p){for(let Z=0;Z<K.length;Z+=1)x(v[Z]);p=!0}},o(u){v=v.filter(Boolean);for(let Z=0;Z<v.length;Z+=1)L(v[Z]);p=!1},d(u){u&&X(e),g&&g.d(),_&&_.d(),he(v,u),he(S,u),J=!1,Be(B)}}}let Ke=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const je="solved_game_history";function $e(){return JSON.parse(window.localStorage.getItem(je)||"{}")}function el(){let s=document.getElementById("headline-section-0");s&&s.scrollIntoView()}function ye(s,e){return`${ll(s).replaceAll("=","a")}${e}`}function ll(s){let e=encodeURIComponent(s).replace(/%([a-f0-9]{2})/gi,(t,l)=>String.fromCharCode(parseInt(l,16)));return btoa(e)}function tl(s){let e=atob(s).replace(/[\x80-\uffff]/g,t=>`%${t.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function nl(s,e,t){let l=[],c={},n=!1;const r=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let a={};r.forEach(h=>a[h]=1);const o=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let i=[],G="",z="",Y=0,W={},f=!0,b="";N();function N(){const h=Math.floor(Math.random()*o.length);b=tl(o[h]),fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${b}`).then(p=>p.json()).then(p=>{let J=0;p.lead.displaytitle;let B=p.lead.sections[0].text,g=A(B);J+=g.length,l.push({text:g,headline:p.lead.displaytitle});let _=0;for(;J<1e5&&_<p.remaining.sections.length;)B=p.remaining.sections[_].text,g=A(B),J+=g.length,l.push({text:g,headline:p.remaining.sections[_].line}),_++;Q()})}function A(h){let p=h.replace(/(<style.*>.*<\/style>|<table.*>.*<\/table>)/ig,"");return p=p.replace(/(<\/li>)/," </li>"),p=Le(p),p=p.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),p=p.replace(/\[\d+\]/ig,""),p}function Q(){console.log("rendering..."),t(2,i=[]),W={};for(const h in l)R(l[h].headline,!0),h==0&&t(1,n=F()),R(l[h].text,!1);t(5,f=!1)}function F(){let h=!0;for(const p in i[0].tokens)i[0].tokens[p].redacted&&(h=!1);return n&&y(),h}function y(){let h=$e(),p=new Date,J={title:b,guesses:Object.keys(c).length,time:p.getTime()};h[b]=J,window.localStorage.setItem(je,JSON.stringify(h)),console.log(`solved: ${n}`)}function R(h,p){let J=[...h.matchAll(Ke)],B=I(J);i.push({headline:p,tokens:B})}function I(h){let p=[];for(const J in h){let B=h[J][1];if(B){let g=B.toLowerCase();W[g]=g in W?W[g]+1:1;let _={value:B,wordLower:g,id:ye(g,W[g]-1),redacted:!n&&!a.hasOwnProperty(g)&&!c.hasOwnProperty(g),highlight:g==z};p.push(_)}h[J][2]&&p.push({value:h[J][2]})}return p}function C(h){Y=z==h?Y+1:0,h in W&&W[h]>0&&(Y=Y%W[h]),t(4,z=h);const p=ye(z,Y);let J=document.getElementById(p);J&&J.scrollIntoView(),Q()}function H(){let h=G.toLowerCase();if(!w(h)){console.log("invalid guess"),t(3,G="");return}h=="togglecheats"&&t(1,n=!n),t(0,c[h]=W[h]||0,c),C(h),t(3,G=""),Q()}function w(h){return!(h in a||/^\w+$/.test(h)==!1)}const P=()=>el();function se(){G=this.value,t(3,G)}return[c,n,i,G,z,f,C,H,P,se]}class al extends ke{constructor(e){super(),Ue(this,e,nl,qe,Ne,{},null,[-1,-1])}}export{al as default};