/*Crea un programa que pida al usuario su nombre y apellidos y muestre:

El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad.
Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.*/


window.onload(nombreUsuario());

function nombreUsuario(){
    let nombre=prompt("Introduce el nombre");
    let apellidos=prompt("Introduce tus apellidos");
    let nombreCompleto="";
    nombreCompleto+=nombre+apellidos.replace(/\s+/g, '');
    console.log(nombreCompleto.length);
    console.log(nombreCompleto.toUpperCase());
    console.log(nombreCompleto.toLowerCase());
    //Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para José María García Durán sería jgarciad
    let nombreUsuario="";
    let letraNom=nombre.slice(0,1);
    let apellido=apellidos.split(" ");
    let apellido1=apellido[0];
    let ultimaApellido=apellido[1].slice(0,1);
    nombreUsuario+=letraNom+apellido1+ultimaApellido;
    console.log(nombreUsuario);
    //Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. josgardur.
    let parte1=nombre.slice(0,2);
    let parte2=apellido[0].slice(0,2);
    let parte3=apellido[1].slice(0,2);
    let nombreUsuario2=parte1+parte2+parte3;
    console.log(nombreUsuario2)



}



