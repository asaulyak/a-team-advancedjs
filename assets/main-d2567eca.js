var P=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var R=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),B=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var S=(e,t,s)=>(P(e,t,"access private method"),s);import{a as p,P as pe,i as ye,c as J,b as D,t as be,d as xe}from"./vendor-95c1a11e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function we(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),a=o=>{(o.target.classList.contains("nav__link")||o.target.classList.contains("mobile-backdrop"))&&r()},r=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",r),e.addEventListener("click",a),s.addEventListener("click",o=>{r()}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}var C,h,q;class Se{constructor(){B(this,h);B(this,C,"your-energy")}set(t,s){localStorage.setItem(S(this,h,q).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(S(this,h,q).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(S(this,h,q).call(this,t))}clear(){localStorage.clear()}}C=new WeakMap,h=new WeakSet,q=function(t){return`${R(this,C)}.${t}`};const c=new Se,y="https://your-energy.b.goit.study/api";function W(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:i??0}}function O(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return p.get(`${y}/exercises?${t}`).then(s=>W(s))}function X(e){return p.get(`${y}/exercises/${e}`).then(t=>t.data)}function Le(){return p.get(`${y}/quote`).then(e=>e.data)}function qe(e){return p.post(`${y}/subscription`,e).then(t=>t.data)}function _(e="Muscles",t=1,s=12){return p.get(`${y}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(i=>W(i))}function $e(e,t){return p.patch(`${y}/exercises/${e}/rating`,t).then(s=>s.data)}const V=Object.freeze({hidden:"visually-hidden"}),m=e=>{e==null||e.classList.remove(V.hidden)},d=e=>{e==null||e.classList.add(V.hidden)},b="visually-hidden";function F(e){e&&(e.style.animationPlayState="running",e.classList.remove(b))}function H(e){e&&(e.style.animationPlayState="paused",e.classList.add(b))}const ke=document.querySelector(".body-loader-container");function x(){let e=document.querySelector(".home-loader-container");window.location.pathname.includes("favorites")&&(e=document.querySelector(".favorites-loader-container")),e&&(m(e),F(e.children[0]))}function w(){let e=document.querySelector(".home-loader-container");window.location.pathname.includes("favorites")&&(e=document.querySelector(".favorites-loader-container")),e&&setTimeout(()=>{d(e),H(e.children[0])},200)}function Ee(){window.addEventListener("load",ee)}function ee(){setTimeout(()=>{w(),d(ke)},500),window.removeEventListener("load",ee)}function te({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:a}=t;if(a<2){d(e);return}const r=(n,l)=>{const g=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let f="",v=["tui-more"];switch(l&&v.push("tui-is-disabled"),n){case"next":f=g,v.push("tui-more-right");break;case"prev":f=g;break;case"first":f=[g,g].join("");break;case"last":f=[g,g].join(""),v.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${n} ${v.join(" ")}" aria-label="pagination">${f}</a>`};m(e),new pe(e,{totalItems:a*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:n})=>r(n),disabledMoveButton:({type:n})=>r(n,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",n=>{x(),s(n.page),w()})}async function se(){const e=document.getElementById("exerciseSection"),t=document.getElementById("categoriesSection");if(!e)return;d(t),m(e),m(document.querySelector(".search-form"));const s=e.querySelector("#exerciseList"),i=e.querySelector(".tui-pagination"),a=K(),r=await O(a);r.results.length?(Fe(c.get("category")),N(s,r.results),te({container:i,data:r,onUpdate:async o=>{const n=await O(K(o));N(s,n.results)}})):(d(i),s.innerHTML='<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>'),w()}function K(e=1,t=10){const s=c.get("filter"),i=c.get("category"),a=c.get("keyword");return{[{"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[s]]:i,keyword:a,page:e,limit:t}}function N(e,t){e.innerHTML=ie(t)}function ie(e,t){return e.map(({_id:s,bodyPart:i,burnedCalories:a,time:r,name:o,rating:n,target:l})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              ${t?`<div class="exercise-card-removeIcon" data-id="${s}">
                  <svg class="exercise-card-icon" width="14" height="13">
                    <use href="./image/icons.svg#icon-bin"></use>
                  </svg>
              </div>`:`<div class="exercise-card-rating">
                ${n}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-exercise-star"></use>
                </svg>
              </div>`}
            </div>
            <button
              class="exercise-card-button js-start-btn remove-button-formatting"
              data-id=${s}
            >
              Start
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
                ${o}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${a} / ${r} min</div>
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
      `).join("")}function Me(e){return e.map(({imgURL:t,filter:s,name:i})=>`<li class="categories-card-item" data-name="${i}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${i}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function z(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=Me(t))}function Ce(){const e=document.querySelector(".categories-container");e&&e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;x();const i=s.dataset.name;c.set("category",i),c.remove("keyword"),d(e),Re(),se()})}async function ae(e=1){const t=c.get("filter"),s=document.querySelector(".categories-container");if(!s)return;m(s);const i=await _(t,e);z(s,i.results);const a=document.querySelector(".categories.tui-pagination");a&&te({container:a,data:i,onUpdate:async r=>{const o=await _(t,r);z(s,o.results)}}),w()}const G=document.querySelector(".filter_panel"),Te='<h2 class="exercises-title">Exercises</h2>',je=`
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
</div>`,Ie=document.getElementById("exerciseSection"),Be=document.getElementById("categoriesSection");function Ae(){if(!G)return;G.insertAdjacentHTML("afterbegin",`${Te}${je}`),re(c.get("filter")||"Muscles");const e={form:document.querySelector(".search-form"),title:document.querySelector(".exercises-title"),list:document.querySelector(".category-list_buttons"),categoryButtons:document.querySelectorAll(".category-button"),input:document.querySelector(".form-input"),searchButton:document.querySelector(".search-button")},{list:t,searchButton:s,form:i}=e;e.input.addEventListener("input",De),s.addEventListener("click",He),t.addEventListener("click",Pe),i.addEventListener("submit",Oe)}function De(e){if(!e.target.value)return;const t={searchIcon:document.querySelector(".search-icon"),closeIcon:document.querySelector(".close-icon")};d(t.searchIcon),m(t.closeIcon)}function re(e){const t=document.querySelectorAll(".category-button");Array.prototype.forEach.call(t,i=>i.classList.remove("active"));const s=Array.prototype.find.call(t,i=>i.dataset.filter===e);s==null||s.classList.add("active"),c.set("filter",e)}function Fe(e){const t=e[0].toUpperCase()+e.slice(1),s=document.querySelector(".exercises-title");s.innerHTML=`Exersise / <span class="subtitle">${t}</span>`}function He(){const e=document.querySelector(".form-input"),t=document.querySelector(".close-icon"),s=document.querySelector(".search-icon");e.value="",t.classList.add("visually-hidden"),s.classList.remove("visually-hidden")}function Pe(e){x();const t=e.target.dataset.filter,s=document.querySelector(".exercises-title");s.innerHTML="Exersise",re(t),c.set("filter",t),ae(),m(Be),d(Ie),d(document.querySelector(".search-form"))}function Re(){const e=document.querySelector(".search-form");e==null||e.classList.add("visually-hidden")}function Oe(e){x(),e.preventDefault();const s=document.querySelector(".form-input").value;c.set("keyword",s),se(),e.target.reset();const i={searchIcon:document.querySelector(".search-icon"),closeIcon:document.querySelector(".close-icon")};m(i.searchIcon),d(i.closeIcon)}function _e(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function oe(e,t,s="topRight",i=5e3){ye.show({message:e,color:t,position:s,timeout:i})}function u(e){oe(e,"red")}function ne(e){oe(e,"green")}const Ke=J({email:D().email().required()}),Y=document.querySelector("#js-subscribe"),A=document.querySelector("#js-subscribe-spinner");async function Ne(e){e.preventDefault(),Q(e.target);const t=new FormData(e.target);try{const s=await Ke.validate({email:t.get("email")}),i=await qe(s);ne(i.message)}catch(s){u(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),Q(e.target)},500)}}function ze(e){e.classList.add(b)}function Ge(e){e.classList.remove(b)}function Q(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(A.classList.contains(b)){t.disabled=!0,F(A),ze(s);return}H(A),Ge(s),t.disabled=!1}function Ye(){Y&&Y.addEventListener("submit",Ne)}function Qe(){const e=document.querySelector(".scroll-up-button");if(window.location.pathname.includes("favorites")){d(e);return}function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=be(()=>{window.scrollY>=100?e.classList.remove("scroll-up-button--hidden"):e.classList.add("scroll-up-button--hidden")},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function Ue(){const e=document.querySelector(".favorites-title"),t=document.querySelector("#favcardsContainer");if(!e)return;Ze();const s=c.get("exerciseData")??[];s.length===0&&$(document.querySelector(".fav-desk-wrapper"));let i=[];s?s.map(o=>{i.push(o),a(i)}):$(document.querySelector(".fav-desk-wrapper"));async function a(o){const n=await Promise.all(o.map(l=>X(l)));r(n)}function r(o){t.innerHTML=o?ie(o,!0):$(document.querySelector("fav-desk-wrapper"))}}function $(e){e.insertAdjacentHTML("beforeend",`<p class="favorites-noitemsmessage">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`)}function Ze(){const e=document.querySelector(".favcards-container");e&&e.addEventListener("click",t=>ce(t.target))}function ce(e){if(e.classList.contains("exercise-card-button")||!e.dataset.id)return;const t=e.dataset.id;if(!t)return;const i=document.querySelector(`[data-id="${t}"]`).closest(".exercise-card");let a=c.get("exerciseData")||[];a=a.filter(r=>r!==t),c.set("exerciseData",a),i==null||i.remove(),a.length||$(document.querySelector(".fav-desk-wrapper"))}function Je(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let i=!1;s.addEventListener("click",a=>We(a,e,t,i))}async function We(e,t,s,i){if(e.target.closest(".js-start-btn")){x();try{const a=e.target.closest(".js-start-btn").getAttribute("data-id"),r=await X(a),o=tt(r);Ve(o),i=(c.get("exerciseData")||[]).includes(a);const n=document.querySelector(".modal-exercises-btn-favorites");n.innerHTML=i?de():le(),n.dataset.toggle=i?"remove":"add",Xe(t,s),n.addEventListener("click",l=>{if(window.location.pathname.includes("favorites")){ce(l.target.closest("button")),k(t,s);return}st(a,l.target.closest("button").dataset.toggle)}),rt(t,s)}catch{u("Information not found")}w()}}function Xe(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function Ve(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function et(e){const t="#EEA10C",s="#F4F4F4",a=[];for(let o=0;o<5;o++){const n=o+1<=e?100:o<e?e%1*100:0,l=`
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
    `;a.push(l)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${a.join("")}`}function tt({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:a,target:r,description:o,rating:n,burnedCalories:l,time:g,popularity:f}){const v=ve(i);function ve(I){return I===null||!I?`srcset = "./image/modal-coming-soon.jpg"
      src = "./image/modal-coming-soon.jpg"`:`src="${I}"`}const he=et(n);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${v}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${a}</h2>
      <div class="modal-exercises-rating">${he}</div>

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
              <p class="modal-exercises-text">${l}/${g}</p>
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
`}function le(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function de(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function st(e,t){if(t==="add"){const s=document.querySelector(".modal-exercises-btn-favorites");s.dataset.toggle="remove",s.innerHTML=de(),it(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.dataset.toggle="add",s.innerHTML=le(),at(e)}}async function it(e){try{if(!e){u("Invalid exerciseID");return}const t=c.get("exerciseData")||[];if(t.includes(e)){u("Already added");return}t.push(e),c.set("exerciseData",t)}catch{u("Error fetching or storing exercise data")}}async function at(e){try{if(!e){u("Invalid exerciseID");return}const t=(c.get("exerciseData")||[]).filter(s=>s!==e);c.set("exerciseData",t)}catch{u("Error removing exercise from favorites")}}function k(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}function rt(e,t){const s=document.querySelector(".modal-exercises-btn-close"),i=document.querySelector(".modal-rating");s.addEventListener("click",()=>{k(e,t)}),t.addEventListener("click",function(a){if(a.target===t){if(!i.classList.contains("visually-hidden"))return;k(e,t)}}),document.addEventListener("keydown",function(a){if(a.key==="Escape"&&!e.classList.contains("visually-hidden")){if(!i.classList.contains("visually-hidden"))return;k(e,t)}})}const ot=J({email:D().email().required(),review:D().min(5).required(),rate:xe().min(0).max(5).integer().required()}),E=document.querySelector(".modal-rating"),M=document.querySelector(".modal-exercises"),T=document.querySelector(".overlay"),L=document.querySelector(".rating-loader-container");function nt(){!T||!M||!E||M.addEventListener("click",ct)}function ct(e){if(!e.target.closest(".modal-exercises-btn-rating"))return;const t=e.target.dataset.id;M.classList.add("visually-hidden"),E.classList.remove("visually-hidden"),document.body.classList.add("fixed"),E.innerHTML=ut(t),lt(),dt()}function j(){const e=document.querySelector(".rating-form"),t=document.querySelector(".modal-rating-btn-close");E.classList.add("visually-hidden"),M.classList.remove("visually-hidden"),t.removeEventListener("click",ue),T.removeEventListener("click",me),document.removeEventListener("keydown",ge),e.removeEventListener("submit",fe)}function ue(){j()}function me(e){e.target===T&&j()}function ge(e){e.key==="Escape"&&j()}function lt(){const e=document.querySelector(".modal-rating-btn-close"),t=document.querySelector(".rating-form");e.addEventListener("click",ue),T.addEventListener("click",me),document.addEventListener("keydown",ge),t.addEventListener("submit",fe)}function dt(){const e=document.querySelector(".rating"),t=document.querySelector(".rating-list");t.addEventListener("click",s);function s(i){if(i.target===i.currentTarget)return;const r=i.target.closest(".item").dataset.rating;e.textContent=`${r}.0`,[...t.children].map((o,n)=>{o.classList.remove("item--active"),n<r&&o.classList.add("item--active")}),t.dataset.rating=`${r}`}}async function fe(e){e.preventDefault(),m(L),F(L.children[0]);const t=document.querySelector(".rating-list"),s=document.querySelector(".rating"),i=new FormData(e.target);try{const a=await ot.validate({email:i.get("email"),review:i.get("comment"),rate:t.dataset.rating}),r=e.target.dataset.id;await $e(r,a),ne("Rating successfully updated"),j(),e.target.reset(),[...t.children].map(o=>o.classList.remove("item--active")),s.textContent="0.0"}catch(a){u(a.message)}finally{setTimeout(()=>{d(L),H(L.children[0])},500)}}function ut(e){return`<button class="modal-rating-btn-close">
    <svg width="24" height="24">
      <use href="./image/icons.svg#icon-close-menu"></use>
    </svg>
  </button>
  <form class="rating-form" data-id="${e}">
  <h4 class="title">Rating</h4>
  <div class="wrapper">
    <p class="rating" data-rating name="rating">0.0</p>
    <ul class="list rating-list">
      <li class="item" data-rating="1">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="2">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="3">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="4">
        <div class="item-star">
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
      <li class="item" data-rating="5">
        <div class="item-star" >
          <svg width="24" height="24" class="item-star-svg">
            <use href="./image/icons.svg#icon-star"></use>
          </svg>
        </div>
      </li>
    </ul>
  </div>


    <input
      class="rating-input"
      name="email"
      type="text"
      pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"
      placeholder="Email"
      autocomplete="email"
      required
    />

    <textarea
      class="rating-textarea"
      name="comment"
      placeholder="Your comment"
      required
      minlength="5"
    ></textarea>
    <button class="rating-send-btn" type="submit">Send</button>
  </form>`}const U="today",Z="quote-of-the-day";async function mt(){const e=document.querySelector("#quoteContainer");if(!e)return;const t=!window.location.pathname.includes("favorites"),s=await gt(),i=vt(s.quote,s.author,t);e.insertAdjacentHTML("afterbegin",i)}async function gt(){const e=c.get(U)??"";let t=c.get(Z)??"";const s=ft();if(e!==s||!t)try{t=await Le(),c.set(Z,t),c.set(U,s)}catch(i){u(i.message)}return t}function ft(){const e=new Date(Date.now()),t=e.getFullYear(),s=e.getMonth();return`${e.getDate()}/${s}/${t}`}function vt(e,t,s){return`    <!-- quote -->
      <div class="daily-quote-container">
        <div class="icon-circle">
          <svg class="icon-svg" width="18" height="18">
            <use href="./image/icons.svg#icon-pedastrian"></use>
          </svg>
        </div>

        <div class="quote-thumb">
          <div class="quote-tittle-box">
            <h2 id="quote" class="daily-quote-title">Quote of the day</h2>
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
      </div>`}async function ht(){Ae(),we(),_e(),Ye(),mt(),Qe(),Je(),Ce(),ae(),Ue(),nt(),Ee()}ht();
//# sourceMappingURL=main-d2567eca.js.map
