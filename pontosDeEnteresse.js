document.addEventListener('DOMContentLoaded', function() {
    // Obter o modal, o corpo do modal e o botão de fechar
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
  
    // Função para abrir o modal com conteúdo dinâmico
    function openModal(imageUrl, text, descricao) {
      // Definir o conteúdo do modal usando innerHTML
      modalBody.innerHTML = `
        <img src="${imageUrl}" alt="Imagem Modal">
        <h2>"${text}"</h2>
        <p>${descricao}</p>
      `;
      modal.style.display = 'block'; // Exibir o modal
    }
  
    // Adicionar evento de clique para todos os botões que abrem o modal
    document.querySelectorAll('.open-modal-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        const imageUrl = this.getAttribute('data-image'); // Pegar o valor do atributo data-image
        const text = this.getAttribute('data-text'); // Pegar o valor do atributo data-text
        const descricao = this.getAttribute('data-text2');
        openModal(imageUrl, text, descricao); // Chamar a função para abrir o modal
      });
    });
  
    // Fechar o modal quando o "X" for clicado
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none'; // Esconder o modal
      modalBody.innerHTML = ""; // Limpar o conteúdo do modal ao fechar
    });
  
    // Fechar o modal ao clicar fora da área de conteúdo
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        modalBody.innerHTML = ""; // Limpar o conteúdo do modal ao fechar
      }
    });
  });
  