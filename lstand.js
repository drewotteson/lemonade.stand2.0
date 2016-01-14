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
    for (var temp = 0; temp < day.length; temp++) {
        var todaysWeather = weather[Math.floor(Math.random() * weather.length)];
        todaysTemp = Math.floor(Math.random() * (highTemp - lowTemp) + lowTemp);
        tempToday[temp] = todaysTemp;
        console.log(" the weather will be " + todaysWeather + " and " + todaysTemp)
        } 
}

function buyIce() {
    var icePrices = [.25, .50, .75]
    var buyice = 0
    var icePurchased = prompt("How much ice would you like to buy?")

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
    var initiatePlay;
    var weather;
    initiatePlay = readyToPlay()
    weather = makeWeather()

}

main();