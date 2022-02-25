//dlecaracao de objeto
const cliente = {
    //chaves    valores
    nome: "Soto",
    idade: 19,
    codigo: "2022000012",
    email: "soto@gmail.com",
    sexo: "Masculino",
    altura: 1.70,
    casado: false
}

console.log(`Meu nome eh ${cliente.nome} e tenho ${cliente.idade} anos de idade, e sou casado ${cliente.casado}.`);

console.log(cliente.codigo.substring(0, 6));