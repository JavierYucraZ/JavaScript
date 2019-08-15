$("#imagen").change(manejoImagenes);

function manejoImagenes(evento){
	var archivo = evento.target.files[0];

	if (!archivo.type.match("image.*")) {
		alert("Debes seleccionar una imagen");
		return;
	}

	var lector = new FileReader();
	lector.onload = function(evento){
		var img = new Image();
		img.src = evento.target.result;

		$("#contenido").append(img);
	}

	lector.readAsDataURL(archivo);
}