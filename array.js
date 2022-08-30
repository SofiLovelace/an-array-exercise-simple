/*. Crear un array llamado meses y que almacene el nombre de los doce meses 
del año. Mostrar por pantalla los doce nombres utilizando la 
función console.log().*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
/*console.log(meses);*/
for(let cuenta = 0, max = meses.length; cuenta< max; cuenta++) {
    console.log(meses[cuenta]);
}