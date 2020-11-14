var naruto, narutoani;
var gg,gggg;
var invv;
var f, fc, fca;
var g, gc, gca;
var t, tc, tca;
var y, yc, yca;
var obstacleImage
var obstacleImage2
var goblingr,goblingr2,goblingr3,goblingr4, obs1gr, obs2gr, objj;
var gamestate="PLAY";
// var song;
function preload() {
  narutoani = loadAnimation("download (11).png", "download (12).png", "download (13).png", "download (14).png", "download (15).png", "download (16).png")

  fca = loadImage("download.png");

  gca = loadImage("download (2).png");

  yca = loadImage("download (4).png");

  tca = loadImage("download (6).png");

  obstacleImage = loadImage("download (20).png")
  obstacleImage2 = loadImage("download (19).png")
  
  
//   song=loadSound("1.mp3");
  gggg=loadImage("download (18).png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  naruto = createSprite(50, height - 40);
  naruto.addAnimation("na", narutoani);
  naruto.scale = 1.2;
  naruto.lifetime=10000;
//    song.loop();
//     song.setVolume(0.2);
  invv = createSprite(width / 2, height - 40, width, 1);
  goblingr = new Group();
  goblingr2 = new Group();
  goblingr3 = new Group();
  goblingr4 = new Group();
  obs1gr = new Group();
  obs2gr = new Group();
  objj = new Group();
}

function draw() {
  background("white");
  if(gamestate==="PLAY"){
    fill("BLACK")
    text("PRESS SPACE TO PLAY ",200,300);
    text("Rules",200,90);
    text("BIRD AND SNEAKY ARCHER GOBLIN END GAME AS U TOUCH THEM ",200,210);
    text("GOBLIN SQUAD GIVES U LIFETIME, decreases lifetime timer ",200,150);
    if(keyDown(" ")){
      gamestate="initial"
    }
  }
  if(gamestate==="initial"){
  /////////////////////////////////////////
  if (naruto.y > height - 90) {
    if (keyDown(" ")) {
      naruto.velocityY = -18;

    }
  }
  naruto.velocityY = naruto.velocityY + 0.8;
  
  naruto.collide(invv);
  naruto.setCollider("rectangle", 0, 0, 60, 60);
    //////////////////
     if(objj.isTouching(goblingr)&&frameCount%250>120){
      goblingr.destroyEach(); 
       naruto.lifetime=naruto.lifetime+600;
  }
    if(objj.isTouching(goblingr2)&&frameCount%250>120){
      goblingr2.destroyEach(); 
       naruto.lifetime=naruto.lifetime+600;
  }
    if(objj.isTouching(goblingr3)&&frameCount%250>120){
      goblingr3.destroyEach(); 
       naruto.lifetime=naruto.lifetime+600;
  }
    if(objj.isTouching(goblingr4)&&frameCount%250>120){
      goblingr4.destroyEach(); 
       naruto.lifetime=naruto.lifetime+600;
  }
  ///////////////////////////////////////
        if(naruto.isTouching(goblingr)){
      goblingr.destroyEach(); 
       naruto.lifetime=naruto.lifetime-600;
  }
    if(naruto.isTouching(goblingr2)){
      goblingr2.destroyEach(); 
       naruto.lifetime=naruto.lifetime-600;
  }
    if(naruto.isTouching(goblingr3)){
      goblingr3.destroyEach(); 
       naruto.lifetime=naruto.lifetime-600;
  }
    if(naruto.isTouching(goblingr4)){
      goblingr4.destroyEach(); 
       naruto.lifetime=naruto.lifetime-600;
  }
    
    
    ///////
 console.log(naruto.lifetime)
  /////////////////////////////////////////////////
  if(objj.isTouching(obs2gr)){
  
    obs2gr.destroyEach();
  }
  if(naruto.isTouching(obs2gr)||naruto.isTouching(obs1gr)||naruto.lifetime<40){
     obs2gr.destroyEach();
    obs1gr.destroyEach();
    objj.destroyEach();
    gamestate="gameover"
  }
   
  //////////////////////////////////////////////
  fill(random(0, 30), random(0, 300), random(50, 200))
  textSize(14)
  text("Press s to use ability", 30, 30);
  fill(random(0, 30), random(0, 300), random(50, 200))
  textSize(14)
  text("Press space to jump", 30, 60);
  text("LIFETIME   : "+naruto.lifetime, width-400, 60);
  /////////////////////////////////////////////



  /////////////
  spawnThings();
  Spawn();
  Spawnin()
    Spawninnnnnn()
  /////////////
    drawSprites();
}
  if (gamestate==="gameover"){
     
    background("black");
      textSize(24);
      fill("yellow")
    text("GAME OVER",230,300);
  }
}

function Spawn() {
  if (frameCount % 250 === 1) {
    var obs = createSprite(2000, height - 78, 20, 20);
    obs.addAnimation("obs", obstacleImage)
    obs.x = 690;

    obs.velocityX = -random(10, 18);
    obs.scale = 0.8;
    obs.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs.debug=true;
    obs.setCollider("rectangle", 0, 25, 100, 45)
    obs1gr.add(obs);
  }
}

function Spawnin() {
  if (frameCount % 600 === 0) {
    var obs2 = createSprite(2000, height - 160, 20, 20);
    obs2.addAnimation("obs", obstacleImage2)
    obs2.x = 690;

    obs2.velocityX = -3
    obs2.scale = 0.8;
    obs2.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs.debug=true;
    obs2.setCollider("rectangle", 0, 25, 100, 45);
    obs2gr.add(obs2);
  }
}
function Spawninnnnnn() {
  if (frameCount % 600 === 1) {
    var obs3 = createSprite(1000, height - 80, 20, 20);
    obs3.addAnimation("obs", gggg)
   

    obs3.velocityX = -3
    obs3.scale = 0.8;
    obs3.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs3.debug=true;
    obs3.setCollider("rectangle", 0, 25, 100, 45);
    goblingr.add(obs3);
    
    
    /////////
    
    
    var obs4 = createSprite(1040, height - 80, 20, 20);
    obs4.addAnimation("obs3", gggg)
   

    obs4.velocityX = -3
    obs4.scale = 0.8;
    obs4.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs.debug=true;
    obs4.setCollider("rectangle", 0, 25, 100, 45);
    goblingr2.add(obs4);
    //////
    ////
    
    var obs5 = createSprite(1060, height - 80, 20, 20);
    obs5.addAnimation("obs1", gggg)
    

    obs5.velocityX = -3
    obs5.scale = 0.8;
    obs5.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs.debug=true;
    obs5.setCollider("rectangle", 0, 25, 100, 45);
    goblingr3.add(obs5);
    ////
    var obs6 = createSprite(1080, height - 80, 20, 20);
    obs6.addAnimation("obs2", gggg)
 

    obs6.velocityX = -3
    obs6.scale = 0.8;
    obs6.lifetime = width + 2;
    // obstacleGroup.add(obs);
    // obs.debug=true;
    obs6.setCollider("rectangle", 0, 25, 100, 45);
    goblingr4.add(obs6);
  }
}



function spawnThings() {
  if (frameCount % 250 >= 20 && frameCount % 250 < 140) {
    fill(random(0, 30), random(0, 300), random(50, 200))
    textSize(24)
    text("U CAN USE THE ABILITY NOW", 200, 90);

    if (keyWentDown("S")) {
      
      obj = createSprite(50, 100);
      obj.scale = 0.1;
      obj.velocityX = 5;
      obj.x = naruto.x;
      obj.y = naruto.y;
      obj.lifetime =100;
      objj.add(obj);
      var rand = Math.round(random(1, 4))
      switch (rand) {
        case 1:
          obj.addImage("rr", tca);

          break;
        case 2:
          obj.addImage("rr", yca);

          break;
        case 3:
          obj.addImage("rr", gca);

          break;
        case 4:
          obj.addImage("rr", fca);

          break;
        default:
          break;
      }
    }
  }

}
