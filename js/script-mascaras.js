/*! Script used to validates the masks on form novo-cadastro.php (and maybe others)*/
// Refatore or don't change ids

$('document').ready(function(){
	$("#cpf").mask("999.999.999-99");
	$("#nascimento").mask("99/99/9999");
	$("#cep").mask("99.999-999");
});	

function validateCPF(cpf){
	
	var exp = /\.|\-/g
	var cpf = cpf.toString().replace(exp, ""); 
	var digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
	var soma1 = 0, soma2 = 0;
	var vlr = 11;

	for(i=0; i < 9; i++){
		soma1 += eval(cpf.charAt(i) * (vlr-1));
		soma2 += eval(cpf.charAt(i) * vlr);
		vlr--;
	}
	
	soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
	soma2=(((soma2+(2*soma1))*10)%11);

	var digitoGerado=(soma1*10)+soma2;
	if(digitoGerado != digitoDigitado){
		alert('CPF Invalido!');      
	}
}

function validateData(date){
	
	var exp = /\d{2}\/\d{2}\/\d{4}/
	if(!exp.test(date)){
		alert('Informe uma data no formato dd/mm/aaaa.');
	} else {
	
		var splitDate = date.split("/");
		if( (splitDate[0] < 1) || (splitDate[0] > 31) //DAY
			|| (splitDate[1] < 1) || (splitDate[1] > 12)  //MONTH
			|| (splitDate[2] < 1)){ //YEAR
		
			alert('Data Invalida!');
		}
	}
}