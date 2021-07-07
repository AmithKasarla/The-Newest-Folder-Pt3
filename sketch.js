var BG, BGI
var block1, block2, block3
var mario
var ground
var img1, img2
var gameState = 0
var clubGroup

function preload(){
BGI = loadImage("Images/Background.jpg")
block1 = loadImage("Images/tetrisBlocks/tile005.png")
block2 = loadImage("Images/tetrisBlocks/tile002.png")
block3 = loadImage("Images/tetrisBlocks/tile000.png")
img1 = loadAnimation("Images/1.png")
img2 = loadAnimation("Images/4.png", "Images/3.png", "Images/2.png")
}

function setup(){
createCanvas(700, 380)
BG = createSprite(350, 190)
BG.scale = 0.7
BG.addImage(BGI)

mario = createSprite( 25, 310, 20, 45)
mario.addAnimation("idle", img1)
mario.addAnimation("active", img2)
mario.scale = 1.5
ground = createSprite(350, 342, 700, 10)
ground.visible = false

clubGroup = new Group()
}

function draw(){
background(0)
drawSprites()
if(gameState === 0){
  textSize(20)
  fill("red")
text("Click Spacebar To Play!", 250, 190)
if(keyDown("space")){
  gameState = 1
}
}
else if(gameState === 1){
  BG.velocityX = -2.5
mario.changeAnimation("active", img2)
if(BG.x < 140){
  BG.x = 350
}
mario.collide(ground)
blocks()
if(keyDown("UP_ARROW")){
  mario.velocityY = -10
}
mario.velocityY = mario.velocityY + 0.5
//clubGroup.bounceOff(mario)
}

}

function blocks(){
if(frameCount % 60 === 0 ){
  var block
  var r = Math.round(random(1, 3))
  switch(r){
    case 1: block = createSprite(710, Math.round(random(85, 250)),25, 25)
    block.addImage(block1)
    break
    case 2: block = createSprite(710, Math.round(random(85, 250)),50, 25)
    block.addImage(block2)
    break
    case 3: block = createSprite(710, Math.round(random(85, 250)),75, 25)
    block.addImage(block3)
    break
    default:break
  }
  block.velocityX = -4
  block.lifetime = 180
  clubGroup.add(block)
}
}