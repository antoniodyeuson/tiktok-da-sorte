// Função para exibir o histórico de sorteios
function exibirHistorico() {
    const mesSelecionado = document.getElementById("mesSelecionado").value;
    const sorteios = JSON.parse(localStorage.getItem("sorteios")) || [];
    const sorteiosMes = sorteios.filter(sorteio => {
        const dataSorteio = new Date(sorteio.data);
        return dataSorteio.getMonth() + 1 === parseInt(mesSelecionado);
    });

    const resultadoHistorico = document.getElementById("resultadoHistorico");
    resultadoHistorico.innerHTML = "";

    if (sorteiosMes.length === 0) {
        resultadoHistorico.innerHTML = "<p>Nenhum sorteio realizado para o mês selecionado.</p>";
    } else {
        const tabela = document.createElement("table");
        tabela.classList.add("tabelaHistorico");
        tabela.innerHTML = `
            <thead>
                <tr>
                    <th>Número Sorteado</th>
                    <th>Data</th>
                    <th>Hora</th>
                </tr>
            </thead>
        `;
        const corpoTabela = document.createElement("tbody");
        sorteiosMes.forEach(sorteio => {
            const data = new Date(sorteio.data);
            const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
            const horaFormatada = data.toLocaleTimeString("pt-BR", { hour12: false });

            corpoTabela.innerHTML += `
                <tr>
                    <td>${sorteio.numero}</td>
                    <td>${dataFormatada}</td>
                    <td>${horaFormatada}</td>
                </tr>
            `;
        });
        tabela.appendChild(corpoTabela);
        resultadoHistorico.appendChild(tabela);
    }
}

// Verifica o estado do localStorage ao carregar a página
window.onload = function() {
    exibirHistorico();
};
