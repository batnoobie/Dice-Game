if (window.performance.navigation.type === 1 || window.performance.navigation.type === 0) {
    // if the page has been refreshed, call the rollDice() function.
   rollDice();
 }

function rollDice(){
    var randomNumberPlayer1 = Math.floor(Math.random() * 6 + 1);
    var randomNumberPlayer2 = Math.floor(Math.random() * 6 + 1);

    var image1 = "./images/dice"+ randomNumberPlayer1 +".png"; 
    var image2 = "./images/dice"+ randomNumberPlayer2 +".png"; 

    document.querySelector(".img1").setAttribute("src", image1);
    document.querySelector(".img2").setAttribute("src", image2);

    changeTitle(randomNumberPlayer1,randomNumberPlayer2);
}

function changeTitle(randomNumberPlayer1, randomNumberPlayer2){
    if(randomNumberPlayer1 === randomNumberPlayer2){
        document.querySelector("h1").innerHTML = "Draw! 🤝";   
    }
    else if(randomNumberPlayer1 > randomNumberPlayer2){
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
        }
    else if(randomNumberPlayer1 < randomNumberPlayer2){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        }    
}

