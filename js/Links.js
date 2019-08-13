window.onload = iniciarDatos;

function iniciarDatos(){
	document.getElementById("link").onclick = validarSalida;
	document.getElementById("BuscarLink").onclick = Busqueda;
}

function validarSalida(){
	if (confirm("Desea salir de este sitio")) {
		alert("Nos vemos en google");
	}else{
		return false;
	}
}

function Busqueda(){
	var respuesta = prompt("Escribe la cadena para buscar : ", "");
	if (respuesta) {
		alert("Tu busqueda fue : "+ respuesta);
		var nuevoLink = this+"search?q="+respuesta;
		alert("Nuevo link : "+nuevoLink);
		window.location = nuevoLink;
		return false;
	}else{
		alert("No hiciste ninguna busqueda");
		return false;
	}
}