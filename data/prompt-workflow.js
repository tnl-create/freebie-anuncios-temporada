(() => {
'use strict';
const fixes={
 product:'El producto cambió. Reemplazá únicamente el producto por un montaje de la fotografía original: misma forma, color, etiqueta, packaging y estampado. No reconstruyas ni dibujes detalles. Si no podés montar el archivo original, explicá esa limitación y no presentes el resultado como fiel.',
 composition:'Se perdió la composición de la referencia. Restaurá sus recursos esenciales, distribución, relaciones de escala, tipografía y espacio vacío. No resuelvas la corrección con un producto centrado y un sello genérico. No copies marcas, productos ni textos de la referencia.',
 offer:'La jerarquía comercial quedó mal. En modo con oferta, la oferta exacta debe leerse primero, integrada en el mecanismo de esta ficha. Conservá el titular creativo y el recurso gráfico esencial; quitá adornos antes de agrandar todos los textos. En modo sin oferta, quitá precio, descuento, evento y urgencia sin perder la composición.',
 text:'Corregí únicamente errores de escritura, cifras y legibilidad, usando los textos exactos del brief. No cambies la fotografía ni rediseñes lo que ya funciona. No inventes condiciones ni cifras. Si la herramienta vuelve a fallar con el texto, entregá una base sin texto y detallá qué textos montar en un editor.'
};
function correction(s,mode,prompt,issue){
 if(!fixes[issue])throw new Error('Elegí un problema de la lista.');
 return 'CORREGIR UNA ADAPTACIÓN — '+s.name+'\n\nAdjunto IMAGEN 1: referencia creativa; IMAGEN 2: fotografía original de mi producto; IMAGEN 3: anuncio que necesita corrección. Si falta un insumo, pedilo antes de editar. La imagen 3 es el resultado a corregir, nunca la fuente de verdad del producto.\n\nPROBLEMA A RESOLVER\n'+fixes[issue]+'\n\nCOMPOSICIÓN ESPECÍFICA\n'+s.composition+'\n'+(mode==='offer'?s.offerDirection:s.artDirection)+'\n\nConservá lo que ya está correcto. Compará el resultado con los tres insumos. Indicá qué cambiaste y cualquier limitación; no afirmes fidelidad absoluta sin verificar. No pongas notas de revisión dentro del anuncio.\n\nBRIEF Y PROMPT DE LA ADAPTACIÓN\n'+prompt;
}
function packet(s,mode,prompt){return 'THE NET LAB · '+s.name+'\nVERSIÓN: '+(mode==='offer'?'Con oferta al frente':'Sin oferta')+'\nPIN ORIGINAL: '+s.reference.pin+'\n\nANTES DE GENERAR\n1. Descargá la referencia desde la ficha y adjuntala como imagen 1.\n2. Adjuntá tu foto original como imagen 2 y las fotos adicionales que requiera el layout.\n3. Confirmá textos, oferta, condiciones y vigencia en tu brief.\n4. Pegá el prompt de abajo. Este archivo de texto no adjunta imágenes al chat.\n\nFOTOS NECESARIAS\n'+s.photos+'\n\nPROMPT\n'+prompt+'\n\nREVISIÓN\nCompará referencia, foto original y anuncio. Revisá mecanismo gráfico, fidelidad del producto, texto y cifras. Si falla, usá la corrección específica de la ficha. La generación no garantiza un resultado idéntico ni un resultado comercial.\n';}
window.TNL24_WORKFLOW={correction,packet};
})();
