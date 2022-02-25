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
    telefones: ["852442424", "826385497", "876532487", "861089725"],

    dependentes: [{
        nome: "Arsenio Soto",
        parentesco: "filho",
        dataNascimento: "03/07/2021",
        sexo: "Masculino"
    }]
}

cliente.dependentes.push({
    nome: "Junior Soto",
    parentesco: "filho",
    dataNascimento: "03/07/2022",
    sexo: "Masculino"
});

//console.log(cliente);

const filho = cliente.dependentes.filter(dependente => dependente.dataNascimento === "03/07/2022");

console.log(filho);