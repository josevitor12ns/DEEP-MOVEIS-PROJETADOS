function whatsapp(){
    window.open("https://wa.me/5583986477047");
}

function toggleMenu(){
    let menu=document.getElementById("menu");
    menu.style.display=menu.style.display==="flex"?"none":"flex";
}

/* ANIMAÇÃO */
const els=document.querySelectorAll(".fade");

function show(){
    els.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight-100){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll",show);
show();