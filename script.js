function whatsapp() {
    let numero = "5583986477047"; // coloca teu número aqui
    let mensagem = "Olá, quero um orçamento de móveis projetados!";
    
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

function toggleMenu() {
    let menu = document.getElementById("menu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}