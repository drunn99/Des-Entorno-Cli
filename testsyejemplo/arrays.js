const arr = [9,8,7,1,2,3];
const map = new Map([["a","tete"],["b","tata"]]);

console.log("for normal \n");
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
console.log("for in \n");
for (const key in arr) {
    console.log(arr[key]);
}
console.log("for of \n");
for (const iterator of arr) {
    console.log(iterator);
}
console.log("for each \n");
arr.forEach(element => {
    console.log(element);
});
console.log("for each mapa \n")
map.forEach(function(element,key){
    console.log(element + " " + key);
});