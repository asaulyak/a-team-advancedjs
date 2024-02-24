var M=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var C=(e,t,s)=>(M(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var b=(e,t,s)=>(M(e,t,"access private method"),s);import{a as h,P as V,i as ee,c as te,b as se,t as ie}from"./vendor-98b3cdf8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function oe(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),o=a=>{(a.target.classList.contains("nav__link")||a.target.classList.contains("mobile-backdrop"))&&r()},r=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",r),e.addEventListener("click",o),s.addEventListener("click",a=>{r()}),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}var q,v,w;class re{constructor(){$(this,v);$(this,q,"your-energy")}set(t,s){localStorage.setItem(b(this,v,w).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(b(this,v,w).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(b(this,v,w).call(this,t))}clear(){localStorage.clear()}}q=new WeakMap,v=new WeakSet,w=function(t){return`${C(this,q)}.${t}`};const n=new re,y="https://your-energy.b.goit.study/api";function _(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:i??0}}function I(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return h.get(`${y}/exercises?${t}`).then(s=>_(s))}function N(e){return h.get(`${y}/exercises/${e}`).then(t=>t.data)}function ae(){return h.get(`${y}/quote`).then(e=>e.data)}function ce(e){return h.post(`${y}/subscription`,e).then(t=>t.data)}function j(e="Muscles",t=1,s=12){return h.get(`${y}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(i=>_(i))}const G=Object.freeze({hidden:"visually-hidden"}),g=e=>{e==null||e.classList.remove(G.hidden)},u=e=>{e==null||e.classList.add(G.hidden)};function K({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:o}=t;if(o<2){u(e);return}const r=(c,l)=>{const d=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let f="",p=["tui-more"];switch(l&&p.push("tui-is-disabled"),c){case"next":f=d,p.push("tui-more-right");break;case"prev":f=d;break;case"first":f=[d,d].join("");break;case"last":f=[d,d].join(""),p.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${c} ${p.join(" ")}">${f}</a>`};g(e),new V(e,{totalItems:o*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:c})=>r(c),disabledMoveButton:({type:c})=>r(c,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",c=>{s(c.page)})}async function Q(){const e=document.getElementById("exerciseSection"),t=document.getElementById("categoriesSection");if(!e)return;u(t),g(e),g(document.querySelector(".search-form"));const s=e.querySelector("#exerciseList"),i=e.querySelector(".tui-pagination"),o=T(),r=await I(o);r.results.length?(ve(n.get("category")),B(s,r.results),K({container:i,data:r,onUpdate:async a=>{const c=await I(T(a));B(s,c.results)}})):(u(i),s.innerHTML='<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>')}function T(e=1,t=10){const s=n.get("filter"),i=n.get("category"),o=n.get("keyword");return{[{"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[s]]:i,keyword:o,page:e,limit:t}}function B(e,t){e.innerHTML=R(t)}function R(e,t){return e.map(({_id:s,bodyPart:i,burnedCalories:o,time:r,name:a,rating:c,target:l})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              ${t?`<div class="exercise-card-removeIcon" data-id="${s}">
                  <svg class="exercise-card-icon" width="14" height="13">
                    <use href="./image/icons.svg#icon-bin"></use>
                  </svg>
              </div>`:`<div class="exercise-card-rating">
                ${c}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-exercise-star"></use>
                </svg>
              </div>`}
            </div>
            <button
              class="exercise-card-button js-start-btn remove-button-formatting"
              data-id=${s}
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
                <div class="exercise-card-info-element-content-no-overflow">${o} / ${r} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-no-overflow">${i}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${l}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}function ne(e){return e.map(({imgURL:t,filter:s,name:i})=>`<li class="categories-card-item" data-name="${i}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${i}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function A(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=ne(t))}function le(){const e=document.querySelector(".categories-container");e&&e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;const i=s.dataset.name;n.set("category",i),n.remove("keyword"),u(e),xe(),Q()})}async function U(e=1){const t=n.get("filter"),s=document.querySelector(".categories-container");if(!s)return;g(s);const i=await j(t,e);A(s,i.results);const o=document.querySelector(".categories.tui-pagination");o&&K({container:o,data:i,onUpdate:async r=>{const a=await j(t,r);A(s,a.results)}})}const F=document.querySelector(".filter_panel"),de='<h2 class="exercises-title">Exercises</h2>',ue=`
<div class="category-elements">
  <form class="search-form visually-hidden">
    <input class="form-input" type="text" placeholder="Search"  />
    <button class="search-button" type="button" aria-label="search button">
    <svg class="search-icon" width="18" height="18">
      <use href="./image/icons.svg#icon-search"></use>
    </svg>
    <svg class="close-icon visually-hidden" width="18" height="18">
      <use href="./image/icons.svg#icon-close-search"></use>
    </svg>      
    </button>
  </form>
  <ul class="category-list_buttons">
    <li><button class="category-button" type="button" data-filter="Muscles" aria-label="category button">Muscles</button></li>
    <li><button class="category-button" type="button" data-filter="Body parts" aria-label=" category button">Body parts</button></li>
    <li><button class="category-button" type="button" data-filter="Equipment" aria-label="category button">Equipment</button>
    </li>
  </ul>
</div>`,me=document.getElementById("exerciseSection"),ge=document.getElementById("categoriesSection");function fe(){if(!F)return;F.insertAdjacentHTML("afterbegin",`${de}${ue}`),Y(n.get("filter")||"Muscles");const e={form:document.querySelector(".search-form"),title:document.querySelector(".exercises-title"),list:document.querySelector(".category-list_buttons"),categoryButtons:document.querySelectorAll(".category-button"),input:document.querySelector(".form-input"),searchButton:document.querySelector(".search-button")},{list:t,searchButton:s,form:i}=e;e.input.addEventListener("input",pe),s.addEventListener("click",he),t.addEventListener("click",ye),i.addEventListener("submit",be)}function pe(e){if(!e.target.value)return;const t={searchIcon:document.querySelector(".search-icon"),closeIcon:document.querySelector(".close-icon")};u(t.searchIcon),g(t.closeIcon)}function Y(e){const t=document.querySelectorAll(".category-button");Array.prototype.forEach.call(t,i=>i.classList.remove("active"));const s=Array.prototype.find.call(t,i=>i.dataset.filter===e);s==null||s.classList.add("active"),n.set("filter",e)}function ve(e){const t=e[0].toUpperCase()+e.slice(1),s=document.querySelector(".exercises-title");s.innerHTML=`Exersise / <span class="subtitle">${t}</span>`}function he(){const e=document.querySelector(".form-input"),t=document.querySelector(".close-icon"),s=document.querySelector(".search-icon");e.value="",t.classList.add("visually-hidden"),s.classList.remove("visually-hidden")}function ye(e){const t=e.target.dataset.filter,s=document.querySelector(".exercises-title");s.innerHTML="Exersise",Y(t),n.set("filter",t),U(),g(ge),u(me),u(document.querySelector(".search-form"))}function xe(){const e=document.querySelector(".search-form");e==null||e.classList.add("visually-hidden")}function be(e){e.preventDefault();const s=document.querySelector(".form-input").value;n.set("keyword",s),Q(),e.target.reset();const i={searchIcon:document.querySelector(".search-icon"),closeIcon:document.querySelector(".close-icon")};g(i.searchIcon),u(i.closeIcon)}function we(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function z(e,t,s="topRight",i=5e3){ee.show({message:e,color:t,position:s,timeout:i})}function m(e){z(e,"red")}function Se(e){z(e,"green")}const qe=te({email:se().email().required()}),x="visually-hidden";function Le(e){e&&(e.style.animationPlayState="running",e.classList.remove(x))}function $e(e){e&&(e.style.animationPlayState="paused",e.classList.add(x))}const D=document.querySelector("#js-subscribe"),k=document.querySelector("#js-subscribe-spinner");async function ke(e){e.preventDefault(),H(e.target);const t=new FormData(e.target);try{const s=await qe.validate({email:t.get("email")}),i=await ce(s);Se(i.message)}catch(s){m(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),H(e.target)},500)}}function Ee(e){e.classList.add(x)}function Me(e){e.classList.remove(x)}function H(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(k.classList.contains(x)){t.disabled=!0,Le(k),Ee(s);return}$e(k),Me(s),t.disabled=!1}function Ce(){D&&D.addEventListener("submit",ke)}function Ie(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=ie(()=>{window.scrollY>=100?g(e):u(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function je(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let i=!1;s.addEventListener("click",o=>Te(o,e,t,i)),t.addEventListener("click",function(o){o.target===t&&E(e,t)}),document.addEventListener("keydown",function(o){o.key==="Escape"&&!e.classList.contains("visually-hidden")&&E(e,t)})}async function Te(e,t,s,i){if(e.target.closest(".js-start-btn"))try{const o=e.target.closest(".js-start-btn").getAttribute("data-id"),r=await N(o),a=De(r);Ae(a),i=(n.get("exerciseData")||[]).includes(o);const c=document.querySelector(".modal-exercises-btn-favorites");c.innerHTML=i?W():J(),c.dataset.toggle=i?"remove":"add",Be(t,s),c.addEventListener("click",d=>He(o,d.target.dataset.toggle)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>E(t,s))}catch{m("Information not found")}}function Be(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function Ae(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function Fe(e){const t="#EEA10C",s="#F4F4F4",o=[];for(let a=0;a<5;a++){const c=a+1<=e?100:a<e?e%1*100:0,l=`
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${a}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${c}%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${c+1}%" style="stop-color:${s};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${a})"
          fill-opacity="1"
        />
      </svg>
    `;o.push(l)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${o.join("")}`}function De({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:o,target:r,description:a,rating:c,burnedCalories:l,time:d,popularity:f}){const p=X(i);function X(L){return L===null||!L?`srcset = "./image/modal-coming-soon.jpg"
      src = "./image/modal-coming-soon.jpg"`:`src="${L}"`}const Z=Fe(c);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${p}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${o}</h2>
      <div class="modal-exercises-rating">${Z}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${r}</p>
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
              <p class="modal-exercises-text">${f}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${l}/${d}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${a}</p>
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
`}function J(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function W(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function He(e,t){if(t==="add"){const s=document.querySelector(".modal-exercises-btn-favorites");s.dataset.toggle="remove",s.innerHTML=W(),Pe(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.dataset.toggle="add",s.innerHTML=J(),Oe(e)}}async function Pe(e){try{if(!e){m("Invalid exerciseID");return}const t=n.get("exerciseData")||[];if(t.includes(e)){m("Already added");return}t.push(e),n.set("exerciseData",t)}catch{m("Error fetching or storing exercise data")}}async function Oe(e){try{if(!e){m("Invalid exerciseID");return}const t=(n.get("exerciseData")||[]).filter(s=>s!==e);n.set("exerciseData",t)}catch{m("Error removing exercise from favorites")}}function E(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}const P="today",O="quote-of-the-day";async function _e(){const e=document.querySelector("#quoteContainer");if(!e)return;const t=!window.location.pathname.includes("favorites"),s=await Ne(),i=Ke(s.quote,s.author,t);e.insertAdjacentHTML("afterbegin",i)}async function Ne(){const e=n.get(P)??"";let t=n.get(O)??"";const s=Ge();if(e!==s||!t)try{t=await ae(),n.set(O,t),n.set(P,s)}catch(i){m(i.message)}return t}function Ge(){const e=new Date(Date.now()),t=e.getFullYear(),s=e.getMonth();return`${e.getDate()}/${s}/${t}`}function Ke(e,t,s){return`    <!-- quote -->
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
      </div>`}function Qe(){const e=document.querySelector(".favorites-title"),t=document.querySelector("#favcardsContainer");if(!e)return;Re(),S(document.querySelector(".fav-desk-wrapper"));const s=n.get("exerciseData");let i=[];s?s.map(a=>{i.push(a),o(i)}):S(document.querySelector(".fav-desk-wrapper"));async function o(a){const c=await Promise.all(a.map(l=>N(l)));r(c)}function r(a){t.innerHTML=a?R(a,!0):S(document.querySelector("fav-desk-wrapper"))}}function S(e){e.insertAdjacentHTML("beforeend",`<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`)}function Re(){const e=document.querySelector(".favcards-container");e&&e.addEventListener("click",t=>{if(!t.target.classList.contains("exercise-card-removeIcon"))return;const s=t.target,i=s.closest(".exercise-card"),o=s.dataset.id;if(!o)return;let r=n.get("exerciseData")||[];r=r.filter(a=>a!==o),n.set("exerciseData",r),i==null||i.remove(),r.length||S(document.querySelector(".fav-desk-wrapper"))})}function Ue(){fe(),oe(),we(),Ce(),_e(),Ie(),je(),le(),U(),Qe()}Ue();
//# sourceMappingURL=main-8742b8fe.js.map
