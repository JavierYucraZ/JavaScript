window.onload = configurarSelect;

function configurarSelect(){
	document.getElementById("Seleccion").selectedIndex = 0;
	document.getElementById("Seleccion").onchange = cambiaPagina;
}

function cambiaPagina(){
	var elementoSeleccionado = document.getElementById("Seleccion");
	var paginaNueva = elementoSeleccionado.options[elementoSeleccionado.selectedIndex].value;
	if (paginaNueva != "") {
		window.location = paginaNueva;
	}
}