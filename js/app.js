
/* Variables y constantes */

/* Document reload content */
window.addEventListener('DOMContentLoaded', () => {
    console.log('content-loaded');
});

/* PushInJs library starting */
pushInStart();

/* Typed configuration */
const typed = new Typed('.typed', {
    strings: [
        '<i class="font-bold text-4xl">Juan Camilo</i>', 
        '<i class="text-green-500">Developer</i>'
    ],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    cursorChar: '|',
});