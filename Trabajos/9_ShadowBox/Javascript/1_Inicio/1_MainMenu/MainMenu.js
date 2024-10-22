// Menu Principal
$(document).ready(function() {
    // Asignar eventos de clic a los botones
    const buttons = {
        btn_card: ".card_component",
        btn_extra: ".info_box",
        btn_guide: ".info_buy",
        btn_inscription: "//localhost/Shadowbox/Inscripcion.html",
        btn_user: "//localhost/Shadowbox/Usuario.html"
    };

    // Función para desplazar la vista suavemente
    const scrollToSection = (selector) => {
        document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    };

    // Asignar eventos de clic a cada botón
    document.getElementById("btn_card").addEventListener("click", () => scrollToSection(buttons.btn_card));
    document.getElementById("btn_extra").addEventListener("click", () => scrollToSection(buttons.btn_extra));
    document.getElementById("btn_guide").addEventListener("click", () => scrollToSection(buttons.btn_guide));
    
    // Redirigir a otras páginas
    document.getElementById("btn_inscription").addEventListener("click", () => {
        window.location.href = buttons.btn_inscription;
    });

    document.getElementById("btn_user").addEventListener("click", () => {
        window.location.href = buttons.btn_user;
    });
});
