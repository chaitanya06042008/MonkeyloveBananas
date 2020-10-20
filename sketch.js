
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  ground_image = loadImage("ground2.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey= createSprite(70, 350, 20, 20)
    invisibleGround= createSprite(200, 385, 400, 10)
 /* obstacle = createSprite(300, 350, 30, 30)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2*/
invisibleGround.visible= false
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  ground= createSprite(200, 380, 400, 10)
  ground.addImage(ground_image)
  ground.velocityX=-4
   ground.x=ground.width/2

bananaGroup = new Group
obstacleGroup = new Group
  
}


function draw() {
  
  //console.log(ground.x)
  if (bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach()
  }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  background("white")
  monkey.collide(invisibleGround)
if (keyDown("space")&&monkey.y>300){
    monkey.velocityY=-12
  if (obstacleGroup.isTouching(monkey)){
    console.log("c")
  }

  } 
    monkey.velocityY+=0.5
  
  if (frameCount%80===0){
    banana1()

  }
   
  if (frameCount%300===0){
    obstacle1()

  }
drawSprites()
  text("Survival Time:"+Math.round(frameCount/60), 200, 200)
  
}
function banana1(){
  rand = Math.round(random(120, 200))
  banana = createSprite(600, rand, 30, 30)
  banana.addImage(bananaImage)
  banana.velocityX=-4
  banana.scale=0.1
  banana.lifetime=208
  bananaGroup.add(banana)
}
function obstacle1(){
 
  obstacle = createSprite(600, 370, 30, 30)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-4
  obstacle.scale=0.1
  obstacle.lifetime=208
  obstacleGroup.add(obstacle)
}







