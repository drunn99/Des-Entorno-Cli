let allP = [...document.querySelectorAll("p")];
let timeIndex = 1;

document.body.innerHTML = "";

allP.forEach(element => {
    let newP = document.createElement("p");
    newP.innerHTML = element.textContent;
    setTimeout(() => document.body.appendChild(newP), 1000*timeIndex);
    timeIndex+=1;
});