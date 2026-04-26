function whatsapp(){
    window.open("https://wa.me/5583999999999");
}

function toggleMenu(){
    let menu=document.getElementById("menu");
    menu.style.display=menu.style.display==="flex"?"none":"flex";
}

/* ⭐ AVALIAÇÃO */
let estrelas=0;

function setStar(n){
    estrelas=n;
    document.querySelectorAll(".estrelas span").forEach((el,i)=>{
        el.classList.toggle("ativa",i<n);
    });
}

function enviarAvaliacao(){
    let texto=document.getElementById("comentario").value;

    if(estrelas===0 || texto===""){
        alert("Preencha a avaliação!");
        return;
    }

    let dados=JSON.parse(localStorage.getItem("avaliacoes"))||[];

    dados.push({estrelas,texto});
    localStorage.setItem("avaliacoes",JSON.stringify(dados));

    document.getElementById("comentario").value="";
    setStar(0);
    carregarAvaliacoes();
}

function carregarAvaliacoes(){
    let lista=document.getElementById("lista-avaliacoes");
    let dados=JSON.parse(localStorage.getItem("avaliacoes"))||[];

    lista.innerHTML="";

    dados.reverse().forEach(av=>{
        let div=document.createElement("div");
        div.className="avaliacao-item";

        div.innerHTML=`
        <div class="stars">${"★".repeat(av.estrelas)}</div>
        <p>${av.texto}</p>
        `;

        lista.appendChild(div);
    });
}

carregarAvaliacoes();