const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
btn.addEventListener("click",newRandomColor);

function newRandomColor(){
    let colorText = document.getElementById("color");
    let hexColor = "#";
    let selector = 0;
    for(let i = 0; i < 6; i++){
        selector = newRandomNumber();
        console.log(selector);
        hexColor += hex[selector];
    }
    document.body.style.backgroundColor = hexColor;
    colorText.innerHTML = hexColor;

}

function newRandomNumber(){
    return Math.floor((Math.random()*15));
}
// Uso de document.body.style.backgroundColor = "#AAAAAA";