"use strict"

var day = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var weather = ["Sunny","Cloudy","Raining"];
var highTemp = 100;
var lowTemp = 60;
var servingCost = 0.7;
var tempToday = [];

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

function makeWeather(){
    var todaysForecast;
    var todaysTemp;
    for (var temp = 0; temp < day.length; temp++) {
        todaysWeather = weather[Math.floor(Math.random() * weather.length)];
        todaysTemp = Math.floor(Math.random() * (highTemp - lowTemp) + lowTemp);
        tempToday[temp] = todaysTemp;
        console.log("On " + day[temp] +" the weather will be " + todaysWeather + " and " + todaysTemp)
        } 
}
makeWeather();
readyToPlay();