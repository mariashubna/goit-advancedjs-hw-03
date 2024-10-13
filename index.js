import{S as u,i as p}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="39901627-719ccf8971235dd54bb900542";function d(i){const t=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function y(i){return i.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:s,downloads:c})=>`<li class='gallery-item'>
        <a class="gallery-link" href="${o}" >
		<img
			class="gallery-image"
			src="${t}"
			alt="${n}"
            width='358'
            height='200'
			/>
	</a>
    <ul class='img-info'>
    <li><p>Likes</p><p>${e}</p></li>
    <li><p>Views</p><p>${r}</p></li>
    <li><p>Comments</p><p>${s}</p></li>
    <li><p>Downloads</p><p>${c}</p></li>
    </ul>
</li>`).join("")}let h=new u(".gallery-link",{captionDelay:250,captionsData:"alt"}),l=document.querySelector(".gallery"),a=document.querySelector(".loader");const g=document.querySelector(".form");g.addEventListener("submit",L);function L(i){i.preventDefault(),l.innerHTML="";const t=i.currentTarget;a.style.display="block";const o=t.elements.search.value.trim();d(o).then(n=>{n.total===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.insertAdjacentHTML("beforeend",y(n.hits)),h.refresh()}).catch(console.error).finally(()=>{a.style.display="none",t.reset()})}
//# sourceMappingURL=index.js.map
