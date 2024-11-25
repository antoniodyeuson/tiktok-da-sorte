// Função para verificar a senha e liberar os botões de administração
function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Checando a senha
    if (senha === "admin123") { // Defina a senha que você deseja
        // Torna os botões de administração visíveis
        document.getElementById("admin-buttons").style.display = "block";

        // Limpa a mensagem de erro
        mensagemErro.innerText = "";

        // Desabilita o campo de senha após sucesso
        document.getElementById("senha").disabled = true;
    } else {
        // Exibe a mensagem de erro na página se a senha estiver errada
        mensagemErro.innerText = "Senha incorreta. Tente novamente.";
    }
}

// Função para liberar o sorteio
function liberarSorteio() {
    // Armazena o estado de sorteio liberado no localStorage
    localStorage.setItem("sorteioLiberado", "true");

    // Exibe a mensagem de sucesso na própria página
    document.getElementById("mensagemSucesso").innerText = "Sorteio liberado com sucesso! Redirecionando para a página de sorteio...";
    document.getElementById("mensagemSucesso").style.color = "green";

    // Redireciona para a página de sorteio após 2 segundos
    setTimeout(function() {
        window.location.href = "sorteio.html";
    }, 2000);
}

// Função para limpar o histórico de sorteios
function limparHistorico() {
    // Remove o histórico correto do localStorage
    localStorage.removeItem("sorteios");

    // Verifica se o usuário está na página de histórico e atualiza o conteúdo
    if (window.location.pathname.includes("historico.html")) {
        const resultadoHistorico = document.getElementById("resultadoHistorico");
        if (resultadoHistorico) {
            resultadoHistorico.innerHTML = "<p>Nenhum sorteio realizado até o momento.</p>";
        }
    }

    // Exibe a mensagem de sucesso
    document.getElementById("mensagemSucesso").innerText = "Histórico de sorteios limpo com sucesso.";
    document.getElementById("mensagemSucesso").style.color = "green";
}


// Função para verificar o estado dos botões quando a página for carregada
window.onload = function() {
    // Inicialmente, os botões estarão ocultos
    document.getElementById("admin-buttons").style.display = "none";
    
    // Habilita o campo de senha para digitar novamente
    document.getElementById("senha").disabled = false;

    // Adiciona o evento para verificar a senha
    document.getElementById("senha").addEventListener("input", verificarSenha);
};
