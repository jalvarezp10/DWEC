

/*Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (por ejemplo, el 24 de junio).

Recuerda que los meses empiezan desde el número 0
 */

//Entramos en la funcion fecha la cual calcula la cantidad de dias que hay entre dos fechas
function restaFechas(f1,f2){
  
   var fecha1=f1.split('/');
    var fecha2=f2.split('/');
    var date1=Date.UTC(fecha1[2],fecha1[1]-1,fecha1[0]);
    var date2=Date.UTC(fecha2[2],fecha2[1]-1,fecha2[0]);
    var diferencia=date2-date1;
    var dias=Math.floor(diferencia /(1000*60*60*24));
    return dias;
}
var fechaHoy='10/10/2022';
var fechaFin='24/06/2023';
console.log(restaFechas(fechaHoy,fechaFin));

