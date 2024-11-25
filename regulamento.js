function exibirInformacoes() {
    const modalidade = document.getElementById('modalidadeSelect').value;
    const tabela = document.getElementById('tabelaModalidade').getElementsByTagName('tbody')[0];
    const conteudoRegras = document.getElementById('conteudoRegras');
    const tabelaInformacoes = document.getElementById('tabelaInformacoes');
    
    // Limpar conteúdo anterior
    tabela.innerHTML = '';
    conteudoRegras.innerHTML = '';

    // Exibir conteúdo conforme a modalidade selecionada
    if (modalidade === 'modalidadeAcessivel') {
        tabelaInformacoes.style.display = 'block';
        conteudoRegras.style.display = 'none';

        const row = tabela.insertRow();
        row.insertCell(0).textContent = 'Modalidade Acessível (Heart Me)';
        row.insertCell(1).textContent = 'Ativar o Heart Me e participar ao vivo';
        row.insertCell(2).textContent = 'Prêmios pequenos, mas frequentes';
        row.insertCell(3).textContent = 'Envolver o público e aumentar a interação';

    } else if (modalidade === 'modalidadePaga') {
        tabelaInformacoes.style.display = 'block';
        conteudoRegras.style.display = 'none';

        const row = tabela.insertRow();
        row.insertCell(0).textContent = 'Modalidade Paga';
        row.insertCell(1).textContent = 'Comprar cotas para participar';
        row.insertCell(2).textContent = 'Prêmios maiores, mais exclusivos';
        row.insertCell(3).textContent = 'Gerar receita para o sorteio';

    } else if (modalidade === 'modalidadeSubinscritos') {
        tabelaInformacoes.style.display = 'block';
        conteudoRegras.style.display = 'none';

        const row = tabela.insertRow();
        row.insertCell(0).textContent = 'Modalidade Exclusiva para Subinscritos';
        row.insertCell(1).textContent = 'Ser assinante do canal';
        row.insertCell(2).textContent = 'Prêmios exclusivos e chances aumentadas';
        row.insertCell(3).textContent = 'Fidelizar e premiar seguidores leais';

    } else if (modalidade === 'regras-tiktok') {
        tabelaInformacoes.style.display = 'none';
        conteudoRegras.style.display = 'block';
        conteudoRegras.innerHTML = `
            <h2>Regras para Sorteios no TikTok</h2>
            <p>Os sorteios realizados na plataforma TikTok seguem uma série de diretrizes e normas estabelecidas para garantir a transparência, a segurança e a conformidade com as regras da plataforma.</p>
            
            <h3>1. Definição de Sorteios Permitidos</h3>
            <p>Os sorteios realizados no TikTok devem ser claros em suas regras, prêmios e processos. Eles devem ser realizados de maneira transparente e honesta, sem criar falsas expectativas.</p>

            <h3>2. Transparência e Divulgação dos Prêmios</h3>
            <p>Os prêmios oferecidos no sorteio devem ser anunciados claramente para os participantes. O TikTok exige que todos os prêmios sejam legítimos, não sendo permitido a premiação de itens irreais ou virtuais sem uma contraprestação clara.</p>

            <h3>3. Regras de Participação</h3>
            <p>A participação em sorteios deve ser simples e acessível, com uma explicação clara sobre como os usuários podem participar. Não pode haver custos ocultos ou exigências irreais para a participação.</p>

            <h3>4. Proibição de Práticas Enganosas</h3>
            <p>É proibido utilizar táticas enganosas para atrair participantes, como alegações falsas sobre a chance de ganhar ou promessas de prêmios não entregues. Qualquer sorteio deve ser transparente quanto às chances de ganho e prêmios.</p>

            <h3>5. Regulamento do Sorteio</h3>
            <p>Todo sorteio deve ter um regulamento claro que descreva as regras de participação, os prêmios e a forma de realização do sorteio. O regulamento deve ser disponibilizado aos participantes de forma acessível.</p>

            <h3>6. Não Permissão de Sorteios Ilícitos</h3>
            <p>O TikTok não permite sorteios relacionados a atividades ilegais, como jogos de azar, apostas ou sorteios baseados em questões de conduta ilegal.</p>

            <h3>7. Prêmios Virtuais</h3>
            <p>Embora o TikTok permita prêmios virtuais, os participantes devem ser informados de que não há conversão de prêmios virtuais em prêmios físicos, exceto em casos específicos onde seja acordado e regulamentado.</p>

            <h3>8. Proteção dos Participantes</h3>
            <p>Todos os participantes devem ser protegidos contra práticas de phishing, fraudes e outras tentativas de violação de dados. A privacidade dos participantes deve ser respeitada e mantida de acordo com as leis de proteção de dados.</p>

            <h3>9. Proibição de Manipulação de Sorteios</h3>
            <p>Manipular sorteios, através da seleção ou escolha não aleatória dos vencedores, é estritamente proibido. O TikTok exige que os sorteios sejam feitos de forma justa e que os vencedores sejam escolhidos aleatoriamente, sem qualquer tipo de interferência.</p>

            <h3>10. Responsabilidade do Organizador</h3>
            <p>O organizador do sorteio é responsável por garantir que o sorteio seja conduzido de acordo com as regras estabelecidas e que todos os prêmios sejam entregues aos vencedores de forma justa.</p>
            
            <h3>11. Alterações nas Regras</h3>
            <p>Os organizadores do sorteio podem alterar as regras do sorteio a qualquer momento, desde que isso seja comunicado claramente aos participantes. Nenhuma alteração pode afetar a transparência ou a integridade do sorteio.</p>

            <h3>12. Compliance com a Legislação Local</h3>
            <p>Os sorteios realizados através do TikTok devem estar em conformidade com a legislação local, incluindo as regras de promoção e sorteios do país onde o sorteio está sendo realizado.</p>
        `;
    } else {
        tabelaInformacoes.style.display = 'none';
        conteudoRegras.style.display = 'none';
    }
}
