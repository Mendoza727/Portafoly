/* social links sidebar */
if (window.location.pathname === "/") {
    $(".sidebar").show();
}

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


/* DownLoad CV */
const btnDescargar = document.getElementById("btnDownload");
btnDescargar.addEventListener("click", function() {
  descargarArchivo("../../Portafoly/assets/Currículum_1.pdf");
});

function descargarArchivo(url) {
    const linkDescarga = document.createElement("a");
    linkDescarga.href = url;
    linkDescarga.setAttribute("download", "");
    linkDescarga.style.display = "none";
    document.body.appendChild(linkDescarga);
    linkDescarga.click();
    document.body.removeChild(linkDescarga);
}