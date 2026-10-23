/* TNL: transposición de estructura + Brand Prompt + contenido verificado. */
(() => {
'use strict';
function build(s,mode='offer',f={},angle='') {
 const get=k=>String(f[k]||'').trim();
 const offer=mode==='offer';
 const contentKeys=['Producto y marca','Situación del cliente','Beneficios y evidencia','Titular creativo','No prometer','Escala real','Variantes','Pack','Comparación','Reseña real'];
 if(offer)contentKeys.push('Promoción','Precios','Evento','Vigencia');
 const facts=contentKeys.filter(k=>get(k)).map(k=>k+': '+get(k)).join('\n')||'Todavía no aporté mi brief. Pedime producto, mensaje, prueba real y los textos que se van a mostrar.';
 const brand=get('Identidad')||'Todavía no definí mi dirección visual. Antes de generar, pedime mis colores y estilo, o imágenes de mi propia marca para construir el Brand Prompt. La referencia de estructura no define mi identidad.';
 return `[INSTRUCCIÓN]
Creá UNA imagen publicitaria con mis fotografías reales. Aplicá transposición creativa: trasladá la estructura de la referencia a mi negocio, sin copiar su marca, sus colores, sus textos ni su producto. Si están todos los insumos críticos, generá la imagen; no devuelvas solamente otro prompt.

INSUMOS EN ESTE MISMO MENSAJE
IMAGEN 1 = referencia de ESTRUCTURA descargada de la ficha «${s.name}». Debe estar adjunta como archivo; este enlace no la reemplaza: ${s.reference.pin}
IMAGEN 2 = foto ORIGINAL de mi producto. Es la fuente de verdad de forma, color, etiqueta, envase, estampado y proporciones. El anuncio de demostración del freebie no es mi producto ni la referencia original.
IMÁGENES ADICIONALES = las fotos reales que necesita esta idea y, si las adjunto, referencias de MI marca. Identificá cada archivo por su función. Si hay dudas sobre cuál es cuál, preguntame; no asumas el orden silenciosamente.
Fotos necesarias para esta estructura: ${s.photos}
Si falta referencia, foto original o material indispensable para esta composición, pedilo en una sola tanda antes de generar. No inventes variantes, ingredientes, nuevas vistas, personas ni manos. Si mi material no alcanza, explicá qué falta o proponé una estructura compatible.

BASE ESTRATÉGICA — ANTES DE COMPONER
Separá en una ficha breve: insight (situación, duda o deseo real del cliente), concepto (idea que lo conecta con mi producto), ángulo (mensaje concreto), respaldo (dato o prueba aportados) y estrategia creativa (cómo lo mostrás).
${get('Situación del cliente')?'Partí de la situación del cliente aportada abajo.':'Si no aporté un insight real, pedime una situación, pregunta o comentario frecuente de mis clientes. Una posible lectura del público debe quedar marcada como hipótesis, nunca como investigación realizada.'}
${angle?'Ángulo elegido: '+angle+'.':'Elegí un solo ángulo respaldado por mi brief.'}
No confundas el nombre del layout con un concepto de negocio. No afirmes que este ángulo gana ni que genera ventas. No inventes research, reseñas, estadísticas, resultados de uso ni diferenciales.

[BRAND PROMPT]
Dirección de MI marca:
${brand}
Convertí esos insumos en una dirección visual coherente: paleta, luz, materiales o fondos, encuadre, carácter tipográfico y tono. Si adjunto referencias de mi marca, analizalas para completar esa dirección; no atribuyas a una foto de producto una tipografía o paleta que no se ve.
Definí el Brand Prompt antes de generar. No uses la identidad del pin como sustituto de mi identidad. Conservá la jerarquía funcional del recurso con tipografías y colores compatibles con MI marca. No introduzcas una estética genérica distinta de lo aportado.

[ESTRUCTURA TRANSPUESTA]
Idea de esta ficha: ${s.name}.
Qué hace el recurso: ${s.mechanism||s.concept}.
Composición de origen: ${s.composition}
Recursos que conservar: ${s.artDirection}
${offer?'Cómo integrar la promoción: '+s.offerDirection:'Versión sin promoción: eliminá precio, descuento, evento, urgencia y fechas promocionales aunque aparezcan en la referencia. Conservá el mecanismo y reequilibrá los espacios.'}
Estas descripciones indican relaciones, zonas y funciones del diseño, no una autorización para copiar la identidad visual ajena. Adaptá por función: titular por titular, prueba por prueba, producto por producto. Preservá el mecanismo reconocible, la escala relativa, el recorrido de lectura y el aire; resolvé su apariencia con mi Brand Prompt. No reduzcas todas las ideas a producto centrado más sello de descuento.
Riesgo específico que revisar: ${s.risk}

[CONTENIDO]
Datos reales que aporté:
${facts}
${offer?'Usá una sola oferta principal confirmada. Si falta, pedime el beneficio exacto y sus condiciones antes de generar una versión promocional. Una cifra dominante; no agregues precio tachado, regalo, cuotas o urgencia que no aporté. Integrá la promoción sin borrar el mensaje ni la estructura.':'No muestres porcentajes, precios, evento ni condiciones promocionales. Trabajá el mensaje del producto con evidencia real.'}
Si aporté titular, usalo exacto. Si no, proponé uno breve que exprese el ángulo y esté respaldado por mis datos. No pongas títulos internos como «insight» o «Brand Prompt» dentro del anuncio.
Si la estructura requiere una reseña, cifra o comparación y falta respaldo, pedilo o proponé otra estructura. Un testimonio debe venir del cliente con autorización: no inventes nombre, cita ni estrellas. No inventes causas, eficacia ni duración a partir de una fotografía.
Antes de generar, fijá qué texto va en cada zona y usá únicamente ese contenido. No sumes párrafos de relleno. No copies la promoción de CALMA ni textos del ejemplo.

[FORMATO]
${get('Formato')||'4:5 — Feed de Instagram y Facebook'}. Composición legible en teléfono, márgenes suficientes y producto sin recortes accidentales. Generá solo la versión elegida. No dibujes un botón de interfaz ni marcas de agua, instrucciones o notas de maqueta dentro de la pieza.
Conservá el producto real. Para escenas de uso, necesitás fotos reales o medidas confirmadas: no deduzcas escala por mililitros. Si la IA no conserva etiqueta o detalles, indicá la limitación y proponé montar el recorte original en un editor; no presentes un producto alterado como idéntico.

[REVISIÓN Y CORRECCIÓN]
Compará referencia, foto original y resultado: ¿se conserva el mecanismo?, ¿se reconoce mi marca?, ¿producto y etiqueta coinciden?, ¿el mensaje tiene respaldo?, ¿textos, oferta y condiciones son exactos?, ¿se lee en el teléfono?
Informá cualquier limitación sin prometer fidelidad absoluta. Si algo falla, corregí esa parte conservando lo correcto. Para un ajuste puntual de texto, precio o etiqueta, también puedo guardar el resultado y editarlo en Canva: usar «Separar en capas» si está disponible en mi cuenta y funciona con esa imagen, o superponer el texto/recorte original. No es necesario rehacer todo el anuncio.
`;
}
function packet(s,mode,prompt){return `THE NET LAB · ${s.name}

DÓNDE SE SUBE TU FOTO: EN CHATGPT
1. Descargá la imagen de referencia desde esta ficha.
2. Abrí https://chatgpt.com/ e iniciá un chat con tu cuenta.
3. En el cuadro donde escribís, usá Adjuntar (ícono + o clip, según la versión), o arrastrá los archivos. Adjuntá la referencia como imagen 1 y tu foto original como imagen 2. Sumá las fotos adicionales que requiere la idea y, si hace falta, ejemplos de tu marca. Esperá a ver los archivos adjuntos.
4. Pegá el prompt completo de abajo EN ESE MISMO MENSAJE y envialo. Las imágenes no se adjuntan automáticamente al copiar el texto ni al abrir ChatGPT.
5. Descargá y revisá el resultado antes de publicarlo. Usás tu propia cuenta y sus límites disponibles.

FOTOS NECESARIAS: ${s.photos}
REFERENCIA ORIGINAL: ${s.reference.pin}

PROMPT
${prompt}`;}
function correction(s,mode,prompt,issue){
 const fixes={product:'Restaurá producto, etiqueta, forma y proporciones usando la fotografía original. Si no podés conservarlos, indicá la limitación y proponé montaje del recorte original.',composition:'Restaurá el mecanismo y recorrido de lectura de la referencia, conservando los colores y el estilo de MI marca, no la estética del pin.',offer:mode==='offer'?'Corregí la oferta y la jerarquía según los datos exactos del brief. Conservá el mensaje y el mecanismo; no agregues sellos ni condiciones inventadas.':'Eliminá toda promoción, precio, evento y urgencia. Conservá el mensaje y el mecanismo.',text:'Corregí exclusivamente los textos y cifras usando el contenido del brief. Conservá el producto y el resto del diseño.'};
 if(!fixes[issue])throw new Error('Elegí qué corregir.');
 return `CORRECCIÓN PUNTUAL · ${s.name}
Adjunto referencia, foto original y resultado a corregir. Identificá cada archivo; si falta alguno, pedilo. La foto original y el brief son la fuente de verdad, no el resultado generado.
${fixes[issue]}
Conservá lo que ya funciona. No vuelvas a diseñar desde cero ni copies la identidad del pin. Señalá las limitaciones que queden.

BRIEF COMPLETO
${prompt}`;
}
window.TNL24_CREATIVE={build,packet};
window.TNL24_WORKFLOW={packet,correction};
})();
