fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
        return response.json();
    })
    .then(json => {
        let datos = json.hdurl;
    })
    .catch(error => {
        console.log(error);
    })