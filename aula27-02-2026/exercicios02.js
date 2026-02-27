class Tarefa {
    titulo = '';
    descricao = '';
    concluida = false;

    concluir() {
        this.concluida = true;
        return 'Tarefa concluída';
    }

    reabrir() {
        this.concluida = false;
        return 'Tarefa reaberta';
    }
}

class ListaTarefas {
    tarefa1 = null;
    tarefa2 = null;
    tarefa3 = null;

    adicionar(tarefa) {
        if (this.tarefa1 == null) {
            this.tarefa1 = tarefa;
        } else if (this.tarefa2 == null) {
            this.tarefa2 = tarefa;
        } else if (this.tarefa3 == null) {
            this.tarefa3 = tarefa;
        } else {
            return 'Lista cheia';
        }

        return 'Tarefa adicionada';
    }

    removerPorTitulo(titulo) {
        if (this.tarefa1 && this.tarefa1.titulo == titulo) {
            this.tarefa1 = null;
        }
        if (this.tarefa2 && this.tarefa2.titulo == titulo) {
            this.tarefa2 = null;
        }
        if (this.tarefa3 && this.tarefa3.titulo == titulo) {
            this.tarefa3 = null;
        }

        return 'Tarefa removida';
    }

    listar() {
        console.log(this.tarefa1);
        console.log(this.tarefa2);
        console.log(this.tarefa3);
    }
}
const lista = new ListaTarefas();

const t1 = new Tarefa();
t1.titulo = 'Estudar';

const t2 = new Tarefa();
t2.titulo = 'Academia';

const t3 = new Tarefa();
t3.titulo = 'Mercado';

lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

t1.concluir();
lista.removerPorTitulo('Academia');

lista.listar();
