!function(){var o,e,t,n;o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var n=e.classList.toggle("is-hidden");t.classList.toggle("is-hidden"),o.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},document.querySelectorAll(".mobile-navigation__link").forEach((function(t){return t.addEventListener("click",(function(t){o.classList.remove("is-open"),e.classList.toggle("is-hidden"),bodyScrollLock.enableBodyScroll(document.body)}))})),e.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(o.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))}));var i,r,c=document.querySelector(".gallery__carousel"),d=!1;c.addEventListener("mousedown",(function(o){d=!0,c.classList.add("active"),i=o.pageX-c.offsetLeft,r=c.scrollLeft})),c.addEventListener("mouseleave",(function(o){d=!1,c.classList.remove("active")})),c.addEventListener("mouseup",(function(o){d=!1,c.classList.remove("active")})),c.addEventListener("mousemove",(function(o){if(d){o.preventDefault();var e=3*(o.pageX-c.offsetLeft-i);c.scrollLeft=r-e}}));var a,s,l={};function u(o){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}a="undefined"!=typeof self?self:void 0,s=function(o){o.addBackToTop=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o.backgroundColor,t=void 0===e?"#000":e,n=o.cornerOffset,i=void 0===n?20:n,r=o.diameter,c=void 0===r?56:r,d=o.ease,a=void 0===d?F:d,s=o.id,l=void 0===s?"back-to-top":s,u=o.innerHTML,m=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,f=o.onClickScrollTo,p=void 0===f?0:f,v=o.scrollContainer,b=void 0===v?document.body:v,y=o.scrollDuration,h=void 0===y?100:y,g=o.showWhenScrollTopIs,L=void 0===g?1:g,x=o.size,k=void 0===x?c:x,w=o.textColor,S=void 0===w?"#fff":w,E=o.zIndex,T=void 0===E?1:E,M=b===document.body,C=M&&document.documentElement;A();var z=_(),B=!0,q=M?window:b;function j(){H()>=L?N():D()}function N(){B&&(z.className="",B=!1)}function D(){B||(z.className="hidden",B=!0)}function _(){var o=document.createElement("div");return o.id=l,o.className="hidden",o.innerHTML=m,o.addEventListener("click",(function(o){o.preventDefault(),I()})),document.body.appendChild(o),o}function A(){var o=Math.round(.43*k),e=Math.round(.29*k),n="#"+l+"{background:"+t+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+S+";cursor:pointer;display:block;height:"+k+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+k+"px;z-index:"+T+"}#"+l+" svg{display:block;fill:currentColor;height:"+o+"px;margin:"+e+"px auto 0;width:"+o+"px}#"+l+".hidden{bottom:-"+k+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",r)}function I(){var o="function"==typeof p?p():p,e=window,t=e.performance,n=e.requestAnimationFrame;if(h<=0||void 0===t||void 0===n)return X(o);var i=t.now(),r=H(),c=r-o;n((function o(e){var t=Math.min((e-i)/h,1);X(r-Math.round(a(t)*c)),t<1&&n(o)}))}function H(){return b.scrollTop||C&&document.documentElement.scrollTop||0}function X(o){b.scrollTop=o,C&&(document.documentElement.scrollTop=o)}function F(o){return.5*(1-Math.cos(Math.PI*o))}q.addEventListener("scroll",j),j()}},"function"==typeof define&&define.amd?define(["exports"],s):"object"===u(l)&&"string"!=typeof l.nodeName?s(l):s(a.commonJsStrict={}),(0,l.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#99823D"})}();
//# sourceMappingURL=index.06f45f82.js.map
