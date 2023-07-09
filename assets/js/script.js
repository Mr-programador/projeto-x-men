const personagens = document.querySelectorAll('.personagem'); // Seleciona todos os elementos com a classe 'personagem'

personagens.forEach((personagem) => { // Itera sobre cada elemento 'personagem'
    personagem.addEventListener('mouseenter', () => { // Adiciona um ouvinte de evento quando o cursor do mouse entra no elemento
        if (window.innerWidth < 450) { // Verifica se a largura da janela é menor que 450 pixels
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola a página para o topo suavemente
        }

        removerSelecaoDoPersonagem(); // Remove a seleção de qualquer personagem anteriormente selecionado
        personagem.classList.add('selecionado'); // Adiciona a classe 'selecionado' ao personagem atual

        alterarImagemPersonagemSelecionado(personagem); // Altera a imagem do personagem grande com base no personagem selecionado
        alterarNomePersonagemSelecionado(personagem); // Altera o nome do personagem grande com base no personagem selecionado
        alterarDescricaoPersonagem(personagem); // Altera a descrição do personagem grande com base no personagem selecionado
    });
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem'); // Seleciona o elemento de descrição do personagem grande
    descricaoPersonagem.innerText = personagem.getAttribute('data-description'); // Define o texto da descrição com base no atributo 'data-description' do personagem selecionado
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem'); // Seleciona o elemento de nome do personagem grande
    nomePersonagem.innerText = personagem.getAttribute('data-name'); // Define o texto do nome com base no atributo 'data-name' do personagem selecionado
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande'); // Seleciona a imagem do personagem grande
    const idPersonagem = personagem.getAttribute('id'); // Obtém o ID do personagem selecionado
    imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`; // Define o caminho da imagem com base no ID do personagem selecionado
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado'); // Seleciona o personagem anteriormente selecionado
    personagemSelecionado.classList.remove('selecionado'); // Remove a classe 'selecionado' do personagem anteriormente selecionado
}