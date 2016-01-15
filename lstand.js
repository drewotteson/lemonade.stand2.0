//whole sale with variable pricing
//weather system/weather effects
//player decides pricing and inventory
//price affects sales
"use strict"


function readyToPlay() {
    while (true) {
    var userInput = prompt("Are you ready to play?")
    if(userInput != "yes") {
        console.log("Try again!")
    } if(userInput === "yes") {
        console.log("Let's play!")
        break;
    }
}
}
function makeWeather() {
    var day = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    var weather = ["Sunny","Cloudy","Raining"];
    var highTemp = 100;
    var lowTemp = 60;
    var tempToday = [];
    var todaysTemp;
    for (var temp = 0; temp < 1; temp++) {
        var todaysWeather = weather[Math.floor(Math.random() * weather.length)];
        todaysTemp = Math.floor(Math.random() * (highTemp - lowTemp) + lowTemp);
        tempToday[temp] = todaysTemp;
        console.log("The weather will be " + todaysWeather + " and " + todaysTemp)
        } 
}

function cupStuff(cupPrice) {
    var cupInput;
    var cupPurchase;
    var cupCost = 1;
    cupInput = prompt("Cups cost 1$. Would you like to purchase cups? Type yes or no.")
    if (cupInput == "yes") {
        cupPurchase = cupInput * cupCost
        cups += cupInput;
        return(cups);
    }
    if ((cupInput == "no"))
        return cups
}

/*function generateCustomer() {

}
function customerPurchase() {

}
function updateInventory() {

}
function mainPlayGame() {
    var sugar = 0

}*/


function main() {
    var money = 20;
    var cupPrice = 0;
    var lemonPrice = 0;
    var sugarPrice = 0;
    var icePrice = 0;

    var initiatePlay;
    var weather;
    initiatePlay = readyToPlay()
    weather = makeWeather()
}

main();