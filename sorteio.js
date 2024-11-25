// Função para verificar a senha do admin
function verificarSenha() {
    const senhaCorreta = "12345"; // Defina a senha do admin aqui
    const senhaDigitada = document.getElementById("adminPassword").value;
    const btnSorteio = document.getElementById("btnSorteio");

    if (senhaDigitada === senhaCorreta) {
        alert("Senha correta! Agora você pode realizar o sorteio.");
        btnSorteio.disabled = false;  // Habilita o botão do sorteio
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}

// Função para realizar o sorteio
function realizarSorteio() {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um número aleatório de 1 a 100

    // Exibe o número sorteado na página
    const numeroElemento = document.getElementById("numero");
    const numeroSorteadoDiv = document.getElementById("numeroSorteado");

    numeroElemento.textContent = numeroSorteado; // Insere o número sorteado no elemento <span>
    numeroSorteadoDiv.style.display = "block"; // Exibe a div com o número sorteado
}


// Função para adicionar o sorteio ao histórico (armazenando no localStorage)
function adicionarHistorico(numero) {
    const data = new Date();
    const dataFormatada = data.toLocaleDateString();
    const horaFormatada = data.toLocaleTimeString();

    const novoSorteio = { numero, data: dataFormatada, hora: horaFormatada };
    
    // Atualizar histórico no localStorage
    atualizarHistorico(novoSorteio);
}

// Função para atualizar o histórico no localStorage
function atualizarHistorico(sorteio) {
    const sorteios = JSON.parse(localStorage.getItem("historico")) || [];
    sorteios.push(sorteio);
    localStorage.setItem("historico", JSON.stringify(sorteios));
}
