function saudacao(nomeJogador){
console.log("Bem vindo ao jogo, " + nomeJogador + "!")
}

saudacao("Alice");

//Função que recebe um valor
function subirDeNivel(nivelAtual){
return nivelAtual +1;
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);

console.log('Seu novo nível: ' + nivelAtualizado);