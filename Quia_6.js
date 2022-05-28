//Elaborar un programa que permita identificar si un numero entero es perfecto o no.
var numero = 496;
var resultado;
var suma = 0;

for (var i=1;i<numero;i++){
    resultado = numero%i;
    if (resultado==0){//si el resultado da 0 entonces se suma
    suma=suma+i;
}
}
if(suma==numero){//si el resultado es igual a suma el numero es perfecto
;
FileSystem.out.printin("El numero es perfecto");
}else{
    FileSystem.ou.printin("El numero no es perfecto");
}


