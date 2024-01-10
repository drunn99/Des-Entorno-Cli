console.log(todayFormat());
changeImg(todayFormat());


function changeImg(date) {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=qMcO7wZUbPzphrz6hn8l1IH2REcKyt72stXyTlZG&date=${date}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("img").setAttribute("src", data.hdurl)
        });
}

function todayFormat(){
    let today = new Date();
    let day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    let month = today.getMonth() < 10 ? "0" + (today.getMonth()+1) : today.getMonth();
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

function dateHandler(e) {
    console.log(e.target.value);
    changeImg(e.target.value);
}