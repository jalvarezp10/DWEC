/*Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100.

Recuerda que los meses empiezan desde el número 0.*/
let cumple=prompt("Introduce tu cumpleaños");


function domCumple(cumple){
    cumple=new Date;
    var cont=0;
    for (let index = 2022; index < 2100; index++) {
        if(fecha.getDay==6){
            cont++;
        }
        
    }
    console.log(cont);
    
}