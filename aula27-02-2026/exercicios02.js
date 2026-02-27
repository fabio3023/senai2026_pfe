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
    tarefas = [];

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
        return 'Tarefa adicionada';
    }

    removerPorTitulo(titulo) {
        this.tarefas = this.tarefas.filter(t => t.titulo !== titulo);
        return 'Tarefa removida';
    }

    listar(concluidas = null) {
        if (concluidas === null) {
            return this.tarefas;
        }

        return this.tarefas.filter(t => t.concluida === concluidas);
    }
}
const lista = new ListaTarefas();

const t1 = new Tarefa();
t1.titulo = 'Estudar';
t1.descricao = 'Estudar JS';

const t2 = new Tarefa();
t2.titulo = 'Academia';
t2.descricao = 'Treino';

const t3 = new Tarefa();
t3.titulo = 'Mercado';
t3.descricao = 'Comprar frutas';

lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

t1.concluir();
lista.removerPorTitulo('Academia');

console.log('Todas:', lista.listar());
console.log('Concluídas:', lista.listar(true));
console.log('Pendentes:', lista.listar(false));
