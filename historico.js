// Função para exibir o histórico de sorteios
function exibirHistorico() {
    const sorteios = JSON.parse(localStorage.getItem("historico")) || [];
    let tabela = document.getElementById('historicoTabela').getElementsByTagName('tbody')[0];

    // Limpar a tabela antes de adicionar os novos dados
    tabela.innerHTML = "";

    // Adicionar cada sorteio à tabela
    sorteios.forEach(sorteio => {
        let novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerHTML = sorteio.numero;
        novaLinha.insertCell(1).innerHTML = sorteio.data;
        novaLinha.insertCell(2).innerHTML = sorteio.hora;
    });
}

// Função para verificar se o administrador tem permissão para limpar o histórico
function verificarLoginAdmin() {
    const senha = prompt("Digite a senha para acessar a função de limpar histórico");
    if (senha === "admin123") {  // Substitua pela senha real
        document.getElementById('limparHistorico').style.display = 'block';  // Exibe o botão de limpar histórico
        document.getElementById('acessoAdmin').style.display = 'none';  // Esconde o botão de "Acessar Admin"
    } else {
        alert('Senha incorreta!');
    }
}

// Função para limpar o histórico
function limparHistorico() {
    if (confirm("Tem certeza que deseja limpar o histórico?")) {
        localStorage.removeItem("historico");
        alert('Histórico limpo!');
        exibirHistorico(); // Atualiza a tabela após limpeza
    }
}

// Chama a função de exibição do histórico quando a página carrega
window.onload = function() {
    exibirHistorico();
};
