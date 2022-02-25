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

    //evitar
    //telefone1: "2136216357125673";
    //telefone2: "213621678686878";
}

//cliente.telefones.forEach(telefone => console.log(telefone));

cliente.telefones.push("2136216357125673");


cliente.telefones.forEach(telefone => console.log(telefone));