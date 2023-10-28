var player1;
player1 =Math.floor((Math.random()*6)+1);
var player2;
player2 =Math.floor((Math.random()*6)+1);

if (player1===1) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice1.png");
} else if (player1===2) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice2.png");
} else if (player1===3) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice3.png");
} else if (player1===4) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice4.png");
}
else if (player1===5) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice5.png");
}
else if (player1===6) {
    document.querySelector(".dice1 .img1").setAttribute("src","images/dice6.png");
}

if (player2===1) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice1.png");
} else if (player2===2) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice2.png");
} else if (player2===3) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice3.png");
} else if (player2===4) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice4.png");
}
else if (player2===5) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice5.png");
}
else if (player2===6) {
    document.querySelector(".dice2 .img2").setAttribute("src","images/dice6.png");
}

if (player1<player2) {
    document.querySelector("h1").textContent="player2 wins"
} else if (player1>player2) {
    document.querySelector("h1").textContent="player1 wins"
} else {
    document.querySelector("h1").textContent="Draw Match"
}