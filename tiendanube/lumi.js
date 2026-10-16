(() => {
'use strict';
const button=document.getElementById('tn-copy-lumi'),area=document.getElementById('tn-lumi-prompt'),status=document.getElementById('tn-lumi-status'),details=document.getElementById('tn-lumi-details');
if(!button||!area||!status||!details)return;
button.addEventListener('click',async()=>{
 let copied=false;
 try{await navigator.clipboard.writeText(area.value);copied=true;}catch(_){
  const fallback=document.createElement('textarea');fallback.value=area.value;fallback.setAttribute('aria-label','Prompt de Lumi para copiar');fallback.style.cssText='position:fixed;opacity:0;top:0;left:0';document.body.appendChild(fallback);fallback.focus();fallback.select();try{copied=document.execCommand('copy');}catch(_){}fallback.remove();
 }
 if(copied){status.textContent='Pegá el prompt en Lumi dentro de tu Tiendanube. Si tu navegador no lo copia, podés descargarlo abajo.';button.textContent='Listo para pegar ✓';setTimeout(()=>{button.textContent='Copiar prompt para Lumi ↗';},2500);}
 else{area.focus();area.select();status.textContent='No se pudo copiar automáticamente. El prompt quedó seleccionado: usá Copiar o descargalo.';}
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
