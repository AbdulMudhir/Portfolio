
//let firstCard = document.getElementById("card1-imgs");


//firstCard.addEventListener("mouseover", function (event) {
//    this.src =  "Image/studentdatabase.gif";
//})
//firstCard.addEventListener("mouseout", function (event) {
//    this.src = "Image/studentdatabase.png";
//})

let customCard = document.getElementsByClassName("custom-card");

function imageExists(image_url) {

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

// will be used to play gif when a person hover over a project car
function gifPlayer(event) {

    const imageContainer = event.currentTarget.getElementsByTagName("img")[0];



    const imageSource = imageContainer.src;
    const re = /.\D{3}$/;

    const path = imageSource.split(re)[0];


    if (imageSource.includes(".png")) {


        let gifSource = path + ".gif";


        imageContainer.src = gifSource;

    }
    else if (imageSource.includes(".gif")) {
        let imageSource = path + ".png";
        imageContainer.src = imageSource;

    }
    else {
        
    }


}

    //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //    // some code..
    //    for (let i = 0; i < customCard.length; i++) {

    //        let playDemo = customCard[i].getElementsByClassName("playdemo")[0];
           
    //        customCard[i].addEventListener("mouseover", gifPlayer);
    //        customCard[i].addEventListener("mouseout", gifPlayer);
    //    }

    //}
    //else {
    //    for (let i = 0; i < customCard.length; i++) {

    //        customCard[i].addEventListener("mouseover", gifPlayer);
    //        customCard[i].addEventListener("mouseout", gifPlayer);
    //    }
    //}

for (let i = 0; i < customCard.length; i++) {

    customCard[i].addEventListener("mouseover", gifPlayer);
    customCard[i].addEventListener("mouseout", gifPlayer);
}
