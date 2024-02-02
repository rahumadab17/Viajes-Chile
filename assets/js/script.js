/* evento envío correo */
$(document).ready(function(){
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado correctamente")
    })
});

/* TOOLTIP JS */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))