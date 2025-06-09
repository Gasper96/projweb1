class personagem{

    _life = 1;
    maxlife = 1;
    ataque = 0;
    defesa = 0;

    constructor(nome){
        this.nome = nome;
    }

    get life(){
        return this._life;
    }

    set life(novolife){
        this._life = novolife < 0 ? 0 : novolife; /* if novolife < 0 { novolife = 0} ( ? = então)
                                                     else { novolife = novolife}     ( : = senão)*/
    }

} 

class cavaleiro extends personagem{

    constructor(nome){
        super(nome);
        this.life = 100;
        this.ataque = 10;
        this.defesa = 8;
        this.maxlife = this.life;

    }
}
 
class mago extends personagem{
    
    constructor(nome){
        super(nome);
        this.life = 80;
        this.ataque = 15;
        this.defesa = 3;
        this.maxlife = this.life;
    }
}

class monstrinho extends personagem{

    constructor(){
        super('Monstrinho');
        this.life = 40;
        this.ataque = 4;
        this.defesa = 4;
        this.maxlife = this.life;
    }
}

class monstrao extends personagem{

    constructor(){
        super('Monstrão')
        this.life = 120;
        this.ataque = 16;
        this.defesa = 6;
        this.maxlife = this.life;
    }
}

class cenario{
    constructor(lutador1,lutador2, lutador1el, lutador2el){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutador1el = lutador1el;
        this.lutador2el = lutador2el;
    }
    inicio(){
        this.update();
        this.lutador1el.querySelector('.atacar').addEventListener('click', () => this.fzAtack(this.lutador1, this.lutador2))
        this.lutador2el.querySelector('.atacar').addEventListener('click', () => this.fzAtack(this.lutador2, this.lutador1))

    }

    update(){
        //lutador 1:
        this.lutador1el.querySelector('.nome').innerHTML = `${this.lutador1.nome} --> ${this.lutador1.life} HP%`
        let lut1vd = (this.lutador1.life / this.lutador1.maxlife) * 100;
        this.lutador1el.querySelector('.hp').style.width = `${lut1vd}%`;                

        //lutador 2:
        this.lutador2el.querySelector('.nome').innerHTML = `${this.lutador2.nome} --> ${this.lutador2.life} HP%`
        let lut2vd = (this.lutador2.life / this.lutador2.maxlife) * 100;
        this.lutador2el.querySelector('.hp').style.width = `${lut2vd}%`;

    };

    fzAtack(atacante, atacado) {
        console.log(`${atacante.nome} está atacando ${atacado.nome}`);
        this.update();      
  n
    }
}