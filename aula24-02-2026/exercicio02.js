class Cidade {
    qtdeHabitantes = 300000;
    nome = 'Bauru';
    estado = 'São Paulo';

    mostrar(){
        console.log(this.qtdeHabitantes);
        console.log(this.nome);
        console.log(this.estado);
    }
}
const informacao = new Cidade();
informacao.mostrar();
