var arco , flecha,  cena;
var arcoImagem, flechaImagem, balão_verde, balão_vermei, balão_rosa ,balão_azul, cenaImagem;
backgroundImage
var score=0;

function preload(){
  
  cenaImagem = loadImage("background0.png");
  flechaImagem = loadImage("arrow0.png");
  arcoImagem = loadImage("bow0.png");
  balão_vermei = loadImage("red_balloon0.png");
  balão_verde = loadImage("green_balloon0.png");
  balão_rosa = loadImage("pink_balloon0.png");
  balão_azul = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  cena = createSprite(0,0,400,400);
  cena.addImage(cenaImagem);
  cena.scale = 2.5
  
  // criando arco para atirar flecha
  arco = createSprite(380,220,20,50);
  arco.addImage(arcoImagem); 
  arco.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // movendo o chão
    cena.velocityX = -3 

    if (cena.x < 0){
      cena.x = cena.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createFlecha();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}


// Criando flechas para o arco
 function createFlecha() {
  var flecha= createSprite(100, 100, 60, 10);
  flecha.addImage(flechaImagem);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(balão_vermei);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(balão_azul);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(balão_verde);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(balão_rosa);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}
