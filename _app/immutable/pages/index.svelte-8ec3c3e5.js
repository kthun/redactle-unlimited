import{S as Ie,i as Le,s as Pe,l as ye,g as oe,n as _e,d as y,e as Z,t as Y,c as R,a as Q,h as q,b as m,K as We,J as f,L as ee,j as be,M as rt,N as ct,p as de,q as ke,r as re,O as ut,k as C,m as O,P as xe,Q as ft,R as Xe,T as Fe,w as ht,U as dt,o as we,V as pt,f as mt,x as Me,y as De,z as Ke,C as et}from"../chunks/index-9551c904.js";function gt(l){let e,t=(l[3]?"\u2588".repeat(l[1].length):l[1])+"",s,a,i,u;return{c(){e=Z("span"),s=Y(t),this.h()},l(o){e=R(o,"SPAN",{id:!0,class:!0});var n=Q(e);s=q(n,t),n.forEach(y),this.h()},h(){m(e,"id",l[0]),m(e,"class",a=We((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-h2j861")},m(o,n){oe(o,e,n),f(e,s),i||(u=ee(e,"click",l[5]),i=!0)},p(o,n){n&10&&t!==(t=(o[3]?"\u2588".repeat(o[1].length):o[1])+"")&&be(s,t),n&1&&m(e,"id",o[0]),n&12&&a!==(a=We((o[2]?"highlight":"")+(o[3]?" redacted":""))+" svelte-h2j861")&&m(e,"class",a)},d(o){o&&y(e),i=!1,u()}}}function bt(l){let e,t=(l[3]?"\u2588".repeat(l[1].length-`${l[1].length}`.length):l[1])+"",s,a,i,u,o=l[3]&&Ye(l);return{c(){e=Z("span"),o&&o.c(),s=Y(t),this.h()},l(n){e=R(n,"SPAN",{id:!0,class:!0});var c=Q(e);o&&o.l(c),s=q(c,t),c.forEach(y),this.h()},h(){m(e,"id",l[0]),m(e,"class",a=We((l[2]?"highlight":"")+(l[3]?" redacted":""))+" svelte-h2j861")},m(n,c){oe(n,e,c),o&&o.m(e,null),f(e,s),i||(u=ee(e,"click",l[5]),i=!0)},p(n,c){n[3]?o?o.p(n,c):(o=Ye(n),o.c(),o.m(e,s)):o&&(o.d(1),o=null),c&10&&t!==(t=(n[3]?"\u2588".repeat(n[1].length-`${n[1].length}`.length):n[1])+"")&&be(s,t),c&1&&m(e,"id",n[0]),c&12&&a!==(a=We((n[2]?"highlight":"")+(n[3]?" redacted":""))+" svelte-h2j861")&&m(e,"class",a)},d(n){n&&y(e),o&&o.d(),i=!1,u()}}}function Ye(l){let e,t=l[1].length+"",s;return{c(){e=Z("span"),s=Y(t),this.h()},l(a){e=R(a,"SPAN",{class:!0});var i=Q(e);s=q(i,t),i.forEach(y),this.h()},h(){m(e,"class","char_count svelte-h2j861")},m(a,i){oe(a,e,i),f(e,s)},p(a,i){i&2&&t!==(t=a[1].length+"")&&be(s,t)},d(a){a&&y(e)}}}function vt(l){let e;function t(i,u){return i[4]?bt:gt}let s=t(l),a=s(l);return{c(){a.c(),e=ye()},l(i){a.l(i),e=ye()},m(i,u){a.m(i,u),oe(i,e,u)},p(i,[u]){s===(s=t(i))&&a?a.p(i,u):(a.d(1),a=s(i),a&&(a.c(),a.m(e.parentNode,e)))},i:_e,o:_e,d(i){a.d(i),i&&y(e)}}}function yt(l,e,t){let{id:s}=e,{value:a=""}=e,{highlight:i=!1}=e,{redacted:u=!1}=e,o=!1;function n(){t(4,o=!o)}return l.$$set=c=>{"id"in c&&t(0,s=c.id),"value"in c&&t(1,a=c.value),"highlight"in c&&t(2,i=c.highlight),"redacted"in c&&t(3,u=c.redacted)},[s,a,i,u,o,n]}class tt extends Ie{constructor(e){super(),Le(this,e,yt,vt,Pe,{id:0,value:1,highlight:2,redacted:3})}}var lt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Wt(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var st={exports:{}};(function(l){(function(e){if(typeof t!="function"){var t=function(p){return p};t.nonNative=!0}const s=t("plaintext"),a=t("html"),i=t("comment"),u=/<(\w*)>/g,o=/<\/?([^\s\/>]+)/;function n(p,r,d){p=p||"",r=r||[],d=d||"";let v=G(r,d);return F(p,v)}function c(p,r){p=p||[],r=r||"";let d=G(p,r);return function(h){return F(h||"",d)}}n.init_streaming_mode=c;function G(p,r){return p=x(p),{allowable_tags:p,tag_replacement:r,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function F(p,r){if(typeof p!="string")throw new TypeError("'html' parameter must be a string");let d=r.allowable_tags,v=r.tag_replacement,h=r.state,b=r.tag_buffer,j=r.depth,N=r.in_quote_char,U="";for(let $=0,M=p.length;$<M;$++){let k=p[$];if(h===s)switch(k){case"<":h=a,b+=k;break;default:U+=k;break}else if(h===a)switch(k){case"<":if(N)break;j++;break;case">":if(N)break;if(j){j--;break}N="",h=s,b+=">",d.has(V(b))?U+=b:U+=v,b="";break;case'"':case"'":k===N?N="":N=N||k,b+=k;break;case"-":b==="<!-"&&(h=i),b+=k;break;case" ":case`
`:if(b==="<"){h=s,U+="< ",b="";break}b+=k;break;default:b+=k;break}else if(h===i)switch(k){case">":b.slice(-2)=="--"&&(h=s),b="";break;default:b+=k;break}}return r.state=h,r.tag_buffer=b,r.depth=j,r.in_quote_char=N,U}function x(p){let r=new Set;if(typeof p=="string"){let d;for(;d=u.exec(p);)r.add(d[1])}else!t.nonNative&&typeof p[t.iterator]=="function"?r=new Set(p):typeof p.forEach=="function"&&p.forEach(r.add,r);return r}function V(p){let r=o.exec(p);return r?r[1].toLowerCase():null}l.exports?l.exports=n:e.striptags=n})(lt)})(st);var Re=st.exports;function _t(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}var pe={$(l){return typeof l=="string"?document.querySelector(l):l},extend(...l){return Object.assign(...l)},cumulativeOffset(l){let e=0,t=0;do e+=l.offsetTop||0,t+=l.offsetLeft||0,l=l.offsetParent;while(l);return{top:e,left:t}},directScroll(l){return l&&l!==document&&l!==document.body},scrollTop(l,e){let t=e!==void 0;return this.directScroll(l)?t?l.scrollTop=e:l.scrollTop:t?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(l,e){let t=e!==void 0;return this.directScroll(l)?t?l.scrollLeft=e:l.scrollLeft:t?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const Vt={container:"body",duration:500,delay:0,offset:0,easing:_t,onStart:_e,onDone:_e,onAborting:_e,scrollX:!1,scrollY:!0},Gt=l=>{let{offset:e,duration:t,delay:s,easing:a,x:i=0,y:u=0,scrollX:o,scrollY:n,onStart:c,onDone:G,container:F,onAborting:x,element:V}=l;typeof e=="function"&&(e=e());var p=pe.cumulativeOffset(F),r=V?pe.cumulativeOffset(V):{top:u,left:i},d=pe.scrollLeft(F),v=pe.scrollTop(F),h=r.left-p.left+e,b=r.top-p.top+e,j=h-d,N=b-v;let U=!0,$=!1,M=rt()+s,k=M+t;function B(A,le,ce){o&&pe.scrollLeft(A,ce),n&&pe.scrollTop(A,le)}function P(A){A||($=!0,c(V,{x:i,y:u}))}function te(A){B(F,v+N*A,d+j*A)}function J(){U=!1}return ct(A=>{if(!$&&A>=M&&P(!1),$&&A>=k&&(te(1),J(),G(V,{x:i,y:u})),!U)return x(V,{x:i,y:u}),!1;if($){const le=A-M,ce=0+1*a(le/t);te(ce)}return!0}),P(s),te(0),J},Xt=l=>{let e=pe.extend({},Vt,l);return e.container=pe.$(e.container),e.element=pe.$(e.element),e},kt=l=>Gt(Xt(l));var it={exports:{}};(function(l,e){(function(t,s){typeof Wt=="function"&&!0?l.exports=s():t.pluralize=s()})(lt,function(){var t=[],s=[],a={},i={},u={};function o(r){return typeof r=="string"?new RegExp("^"+r+"$","i"):r}function n(r,d){return r===d?d:r===r.toLowerCase()?d.toLowerCase():r===r.toUpperCase()?d.toUpperCase():r[0]===r[0].toUpperCase()?d.charAt(0).toUpperCase()+d.substr(1).toLowerCase():d.toLowerCase()}function c(r,d){return r.replace(/\$(\d{1,2})/g,function(v,h){return d[h]||""})}function G(r,d){return r.replace(d[0],function(v,h){var b=c(d[1],arguments);return n(v===""?r[h-1]:v,b)})}function F(r,d,v){if(!r.length||a.hasOwnProperty(r))return d;for(var h=v.length;h--;){var b=v[h];if(b[0].test(d))return G(d,b)}return d}function x(r,d,v){return function(h){var b=h.toLowerCase();return d.hasOwnProperty(b)?n(h,b):r.hasOwnProperty(b)?n(h,r[b]):F(b,h,v)}}function V(r,d,v,h){return function(b){var j=b.toLowerCase();return d.hasOwnProperty(j)?!0:r.hasOwnProperty(j)?!1:F(j,j,v)===j}}function p(r,d,v){var h=d===1?p.singular(r):p.plural(r);return(v?d+" ":"")+h}return p.plural=x(u,i,t),p.isPlural=V(u,i,t),p.singular=x(i,u,s),p.isSingular=V(i,u,s),p.addPluralRule=function(r,d){t.push([o(r),d])},p.addSingularRule=function(r,d){s.push([o(r),d])},p.addUncountableRule=function(r){if(typeof r=="string"){a[r.toLowerCase()]=!0;return}p.addPluralRule(r,"$0"),p.addSingularRule(r,"$0")},p.addIrregularRule=function(r,d){d=d.toLowerCase(),r=r.toLowerCase(),u[r]=d,i[d]=r},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(r){return p.addIrregularRule(r[0],r[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(r){return p.addPluralRule(r[0],r[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(r){return p.addSingularRule(r[0],r[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(p.addUncountableRule),p})})(it);const{window:qe}=dt;function Te(l,e,t){const s=l.slice();return s[48]=e[t],s[50]=t,s}function Qe(l,e,t){const s=l.slice();return s[51]=e[t],s[50]=t,s}function Ue(l,e,t){const s=l.slice();return s[53]=e[t],s}function Ne(l,e,t){const s=l.slice();return s[53]=e[t],s}function Se(l){let e,t;return{c(){e=Z("p"),t=Y("loading..."),this.h()},l(s){e=R(s,"P",{class:!0});var a=Q(e);t=q(a,"loading..."),a.forEach(y),this.h()},h(){m(e,"class","svelte-1f4qihx")},m(s,a){oe(s,e,a),f(e,t)},d(s){s&&y(e)}}}function wt(l){let e,t,s,a=l[51].tokens,i=[];for(let o=0;o<a.length;o+=1)i[o]=ze(Ue(l,a,o));const u=o=>de(i[o],1,1,()=>{i[o]=null});return{c(){e=Z("p");for(let o=0;o<i.length;o+=1)i[o].c();t=C(),this.h()},l(o){e=R(o,"P",{class:!0});var n=Q(e);for(let c=0;c<i.length;c+=1)i[c].l(n);t=O(n),n.forEach(y),this.h()},h(){m(e,"class","svelte-1f4qihx")},m(o,n){oe(o,e,n);for(let c=0;c<i.length;c+=1)i[c].m(e,null);f(e,t),s=!0},p(o,n){if(n[0]&4){a=o[51].tokens;let c;for(c=0;c<a.length;c+=1){const G=Ue(o,a,c);i[c]?(i[c].p(G,n),re(i[c],1)):(i[c]=ze(G),i[c].c(),re(i[c],1),i[c].m(e,t))}for(we(),c=a.length;c<i.length;c+=1)u(c);ke()}},i(o){if(!s){for(let n=0;n<a.length;n+=1)re(i[n]);s=!0}},o(o){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)de(i[n]);s=!1},d(o){o&&y(e),Xe(i,o)}}}function Zt(l){let e,t,s,a=l[51].tokens,i=[];for(let o=0;o<a.length;o+=1)i[o]=Je(Ne(l,a,o));const u=o=>de(i[o],1,1,()=>{i[o]=null});return{c(){e=Z("h2");for(let o=0;o<i.length;o+=1)i[o].c();t=C(),this.h()},l(o){e=R(o,"H2",{id:!0,class:!0});var n=Q(e);for(let c=0;c<i.length;c+=1)i[c].l(n);t=O(n),n.forEach(y),this.h()},h(){m(e,"id","headline-section-"+l[50]),m(e,"class","svelte-1f4qihx")},m(o,n){oe(o,e,n);for(let c=0;c<i.length;c+=1)i[c].m(e,null);f(e,t),s=!0},p(o,n){if(n[0]&4){a=o[51].tokens;let c;for(c=0;c<a.length;c+=1){const G=Ne(o,a,c);i[c]?(i[c].p(G,n),re(i[c],1)):(i[c]=Je(G),i[c].c(),re(i[c],1),i[c].m(e,t))}for(we(),c=a.length;c<i.length;c+=1)u(c);ke()}},i(o){if(!s){for(let n=0;n<a.length;n+=1)re(i[n]);s=!0}},o(o){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)de(i[n]);s=!1},d(o){o&&y(e),Xe(i,o)}}}function ze(l){let e,t;return e=new tt({props:{id:l[53].id,value:l[53].value,redacted:l[53].redacted,highlight:l[53].highlight||!1}}),{c(){Me(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,a){Ke(e,s,a),t=!0},p(s,a){const i={};a[0]&4&&(i.id=s[53].id),a[0]&4&&(i.value=s[53].value),a[0]&4&&(i.redacted=s[53].redacted),a[0]&4&&(i.highlight=s[53].highlight||!1),e.$set(i)},i(s){t||(re(e.$$.fragment,s),t=!0)},o(s){de(e.$$.fragment,s),t=!1},d(s){et(e,s)}}}function Je(l){let e,t;return e=new tt({props:{id:l[53].id,value:l[53].value,redacted:l[53].redacted,highlight:l[53].highlight||!1}}),{c(){Me(e.$$.fragment)},l(s){De(e.$$.fragment,s)},m(s,a){Ke(e,s,a),t=!0},p(s,a){const i={};a[0]&4&&(i.id=s[53].id),a[0]&4&&(i.value=s[53].value),a[0]&4&&(i.redacted=s[53].redacted),a[0]&4&&(i.highlight=s[53].highlight||!1),e.$set(i)},i(s){t||(re(e.$$.fragment,s),t=!0)},o(s){de(e.$$.fragment,s),t=!1},d(s){et(e,s)}}}function Ee(l){let e,t,s,a;const i=[Zt,wt],u=[];function o(n,c){return n[51].headline?0:1}return e=o(l),t=u[e]=i[e](l),{c(){t.c(),s=ye()},l(n){t.l(n),s=ye()},m(n,c){u[e].m(n,c),oe(n,s,c),a=!0},p(n,c){let G=e;e=o(n),e===G?u[e].p(n,c):(we(),de(u[G],1,1,()=>{u[G]=null}),ke(),t=u[e],t?t.p(n,c):(t=u[e]=i[e](n),t.c()),re(t,1),t.m(s.parentNode,s))},i(n){a||(re(t),a=!0)},o(n){de(t),a=!1},d(n){u[e].d(n),n&&y(s)}}}function je(l){let e,t,s=l[48]+"",a,i,u=l[7].guesses[l[48]]+"",o,n,c,G,F;return{c(){e=Z("span"),t=Z("b"),a=Y(s),i=Y("("),o=Y(u),n=Y(")"),this.h()},l(x){e=R(x,"SPAN",{class:!0});var V=Q(e);t=R(V,"B",{});var p=Q(t);a=q(p,s),p.forEach(y),i=q(V,"("),o=q(V,u),n=q(V,")"),V.forEach(y),this.h()},h(){m(e,"class",c=We((l[4]==l[48]?"highlight":"")+(l[7].guesses[l[48]]>0?" hit":" miss")+" word")+" svelte-1f4qihx")},m(x,V){oe(x,e,V),f(e,t),f(t,a),f(e,i),f(e,o),f(e,n),G||(F=ee(e,"click",function(){pt(l[12](l[48],!0))&&l[12](l[48],!0).apply(this,arguments)}),G=!0)},p(x,V){l=x,V[0]&128&&s!==(s=l[48]+"")&&be(a,s),V[0]&128&&u!==(u=l[7].guesses[l[48]]+"")&&be(o,u),V[0]&144&&c!==(c=We((l[4]==l[48]?"highlight":"")+(l[7].guesses[l[48]]>0?" hit":" miss")+" word")+" svelte-1f4qihx")&&m(e,"class",c)},d(x){x&&y(e),G=!1,F()}}}function He(l){let e,t=(l[6].showMisses||l[7].guesses[l[48]]>0||l[50]==0)&&je(l);return{c(){t&&t.c(),e=ye()},l(s){t&&t.l(s),e=ye()},m(s,a){t&&t.m(s,a),oe(s,e,a)},p(s,a){s[6].showMisses||s[7].guesses[s[48]]>0||s[50]==0?t?t.p(s,a):(t=je(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){t&&t.d(s),s&&y(e)}}}function $e(l){let e,t,s;function a(o,n){if(o[0])return Ft;if(o[1])return Rt}let i=a(l),u=i&&i(l);return{c(){e=Z("div"),u&&u.c(),this.h()},l(o){e=R(o,"DIV",{id:!0,class:!0});var n=Q(e);u&&u.l(n),n.forEach(y),this.h()},h(){m(e,"id","modal-container"),m(e,"class","svelte-1f4qihx")},m(o,n){oe(o,e,n),u&&u.m(e,null),t||(s=ee(e,"click",ut(l[25])),t=!0)},p(o,n){i===(i=a(o))&&u?u.p(o,n):(u&&u.d(1),u=i&&i(o),u&&(u.c(),u.m(e,null)))},d(o){o&&y(e),u&&u.d(),t=!1,s()}}}function Rt(l){let e,t,s,a,i,u,o,n,c,G=Object.keys(l[7].guesses).length+"",F,x,V=l[13]()+"",p,r,d,v,h,b=Object.keys(l[7].guesses).length+"",j,N,U=l[13]()+"",$,M,k=window.location+"",B,P,te,J,A,le;function ce(I,H){return I[8]?Yt:xt}let se=ce(l),ie=se(l);return{c(){e=Z("div"),t=Z("span"),s=Y("\u2A2F"),a=C(),i=Z("h3"),u=Y("Solved!"),o=C(),n=Z("p"),c=Y("You solved Redactle Unlimited in "),F=Y(G),x=Y(" guesses with "),p=Y(V),r=Y("% accuracy!"),d=C(),v=Z("p"),h=Y("I solved Redactle Unlimied in "),j=Y(b),N=Y(" guesses with "),$=Y(U),M=Y("% accuracy! Play at "),B=Y(k),P=Y("."),te=C(),J=Z("button"),ie.c(),this.h()},l(I){e=R(I,"DIV",{id:!0,class:!0});var H=Q(e);t=R(H,"SPAN",{class:!0});var ve=Q(t);s=q(ve,"\u2A2F"),ve.forEach(y),a=O(H),i=R(H,"H3",{class:!0});var L=Q(i);u=q(L,"Solved!"),L.forEach(y),o=O(H),n=R(H,"P",{id:!0});var ne=Q(n);c=q(ne,"You solved Redactle Unlimited in "),F=q(ne,G),x=q(ne," guesses with "),p=q(ne,V),r=q(ne,"% accuracy!"),ne.forEach(y),d=O(H),v=R(H,"P",{id:!0,style:!0});var T=Q(v);h=q(T,"I solved Redactle Unlimied in "),j=q(T,b),N=q(T," guesses with "),$=q(T,U),M=q(T,"% accuracy! Play at "),B=q(T,k),P=q(T,"."),T.forEach(y),te=O(H),J=R(H,"BUTTON",{id:!0,class:!0});var me=Q(J);ie.l(me),me.forEach(y),H.forEach(y),this.h()},h(){m(t,"class","close svelte-1f4qihx"),m(i,"class","svelte-1f4qihx"),m(n,"id","solved-message"),m(v,"id","share-text"),mt(v,"display","none"),m(J,"id","copy-share"),m(J,"class","svelte-1f4qihx"),m(e,"id","solved"),m(e,"class","modal svelte-1f4qihx")},m(I,H){oe(I,e,H),f(e,t),f(t,s),f(e,a),f(e,i),f(i,u),f(e,o),f(e,n),f(n,c),f(n,F),f(n,x),f(n,p),f(n,r),f(e,d),f(e,v),f(v,h),f(v,j),f(v,N),f(v,$),f(v,M),f(v,B),f(v,P),f(e,te),f(e,J),ie.m(J,null),A||(le=[ee(t,"click",l[24]),ee(J,"click",l[17])],A=!0)},p(I,H){H[0]&128&&G!==(G=Object.keys(I[7].guesses).length+"")&&be(F,G),H[0]&128&&b!==(b=Object.keys(I[7].guesses).length+"")&&be(j,b),se!==(se=ce(I))&&(ie.d(1),ie=se(I),ie&&(ie.c(),ie.m(J,null)))},d(I){I&&y(e),ie.d(),A=!1,Fe(le)}}}function Ft(l){let e,t,s,a,i,u,o,n,c,G,F,x,V,p,r,d,v,h,b,j;return{c(){e=Z("div"),t=Z("span"),s=Y("\u2A2F"),a=C(),i=Z("h3"),u=Y("Settings"),o=C(),n=Z("p"),c=Z("input"),G=C(),F=Z("label"),x=Y("Attempt to pluralize guesses."),V=C(),p=Z("p"),r=Z("input"),d=C(),v=Z("label"),h=Y("Show guesses with zero matches."),this.h()},l(N){e=R(N,"DIV",{id:!0,class:!0});var U=Q(e);t=R(U,"SPAN",{class:!0});var $=Q(t);s=q($,"\u2A2F"),$.forEach(y),a=O(U),i=R(U,"H3",{class:!0});var M=Q(i);u=q(M,"Settings"),M.forEach(y),o=O(U),n=R(U,"P",{});var k=Q(n);c=R(k,"INPUT",{id:!0,type:!0,class:!0}),G=O(k),F=R(k,"LABEL",{for:!0});var B=Q(F);x=q(B,"Attempt to pluralize guesses."),B.forEach(y),k.forEach(y),V=O(U),p=R(U,"P",{});var P=Q(p);r=R(P,"INPUT",{id:!0,type:!0,class:!0}),d=O(P),v=R(P,"LABEL",{for:!0});var te=Q(v);h=q(te,"Show guesses with zero matches."),te.forEach(y),P.forEach(y),U.forEach(y),this.h()},h(){m(t,"class","close svelte-1f4qihx"),m(i,"class","svelte-1f4qihx"),m(c,"id","input-pluralize"),m(c,"type","checkbox"),m(c,"class","svelte-1f4qihx"),m(F,"for","input-pluralize"),m(r,"id","input-show-misses"),m(r,"type","checkbox"),m(r,"class","svelte-1f4qihx"),m(v,"for","input-show-misses"),m(e,"id","settings"),m(e,"class","modal svelte-1f4qihx")},m(N,U){oe(N,e,U),f(e,t),f(t,s),f(e,a),f(e,i),f(i,u),f(e,o),f(e,n),f(n,c),c.checked=l[6].pluralizeGuesses,f(n,G),f(n,F),f(F,x),f(e,V),f(e,p),f(p,r),r.checked=l[6].showMisses,f(p,d),f(p,v),f(v,h),b||(j=[ee(t,"click",l[21]),ee(c,"change",l[22]),ee(c,"change",l[10]),ee(r,"change",l[23]),ee(r,"change",l[10])],b=!0)},p(N,U){U[0]&64&&(c.checked=N[6].pluralizeGuesses),U[0]&64&&(r.checked=N[6].showMisses)},d(N){N&&y(e),b=!1,Fe(j)}}}function xt(l){let e;return{c(){e=Y("Copy and Share")},l(t){e=q(t,"Copy and Share")},m(t,s){oe(t,e,s)},d(t){t&&y(e)}}}function Yt(l){let e;return{c(){e=Y("Copied \u2705")},l(t){e=q(t,"Copied \u2705")},m(t,s){oe(t,e,s)},d(t){t&&y(e)}}}function qt(l){let e,t,s,a,i,u,o,n,c,G,F,x,V,p,r,d,v,h,b,j,N=Object.keys(l[7].guesses).length+"",U,$,M,k,B,P,te,J,A,le,ce,se,ie,I,H,ve,L=l[5]&&Se(),ne=l[2],T=[];for(let _=0;_<ne.length;_+=1)T[_]=Ee(Qe(l,ne,_));const me=_=>de(T[_],1,1,()=>{T[_]=null});let ge=Object.keys(l[7].guesses).reverse(),D=[];for(let _=0;_<ge.length;_+=1)D[_]=He(Te(l,ge,_));let K=l[9]&&$e(l);return{c(){e=Z("div"),t=Z("nav"),s=Z("h1"),a=Y("Redactle Unlimited"),i=C(),u=Z("button"),o=Y("New Game"),n=C(),c=Z("button"),G=Y("\u2699\uFE0F"),F=C(),x=Z("p"),V=Y(`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),p=C(),r=Z("div"),L&&L.c(),d=C();for(let _=0;_<T.length;_+=1)T[_].c();v=C(),h=Z("div"),b=Z("h3"),j=Y("Guesses ("),U=Y(N),$=Y(")"),M=C(),k=Z("form"),B=Z("button"),P=Y("\u25B2 Top"),te=C(),J=Z("input"),A=C(),le=Z("input"),ce=C(),se=Z("div");for(let _=0;_<D.length;_+=1)D[_].c();ie=C(),K&&K.c(),this.h()},l(_){e=R(_,"DIV",{id:!0,class:!0});var z=Q(e);t=R(z,"NAV",{class:!0});var W=Q(t);s=R(W,"H1",{class:!0});var fe=Q(s);a=q(fe,"Redactle Unlimited"),fe.forEach(y),i=O(W),u=R(W,"BUTTON",{id:!0,class:!0});var Ve=Q(u);o=q(Ve,"New Game"),Ve.forEach(y),n=O(W),c=R(W,"BUTTON",{id:!0,class:!0});var Ge=Q(c);G=q(Ge,"\u2699\uFE0F"),Ge.forEach(y),F=O(W),x=R(W,"P",{class:!0});var g=Q(x);V=q(g,`A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.`),g.forEach(y),W.forEach(y),p=O(z),r=R(z,"DIV",{id:!0,class:!0});var X=Q(r);L&&L.l(X),d=O(X);for(let ue=0;ue<T.length;ue+=1)T[ue].l(X);X.forEach(y),v=O(z),h=R(z,"DIV",{id:!0,class:!0});var E=Q(h);b=R(E,"H3",{class:!0});var S=Q(b);j=q(S,"Guesses ("),U=q(S,N),$=q(S,")"),S.forEach(y),M=O(E),k=R(E,"FORM",{id:!0,class:!0});var w=Q(k);B=R(w,"BUTTON",{id:!0,type:!0,class:!0});var ae=Q(B);P=q(ae,"\u25B2 Top"),ae.forEach(y),te=O(w),J=R(w,"INPUT",{id:!0,placeholder:!0,autocomplete:!0,title:!0,class:!0}),A=O(w),le=R(w,"INPUT",{id:!0,type:!0,class:!0}),w.forEach(y),ce=O(E),se=R(E,"DIV",{id:!0,class:!0});var he=Q(se);for(let ue=0;ue<D.length;ue+=1)D[ue].l(he);he.forEach(y),E.forEach(y),ie=O(z),K&&K.l(z),z.forEach(y),this.h()},h(){m(s,"class","svelte-1f4qihx"),m(u,"id","new-game"),m(u,"class","svelte-1f4qihx"),m(c,"id","settings"),m(c,"class","svelte-1f4qihx"),m(x,"class","info svelte-1f4qihx"),m(t,"class","svelte-1f4qihx"),m(r,"id","article"),m(r,"class","svelte-1f4qihx"),m(b,"class","svelte-1f4qihx"),m(B,"id","btn-top"),m(B,"type","button"),m(B,"class","svelte-1f4qihx"),m(J,"id","input-guess"),m(J,"placeholder","guess a word..."),m(J,"autocomplete","off"),m(J,"title","Hold shift key to pluralize."),m(J,"class","svelte-1f4qihx"),m(le,"id","submit"),m(le,"type","submit"),le.value="Guess",m(le,"class","svelte-1f4qihx"),m(k,"id","guess-form"),m(k,"class","svelte-1f4qihx"),m(se,"id","guess-list"),m(se,"class","svelte-1f4qihx"),m(h,"id","guesses"),m(h,"class","svelte-1f4qihx"),m(e,"id","main"),m(e,"class","svelte-1f4qihx")},m(_,z){oe(_,e,z),f(e,t),f(t,s),f(s,a),f(t,i),f(t,u),f(u,o),f(t,n),f(t,c),f(c,G),f(t,F),f(t,x),f(x,V),f(e,p),f(e,r),L&&L.m(r,null),f(r,d);for(let W=0;W<T.length;W+=1)T[W].m(r,null);f(e,v),f(e,h),f(h,b),f(b,j),f(b,U),f(b,$),f(h,M),f(h,k),f(k,B),f(B,P),f(k,te),f(k,J),xe(J,l[3]),f(k,A),f(k,le),f(h,ce),f(h,se);for(let W=0;W<D.length;W+=1)D[W].m(se,null);f(e,ie),K&&K.m(e,null),I=!0,H||(ve=[ee(qe,"keydown",l[14]),ee(qe,"keyup",l[15]),ee(u,"click",l[11]),ee(c,"click",l[18]),ee(B,"click",l[19]),ee(J,"input",l[20]),ee(k,"submit",ft(l[16]))],H=!0)},p(_,z){if(_[5]?L||(L=Se(),L.c(),L.m(r,d)):L&&(L.d(1),L=null),z[0]&4){ne=_[2];let W;for(W=0;W<ne.length;W+=1){const fe=Qe(_,ne,W);T[W]?(T[W].p(fe,z),re(T[W],1)):(T[W]=Ee(fe),T[W].c(),re(T[W],1),T[W].m(r,null))}for(we(),W=ne.length;W<T.length;W+=1)me(W);ke()}if((!I||z[0]&128)&&N!==(N=Object.keys(_[7].guesses).length+"")&&be(U,N),z[0]&8&&J.value!==_[3]&&xe(J,_[3]),z[0]&4304){ge=Object.keys(_[7].guesses).reverse();let W;for(W=0;W<ge.length;W+=1){const fe=Te(_,ge,W);D[W]?D[W].p(fe,z):(D[W]=He(fe),D[W].c(),D[W].m(se,null))}for(;W<D.length;W+=1)D[W].d(1);D.length=ge.length}_[9]?K?K.p(_,z):(K=$e(_),K.c(),K.m(e,null)):K&&(K.d(1),K=null)},i(_){if(!I){for(let z=0;z<ne.length;z+=1)re(T[z]);I=!0}},o(_){T=T.filter(Boolean);for(let z=0;z<T.length;z+=1)de(T[z]);I=!1},d(_){_&&y(e),L&&L.d(),Xe(T,_),Xe(D,_),K&&K.d(),H=!1,Fe(ve)}}}let Tt=/([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig;const nt="solved_game_history";function Qt(){return{showMisses:!0,pluralizeGuesses:!1}}function Ut(){let e=window.location.hash.substring(1).split("&"),t=new Map;return e.forEach(s=>{const a=s.split("/");a.length===2&&t.set(a[0],a[1])}),t}function Ae(l,e){try{gtag("event",l,e)}catch(t){console.log(t)}}function Nt(){return JSON.parse(localStorage.getItem(nt)||"{}")}function St(){let l=document.getElementById("headline-section-0");l&&l.scrollIntoView()}function Ce(l,e){return`${ot(l).replaceAll("=","a")}${e}`}function ot(l){let e=encodeURIComponent(l).replace(/%([a-f0-9]{2})/gi,(t,s)=>String.fromCharCode(parseInt(s,16)));return btoa(e)}function Oe(l){let e=atob(l).replace(/[\x80-\uffff]/g,t=>`%${t.charCodeAt(0).toString(16).padStart(2,"0")}`);return decodeURIComponent(e)}function Be(l){return l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().split(" ")[0]}function zt(l){var e=document.createElement("textarea");e.value=l,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var t=document.execCommand("copy"),s=t?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+s)}catch(a){console.error("Fallback: Oops, unable to copy",a)}document.body.removeChild(e)}function Jt(l){if(!navigator.clipboard){zt(l);return}navigator.clipboard.writeText(l).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)})}function Et(l,e,t){let s,a=[];const i=["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"];let u={};i.forEach(g=>u[g]=1);const o=["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="];let n=[],c={},G="",F="",x=0,V={},p=!0,r=!1,d={},v=!1,h=$();ht(async()=>{b(),N(),k()});function b(){t(6,d=JSON.parse(localStorage.getItem("settings"))),d==null&&t(6,d=Qt())}function j(){localStorage.setItem("settings",JSON.stringify(d))}function N(){let g=localStorage.getItem("gameState");if(g!==null){t(7,h=JSON.parse(g));return}t(7,h=$());const X=Ut();X.has("article")&&t(7,h.urlTitle=Oe(X.get("article")),h)}function U(){t(7,h.updated=new Date().getTime(),h);try{localStorage.setItem("gameState",JSON.stringify(h))}catch(g){console.log(g)}}function $(){const g=Math.floor(Math.random()*o.length);return{urlTitle:Oe(o[g]),guesses:{},solved:!1,updated:new Date().getTime()}}function M(){!confirm("Are you sure you want to start a new game?")||(t(7,h=$()),window.location.hash="#",k(),U())}async function k(){let X=await(await fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${h.urlTitle}`)).json(),E=0,S=X.lead.sections[0].text,w=B(S);t(5,p=!0),E+=w.length,a=[],a.push({text:w,headline:Re(X.lead.displaytitle)});let ae=0;for(;E<1e5&&ae<X.remaining.sections.length;)S=X.remaining.sections[ae].text,w=B(S),E+=w.length,a.push({text:w,headline:Re(X.remaining.sections[ae].line)}),ae++;window.location.href="#article/"+ot(h.urlTitle),P()}function B(g){if(typeof window!="undefined"){var X=new window.DOMParser,E=X.parseFromString(g,"text/html");["style","table","figure"].forEach(he=>{let ue=E.getElementsByTagName(he);Array.prototype.slice.call(ue,0).forEach(Ze=>Ze.remove())}),["navigation-not-searchable","thumbinner","gallery","infobox","hatnote","thumb"].forEach(he=>{let ue=E.getElementsByClassName(he);Array.prototype.slice.call(ue,0).forEach(Ze=>Ze.remove())}),g=E.body.innerHTML}let S=Re(g);return S=S.replace(/&nbsp;/g," ").replace(/&(?:amp);/g,"&").replace(/&(?:lt);/g,"<").replace(/&(?:gt);/g,">").replace(/&(?:quot);/g,'"').replace(/&(?:#39);/g,"'"),S=S.replace(/\[\d+\]/ig,""),S}function P(){console.log("rendering..."),t(2,n=[]),V={};for(const g in a)A(a[g].headline,!0),A(a[g].text,!1);t(5,p=!1)}function te(){let g=n[0].tokens.find(X=>X.redacted);t(7,h.solved=g===void 0,h),h.solved&&(t(1,v=!0),J(),Ae("win_game",{title:h.urlTitle}),P())}function J(){let g=Nt(),X=h;g[h.urlTitle]=X,localStorage.setItem(nt,JSON.stringify(g)),console.log(`solved: ${h.solved}`)}function A(g,X){let E=[...g.matchAll(Tt)],S=le(E);n.push({headline:X,tokens:S})}function le(g){let X=[];for(const E in g){let S=g[E][1];if(S){let w=Be(S);V[w]=w in V?V[w]+1:1;let ae={value:S,wordNormal:w,id:Ce(w,V[w]-1),redacted:se(w),highlight:w==F};w in c||(c[w]=[]),c[w].push(ae),X.push(ae)}g[E][2]&&X.push({value:g[E][2]})}return X}function ce(g){!c.hasOwnProperty(g)||(c[g].forEach(X=>{X.redacted=se(g),X.highlight=g==F}),t(2,n=[...n]))}function se(g){return!h.solved&&!u.hasOwnProperty(g)&&!h.guesses.hasOwnProperty(g)}function ie(g,X){if(x=F==g?x+1:0,!V.hasOwnProperty(g))return;x=x%V[g];let E=F==g&&x==0;t(4,F=g),n.forEach(ae=>{ae.tokens.filter(he=>he.highlight==!0).forEach(he=>{he.highlight=!1})});const S=Ce(F,x);document.getElementById(S)&&X&&kt({container:"#article",element:`#${S}`,duration:E?500:150,offset:-25}),ce(g)}function I(){let g=Object.keys(h.guesses).length;if(g==0)return 0;const E=Object.values(h.guesses).filter(S=>S>0).length/g;return`${Math.round(E*1e4)/100}`}let H=!1;function ve(g){g.keyCode==16&&(H=!0)}function L(g){g.keyCode==16&&(H=!1),g.keyCode==27&&t(0,r=!1)}function ne(g){console.log(g);let X=Be(G);if(!T(X)){console.log("invalid guess"),t(3,G="");return}let E=[X];if(d.pluralizeGuesses||H){let w=it.exports.plural(X);w&&E.push(w)}let S=E.map(w=>({word:w,count:V[w]||0})).sort((w,ae)=>w.count-ae.count);S.forEach(w=>{t(7,h.guesses[w.word]=w.count||0,h),Ae("guess",{word:w.word})}),ie(S[S.length-1].word,!1),t(3,G=""),te(),U(),X=="togglecheats"&&(t(7,h.solved=!h.solved,h),t(1,v=!0),P())}function T(g){return!(g in u||/^\w+$/.test(g)==!1)}let me=!1;function ge(){var X;const g=(X=document.getElementById("share-text"))==null?void 0:X.innerText;Jt(g),t(8,me=!0),setTimeout(()=>t(8,me=!1),5e3)}const D=()=>t(0,r=!r),K=()=>St();function _(){G=this.value,t(3,G)}const z=()=>{t(0,r=!1)};function W(){d.pluralizeGuesses=this.checked,t(6,d)}function fe(){d.showMisses=this.checked,t(6,d)}const Ve=()=>{t(1,v=!1)},Ge=()=>{t(0,r=!1)};return l.$$.update=()=>{l.$$.dirty[0]&3&&t(9,s=r||v)},[r,v,n,G,F,p,d,h,me,s,j,M,ie,I,ve,L,ne,ge,D,K,_,z,W,fe,Ve,Ge]}class Ht extends Ie{constructor(e){super(),Le(this,e,Et,qt,Pe,{},null,[-1,-1])}}export{Ht as default};
