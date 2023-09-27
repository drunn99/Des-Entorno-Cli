let numero1 = parseInt(prompt('Introduce el primero número'));
let numero2 = parseInt(prompt('Introduce el primero número'));
let mensaje1 = document.getElementById('mostrarNumeros')

mensaje1.innerHTML = 'Para los números seleccionados: ' + numero1 + ", " + numero2 + 
'<br> La suma es: ' + (numero1+numero2) + 
'<br> La resta es: ' + (numero1-numero2) +
'<br> la multiplicación es: ' + (numero1*numero2) +
'<br> la división es: ' + (numero1/numero2) +
'<br> el modulo es: ' + (numero1%numero2);

let mensaje2 = document.getElementById('resultados');
mensaje2.innerHTML = "<table>"+ 
"<tr>"+
    "<td>Suma: </td>"+
    "<td>"+ (numero1+numero2) +"</td> </tr>" +
"<tr>"+
    "<td>Resta: </td>"+
    "<td>"+ (numero1-numero2) + "</td>"+
"</tr>"+
"<tr>"+
    "<td>Multiplicación: </td>"+
    "<td>"+(numero1*numero2)+"</td>"+
"</tr>"+
"<tr>"+
    "<td>División: </td>"+
    "<td>"+(numero1/numero2)+"</td>"+
"</tr>"+
"<tr>"+
    "<td>Modulo: </td>"+
    "<td>"+(numero1%numero2)+"</td>"+
"</tr>"+
"</table>";






