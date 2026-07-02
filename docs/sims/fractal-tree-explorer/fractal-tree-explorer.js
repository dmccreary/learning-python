// Fractal Tree Explorer MicroSim
// CANVAS_HEIGHT: 550
// Students drag branch angle, depth, and shrink sliders and watch a
// recursive tree redraw instantly. Each recursion depth is tinted its
// own color, and a live counter shows how many recursive calls drew
// the tree. Snapshot keeps a ghost for comparison; Randomize explores.
// Bloom level: Apply/Create (demonstrate, experiment, design).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 150; // three slider rows + one button row
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 150;
let defaultTextSize = 16;

let angleSlider, depthSlider, shrinkSlider;
let randomButton, snapshotButton;
let snapshot = null; // {angle, depth, shrink} ghost overlay
let callCount = 0;

// one color per recursion depth (trunk first)
let depthColors = ['#8B5A2B', '#A0692F', '#B57F35', '#9C8B3C', '#7FA243',
                   '#5FA84A', '#43A853', '#2E9E62', '#27906E', '#2A7F72'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  angleSlider = createSlider(10, 60, 25, 1);
  angleSlider.parent(mainElement);
  angleSlider.position(sliderLeftMargin, drawHeight + 10);
  angleSlider.size(canvasWidth - sliderLeftMargin - margin);

  depthSlider = createSlider(1, 9, 6, 1);
  depthSlider.parent(mainElement);
  depthSlider.position(sliderLeftMargin, drawHeight + 45);
  depthSlider.size(canvasWidth - sliderLeftMargin - margin);

  shrinkSlider = createSlider(0.5, 0.8, 0.68, 0.01);
  shrinkSlider.parent(mainElement);
  shrinkSlider.position(sliderLeftMargin, drawHeight + 80);
  shrinkSlider.size(canvasWidth - sliderLeftMargin - margin);

  randomButton = createButton('Randomize');
  randomButton.parent(mainElement);
  randomButton.position(10, drawHeight + 113);
  randomButton.mousePressed(() => {
    angleSlider.value(Math.round(random(10, 60)));
    depthSlider.value(Math.round(random(3, 9)));
    shrinkSlider.value(random(0.5, 0.8));
  });

  snapshotButton = createButton('Snapshot');
  snapshotButton.parent(mainElement);
  snapshotButton.position(110, drawHeight + 113);
  snapshotButton.mousePressed(() => {
    snapshot = {
      angle: angleSlider.value(),
      depth: depthSlider.value(),
      shrink: shrinkSlider.value()
    };
  });

  describe('Drag branch angle, depth, and shrink sliders and watch a recursive fractal tree redraw instantly. Each recursion depth has its own color, and a counter shows how many recursive calls drew the tree.', LABEL);
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  let angleV = angleSlider.value();
  let depthV = depthSlider.value();
  let shrinkV = shrinkSlider.value();

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Fractal Tree Explorer', canvasWidth / 2, 8);

  let trunkLen = drawHeight * 0.24;
  let baseX = canvasWidth / 2;
  let baseY = drawHeight - 16;

  // ghost of the snapshot, drawn first in pale gray
  if (snapshot) {
    push();
    translate(baseX, baseY);
    drawBranchGhost(trunkLen, snapshot.depth, snapshot.angle, snapshot.shrink);
    pop();
  }

  // the live tree
  callCount = 0;
  push();
  translate(baseX, baseY);
  drawBranch(trunkLen, depthV, angleV, shrinkV, depthV);
  pop();

  // readouts
  noStroke();
  textAlign(LEFT, TOP);
  textSize(15);
  fill('black');
  text('recursive calls: ' + callCount, 15, 44);
  fill(120);
  textSize(13);
  text('every +1 depth roughly DOUBLES the calls', 15, 66);
  if (snapshot) {
    fill(150);
    text('gray ghost = your snapshot (angle ' + snapshot.angle + '°, depth ' + snapshot.depth + ')', 15, 86);
  }

  // depth color legend
  drawLegend(depthV);

  // slider labels and values
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Branch angle: ' + angleV + '°', 15, drawHeight + 20);
  text('Depth: ' + depthV, 15, drawHeight + 55);
  text('Shrink: ' + nf(shrinkSlider.value(), 1, 2), 15, drawHeight + 90);
}

// the recursive tree - the direct analog of the chapter's turtle fractal
function drawBranch(len, depth, angleV, shrinkV, maxDepth) {
  callCount += 1;
  let level = maxDepth - depth; // 0 = trunk
  stroke(depthColors[Math.min(level, depthColors.length - 1)]);
  strokeWeight(Math.max(1, (depth + 1) * 0.9));
  line(0, 0, 0, -len);
  translate(0, -len);
  if (depth > 0) {
    push();
    rotate(radians(angleV));
    drawBranch(len * shrinkV, depth - 1, angleV, shrinkV, maxDepth);
    pop();
    push();
    rotate(-radians(angleV));
    drawBranch(len * shrinkV, depth - 1, angleV, shrinkV, maxDepth);
    pop();
  }
}

// pale one-color version of the tree for the snapshot ghost
function drawBranchGhost(len, depth, angleV, shrinkV) {
  stroke(200);
  strokeWeight(1);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (depth > 0) {
    push();
    rotate(radians(angleV));
    drawBranchGhost(len * shrinkV, depth - 1, angleV, shrinkV);
    pop();
    push();
    rotate(-radians(angleV));
    drawBranchGhost(len * shrinkV, depth - 1, angleV, shrinkV);
    pop();
  }
}

// small legend mapping color to recursion level
function drawLegend(depthV) {
  let x = canvasWidth - 150;
  let y = 44;
  noStroke();
  fill(120);
  textAlign(LEFT, TOP);
  textSize(13);
  text('color = recursion level', x, y);
  for (let i = 0; i <= Math.min(depthV, 9); i++) {
    let ly = y + 20 + i * 16;
    noStroke();
    fill(depthColors[Math.min(i, depthColors.length - 1)]);
    rect(x, ly, 24, 10, 3);
    fill(110);
    textSize(11);
    text(i === 0 ? 'trunk' : 'level ' + i, x + 32, ly);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  angleSlider.size(canvasWidth - sliderLeftMargin - margin);
  depthSlider.size(canvasWidth - sliderLeftMargin - margin);
  shrinkSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
