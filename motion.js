(() => {
 const section=document.getElementById('tnl24-motion');if(!section)return;
 const videos=[...section.querySelectorAll('video')];
 videos.forEach(video=>video.addEventListener('play',()=>videos.forEach(other=>{if(other!==video)other.pause();})));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)videos.forEach(v=>v.pause());});
 section.querySelectorAll('[data-motion-copy]').forEach(button=>button.addEventListener('click',async()=>{
  const panel=button.closest('details'),text=panel.querySelector('textarea');let ok=false;
  try{await navigator.clipboard.writeText(text.value);ok=true;}catch(_){text.focus();text.select();try{ok=document.execCommand('copy');}catch(_){}}
  panel.querySelector('[data-motion-status]').textContent=ok?'Brief copiado. Adjuntá referencia y foto original.':'Seleccioná el texto y usá Copiar.';
 }));
})();
