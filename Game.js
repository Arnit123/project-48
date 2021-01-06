class Game{
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      fighter1 = createSprite(50,50,50,50);
      //.addImage("1",1_img);
      fighter2 = createSprite(1210,50,50,50);
      //.addImage("2",2_img);
      fighter3 = createSprite(50,650,50,50);
      //.addImage("3",3_img);
      fighter4 = createSprite(1210,650,50,50);
      //.addImage("4",4_img);
      fighters = [fighter1,fighter2,fighter3,fighter4];
    
      fc1 = createSprite(50,170,120,15)
      fc2 = createSprite(170,50,15,100)
      sc1 = createSprite(50,525,120,15)
      sc2 = createSprite(170,650,15,100)  
      tc1 = createSprite(1200,170,120,15)
      tc2 = createSprite(1075,50,15,100)
      frc1 = createSprite(1075,650,15,100)
      frc2 = createSprite(1200,525,120,15)

      f1 = createSprite(225,280,150,15)
      f2 = createSprite(300,213,15,150)
      s1 = createSprite(1025,280,150,15)
      s2 = createSprite(950,213,15,150)
      t1 = createSprite(225,425,150,15)
      t2 = createSprite(300,493,15,150)
      fr1 = createSprite(1025,425,150,15)
      fr2 = createSprite(955,493,15,150)
  
      croom_1 = createSprite(625,300,150,15)
      croom_2 = createSprite(625,400,150,15)
      croom_3 = createSprite(550,350,15,115) 
      croom_4 = createSprite(700,350,15,115)

      cwall1 = createSprite(625,100,15,200)
      cwall2 = createSprite(625,600,15,200)

      l1 = createSprite(450,50,15,125)
      l2 = createSprite(800,50,15,125)
      l3 = createSprite(450,650,15,125)
      l4 = createSprite(800,650,15,125)

      d1 = createSprite(800,260,120,15)
      d1.rotation = 45;
      d2 = createSprite(800,450,120,15)
      d2.rotation = -45;
      d3 = createSprite(450,260,120,15)
      d3.rotation = -45;
      d4 = createSprite(450,450,120,15)
      d4.rotation = 45;

    }
  
  
    play()
    {
      form.hide();
      game.spawnGuns();
      Player.getPlayerInfo();
      imageMode(CENTER)
      image(backgroundImage,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      if(allPlayers !== undefined)
      {
        //index of the array
        var index = 0;
        var x,y;
        //x and y position of the car
        for(var plr in allPlayers){
          index = index + 1;
          x = displayWidth - allPlayers[plr].xDistance
         
          y = displayHeight - allPlayers[plr].yDistance
          fighters[index-1].x = x;
          fighters[index-1].y = y;
          //console.log(index,player.index,y)
          
          if (index === player.index){
            
            
            fighters[index - 1].shapeColor = "red";
          }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.yDistance +=10
          player.update();
        }

        if(keyIsDown(DOWN_ARROW) && player.index !== null){
          player.yDistance -=10
          player.update();
        }

        if(keyIsDown(LEFT_ARROW) && player.index !== null){
          player.xDistance +=10
          player.update();
        }

        
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.xDistance -=10
          player.update();
        }



      }
    drawSprites();
  }
    spawnGuns() {
    if (frameCount % 150 === 0) {
      var gun = createSprite(Math.round(random(displayWidth,displayHeight)),50,20);
      gun.y = Math.round(random(0,displayHeight/2));
      gun.x = Math.round(random(0,displayWidth/2));
      //gun.addImage(gunImage);
      //gun.scale = ;
    }
  }

}