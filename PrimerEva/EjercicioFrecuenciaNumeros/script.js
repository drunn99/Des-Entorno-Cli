let frec_div = document.getElementById("frecuencias");
let html = "";
let map = new Map();
for(let i = 1; i <= 10; i++){
    map.set(i,0);
}
console.log(map);

for (let index = 0; index < 10000; index++) {
    let n_random = Math.floor((Math.random()*10)+1);
    let current_frec = map.get(n_random);
    map.set(n_random, current_frec += 1);
}
html += "<ul>";
for (let i = 1; i <= map.size; i++){
    html += `<li>Número: ${i}: ${map.get(i)}</li>`
}
html += "</ul>";
console.log(map);
frec_div.innerHTML = html;