(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const n=o.classList.toggle("is-hidden");t.classList.toggle("is-hidden"),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};document.querySelectorAll(".mobile-navigation__link").forEach((t=>t.addEventListener("click",(t=>{e.classList.remove("is-open"),o.classList.toggle("is-hidden"),bodyScrollLock.enableBodyScroll(document.body)})))),o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 1024px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body))}))})();const e=document.querySelector(".gallery__carousel");let o,t,n=!1;e.addEventListener("mousedown",(i=>{n=!0,e.classList.add("active"),o=i.pageX-e.offsetLeft,t=e.scrollLeft})),e.addEventListener("mouseleave",(o=>{n=!1,e.classList.remove("active")})),e.addEventListener("mouseup",(o=>{n=!1,e.classList.remove("active")})),e.addEventListener("mousemove",(i=>{if(!n)return;i.preventDefault();const r=3*(i.pageX-e.offsetLeft-o);e.scrollLeft=t-r}));var i,r,c={};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i="undefined"!=typeof self?self:void 0,r=function(e){e.addBackToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.backgroundColor,t=void 0===o?"#000":o,n=e.cornerOffset,i=void 0===n?20:n,r=e.diameter,c=void 0===r?56:r,d=e.ease,s=void 0===d?F:d,a=e.id,l=void 0===a?"back-to-top":a,u=e.innerHTML,m=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,p=e.onClickScrollTo,f=void 0===p?0:p,v=e.scrollContainer,b=void 0===v?document.body:v,y=e.scrollDuration,h=void 0===y?100:y,g=e.showWhenScrollTopIs,L=void 0===g?1:g,x=e.size,k=void 0===x?c:x,w=e.textColor,S=void 0===w?"#fff":w,E=e.zIndex,T=void 0===E?1:E,M=b===document.body,C=M&&document.documentElement;A();var z=_(),B=!0,q=M?window:b;function j(){H()>=L?N():D()}function N(){B&&(z.className="",B=!1)}function D(){B||(z.className="hidden",B=!0)}function _(){var e=document.createElement("div");return e.id=l,e.className="hidden",e.innerHTML=m,e.addEventListener("click",(function(e){e.preventDefault(),I()})),document.body.appendChild(e),e}function A(){var e=Math.round(.43*k),o=Math.round(.29*k),n="#"+l+"{background:"+t+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+S+";cursor:pointer;display:block;height:"+k+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+k+"px;z-index:"+T+"}#"+l+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+o+"px auto 0;width:"+e+"px}#"+l+".hidden{bottom:-"+k+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",r)}function I(){var e="function"==typeof f?f():f,o=window,t=o.performance,n=o.requestAnimationFrame;if(h<=0||void 0===t||void 0===n)return X(e);var i=t.now(),r=H(),c=r-e;n((function e(o){var t=Math.min((o-i)/h,1);X(r-Math.round(s(t)*c)),t<1&&n(e)}))}function H(){return b.scrollTop||C&&document.documentElement.scrollTop||0}function X(e){b.scrollTop=e,C&&(document.documentElement.scrollTop=e)}function F(e){return.5*(1-Math.cos(Math.PI*e))}q.addEventListener("scroll",j),j()}},"function"==typeof define&&define.amd?define(["exports"],r):"object"===d(c)&&"string"!=typeof c.nodeName?r(c):r(i.commonJsStrict={}),(0,c.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#99823D"});
//# sourceMappingURL=index.04af213a.js.map
