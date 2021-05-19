var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png","images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png","images/mouse4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    catImg3 = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,400,50,50);
    cat.addAnimation("images",catImg1);
    cat.addAnimation("happy1",catImg3);
    cat.scale = 0.1;

    mouse = createSprite(200,400,50,50);
    mouse.addAnimation("images",mouseImg1);
    mouse.addAnimation("happy2",mouseImg3);
    mouse.scale = 0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width + mouse.width)/2) {
        cat.changeAnimation("happy1",catImg3);
        
        mouse.changeAnimation("happy2",mouseImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW) {
    cat.addAnimation("running",catImg2); 
    cat.changeAnimation("running");
    cat.x = cat.x -10;

    mouse.addAnimation("teasing",mouseImg2);
    mouse.changeAnimation("teasing");
}

}
