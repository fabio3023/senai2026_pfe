class Bicicleta{
    #modelo;
    #marca;
    #cor;
    #velocidademaxima;

    setvelocidadeMaxima(valor){
        if(valor>35){
            console.log('Velocidade não permitida')
        } else{
            this.#velocidademaxima = valor;
        }
    }
    getvelocidadeMaxima(){
        return this.#velocidademaxima;
    }
}

const bicicreta = new Bicicleta();
bicicreta.setvelocidadeMaxima(36);
console.log(bicicreta.getvelocidadeMaxima());
