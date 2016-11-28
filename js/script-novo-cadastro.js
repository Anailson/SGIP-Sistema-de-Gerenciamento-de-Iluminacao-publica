
/*! Script usado no arquivo novo-contato.php */

// Aplica a biblioteca chosen em todos os selects 
$(function() {
	$("select").chosen({
		width: "100%",
		no_results_text: "Nenhum resulado encontrado para: "
	});
});

function searchCEP(cep){
	// alert(cep);
	// cep = cep.replace(".", "").replace("-", "");
	alert(cep);
	if(cep == ''){
		alert("Por favor, informe um CEP  sfgh sfghsdfh sd h");
	} else {
		var script = document.createElement("script");
		script.src = '//viacep.com.br/ws/'+ cep + '/json/?callback=fillFields'
		document.body.appendChild(script);
	}
}

function fillFields(conteudo){
	
	if (!("erro" in conteudo)) {
		
		fillField("logradouro", conteudo.logradouro);
		fillField("bairro", conteudo.bairro);
		fillField("cidade", conteudo.localidade);
		fillField("uf", conteudo.uf);
		document.getElementById("numPredialProx").focus();
		
	} else {
		
		alert("Não foi possível encontar os dados para o  CEP informado. \nClique em 'Consultar CEP' para pesquisar pelo seu CEP.");
		disabled(false, 'logradouro');
		clearField('logradouro');
		disabled(false, 'bairro');
		clearField('bairro');
		disabled(false, 'cidade');
		clearField('cidade');
		disabled(false, 'uf');
		clearField('uf');
	}
}

function fillField(id, value){
	document.getElementById(id).value = value;
	disabled(true, id);
}

function disabled(flag, id){
	document.getElementById(id).disabled = flag;
}

function clearField(id){
	document.getElementById(id).value = '';
}

function verifyPass(el){
	
	root = el.parentElement;
	if(el.value == ''){
		
		root.classList.add("has-error");
	} else {
		if (root.classList.contains("has-error")){
			root.classList.remove("has-error");
		}
	}
}

function isMatchPassword(){
	var pass = document.getElementById("senha").value;
	var confirmPass = document.getElementById("conf-senha").value;
	
	// if(pass == ''){
		
	// }
}