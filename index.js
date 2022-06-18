
var randomNumber1=Math.floor(Math.random()*6)+1;  //random numver btw 1-6
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");//generating random image

var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){           // Player 1 wins
  document.querySelector("h1").textContent="🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){     //Player 2 Wins
  document.querySelector("h1").textContent="Player 2 Wins!🚩";
}else{                                     //Draw
  document.querySelector("h1").textContent="Draw!";
}
