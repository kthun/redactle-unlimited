import{S as Je,i as Te,s as ze,l as ae,g as I,n as ve,d as G,e as R,t as S,c as k,a as N,h as H,b as g,K as ie,J as m,j as le,p as P,q as he,r as A,L as re,k as O,m as x,M as Me,N as We,O as Oe,P as fe,Q as xe,o as de,R as Ce,x as Se,y as He,z as Ee,C as je}from"../chunks/index-87fdb8f6.js";function Pe(n){let e,s=(n[3]?"\u2588".repeat(n[1].length):n[1])+"",t,a;return{c(){e=R("span"),t=S(s),this.h()},l(l){e=k(l,"SPAN",{id:!0,class:!0});var c=N(e);t=H(c,s),c.forEach(G),this.h()},h(){g(e,"id",n[0]),g(e,"class",a=ie((n[2]?"highlight":"")+(n[3]?" redacted":""))+" svelte-1wn3cpb")},m(l,c){I(l,e,c),m(e,t)},p(l,c){c&10&&s!==(s=(l[3]?"\u2588".repeat(l[1].length):l[1])+"")&&le(t,s),c&1&&g(e,"id",l[0]),c&12&&a!==(a=ie((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-1wn3cpb")&&g(e,"class",a)},d(l){l&&G(e)}}}function Le(n){let e,s=(n[3]?"\u2588".repeat(n[1].length-`${n[1].length}`.length):n[1])+"",t,a,l=n[3]&&Ve(n);return{c(){e=R("span"),l&&l.c(),t=S(s),this.h()},l(c){e=k(c,"SPAN",{id:!0,class:!0});var i=N(e);l&&l.l(i),t=H(i,s),i.forEach(G),this.h()},h(){g(e,"id",n[0]),g(e,"class",a=ie((n[2]?"highlight":"")+(n[3]?" redacted":""))+" svelte-1wn3cpb")},m(c,i){I(c,e,i),l&&l.m(e,null),m(e,t)},p(c,i){c[3]?l?l.p(c,i):(l=Ve(c),l.c(),l.m(e,t)):l&&(l.d(1),l=null),i&10&&s!==(s=(c[3]?"\u2588".repeat(c[1].length-`${c[1].length}`.length):c[1])+"")&&le(t,s),i&1&&g(e,"id",c[0]),i&12&&a!==(a=ie((c[2]?"highlight":"")+(c[3]?" redacted":""))+" svelte-1wn3cpb")&&g(e,"class",a)},d(c){c&&G(e),l&&l.d()}}}function Ve(n){let e,s=n[1].length+"",t;return{c(){e=R("span"),t=S(s),this.h()},l(a){e=k(a,"SPAN",{class:!0});var l=N(e);t=H(l,s),l.forEach(G),this.h()},h(){g(e,"class","char_count svelte-1wn3cpb")},m(a,l){I(a,e,l),m(e,t)},p(a,l){l&2&&s!==(s=a[1].length+"")&&le(t,s)},d(a){a&&G(e)}}}function De(n){let e;function s(l,c){return l[1].length>2?Le:Pe}let t=s(n),a=t(n);return{c(){a.c(),e=ae()},l(l){a.l(l),e=ae()},m(l,c){a.m(l,c),I(l,e,c)},p(l,[c]){t===(t=s(l))&&a?a.p(l,c):(a.d(1),a=t(l),a&&(a.c(),a.m(e.parentNode,e)))},i:ve,o:ve,d(l){a.d(l),l&&G(e)}}}function qe(n,e,s){let{id:t}=e,{value:a=""}=e,{highlight:l=!1}=e,{redacted:c=!1}=e;return n.$$set=i=>{"id"in i&&s(0,t=i.id),"value"in i&&s(1,a=i.value),"highlight"in i&&s(2,l=i.highlight),"redacted"in i&&s(3,c=i.redacted)},[t,a,l,c]}class Ae extends Je{constructor(e){super(),Te(this,e,qe,De,ze,{id:0,value:1,highlight:2,redacted:3})}}var Ke=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Be={exports:{}};(function(n){(function(e){if(typeof s!="function"){var s=function(f){return f};s.nonNative=!0}const t=s("plaintext"),a=s("html"),l=s("comment"),c=/<(\w*)>/g,i=/<\/?([^\s\/>]+)/;function o(f,v,y){f=f||"",v=v||[],y=y||"";let M=X(v,y);return T(f,M)}function u(f,v){f=f||[],v=v||"";let y=X(f,v);return function(J){return T(J||"",y)}}o.init_streaming_mode=u;function X(f,v){return f=Y(f),{allowable_tags:f,tag_replacement:v,state:t,tag_buffer:"",depth:0,in_quote_char:""}}function T(f,v){if(typeof f!="string")throw new TypeError("'html' parameter must be a string");let y=v.allowable_tags,M=v.tag_replacement,J=v.state,Z=v.tag_buffer,w=v.depth,Q=v.in_quote_char,B="";for(let L=0,E=f.length;L<E;L++){let U=f[L];if(J===t)switch(U){case"<":J=a,Z+=U;break;default:B+=U;break}else if(J===a)switch(U){case"<":if(Q)break;w++;break;case">":if(Q)break;if(w){w--;break}Q="",J=t,Z+=">",y.has(V(Z))?B+=Z:B+=M,Z="";break;case'"':case"'":U===Q?Q="":Q=Q||U,Z+=U;break;case"-":Z==="<!-"&&(J=l),Z+=U;break;case" ":case`
`:if(Z==="<"){J=t,B+="< ",Z="";break}Z+=U;break;default:Z+=U;break}else if(J===l)switch(U){case">":Z.slice(-2)=="--"&&(J=t),Z="";break;default:Z+=U;break}}return v.state=J,v.tag_buffer=Z,v.depth=w,v.in_quote_char=Q,B}function Y(f){let v=new Set;if(typeof f=="string"){let y;for(;y=c.exec(f);)v.add(y[1])}else!s.nonNative&&typeof f[s.iterator]=="function"?v=new Set(f):typeof f.forEach=="function"&&f.forEach(v.add,v);return v}function V(f){let v=i.exec(f);return v?v[1].toLowerCase():null}n.exports?n.exports=o:e.striptags=o})(Ke)})(Be);var pe=Be.exports;function Ge(n,e,s){const t=n.slice();return t[28]=e[s],t[30]=s,t}function Xe(n,e,s){const t=n.slice();return t[31]=e[s],t[30]=s,t}function _e(n,e,s){const t=n.slice();return t[33]=e[s],t}function Ze(n,e,s){const t=n.slice();return t[33]=e[s],t}function Fe(n){let e,s;return{c(){e=R("p"),s=S("loading..."),this.h()},l(t){e=k(t,"P",{class:!0});var a=N(e);s=H(a,"loading..."),a.forEach(G),this.h()},h(){g(e,"class","svelte-upufc5")},m(t,a){I(t,e,a),m(e,s)},d(t){t&&G(e)}}}function ye(n){let e,s,t=Object.keys(n[0]).length+"",a,l;return{c(){e=R("p"),s=S("Solved in "),a=S(t),l=S(" guesses!"),this.h()},l(c){e=k(c,"P",{class:!0});var i=N(e);s=H(i,"Solved in "),a=H(i,t),l=H(i," guesses!"),i.forEach(G),this.h()},h(){g(e,"class","svelte-upufc5")},m(c,i){I(c,e,i),m(e,s),m(e,a),m(e,l)},p(c,i){i[0]&1&&t!==(t=Object.keys(c[0]).length+"")&&le(a,t)},d(c){c&&G(e)}}}function $e(n){let e,s,t,a=n[31].tokens,l=[];for(let i=0;i<a.length;i+=1)l[i]=Re(_e(n,a,i));const c=i=>P(l[i],1,1,()=>{l[i]=null});return{c(){e=R("p");for(let i=0;i<l.length;i+=1)l[i].c();s=O(),this.h()},l(i){e=k(i,"P",{class:!0});var o=N(e);for(let u=0;u<l.length;u+=1)l[u].l(o);s=x(o),o.forEach(G),this.h()},h(){g(e,"class","svelte-upufc5")},m(i,o){I(i,e,o);for(let u=0;u<l.length;u+=1)l[u].m(e,null);m(e,s),t=!0},p(i,o){if(o[0]&4){a=i[31].tokens;let u;for(u=0;u<a.length;u+=1){const X=_e(i,a,u);l[u]?(l[u].p(X,o),A(l[u],1)):(l[u]=Re(X),l[u].c(),A(l[u],1),l[u].m(e,s))}for(de(),u=a.length;u<l.length;u+=1)c(u);he()}},i(i){if(!t){for(let o=0;o<a.length;o+=1)A(l[o]);t=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);t=!1},d(i){i&&G(e),fe(l,i)}}}function el(n){let e,s,t,a=n[31].tokens,l=[];for(let i=0;i<a.length;i+=1)l[i]=ke(Ze(n,a,i));const c=i=>P(l[i],1,1,()=>{l[i]=null});return{c(){e=R("h2");for(let i=0;i<l.length;i+=1)l[i].c();s=O(),this.h()},l(i){e=k(i,"H2",{id:!0,class:!0});var o=N(e);for(let u=0;u<l.length;u+=1)l[u].l(o);s=x(o),o.forEach(G),this.h()},h(){g(e,"id","headline-section-"+n[30]),g(e,"class","svelte-upufc5")},m(i,o){I(i,e,o);for(let u=0;u<l.length;u+=1)l[u].m(e,null);m(e,s),t=!0},p(i,o){if(o[0]&4){a=i[31].tokens;let u;for(u=0;u<a.length;u+=1){const X=Ze(i,a,u);l[u]?(l[u].p(X,o),A(l[u],1)):(l[u]=ke(X),l[u].c(),A(l[u],1),l[u].m(e,s))}for(de(),u=a.length;u<l.length;u+=1)c(u);he()}},i(i){if(!t){for(let o=0;o<a.length;o+=1)A(l[o]);t=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);t=!1},d(i){i&&G(e),fe(l,i)}}}function Re(n){let e,s;return e=new Ae({props:{id:n[33].id,value:n[33].value,redacted:n[33].redacted,highlight:n[33].highlight||!1}}),{c(){Se(e.$$.fragment)},l(t){He(e.$$.fragment,t)},m(t,a){Ee(e,t,a),s=!0},p(t,a){const l={};a[0]&4&&(l.id=t[33].id),a[0]&4&&(l.value=t[33].value),a[0]&4&&(l.redacted=t[33].redacted),a[0]&4&&(l.highlight=t[33].highlight||!1),e.$set(l)},i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){je(e,t)}}}function ke(n){let e,s;return e=new Ae({props:{id:n[33].id,value:n[33].value,redacted:n[33].redacted,highlight:n[33].highlight||!1}}),{c(){Se(e.$$.fragment)},l(t){He(e.$$.fragment,t)},m(t,a){Ee(e,t,a),s=!0},p(t,a){const l={};a[0]&4&&(l.id=t[33].id),a[0]&4&&(l.value=t[33].value),a[0]&4&&(l.redacted=t[33].redacted),a[0]&4&&(l.highlight=t[33].highlight||!1),e.$set(l)},i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){je(e,t)}}}function Ye(n){let e,s,t,a;const l=[el,$e],c=[];function i(o,u){return o[31].headline?0:1}return e=i(n),s=c[e]=l[e](n),{c(){s.c(),t=ae()},l(o){s.l(o),t=ae()},m(o,u){c[e].m(o,u),I(o,t,u),a=!0},p(o,u){let X=e;e=i(o),e===X?c[e].p(o,u):(de(),P(c[X],1,1,()=>{c[X]=null}),he(),s=c[e],s?s.p(o,u):(s=c[e]=l[e](o),s.c()),A(s,1),s.m(t.parentNode,t))},i(o){a||(A(s),a=!0)},o(o){P(s),a=!1},d(o){c[e].d(o),o&&G(t)}}}function Qe(n){let e,s,t=n[28]+"",a,l,c=n[0][n[28]]+"",i,o,u,X,T;return{c(){e=R("span"),s=R("b"),a=S(t),l=S("("),i=S(c),o=S(")"),this.h()},l(Y){e=k(Y,"SPAN",{class:!0});var V=N(e);s=k(V,"B",{});var f=N(s);a=H(f,t),f.forEach(G),l=H(V,"("),i=H(V,c),o=H(V,")"),V.forEach(G),this.h()},h(){g(e,"class",u=ie((n[4]==n[28]?"highlight":"")+(n[0][n[28]]>0?" hit":" miss")+" word")+" svelte-upufc5")},m(Y,V){I(Y,e,V),m(e,s),m(s,a),m(e,l),m(e,i),m(e,o),X||(T=re(e,"click",function(){Ce(n[6](n[28],!0))&&n[6](n[28],!0).apply(this,arguments)}),X=!0)},p(Y,V){n=Y,V[0]&1&&t!==(t=n[28]+"")&&le(a,t),V[0]&1&&c!==(c=n[0][n[28]]+"")&&le(i,c),V[0]&17&&u!==(u=ie((n[4]==n[28]?"highlight":"")+(n[0][n[28]]>0?" hit":" miss")+" word")+" svelte-upufc5")&&g(e,"class",u)},d(Y){Y&&G(e),X=!1,T()}}}function we(n){let e,s=Qe(n);return{c(){s&&s.c(),e=ae()},l(t){s&&s.l(t),e=ae()},m(t,a){s&&s.m(t,a),I(t,e,a)},p(t,a){s?s.p(t,a):(s=Qe(t),s.c(),s.m(e.parentNode,e))},d(t){s&&s.d(t),t&&G(e)}}}function ll(n){let e,s,t,a,l,c,i,o,u,X,T,Y,V,f,v,y=Object.keys(n[0]).length+"",M,J,Z,w,Q,B,L,E,U,C,ue,D,$,ce,r,b=n[5]&&Fe(),W=n[1]&&ye(n),_=n[2],h=[];for(let d=0;d<_.length;d+=1)h[d]=Ye(Xe(n,_,d));const j=d=>P(h[d],1,1,()=>{h[d]=null});let q=Object.keys(n[0]).reverse(),z=[];for(let d=0;d<q.length;d+=1)z[d]=we(Ge(n,q,d));return{c(){e=R("div"),s=R("nav"),t=R("h1"),a=S("Redactle Unlimited"),l=O(),c=R("p"),i=S(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),o=O(),u=R("div"),b&&b.c(),X=O(),W&&W.c(),T=O();for(let d=0;d<h.length;d+=1)h[d].c();Y=O(),V=R("div"),f=R("h3"),v=S("Guesses ("),M=S(y),J=S(")"),Z=O(),w=R("form"),Q=R("button"),B=S("\u25B2 Top"),L=O(),E=R("input"),U=O(),C=R("input"),ue=O(),D=R("guess-list");for(let d=0;d<z.length;d+=1)z[d].c();this.h()},l(d){e=k(d,"DIV",{id:!0,class:!0});var F=N(e);s=k(F,"NAV",{class:!0});var p=N(s);t=k(p,"H1",{class:!0});var K=N(t);a=H(K,"Redactle Unlimited"),K.forEach(G),l=x(p),c=k(p,"P",{class:!0});var be=N(c);i=H(be,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),be.forEach(G),p.forEach(G),o=x(F),u=k(F,"DIV",{id:!0,class:!0});var te=N(u);b&&b.l(te),X=x(te),W&&W.l(te),T=x(te);for(let ee=0;ee<h.length;ee+=1)h[ee].l(te);te.forEach(G),Y=x(F),V=k(F,"DIV",{id:!0,class:!0});var se=N(V);f=k(se,"H3",{class:!0});var oe=N(f);v=H(oe,"Guesses ("),M=H(oe,y),J=H(oe,")"),oe.forEach(G),Z=x(se),w=k(se,"FORM",{id:!0,class:!0});var ne=N(w);Q=k(ne,"BUTTON",{id:!0,type:!0,class:!0});var me=N(Q);B=H(me,"\u25B2 Top"),me.forEach(G),L=x(ne),E=k(ne,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,class:!0}),U=x(ne),C=k(ne,"INPUT",{id:!0,type:!0,class:!0}),ne.forEach(G),ue=x(se),D=k(se,"GUESS-LIST",{class:!0});var ge=N(D);for(let ee=0;ee<z.length;ee+=1)z[ee].l(ge);ge.forEach(G),se.forEach(G),F.forEach(G),this.h()},h(){g(t,"class","svelte-upufc5"),g(c,"class","info svelte-upufc5"),g(s,"class","svelte-upufc5"),g(u,"id","article"),g(u,"class","svelte-upufc5"),g(f,"class","svelte-upufc5"),g(Q,"id","btn-top"),g(Q,"type","button"),g(Q,"class","svelte-upufc5"),g(E,"id","input-guess"),g(E,"placeholder","guess a word..."),g(E,"autocomplete","off"),g(E,"class","svelte-upufc5"),g(C,"id","submit"),g(C,"type","submit"),C.value="Guess",g(C,"class","svelte-upufc5"),g(w,"id","guess-form"),g(w,"class","svelte-upufc5"),Me(D,"class","svelte-upufc5"),g(V,"id","guesses"),g(V,"class","svelte-upufc5"),g(e,"id","main"),g(e,"class","svelte-upufc5")},m(d,F){I(d,e,F),m(e,s),m(s,t),m(t,a),m(s,l),m(s,c),m(c,i),m(e,o),m(e,u),b&&b.m(u,null),m(u,X),W&&W.m(u,null),m(u,T);for(let p=0;p<h.length;p+=1)h[p].m(u,null);m(e,Y),m(e,V),m(V,f),m(f,v),m(f,M),m(f,J),m(V,Z),m(V,w),m(w,Q),m(Q,B),m(w,L),m(w,E),We(E,n[3]),m(w,U),m(w,C),m(V,ue),m(V,D);for(let p=0;p<z.length;p+=1)z[p].m(D,null);$=!0,ce||(r=[re(Q,"click",n[8]),re(E,"input",n[9]),re(w,"submit",Oe(n[7]))],ce=!0)},p(d,F){if(d[5]?b||(b=Fe(),b.c(),b.m(u,X)):b&&(b.d(1),b=null),d[1]?W?W.p(d,F):(W=ye(d),W.c(),W.m(u,T)):W&&(W.d(1),W=null),F[0]&4){_=d[2];let p;for(p=0;p<_.length;p+=1){const K=Xe(d,_,p);h[p]?(h[p].p(K,F),A(h[p],1)):(h[p]=Ye(K),h[p].c(),A(h[p],1),h[p].m(u,null))}for(de(),p=_.length;p<h.length;p+=1)j(p);he()}if((!$||F[0]&1)&&y!==(y=Object.keys(d[0]).length+"")&&le(M,y),F[0]&8&&E.value!==d[3]&&We(E,d[3]),F[0]&81){q=Object.keys(d[0]).reverse();let p;for(p=0;p<q.length;p+=1){const K=Ge(d,q,p);z[p]?z[p].p(K,F):(z[p]=we(K),z[p].c(),z[p].m(D,null))}for(;p<z.length;p+=1)z[p].d(1);z.length=q.length}},i(d){if(!$){for(let F=0;F<_.length;F+=1)A(h[F]);$=!0}},o(d){h=h.filter(Boolean);for(let F=0;F<h.length;F+=1)P(h[F]);$=!1},d(d){d&&G(e),b&&b.d(),W&&W.d(),fe(h,d),fe(z,d),ce=!1,xe(r)}}}let tl=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const Ie="solved_game_history";function sl(){return JSON.parse(window.localStorage.getItem(Ie)||"{}")}function nl(){let n=document.getElementById("headline-section-0");n&&n.scrollIntoView()}function Ue(n,e){return`${al(n).replaceAll("=","a")}${e}`}function al(n){let e=encodeURIComponent(n).replace(/%([a-f0-9]{2})/gi,(s,t)=>String.fromCharCode(parseInt(t,16)));return btoa(e)}function il(n){let e=atob(n).replace(/[\x80-\uffff]/g,s=>`%${s.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ne(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ul(n,e,s){let t=[],a={},l=!1;const c=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let i={};c.forEach(r=>i[r]=1);const o=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let u=[],X={},T="",Y="",V=0,f={},v=!0,y="";M();function M(){const r=Math.floor(Math.random()*o.length);y=il(o[r]),fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${y}`).then(b=>b.json()).then(b=>{let W=0,_=b.lead.sections[0].text,h=J(_);W+=h.length,t.push({text:h,headline:pe(b.lead.displaytitle)});let j=0;for(;W<1e5&&j<b.remaining.sections.length;)_=b.remaining.sections[j].text,h=J(_),W+=h.length,t.push({text:h,headline:pe(b.remaining.sections[j].line)}),j++;Z()})}function J(r){if(typeof window!="undefined"){console.log("removing tags");var b=new window.DOMParser,W=b.parseFromString(r,"text/html");["style","table"].forEach(j=>{let q=W.getElementsByTagName(j);Array.prototype.slice.call(q,0).forEach(d=>d.remove())}),r=W.body.innerHTML}let _=pe(r);return _=_.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),_=_.replace(/\[\d+\]/ig,""),_}function Z(){console.log("rendering..."),s(2,u=[]),f={};for(const r in t)B(t[r].headline,!0),B(t[r].text,!1);s(5,v=!1)}function w(){let r=u[0].tokens.find(b=>b.redacted);s(1,l=r===void 0),l&&(Q(),Z())}function Q(){let r=sl(),b=new Date,W={title:y,guesses:Object.keys(a).length,time:b.getTime()};r[y]=W,window.localStorage.setItem(Ie,JSON.stringify(r)),console.log(`solved: ${l}`)}function B(r,b){let W=[...r.matchAll(tl)],_=L(W);u.push({headline:b,tokens:_})}function L(r){let b=[];for(const W in r){let _=r[W][1];if(_){let h=Ne(_);f[h]=h in f?f[h]+1:1;let j={value:_,wordNormal:h,id:Ue(h,f[h]-1),redacted:U(h),highlight:h==Y};h in X||(X[h]=[]),X[h].push(j),b.push(j)}r[W][2]&&b.push({value:r[W][2]})}return b}function E(r){!X.hasOwnProperty(r)||(X[r].forEach(b=>{b.redacted=U(r),b.highlight=r==Y}),s(2,u=[...u]))}function U(r){return!l&&!i.hasOwnProperty(r)&&!a.hasOwnProperty(r)}function C(r,b){V=Y==r?V+1:0,r in f&&f[r]>0&&(V=V%f[r]),s(4,Y=r),u.forEach(h=>{h.tokens.filter(j=>j.highlight==!0).forEach(j=>{j.highlight=!1})});const W=Ue(Y,V);let _=document.getElementById(W);_&&b&&_.scrollIntoView(),E(r)}function ue(){let r=Ne(T);if(!D(r)){console.log("invalid guess"),s(3,T="");return}s(0,a[r]=f[r]||0,a),C(r,!1),s(3,T=""),w(),r=="togglecheats"&&(s(1,l=!l),Z())}function D(r){return!(r in i||/^\w+$/.test(r)==!1)}const $=()=>nl();function ce(){T=this.value,s(3,T)}return[a,l,u,T,Y,v,C,ue,$,ce]}class ol extends Je{constructor(e){super(),Te(this,e,ul,ll,ze,{},null,[-1,-1])}}export{ol as default};
