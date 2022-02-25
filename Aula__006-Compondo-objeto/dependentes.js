//declaramos o nosso obj
const cliente = {
    //chave    //valor
    nome: "Soto",
    idade: 19,
    codigo: "2022000012",
    email: "soto@gmail.com",
    sexo: "Masculino",
    altura: 1.70,
    casado: true,
    telefones: ["852442424", "826385497", "876532487", "861089725"]

}

cliente.dependentes = {
    nome: "Arsenio",
    parentesco: "filho",
    dataNascimento: "03/07/1999",
    sexo: "Masculino"
}

//console.log(cliente);

cliente.dependentes.nome = "Arsenio Soto";
cliente.dependentes.casado = false;

console.log(cliente);