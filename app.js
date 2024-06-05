let numerosSorteados = [];
let numeroMax = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p', 'Escolha um número de 1 a ' + numeroMax);      
}
   

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ``;
}
       
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    
    console.log(chute == numeroSecreto);
    if(chute== numeroSecreto){
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p' , mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        
        if(chute>numeroSecreto){
            exibirTexto('h1', 'O úmero secreto é menor');
        }else{
            exibirTexto('h1', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo(); 
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    if(numerosSorteados.length == numeroMax){
        numerosSorteados = [];
    }
    let numeroEscolhido =  parseInt(Math.random() * numeroMax + 1);
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}


