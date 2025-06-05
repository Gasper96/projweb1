class personagem{

    _life = 1;
    maxlife = 1;
    atack = 0;
    defesa = 0;

    constructor(name){
        this name = name;
    }

    get life{
        return this._life;
    }

    set life(novolife){
        this._life = novolife < 0 ? 0 : novolife;
    }
}   