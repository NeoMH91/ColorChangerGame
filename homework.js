var color1 = "white"
var color2 = "white"

function compareColors() {
 if (color1 === color2) {
  document.getElementById("randomNumber") += 1
 }
}

function sayHello(name) {
   if (document.body.style.backgroundColor === "red") {
     document.body.style.backgroundColor = "blue";
   } else {
   document.body.style.backgroundColor = "red";
} }



function setColor() {
    var randomNum = getRandomInt()
    var colors = ["blue","red","yellow","purple"]
    document.body.style.backgroundColor = colors[randomNum]
}

function getRandomInt(min, max) {
  //gets a random number 0-3, ie 4 different numbers
  min = Math.ceil(0);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
