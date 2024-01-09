fetch("https://randomuser.me/api/")
    .then(Response=>{
        return Response.json();
    })
    .then(data => {
        let picturehtml = document.getElementById("picture");
        let pfpicture = data.results[0].picture.large;
        let userInfo = document.querySelectorAll("div>p");
        let name = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
        let email = data.results[0].email;
        let address = data.results[0].location.street.number + " " + data.results[0].location.street.name;
        let address2 = data.results[0].location.city + " " + data.results[0].location.state + " " + data.results[0].location.street.number + " " + data.results[0].location.country;
        userInfo[0].innerHTML = name;
        userInfo[1].innerHTML = email;
        userInfo[2].innerHTML = address;
        userInfo[3].innerHTML = address2;
        
        picturehtml.setAttribute("src",`${pfpicture}`);
    })