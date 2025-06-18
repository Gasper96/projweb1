let log = new Log(document.querySelector('.log'));
let _chaves = new chaves();
let _quico = new quico();

const mapa = new cenario(
    _chaves,
    _quico,
    document.querySelector('#personagem'),
    document.querySelector('#inimigo'),
    log
    
);


mapa.inicio();
