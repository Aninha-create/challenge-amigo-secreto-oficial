//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
function adicionarAmigo(){
let inputAmigo=document.getElementById("amigo");
let nomeAmigo=inputAmigo.value.trim();
if(!nomeAmigo){
    alert("Por favor digite o nome do(a) amigo(a)!");
}else if(amigos.includes(nomeAmigo)){ 
    alert ("Este nome já está na lista do sorteio!");
    return
}else{ amigos.push(nomeAmigo)}
atualizarListaAmigos();
inputAmigo.value="";
}
atualizarListaAmigos();
function atualizarListaAmigos(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    
    for(let i=0;i<amigos.length;i++){
        let item=document.createElement("li");
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length<3){
        alert("Adicione mais amigos para sortear!")
        return
    }else{
    let amigoSorteado=amigos[Math.floor(Math.random()*amigos.length)];
    let resultado=document.getElementById("resultado");
    resultado.textContent = `O(A) amigo(a) sorteado(a) é: ${amigoSorteado}!🎉`;

      confetti({
        particleCount: 200,
        startVelocity: 70,
        spread: 100,
        angle: 90,
        decay: 0.7,
        gravity: 0.3,
        drift: 0.3,
        scalar: 1.2,
        shapes: ['circle', 'star', 'square', 'triangle'],
        origin: { y: 0.85 },
        colors: ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#a133ff']
    });
  
}
}
   
reiniciarSorteio();
function reiniciarSorteio(){
    let resultado=document.getElementById("resultado");
    resultado.textContent="";
    amigos=[];
    atualizarListaAmigos();
    alert("Novo sorteio!");
}
