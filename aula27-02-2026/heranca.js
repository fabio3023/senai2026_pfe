class Jogador{
    #nome;
    #numero;

    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero
    }
} //classe mãe geralmente não é instanciada

class jogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, qtdeGols){
        super(nome, numero);
        this.peDominante = peDominante;
        this.totalGols = qtdeGols;
    }
    fazerGol(qtd){
        this.totalGols += qtd
    }

    mostrar(){
        return `O jogador ${super.getNome()} camisa número ${super.getNumero()} tem o pé dominante ${this.peDominante} e tem ${this.totalGols} gols`
    }
}

const jorge = new jogadorFutebol('Jorge', 10, 'direito', 10);
jorge.fazerGol(3);
console.log(jorge.mostrar());