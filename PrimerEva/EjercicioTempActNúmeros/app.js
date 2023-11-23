/**
 #### Logic (JS)
- select all span's with .number
- iterate over and log each span
- create updateCount function
- accept "el" as argument
- invoke and pass each span "el" in iteration
 */

let allNumbers = document.getElementsByClassName("number");
updateNumbers(allNumbers);

function updateNumbers(allNumbers) {
    let interval = setInterval(function () {
        let done = 0;
        for (let i = 0; i < 3; i++) {
            if (parseInt(allNumbers[i].getAttribute("data-value")) > parseInt(allNumbers[i].textContent)) {
                allNumbers[i].innerHTML = parseInt(allNumbers[i].textContent) + 10;
            } else {
                done++;
            }
        }
        if (done === 3) {
            clearInterval(interval);
        }
    }, 50);
}