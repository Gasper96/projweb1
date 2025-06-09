let char = new cavaleiro('GABS');
let monster = new monstrinho();

const mapa = new cenario(
    char,
    monster,
    document.querySelector('#personagem'),
    document.querySelector('#inimigo')
);

mapa.inicio();
