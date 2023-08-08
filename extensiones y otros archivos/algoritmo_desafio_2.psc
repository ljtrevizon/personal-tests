Proceso algoritmo_desafio_2
	Definir url,correo_electronico,nombre_archivo,password Como Caracter;
	
	//Para simular la accion del "click" en los botones respectivos se utiliza el esperar tecla
	
	Escribir "Introduce la url";
	Leer url;
	Limpiar Pantalla;
	Escribir "#####Cadi F1#####";
	Escribir "#####Iniciar sesion#####";
	Esperar Tecla;
	Limpiar Pantalla;
	Escribir "#####Sistema de evaluacion#####";
	Escribir "Ingrese el correo electronico";
	leer correo_electronico;
	Limpiar Pantalla;
	Escribir "#####Sistema de evaluacion#####";
	Escribir "Ingrese la contraseña";
	leer password;
	Limpiar Pantalla;
	Escribir "#####Clases que estan próximas a comenzar#####";
	Escribir "#####Curso - nivel#####";
	Escribir "#####Logica de Programacion en Python Nivel 1#####";
	Esperar Tecla;
	Limpiar Pantalla;
	Escribir "#####Desafios#####";
	Escribir "#####Desafio 1#####";
	Escribir "#####Cargar solucion#####";
	Esperar Tecla;
	Limpiar Pantalla;
	Escribir "#####Sólo se puede subir un archivo. Si la solución contiene varios archivos,";
	Escribir "debe incluirlos en una carpeta, comprimirlos y subir el archivo comprimido####";
	Esperar Tecla;
	Escribir "#####Browse####";
	Escribir "Escribe el nombre del archivo comprimido";
	leer nombre_archivo;
	Escribir "#####Cargar solucion####";
	Esperar Tecla;
	Escribir "#####Confirmacion####";
	Escribir "¿Estas seguro que quieres subir la solucion?";
	Escribir "#####Si | No####";
	Esperar Tecla;
FinProceso
