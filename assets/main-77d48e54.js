import{i as E,c as P,a as q,b,t as $,P as B}from"./vendor-22a203a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function M(){const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelector("body"),i=o=>{(o.target.classList.contains("nav__link")||o.target.classList.contains("mobile-backdrop"))&&n()},n=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),r.classList.toggle("fixed")};t.addEventListener("click",n),e.addEventListener("click",i),s.addEventListener("click",o=>{n()}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})}function j(){const e=document.querySelectorAll(".header-nav-link");let t=!0;e.forEach(s=>{window.location.pathname.includes(s.dataset.page)&&(s.classList.add("active"),t=!1)}),t&&document.querySelectorAll(".header-nav-link[data-page='home']").forEach(r=>r.classList.add("active"))}function x(e,t,s="topRight",r=5e3){E.show({message:e,color:t,position:s,timeout:r})}function y(e){x(e,"red")}function k(e){x(e,"green")}const A=P({email:q().email().required()}),w="https://your-energy.b.goit.study/api";function O(e){const{page:t,perPage:s,totalPages:r}=e.data;return{...e,page:+t,perPage:+s,totalPages:r??0}}function T(e){const t=Object.keys(e).filter(s=>!!e[s]).map(s=>`${s}=${e[s]}`).join("&");return b.get(`${w}/exercises?${t}`).then(s=>O(s))}function I(e){return b.post(`${w}/subscription`,e).then(t=>t.data)}const l="visually-hidden";function C(e){e&&e.classList.remove(l)}function D(e){e&&e.classList.add(l)}const m=document.querySelector("#js-subscribe"),f=document.querySelector("#js-subscribe-spinner");async function F(e){e.preventDefault(),g(e.target);const t=new FormData(e.target);try{const s=await A.validate({email:t.get("email")}),r=await I(s);k(r.message)}catch(s){y(s.response.data.message)}finally{setTimeout(()=>{e.target.reset(),g(e.target)},500)}}function U(e){e.classList.add(l)}function _(e){e.classList.remove(l)}function g(e){if(!e)return;const t=e.children.subscribeBtn,s=t.children[0];if(f.classList.contains(l)){t.disabled=!0,C(f),U(s);return}D(f),_(s),t.disabled=!1}function N(){m&&m.addEventListener("submit",F)}document.querySelector(".modal-exercises");document.querySelector(".overlay");document.querySelector(".js-list");const L=Object.freeze({hidden:"visually-hidden"}),z=e=>{e==null||e.classList.remove(L.hidden)},H=e=>{e==null||e.classList.add(L.hidden)};function K(){const e=document.querySelector(".scroll-up-button");function t(){window.scrollTo({top:0,behavior:"smooth"})}const s=$(()=>{window.scrollY>=100?z(e):H(e)},500);window.addEventListener("scroll",s),e.addEventListener("click",t)}function R({container:e,data:t,onUpdate:s}){if(!e)return;const{perPage:r,totalPages:i}=t,n=(c,S)=>{const a=`<svg width="7" height=12>
                              <use href="./image/icons.svg#icon-arrow"></use>
                            </svg>`;let d="",u=["tui-more"];switch(S&&u.push("tui-is-disabled"),c){case"next":d=a,u.push("tui-more-right");break;case"prev":d=a;break;case"first":d=[a,a].join("");break;case"last":d=[a,a].join(""),u.push("tui-more-right");break}return`<a href="#" class="tui-page-btn tui-${c} ${u.join(" ")}">${d}</a>`};new B(e,{totalItems:i*r,itemsPerPage:r,visiblePages:5,template:{moveButton:({type:c})=>n(c),disabledMoveButton:({type:c})=>n(c,!0),moreButton:()=>'<a href="#" class="tui-page-btn tui-ellipsis">...</a>'}}).on("beforeMove",c=>{s(c.page)})}async function Y(){const e=document.getElementById("exerciseSection");if(!e)return;const t=e.querySelector("#exerciseList"),s=e.querySelector(".tui-pagination"),r=h(),i=await p(r);v(t,i.results),R({container:s,data:i,onUpdate:async n=>{const o=await p(h(n));v(t,o.results)}})}function h(e=1,t=10){return{bodypart:void 0,muscles:void 0,equipment:void 0,keyword:void 0,page:e,limit:t}}function v(e,t){t.length&&(e.innerHTML=G(t))}async function p(e){const t=await T(e);return t.statusText!=="OK"?(y("Failed to load exercises"),[]):t.data}function G(e){return e.map(({_id:t,bodyPart:s,burnedCalories:r,time:i,name:n,rating:o,target:c})=>`
        <div class="exercise-card">
          <div class="exercise-card-top">
            <div class="exercise-card-top-info">
              <div class="exercise-card-tag">workout</div>
              <div class="exercise-card-rating">
                ${o}
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
                ${n}
              </p>
            </div>
            <div class="exercise-card-info">
              <div class="exercise-card-info-element">
                <div class="exercise-card-info-element-heading">
                  Burned calories:
                </div>
                <div class="exercise-card-info-element-content-no-overflow">${r} / ${i} minutes</div>
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
      `).join("")}function J(){M(),j(),N(),Y(),K()}J();
//# sourceMappingURL=main-77d48e54.js.map
