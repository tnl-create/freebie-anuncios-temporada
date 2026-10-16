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
 else{details.open=true;area.focus();area.select();status.textContent='No se pudo copiar automáticamente. El prompt quedó seleccionado: usá Copiar o descargalo.';}
});
})();
