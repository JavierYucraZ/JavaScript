$(document).ready(function(){

	$("#lista").blur(function(){
		localStorage.setItem("listado", $("#lista").html());
		location.reload();
	})

	if (localStorage.getItem("listado")) {
		$("#mensaje").html("<h2>Datos almacenados en LocalStorage</h2>");
		$("#lista").html(localStorage.getItem("listado"));
		$("#resultado").text(localStorage.getItem("listado"));
	}else{
		$("#resultado").text("No existen datos");
	}

	$("#Limpiar").click(function(){
		//localStorage.clear();
		localStorage.removeItem("listado");
		location.reload();
	})

});