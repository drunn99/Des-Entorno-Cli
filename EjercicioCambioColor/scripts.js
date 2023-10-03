let r,g,b = 0;

function newRandomColor (){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
