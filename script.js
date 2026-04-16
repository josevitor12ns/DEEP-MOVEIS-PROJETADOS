function whatsapp() {
    let numero = "558386477047"; // coloca o número real
    let mensagem = "Olá, quero um orçamento de móveis planejados!";
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
}