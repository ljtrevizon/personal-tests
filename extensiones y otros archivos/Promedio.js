// Este codigo ha sido generado por el modulo psexport 20230113-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Calcula el promedio de una lista de N datos
function promedio() {
	var i = new Number();
	var n = new Number();
	var acum = new Number();
	var dato = new Number();
	var prom = new Number();
	document.write("Ingrese la cantidad de datos:", '<BR/>');
	n = Number(prompt());
	acum = 0;
	for (i=1; i<=n; ++i) {
		document.write("Ingrese el dato ", i, ":", '<BR/>');
		dato = Number(prompt());
		acum = acum+dato;
	}
	prom = acum/n;
	document.write("El promedio es: ", prom, '<BR/>');
}

