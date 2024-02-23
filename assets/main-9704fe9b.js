var P=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var C=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),S=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var v=(e,t,s)=>(P(e,t,"access private method"),s);import{i as _,c as G,a as H,b as E,t as R,P as J}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function K(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelector("body"),r=n=>{(n.target.classList.contains("nav__link")||n.target.classList.contains("mobile-backdrop"))&&o()},o=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),i.classList.toggle("fixed")};t.addEventListener("click",o),e.addEventListener("click",r),s.addEventListener("click",n=>{o()}),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function z(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(i=>i.classList.add("active"))}function I(e,t,s="topRight",i=5e3){_.show({message:e,color:t,position:s,timeout:i})}function d(e){I(e,"red")}function U(e){I(e,"green")}const Y=G({email:H().email().required()}),M="https://your-energy.b.goit.study/api";function X(e){const{page:t,perPage:s,totalPages:i}=e.data;return{...e,page:+t,perPage:+s,totalPages:i??0}}function Z(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return E.get(`${M}/exercises?${t}`).then(s=>X(s))}function A(e){return E.get(`${M}/exercises/${e}`).then(t=>t.data)}function Q(e){return E.post(`${M}/subscription`,e).then(t=>t.data)}const g="visually-hidden";function V(e){e&&e.classList.remove(g)}function W(e){e&&e.classList.add(g)}const q=document.querySelector("#js-subscribe"),$=document.querySelector("#js-subscribe-spinner");async function ee(e){e.preventDefault(),F(e.target);const t=new FormData(e.target);try{const s=await Y.validate({email:t.get("email")}),i=await Q(s);U(i.message)}catch(s){d(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),F(e.target)},500)}}function te(e){e.classList.add(g)}function se(e){e.classList.remove(g)}function F(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if($.classList.contains(g)){t.disabled=!0,V($),te(s);return}W($),se(s),t.disabled=!1}function ie(){q&&q.addEventListener("submit",ee)}var b,f,p;class re{constructor(){S(this,f);S(this,b,"your-energy")}set(t,s){localStorage.setItem(v(this,f,p).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(v(this,f,p).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(v(this,f,p).call(this,t))}clear(){localStorage.clear()}}b=new WeakMap,f=new WeakSet,p=function(t){return`${C(this,b)}.${t}`};const h=new re,y=document.querySelector(".modal-exercises"),x=document.querySelector(".overlay"),oe=document.querySelector(".exercise-list");let w=!1;oe.addEventListener("click",ne);async function ne(e){if(e.target.closest(".js-start-btn"))try{const t=e.target.closest(".js-start-btn").getAttribute("data-id"),s=await A(t),i=de(s);ce(i),ae(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>me(t)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",k)}catch(t){d(t)}}function ae(){y.classList.remove("visually-hidden"),x.classList.remove("visually-hidden"),document.body.classList.add("no-scroll")}function ce(e){y.innerHTML=e}function le(e){const t="#EEA10C",s="#F4F4F4",r=[];for(let n=0;n<5;n++){const a=n+1<=e?100:n<e?e%1*100:0,m=`
<svg width="14" height="13">
        <use href="./image/icons.svg#icon-star"></use>
        <linearGradient id="starGradient${n}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${a}%" style="stop-color:${t};stop-opacity:1" />
          <stop offset="${a+1}%" style="stop-color:${s};stop-opacity:0.20" />
        </linearGradient>
        <path
          d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z"
          fill="url(#starGradient${n})"
          fill-opacity="1"
        />
      </svg>
    `;r.push(m)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r.join("")}`}function de({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:o,description:n,rating:a,burnedCalories:m,time:c,popularity:l}){const u=D(i);function D(L){return L===null||!L?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${L}"`}const N=le(a);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="./image/icons.svg#icon-close-menu"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${u}
    alt="Exercise image"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${r}</h2>
      <div class="modal-exercises-rating">${N}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${o}</p>
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
              <p class="modal-exercises-text">${m}/${c}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${n}</p>
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
`}function ue(){return`
  Add to favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-favorites"></use>
  </svg>
  `}function fe(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
  <use href="./image/icons.svg#icon-trash"></use>
  </svg>
  `}function me(e){if(w=!w,w){const t=document.querySelector(".modal-exercises-btn-favorites");t.innerHTML=fe(),ge(e)}else{const t=document.querySelector(".modal-exercises-btn-favorites");t.innerHTML=ue(),ve(e)}}async function ge(e){try{const t=h.get("exerciseData")||[];if(!t.find(i=>typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1)){const i=await A(e),r=JSON.stringify(i);t.push(r),h.set("exerciseData",t)}}catch{d("Error fetching or storing exercise data")}}async function ve(e){try{if(!e){d("Invalid exerciseID");return}const t=h.get("exerciseData")||[],s=t.findIndex(i=>{try{return typeof i=="string"?JSON.parse(i)._id===e:typeof i=="object"&&i._id?i._id===e:!1}catch{return d("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),h.set("exerciseData",t))}catch{d("Error removing exercise from favorites")}}function k(){y.classList.add("visually-hidden"),x.classList.add("visually-hidden"),document.body.classList.remove("no-scroll")}x.addEventListener("click",function(e){e.target===x&&k()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!y.classList.contains("visually-hidden")&&k()});const O=Object.freeze({hidden:"visually-hidden"}),pe=e=>{e==null||e.classList.remove(O.hidden)},he=e=>{e==null||e.classList.add(O.hidden)};function xe(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=R(()=>{window.scrollY>=100?pe(e):he(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function be({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:i,totalPages:r}=t,o=(a,m)=>{const c=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let l="",u=["tui-more"];switch(m&&u.push("tui-is-disabled"),a){case"next":l=c,u.push("tui-more-right");break;case"prev":l=c;break;case"first":l=[c,c].join("");break;case"last":l=[c,c].join(""),u.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${a} ${u.join(" ")}">${l}</a>`};new J(e,{totalItems:r*i,itemsPerPage:i,visiblePages:5,template:{moveButton:({type:a})=>o(a),disabledMoveButton:({type:a})=>o(a,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",a=>{s(a.page)})}async function ye(){const e=document.getElementById("exerciseSection");if(!e)return;const t=e.querySelector("#exerciseList"),s=e.querySelector(".tui-pagination"),i=j(),r=await T(i);B(t,r.results),be({container:s,data:r,onUpdate:async o=>{const n=await T(j(o));B(t,n.results)}})}function j(e=1,t=10){return{bodypart:void 0,muscles:void 0,equipment:void 0,keyword:void 0,page:e,limit:t}}function B(e,t){t.length&&(e.innerHTML=Le(t))}async function T(e){const t=await Z(e);return t.statusText!=="OK"?(d("Failed to load exercises"),[]):t.data}function Le(e){return e.map(({_id:t,bodyPart:s,burnedCalories:i,time:r,name:o,rating:n,target:a})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${n}
                <svg class="exercise-card-icon" width="14" height="13">
                  <use href="./image/icons.svg#icon-star"></use>
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
                ${o}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${i} / ${r} minutes</div>
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
      `).join("")}function Se(){K(),z(),ie(),ye(),xe()}Se();
//# sourceMappingURL=main-9704fe9b.js.map
