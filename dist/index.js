(()=>{"use strict";const e="https://63f239144f17278c9a22d1cd.mockapi.io/api/v1/item",t={ADD_ITEM:document.querySelector(".add-item"),ALL_ITEMS:document.querySelector(".all-items")},n=(e,t)=>{const n=document.createElement(e);return n.innerHTML=t,n},a=async(e,t)=>{const n=await fetch(e,t);return await n.json()},o=(e,t)=>{t?(({parentNodeReference:e,itemNodeReference:t,toEditedItemI:n,el:a})=>{n.classList.remove("d-none"),a.classList.add("d-none"),e.classList.add("bg-light","shadow","text-primary"),t.setAttribute("contentEditable",!0),t.focus()})(e):(({parentNodeReference:e,itemNodeReference:t,toEditedItemI:n,el:a})=>{t.removeAttribute("contentEditable"),n.classList.add("d-none"),a.classList.remove("d-none"),e.classList.remove("bg-light","shadow","text-primary")})(e)},i=async()=>{const i=await a(e);t.ALL_ITEMS.innerHTML="",i.forEach((e=>{const a=document.createElement("li");return a.className="border-list list-group-item",a.innerHTML=`<span class="item">${e.description}</span>`,a.appendChild((e=>{const t=document.createElement("input");return t.type="checkbox",t.value=e,t.className="check",t})(e.description)),a.appendChild((e=>{const t=document.createElement("span");var a,o;return t.className="box-actions",o=e,(a=t).appendChild(n("button",`<i id="${o}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`)),a.appendChild(n("button",`<i id="${o}" title="Edit" class="fas fa-pen-square"></i>`)),a.appendChild(n("button",`<i id="${o}" title="Delete" class="fas fa-trash"></i>`)),t})(e.id)),t.ALL_ITEMS.appendChild(a)})),(async()=>{const t=document.querySelectorAll(".fa-pen-square"),n=document.querySelectorAll(".fa-cart-arrow-down");t.forEach(((t,i)=>{t.addEventListener("click",(async({target:r})=>{const{id:c}=r,s=t.parentNode.parentNode.parentNode,d=s.querySelector(".item"),l={parentNodeReference:s,itemNodeReference:d,toEditedItemI:n[i],el:t};o(l,!0),n[i].addEventListener("click",(async()=>{await a(`${e}/${c}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({description:d.textContent})}).then((()=>o(l,!1)))}))}))}))})(),document.querySelectorAll(".fa-trash").forEach((t=>{t.addEventListener("click",(({target:n})=>{const o=t.parentNode.parentNode.parentNode,{id:i}=n;window.confirm("Are you sure want to exclude that item?")&&a(`${e}/${i}`,{method:"DELETE"}).then((()=>{o.remove(),"vibrate"in navigator&&navigator.vibrate(100)}))}))}))};new class{constructor(){this.toListItems=i(),this.toAddList=t.ADD_ITEM.addEventListener("click",(t=>{const n=document.querySelector(".value-item");t.preventDefault();const o=n.value;a(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:o})}).then((()=>{i(),n.value="","vibrate"in navigator&&navigator.vibrate(100)})).catch((e=>console.error(e)))}))}}})();
//# sourceMappingURL=index.js.map