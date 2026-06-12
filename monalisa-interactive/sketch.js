let canvasWidth = 600;
let canvasHeight = 700;

function setup() {
  let container = document.getElementById('sketch-container');
  let sketch = createCanvas(canvasWidth, canvasHeight);
  sketch.parent('sketch-container');
  noLoop();
}

function draw() {
  background(240, 230, 200); // Fundo bege claro
  
  // Desenhar a cabeça
  drawHead();
  
  // Desenhar o corpo
  drawBody();
  
  // Desenhar o rosto
  drawFace();
  
  // Desenhar os olhos (interativos)
  drawEyes();
  
  // Desenhar o sorriso famoso
  drawSmile();
  
  // Desenhar as mãos
  drawHands();
}

function windowResized() {
  redraw();
}

function mouseMoved() {
  redraw();
}

function drawHead() {
  push();
  fill(235, 200, 170); // Tom de pele realista
  stroke(180, 140, 100);
  strokeWeight(2);
  ellipse(300, 250, 180, 220); // Cabeça
  
  // Pescoço
  fill(235, 200, 170);
  rect(270, 350, 60, 80);
  pop();
}

function drawBody() {
  push();
  fill(100, 80, 60); // Marrom escuro para o vestido
  stroke(60, 40, 20);
  strokeWeight(2);
  
  // Corpo/Vestido
  rect(150, 420, 300, 280, 20);
  
  // Detalhes do tecido
  stroke(150, 120, 100);
  strokeWeight(1);
  for (let i = 0; i < 5; i++) {
    line(150 + i * 70, 420, 150 + i * 70, 700);
  }
  pop();
}

function drawFace() {
  push();
  // Bochechas com tom rosado
  fill(200, 140, 130, 100);
  noStroke();
  ellipse(200, 280, 60, 50);
  ellipse(400, 280, 60, 50);
  
  // Nariz
  fill(220, 180, 150);
  stroke(180, 140, 100);
  strokeWeight(1.5);
  triangle(300, 260, 295, 290, 305, 290);
  pop();
}

function drawEyes() {
  push();
  
  // Olho esquerdo
  drawEye(240, 240);
  
  // Olho direito
  drawEye(360, 240);
  
  // Sobrancelhas
  stroke(100, 60, 40);
  strokeWeight(2.5);
  noFill();
  arc(240, 225, 50, 30, PI, 0, OPEN);
  arc(360, 225, 50, 30, PI, 0, OPEN);
  
  pop();
}

function drawEye(eyeX, eyeY) {
  push();
  
  // Branco do olho
  fill(255);
  stroke(150, 100, 80);
  strokeWeight(2);
  ellipse(eyeX, eyeY, 35, 45);
  
  // Calcular direção do olho em relação ao mouse
  let angle = atan2(mouseY - eyeY, mouseX - eyeX);
  let distance = 8;
  
  // Íris (marrom escuro)
  let irisX = eyeX + cos(angle) * distance;
  let irisY = eyeY + sin(angle) * distance;
  
  fill(101, 67, 33); // Marrom da íris
  stroke(50, 30, 20);
  strokeWeight(1.5);
  ellipse(irisX, irisY, 22, 28);
  
  // Pupila (preta)
  fill(20);
  noStroke();
  ellipse(irisX, irisY - 2, 12, 15);
  
  // Brilho no olho
  fill(255);
  noStroke();
  ellipse(irisX - 4, irisY - 5, 6, 5);
  
  pop();
}

function drawSmile() {
  push();
  // O famoso sorriso enigmático
  stroke(180, 100, 80);
  strokeWeight(2.5);
  noFill();
  
  // Curva do sorriso (sutil e enigmático)
  bezier(270, 320, 285, 335, 315, 335, 330, 320);
  
  // Linha da boca
  stroke(200, 120, 100);
  strokeWeight(1.5);
  line(275, 320, 325, 320);
  
  pop();
}

function drawHands() {
  push();
  fill(235, 200, 170);
  stroke(180, 140, 100);
  strokeWeight(2);
  
  // Mão esquerda (visível)
  // Pulso
  rect(140, 480, 45, 40, 5);
  // Mão
  ellipse(145, 540, 50, 60);
  // Dedos
  ellipse(130, 580, 15, 25);
  ellipse(145, 595, 15, 25);
  ellipse(160, 590, 15, 25);
  
  // Mão direita
  // Pulso
  rect(415, 480, 45, 40, 5);
  // Mão
  ellipse(455, 540, 50, 60);
  // Dedos
  ellipse(440, 580, 15, 25);
  ellipse(455, 595, 15, 25);
  ellipse(470, 590, 15, 25);
  
  pop();
}

// Função para redimensionar o canvas responsivamente
function windowResized() {
  let container = document.getElementById('sketch-container');
  if (container) {
    let maxWidth = min(600, windowWidth - 40);
    let scale = maxWidth / 600;
    canvasWidth = 600 * scale;
    canvasHeight = 700 * scale;
    resizeCanvas(canvasWidth, canvasHeight);
    redraw();
  }
}