function whatsapp() {
    let numero = "5583999999999"; // coloca teu número
    let mensagem = "Olá, quero um orçamento!";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}