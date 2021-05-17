var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomImage = "dice"+randomNumber1+".png";
var randomPath = "images/"+randomImage;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomPath);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var randomImage2 = "dice"+randomNumber2+".png";
var randomPath2 = "images/"+randomImage2;

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomPath2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 wins";
} else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "Player2 wins" ;
} else if(randomNumber1 == randomNumber2){
document.querySelector("h1").innerHTML = "Draw";
}
