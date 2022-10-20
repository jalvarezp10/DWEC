
window.onload(num());

function num(){
    var num=parseInt(prompt("Introduce un numero"));


    alert("El radio es "+num +"c m"+"\n"+
    "El valor del diametro es "+2*num+" cm"+"\n"+
    "El valor del perimetro de la circunferencia es "+ 2*Math.PI*num+" cm"+"\n"+
    "El valor del area del circulo es " +Math.PI*Math.pow(num,2)+" cm2"+"\n"+
    "El valor del area de la esfera es "+4*Math.PI*Math.pow(num,2)+" cm2"+"\n"+
    "El valor del volumen de la esfera es "+((4/3)*(Math.PI))*Math.pow(num,3)+" cm3");
    

}


