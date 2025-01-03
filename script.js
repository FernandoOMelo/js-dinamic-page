import { criarItemDaLista } from './scripts/criarItemLista.js';
import verificarListaVazia from './scripts/verificaListaVazia.js';

const listaDeItens = document.getElementById('lista-de-compras');
const btnAdd = document.getElementById('adicionar-item');


btnAdd.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeItens.appendChild(itemDaLista); 
    verificarListaVazia(); 
});

verificarListaVazia();


