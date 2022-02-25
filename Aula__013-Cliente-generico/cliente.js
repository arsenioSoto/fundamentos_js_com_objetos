function Cliente(nome, codigo, email, saldo) {

    this.nome = nome;
    this.codigo = codigo;
    this.email = email;
    this.saldo = saldo;

    this.despositar = function(valor) {
        this.saldo += valor;
    }

}

const cli = new Cliente("Arsenio", "41236123", "ars@gmail.com", 50);

const cliNovo = new Cliente("Junior", "41236123", "jr@gmail.com", 500);

console.log(cliNovo);