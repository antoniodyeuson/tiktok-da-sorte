// Função para realizar o sorteio
function realizarSorteio() {
    // Gera um número aleatório entre 1 e 100
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;

    // Exibe o número sorteado na página
    document.getElementById("numeroSorteado").innerText = "Número sorteado: " + numeroSorteado;

    // Exibe a mensagem de sucesso
    document.getElementById("mensagemSucessoSorteio").innerText = "Sorteio realizado com sucesso!";
    document.getElementById("mensagemSucessoSorteio").style.color = "green";

    // Obtém a data atual
    const dataSorteio = new Date().toLocaleDateString();

    // Obtém o mês atual
    const mesSorteio = new Date().getMonth() + 1; // Meses no JavaScript são indexados de 0 (Janeiro é 0)

    // Recupera o histórico de sorteios do localStorage
    const sorteios = JSON.parse(localStorage.getItem("sorteios")) || [];

    // Adiciona o novo sorteio ao histórico
    sorteios.push({
        data: dataSorteio,
        numero: numeroSorteado,
        mes: mesSorteio
    });

    // Salva o histórico de volta no localStorage
    localStorage.setItem("sorteios", JSON.stringify(sorteios));
}

// Função para verificar o estado do botão quando a página for carregada
window.onload = function() {
    const botaoSortear = document.getElementById("botaoSortear");
    const mensagem = document.getElementById("mensagem");

    botaoSortear.disabled = true;

    // Verifica se o sorteio foi liberado no localStorage
    if (localStorage.getItem("sorteioLiberado") === "true") {
        mensagem.innerText = "Sorteio liberado! Você pode realizar o sorteio agora.";
        botaoSortear.disabled = false;
    } else {
        mensagem.innerText = "O sorteio ainda não foi liberado. Digite a senha no painel administrativo.";
    }
};
