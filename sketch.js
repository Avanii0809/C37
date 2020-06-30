var database;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
var car1, car2, car3, car4;
var cars = [];

function setup(){
    createCanvas(displayWidth-40, displayHeight-150);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    console.log(displayWidth, displayHeight);
}

function draw() {
    background("grey");
    
    if (playerCount == 4) {
        game.update(1);
    }

    if (gameState == 1) {
        game.play();
    }
}