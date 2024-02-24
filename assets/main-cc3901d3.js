var E=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var M=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),S=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var v=(e,t,s)=>(E(e,t,"access private method"),s);import{i as G,c as J,a as R,b as y,t as U,P as z}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function K(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),r=a=>{(a.target.classList.contains("nav__link")||a.target.classList.contains("mobile-backdrop"))&&n()},n=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",n),e.addEventListener("click",r),s.addEventListener("click",a=>{n()}),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function Y(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function T(e,t,s="topRight",i=5e3){G.show({message:e,color:t,position:s,timeout:i})}function f(e){T(e,"red")}function X(e){T(e,"green")}const Z=J({email:R().email().required()}),b="https://your-energy.b.goit.study/api";function F(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:i??0}}function k(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return y.get(`${b}/exercises?${t}`).then(s=>F(s))}function A(e){return y.get(`${b}/exercises/${e}`).then(t=>t.data)}function Q(e){return y.post(`${b}/subscription`,e).then(t=>t.data)}function q(e="Muscles",t=1,s=12){return y.get(`${b}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(i=>F(i))}const p="visually-hidden";function V(e){e&&(e.style.animationPlayState="running",e.classList.remove(p))}function W(e){e&&(e.style.animationPlayState="paused",e.classList.add(p))}const C=document.querySelector("#js-subscribe"),$=document.querySelector("#js-subscribe-spinner");async function ee(e){e.preventDefault(),P(e.target);const t=new FormData(e.target);try{const s=await Z.validate({email:t.get("email")}),i=await Q(s);X(i.message)}catch(s){f(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),P(e.target)},500)}}function te(e){e.classList.add(p)}function se(e){e.classList.remove(p)}function P(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if($.classList.contains(p)){t.disabled=!0,V($),te(s);return}W($),se(s),t.disabled=!1}function ie(){C&&C.addEventListener("submit",ee)}const O=Object.freeze({hidden:"visually-hidden"}),re=e=>{e==null||e.classList.remove(O.hidden)},D=e=>{e==null||e.classList.add(O.hidden)};function ne(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=U(()=>{window.scrollY>=100?re(e):D(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}var x,m,h;class ae{constructor(){S(this,m);S(this,x,"your-energy")}set(t,s){localStorage.setItem(v(this,m,h).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(v(this,m,h).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(v(this,m,h).call(this,t))}clear(){localStorage.clear()}}x=new WeakMap,m=new WeakSet,h=function(t){return`${M(this,x)}.${t}`};const d=new ae;function oe(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let i=!1;s.addEventListener("click",r=>ce(r,e,t,i)),t.addEventListener("click",function(r){r.target===t&&w(e,t)}),document.addEventListener("keydown",function(r){r.key==="Escape"&&!e.classList.contains("visually-hidden")&&w(e,t)})}async function ce(e,t,s,i){if(e.target.closest(".js-start-btn"))try{const r=e.target.closest(".js-start-btn").getAttribute("data-id"),n=await A(r),a=ge(n);de(a),le(t,s),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>pe(r,i)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>w(t,s))}catch{f("Information not found")}}function le(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function de(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function ue(e){const t="#EEA10C",s="#F4F4F4",r=[];for(let a=0;a<5;a++){const o=a+1<=e?100:a<e?e%1*100:0,u=`
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${a}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${o}%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${o+1}%" style="stop-color:${s};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${a})"
          fill-opacity="1"
        />
      </svg>
    `;r.push(u)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r.join("")}`}function ge({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:n,description:a,rating:o,burnedCalories:u,time:c,popularity:l}){const g=H(i);function H(L){return L===null||!L?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${L}"`}const _=ue(o);return`
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
      <div class="modal-exercises-rating">${_}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${n}</p>
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
              <p class="modal-exercises-text">${l}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${u}/${c}</p>
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
`}function fe(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function me(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function pe(e,t){if(t=!t,t){const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=me(),ve(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=fe(),he(e)}}async function ve(e){try{const t=d.get("exerciseData")||[];if(!t.find(i=>typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1)){const i=await A(e),r=JSON.stringify(i);t.push(r),d.set("exerciseData",t)}}catch{f("Error fetching or storing exercise data")}}async function he(e){try{if(!e){f("Invalid exerciseID");return}const t=d.get("exerciseData")||[],s=t.findIndex(i=>{try{return typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1}catch{return f("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),d.set("exerciseData",t))}catch{f("Error removing exercise from favorites")}}function w(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}function N({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:r}=t,n=(o,u)=>{const c=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let l="",g=["tui-more"];switch(u&&g.push("tui-is-disabled"),o){case"next":l=c,g.push("tui-more-right");break;case"prev":l=c;break;case"first":l=[c,c].join("");break;case"last":l=[c,c].join(""),g.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${o} ${g.join(" ")}">${l}</a>`};new z(e,{totalItems:r*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:o})=>n(o),disabledMoveButton:({type:o})=>n(o,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",o=>{s(o.page)})}async function xe(){const e=document.getElementById("exerciseSection");if(!e)return;console.log(d.get("category"));const t=document.querySelector(".exercise-section"),s=e.querySelector("#exerciseList"),i=e.querySelector(".tui-pagination"),r=j(),n=await k(r);n.results.length?(B(s,n.results),N({container:i,data:n,onUpdate:async a=>{const o=await k(j(a));B(s,o.results)}})):(t.querySelector(".tui-pagination").classList.add("visually-hidden"),s.insertAdjacentHTML("beforeend",'<p class="exercise-noitemsmessage">It appears that there are no results that align with what you are searching for, please try again.</p>'))}function j(e=1,t=10){return{bodypart:void 0,muscles:d.get("category"),equipment:void 0,keyword:void 0,page:e,limit:t}}function B(e,t){e.innerHTML=ye(t)}function ye(e){return e.map(({_id:t,bodyPart:s,burnedCalories:i,time:r,name:n,rating:a,target:o})=>`
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
                ${n}
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
                <div class="exercise-card-info-element-content-target-no-overflow">${o}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}function be(e){return e.map(({imgURL:t,filter:s,name:i})=>`<li class="categories-card-item" data-name="${i}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${i}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function I(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=be(t))}function Le(e){e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;const i=s.dataset.name;d.set("category",i),D(e),xe()})}async function Se(e="Muscles",t=1){const s=document.querySelector(".categories-container");if(!s)return;Le(s);const i=await q(e,t);I(s,i.results);const r=document.querySelector(".categories.tui-pagination");r&&N({container:r,data:i,onUpdate:async n=>{const a=await q(e,n);I(s,a.results)}})}function $e(){K(),Y(),ie(),ne(),oe(),Se()}$e();
//# sourceMappingURL=main-cc3901d3.js.map
