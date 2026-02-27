class Animal{
    especie;
    #genero;
    #qtdeIndividuos;
    #nome;

    constructor(especie, genero, qtde, nome){
        this.especie = especie;
        this.#genero = genero;
        this.#qtdeIndividuos = qtde;
        this.#nome = nome;
    }

    //método mostrar
    mostrar(){
        console.log("Gênero", this.#genero);
        console.log("Quantidades de Individuos",this.#qtdeIndividuos);
        console.log("Nome",this.#nome);
    }
}

const panda = new Animal('urso', 'fêmea', 2, 'Peppa e Pig');
console.log(panda);
panda.mostrar();