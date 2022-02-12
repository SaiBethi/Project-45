var START=0;
var PLAY=1;
var END=2;
var gameState=START;
function preload()
{

Boss = loadImage("BossImg.jpg");
Background = loadImage("Background.jpg");
Marcus = loadImage("Marcus.jpg");
Mark = loadImage("Mark.png");
Mason = loadImage("Mason.png");
Michael = loadImage("Michael.png");
NonPlayer= loadImage("NPC.png");
Shield = loadImage("Shield.png");
Medkit = loadImage("Medkit.png");
StartBackground = loadImage("WelcomeBackground.jpg");
Message = loadImage("Message.png");
SButton = loadImage("StartButton.png")
}

function setup()
{

createCanvas(windowWidth,windowHeight);
start = createSprite(width/2,height/2);
start.addImage(Message);
start.scale=0.2;

startButton = createSprite(width/2-100,height/2+400);
startButton.addImage(SButton);
startButton.scale=0.2;
play = createSprite(width/2,height/2);
play.addImage(Background);
play.scale=3.5;
play.visible=false;
}
function draw()
{

background("red");
drawSprites();
if(gameState===START){
if (mousePressedOver(startButton)){
gameState=PLAY;
}
}
if (gameState===PLAY){
startButton.visible=false;
start.visible=false;
play.visible=true;
}
}