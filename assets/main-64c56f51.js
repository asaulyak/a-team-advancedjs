var M=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var w=(e,t,s)=>(M(e,t,"read from private field"),s?s.call(e):t.get(e)),x=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var h=(e,t,s)=>(M(e,t,"access private method"),s);import{i as O,c as D,a as N,b as E,t as _,P as G}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function H(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelector("body"),i=n=>{(n.target.classList.contains("nav__link")||n.target.classList.contains("mobile-backdrop"))&&o()},o=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),r.classList.toggle("fixed")};t.addEventListener("click",o),e.addEventListener("click",i),s.addEventListener("click",n=>{o()}),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function J(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(r=>r.classList.add("active"))}function F(e,t,s="topRight",r=5e3){O.show({message:e,color:t,position:s,timeout:r})}function m(e){F(e,"red")}function R(e){F(e,"green")}const z=D({email:N().email().required()}),$="https://your-energy.b.goit.study/api";function K(e){const{page:t,perPage:s,totalPages:r}=e.data;return{...e.data,page:+t,perPage:+s,totalPages:r??0}}function I(e){return E.get(`${$}/exercises/${e}`).then(t=>t.data)}function U(e){return E.post(`${$}/subscription`,e).then(t=>t.data)}function k(e="Muscles",t=1,s=12){return E.get(`${$}/filters?filter=${encodeURIComponent(e)}&page=${t}&limit=${s}`).then(r=>K(r))}const p="visually-hidden";function Y(e){e&&(e.style.animationPlayState="running",e.classList.remove(p))}function X(e){e&&(e.style.animationPlayState="paused",e.classList.add(p))}const C=document.querySelector("#js-subscribe"),L=document.querySelector("#js-subscribe-spinner");async function Z(e){e.preventDefault(),P(e.target);const t=new FormData(e.target);try{const s=await z.validate({email:t.get("email")}),r=await U(s);R(r.message)}catch(s){m(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),P(e.target)},500)}}function Q(e){e.classList.add(p)}function V(e){e.classList.remove(p)}function P(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(L.classList.contains(p)){t.disabled=!0,Y(L),Q(s);return}X(L),V(s),t.disabled=!1}function W(){C&&C.addEventListener("submit",Z)}const j=Object.freeze({hidden:"visually-hidden"}),ee=e=>{e==null||e.classList.remove(j.hidden)},T=e=>{e==null||e.classList.add(j.hidden)};function te(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=_(()=>{window.scrollY>=100?ee(e):T(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}var b,f,v;class se{constructor(){x(this,f);x(this,b,"your-energy")}set(t,s){localStorage.setItem(h(this,f,v).call(this,t),JSON.stringify(s))}get(t){try{return JSON.parse(localStorage.getItem(h(this,f,v).call(this,t)))}catch{return null}}remove(t){localStorage.removeItem(h(this,f,v).call(this,t))}clear(){localStorage.clear()}}b=new WeakMap,f=new WeakSet,v=function(t){return`${w(this,b)}.${t}`};const g=new se;function re(){const e=document.querySelector(".modal-exercises"),t=document.querySelector(".overlay"),s=document.querySelector(".exercise-list");if(!e||!t||!s)return;let r=!1;s.addEventListener("click",i=>ie(i,e,t,r)),t.addEventListener("click",function(i){i.target===t&&S(e,t)}),document.addEventListener("keydown",function(i){i.key==="Escape"&&!e.classList.contains("visually-hidden")&&S(e,t)})}async function ie(e,t,s,r){if(e.target.closest(".js-start-btn"))try{const i=e.target.closest(".js-start-btn").getAttribute("data-id"),o=await I(i),n=ce(o);ne(n),oe(t,s),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",()=>ue(i,r)),document.querySelector(".modal-exercises-btn-close").addEventListener("click",()=>S(t,s))}catch{m("Information not found")}}function oe(e,t){e.classList.remove("visually-hidden"),t.classList.remove("visually-hidden"),document.body.classList.add("fixed")}function ne(e){const t=document.querySelector(".modal-exercises");t&&(t.innerHTML=e)}function ae(e){const t="#EEA10C",s="#F4F4F4",i=[];for(let n=0;n<5;n++){const a=n+1<=e?100:n<e?e%1*100:0,d=`
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
    `;i.push(d)}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${i.join("")}`}function ce({_id:e,bodyPart:t,equipment:s,gifUrl:r,name:i,target:o,description:n,rating:a,burnedCalories:d,time:c,popularity:l}){const u=B(r);function B(y){return y===null||!y?`srcset = "./image/modal-exercises-img.jpg"
      src = "./image/modal-exercises-img.jpg"`:`src="${y}"`}const A=ae(a);return`
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
      <h2 class="modal-exercises-name">${i}</h2>
      <div class="modal-exercises-rating">${A}</div>

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
              <p class="modal-exercises-text">${d}/${c}</p>
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
  `}function ue(e,t){if(t=!t,t){const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=de(),me(e)}else{const s=document.querySelector(".modal-exercises-btn-favorites");s.innerHTML=le(),fe(e)}}async function me(e){try{const t=g.get("exerciseData")||[];if(!t.find(r=>typeof r=="string"?JSON.parse(r)._id===e:typeof r=="object"&&r._id?r._id===e:!1)){const r=await I(e),i=JSON.stringify(r);t.push(i),g.set("exerciseData",t)}}catch{m("Error fetching or storing exercise data")}}async function fe(e){try{if(!e){m("Invalid exerciseID");return}const t=g.get("exerciseData")||[],s=t.findIndex(r=>{try{return typeof r=="string"?JSON.parse(r)._id===e:typeof r=="object"&&r._id?r._id===e:!1}catch{return m("Error parsing stored exercise data"),!1}});s!==-1&&(t.splice(s,1),g.set("exerciseData",t))}catch{m("Error removing exercise from favorites")}}function S(e,t){e.classList.add("visually-hidden"),t.classList.add("visually-hidden"),document.body.classList.remove("fixed")}function ge({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:r,totalPages:i}=t,o=(a,d)=>{const c=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let l="",u=["tui-more"];switch(d&&u.push("tui-is-disabled"),a){case"next":l=c,u.push("tui-more-right");break;case"prev":l=c;break;case"first":l=[c,c].join("");break;case"last":l=[c,c].join(""),u.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${a} ${u.join(" ")}">${l}</a>`};new G(e,{totalItems:i*r,itemsPerPage:r,visiblePages:5,template:{moveButton:({type:a})=>o(a),disabledMoveButton:({type:a})=>o(a,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",a=>{s(a.page)})}function pe(e){return e.map(({imgURL:t,filter:s,name:r})=>`<li class="categories-card-item" data-name="${r}"
      style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
                 url('${t}');
                 background-size: cover;
                 background-position:center;
                 background-repeat: no-repeat;
                ">
        <p class="categories-card-title">${r}</p>
        <p class="categories-card-text">${s}</p>
      </li>`).join("")}function q(e,t){const s=e.querySelector(".categories-list");s&&(s.innerHTML=pe(t))}function he(e){e.querySelector(".categories-list").addEventListener("click",t=>{const s=t.target.closest(".categories-card-item");if(!s)return;const r=s.dataset.name;g.set("category",r),T(e)})}async function ve(e="Muscles",t=1){const s=document.querySelector(".categories-container");if(!s)return;he(s);const r=await k(e,t);q(s,r.results);const i=document.querySelector(".categories.tui-pagination");i&&ge({container:i,data:r,onUpdate:async o=>{const n=await k(e,o);q(s,n.results)}})}function be(){H(),J(),W(),te(),re(),ve()}be();
//# sourceMappingURL=main-64c56f51.js.map
