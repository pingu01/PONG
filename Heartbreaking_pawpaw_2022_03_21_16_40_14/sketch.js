//referencia espacial da bola
let xBola = 300;
let yBola = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bola
let velocidadeX = 5;
let velocidadeY = 5;

//referencia espacial das raquetes
let xMinhaRaquete = 10;
let yMinhaRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 100;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//movimentação da raquete
let velocidadeRaquete = 10

let colidiu = false

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

//cria a "mesa"
function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//executa as funções
function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  bateNaBorda()
  mostrarRaquete(xMinhaRaquete, yMinhaRaquete)
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentarRaquete()
  movimentarOponente()
  verificaColisaoRaquete(xMinhaRaquete, yMinhaRaquete)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  //velocidadeOponente()
  incluiPlacar();
  marcaPonto();
}
//faz a bolinha existir
function mostraBolinha(){
  circle (xBola,yBola,diametro);
 }

//movimenta a bolinha
function movimentaBolinha(){
  xBola += velocidadeX;
  yBola += velocidadeY;
}

//identifica quando a borda da bolinha bate na borda da "mesa"
function bateNaBorda(){
    if (xBola + raio > width || xBola - raio < 0)
    velocidadeX *= -1;
  
  if (yBola + raio > height || yBola - raio < 0)
    velocidadeY *= -1;
}

//mostra minha raquete
function mostrarRaquete(x,y){
  rect (x, y, larguraRaquete, alturaRaquete);
  }

//movimenta a raquete
function movimentarRaquete(){
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -= velocidadeRaquete
  }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += velocidadeRaquete
  }
//}
//function verificaColisaoRaquete(){
 // if (xBola - raio < xMinhaRaquete + larguraMinhaRaquete && yBola - raio < yMinhaRaquete + alturaMinhaRaquete && yBola + raio > yMinhaRaquete){
    //velocidadeX *= -1;
 // }
}
//verifica a colisao por meio de extensao
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,larguraRaquete,alturaRaquete,xBola,yBola,raio);
  if (colidiu){
    velocidadeX *= -1;
    raquetada.play()
  }
}
// oponente bot
function velocidadeOponente(){
   velocidadeYOponente = yBola - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}
//oponente player
function movimentarOponente(){
    if(keyIsDown(87)){
    yRaqueteOponente -= velocidadeRaquete
  }
  if(keyIsDown(83)){
    yRaqueteOponente += velocidadeRaquete
  }
}

function incluiPlacar(){
  stroke(255)
  textAlign (CENTER)
  textSize(16);
  fill(color(255,140,0));
  rect(180,10,40,20)
  fill(255);
  text(meusPontos, 200, 26);
  fill(color(255,140,0));
  rect(380,10,40,20)
  fill(255);
  text(pontosOponente, 400, 26);
}

function marcaPonto(){
  if (xBola > 585){
    meusPontos += 1;
    ponto.play();
  }
  if(xBola < 15){
    pontosOponente += 1;
    ponto.play();
  }
}




