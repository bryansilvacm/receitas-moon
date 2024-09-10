function pesquisar() {
	let pesquisa = document.querySelector('#pesquisar_receita').value.toLowerCase();
	let resultado = receitas.filter(receita => receita.nome.toLowerCase().includes(pesquisa)
);

	exibirResultados(resultado);


}

function exibirResultados(resultado){

	let resultadoDiv = document.querySelector('.resultado_pesquisa'); //pega o container onde irá ser mostrado a receita
	resultadoDiv.innerHTML = ''; // limpa os resultados anteriores
	
	//verifica se o resultado está vazio, ou seja, não tem receita com o nome pesquisado pelo usuário
	if(resultado.length === 0){
	resultadoDiv.innerHTML = '<p>Nenhuma Receita Encontrada.</p>';
	return;
}
	
	//usa o método forEach para iterar sobre todos os objetos (receitas) encontrados e adicionados ao array resultado
	resultado.forEach(receita => {
		let receitaHTML = `
			<div class="item_result">
		          <div class="titulo_img">
			    <h2>${receita.nome}</h2>
		            <img src="${receita.img}" alt="${receita.nome}">		
			  </div>
			  <h3>Descrição:</h3>
			  <p>${receita.descricao}</p>
			  <h3>Ingredientes:</h3>
			  <pre>${receita.ingredientes}</pre>
			  <h3>Modo de Preparo:</h3>
			  <p>${receita.preparo}</p>
			</div>
`;
	resultadoDiv.innerHTML += receitaHTML;
});

}