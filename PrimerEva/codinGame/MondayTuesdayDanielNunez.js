 /**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

//Año bisiesto
const leapYear = parseInt(readline());
var inputs = readline().split(' ');
//Dia de la semana (monday...)
const sourceDayOfWeek = inputs[0];
//mes del año (Jan, feb...)
const sourceMonth = inputs[1];
//Dia del mes(1,2,3...)
const sourceDayOfMonth = parseInt(inputs[2]);
var inputs = readline().split(' ');
//Mes objetivo (Jan,Feb...)
const targetMonth = inputs[0];
//Dia de mes objetivo (1,2,3...)
const targetDayOfMonth = parseInt(inputs[1]);

//DEBO DEVOLVER EL DIA DE LA SEMANA!!!

var arrDays = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
let sourceYearDay = obtenerDia(sourceDayOfMonth,sourceMonth);
let targetYearDay = obtenerDia(targetDayOfMonth,targetMonth);

let difference = Math.abs(sourceYearDay - targetYearDay)%7;
let day = arrDays.indexOf(sourceDayOfWeek);
let output = targetYearDay > sourceYearDay ? (day + difference)%7 : ((day - difference + arrDays.length)%7 );

console.log(arrDays[output]);

//Obtener número de día en el año 
function obtenerDia(sourceDay, sourceMonth) {
    let arrMonths = new Map([["Jan", 31], ["Feb", 0], ["Mar", 31], ["Apr", 30], ["May", 31], ["Jun", 30],
    ["Jul", 31], ["Aug", 31], ["Sep", 30], ["Oct", 31], ["Nov", 30], ["Dec", 31]]);

    if (leapYear == 0) {
        arrMonths.set("Feb", 28);
    } else {
        arrMonths.set("Feb", 29);
    }
    
    let yearDay = 0;
    for (let [month, days] of arrMonths) {
        if (sourceMonth != month) {
            yearDay += days;
        } else {
            yearDay += sourceDay;
            break;
        }
    }
    return yearDay;
}