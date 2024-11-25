function exibirInformacoes() {
    // Obtém a modalidade escolhida
    const modalidadeSelecionada = document.getElementById('modalidadeSelect').value;
    
    // Obtém o elemento de exibição da tabela
    const tabela = document.getElementById('tabelaModalidade').getElementsByTagName('tbody')[0];
    
    // Limpa qualquer conteúdo anterior
    tabela.innerHTML = '';

    // Verifica qual modalidade foi escolhida e exibe as informações correspondentes
    if (modalidadeSelecionada) {
        const informacoes = obterInformacoes(modalidadeSelecionada);
        
        // Cria uma nova linha na tabela
        const novaLinha = tabela.insertRow();

        // Preenche as células com as informações da modalidade
        novaLinha.insertCell(0).innerHTML = informacoes.nome;
        novaLinha.insertCell(1).innerHTML = informacoes.participacao;
        novaLinha.insertCell(2).innerHTML = informacoes.premios;
        novaLinha.insertCell(3).innerHTML = informacoes.objetivo;

        // Exibe a tabela após preencher as informações
        document.getElementById('tabelaInformacoes').style.display = 'block';
    } else {
        alert('Por favor, selecione uma modalidade.');
    }
}

// Função que retorna as informações de acordo com a modalidade
function obterInformacoes(modalidade) {
    switch (modalidade) {
        case 'modalidadeAcessivel':
            return {
                nome: 'Modalidade Acessível (Heart Me)',
                participacao: 'Qualquer pessoa pode participar ativando o "Heart Me" e se tornando membro da equipe.',
                premios: 'Prêmios menores, mas mais atrativos para o público em geral.',
                objetivo: 'Permitir que qualquer pessoa participe de maneira simples e acessível.'
            };
        case 'modalidadePaga':
            return {
                nome: 'Modalidade Paga',
                participacao: 'A participação exige a compra de pontos (cotas) através do envio de presentes no TikTok.',
                premios: 'Prêmios maiores e exclusivos, com sorteios periódicos.',
                objetivo: 'Proporcionar uma forma de engajamento mais exclusiva e com prêmios de maior valor.'
            };
        case 'modalidadeSubinscritos':
            return {
                nome: 'Modalidade Exclusiva para Subinscritos',
                participacao: 'A participação será exclusiva para aqueles que são subinscritos no TikTok.',
                premios: 'Prêmios especiais, com sorteios dedicados apenas aos subinscritos.',
                objetivo: 'Valorizar a comunidade de subinscritos, oferecendo prêmios exclusivos.'
            };
        default:
            return {};
    }
}
