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

class chaves extends personagem{

    constructor(){
        super('Chaves');
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

class quico extends personagem{

    constructor(){
        super('Quico');
        this.life = 100;
        this.ataque = 8;
        this.defesa = 10;
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
    constructor(lutador1,lutador2, lutador1el, lutador2el, logobject){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.lutador1el = lutador1el;
        this.lutador2el = lutador2el;
        this.log = logobject;
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
        if(atacante.life <= 0){
            this.log.addmensagem(`${Atacante.nome} não pode atacar ele já está caído.`) 
            return;
        }
        if(atacado.life <= 0 ){
            this.log.addmensagem(`${atacado.nome} já está caído.`)
            return;
        }
        this.log.addmensagem(`${atacante.nome} está atacando ${atacado.nome}`);

        let fatorDeAtq = (Math.random() * 2).toFixed(2);
        let ataqueatual = atacante.ataque * fatorDeAtq;

        let fatorDeDef = (Math.random() * 2).toFixed(2);
        let defesaatual = atacado.defesa * fatorDeDef;

        if(ataqueatual > defesaatual){
            atacado.life = (atacado.life - ataqueatual).toFixed(2);
            this.log.addmensagem(`${atacante.nome} causou ${ataqueatual.toFixed(2)} de dano.`);
        } else{
            this.log.addmensagem(`${atacado.nome} conseguiu defender.`);
        }
        
            this.update();
    }
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addmensagem(msg){
        this.list.push(msg);
        this.mostrar();
    }

    mostrar(){
        this.listEl.innerHTML = '';
        
        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}