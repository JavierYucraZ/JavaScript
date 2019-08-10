/*Uso de la condicional if*/
function ClasificacionEdades(edadInput){
	var resultado = "Clasificacion sugerida por tu edad : ";
	var edad = edadInput.value;
	if (edad > 0 && edad <= 12) {
		resultado += "AA, A";
	}else if (edad > 12 && edad < 15) {
		resultado = "AA, A, B, B15";
	}else if (edad >= 15 && edad <= 18) {
		resultado = "AA, A, B, B15, C";
	}else if (edad > 21) {
		resultado = "Puedes ver cualquier pelicula";
	}else{
		resultado = "Valor erroneo";
	}
	document.getElementById("recomendacion").innerHTML = resultado;
}

/*Uso de la estructura switch*/
function SeleccionFecha(fechaInput){
	var fechaTexto = null;

	var fechaObj = new Date(fechaInput.value);
	var dia = fechaObj.getDay();
	switch( dia ){
		case 0 :
		fechaTexto = "El dia es Lunes";
		break;
		case 1 : 
		fechaTexto = "El dia es Martes";
		break;
		case 2 : 
		fechaTexto = "El dia es Miercoles";
		break;
		case 3 : 
		fechaTexto = "El dia es Jueves";
		break;
		case 4 :
		fechaTexto = "El dia es Viernes";
		break;
		case 5 :
		fechaTexto = "El dia es Sabado";
		break;
		case 6 : 
		fechaTexto = "El dia es Domingo";
		break;
		default : 
		fechaTexto = "Valor equivocado";
	}
	document.getElementById("dia").innerHTML = fechaTexto;
}

/*Estructura repetitiva for*/
function GenerarSerie(limiteInput){
	var limite = limiteInput.value;
	for (var i = 1; i <= limite; i++) {
		document.getElementById("serie").innerHTML += i+" "; 
	}
}

function Limpiar(){
	document.getElementById("serie").innerHTML = "";
}

/*Estructura While*/
function GenerarPares(){
	var limite = 10;
	var dato = 0;
	/* 10/2 => resultado 5, residuo = 0 */
	while(dato <= 10){
		if (dato % 2 == 0) {
			document.getElementById("pares").innerHTML += dato+" "; 
		}
		dato++;
	}
}

function Limpiar2(){
	document.getElementById("pares").innerHTML = "";
}

/*Manejo de Vectores*/
function manejoArreglos(){
	var lengua = null;

	/*Definir el arreglo*/
	var lenguas = new Array();
	lenguas[0]="Castellano";
	lenguas[1]="Ingles";
	lenguas[2]="Mandarin";
	lenguas[3]="Ruso";
	lenguas[4]="Aleman";

	for (var i = 0; i < lenguas.length ; i++) {
		lengua = lenguas[i];
		imprimir(lengua);
	}
}

function imprimir(valor){
	document.getElementById("lengua").innerHTML += valor+" ";
}

/*Manejo de Matrices
	[a][b][c]
	[d][e][f]
	[g][h][i]	
*/
function manejoMatriz(){
	var dato = null;
	var f1 = new Array();
	var f2 = new Array();
	var f3 = new Array();
	var matriz = new Array();

	f1[0]="f1-c1";
	f1[1]="f1-c2";
	f1[2]="f1-c3";

	f2[0]="f2-c1";
	f2[1]="f2-c2";
	f2[2]="f2-c3";

	f3[0]="f3-c1";
	f3[1]="f3-c2";
	f3[2]="f3-c3";

	matriz[0] = f1;
	matriz[1] = f2;
	matriz[2] = f3;	

	for (var i = 0; i < matriz.length; i++) {
		document.getElementById("matriz").innerHTML += "<br>";
		for (var j = 0 ; j < matriz[i].length ; j++) {
			dato = matriz[i][j];
			document.getElementById("matriz").innerHTML += dato+" ";
		}
	}
}
