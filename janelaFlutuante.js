document.addEventListener('DOMContentLoaded', function (){
    let ultimoLinkUsado = '';//armazena o ultimo link clicado

    //abre modal e carrega a url no iframe
    function openModal(url) {
        const iframe = document.getElementById('modal-iframe');
        iframe.scr = url;

        if (iframe.onload)
        {
            document.getElementById('modal').style.display = 'block';
        } else {
            document.getElementById('modal').style.display = 'block';
            alert("Estamos com problemas para carrega o site, tente novamente. \n Ou clique no texto vermelho para abrir em uma nova aba.");
        }

        ultimoLinkUsado = url;
    }

    //adiciona evento de click para cada link da classe 'open-modal'
    document.querySelectorAll('.open-modal').forEach(function(link){
        link.addEventListener('click', function(event){
            event.preventDefault(); //evita o redirecionamento
            const url = this.getAttribute('data-url');
            openModal(url);
        });
    });

    //fecha o modal clicando no 'X'
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modal-iframe').scr = ""; //Limpa o iframe
    });

    //mecanismo de segurança para falhas de carregamento
    document.getElementById('nova-aba').addEventListener('click', function() {
        if(ultimoLinkUsado) {
            window.open(ultimoLinkUsado, '_blank');
        } else {
            alert ('Nenhuma notícia foi escolhida ainda!');
        }
    });
});