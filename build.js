!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.bespoke=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){var o=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),o=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(a("deactivate",d(i,t)),i=o[e],a("activate",d(i,t)))},f=function(e,t){return arguments.length?void(a("slide",d(o[e],t))&&s(e,t)):o.indexOf(i)},u=function(e,t){var n=o.indexOf(i)+e;a(e>0?"next":"prev",d(i,t))&&s(n,t)},l=function(e,t){return(r[e]||(r[e]=[])).push(t),function(){r[e]=r[e].filter(function(e){return e!==t})}},a=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},c={on:l,fire:a,slide:f,next:u.bind(null,1),prev:u.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(c)}),s(0),c};t.exports={from:o}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self);var n=t;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.classes=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),f=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",f,f+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self);var n=t;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.keys=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self);var n=t;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.touch=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(e){return function(t){var n,o,i="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+i],o=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),o=e.touches[0]["page"+i]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(o)>50&&t[o>0?"prev":"next"]()})}}},{}]},{},[1])(1)}),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self);var n=t;n=n.bespoke||(n.bespoke={}),n=n.plugins||(n.plugins={}),n.scale=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,o=t.slides[0],i=o.offsetHeight,r=o.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,f=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},u=s?t.slides:t.slides.map(f),l=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,o){return o+e in n.style?o+e:t},e.toLowerCase())}("Transform"),a=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},d=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;u.forEach(a.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}]},{},[1])(1)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.overview=e()}}(function(){return function e(t,n,o){function i(s,f){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!f&&u)return u(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var a=n[s]={exports:{}};t[s][0].call(a.exports,function(e){var n=t[s][1][e];return i(n?n:e)},a,a.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){t.exports=function(t){var n=".bespoke-overview.bespoke-parent{pointer-events:auto}\n.bespoke-overview :not(img){pointer-events:none}\n.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;pointer-events:auto}\n.bespoke-overview .bespoke-active{outline:0.4vw solid #cfd8dc;outline-offset:-0.2vw;-moz-outline-radius:0.2vw}\n.bespoke-overview .bespoke-bullet{opacity:1}\n.bespoke-overview-counter{counter-reset:overview}\n.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:0.75em;bottom:0.5em;font-size:1.25rem;line-height:1.25}\n.bespoke-title{visibility:hidden;position:absolute;top:0;left:0}\n.bespoke-title h1{margin:0;font-size:1.125em;line-height:1.6;text-align:center}\n.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible;pointer-events:auto}\n.bespoke-overview:not(.bespoke-overview-to) .bespoke-title *{pointer-events:auto}\n/* z-index only works when slides are siblings */\n.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}";return e("insert-css")(n,{prepend:!0}),function(e){t="object"==typeof t?t:{};var n,o={o:79,enter:13,up:38,down:40},i=/, */,r=/^translate\((-?[\d.]+)px, *(-?[\d.]+)px\) scale\(([\d.]+)\)$/,s=["webkit","Moz","ms"],f="number"==typeof t.columns?parseInt(t.columns):3,u="number"==typeof t.margin?parseFloat(t.margin):10,l=!1,a=function(e,t){if(t in e.style)return t;for(var n=t.charAt(0).toUpperCase()+t.substr(1),o=0,i=s.length;i>o;o++){var r=s[o]+n;if(r in e.style)return r}return t},d=function(e){return e.getBoundingClientRect().width/e.offsetWidth},c=function(e){if("zoom"in e.style){var t=e.style.zoom;if(t.length>0)return parseFloat(t)}},p=function(e){var t=[],n=getComputedStyle(e),o=n[a(e,"transitionProperty")];if(!o||"none"===o)return t;o=o.split(i);for(var r=n[a(e,"transitionDuration")].split(i),s=n[a(e,"transitionDelay")].split(i),f=0,u=o.length;u>f;f++)("0s"!==r[f]||"0s"!==s[f])&&t.push(o[f]);return t},v=function(e){e.offsetHeight},h=function(e,t,n,o){e.style[t]=n,e.offsetHeight,e.style[t]=o},m=function(){x(e.slides.indexOf(this))},b=function(t,n){if(l){var o=(n||{index:e.slide()}).index+t;return o>-1&&o<e.slides.length&&e.slide(o,{preview:!0}),!1}},w=function(e){l&&y(e)},y=function(t){void 0===t&&(t={index:e.slide(),slide:e.slides[e.slide()]}),t.index<f?e.parent.scrollTop=0:t.slide.scrollIntoView(!0)},g=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return{node:t,height:t.offsetHeight};var n=document.createElement("header");n.className="bespoke-title";var o=document.createElement("h1");return o.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(o),{node:e.insertBefore(n,t),height:n.offsetHeight}},k=function(){var o,i,r=e.slides,s=e.parent,b=s.classList,w=r.length-1,y=e.slide(),k=y>0?r[0]:r[w],x=a(k,"transform"),E=s.querySelector(".bespoke-scale-parent"),q=1,L=0,C=!l;E?q=d(E):(i=c(k))&&(q=i),void 0!==n&&(r[0].removeEventListener("transitionend",n,!1),w>0&&r[w].removeEventListener("transitionend",n,!1),b.remove("bespoke-overview-from")),t.title&&(o=g(s)),C&&(e.slide(y,{preview:!0}),b.add("bespoke-overview"),l=!0,t.numbers&&b.add("bespoke-overview-counter"),b.add("bespoke-overview-to"),L=w>0?p(k).length:p(k).indexOf("transform")>=0?1:0,s.style.overflowY="scroll",s.style.scrollBehavior="smooth"),o&&(o.node.style.width=s.clientWidth+"px");var z=u/q,T=s.clientWidth/q,B=s.clientHeight/q,O=s.offsetWidth-s.clientWidth,N=z*(f+1),H=k.offsetWidth,K=k.offsetHeight,W=(T-H)/2,S=(B-K)/2,j=(T-N)/f/H,I=z/j,M=H+I,A=K+I,D=o?o.height/q:0,F=i?0:O*j,R=0,V=0;if(W+=(H-H*j)/2,S+=(K-K*j)/2,r.forEach(function(e){var t=z-W-F+V*M*j,n=z-S+R*A*j+D;-1!==t.toString().indexOf("e-")&&(t=0),-1!==n.toString().indexOf("e-")&&(n=0),e.style[x]="translate("+t+"px, "+n+"px) scale("+j+")",e.style.marginBottom=R*f+V===w?I+"px":"0%",e.addEventListener("click",m,!1),V===f-1?(R+=1,V=0):V+=1}),C)if(L>0){var Y=L;k.addEventListener("transitionend",n=function(e){e.target===this&&0===(Y-=1)&&(this.removeEventListener("transitionend",n,!1),n=void 0,b.remove("bespoke-overview-to"),"webkitAppearance"in s.style&&s.scrollHeight>s.offsetHeight&&h(s,"overflowY","auto","scroll"),y>=f&&r[y].scrollIntoView(!0))},!1)}else r.forEach(v),b.remove("bespoke-overview-to"),y>=f&&r[y].scrollIntoView(!0);else y>=f&&r[y].scrollIntoView(!0)},x=function(o){e.slide("number"==typeof o?o:e.slide());var i,s=e.slides,f=e.parent,u=f.classList,b=s.length-1,w=e.slide()>0?s[0]:s[b],y=a(w,"transform"),g=a(w,"transition"),k=f.querySelector(".bespoke-scale-parent");k?i=d(k):(i=c(w))||(i=1),void 0!==n&&(s[0].removeEventListener("transitionend",n,!1),b>0&&s[b].removeEventListener("transitionend",n,!1),u.remove("bespoke-overview-to"));var x=f.scrollTop/i,E="webkitAppearance"in f.style?0:void 0;f.style.scrollBehavior="",f.style.overflowY="",s.forEach(function(e){if(0===E){var t=e.getBoundingClientRect().left;e.style.marginBottom="",E=e.getBoundingClientRect().left-t}else e.style.marginBottom="";e.removeEventListener("click",m,!1)}),(x||E)&&s.forEach(function(e){var t=e.style[y].match(r);t&&(e.style[y]="translate("+(parseFloat(t[1])-(E||0))+"px, "+(parseFloat(t[2])-x)+"px) scale("+t[3]+")",h(e,g,"none",""))}),f.scrollTop>0&&(f.scrollTop=0),u.remove("bespoke-overview"),l=!1,t.numbers&&u.remove("bespoke-overview-counter"),u.add("bespoke-overview-from");var q=b>0?p(w).length:p(w).indexOf("transform")>=0?1:0;if(s.forEach(function(e){e.style[y]=""}),q>0){var L=q;w.addEventListener("transitionend",n=function(e){e.target===this&&0===(L-=1)&&(this.removeEventListener("transitionend",n,!1),n=void 0,u.remove("bespoke-overview-from"))},!1)}else s.forEach(v),u.remove("bespoke-overview-from")},E=function(){l?x():k()},q=function(){l&&k()},L=function(e){switch(e.which){case o.o:e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||E();break;case o.enter:!l||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||x();break;case o.up:if(l)return b(-f);break;case o.down:if(l)return b(f)}};window.addEventListener("load",function C(){window.removeEventListener("load",C,!1),e.parent.scrollTop>0&&(e.parent.scrollTop=0),t.autostart&&setTimeout(k,0)},!1),window.addEventListener("resize",q,!1),document.addEventListener("keydown",L,!1),e.on("activate",w),e.on("next",b.bind(null,1)),e.on("prev",b.bind(null,-1))}}},{"insert-css":2}],2:[function(e,t,n){var o={};t.exports=function(e,t){if(!o[e]){o[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}]},{},[1])(1)});var deck=bespoke.from(".deck",[bespoke.plugins.classes(),bespoke.plugins.keys(),bespoke.plugins.touch(),bespoke.plugins.scale(),bespoke.plugins.overview()]);window.deck=deck;