let contAsc = 1;
let contDesc = document.getElementsByTagName("p").length-1;

console.error(contAsc +" " + contDesc);

while (contAsc != contDesc){
    let hijoAsc = document.body.querySelectorAll(`p:nth-child(${contAsc}`)[0];
    let hijoDesc = document.body.querySelectorAll(`p:nth-child(${contDesc})`)[0];

    document.body.replaceChild(hijoAsc,hijoDesc);

    contAsc++;
    contDesc--;
}