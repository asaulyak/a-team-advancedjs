var E=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var M=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var v=(e,t,s)=>(E(e,t,"access private method"),s);import{i as O,c as D,a as N,b as $,t as _,P as G}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function H(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelector("body"),i=o=>{(o.target.classList.contains("nav__link")||o.target.classList.contains("mobile-backdrop"))&&n()},n=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),r.classList.toggle("fixed")};t.addEventListener("click",n),e.addEventListener("click",i),s.addEventListener("click",o=>{n()}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function J(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(r=>r.classList.add("active"))}function B(e,t,s="topRight",r=5e3){O.show({message:e,color:t,position:s,timeout:r})}function d(e){B(e,"red")}function K(e){B(e,"green")}const R=D({email:N().email().required()}),w="https://your-energy.b.goit.study/api";function z(e){const{page:t,perPage:s,totalPages:r}=e.data;return{...e,page:+t,perPage:+s,totalPages:r??0}}function U(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return $.get(`${w}/exercises?${t}`).then(s=>z(s))}function F(e){return $.get(`${w}/exercises/${e}`).then(t=>t.data)}function Y(e){return $.post(`${w}/subscription`,e).then(t=>t.data)}const g="visually-hidden";function X(e){e&&(e.style.animationPlayState="running",e.classList.remove(g))}function Z(e){e&&(e.style.animationPlayState="paused",e.classList.add(g))}const k=document.querySelector("#js-subscribe"),L=document.querySelector("#js-subscribe-spinner");async function Q(e){e.preventDefault(),P(e.target);const t=new FormData(e.target);try{const s=await R.validate({email:t.get("email")}),r=await Y(s);K(r.message)}catch(s){d(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),P(e.target)},500)}}function V(e){e.classList.add(g)}function W(e){e.classList.remove(g)}function P(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(L.classList.contains(g)){t.disabled=!0,X(L),V(s);return}Z(L),W(s),t.disabled=!1}function ee(){k&&k.addEventListener("submit",Q)}const T=Object.freeze({hidden:"visually-hidden"}),te=e=>{e==null||e.classList.remove(T.hidden)},se=e=>{e==null||e.classList.add(T.hidden)};function ie(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=_(()=>{window.scrollY>=100?te(e):se(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function re({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:r,totalPages:i}=t,n=(a,u)=>{const c=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let l="",f=["tui-more"];switch(u&&f.push("tui-is-disabled"),a){case"next":l=c,f.push("tui-more-right");break;case"prev":l=c;break;case"first":l=[c,c].join("");break;case"last":l=[c,c].join(""),f.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${a} ${f.join(" ")}">${l}</a>`};new G(e,{totalItems:i*r,itemsPerPage:r,visiblePages:5,template:{moveButton:({type:a})=>n(a),disabledMoveButton:({type:a})=>n(a,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",a=>{s(a.page)})}async function ne(){const e=document.getElementById("exerciseSection");if(!e)return;const t=e.querySelector("#exerciseList"),s=e.querySelector(".tui-pagination"),r=C(),i=await j(r);q(t,i.results),re({container:s,data:i,onUpdate:async n=>{const o=await j(C(n));q(t,o.results)}})}function C(e=1,t=10){return{bodypart:void 0,muscles:void 0,equipment:void 0,keyword:void 0,page:e,limit:t}}function q(e,t){t.length&&(e.innerHTML=oe(t))}async function j(e){const t=await U(e);return t.statusText!=="OK"?(d("Failed to load exercises"),[]):t.data}function oe(e){return e.map(({_id:t,bodyPart:s,burnedCalories:r,time:i,name:n,rating:o,target:a})=>`
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
                ${n}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${r} / ${i} min</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Body part:</div>
                <div class="exercise-card-info-element-content-no-overflow">${s}</div>
              </div>
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">Target:</div>
                <div class="exercise-card-info-element-content-target-no-overflow">${a}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}var x,m,p;class ae{constructor(){y(this,m);y(this,x,"your-energy")}set(t,s){localStorage.setItem(v(this,m,p).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(v(this,m,p).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(v(this,m,p).call(this,t))}clear(){localStorage.clear()}}x=new WeakMap,m=new WeakSet,p=function(t){return`${M(this,x)}.${t}`};const h=new ae;function ce(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let r=!1;s.addEventListener("click",i=>le(i,e,t,r)),t.addEventListener("click",function(i){i.target===t&&S(e,t)}),document.addEventListener("keydown",function(i){i.key==="Escape"&&!e.classList.contains("visually-hidden")&&S(e,t)})}async function le(e,t,s,r){if(e.target.closest(".js-start-btn"))try{const i=e.target.closest(".js-start-btn").getAttribute("data-id"),n=await F(i),o=me(n);ue(o),de(t,s),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>pe(i,r)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>S(t,s))}catch(i){d(i)}}function de(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("no-scroll")}function ue(e){modalExercises.innerHTML=e}function fe(e){const t="#EEA10C",s="#F4F4F4",i=[];for(let o=0;o<5;o++){const a=o+1<=e?100:o<e?e%1*100:0,u=`
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${o}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${a}%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${a+1}%" style="stop-color:${s};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${o})"
          fill-opacity="1"
        />
      </svg>
    `;i.push(u)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${i.join("")}`}function me({_id:e,bodyPart:t,equipment:s,gifUrl:r,name:i,target:n,description:o,rating:a,burnedCalories:u,time:c,popularity:l}){const f=I(r);function I(b){return b===null||!b?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${b}"`}const A=fe(a);return`
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
      <h2 class="modal-exercises-name">${i}</h2>
      <div class="modal-exercises-rating">${A}</div>

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
`}function ge(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function ve(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function pe(e,t){if(t=!t,t){const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=ve(),he(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=ge(),xe(e)}}async function he(e){try{const t=h.get("exerciseData")||[];if(!t.find(r=>typeof r=="string"?JSON.parse(r)._id===e:typeof r=="object"&&r._id?r._id===e:!1)){const r=await F(e),i=JSON.stringify(r);t.push(i),h.set("exerciseData",t)}}catch{d("Error fetching or storing exercise data")}}async function xe(e){try{if(!e){d("Invalid exerciseID");return}const t=h.get("exerciseData")||[],s=t.findIndex(r=>{try{return typeof r=="string"?JSON.parse(r)._id===e:typeof r=="object"&&r._id?r._id===e:!1}catch{return d("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),h.set("exerciseData",t))}catch{d("Error removing exercise from favorites")}}function S(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("no-scroll")}function be(){H(),J(),ee(),ne(),ie(),ce()}be();
//# sourceMappingURL=main-eef9c960.js.map
