var canvas, backgroundImage,gun;
var fc1,fc2,sc1,sc2,tc1,tc2,frc1,frc2,croom_1,croom_2,croom_3,croom_4,f1,f2,s1,s2,t1,t2,fr1,fr2
var cwall1,cwall2,l1,l2,l3,l4,d1,d2,d3,d4
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var fighters,fighter1,fighter2,fighter3,fighter4;

function preload(){
  backgroundImage = loadImage("../images/background.jpg");




}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}

