// Classe Heroi

class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }   

    atacar() {
        let ataque;

        switch (this.tipo){
                case "mago":
                    ataque = 'magia';
                    break; 
                case 'guerreiro':
                    ataque = 'espada';
                    break;
                case 'monge':
                    ataque = 'artes marciais';
                    break;    
                case 'ninja':
                    ataque = 'shuiken';
                    break;
                default:
                    ataque = 'realizou um ataque';
            }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

}

const heroi1 = new Heroi('Merlin', 68, 'mago');
const heroi2 = new Heroi('Bruce Lee', 30, 'monge');
const heroi3 = new Heroi('Lu Bu', 29, 'artes marciais')
const heroi4 = new Heroi('Snake Eyes', 28, 'ninja');


heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()