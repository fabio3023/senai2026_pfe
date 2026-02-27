class Produto {
    nome = '';
    preco = 0;
    estoque = 0;

    validar() {
        if (this.preco < 0 || this.estoque < 0) {
            return 'Erro: preço ou estoque inválido';
        }
        return 'Produto válido';
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
        return 'Novo preço: ' + this.preco;
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }
}

const produto1 = new Produto();
produto1.nome = 'Notebook';
produto1.preco = 3000;
produto1.estoque = 5;

const produto2 = new Produto();
produto2.nome = 'Mouse';
produto2.preco = 100;
produto2.estoque = 10;

console.log(produto1.aplicarDesconto(10));

if (produto1.valorEmEstoque() > produto2.valorEmEstoque()) {
    console.log('Produto 1 tem maior valor em estoque');
} else {
    console.log('Produto 2 tem maior valor em estoque');
}