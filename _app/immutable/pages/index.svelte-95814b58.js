import{S as Je,i as Te,s as ze,e as Q,t as S,c as k,a as J,h as H,d as G,b as v,g as P,J as b,j as ne,K as oe,n as ve,l as re,p as C,q as he,r as A,L as ce,k as I,m as M,M as Ie,N as We,O as Me,P as fe,Q as Oe,o as de,R as Ce,x as Se,y as He,z as Ee,C as je}from"../chunks/index-87fdb8f6.js";function Ve(n){let e,l=n[1].length+"",t;return{c(){e=Q("span"),t=S(l),this.h()},l(i){e=k(i,"SPAN",{class:!0});var s=J(e);t=H(s,l),s.forEach(G),this.h()},h(){v(e,"class","char_count svelte-170rc47")},m(i,s){P(i,e,s),b(e,t)},p(i,s){s&2&&l!==(l=i[1].length+"")&&ne(t,l)},d(i){i&&G(e)}}}function Pe(n){let e,l=(n[3]?"\u2588".repeat(n[1].length-`${n[1].length}`.length):n[1])+"",t,i,s=n[3]&&Ve(n);return{c(){e=Q("span"),s&&s.c(),t=S(l),this.h()},l(o){e=k(o,"SPAN",{id:!0,class:!0});var a=J(e);s&&s.l(a),t=H(a,l),a.forEach(G),this.h()},h(){v(e,"id",n[0]),v(e,"class",i=oe((n[2]?"highlight":"")+(n[3]?" redacted":""))+" svelte-170rc47")},m(o,a){P(o,e,a),s&&s.m(e,null),b(e,t)},p(o,[a]){o[3]?s?s.p(o,a):(s=Ve(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),a&10&&l!==(l=(o[3]?"\u2588".repeat(o[1].length-`${o[1].length}`.length):o[1])+"")&&ne(t,l),a&1&&v(e,"id",o[0]),a&12&&i!==(i=oe((o[2]?"highlight":"")+(o[3]?" redacted":""))+" svelte-170rc47")&&v(e,"class",i)},i:ve,o:ve,d(o){o&&G(e),s&&s.d()}}}function Le(n,e,l){let{id:t}=e,{value:i=""}=e,{highlight:s=!1}=e,{redacted:o=!1}=e;return n.$$set=a=>{"id"in a&&l(0,t=a.id),"value"in a&&l(1,i=a.value),"highlight"in a&&l(2,s=a.highlight),"redacted"in a&&l(3,o=a.redacted)},[t,i,s,o]}class Ae extends Je{constructor(e){super(),Te(this,e,Le,Pe,ze,{id:0,value:1,highlight:2,redacted:3})}}var De=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Be={exports:{}};(function(n){(function(e){if(typeof l!="function"){var l=function(f){return f};l.nonNative=!0}const t=l("plaintext"),i=l("html"),s=l("comment"),o=/<(\w*)>/g,a=/<\/?([^\s\/>]+)/;function c(f,g,y){f=f||"",g=g||[],y=y||"";let x=X(g,y);return T(f,x)}function u(f,g){f=f||[],g=g||"";let y=X(f,g);return function(N){return T(N||"",y)}}c.init_streaming_mode=u;function X(f,g){return f=R(f),{allowable_tags:f,tag_replacement:g,state:t,tag_buffer:"",depth:0,in_quote_char:""}}function T(f,g){if(typeof f!="string")throw new TypeError("'html' parameter must be a string");let y=g.allowable_tags,x=g.tag_replacement,N=g.state,_=g.tag_buffer,w=g.depth,Y=g.in_quote_char,B="";for(let L=0,E=f.length;L<E;L++){let U=f[L];if(N===t)switch(U){case"<":N=i,_+=U;break;default:B+=U;break}else if(N===i)switch(U){case"<":if(Y)break;w++;break;case">":if(Y)break;if(w){w--;break}Y="",N=t,_+=">",y.has(V(_))?B+=_:B+=x,_="";break;case'"':case"'":U===Y?Y="":Y=Y||U,_+=U;break;case"-":_==="<!-"&&(N=s),_+=U;break;case" ":case`
`:if(_==="<"){N=t,B+="< ",_="";break}_+=U;break;default:_+=U;break}else if(N===s)switch(U){case">":_.slice(-2)=="--"&&(N=t),_="";break;default:_+=U;break}}return g.state=N,g.tag_buffer=_,g.depth=w,g.in_quote_char=Y,B}function R(f){let g=new Set;if(typeof f=="string"){let y;for(;y=o.exec(f);)g.add(y[1])}else!l.nonNative&&typeof f[l.iterator]=="function"?g=new Set(f):typeof f.forEach=="function"&&f.forEach(g.add,g);return g}function V(f){let g=a.exec(f);return g?g[1].toLowerCase():null}n.exports?n.exports=c:e.striptags=c})(De)})(Be);var pe=Be.exports;function Ge(n,e,l){const t=n.slice();return t[28]=e[l],t[30]=l,t}function Xe(n,e,l){const t=n.slice();return t[31]=e[l],t[30]=l,t}function Ze(n,e,l){const t=n.slice();return t[33]=e[l],t}function _e(n,e,l){const t=n.slice();return t[33]=e[l],t}function Fe(n){let e,l;return{c(){e=Q("p"),l=S("loading..."),this.h()},l(t){e=k(t,"P",{class:!0});var i=J(e);l=H(i,"loading..."),i.forEach(G),this.h()},h(){v(e,"class","svelte-upufc5")},m(t,i){P(t,e,i),b(e,l)},d(t){t&&G(e)}}}function ye(n){let e,l,t=Object.keys(n[0]).length+"",i,s;return{c(){e=Q("p"),l=S("Solved in "),i=S(t),s=S(" guesses!"),this.h()},l(o){e=k(o,"P",{class:!0});var a=J(e);l=H(a,"Solved in "),i=H(a,t),s=H(a," guesses!"),a.forEach(G),this.h()},h(){v(e,"class","svelte-upufc5")},m(o,a){P(o,e,a),b(e,l),b(e,i),b(e,s)},p(o,a){a[0]&1&&t!==(t=Object.keys(o[0]).length+"")&&ne(i,t)},d(o){o&&G(e)}}}function qe(n){let e,l,t,i=n[31].tokens,s=[];for(let a=0;a<i.length;a+=1)s[a]=Re(Ze(n,i,a));const o=a=>C(s[a],1,1,()=>{s[a]=null});return{c(){e=Q("p");for(let a=0;a<s.length;a+=1)s[a].c();l=I(),this.h()},l(a){e=k(a,"P",{class:!0});var c=J(e);for(let u=0;u<s.length;u+=1)s[u].l(c);l=M(c),c.forEach(G),this.h()},h(){v(e,"class","svelte-upufc5")},m(a,c){P(a,e,c);for(let u=0;u<s.length;u+=1)s[u].m(e,null);b(e,l),t=!0},p(a,c){if(c[0]&4){i=a[31].tokens;let u;for(u=0;u<i.length;u+=1){const X=Ze(a,i,u);s[u]?(s[u].p(X,c),A(s[u],1)):(s[u]=Re(X),s[u].c(),A(s[u],1),s[u].m(e,l))}for(de(),u=i.length;u<s.length;u+=1)o(u);he()}},i(a){if(!t){for(let c=0;c<i.length;c+=1)A(s[c]);t=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)C(s[c]);t=!1},d(a){a&&G(e),fe(s,a)}}}function Ke(n){let e,l,t,i=n[31].tokens,s=[];for(let a=0;a<i.length;a+=1)s[a]=Ye(_e(n,i,a));const o=a=>C(s[a],1,1,()=>{s[a]=null});return{c(){e=Q("h2");for(let a=0;a<s.length;a+=1)s[a].c();l=I(),this.h()},l(a){e=k(a,"H2",{id:!0,class:!0});var c=J(e);for(let u=0;u<s.length;u+=1)s[u].l(c);l=M(c),c.forEach(G),this.h()},h(){v(e,"id","headline-section-"+n[30]),v(e,"class","svelte-upufc5")},m(a,c){P(a,e,c);for(let u=0;u<s.length;u+=1)s[u].m(e,null);b(e,l),t=!0},p(a,c){if(c[0]&4){i=a[31].tokens;let u;for(u=0;u<i.length;u+=1){const X=_e(a,i,u);s[u]?(s[u].p(X,c),A(s[u],1)):(s[u]=Ye(X),s[u].c(),A(s[u],1),s[u].m(e,l))}for(de(),u=i.length;u<s.length;u+=1)o(u);he()}},i(a){if(!t){for(let c=0;c<i.length;c+=1)A(s[c]);t=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)C(s[c]);t=!1},d(a){a&&G(e),fe(s,a)}}}function Re(n){let e,l;return e=new Ae({props:{id:n[33].id,value:n[33].value,redacted:n[33].redacted,highlight:n[33].highlight||!1}}),{c(){Se(e.$$.fragment)},l(t){He(e.$$.fragment,t)},m(t,i){Ee(e,t,i),l=!0},p(t,i){const s={};i[0]&4&&(s.id=t[33].id),i[0]&4&&(s.value=t[33].value),i[0]&4&&(s.redacted=t[33].redacted),i[0]&4&&(s.highlight=t[33].highlight||!1),e.$set(s)},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){je(e,t)}}}function Ye(n){let e,l;return e=new Ae({props:{id:n[33].id,value:n[33].value,redacted:n[33].redacted,highlight:n[33].highlight||!1}}),{c(){Se(e.$$.fragment)},l(t){He(e.$$.fragment,t)},m(t,i){Ee(e,t,i),l=!0},p(t,i){const s={};i[0]&4&&(s.id=t[33].id),i[0]&4&&(s.value=t[33].value),i[0]&4&&(s.redacted=t[33].redacted),i[0]&4&&(s.highlight=t[33].highlight||!1),e.$set(s)},i(t){l||(A(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){je(e,t)}}}function Qe(n){let e,l,t,i;const s=[Ke,qe],o=[];function a(c,u){return c[31].headline?0:1}return e=a(n),l=o[e]=s[e](n),{c(){l.c(),t=re()},l(c){l.l(c),t=re()},m(c,u){o[e].m(c,u),P(c,t,u),i=!0},p(c,u){let X=e;e=a(c),e===X?o[e].p(c,u):(de(),C(o[X],1,1,()=>{o[X]=null}),he(),l=o[e],l?l.p(c,u):(l=o[e]=s[e](c),l.c()),A(l,1),l.m(t.parentNode,t))},i(c){i||(A(l),i=!0)},o(c){C(l),i=!1},d(c){o[e].d(c),c&&G(t)}}}function ke(n){let e,l,t=n[28]+"",i,s,o=n[0][n[28]]+"",a,c,u,X,T;return{c(){e=Q("span"),l=Q("b"),i=S(t),s=S("("),a=S(o),c=S(")"),this.h()},l(R){e=k(R,"SPAN",{class:!0});var V=J(e);l=k(V,"B",{});var f=J(l);i=H(f,t),f.forEach(G),s=H(V,"("),a=H(V,o),c=H(V,")"),V.forEach(G),this.h()},h(){v(e,"class",u=oe((n[4]==n[28]?"highlight":"")+(n[0][n[28]]>0?" hit":" miss")+" word")+" svelte-upufc5")},m(R,V){P(R,e,V),b(e,l),b(l,i),b(e,s),b(e,a),b(e,c),X||(T=ce(e,"click",function(){Ce(n[6](n[28],!0))&&n[6](n[28],!0).apply(this,arguments)}),X=!0)},p(R,V){n=R,V[0]&1&&t!==(t=n[28]+"")&&ne(i,t),V[0]&1&&o!==(o=n[0][n[28]]+"")&&ne(a,o),V[0]&17&&u!==(u=oe((n[4]==n[28]?"highlight":"")+(n[0][n[28]]>0?" hit":" miss")+" word")+" svelte-upufc5")&&v(e,"class",u)},d(R){R&&G(e),X=!1,T()}}}function we(n){let e,l=ke(n);return{c(){l&&l.c(),e=re()},l(t){l&&l.l(t),e=re()},m(t,i){l&&l.m(t,i),P(t,e,i)},p(t,i){l?l.p(t,i):(l=ke(t),l.c(),l.m(e.parentNode,e))},d(t){l&&l.d(t),t&&G(e)}}}function $e(n){let e,l,t,i,s,o,a,c,u,X,T,R,V,f,g,y=Object.keys(n[0]).length+"",x,N,_,w,Y,B,L,E,U,O,ae,D,$,ue,r,m=n[5]&&Fe(),W=n[1]&&ye(n),Z=n[2],h=[];for(let d=0;d<Z.length;d+=1)h[d]=Qe(Xe(n,Z,d));const j=d=>C(h[d],1,1,()=>{h[d]=null});let q=Object.keys(n[0]).reverse(),z=[];for(let d=0;d<q.length;d+=1)z[d]=we(Ge(n,q,d));return{c(){e=Q("div"),l=Q("nav"),t=Q("h1"),i=S("Redactle Unlimited"),s=I(),o=Q("p"),a=S(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),c=I(),u=Q("div"),m&&m.c(),X=I(),W&&W.c(),T=I();for(let d=0;d<h.length;d+=1)h[d].c();R=I(),V=Q("div"),f=Q("h3"),g=S("Guesses ("),x=S(y),N=S(")"),_=I(),w=Q("form"),Y=Q("button"),B=S("\u25B2 Top"),L=I(),E=Q("input"),U=I(),O=Q("input"),ae=I(),D=Q("guess-list");for(let d=0;d<z.length;d+=1)z[d].c();this.h()},l(d){e=k(d,"DIV",{id:!0,class:!0});var F=J(e);l=k(F,"NAV",{class:!0});var p=J(l);t=k(p,"H1",{class:!0});var K=J(t);i=H(K,"Redactle Unlimited"),K.forEach(G),s=M(p),o=k(p,"P",{class:!0});var me=J(o);a=H(me,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),me.forEach(G),p.forEach(G),c=M(F),u=k(F,"DIV",{id:!0,class:!0});var te=J(u);m&&m.l(te),X=M(te),W&&W.l(te),T=M(te);for(let ee=0;ee<h.length;ee+=1)h[ee].l(te);te.forEach(G),R=M(F),V=k(F,"DIV",{id:!0,class:!0});var le=J(V);f=k(le,"H3",{class:!0});var ie=J(f);g=H(ie,"Guesses ("),x=H(ie,y),N=H(ie,")"),ie.forEach(G),_=M(le),w=k(le,"FORM",{id:!0,class:!0});var se=J(w);Y=k(se,"BUTTON",{id:!0,type:!0,class:!0});var be=J(Y);B=H(be,"\u25B2 Top"),be.forEach(G),L=M(se),E=k(se,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,class:!0}),U=M(se),O=k(se,"INPUT",{id:!0,type:!0,class:!0}),se.forEach(G),ae=M(le),D=k(le,"GUESS-LIST",{class:!0});var ge=J(D);for(let ee=0;ee<z.length;ee+=1)z[ee].l(ge);ge.forEach(G),le.forEach(G),F.forEach(G),this.h()},h(){v(t,"class","svelte-upufc5"),v(o,"class","info svelte-upufc5"),v(l,"class","svelte-upufc5"),v(u,"id","article"),v(u,"class","svelte-upufc5"),v(f,"class","svelte-upufc5"),v(Y,"id","btn-top"),v(Y,"type","button"),v(Y,"class","svelte-upufc5"),v(E,"id","input-guess"),v(E,"placeholder","guess a word..."),v(E,"autocomplete","off"),v(E,"class","svelte-upufc5"),v(O,"id","submit"),v(O,"type","submit"),O.value="Guess",v(O,"class","svelte-upufc5"),v(w,"id","guess-form"),v(w,"class","svelte-upufc5"),Ie(D,"class","svelte-upufc5"),v(V,"id","guesses"),v(V,"class","svelte-upufc5"),v(e,"id","main"),v(e,"class","svelte-upufc5")},m(d,F){P(d,e,F),b(e,l),b(l,t),b(t,i),b(l,s),b(l,o),b(o,a),b(e,c),b(e,u),m&&m.m(u,null),b(u,X),W&&W.m(u,null),b(u,T);for(let p=0;p<h.length;p+=1)h[p].m(u,null);b(e,R),b(e,V),b(V,f),b(f,g),b(f,x),b(f,N),b(V,_),b(V,w),b(w,Y),b(Y,B),b(w,L),b(w,E),We(E,n[3]),b(w,U),b(w,O),b(V,ae),b(V,D);for(let p=0;p<z.length;p+=1)z[p].m(D,null);$=!0,ue||(r=[ce(Y,"click",n[8]),ce(E,"input",n[9]),ce(w,"submit",Me(n[7]))],ue=!0)},p(d,F){if(d[5]?m||(m=Fe(),m.c(),m.m(u,X)):m&&(m.d(1),m=null),d[1]?W?W.p(d,F):(W=ye(d),W.c(),W.m(u,T)):W&&(W.d(1),W=null),F[0]&4){Z=d[2];let p;for(p=0;p<Z.length;p+=1){const K=Xe(d,Z,p);h[p]?(h[p].p(K,F),A(h[p],1)):(h[p]=Qe(K),h[p].c(),A(h[p],1),h[p].m(u,null))}for(de(),p=Z.length;p<h.length;p+=1)j(p);he()}if((!$||F[0]&1)&&y!==(y=Object.keys(d[0]).length+"")&&ne(x,y),F[0]&8&&E.value!==d[3]&&We(E,d[3]),F[0]&81){q=Object.keys(d[0]).reverse();let p;for(p=0;p<q.length;p+=1){const K=Ge(d,q,p);z[p]?z[p].p(K,F):(z[p]=we(K),z[p].c(),z[p].m(D,null))}for(;p<z.length;p+=1)z[p].d(1);z.length=q.length}},i(d){if(!$){for(let F=0;F<Z.length;F+=1)A(h[F]);$=!0}},o(d){h=h.filter(Boolean);for(let F=0;F<h.length;F+=1)C(h[F]);$=!1},d(d){d&&G(e),m&&m.d(),W&&W.d(),fe(h,d),fe(z,d),ue=!1,Oe(r)}}}let et=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const xe="solved_game_history";function tt(){return JSON.parse(window.localStorage.getItem(xe)||"{}")}function lt(){let n=document.getElementById("headline-section-0");n&&n.scrollIntoView()}function Ue(n,e){return`${st(n).replaceAll("=","a")}${e}`}function st(n){let e=encodeURIComponent(n).replace(/%([a-f0-9]{2})/gi,(l,t)=>String.fromCharCode(parseInt(t,16)));return btoa(e)}function nt(n){let e=atob(n).replace(/[\x80-\uffff]/g,l=>`%${l.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Ne(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function at(n,e,l){let t=[],i={},s=!1;const o=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let a={};o.forEach(r=>a[r]=1);const c=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let u=[],X={},T="",R="",V=0,f={},g=!0,y="";x();function x(){const r=Math.floor(Math.random()*c.length);y=nt(c[r]),fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${y}`).then(m=>m.json()).then(m=>{let W=0,Z=m.lead.sections[0].text,h=N(Z);W+=h.length,t.push({text:h,headline:pe(m.lead.displaytitle)});let j=0;for(;W<1e5&&j<m.remaining.sections.length;)Z=m.remaining.sections[j].text,h=N(Z),W+=h.length,t.push({text:h,headline:pe(m.remaining.sections[j].line)}),j++;_()})}function N(r){if(typeof window!="undefined"){console.log("removing tags");var m=new window.DOMParser,W=m.parseFromString(r,"text/html");["style","table"].forEach(j=>{let q=W.getElementsByTagName(j);Array.prototype.slice.call(q,0).forEach(d=>d.remove())}),r=W.body.innerHTML}let Z=pe(r);return Z=Z.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),Z=Z.replace(/\[\d+\]/ig,""),Z}function _(){console.log("rendering..."),l(2,u=[]),f={};for(const r in t)B(t[r].headline,!0),B(t[r].text,!1);l(5,g=!1)}function w(){let r=u[0].tokens.find(m=>m.redacted);l(1,s=r===void 0),s&&(Y(),_())}function Y(){let r=tt(),m=new Date,W={title:y,guesses:Object.keys(i).length,time:m.getTime()};r[y]=W,window.localStorage.setItem(xe,JSON.stringify(r)),console.log(`solved: ${s}`)}function B(r,m){let W=[...r.matchAll(et)],Z=L(W);u.push({headline:m,tokens:Z})}function L(r){let m=[];for(const W in r){let Z=r[W][1];if(Z){let h=Ne(Z);f[h]=h in f?f[h]+1:1;let j={value:Z,wordNormal:h,id:Ue(h,f[h]-1),redacted:U(h),highlight:h==R};h in X||(X[h]=[]),X[h].push(j),m.push(j)}r[W][2]&&m.push({value:r[W][2]})}return m}function E(r){!X.hasOwnProperty(r)||(X[r].forEach(m=>{m.redacted=U(r),m.highlight=r==R}),l(2,u=[...u]))}function U(r){return!s&&!a.hasOwnProperty(r)&&!i.hasOwnProperty(r)}function O(r,m){V=R==r?V+1:0,r in f&&f[r]>0&&(V=V%f[r]),l(4,R=r),u.forEach(h=>{h.tokens.filter(j=>j.highlight==!0).forEach(j=>{j.highlight=!1})});const W=Ue(R,V);let Z=document.getElementById(W);Z&&m&&Z.scrollIntoView(),E(r)}function ae(){let r=Ne(T);if(!D(r)){console.log("invalid guess"),l(3,T="");return}l(0,i[r]=f[r]||0,i),O(r,!1),l(3,T=""),w(),r=="togglecheats"&&(l(1,s=!s),_())}function D(r){return!(r in a||/^\w+$/.test(r)==!1)}const $=()=>lt();function ue(){T=this.value,l(3,T)}return[i,s,u,T,R,g,O,ae,$,ue]}class it extends Je{constructor(e){super(),Te(this,e,at,$e,ze,{},null,[-1,-1])}}export{it as default};
