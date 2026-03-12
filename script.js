const perguntas = [

{
pergunta:"Você quer ganhar dinheiro pela internet?",
opcoes:["Sim","Muito","Com certeza"]
},

{
pergunta:"Você já tentou ganhar dinheiro online?",
opcoes:["Nunca","Algumas vezes","Sim"]
},

{
pergunta:"Você prefere trabalhar usando:",
opcoes:["Celular","Computador","Os dois"]
},

{
pergunta:"Quanto você gostaria de ganhar por mês?",
opcoes:["R$500","R$2000","R$5000+"]
},

{
pergunta:"Quantas horas por dia você pode dedicar?",
opcoes:["1 hora","2 a 3 horas","Mais de 4 horas"]
},

{
pergunta:"Você prefere trabalhar:",
opcoes:["Em casa","De qualquer lugar","Não importa"]
},

{
pergunta:"Você gosta de aprender coisas novas?",
opcoes:["Sim","Muito","Sempre"]
},

{
pergunta:"Você quer ter renda extra ou viver disso?",
opcoes:["Renda extra","Talvez viver disso","Viver disso"]
},

{
pergunta:"Você prefere ganhar dinheiro com:",
opcoes:["Internet","Negócios digitais","Qualquer forma"]
},

{
pergunta:"Você está pronto para começar hoje?",
opcoes:["Sim","Com certeza","Agora mesmo"]
}

]

let atual = 0

function iniciar(){

document.getElementById("inicio").style.display="none"

document.getElementById("quiz").style.display="block"

mostrar()

}

function mostrar(){

let p = perguntas[atual]

document.getElementById("pergunta").innerText = p.pergunta

let html=""

p.opcoes.forEach(op=>{

html += `<div class="opcao" onclick="proxima()">${op}</div>`

})

document.getElementById("opcoes").innerHTML = html

let progresso = ((atual) / perguntas.length) * 100

document.getElementById("barra").style.width = progresso + "%"

}

function proxima(){

atual++

if(atual < perguntas.length){

mostrar()

}else{

document.getElementById("barra").style.width="100%"

document.getElementById("quiz").style.display="none"

document.getElementById("final").style.display="block"

}

}