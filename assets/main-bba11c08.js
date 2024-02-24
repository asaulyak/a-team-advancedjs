var k=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var q=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var x=(e,t,s)=>(k(e,t,"access private method"),s);import{i as Y,c as z,a as J,b as p,t as K,P as R}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();function U(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),r=o=>{(o.target.classList.contains("nav__link")||o.target.classList.contains("mobile-backdrop"))&&a()},a=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",a),e.addEventListener("click",r),s.addEventListener("click",o=>{a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function W(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function O(e,t,s="topRight",i=5e3){Y.show({message:e,color:t,position:s,timeout:i})}function m(e){O(e,"red")}function X(e){O(e,"green")}const Z=z({email:J().email().required()}),v="https://your-energy.b.goit.study/api";function D(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:i??0}}function E(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return p.get(`${v}/exercises?${t}`).then(s=>D(s))}function P(e){return p.get(`${v}/exercises/${e}`).then(t=>t.data)}function V(){return p.get(`${v}/quote`).then(e=>e.data)}function ee(e){return p.post(`${v}/subscription`,e).then(t=>t.data)}function M(e="Muscles",t=1,s=12){return p.get(`${v}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(i=>D(i))}const h="visually-hidden";function te(e){e&&(e.style.animationPlayState="running",e.classList.remove(h))}function se(e){e&&(e.style.animationPlayState="paused",e.classList.add(h))}const j=document.querySelector("#js-subscribe"),L=document.querySelector("#js-subscribe-spinner");async function ie(e){e.preventDefault(),C(e.target);const t=new FormData(e.target);try{const s=await Z.validate({email:t.get("email")}),i=await ee(s);X(i.message)}catch(s){m(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),C(e.target)},500)}}function re(e){e.classList.add(h)}function ae(e){e.classList.remove(h)}function C(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(L.classList.contains(h)){t.disabled=!0,te(L),re(s);return}se(L),ae(s),t.disabled=!1}function oe(){j&&j.addEventListener("submit",ie)}const H=Object.freeze({hidden:"visually-hidden"}),ne=e=>{e==null||e.classList.remove(H.hidden)},_=e=>{e==null||e.classList.add(H.hidden)};function ce(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=K(()=>{window.scrollY>=100?ne(e):_(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}var y,f,b;class le{constructor(){$(this,f);$(this,y,"your-energy")}set(t,s){localStorage.setItem(x(this,f,b).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(x(this,f,b).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(x(this,f,b).call(this,t))}clear(){localStorage.clear()}}y=new WeakMap,f=new WeakSet,b=function(t){return`${q(this,y)}.${t}`};const c=new le;function de(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let i=!1;s.addEventListener("click",r=>ue(r,e,t,i)),t.addEventListener("click",function(r){r.target===t&&S(e,t)}),document.addEventListener("keydown",function(r){r.key==="Escape"&&!e.classList.contains("visually-hidden")&&S(e,t)})}async function ue(e,t,s,i){if(e.target.closest(".js-start-btn"))try{const r=e.target.closest(".js-start-btn").getAttribute("data-id"),a=await P(r),o=pe(a);me(o),ge(t,s),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>xe(r,i)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>S(t,s))}catch{m("Information not found")}}function ge(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function me(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function fe(e){const t="#EEA10C",s="#F4F4F4",r=[];for(let o=0;o<5;o++){const n=o+1<=e?100:o<e?e%1*100:0,u=`
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${o}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${n}%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${n+1}%" style="stop-color:${s};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${o})"
          fill-opacity="1"
        />
      </svg>
    `;r.push(u)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r.join("")}`}function pe({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:a,description:o,rating:n,burnedCalories:u,time:l,popularity:d}){const g=G(i);function G(w){return w===null||!w?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${w}"`}const Q=fe(n);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${g}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${r}</h2>
      <div class="modal-exercises-rating">${Q}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${a}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Body Part</h3>
              <p class="modal-exercises-text">${t}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Equipment</h3>
              <p class="modal-exercises-text">${s}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Popular</h3>
              <p class="modal-exercises-text">${d}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${u}/${l}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${o}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises-btn-container">
  <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites-icon">
      <use href="./image/icons.svg#icon-favorites"></use>
      </svg>
    </button>
  <button class="modal-exercises-btn-rating modal-exercises-btn" type="button" data-id="${e}">Give a rating</button>
</div>
`}function ve(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function he(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function xe(e,t){if(t=!t,t){const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=he(),be(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=ve(),ye(e)}}async function be(e){try{const t=c.get("exerciseData")||[];if(!t.find(i=>typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1)){const i=await P(e),r=JSON.stringify(i);t.push(r),c.set("exerciseData",t)}}catch{m("Error fetching or storing exercise data")}}async function ye(e){try{if(!e){m("Invalid exerciseID");return}const t=c.get("exerciseData")||[],s=t.findIndex(i=>{try{return typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1}catch{return m("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),c.set("exerciseData",t))}catch{m("Error removing exercise from favorites")}}function S(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}function N({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:r}=t,a=(n,u)=>{const l=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let d="",g=["tui-more"];switch(u&&g.push("tui-is-disabled"),n){case"next":d=l,g.push("tui-more-right");break;case"prev":d=l;break;case"first":d=[l,l].join("");break;case"last":d=[l,l].join(""),g.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${n} ${g.join(" ")}">${d}</a>`};new R(e,{totalItems:r*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:n})=>a(n),disabledMoveButton:({type:n})=>a(n,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",n=>{s(n.page)})}async function we(){const e=document.getElementById("exerciseSection");if(!e)return;console.log(c.get("category"));const t=document.querySelector(".exercise-section"),s=e.querySelector("#exerciseList"),i=e.querySelector(".tui-pagination"),r=T(),a=await E(r);a.results.length?(B(s,a.results),N({container:i,data:a,onUpdate:async o=>{const n=await E(T(o));B(s,n.results)}})):(t.querySelector(".tui-pagination").classList.add("visually-hidden"),s.insertAdjacentHTML("beforeend",'<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>'))}function T(e=1,t=10){return{bodypart:void 0,muscles:c.get("category"),equipment:void 0,keyword:void 0,page:e,limit:t}}function B(e,t){e.innerHTML=$e(t)}function $e(e){return e.map(({_id:t,bodyPart:s,burnedCalories:i,time:r,name:a,rating:o,target:n})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${o}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-exercise-star"></use>
                </svg>
              </div>
            </div>
            <button
              class="exercise-card-button js-start-btn remove-button-formatting"
              data-id=${t}
            >
              start
              <svg class="exercise-card-icon" width="16" height="16">
                <use href="./image/icons.svg#icon-exercise-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="exercise-card-bottom">
            <div class="exercise-card-title">
              <svg class="exercise-card-icon" width="24" height="24">
                <use href="./image/icons.svg#icon-sport"></use>
              </svg>
              <p class="exercise-card-title-text">
                ${a}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${i} / ${r} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-no-overflow">${s}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${n}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}function Le(e){return e.map(({imgURL:t,filter:s,name:i})=>`<li class="categories-card-item" data-name="${i}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${i}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function F(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=Le(t))}function Se(e){e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;const i=s.dataset.name;c.set("category",i),_(e),we()})}async function ke(e="Muscles",t=1){const s=document.querySelector(".categories-container");if(!s)return;Se(s);const i=await M(e,t);F(s,i.results);const r=document.querySelector(".categories.tui-pagination");r&&N({container:r,data:i,onUpdate:async a=>{const o=await M(e,a);F(s,o.results)}})}const I="today",A="quote-of-the-day";async function qe(){const e=document.querySelector("#quoteContainer");if(!e){console.log("Quote container not found");return}const t=!window.location.pathname.includes("favorites"),s=await Ee(),i=je(s.quote,s.author,t);e.insertAdjacentHTML("afterbegin",i)}async function Ee(){const e=c.get(I),t=Me();let s=c.get(A);return(e!==t||!s)&&(s=await V()),c.set(A,s),c.set(I,t),s}function Me(){const e=new Date,t=e.getFullYear(),s=e.getMonth();return`${e.getDate()}/${s}/${t}`}function je(e,t,s){return`    <!-- quote -->
      <div class="daily-quote-container">
        <div class="icon-circle">
          <svg class="icon-svg" width="18" height="18">
            <use href="./image/icons.svg#icon-pedastrian"></use>
          </svg>
        </div>

        <div class="quote-thumb">
          <div class="quote-tittle-box">
            <h3 id="quote" class="daily-quote-title">Quote of the day</h3>
            <svg class="commas-svg">
              <use href="./image/icons.svg#icon-inverted-commas"></use>
            </svg>
          </div>
          <div class="quote-wrapper">
          <blockquote class="blockquote" cite="https://your-energy.b.goit.study/api/quote">
          <p
            class="quote-text">${e}
          </p>
          <footer class="quote-author">${t} </footer>
        </blockquote></div>
        </div>
      </div>
      <!-- image -->
      <div class="image-container">
        <picture>
          <source
            srcset="
              ${s?"./image/exercise/exercise-image-desktop.webp":"./image/favorites/img-desktop.webp"}   1x,
              ${s?"./image/exercise/exercise-image-desktop@2x.webp":"./image/favorites/img-desktop@2x.webp"} 2x
            "
            media="(min-width: 1440px)"
            type="image/webp"
          />
          <source
            srcset="
              ${s?"./image/exercise/exercise-image-desktop.jpg":"./image/favorites/img-desktop.jpg"}   1x,
              ${s?"./image/exercise/exercise-image-desktop@2x.jpg":"./image/favorites/img-desktop@2x.jpg"} 2x
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${s?"./image/exercise/exercise-image-tablet.webp":"./image/favorites/img-tab.webp"}   1x,
              ${s?"./image/exercise/exercise-image-tablet@2x.webp":"./image/favorites/img-tab@2x.webp"} 2x
            "
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcset="
              ${s?"./image/exercise/exercise-image-tablet.jpg":"./image/favorites/img-tab.jpg"}   1x,
              ${s?"./image/exercise/exercise-image-tablet@2x.jpg":"./image/favorites/img-tab@2x.jpg"} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
            ${s?"./image/exercise/exercise-image-mobile.webp":"./image/favorites/img-mob.webp"}   1x,
              ${s?"./image/exercise/exercise-image-mobile@2x.webp":"./image/favorites/img-mob@2x.webp"} 2x
            "
            media="(min-width: 375px)"
            type="image/webp"
          />
          <source
            srcset="
              ${s?"./image/exercise/exercise-image-mobile.jpg":"./image/favorites/img-mob.jpg"}   1x,
              ${s?"./image/exercise/exercise-image-mobile@2x.jpg":"./image/favorites/img-mob@2x.jpg"} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            src="${s?"./image/exercise/exercise-image-mobile.jpg":"./image/favorites/img-mob.jpg"}"
            alt="beautiful women talking"
            loading="lazy"
          />
        </picture>
      </div>
      <!-- info -->
      <div class="info-card">
        <div class="icon-wrapper">
          <svg class="card-icon-svg" width="20" height="20">
            <use href="./image/icons.svg#icon-gym"></use>
          </svg>
        </div>
        <div class="info-card-thumb">
          <h3 class="card-title">110 min</h3>
          <h4 class="card-subtitle">Daily norm of sports</h4>
          <p class="card-text ${!s&&"visually-hidden"}">
            The World Health Organization recommends at least 150 minutes of
            moderate-intensity aerobic physical activity throughout the week for
            adults aged 18-64. However, what happens if we adjust that number to
            110 minutes every day? While it might seem like a high number to
            hit, dedicating 110 minutes daily to sporting activities may offer
            unparalleled benefits to physical health, mental well-being, and
            overall quality of life.
          </p>
        </div>
      </div>`}function Ce(){U(),W(),oe(),qe(),ce(),de(),ke()}Ce();
//# sourceMappingURL=main-bba11c08.js.map
