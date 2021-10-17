var player, spikeBall, spikeBallGrp;
var magicCoin;
var speachBubbble;
var ryderStandingImg, ryderRunningImg, ryderRunningImg2, ryderJumpingImg, skyImg, spikeBallImg;
var ball1, ball2, ball3, ball4;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var coin1, coin2, coin3, coin4, coinImg;
var b1, b2, b3, b4;
var start, startImg;
var dialogue1, dialogue2, instructions, dia1Img, dia2Img, insImg, next, nextImg;
var score = 1;
var gameState = 0;

function preload()
{
  skyImg = loadImage("images/Sky.jpg");

  spikeBallImg = loadImage("images/spikyball.png");

  ryderStandingImg = loadImage("images/RyderStanding.png");
  ryderRunningImg = loadImage("images/RyderRunning.png");
  ryderRunningImg2 = loadImage("images/RyderRunning-2.png");
  ryderJumpingImg = loadImage("images/RyderJumping.png");

  coinImg = loadImage("images/coin.png");

  startImg = loadImage("images/start.png");

  dia1Img = loadImage("images/dialogue1.png");
  dia2Img = loadImage("images/dialogue2.png");
  insImg = loadImage("images/instructions.png");

  nextImg = loadImage("images/next.png");
}

function setup()
{
    createCanvas(800,400);

    
  wall1 = createSprite(20, 200, 15, 360);
  wall1.shapeColor = "red";

  wall2 = createSprite(60, 150, 80, 15);
  wall2.shapeColor = "red";

  wall3 = createSprite(95, 182, 15, 80);
  wall3.shapeColor = "red";

  wall4 = createSprite(400, 380, 780, 15);
  wall4.shapeColor = "red";

  wall5 = createSprite(350, 340, 15, 105);
  wall5.shapeColor = "red";

  wall6 = createSprite(420, 340, 15, 65);
  wall6.shapeColor = "red";

  wall7 = createSprite(452, 310, 80, 15);
  wall7.shapeColor = "red";

  wall8 = createSprite(780, 340, 15, 140);
  wall8.shapeColor = "red";

  wall9 = createSprite(780, 80, 15, 160);
  wall9.shapeColor = "red";

  wall10 = createSprite(463, 20, 625, 15);
  wall10.shapeColor = "red";

  wall11 = createSprite(160, 57, 15, 60);
  wall11.shapeColor = "red";

  wall12 = createSprite(280, 80, 240, 15);
  wall12.shapeColor = "red";

  wall13 = createSprite(400, 102, 15, 60);
  wall13.shapeColor = "red";

  wall14 = createSprite(253, 150, 160, 15);
  wall14.shapeColor = "red";

  wall15 = createSprite(180, 230, 15, 160);
  wall15.shapeColor = "red";

  wall16 = createSprite(540, 80, 15, 120);
  wall16.shapeColor = "red";

  wall17 = createSprite(180, 302, 100, 15);
  wall17.shapeColor = "red";

  wall18 = createSprite(580, 100, 80, 15);
  wall18.shapeColor = "red";

  wall19 = createSprite(400, 210, 440, 15);
  wall19.shapeColor = "red";

  wall20 = createSprite(740, 160, 93, 15);
  wall20.shapeColor = "red";

  wall21 = createSprite(700, 230, 15, 160);
  wall21.shapeColor = "red";

  wall22 = createSprite(660, 310, 92, 15);
  wall22.shapeColor = "red";

  wall23 = createSprite(620, 240, 15, 140);
  wall23.shapeColor = "red";

  wall24 = createSprite(560, 260, 15, 100);
  wall24.shapeColor = "red";

  // var ball1 = spawnSpikeBall(160, 200, 0, -5);
  

  // var ball2 = spawnSpikeBall(200, 300, -5, 0);

  // var ball3 = spawnSpikeBall(280, 100, -5, 4);
  //spikeBallGrp = new Group();

  ball1 = createSprite(380, 250, 50, 50);
  ball1.addImage("h", spikeBallImg);
  ball1.scale = 0.1;
  ball1.velocityY = 2;

  ball2 = createSprite(480, 150, 50, 50);
  ball2.addImage("h", spikeBallImg);
  ball2.scale = 0.1;
  ball2.velocityY = 3;

  ball3 = createSprite(95, 250, 50, 50);
  ball3.addImage("h", spikeBallImg);
  ball3.scale = 0.1;
  ball3.velocityY = 2;

  ball4 = createSprite(660, 250, 50, 50);
  ball4.addImage("h", spikeBallImg);
  ball4.scale = 0.1;
  ball4.velocityY = 3;

  start = createSprite(88, 25);
  start.addImage("k",startImg);
  start.scale = 0.15;


  player = createSprite(80, 40, 50, 80);
  player.addImage("k", ryderStandingImg);
  player.scale = 0.07;

  coin1 = createSprite(750, 50)
  coin1.addImage("k", coinImg);
  coin1.scale = 0.1;

  coin2 = createSprite(400, 50);
  coin2.addImage("k", coinImg);
  coin2.scale = 0.1;

  coin3 = createSprite(60, 190);
  coin3.addImage("j", coinImg);
  coin3.scale = 0.1;

  coin4 = createSprite(455, 350);
  coin4.addImage("k", coinImg);
  coin4.scale = 0.1;

  b1 = createSprite(780, 220, 15, 100);
  b1.shapeColor = "blue";

  b2 = createSprite(700, 90, 15, 120);
  b2.shapeColor = rgb(179, 60, 0);

  b3 = createSprite(65, 230, 70, 15);
  b3.shapeColor = "blue";

  b4 = createSprite(485, 345, 15, 56);
  b4.shapeColor = "blue";

  

  

  

  next = createSprite(700, 350);
  next.addImage("j", nextImg);
  next.scale = 0.3;

}

