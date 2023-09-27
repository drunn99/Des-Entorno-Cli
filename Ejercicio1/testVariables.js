let numero1 = parseInt(prompt('Introduce el primero número'));
let numero2 = parseInt(prompt('Introduce el primero número'));
let mensaje1 = document.getElementById('mostrarNumeros')
mensaje1.innerHTML = 'Los números seleccionados: ' + numero1 + ", " + numero2;

let suma = numero1+numero2;
let resta = numero1-numero2;
let multi = numero1*numero2;
let div = numero1/numero2;
let mod = numero1%numero2;

let mensaje2 = document.getElementById('resultados');
mensaje2.innerHTML = "<table> <tr>"+
    "<td>Suma: </td>"+
    "<td>"+ suma +"</td>"+
"</tr>"+
"<tr>"+
    "<td>Resta: </td>"+
    "<td>"+ resta + "</td>"+
"</tr>"+
"<tr>"+
    "<td>Multiplicación: </td>"+
    "<td>"+multi+"</td>"+
"</tr>"+
"<tr>"+
    "<td>División: </td>"+
    "<td>"+div+"</td>"+
"</tr>"+
"<tr>"+
    "<td>Modulo: </td>"+
    "<td>"+mod+"</td>"+
"</tr>"+
"</table>";






