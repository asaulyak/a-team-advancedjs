var k=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var E=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var y=(e,t,s)=>(k(e,t,"access private method"),s);import{a as g,i as J,c as K,b as U,t as W,P as V}from"./vendor-e8a208bf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function X(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),o=a=>{(a.target.classList.contains("nav__link")||a.target.classList.contains("mobile-backdrop"))&&r()},r=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",r),e.addEventListener("click",o),s.addEventListener("click",a=>{r()}),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}const m="https://your-energy.b.goit.study/api";function w(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:i??0}}function M(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return g.get(`${m}/exercises?${t}`).then(s=>w(s))}function O(e){return g.get(`${m}/exercises/${e}`).then(t=>t.data)}function Z(){return g.get(`${m}/quote`).then(e=>e.data)}function ee(e){return g.post(`${m}/subscription`,e).then(t=>t.data)}function H({category:e,page:t=1,limit:s=12}){return g.get(`${m}/filters?filter=${e}&page=${t}&limit=${s}`).then(i=>w(i))}function P({category:e,subCategory:t,keyword:s="pull",page:i=1,limit:o=10}){return g.get(`${m}/exercises?${[e]}=${t}&keyword=${s}&page=${i}&limit=${o}`).then(r=>w(r))}function C(e="Muscles",t=1,s=12){return g.get(`${m}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(i=>w(i))}var b,v,x;class te{constructor(){$(this,v);$(this,b,"your-energy")}set(t,s){localStorage.setItem(y(this,v,x).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(y(this,v,x).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(y(this,v,x).call(this,t))}clear(){localStorage.clear()}}b=new WeakMap,v=new WeakSet,x=function(t){return`${E(this,b)}.${t}`};const n=new te,j=document.querySelector(".filter_panel"),se='<h2 class="exercises-title">Exercises</h2>',ie=`
<div class="category-elements">
  <div class="search-form visually-hidden">
    <input class="form-input" type="text" placeholder="Search" />
    <button class="search-button"type="button"aria-label="search button">
      <img class="search-icon" src="../image/icons_filter_panels/search.svg" alt="icon">
      <img class="close-icon visually-hidden" src="../image/icons_filter_panels/x.svg" alt="icon">
    </button>
  </div>
  <ul class="category-list_buttons">
    <li><button class="category-button "type="button" id="Muscles"aria-label="category button">Muscles</button></li>
    <li><button class="category-button " type="button" id="Body parts"aria-label=" category button">Body parts</button></li>
    <li><button class="category-button "type="button"id="Equipment"aria-label="category button">Equipment</button>
    </li>
  </ul>
</div>`;function oe(){if(!j)return;j.insertAdjacentHTML("afterbegin",`${se}${ie}`);const e={form:document.querySelector(".search-form"),title:document.querySelector(".exercises-title"),list:document.querySelector(".category-list_buttons"),categoryButtons:document.querySelectorAll(".category-button"),input:document.querySelector(".form-input"),searchButton:document.querySelector(".search-button")},{title:t,list:s,input:i,searchButton:o,form:r,categoryButtons:a}=e;document.querySelector(".search-icon"),document.querySelector(".close-icon"),o.addEventListener("click",re);let c=n.get("filter")||"Muscles";a.forEach(l=>{l.id===c&&l.classList.add("selected")}),n.get("categori")?P({keyword:valueInput,category:StorageCategory,subCategory:n.get("category")}).then(({data:{results:l}})=>{}):c&&H({category:c}).then(({data:{results:l}})=>{const d="",u=document.querySelector(".categories-list");u.innerHTML=d}),s.addEventListener("click",ae),i.addEventListener("input",ce)}function re(){const e=document.querySelector(".form-input"),t=document.querySelector(".close-icon"),s=document.querySelector(".search-icon");e.value="",t.classList.add("visually-hidden"),s.classList.remove("visually-hidden")}function ae(e){const t=document.querySelectorAll(".category-button"),s=document.querySelector(".search-form");n.get("filter"),s.classList.remove("visually-hidden"),n.set("filter",e.target.id),n.remove("category"),H({category:e.target.id}).then(({data:{results:i}})=>{const o=markupCategories(i),r=document.querySelector(".categories-list");r.innerHTML=o,t.forEach(a=>a.classList.remove("selected")),e.target.classList.add("selected")})}function ce(e){e.preventDefault(),document.querySelector(".form-input");const t=document.querySelector(".close-icon"),s=document.querySelector(".search-icon"),i=e.target.value;i&&(t.classList.remove("visually-hidden"),s.classList.add("visually-hidden"));const o=n.get("filter")==="Muscles"?"muscles":n.get("filter")==="Body parts"?"bodypart":"equipment";i!==""&&P({keyword:i,category:o,subCategory:n.get("category")}).then(({data:r})=>{})}function ne(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function N(e,t,s="topRight",i=5e3){J.show({message:e,color:t,position:s,timeout:i})}function p(e){N(e,"red")}function le(e){N(e,"green")}const de=K({email:U().email().required()}),h="visually-hidden";function ue(e){e&&(e.style.animationPlayState="running",e.classList.remove(h))}function ge(e){e&&(e.style.animationPlayState="paused",e.classList.add(h))}const B=document.querySelector("#js-subscribe"),L=document.querySelector("#js-subscribe-spinner");async function me(e){e.preventDefault(),T(e.target);const t=new FormData(e.target);try{const s=await de.validate({email:t.get("email")}),i=await ee(s);le(i.message)}catch(s){p(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),T(e.target)},500)}}function fe(e){e.classList.add(h)}function pe(e){e.classList.remove(h)}function T(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(L.classList.contains(h)){t.disabled=!0,ue(L),fe(s);return}ge(L),pe(s),t.disabled=!1}function ve(){B&&B.addEventListener("submit",me)}const G=Object.freeze({hidden:"visually-hidden"}),he=e=>{e==null||e.classList.remove(G.hidden)},Q=e=>{e==null||e.classList.add(G.hidden)};function ye(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=W(()=>{window.scrollY>=100?he(e):Q(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function xe(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let i=!1;s.addEventListener("click",o=>be(o,e,t,i)),t.addEventListener("click",function(o){o.target===t&&q(e,t)}),document.addEventListener("keydown",function(o){o.key==="Escape"&&!e.classList.contains("visually-hidden")&&q(e,t)})}async function be(e,t,s,i){if(e.target.closest(".js-start-btn"))try{const o=e.target.closest(".js-start-btn").getAttribute("data-id"),r=await O(o),a=Le(r);Se(a),we(t,s),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>Ee(o,i)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>q(t,s))}catch{p("Information not found")}}function we(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function Se(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function $e(e){const t="#EEA10C",s="#F4F4F4",o=[];for(let a=0;a<5;a++){const c=a+1<=e?100:a<e?e%1*100:0,l=`
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
    `;o.push(l)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${o.join("")}`}function Le({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:o,target:r,description:a,rating:c,burnedCalories:l,time:d,popularity:u}){const f=Y(i);function Y(S){return S===null||!S?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${S}"`}const z=$e(c);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${f}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${o}</h2>
      <div class="modal-exercises-rating">${z}</div>

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
              <p class="modal-exercises-text">${u}</p>
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
`}function qe(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function ke(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function Ee(e,t){if(t=!t,t){const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=ke(),Me(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=qe(),Ce(e)}}async function Me(e){try{const t=n.get("exerciseData")||[];if(!t.find(i=>typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1)){const i=await O(e),o=JSON.stringify(i);t.push(o),n.set("exerciseData",t)}}catch{p("Error fetching or storing exercise data")}}async function Ce(e){try{if(!e){p("Invalid exerciseID");return}const t=n.get("exerciseData")||[],s=t.findIndex(i=>{try{return typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1}catch{return p("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),n.set("exerciseData",t))}catch{p("Error removing exercise from favorites")}}function q(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}function R({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:o}=t,r=(c,l)=>{const d=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let u="",f=["tui-more"];switch(l&&f.push("tui-is-disabled"),c){case"next":u=d,f.push("tui-more-right");break;case"prev":u=d;break;case"first":u=[d,d].join("");break;case"last":u=[d,d].join(""),f.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${c} ${f.join(" ")}">${u}</a>`};new V(e,{totalItems:o*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:c})=>r(c),disabledMoveButton:({type:c})=>r(c,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",c=>{s(c.page)})}async function je(){const e=document.getElementById("exerciseSection");if(!e)return;console.log(n.get("category"));const t=document.querySelector(".exercise-section"),s=e.querySelector("#exerciseList"),i=e.querySelector(".tui-pagination"),o=I(),r=await M(o);r.results.length?(F(s,r.results),R({container:i,data:r,onUpdate:async a=>{const c=await M(I(a));F(s,c.results)}})):(t.querySelector(".tui-pagination").classList.add("visually-hidden"),s.insertAdjacentHTML("beforeend",'<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>'))}function I(e=1,t=10){return{bodypart:void 0,muscles:n.get("category"),equipment:void 0,keyword:void 0,page:e,limit:t}}function F(e,t){e.innerHTML=Be(t)}function Be(e){return e.map(({_id:t,bodyPart:s,burnedCalories:i,time:o,name:r,rating:a,target:c})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${a}
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
                ${r}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${i} / ${o} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-no-overflow">${s}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${c}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}function Te(e){return e.map(({imgURL:t,filter:s,name:i})=>`<li class="categories-card-item" data-name="${i}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${i}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function A(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=Te(t))}function Ie(e){e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;const i=s.dataset.name;n.set("category",i),Q(e),je()})}async function Fe(e="Muscles",t=1){const s=document.querySelector(".categories-container");if(!s)return;Ie(s);const i=await C(e,t);A(s,i.results);const o=document.querySelector(".categories.tui-pagination");o&&R({container:o,data:i,onUpdate:async r=>{const a=await C(e,r);A(s,a.results)}})}const _="today",D="quote-of-the-day";async function Ae(){const e=document.querySelector("#quoteContainer");if(!e){console.log("Quote container not found");return}const t=!window.location.pathname.includes("favorites"),s=await _e(),i=Oe(s.quote,s.author,t);e.insertAdjacentHTML("afterbegin",i)}async function _e(){const e=n.get(_),t=De();let s=n.get(D);return(e!==t||!s)&&(s=await Z()),n.set(D,s),n.set(_,t),s}function De(){const e=new Date,t=e.getFullYear(),s=e.getMonth();return`${e.getDate()}/${s}/${t}`}function Oe(e,t,s){return`    <!-- quote -->
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
      </div>`}function He(){oe(),X(),ne(),ve(),Ae(),ye(),xe(),Fe()}He();
//# sourceMappingURL=main-aa1dde8c.js.map
