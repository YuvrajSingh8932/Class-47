var man1,man2,dog,obstacle1,obstacle2,gameOver,reset,track,coin,life,bgImg,car1,car2;
var man1_Img,man2_Img,dog_Img,life_Img,track_Img,gameOver_Img,reset_Img,coin_Img,background,obstacle1_Img,obstacle2_Img;
var car1_Img,car2_Img;

function preload() {
  man1_Img=loadAnimation("Man1.png,Man2.png,Man3.png,Man4.png");
  man2_Img=loadAnimation("Man5.png,Man6.png,Man7.png,Man8.png");
  obstacle1_Img=loadImage("Obstacle1.png");
  obstacle2_Img=loadImage("Obstacle2.png");
  coin_Img=loadImage("PowerCoin.png");
  gameOver_Img=loadImage("GameOver.png");
  life_Img=loadImage("Life.png");
  dog_Img=loadAnimation("Dog1.png,Dog2.png,Dog3.png,Dog4.png");
  bgImg=loadImage("Background.png");
  track_Img=loadImage("Track.png");
  reset_Img=loadImage("Reset Button.png");
  car1_Img=loadImage("Car1.png");
  car2_Img=loadImage("Car2.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  man1=addAnimation("collided",man1_Img);
  man2=addAnimation("collided",man2_Img);
  dog=addAnimation(dog_Img);
  obstacle1=addImage(obstacle1_Img);
  obstacle2=addImage(obstacle2_Img);
  coin=addImage(coin_Img);
  gameOver=addImage(gameOver_Img);
  life=addImage(life_Img);
  background=addImage(bgImg);
  track=addImage(track_Img);
  reset=addImage(reset_Img);
  car1=addImage(car1_Img);
  car2=addImage(car2_Img);
}

function draw() {
  background(255,255,255);

  drawSprites();
}