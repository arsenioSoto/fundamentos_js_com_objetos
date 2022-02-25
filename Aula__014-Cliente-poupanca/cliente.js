function Cliente(nome, codigo, email, saldo) {
    this.nome = nome;
    this.codigo = codigo;
    this.email = email;
    this.saldo = saldo;

    //criamos umafuncao depositar
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}
//apartir da nossa funcao cliente estamos crinado um novo cliente
//entao criamos uma nova instancia arsenio
const arsenio = new Cliente("Arsenio", "1254359542", "arsenio@gmail.com", 100);

function ClientePoupanca(nome, codigo, email, saldo, saldoPoupanca) {

    Cliente.call(this, nome, codigo, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const jr = new ClientePoupanca("Junior", "21313455", "jr@gmail.com", 50, 500);

//obj.exemplo = "exemplo";
ClientePoupanca.prototype.depositarPoupanca = function(valor) {
    this.saldoPoupanca += valor;
}

console.log(jr);

jr.depositarPoupanca(300);
//arsenio.depositarPoupanca(300);
console.log(jr.saldoPoupanca);
//console.log(arsenio.saldoPoupanca);