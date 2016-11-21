
/*! Script usado no arquivo registarOcorrencia.php */
var currentDiv = 0;

function updateProgressBar(id, value){
	document.getElementById(id).style.width = value;
}

function updateClasses(id, addClasses, removeClasses){
	element = document.getElementById(id);
	// (Button disable) => btn-default disabled block-button
	// (Button enable) => btn-primary
	
	// (li disable) => btn-default disabled block-button
	// (li enable) => active
	
	for(var i = 0; i < removeClasses.length; i++){
		if(element.classList.contains(removeClasses[i])){
			element.classList.remove(removeClasses[i]);
		}
	}
	
	for(var i = 0; i < addClasses.length; i++){
		if(!element.classList.contains(addClasses[i])){
			element.classList.add(addClasses[i]);
		}
	}
}

function updateDivs(){
	
	hide(false, "step-" + currentDiv);
	
	switch(currentDiv){
		case 0:
			updateProgressBar("progress-bar", "20%");
			hide(true, "step-1");
			hide(true, "step-2");
			hide(true, "step-3");
			hide(true, "step-4");
		break;
		case 1:
			updateProgressBar("progress-bar", "40%");
			hide(true, "step-0");
			hide(true, "step-2");
			hide(true, "step-3");
			hide(true, "step-4");
		break;
		case 2:
			updateProgressBar("progress-bar", "60%");
			hide(true, "step-0");
			hide(true, "step-1");
			hide(true, "step-3");
			hide(true, "step-4");
		break;
		case 3:
			updateProgressBar("progress-bar", "80%");
			hide(true, "step-0");
			hide(true, "step-1");
			hide(true, "step-2");
			hide(true, "step-4");
		break;
		case 4:
			updateProgressBar("progress-bar", "100%");
			hide(true, "step-0");
			hide(true, "step-1");
			hide(true, "step-2");
			hide(true, "step-3");
		break;
	}
}

function hide(flag, id){
	element = document.getElementById(id);
	if(flag){
		
		if(!element.classList.contains("hide")){
			element.classList.add("hide");
		}
	} else {
		
		if(element.classList.contains("hide")){
			element.classList.remove("hide");
		}
	}
}

function fillFields(){
	
	fillField("descricao");
	fillField("rural");
	fillField("cep");
	fillField("logradouro");
	fillField("numPredialProx");
	fillField("complemento");
	fillField("bairro");
	fillField("cidade");
	fillField("uf");
	fillField("observacao");
}

function fillField(id){
	input = document.getElementById(id + "-prev");
	document.getElementById(id).value = input.value;
}
			
function start(){
	
	
	updateDivs();
	updateClasses("btn-next", new Array("btn-primary"), new Array());
	updateClasses("btn-previous", new Array("btn-default", "disabled", "block-button"), new Array());
	
	var nLi = $(".nav-pills li").length;
	
	updateClasses("li-" + currentDiv, new Array("active"), new Array());
	for(var i = 1; i < nLi; i++){
		updateClasses("li-" + i, new Array("disabled", "block-button", "btn-default"), new Array());
	}
}

function next(){
	updateClasses("li-" + (currentDiv++), new Array("disabled", "block-button", "btn-default"), new Array("active"));
	updateClasses("li-" + currentDiv, new Array("active"), new Array("disabled", "block-button", "btn-default"));
	
	if(currentDiv > 0){
		updateClasses("btn-previous", new Array("btn-primary"), new Array("disabled", "block-button", "btn-default"));
	}
	if(currentDiv == 4){
		hide(true, "btn-next");
		hide(false, "btn-save");
		fillFields();
	}
	updateDivs();
}

function previous(){
	updateClasses("li-" + (currentDiv--), new Array("disabled", "block-button", "btn-default"), new Array("active"));
	updateClasses("li-" + currentDiv, new Array("active"), new Array("disabled", "block-button", "btn-default"));
	
	if(currentDiv == 0){
		updateClasses("btn-previous", new Array("disabled", "block-button", "btn-default"), new Array("btn-primary"));
	}
	
	if(currentDiv < 5){
		hide(false, "btn-next");
		hide(true, "btn-save");
	}
	
	updateDivs();
}