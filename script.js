function whatsapp() {
    let numero = "5583986477047";
    let mensagem = "Olá, quero um orçamento!";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* ANIMAÇÃO AO ROLAR */
const elements = document.querySelectorAll(".fade");

function mostrar() {
    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", mostrar);
mostrar();