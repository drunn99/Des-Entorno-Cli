

let totalRecursivo = tribonacciRecursivo(10);
let totalIterativo = tribonacciIterativo(10);
console.log(totalRecursivo);
console.log(totalIterativo);

function tribonacciIterativo(n) {
    let num0 = 1;
    let num1 = 1;
    let num2 = 2;
    let suma = 0;
    for (let i = 3; i < n; i++) {
        suma = num0 + num1 + num2;
        num0 = num1;
        num1 = num2;
        num2 = suma;
    }
    return suma;
}

function tribonacciRecursivo(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    }
    else {
        return tribonacciRecursivo(n - 1) + tribonacciRecursivo(n - 2) + tribonacciRecursivo(n - 3);
    }
}
