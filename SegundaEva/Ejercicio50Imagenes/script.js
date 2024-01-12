getNewFaces();

function getNewFaces() {
    fetch("https://randomuser.me/api/?results=200", {
        method: "get",
        mode: "cors"
    })
        .then(response => response.json())
        .then(data => {
            datos = data;
            let listOfPictures = [];
            for (const key in data.results) {
                listOfPictures.push(data.results[`${key}`].picture.large);
            }
            let cont = 0;
            setInterval(() => {
                if (cont < 100) {
                    setNewFaces(listOfPictures);
                    shuffleImages(listOfPictures);
                    cont++;
                } else {
                    clearInterval();
                }
            }, 200);

        })
}

function setNewFaces(faces) {
    let facesDiv = document.getElementById("facesImg");
    facesDiv.innerHTML = "";
    for (let i = 0; i < 50; i++) {
        let newFace = document.createElement("img");
        newFace.src = faces[i];
        facesDiv.appendChild(newFace);
    }
}

function shuffleImages(faces) {
    let currentIndex = faces.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [faces[currentIndex], faces[randomIndex]] = [
            faces[randomIndex], faces[currentIndex]];
    }

    return faces;
}