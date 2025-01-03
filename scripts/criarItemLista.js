import gerarDiaDaSemana from './gerarDiaDaSemana.js';
const edtItem = document.getElementById('input-item');
let contador = 1;

export function criarItemDaLista(){ 

    const item = edtItem.value;

    if (item === '') {
        console.log('Por favor, digite um item!');
        return;
    };

    const itemDaLista = document.createElement('li');
    const containerItem = document.createElement('div');
    const checkbox = document.createElement('input');
    const texto = document.createElement('p');
    const dataCompleta = gerarDiaDaSemana();
    const textoData = document.createElement('p');

    containerItem.classList.add('lista-item-container');   
    textoData.classList.add('texto-data');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `checkbox-${contador++}`);
    texto.textContent = item;
    textoData.textContent = dataCompleta;
    containerItem.appendChild(checkbox);
    containerItem.appendChild(texto);
    itemDaLista.appendChild(containerItem);
    itemDaLista.appendChild(textoData); 
    edtItem.value = '';
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            texto.style.textDecoration = 'line-through';
            texto.style.color = 'gray';
        } else {
            texto.style.textDecoration = 'none';
            texto.style.color = 'black';
        }
    });
    return itemDaLista;
};