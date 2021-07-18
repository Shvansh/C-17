var astro 
var sleep, eat, gym, brush, move, drink, bg



function preload(){
bath=loadAnimation("images/bath1.png","images/bath2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
gym=loadAnimation("images/gym1.png","images/gym11.png","images/gym12.png","images/gym2.png");
brush=loadAnimation("images/brush.png");    
sleep=loadAnimation("images/sleep.png");
move=loadAnimation("images/move1.png","images/move2.png");
drink=loadAnimation("images/drink1.png","images/drink2.png")
bg=loadImage("images/iss.png");
}




function setup() {
  createCanvas(900, 700);
  
  
  astro=createSprite(230,230,50,50);
  astro.addAnimation("sleeping",sleep)
  astro.scale=0.1
}

function draw() {
  background(bg);
  drawSprites();
  edges= createEdgeSprites();
 astro.bounceOff(edges);
  if(keyDown("UP_ARROW")){ 
  astro.addAnimation("brushing",brush);
  astro.changeAnimation("brushing");
    astro.velocityX=0;
     astro.velocityY=0;
    astro.x=300;
     astro.y=510;
    
     }
  
   if(keyDown("DOWN_ARROW")){ 
  astro.addAnimation("gymming",gym);
  astro.changeAnimation("gymming");
     astro.velocityX=0;
     astro.velocityY=0;
     astro.x=500;
     astro.y=510;
     }
 
  if(keyDown("LEFT_ARROW")){ 
  astro.addAnimation("eating",eat);
  astro.changeAnimation("eating");
    astro.velocityX=0;
     astro.velocityY=0;
    astro.x=500;
     astro.y=510;
     }

  
   if(keyDown("RIGHT_ARROW")){ 
  astro.addAnimation("bathing",bath);
  astro.changeAnimation("bathing");
      astro.velocityX=0;
     astro.velocityY=0;
     astro.x=750;
     astro.y=510;
     }
  
   if(keyDown("M")){ 
  astro.addAnimation("moving",move);
  astro.changeAnimation("moving");
     astro.velocityX=1;
     astro.velocityY=2;
     }
} 