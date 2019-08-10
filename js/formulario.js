function validarForm(formulario){
	var usuario = formulario.usuario;
	if (usuario == "" || usuario.value == "Ingrese su usuario") {
		alert("Debe proporcionar un Usuario!!");
		usuario.focus();
		usuario.select();
		return false;
	}

	var password = formulario.password;
	if (password == "" || password.value.length < 3) {
		alert("Ingrese una contraseña y debe ser mayor a 3 caracteres");
		password.focus();
		password.select();
		return false;
	}

	var tecnologias = formulario.tecnologia;
	var checkedSeleccionado = false;
	for (var i = 0; i < tecnologias.length ; i++) {
		if (tecnologias[i].checked) {
			checkedSeleccionado = true;
		}
	}
	if (!checkedSeleccionado) {
		alert("Debe seleccionar al menos una opcion");
		return false;
	}

	var genero = formulario.genero;
	var radioSeleccionado = false;
	for (var i = 0; i < genero.length; i++) {
		if (genero[i].checked) {
			radioSeleccionado = true;
		}
	}
	if (!radioSeleccionado) {
		alert("Debe proporcionar su genero");
		return false;
	}


	/*
	En nuestro archivo formulario.html, en la seccion de ocupacion, debemos agregar
	el valor de 0 a la opcion que funciona como titulo para hacer la
	comparacion en nuestro if

	Si el valor es igual a 0 significa que no seleccionamos ningun item,
	entonces nuestro alert nos notificara que debemos seleccionar alguna opcion
	*/
	var ocupacion = formulario.ocupacion;
	if (ocupacion.value == "0") {
		alert("Debe seleccionar su ocupacion");
		return false;
	}

	alert("Formulario valido.. Enviando Informacion");
	return true;
}