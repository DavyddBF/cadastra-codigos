const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let codigos = Array(10).fill(-1);

function menu() {
	console.log(`
		Menu
		----
		1 - Cadastrar
		2 - Listar todos
		0 - Sair
	`);
	
	rl.question('Escolha uma opção: ', (op) => {
		switch (op) {
			case '1':
				cadastrar();
				break;
			case '2':
				listarTodos();
				break;
			case '0':
				console.log('Saindo...');
				rl.close();
				break;
			default:
				console.log(`A opção '${op}' é invalida, escolha um opção valida!`);
				console.log('--------------------');
				menu();
				break;
		}
	});
}

function cadastrar() {
	rl.question('Escreva o código do produto: ', (codigo) => {
		codigo = parseInt(codigo);
		if(codigo === -1 || codigos.includes(codigo)) {
			console.log('O codigo do produto não pode ser cadastrado!');
			menu();
		} else {
			const posicaoVazia = codigos.indexOf(-1);
			if(posicaoVazia !== -1) {
				codigos[posicaoVazia] = codigo;
				console.log('Código cadastrado com sucesso!');
				menu();
			} else {
				console.log('Sem espaços para cadastrar um novo produto!!')
				menu();
			}
		}
	});
}

function listarTodos() {
	const codigosCadastrados = codigos.filter(codigo => codigo !== -1);
	if(codigosCadastrados.length == 0) {
		console.log('Nenhum codigo cadastrado!');
	} else {
		codigosCadastrados.forEach(codigo => console.log(codigo));
	}
	
	menu();
}

menu();


//<p style="position: relative; left: 35%; top: 35%;>Davyd Ferreira</p>