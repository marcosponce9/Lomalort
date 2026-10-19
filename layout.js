
const L=[['index.html','Home'],['index.html#games','Games'],['services-2.html','Services'],['about-1.html','About Us'],['store.html','Store'],['contact-us.html','Contact']];
const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin',`<header><div class="w"><a href="index.html"><img src="img/logo.png" alt="LomaLort Games Studios"></a><button id="bg" aria-label="Menu">&#9776;</button><nav id="nv">${L.map(([h,t])=>`<a href="${h}" class="${h===cur?'on':''}">${t}</a>`).join('')}</nav></div></header>`);
document.getElementById('bg').onclick=()=>document.getElementById('nv').classList.toggle('open');
document.body.insertAdjacentHTML('beforeend',`<footer><div class="w"><div class="fc">
<div><h4>Company</h4><a href="store.html">Store</a><a href="contact-us.html">Contact</a></div>
<div><h4>Games</h4><a href="spiriat.html">Spiriat</a><a href="copia-de-spiriat.html">Don-Tuch</a><a href="marcux.html">Marcux: Medieval Alien Invasion</a></div>
<div><h4>Connect</h4><a href="https://www.facebook.com/lomalortgames">Facebook</a><a href="https://www.instagram.com/lomalortgames/">Instagram</a><a href="https://www.tiktok.com/@lomalortgames">TikTok</a><a href="https://twitter.com/LomaLortGames">Twitter</a><a href="https://www.threads.net/@lomalortgames">Threads</a><a href="https://www.youtube.com/@LomaLortGames">YouTube</a></div>
</div><p class="cp">© 2021 by LomaLort Games.</p></div></footer>`);
// formularios (Formspree: reemplazar los IDs en el HTML)
document.querySelectorAll('form[data-ok]').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();
 try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
 if(r.ok){f.reset();f.querySelector('.ok').style.display='block'}else alert('Error, try again.')}catch{alert('Network error.')}}));
