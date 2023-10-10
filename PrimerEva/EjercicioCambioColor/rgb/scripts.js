
function newRandomColor (){
    let actualColor =  document.getElementById("actualColor");
    let r,g,b = 0;
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    actualColor.innerHTML = `rgb(${r},${g},${b})`;

}
