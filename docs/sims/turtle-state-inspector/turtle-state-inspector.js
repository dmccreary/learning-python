// Turtle State Inspector MicroSim
// CANVAS_HEIGHT: 510
// Students step through turtle commands while a live dashboard shows
// the turtle's hidden state: x, y position, heading compass, pen
// up/down, and pen color. Values that just changed are highlighted.
// Bloom level: Understand/Apply (interpret, predict, demonstrate) -
// step-through pattern; state is replayed from the command list.
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// command lists for each preset program
// cmd: forward, backward, right, left, penup, pendown, pencolor
let programs = {
  'Square': [
    { cmd: 'forward', arg: 100 }, { cmd: 'right', arg: 90 },
    { cmd: 'forward', arg: 100 }, { cmd: 'right', arg: 90 },
    { cmd: 'forward', arg: 100 }, { cmd: 'right', arg: 90 },
    { cmd: 'forward', arg: 100 }, { cmd: 'right', arg: 90 }
  ],
  'Triangle': [
    { cmd: 'forward', arg: 120 }, { cmd: 'left', arg: 120 },
    { cmd: 'forward', arg: 120 }, { cmd: 'left', arg: 120 },
    { cmd: 'forward', arg: 120 }, { cmd: 'left', arg: 120 }
  ],
  'Star': [
    { cmd: 'forward', arg: 130 }, { cmd: 'right', arg: 144 },
    { cmd: 'forward', arg: 130 }, { cmd: 'right', arg: 144 },
    { cmd: 'forward', arg: 130 }, { cmd: 'right', arg: 144 },
    { cmd: 'forward', arg: 130 }, { cmd: 'right', arg: 144 },
    { cmd: 'forward', arg: 130 }, { cmd: 'right', arg: 144 }
  ],
  'Pen Demo': [
    { cmd: 'forward', arg: 70 },
    { cmd: 'penup', arg: null },
    { cmd: 'forward', arg: 50 },
    { cmd: 'pendown', arg: null },
    { cmd: 'pencolor', arg: 'red' },
    { cmd: 'forward', arg: 70 },
    { cmd: 'left', arg: 90 },
    { cmd: 'forward', arg: 60 }
  ]
};

let programNames = ['Square', 'Triangle', 'Star', 'Pen Demo'];
let currentProgram = 'Square';
let step = -1; // index of last executed command; -1 = start state

