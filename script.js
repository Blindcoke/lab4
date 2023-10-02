var elem1Clicked = false;
var elem2Clicked = false;


function changeColor1() {
    var elem1 = document.getElementById("para1");

    if (!elem1Clicked) {
        elem1.style.backgroundColor = "blue";
        elem1.style.color = "yellow";
        elem1Clicked = true;

    } else {
        elem1.style.backgroundColor = "";
        elem1.style.color = "";
        elem1Clicked = false;
    }
    
}


function changeColor2() {
    var elem2 = document.querySelector('li:nth-child(2n) div');

    if (!elem2Clicked) {
        elem2.style.backgroundColor = "green";
        elem2.style.color = "white";
        elem2Clicked = true;
    } else {
        elem2.style.backgroundColor = "";
        elem2.style.color = "";
        elem2Clicked = false;
    }
}

function add(){
    let img = document.getElementById('img');
    let devImage = new Image();
    devImage.src = "tokyo.jpg";
    devImage.setAttribute('width', '900px');
    devImage.setAttribute('height', '500px');
    img.appendChild(devImage);
}

function increase(){
    var theImg = document.querySelector('img:last-child');
    theImg.height = 800;
    theImg.width = 1500;
}

function decrease(){
    var theImg = document.querySelector('img:last-child');
    theImg.height = 150;
    theImg.width = 250;
}

function deleteImg(){
    var Img = document.querySelector('img:last-child');
    Img.parentNode.removeChild(Img);
}

