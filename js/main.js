document.addEventListener("DOMContentLoaded",function(){let s,i,c,l;let t=false;const e=e=>{if(e){s=document.getElementById("site-name").offsetWidth;const n=document.querySelectorAll("#menus .menus_item");i=0;n.length&&n.forEach(e=>{i+=e.offsetWidth});const o=document.querySelector("#search-button");c=o?o.offsetWidth:0;l=document.getElementById("nav")}let t="";if(window.innerWidth<768)t=true;else t=s+i+c>l.offsetWidth-120;if(t){l.classList.add("hide-menu")}else{l.classList.remove("hide-menu")}};const n=()=>{e(true);l.classList.add("show")};const o={open:()=>{btf.sidebarPaddingR();document.body.style.overflow="hidden";btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s");document.getElementById("sidebar-menus").classList.add("open");t=true},close:()=>{const e=document.body;e.style.overflow="";e.style.paddingRight="";btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s");document.getElementById("sidebar-menus").classList.remove("open");t=false}};const a=()=>{const e=document.getElementById("scroll-down");e&&e.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)})};const d=function(){const e=GLOBAL_CONFIG.highlight;if(!e)return;const t=e.highlightCopy;const n=e.highlightLang;const o=GLOBAL_CONFIG_SITE.isHighlightShrink;const c=e.highlightHeightLimit;const l=t||n||o!==undefined;const s=e.plugin==="highlighjs"?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!((l||c)&&s.length))return;const i=e.plugin==="prismjs";let a="";let d="";const r=o===true?"closed":"";if(o!==undefined){a=`<i class="fas fa-angle-down expand ${r}"></i>`}if(t){d='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'}const u=(e,t)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){document.execCommand("copy");if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.success)}else{const n=t.previousElementSibling;n.innerText=GLOBAL_CONFIG.copy.success;n.style.opacity=1;setTimeout(()=>{n.style.opacity=0},700)}}else{if(GLOBAL_CONFIG.Snackbar!==undefined){btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport)}else{t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport}}};const f=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection();const o=document.createRange();if(i)o.selectNodeContents(t.querySelectorAll("pre code")[0]);else o.selectNodeContents(t.querySelectorAll("table .code pre")[0]);n.removeAllRanges();n.addRange(o);const s=n.toString();u(s,e.lastChild);n.removeAllRanges();t.classList.remove("copy-true")};const m=e=>{const t=[...e.parentNode.children].slice(1);e.firstChild.classList.toggle("closed");if(btf.isHidden(t[t.length-1])){t.forEach(e=>{e.style.display="block"})}else{t.forEach(e=>{e.style.display="none"})}};const h=function(e){const t=e.target.classList;if(t.contains("expand"))m(this);else if(t.contains("copy-button"))f(this)};const g=function(){this.classList.toggle("expand-done")};function p(e,t,n){const o=document.createDocumentFragment();if(l){const s=document.createElement("div");s.className=`highlight-tools ${r}`;s.innerHTML=a+e+d;s.addEventListener("click",h);o.appendChild(s)}if(c&&t.offsetHeight>c+30){const i=document.createElement("div");i.className="code-expand-btn";i.innerHTML='<i class="fas fa-angle-double-down"></i>';i.addEventListener("click",g);o.appendChild(i)}if(n==="hl"){t.insertBefore(o,t.firstChild)}else{t.parentNode.insertBefore(o,t)}}if(n){if(i){s.forEach(function(e){const t=e.getAttribute("data-language")?e.getAttribute("data-language"):"Code";const n=`<div class="code-lang">${t}</div>`;btf.wrap(e,"figure",{class:"highlight"});p(n,e)})}else{s.forEach(function(e){let t=e.getAttribute("class").split(" ")[1];if(t==="plain"||t===undefined)t="Code";const n=`<div class="code-lang">${t}</div>`;p(n,e,"hl")})}}else{if(i){s.forEach(function(e){btf.wrap(e,"figure",{class:"highlight"});p("",e)})}else{s.forEach(function(e){p("",e,"hl")})}}};function r(){document.querySelectorAll("#article-container imgs").forEach(function(e){const t=e.parentNode;const n=e.title||e.alt;if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="imgs-alt is-center";o.textContent=n;t.insertBefore(o,e.nextSibling)}})}const u=()=>{btf.loadLightbox(document.querySelectorAll("#article-container imgs:not(.no-lightbox)"))};const f=function(e){e.forEach(e=>{const t=e.querySelectorAll("imgs");t.forEach(e=>{const t=e.getAttribute("data-lazy-src");if(t)e.src=t;btf.wrap(e,"div",{class:"fj-gallery-item"})})});if(window.fjGallery){setTimeout(()=>{btf.initJustifiedGallery(e)},100);return}const t=document.createElement("link");t.rel="stylesheet";t.href=GLOBAL_CONFIG.source.justifiedGallery.css;document.body.appendChild(t);getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(()=>{btf.initJustifiedGallery(e)})};const m=function(){const o=document.getElementById("rightside");const s=window.innerHeight+56;if(document.body.scrollHeight<=s){o.style.cssText="opacity: 1; transform: translateX(-58px)";return}function i(e){const t=e>n;n=e;return t}let n=0;let c=true;const l=document.getElementById("page-header");const a=typeof chatBtnHide==="function";const d=typeof chatBtnShow==="function";window.scrollCollect=()=>{return btf.throttle(function(e){const t=window.scrollY||document.documentElement.scrollTop;const n=i(t);if(t>56){if(n){if(l.classList.contains("nav-visible"))l.classList.remove("nav-visible");if(d&&c===true){chatBtnHide();c=false}}else{if(!l.classList.contains("nav-visible"))l.classList.add("nav-visible");if(a&&c===false){chatBtnShow();c=true}}l.classList.add("nav-fixed");if(window.getComputedStyle(o).getPropertyValue("opacity")==="0"){o.style.cssText="opacity: 0.8; transform: translateX(-58px)"}}else{if(t===0){l.classList.remove("nav-fixed","nav-visible")}o.style.cssText="opacity: ''; transform: ''"}if(document.body.scrollHeight<=s){o.style.cssText="opacity: 0.8; transform: translateX(-58px)"}},200)()};window.addEventListener("scroll",scrollCollect)};const h=function(){const n=GLOBAL_CONFIG_SITE.isToc;const e=GLOBAL_CONFIG.isAnchor;const a=document.getElementById("article-container");if(!(a&&(n||e)))return;let c,l,t,d,r;if(n){const s=document.getElementById("card-toc");l=s.getElementsByClassName("toc-content")[0];c=l.querySelectorAll(".toc-link");const m=s.querySelector(".toc-percentage");r=l.classList.contains("is-expand");t=e=>{const t=a.clientHeight;const n=document.documentElement.clientHeight;const o=a.offsetTop;const s=t>n?t-n:document.documentElement.scrollHeight-n;const i=(e-o)/s;const c=Math.round(i*100);const l=c>100?100:c<=0?0:c;m.textContent=l};window.mobileToc={open:()=>{s.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{s.style.animation="toc-close .2s";setTimeout(()=>{s.style.cssText="opacity:''; animation: ''; right: ''"},100)}};l.addEventListener("click",e=>{e.preventDefault();const t=e.target.classList;if(t.contains("toc-content"))return;const n=t.contains("toc-link")?e.target:e.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300);if(window.innerWidth<900){window.mobileToc.close()}});d=e=>{const t=e.getBoundingClientRect().top;const n=l.scrollTop;if(t>document.documentElement.clientHeight-100){l.scrollTop=n+150}if(t<100){l.scrollTop=n-150}}}const u=a.querySelectorAll("h1,h2,h3,h4,h5,h6");let f="";const o=function(o){if(o===0){return false}let s="";let i="";u.forEach(function(e,t){if(o>btf.getEleTop(e)-80){const n=e.id;s=n?"#"+encodeURI(n):"";i=t}});if(f===i)return;if(e)btf.updateAnchor(s);f=i;if(n){l.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")});if(s===""){return}const t=c[i];t.classList.add("active");setTimeout(()=>{d(t)},0);if(r)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode){if(e.matches("li"))e.classList.add("active")}}};window.tocScrollFn=function(){return btf.throttle(function(){const e=window.scrollY||document.documentElement.scrollTop;n&&t(e);o(e)},100)()};window.addEventListener("scroll",tocScrollFn)};const g={switchReadMode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button";t.className="fas fa-sign-out-alt exit-readmode";e.appendChild(t);function n(){e.classList.remove("read-mode");t.remove();t.removeEventListener("click",n)}t.addEventListener("click",n)},switchDarkMode:()=>{const e=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";if(e==="light"){activateDarkMode();saveToLocal.set("theme","dark",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode();saveToLocal.set("theme","light",2);GLOBAL_CONFIG.Snackbar!==undefined&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}typeof utterancesTheme==="function"&&utterancesTheme();typeof changeGiscusTheme==="function"&&changeGiscusTheme();typeof FB==="object"&&window.loadFBComment();window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(()=>window.disqusReset(),200);typeof runMermaid==="function"&&window.runMermaid()},showOrHideBtn:e=>{const t=document.getElementById("rightside-config-hide").classList;t.toggle("show");if(e.classList.contains("show")){t.add("status");setTimeout(()=>{t.remove("status")},300)}e.classList.toggle("show")},scrollToTop:()=>{btf.scrollToDest(0,500)},hideAsideBtn:()=>{const e=document.documentElement.classList;e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2);e.toggle("hide-aside")},runMobileToc:()=>{if(window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")==="0")window.mobileToc.open();else window.mobileToc.close()}};document.getElementById("rightside").addEventListener("click",function(e){const t=e.target.id?e.target:e.target.parentNode;switch(t.id){case"go-up":g.scrollToTop();break;case"rightside_config":g.showOrHideBtn(t);break;case"mobile-toc-button":g.runMobileToc();break;case"readmode":g.switchReadMode();break;case"darkmode":g.switchDarkMode();break;case"hide-aside-btn":g.hideAsideBtn();break;default:break}});const p=()=>{document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("hide")})})};const y=()=>{const o=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{e.preventDefault();let t;const n=window.getSelection(0).toString();if(n.length>o.limitCount){t=n+"\n"+"\n"+"\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info}else{t=n}if(e.clipboardData){return e.clipboardData.setData("text",t)}else{return window.clipboardData.setData("text",t)}}};const b=()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime}};const L=()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.innerText=btf.diffDate(t,true)}};const E=()=>{const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");if(e.length){e.forEach(e=>{btf.wrap(e,"div",{class:"table-wrap"})})}};const w=function(){const e=document.querySelectorAll("#article-container .hide-button");if(e.length){e.forEach(function(e){e.addEventListener("click",function(e){const t=this;t.classList.add("open");const n=t.nextElementSibling.querySelectorAll(".fj-gallery");n.length&&btf.initJustifiedGallery(n)})})}};const v={clickFnOfTabs:function(){document.querySelectorAll("#article-container .tab > button").forEach(function(e){e.addEventListener("click",function(e){const t=this;const n=t.parentNode;if(!n.classList.contains("active")){const o=n.parentNode.nextElementSibling;const s=btf.siblings(n,".active")[0];s&&s.classList.remove("active");n.classList.add("active");const i=t.getAttribute("data-href").replace("#","");const c=[...o.children];c.forEach(e=>{if(e.id===i)e.classList.add("active");else e.classList.remove("active")});const l=o.querySelectorAll(`#${i} .fj-gallery`);if(l.length>0){btf.initJustifiedGallery(l)}}})})},backToTop:()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(e){e.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})})}};const A=function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");if(e.length){e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();const t=this;t.classList.toggle("expand");const n=t.parentNode.nextElementSibling;if(btf.isHidden(n)){n.style.display="block"}else{n.style.display="none"}})})}};const B=function(){let e=false;const t=document.querySelector("#comment-switch > .switch-btn");t&&t.addEventListener("click",function(){this.classList.toggle("move");document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(e){if(btf.isHidden(e)){e.style.cssText="display: block;animation: tabshow .5s"}else{e.style.cssText="display: none;animation: ''"}});if(!e&&typeof loadOtherComment==="function"){e=true;loadOtherComment()}})};const O=function(){const e=GLOBAL_CONFIG.noticeOutdate;const t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(t>=e.limitDay){const n=document.createElement("div");n.className="post-outdate-notice";n.textContent=e.messagePrev+" "+t+" "+e.messageNext;const o=document.getElementById("article-container");if(e.position==="top"){o.insertBefore(n,o.firstChild)}else{o.appendChild(n)}}};const G=()=>{window.lazyLoadInstance=new LazyLoad({elements_selector:"imgs",threshold:0,data_src:"lazy-src"})};const S=function(e){e.forEach(e=>{const t=e;const n=t.getAttribute("datetime");t.innerText=btf.diffDate(n,true);t.style.display="inline"})};const T=function(){window.addEventListener("resize",()=>{e(false);btf.isHidden(document.getElementById("toggle-menu"))&&t&&o.close()});document.getElementById("menu-mask").addEventListener("click",e=>{o.close()});p();GLOBAL_CONFIG.islazyload&&G();GLOBAL_CONFIG.copyright!==undefined&&y()};window.refreshFn=function(){n();if(GLOBAL_CONFIG_SITE.isPost){GLOBAL_CONFIG.noticeOutdate!==undefined&&O();GLOBAL_CONFIG.relativeDate.post&&S(document.querySelectorAll("#post-meta time"))}else{GLOBAL_CONFIG.relativeDate.homepage&&S(document.querySelectorAll("#recent-posts time"));GLOBAL_CONFIG.runtime&&b();L();A()}h();GLOBAL_CONFIG_SITE.isHome&&a();d();GLOBAL_CONFIG.isPhotoFigcaption&&r();m();const e=document.querySelectorAll("#article-container .fj-gallery");e.length&&f(e);u();E();w();v.clickFnOfTabs();v.backToTop();B();document.getElementById("toggle-menu").addEventListener("click",()=>{o.open()})};refreshFn();T()});