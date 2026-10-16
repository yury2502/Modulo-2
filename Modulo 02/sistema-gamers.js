const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n============================")
    console.log("------- SISTEMA DE GAMERS ----------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostar Equipe");
    console.log("4 - Cálculo da média da Equipe");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Buscar Jogador");
    console.log("7 - Sair");
    console.log("\n");
}

function mostrarEquipe() {
    if (time.length === 0) {
        return;
    }

    for(let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ", " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador() {
    let nomeUsuario = prompt("Digite o nome do usuário: ");
    let funcaoJogador = prompt("Digite a função no time:");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    } else {
        let recruta = {
            nome: nomeUsuario,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }


        time.push(recruta);
        console.log("Usuario " + nomeUsuario + " foi cadastrado com sucesso!");
    } 
}

function deletarJogador(){
    if (time.length === 0) {
            console.log("Usuario não encontrado");
            return;
    }
    let nomeDeletado = prompt("Digite o nome do usuário que deseja deletar: ");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
         
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Usuario não encontrado");
        return;
    } 
    
    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso");
}

function calculoDaMedia() {
    if (time.length === 0) {
         console.log("Usuario não encontrado");
         return;
    }

    let totalPontos = 0;

    for(let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possui uma pontuaçãao média de: ", mediaPontos);
}

function buscarJogador(nomeDesejado) { 

    console.log("Buscando por: " + nomeDesejado + "..."); 

    let encontrou = false;

    for (let i = 0; i < time.length; i++) { 

        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) { 

            console.log("JOGADOR ENCONTRADO!");

            console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 

            encontrou = true;

            break;

        } 
    }

    if (encontrou === false) { 

        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe."); 

    } 
}

function atualizarPontuacao() {

    let nomeDesejado = prompt("Qual jogador deseja atualizar?: ");

    let encontrou = false;

    for (let i = 0; i < time.length; i++) {

        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {

            let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje?: "));

            jogadorAtual.pontuacao += pontosNovos;

            console.log("SUCESSO! A pontuação de " + jogadorAtual.nome + " subiu para " + jogadorAtual.pontuacao + " pontos!");

            encontrou = true;

            break;
        }
    }

    if (encontrou === false) {

        console.log("O jogador " + nomeDesejado + " não foi encontrado.");
    }
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");
    
    if (opcao === '1') {
       cadastrarJogador();
    } else if (opcao === '2') {
       deletarJogador();
    } else if (opcao === '3') {
        mostrarEquipe();
    } else if(opcao === '4') {
        calculoDaMedia();
    } else if(opcao === '5') {
        atualizarPontuacao();
    } else if(opcao === '6') {
        let nomeDesejado = prompt("Digite o nome do jogador que deseja buscar: ");
        buscarJogador(nomeDesejado);
    } else if(opcao === '7') {
        continuar = false;
    }
     else {
        console.log("Opção inválida! Digite novamente.");
    } 
}