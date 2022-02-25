//declaramos o nosso obj
const cliente = {
    //chave    //valor
    nome: "Soto",
    idade: 19,
    codigo: "2022000012",
    email: "soto@gmail.com",
    sexo: "Masculino",
    altura: 1.70,
    casado: true
}


const chaves = ["nome", "idade", "codigo", "email", "sexo", "altura", "casado"];

//console.log(cliente[chaves[0]]);

//chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["morada"]);