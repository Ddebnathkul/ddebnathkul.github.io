'use strict';
document.documentElement.classList.remove('no-js');
const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
if(navToggle&&navLinks){
  navToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navLinks.classList.contains('open')){navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');navToggle.focus();}});
}
// Play the locally hosted simulation only when it is visible and motion is permitted.
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
const videos=document.querySelectorAll('video[data-autoplay]');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{if(isIntersecting&&!motion.matches&&!target.dataset.started){target.dataset.started='true';target.play().catch(()=>{});}else if(!isIntersecting&&!target.paused){target.pause();delete target.dataset.started;}});},{threshold:.35});videos.forEach(video=>observer.observe(video));}
// External GIFs are requested only on click; keep a useful fallback when the host is unavailable.
document.querySelectorAll('[data-remote-gif]').forEach(button=>{const media=button.closest('.sim-media'),panel=button.closest('.remote-panel'),img=media.querySelector('.remote-animation'),close=media.querySelector('.remote-close'),status=media.querySelector('.remote-status');let requestId=0;
 const reset=()=>{requestId++;img.hidden=true;img.removeAttribute('src');close.hidden=true;panel.hidden=false;button.disabled=false;status.textContent='';};
 button.addEventListener('click',()=>{let current=++requestId;button.disabled=true;status.textContent='Loading…';img.onload=()=>{if(current!==requestId)return;img.hidden=false;close.hidden=false;panel.hidden=true;button.disabled=false;close.focus();};img.onerror=()=>{if(current!==requestId)return;reset();status.textContent='The animation could not load. Try the direct link.';};img.src=button.dataset.remoteGif;});
 close.addEventListener('click',()=>{reset();button.focus();});});
document.querySelectorAll('img[data-hide-on-error]').forEach(img=>{const hide=()=>{img.style.display='none';};img.addEventListener('error',hide);if(img.complete&&!img.naturalWidth)hide();});
// Publication filters preserve all publication records in the underlying static HTML.
const filterButtons=document.querySelectorAll('[data-filter]'),rows=document.querySelectorAll('#publication-list .pub-row'),count=document.querySelector('.pub-count');
function applyFilter(key){let visible=0;rows.forEach(row=>{const show=key==='all'||row.dataset.kind.split(' ').includes(key);row.hidden=!show;if(show)visible++;});filterButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===key)));if(count)count.textContent=`${visible} ${visible===1?'paper':'papers'}`;}
filterButtons.forEach(button=>button.addEventListener('click',()=>applyFilter(button.dataset.filter)));if(rows.length)applyFilter('all');
// Native dialog supports keyboard dismissal and returns focus to the trigger.
const dialog=document.querySelector('#image-dialog');
if(dialog&&typeof dialog.showModal==='function'){let opener;const img=dialog.querySelector('img');document.querySelectorAll('[data-zoom]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();opener=a;img.src=a.href;img.alt=a.querySelector('img')?.alt||'Enlarged image';dialog.showModal();}));dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{img.removeAttribute('src');opener?.focus();});}
// Preserve old tab URLs and support the new section name.
if(location.hash==='#simulations')location.replace('#highlights');

// Optional local figure: keep the card usable before the asset is added.
document.querySelectorAll('[data-optional-figure]').forEach(figure=>{const img=figure.querySelector('img'),link=figure.querySelector('.zoom-link'),placeholder=figure.querySelector('.figure-placeholder');const missing=()=>{link.hidden=true;placeholder.hidden=false;};img.addEventListener('error',missing);if(img.complete&&!img.naturalWidth)missing();});
