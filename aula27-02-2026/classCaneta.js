class Caneta{
    cor = 'amarela';
    marca = 'Faber Castell';
    ponta = 'fina';
    qtdTinta = 10; //ml
    tampa = false; 
    
    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }
    getQtdTinta(){
        return this.qtdTinta;
    }
    /*criar um método sublinhar, que rece um parâmetro valor que vai representar a quantidade gasta de tinta ao sublinhar, 
    desconte da quantidade de tinta e mostre a qtd restante, porém não permita que seja subtraida se o valor for maior do que 
    a qtde de tinta da classe */
    sublinhar(valor){
        if(valor < this.qtdTinta){
            valor -= 1;
            return 'A quantidade de tinta restante é ' + this.qtdTinta
        } else{
            return 'Tinta insuficiente';
        }
    }
    /* criar método recarregar que recebe um valor e soma esse valor a quantidade de tinta da class, 
    considerando que a qtde de tinta não pode ser maior do que 15ml */
    aumentar(valor2){
        if(this.qtdTinta + valor2 <15){
            this.qtdTinta += 1;
            return 'A quantidade de tinta é ' + this.qtdTinta;
        } else {
            return 'Tinta demais'
        }
    }
}

const canetaPontaFina = new Caneta();
console.log(canetaPontaFina.sublinhar(9));
console.log(canetaPontaFina.aumentar(4));
console.log('A quantidade restante de tinta é ' + canetaPontaFina.getQtdTinta());