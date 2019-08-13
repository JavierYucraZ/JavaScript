window.onload = cargarImagenes;

function cargarImagenes(){
	for (var i = 0; i <= document.images.length ; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			configurarRollover(document.images[i]);
		}
	}
}

function configurarRollover(imagen){
	imagen.imagenOff = new Image();
	imagen.imagenOff.src = "imagenes/manzana.png";
	imagen.onmouseout = cambioOff;

	imagen.imagenOn = new Image();
	imagen.imagenOn.src = "imagenes/sandia.png";
	imagen.onmouseover = cambioOn;
}

function cambioOff(){
	this.src = this.imagenOff.src;
}

function cambioOn(){
	this.src = this.imagenOn.src;
}