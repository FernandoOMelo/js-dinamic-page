const mensagemListaVazia = document.querySelector('.lista-vazia');

function verificarListaVazia() {
    const itensDaLista = document.querySelectorAll('li').length;
    if (itensDaLista === 0) {
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    };
};

export default verificarListaVazia;