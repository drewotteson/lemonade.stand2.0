//whole sale with variable pricing
//weather system/weather effects
//player decides pricing and inventory
//price affects sales
"use strict"


function readyToPlay() {
    while (true) {
    var userInput = prompt("Are you ready to play?")
    if(userInput != "yes") {
        console.log("You don't have a choice, try again!")
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
function cupStuff(cups) {
    var cupInput;
    var cupPurchase;
    var cupCost = 1;
    cupInput = prompt("Cups cost 1$. Would you like to purchase cups? Type yes or no.")
    if (cupInput == "yes") {
        cupPurchase = cupInput * cupCost
        cups += cupInput;
        return(cups);
    }
    if (cupInput == "no")
        return(cups);
}
function cupInventory(money, cupCost, cupInput) {
    var cupPurchase;
    cupPurchase = cupInput * cupCost;
    money -= cupPurchase;
    return(money);
}
function iceStuff(ice) {
    var iceInput;
    var icePurchase;
    var iceCost = 1;
    iceInput = prompt("Ice costs 1$. Would you like to purchase ice?. Type yes or no.")
    if (iceInput == "yes") {
        ice += iceInput;
        return(ice);
    }
    if (iceInput == "no")
        return(ice);
}
function iceInventory(money, iceCost, iceInput) {
    var icePurchase;
    icePurchase = iceInput * iceCost;
    money -= icePurchase;
    return(money);
}
function lemonStuff(lemon) {
    var lemonInput;
    var lemonPurchase;
    var lemonCost = 2;
    lemonInput = prompt("Lemons cost 2$. Would you like to purchase lemons? Type yes or no.")
    if (lemonInput == "yes") {
        lemon += lemonInput;
        return(lemon);
    }
    if (lemonInput == "no")
        return(lemon);
}
function lemonInventory(money, lemonCost, lemonInput) {
    var lemonPurchase;
    lemonPurchase = lemonInput * lemonCost;
    money -= lemonPurchase;
    return(money);
}
function sugarStuff(sugar) {
    var sugarInput;
    var sugarPurchase;
    var sugarCost = 2;
    sugarInput = prompt("Sugar costs 2$. Would you like to purchase sugar? Type yes or no.")
    if (sugarInput == "yes") {
        sugar += sugarInput;
        return(sugar);
    }
    if (sugarInput == "no")
        return(sugar);
}
function sugarInventory(money, sugarCost, sugarInput) {
    var sugarPurchase;
    sugarPurchase = sugarInput * sugarCost;
    money -= sugarPurchase;
    return(money);
}
function adjustCupPrice() {
    var salePrice = console.log("Set price per cup: 1$-5$")
    return(salePrice);
    }
function changeLemons(lemon) {
    while(true){
    var lemonsInRecipe = prompt("How many lemons do you want for your pitcher?")
    return(lemonsInRecipe);
    break;
    }
    }
function updateLemonInventory(lemon, lemonsInRecipe) {
    var lemonsInPitcher = lemon - lemonsInRecipe;
    return(lemonsInPitcher);
}
function changeSugar(sugar) {
    while(true) {
    var sugarInRecipe = prompt("How much sugar do you want for your pitcher?")
    return(sugarInRecipe);
    break;
    }
    }
function updateSugarInventory(sugar, sugarInRecipe) {
    var sugarInPitcher = sugar - sugarInRecipe;
    return(sugarInPitcher);
}
function changeIce() {
    while(true) {
    var iceInRecipe = prompt("How much ice do you wan for your pitcher?")
    return(iceInRecipe);
    break;
    }
    }
function updateIceInventory(ice, iceInRecipe) {
    var iceInPitcher = ice - iceInRecipe;
    return(iceInventory)
}
function generateCustomers() {
    var customers = Array("15Buyers,12Non-Buyers, profit8");
    var customer = customers[Math.floor(Math.random()*customers.length)];
    console.log(customer);
}


function main() {
    var money = 50;
    var cup = 0;
    var lemon = 0;
    var sugar = 0;
    var ice = 0;

    var start = readyToPlay();
    var weath = makeWeather();
    var cupChange = cupStuff();
    var cupInvent = cupInventory();
    var iceChange = iceStuff();
    var iceInvent = iceInventory();
    var lemonChange = lemonStuff();
    var lemonInvent = lemonInventory();
    var sugarChange = sugarStuff();
    var sugarInvent = sugarInventory();
    var cupPrice = adjustCupPrice();
    var adjustLemon = changeLemons();
    var updateLemon = updateLemonInventory();
    var adjustSugar = changeSugar();
    var updateSugar = updateSugarInventory();
    var adjustIce = changeIce();
    var updateIce = updateIceInventory();
    var customerBase = generateCustomers();

}

main();