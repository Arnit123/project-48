class Form{

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h1');
      this.title = createElement('h1');
      this.reset = createButton('Reset');
      this.controlAre = createElement('h2');
      this.w = createElement('h2');
      this.s = createElement('h2');
      this.a = createElement('h2');
      this.d = createElement('h2');
      this.aim = createElement('h2');
      this.shoot = createElement('h2');

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.controlAre.hide(); 
      this.w.hide();
      this.s.hide();
      this.a.hide();
      this.d.hide();
      this.aim.hide();
      this.shoot.hide();
    
    }
  
    display(){
      this.title.html("Battle Royale");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      
        this.controlAre.html("Controls Are:");
        this.controlAre.position(displayWidth/2 - 100, displayHeight/4 + 50)
        this.w.html("UP ARROW => UP");
        this.w.position(displayWidth/2 -50, displayHeight/4 + 100)
        this.s.html("DOWN ARROW => DOWN");
        this.s.position(displayWidth/2 - 50, displayHeight/4 + 250)
        this.a.html("LEFT ARROW => LEFT");
        this.a.position(displayWidth/2 - 200, displayHeight/4 + 175)
        this.d.html("RIGHT ARROW => RIGHT");
        this.d.position(displayWidth/2 + 100, displayHeight/4 + 175)
        this.shoot.html("SPACE => SHOOT");
        this.shoot.position(displayWidth/2 - 300, displayHeight/4 + 300)
        this.aim.html("MOUSE => AIM");
        this.aim.position(displayWidth/2 + 170, displayHeight/4 + 300)
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  