function draw()
{
    background(skyImg);

  if(gameState === 0)
  {
    dialogue1 = createSprite(250, 200);
    dialogue1.addImage("j", dia1Img);
    dialogue1.scale = 0.8;

    if(mousePressedOver(next))
    {
      dialogue1.destroy();
      gameState = 1;
    }
  }

  if(gameState === 1)
  {
    dialogue2 = createSprite(400, 200);
    dialogue2.addImage("h", dia2Img);

    if(mousePressedOver(next))
    {
      dialogue2.destroy();
      gameState = 2;
    }
  }
  
  if(gameState === 2)
  {
    instructions = createSprite(400, 200);
    instructions.addImage("k", insImg);

    if(mousePressedOver(next))
    {
      next.destroy();
      instructions.destroy();
      gameState = 3;
    }
    
  }  
  
    createEdgeSprites();
    ball1.bounceOff(wall4);
    ball1.bounceOff(wall19);
      
    ball2.bounceOff(wall10);
    ball2.bounceOff(wall19);

    ball3.bounceOff(wall4);
    ball3.bounceOff(wall3);

    ball4.bounceOff(wall10);
    ball4.bounceOff(wall22);

  if(gameState === 3)
  { 

    if(keyWentDown("left_arrow"))
    {
      player.addImage("k", ryderRunningImg2);
      player.velocityX = -2;
    }else if(keyWentUp("left_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityX = 0;
    }

    if(keyWentDown("right_arrow"))
    {
      player.addImage("k", ryderRunningImg);
      player.velocityX = 2;
    }else if(keyWentUp("right_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityX = 0;
    }

    if(keyWentDown("up_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityY = -2;
    }else if(keyWentUp("up_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityY = 0;
    }

    if(keyWentDown("down_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityY = 2;
    }else if(keyWentUp("down_arrow"))
    {
      player.addImage("k", ryderStandingImg);
      player.velocityY = 0;
    }
      
  } 

    if(player.isTouching(coin1))
    {
      score = score+1;
      coin1.destroy();
    }

    if(score === 1)
    {
      b2.destroy();
    }
    
    if(player.isTouching(coin2))
    {
      score = score+1;
      coin2.destroy();
    }

    if(score === 2)
    {
      b3.destroy();
    }

    if(player.isTouching(coin3))
    {
      score = score+1;
      coin3.destroy();
    }

    if(score === 3)
    {
      b4.destroy();
    }

    if(player.isTouching(coin4))
    {
      score = score+1;
      coin4.destroy();
    }

    if(score === 4)
    {
      b1.destroy();
    }

    if(
    //  player.isTouching(wall1)||
    //  player.isTouching(wall2)||
    //  player.isTouching(wall3)||
    //  player.isTouching(wall4)||
    //  player.isTouching(wall5)||
    //  player.isTouching(wall6)||
    //  player.isTouching(wall7)||
    //  player.isTouching(wall8)||
    //  player.isTouching(wall9)||
    //  player.isTouching(wall10)||
    //  player.isTouching(wall11)||
    //  player.isTouching(wall12)||
    //  player.isTouching(wall13)||
    //  player.isTouching(wall14)||
    //  player.isTouching(wall15)||
    //  player.isTouching(wall16)||
    //  player.isTouching(wall17)||
    //  player.isTouching(wall18)||
    //  player.isTouching(wall19)||
    //  player.isTouching(wall20)||
    //  player.isTouching(wall21)||
    //  player.isTouching(wall22)||
    //  player.isTouching(wall23)||
    //  player.isTouching(wall24)||
    player.isTouching(ball1)||
    player.isTouching(ball2)||
    player.isTouching(ball3)||
    player.isTouching(ball4)||
    player.isTouching(b1)||
    player.isTouching(b2)||
    player.isTouching(b3)||
    player.isTouching(b4)
    )
    {
      player.x = 40;
      player.y = 80;
    }
      
    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall12);
    player.collide(wall13);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wall23);
    player.collide(wall24);
  

    drawSprites();
}


