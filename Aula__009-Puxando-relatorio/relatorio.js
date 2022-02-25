const cliente = {
    //chave    //valor
    nome: "Soto",
    idade: 19,
    codigo: "2022000012",
    email: "soto@gmail.com",
    sexo: "Masculino",
    altura: 1.70,
    casado: true,
    telefones: ["852442424", "826385497", "876532487", "861089725"], // temos um array de telefone

    dependentes: [ //temos um array de objetos
        {
            nome: "Arsenio Soto",
            parentesco: "filho",
            dataNascimento: "03/07/2022",
            sexo: "Masculino"
        },
        {
            nome: "Junior Soto",
            parentesco: "filho",
            dataNascimento: "03/07/1999",
            sexo: "Masculino"
        }
    ],

    saldo: 50,
    //depositar
    depositar: function(valor) {
        this.saldo += valor; //50 + 50 = 100
    }

}

//let ref = " ";

//for (let inf in cliente) {

//ref += `${inf}`; puxar chave
// ref += `- ${cliente[inf]}`; puxa valor
//}

//console.log(ref);

let relatorio = " ";

for (let chave in cliente) {

    if (typeof cliente[chave] === "object" || typeof cliente[chave] === "function") {
        continue;
    } else {
        relatorio += `
        ${chave} == ${cliente[chave]}
        `;
    }
}

console.log(relatorio);