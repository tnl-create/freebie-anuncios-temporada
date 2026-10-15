(() => {
'use strict';
// Photo requirements apply to the whole composition, regardless of its chosen argument.
const requirements={2:['detail'],4:['detail'],5:['variants2'],7:['use','variants2'],11:['variants2'],12:['comparison'],13:['use'],15:['detailOrUse'],16:['components'],17:['variants3'],18:['pack','packPhotos'],19:['variants3'],20:['pack','packPhotos'],21:['comparison'],23:['pack','use'],24:['comparison'],30:['variants3'],31:['variants2'],32:['variants2'],34:['deadline']};
function select(rows,phase,category,one,reason,event,facts={}){
 const allowed=id=>({need:!!facts.message,difference:!!facts.message,choice:!!facts.variants||!!facts.message,pack:!!facts.pack,gift:!!facts.message,saving:!!facts.offer&&!!facts.comparison,deadline:!!facts.deadline}[id]);
 const meets=key=>({detail:!one&&facts.detail,use:!one&&facts.use,components:!one&&facts.components,detailOrUse:!one&&(facts.detail||facts.use),variants2:!one&&facts.variantCount>=2&&facts.variants,variants3:!one&&facts.variantCount>=3&&facts.variants,pack:facts.pack,packPhotos:!one&&facts.packPhotos,comparison:facts.comparison,deadline:facts.deadline}[key]);
 const options=s=>(s.reasons||[]).filter(r=>phase.reasons.includes(r)&&(!reason||reason===r)&&allowed(r));
 const compatible=rows.filter(s=>s.tier!=='secondary'&&(!category||s.categories.includes(category))&&(!one||s.singlePhoto)&&(requirements[s.id]||[]).every(meets)&&options(s).length&&(phase.id==='gift'?(s.seasons.includes('Navidad')||s.family==='Navidad'):s.seasons.includes(event)||s.seasons.includes('Todo el año')));
 const selected=[],families=new Set(),used=new Set();
 while(selected.length<3){const remaining=compatible.filter(s=>!selected.some(x=>x.strategy.id===s.id));if(!remaining.length)break;const score=s=>(families.has(s.family)?0:4)+(options(s).some(r=>!used.has(r))?2:0)+(phase.id==='gift'&&s.id>=28?1:0);remaining.sort((a,b)=>score(b)-score(a)||a.id-b.id);const strategy=remaining[0],r=options(strategy).find(r=>!used.has(r))||options(strategy)[0];selected.push({strategy,reason:r});families.add(strategy.family);used.add(r);}
 return selected;
}
window.TNL24_PLANNER={select};
})();
