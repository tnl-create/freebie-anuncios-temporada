(() => {
'use strict';
const button=document.getElementById('tn-copy-lumi'),area=document.getElementById('tn-lumi-prompt'),details=document.getElementById('tn-lumi-details');
if(!button||!area||!details)return;
button.addEventListener('click',async()=>{
 let copied=false;
 try{await navigator.clipboard.writeText(area.value);copied=true;}catch(_){
  const fallback=document.createElement('textarea');fallback.value=area.value;fallback.setAttribute('aria-label','Prompt de Lumi para copiar');fallback.style.cssText='position:fixed;opacity:0;top:0;left:0';document.body.appendChild(fallback);fallback.focus();fallback.select();try{copied=document.execCommand('copy');}catch(_){}fallback.remove();
 }
 if(copied){button.textContent='Copiado. Pegalo en Lumi ✓';setTimeout(()=>{button.textContent='Copiar prompt ↗';},2500);}
 else{document.getElementById('tn-lumi-toggle').open=true;area.focus();area.select();}
});
})();

// Progressive enhancement: every section remains readable without motion or JS.
(() => {
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(reduced.matches||!('IntersectionObserver' in window))return;
 const sections=document.querySelectorAll('#tnl24 main>section, #tnl24 .lumi-section, #tnl24 .pma');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   entry.target.classList.toggle('motion-in-view',entry.isIntersecting);
   if(entry.isIntersecting)entry.target.classList.add('motion-entered');
 }),{threshold:.08});
 sections.forEach(section=>{section.classList.add('motion-ready');observer.observe(section);});
 const pause=()=>document.documentElement.classList.toggle('motion-paused',document.hidden||reduced.matches);
 document.addEventListener('visibilitychange',pause);reduced.addEventListener('change',pause);pause();
})();

// 21-oct-2026: sección de movimiento. Los videos corren solos mientras se ven; copiar brief.
(() => {
 const sec=document.getElementById('tn-motion'); if(!sec)return;
 const vids=[...sec.querySelectorAll('video')], reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced){vids.forEach(v=>{v.removeAttribute('autoplay');v.pause();v.controls=true;});}
 else if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const p=e.target.play();if(p&&p.catch)p.catch(()=>{e.target.controls=true;});}else e.target.pause();}),{threshold:.35});vids.forEach(v=>io.observe(v));}
 sec.querySelectorAll('[data-tn-brief]').forEach(b=>b.addEventListener('click',async()=>{
  const t=b.closest('.tn-motion-body').querySelector('[data-tn-brief-text]');let ok=false;
  try{await navigator.clipboard.writeText(t.value);ok=true;}catch(_){const f=document.createElement('textarea');f.value=t.value;f.style.cssText='position:fixed;opacity:0';document.body.appendChild(f);f.select();try{ok=document.execCommand('copy');}catch(_){}f.remove();}
  b.textContent=ok?'Brief copiado ✓':'No se pudo copiar';setTimeout(()=>{b.textContent='Copiar brief';},2500);
 }));
})();
