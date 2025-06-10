let log = new Log(document.querySelector('.log'));
let char = new cavaleiro('GABS');
let monster = new monstrao();

const mapa = new cenario(
    char,
    monster,
    document.querySelector('#personagem'),
    document.querySelector('#inimigo'),
    log
    
);


mapa.inicio();
