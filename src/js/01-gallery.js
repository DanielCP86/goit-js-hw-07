import { galleryItems } from './gallery-items.js';

// Change code below this line

const list = document.querySelector("ul.gallery");
const markup = galleryItems.map(item=>`<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`).join("");
list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", openImageInLightbox);
function openImageInLightbox(event){
    
   if(!event.target.nodeName==='IMG'){
    return;
   }
   event.preventDefault();
   const originalUrl = event.target.dataset.source;

   const instance = basicLightbox.create(`<img width="1400" height="900" src="${originalUrl}">`,{onShow:(instance)=>{document.addEventListener("keydown",event=>{if(event.key==="Escape"){instance.close();}})}});
   
   instance.show();
}