let nextButton, prevButton, resetButton, programSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  nextButton = createButton('Next Command');
  nextButton.parent(mainElement);
  nextButton.position(10, drawHeight + 10);
  nextButton.mousePressed(() => {
    if (step < programs[currentProgram].length - 1) step += 1;
  });

  prevButton = createButton('Previous');
  prevButton.parent(mainElement);
  prevButton.position(135, drawHeight + 10);
  prevButton.mousePressed(() => {
    if (step > -1) step -= 1;
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(225, drawHeight + 10);
  resetButton.mousePressed(() => { step = -1; });

  programSelect = createSelect();
  programSelect.parent(mainElement);
  programSelect.position(295, drawHeight + 10);
  for (let name of programNames) {
    programSelect.option(name);
  }
  programSelect.changed(() => {
    currentProgram = programSelect.value();
    step = -1;
  });

  describe('Step through turtle graphics commands while a dashboard shows the turtle\'s x and y position, heading compass, pen state, and pen color. Values that just changed are highlighted.', LABEL);
}

// replay the command list up to (and including) index n
// turtle coords: origin at grid center, +x right, +y up, heading 0 = east
function turtleStateAfter(n) {
  let s = { x: 0, y: 0, heading: 0, pen: true, color: 'black', segments: [] };
  let cmds = programs[currentProgram];
  for (let i = 0; i <= n && i < cmds.length; i++) {
    let c = cmds[i];
    if (c.cmd === 'forward' || c.cmd === 'backward') {
      let d = (c.cmd === 'forward') ? c.arg : -c.arg;
      let nx = s.x + cos(radians(s.heading)) * d;
      let ny = s.y + sin(radians(s.heading)) * d;
      if (s.pen) {
        s.segments.push({ x1: s.x, y1: s.y, x2: nx, y2: ny, color: s.color });
      }
      s.x = nx;
      s.y = ny;
    } else if (c.cmd === 'right') {
      s.heading = ((s.heading - c.arg) % 360 + 360) % 360;
    } else if (c.cmd === 'left') {
      s.heading = ((s.heading + c.arg) % 360 + 360) % 360;
    } else if (c.cmd === 'penup') {
      s.pen = false;
    } else if (c.cmd === 'pendown') {
      s.pen = true;
    } else if (c.cmd === 'pencolor') {
      s.color = c.arg;
    }
  }
  return s;
}

function commandText(c) {
  if (c.arg === null) return 't.' + c.cmd + '()';
  if (typeof c.arg === 'string') return 't.' + c.cmd + '("' + c.arg + '")';
  return 't.' + c.cmd + '(' + c.arg + ')';
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Turtle State Inspector', canvasWidth / 2, 8);

  let state = turtleStateAfter(step);
  let prevState = turtleStateAfter(step - 1);

  drawCommandList();
  drawTurtleCanvas(state);
  drawDashboard(state, prevState);
}

// left panel: the command list with the executed command highlighted
function drawCommandList() {
  let panelX = 12;
  let panelY = 42;
  let panelW = Math.max(150, canvasWidth * 0.22);
  let panelH = 400;

  fill('white');
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('commands', panelX + 10, panelY + 6);

  textSize(15);
  let cmds = programs[currentProgram];
  let lineHeight = 26;
  for (let i = 0; i < cmds.length; i++) {
    let y = panelY + 30 + i * lineHeight;
    if (i === step) {
      noStroke();
      fill(255, 236, 179);
      rect(panelX + 6, y - 3, panelW - 12, lineHeight - 4, 4);
    }
    noStroke();
    fill(i <= step ? 'midnightblue' : color(150));
    textAlign(LEFT, TOP);
    text(commandText(cmds[i]), panelX + 12, y);
  }
}

// center: grid with the turtle's path and the turtle itself
function drawTurtleCanvas(state) {
  let areaX = Math.max(150, canvasWidth * 0.22) + 24;
  let areaW = canvasWidth - areaX - 216;
  let areaY = 42;
  let areaH = 400;
  let cx = areaX + areaW / 2;
  let cy = areaY + areaH / 2;

  // clip everything to the grid area
  push();
  // grid background
  fill('white');
  stroke(200);
  rect(areaX, areaY, areaW, areaH, 4);

  // grid lines every 50 turtle units
  stroke(230);
  strokeWeight(1);
  for (let gx = -200; gx <= 200; gx += 50) {
    if (cx + gx > areaX && cx + gx < areaX + areaW) {
      line(cx + gx, areaY + 2, cx + gx, areaY + areaH - 2);
    }
  }
  for (let gy = -200; gy <= 200; gy += 50) {
    if (cy + gy > areaY && cy + gy < areaY + areaH) {
      line(areaX + 2, cy + gy, areaX + areaW - 2, cy + gy);
    }
  }
  // axes through the origin
  stroke(180);
  line(areaX + 2, cy, areaX + areaW - 2, cy);
  line(cx, areaY + 2, cx, areaY + areaH - 2);

  // origin label
  noStroke();
  fill(150);
  textSize(12);
  textAlign(LEFT, TOP);
  text('(0, 0)', cx + 4, cy + 4);

  // path segments drawn so far
  for (let seg of state.segments) {
    stroke(seg.color);
    strokeWeight(3);
    line(cx + seg.x1, cy - seg.y1, cx + seg.x2, cy - seg.y2);
  }

  // the turtle: a triangle pointing along its heading
  let tx = cx + state.x;
  let ty = cy - state.y;
  push();
  translate(tx, ty);
  rotate(-radians(state.heading));
  // heading vector arrow
  stroke('darkorange');
  strokeWeight(2);
  line(0, 0, 34, 0);
  noStroke();
  fill('darkorange');
  triangle(34, -5, 34, 5, 42, 0);
  // turtle body
  fill('seagreen');
  stroke('white');
  strokeWeight(1.5);
  triangle(14, 0, -8, -9, -8, 9);
  pop();
  pop();
}

// right panel: the state dashboard
function drawDashboard(state, prevState) {
  let panelW = 195;
  let panelX = canvasWidth - panelW - 12;
  let panelY = 42;
  let panelH = 400;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('turtle state', panelX + 10, panelY + 6);

  // helper to show a value row, highlighted if it changed this step
  // (v || 0) turns JavaScript's negative zero into a plain 0 for display
  let xNow = Math.round(state.x) || 0;
  let yNow = Math.round(state.y) || 0;
  let rows = [
    { label: 'x', value: String(xNow), changed: xNow !== (Math.round(prevState.x) || 0) },
    { label: 'y', value: String(yNow), changed: yNow !== (Math.round(prevState.y) || 0) },
    { label: 'heading', value: state.heading + '°', changed: state.heading !== prevState.heading }
  ];
  textSize(defaultTextSize);
  for (let i = 0; i < rows.length; i++) {
    let ry = panelY + 32 + i * 34;
    if (step >= 0 && rows[i].changed) {
      noStroke();
      fill(255, 236, 179);
      rect(panelX + 8, ry - 4, panelW - 16, 28, 5);
    }
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    text(rows[i].label + ':', panelX + 16, ry + 10);
    fill('midnightblue');
    textAlign(RIGHT, CENTER);
    text(rows[i].value, panelX + panelW - 16, ry + 10);
  }

  // compass dial for the heading
  let compX = panelX + panelW / 2;
  let compY = panelY + 195;
  let compR = 52;
  fill('white');
  stroke(180);
  strokeWeight(1);
  circle(compX, compY, compR * 2);
  noStroke();
  fill(120);
  textSize(12);
  textAlign(CENTER, CENTER);
  text('0°', compX + compR + 12, compY);
  text('90°', compX, compY - compR - 10);
  text('180°', compX - compR - 16, compY);
  text('270°', compX, compY + compR + 10);
  // needle
  stroke('darkorange');
  strokeWeight(3);
  let hx = compX + cos(radians(state.heading)) * (compR - 8);
  let hy = compY - sin(radians(state.heading)) * (compR - 8);
  line(compX, compY, hx, hy);
  noStroke();
  fill('darkorange');
  circle(compX, compY, 7);

  // pen state row
  let penY = panelY + 278;
  let penChanged = step >= 0 && state.pen !== prevState.pen;
  if (penChanged) {
    fill(255, 236, 179);
    rect(panelX + 8, penY - 6, panelW - 16, 30, 5);
  }
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('pen:', panelX + 16, penY + 8);
  fill(state.pen ? 'darkgreen' : color(170, 60, 60));
  textAlign(RIGHT, CENTER);
  text(state.pen ? 'DOWN (drawing)' : 'UP (moving)', panelX + panelW - 16, penY + 8);

  // pen color row with swatch
  let colY = penY + 40;
  let colChanged = step >= 0 && state.color !== prevState.color;
  if (colChanged) {
    fill(255, 236, 179);
    rect(panelX + 8, colY - 6, panelW - 16, 30, 5);
  }
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  text('pen color:', panelX + 16, colY + 8);
  fill(state.color);
  stroke(120);
  strokeWeight(1);
  rect(panelX + panelW - 52, colY - 3, 36, 22, 4);

  // hint text at the bottom of the dashboard
  noStroke();
  fill(120);
  textSize(13);
  textAlign(LEFT, TOP);
  if (step < 0) {
    text('Predict: where will the\nturtle be after the first\ntwo commands?', panelX + 14, colY + 40);
  } else {
    let cmds = programs[currentProgram];
    text('Command ' + (step + 1) + ' of ' + cmds.length, panelX + 14, colY + 40);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
