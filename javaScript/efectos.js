// Seleccionamos el iframe y obtenemos su posición final
const iframe = document.querySelector('iframe');
const iframeFinalPos = iframe.getBoundingClientRect();

// Creamos un div que servirá como copia del iframe para la animación
const iframeCopy = document.createElement('div');
iframeCopy.style.position = 'absolute';
iframeCopy.style.top = `${iframe.offsetTop}px`;
iframeCopy.style.left = `${iframe.offsetLeft}px`;
iframeCopy.style.width = `${iframe.offsetWidth}px`;
iframeCopy.style.height = `${iframe.offsetHeight}px`;
iframeCopy.style.borderRadius = `${iframe.style.borderRadius}`;
iframeCopy.style.boxShadow = `${iframe.style.boxShadow}`;
iframeCopy.style.background = `${iframe.style.background}`;
iframeCopy.style.zIndex = '9999';

// Agregamos el div al body de la página
document.body.appendChild(iframeCopy);

// Ocultamos el iframe original
iframe.style.display = 'none';

// Animamos la copia del iframe hasta su posición final
const animation = iframeCopy.animate([
  { transform: `translate(${window.innerWidth/2 - iframe.offsetWidth/2}px, -${iframe.offsetHeight}px)` },
  { transform: `translate(${iframeFinalPos.left}px, ${iframeFinalPos.top}px)` }
], {
  duration: 1000,
  easing: 'ease-out',
  fill: 'forwards'
});

// Cuando termina la animación, eliminamos la copia y mostramos el iframe original
animation.onfinish = () => {
  iframeCopy.parentNode.removeChild(iframeCopy);
  iframe.style.display = 'block';
};