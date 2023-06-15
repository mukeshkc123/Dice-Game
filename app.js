var randomNum1 = 6;
var randomNum2 = 6;

// Add event listener to the "Play" button
var playButton = document.getElementById("btn");
playButton.addEventListener("click", rollDice);

function rollDice() {
  //For First Dice
  randomNum1 = Math.floor(Math.random() * 6 + 1);
  var randomImage1 = "dice" + randomNum1 + ".png";
  var randomImageSource1 = "images/" + randomImage1;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  //For Second Dice
  randomNum2 = Math.floor(Math.random() * 6 + 1);
  var randomImage2 = "dice" + randomNum2 + ".png";
  var randomImageSource2 = "images/" + randomImage2;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNum1 > randomNum2) {
    document.querySelector("#start").innerHTML =
      "<span style=' color:red'><b>Player 1</b></span> Won the game.";
  } else if (randomNum1 === randomNum2) {
    document.querySelector("#start").innerHTML = "It is a draw.";
  } else {
    document.querySelector("#start").innerHTML =
      "<span style=' color:red'><b>Player 2</b></span> Won the game.";
  }
}
