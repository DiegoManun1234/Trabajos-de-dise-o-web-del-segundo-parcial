// Elaborar un programa que permita calcular la edad de una persona según el año de nacimiento y el año actual.
function calcular_edad(fecha){
    hoy=new Date()
    var array_fecha = fecha.split("/")
    if (array_fecha.length!=3)
       return false
    var ano
    ano = parseInt(array_fecha[2]);
    if (isNaN(ano))
       return false

    var mes
    mes = parseInt(array_fecha[1]);
    if (isNaN(mes))
       return false

    var dia
    dia = parseInt(array_fecha[0]);
    if (isNaN(dia))
       return false
    if (ano<=99)
       ano +=1900
    edad=hoy.getYear()- ano - 1; 

    if (hoy.getMonth() + 1 - mes < 0) 
       return edad
    if (hoy.getMonth() + 1 - mes > 0)
       return edad+1
    if (hoy.getUTCDate() - dia >= 0)
       return edad + 1

    return edad;
}