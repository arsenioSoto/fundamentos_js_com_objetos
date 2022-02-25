class Cliente {
    constructor(nome, email, codigo, saldo) {
        this.nome = nome;
        this.email = email;
        this.codigo = codigo;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }

}

const arsenio = new Cliente("Arsenio", "arsenio@gmail.com", "342454", 1000);


arsenio.depositar(200);
arsenio.exibirSaldo();

console.log(arsenio);