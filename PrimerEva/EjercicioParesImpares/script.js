let number = 0;
let text = "";
for (let i = 0; i < 500; i++) {
    number = Math.floor(Math.random()*10001);
    text = "<p>" + number +" : " + even(number) + "</p>" + "</br>";
}

document.body.innerHTML = text;

function even(number){
    return number%2 == 0 ? "even" : "odd";
}
