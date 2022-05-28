// En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
  // dependerá del número de computadoras que compre.
   // Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra;
   // si el número de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento;
   // y si son 10 o más se les da un 40% de descuento.
   // El precio de cada computadora es de $11,000.
   // Preguntar al usuario cuantas computadoras va a comprar y mostrar un console.log el valor a pagar.

   //Definir descuento, total, n Como Real
   Escribir = "el numero de computadoras"
   leer = "n"
   total = "n" * 11000
   'si n < 5 Entonces'
   descuento = total * .10
   'SiNo'
   'si n < 10 Entonces'
   descuento = total * .20
   'SiNo'
   descuento = total * .40
'FinSi'
'FinSi'
Escribir; "El total a pagar por",'N'," computadoras compradas es: $",total - descuento
Escribir; "El descuento aplicda es: $",descuento
