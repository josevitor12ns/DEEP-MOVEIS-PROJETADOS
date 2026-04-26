function whatsapp(){
    window.open("https://wa.me/5583999999999");
}

function toggleMenu(){
    let menu=document.getElementById("menu");
    menu.style.display=menu.style.display==="flex"?"none":"flex";
}

/* ⭐ AVALIAÇÃO ONLINE */
let estrelas = 0;

function setStar(n){
    estrelas = n;
    document.querySelectorAll(".estrelas span").forEach((el,i)=>{
        el.classList.toggle("ativa", i < n);
    });
}

async function enviarAvaliacao(){
    let texto = document.getElementById("comentario").value;

    if(estrelas === 0 || texto === ""){
        alert("Preencha tudo!");
        return;
    }

    await addDoc(collection(db, "avaliacoes"), {
        estrelas,
        texto,
        data: new Date()
    });

    document.getElementById("comentario").value="";
    setStar(0);

    carregarAvaliacoes();
}

async function carregarAvaliacoes(){
    let lista = document.getElementById("lista-avaliacoes");
    lista.innerHTML = "Carregando...";

    let querySnapshot = await getDocs(collection(db, "avaliacoes"));

    let total = 0;
    let count = 0;

    lista.innerHTML = "";

    querySnapshot.forEach(doc=>{
        let av = doc.data();

        total += av.estrelas;
        count++;

        let div = document.createElement("div");
        div.className = "avaliacao-item";

        div.innerHTML = `
            <div class="stars">${"★".repeat(av.estrelas)}</div>
            <p>${av.texto}</p>
        `;

        lista.appendChild(div);
    });

    let media = count ? (total/count).toFixed(1) : 0;

    document.getElementById("media").innerText = `⭐ ${media} (${count} avaliações)`;
}

carregarAvaliacoes();