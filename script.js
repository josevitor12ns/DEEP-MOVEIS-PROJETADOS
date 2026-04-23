function whatsapp(){
    window.open("https://wa.me/5583999999999");
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

/* 🎬 EFEITO CINEMA */
window.addEventListener("scroll",()=>{
    let scroll=window.scrollY;
    document.body.style.backgroundPositionY=-(scroll*0.2)+"px";
});