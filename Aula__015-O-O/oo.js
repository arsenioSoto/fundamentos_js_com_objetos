//Orientacao a Objetos = 

//classes 

///class Pessoa {
//definimos a funcao que invocamos para que sempre que dermos um new
//ou seja para criar uma nova instancia, e no construtor
//passamos os dados
//	construtor(nome, apelido, email){
//	this.nome = nome;
//	this.apelido = apelido;
//	this.email = email;
//	}
//}

//exibirNome(){
//	console.log(`${this.nome}`);
//}

//Herenca

//class Programador extends Pessoa{
//	construtor(nome, apelido, email, linguagem){
//	super(nome, apelido, email);//chamando o construtor da classe pessoa
///	this.linguagem = linguagem;//this define oque e somente propriedade de programador
//}
//}

//Objetos

const programador = new Programador("Arsenio", "soto", "soto@gmail.com", "JavaScript");