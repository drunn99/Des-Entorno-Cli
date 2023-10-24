let number = 0;
let text = "";
let par = number => number%2 == 0 ? "even" : "odd";
for (let i = 0; i < 500; i++) {
    number = Math.floor(Math.random()*10001);
    text += "<p>" + number +" : " + par(number) + "</p>" + "</br>";
}

document.body.innerHTML = text;
/*
function even(number){
    return number%2 == 0 ? "even" : "odd";
}
*/