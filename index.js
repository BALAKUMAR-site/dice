
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomimage1="dice"+randomNumber1+".png";

var imagesource1 ="images/"+randomimage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",imagesource1);

var randomNumber2=Math.floor(Math.random() * 6)+1;

var randomimage2="dice"+randomNumber2+".png";

var imagesource2 ="images/"+randomimage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",imagesource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw !";
}