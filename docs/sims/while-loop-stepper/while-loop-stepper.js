// While-Loop Stepper MicroSim
// CANVAS_HEIGHT: 500
// Students step a while loop through its check-condition / run-body
// rhythm. The arrow visits the condition line before EVERY trip and
// stamps a True/False verdict. The Infinite Bug preset (missing
// decrement) spins a trip odometer with a warning banner - a safe way
// to experience an infinite loop.
// Bloom level: Understand/Analyze (trace, predict, debug).
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// step: {line, varName, varValue, out[], verdict(null|true|false), trip, note, warning}
let programs = {};

function buildPrograms() {
  // --- Countdown (healthy loop) ---
  let cd = {
    lines: ['count = 3', 'while count > 0:', '    print(count)', '    count = count - 1', 'print("Liftoff!")'],
    varName: 'count',
    steps: []
  };
  cd.steps.push({ line: 0, varValue: 3, out: [], verdict: null, trip: 0, warning: false,
    note: 'Set up the loop variable: count starts at 3.' });
  let out = [];
  let c = 3;
  let trip = 0;
  while (c > 0) {
    trip += 1;
    cd.steps.push({ line: 1, varValue: c, out: out.slice(), verdict: true, trip: trip, warning: false,
      note: 'CHECK first: is count > 0? ' + c + ' > 0 is True, so the body runs (trip ' + trip + ').' });
    out = out.concat([String(c)]);
    cd.steps.push({ line: 2, varValue: c, out: out.slice(), verdict: null, trip: trip, warning: false,
      note: 'The body prints count: ' + c + '.' });
    c -= 1;
    cd.steps.push({ line: 3, varValue: c, out: out.slice(), verdict: null, trip: trip, warning: false,
      note: 'count goes down by 1 — now ' + c + '. This line is what will eventually stop the loop.' });
  }
  cd.steps.push({ line: 1, varValue: 0, out: out.slice(), verdict: false, trip: trip, warning: false,
    note: 'CHECK again: 0 > 0 is False. The loop is done — Python jumps past the body.' });
  out = out.concat(['Liftoff!']);
  cd.steps.push({ line: 4, varValue: 0, out: out.slice(), verdict: null, trip: trip, warning: false,
    note: 'Execution continues after the loop. The condition was checked ' + (trip + 1) + ' times for ' + trip + ' trips.' });
  programs['Countdown'] = cd;

  // --- Double Until 100 (loop can overshoot) ---
  let db = {
    lines: ['num = 3', 'while num < 100:', '    num = num * 2', 'print(num)'],
    varName: 'num',
    steps: []
  };
  db.steps.push({ line: 0, varValue: 3, out: [], verdict: null, trip: 0, warning: false,
    note: 'num starts at 3.' });
  let n = 3;
  trip = 0;
  while (n < 100) {
    trip += 1;
    db.steps.push({ line: 1, varValue: n, out: [], verdict: true, trip: trip, warning: false,
      note: 'CHECK: ' + n + ' < 100 is True — run the body (trip ' + trip + ').' });
    n = n * 2;
    db.steps.push({ line: 2, varValue: n, out: [], verdict: null, trip: trip, warning: false,
      note: 'num doubles to ' + n + '.' });
  }
  db.steps.push({ line: 1, varValue: n, out: [], verdict: false, trip: trip, warning: false,
    note: 'CHECK: ' + n + ' < 100 is False — the loop ends. Notice num overshot 100!' });
  db.steps.push({ line: 3, varValue: n, out: [String(n)], verdict: null, trip: trip, warning: false,
    note: 'The loop only promises num is NOT < 100 when it ends — it landed on ' + n + ', not 100.' });
  programs['Double Until 100'] = db;

  // --- Infinite Bug (missing decrement) ---
  let inf = {
    lines: ['count = 3', 'while count > 0:', '    print(count)', '    # oops! forgot count = count - 1'],
    varName: 'count',
    steps: []
  };
  inf.steps.push({ line: 0, varValue: 3, out: [], verdict: null, trip: 0, warning: false,
    note: 'count starts at 3. But look closely at the body — something is missing...' });
  out = [];
  for (let t = 1; t <= 7; t++) {
    inf.steps.push({ line: 1, varValue: 3, out: out.slice(), verdict: true, trip: t, warning: t >= 3,
      note: 'CHECK: 3 > 0 is True... again. count never changes, so this is ALWAYS True.' });
    out = out.concat(['3']);
    if (out.length > 5) out = out.slice(out.length - 5); // keep console short
    inf.steps.push({ line: 2, varValue: 3, out: out.slice(), verdict: null, trip: t, warning: t >= 3,
      note: 'The body prints 3 for the ' + t + ordinal(t) + ' time. Nothing ever changes count.' });
  }
  inf.steps.push({ line: 1, varValue: 3, out: out.slice(), verdict: true, trip: 8, warning: true,
    note: 'This loop would run FOREVER. The fix: add count = count - 1 inside the body so the condition can eventually become False.' });
  programs['Infinite Bug'] = inf;
}

function ordinal(t) {
  if (t === 1) return 'st';
  if (t === 2) return 'nd';
  if (t === 3) return 'rd';
  return 'th';
}

let programNames = ['Countdown', 'Double Until 100', 'Infinite Bug'];
let currentProgram = 'Countdown';
let step = -1;

let nextButton, prevButton, resetButton, programSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  buildPrograms();
  textSize(defaultTextSize);

  nextButton = createButton('Next Step');
  nextButton.parent(mainElement);
  nextButton.position(10, drawHeight + 10);
  nextButton.mousePressed(() => {
    if (step < programs[currentProgram].steps.length - 1) step += 1;
  });

  prevButton = createButton('Previous');
  prevButton.parent(mainElement);
  prevButton.position(105, drawHeight + 10);
  prevButton.mousePressed(() => {
    if (step > -1) step -= 1;
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(195, drawHeight + 10);
  resetButton.mousePressed(() => { step = -1; });

  programSelect = createSelect();
  programSelect.parent(mainElement);
  programSelect.position(265, drawHeight + 10);
  for (let name of programNames) {
    programSelect.option(name);
  }
  programSelect.changed(() => {
    currentProgram = programSelect.value();
    step = -1;
  });

  describe('Step a Python while loop through its check-condition then run-body rhythm. A True or False verdict is stamped at every condition check, and the Infinite Bug preset shows a loop that would never end, with a warning banner and trip odometer.', LABEL);
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
  text('While-Loop Stepper', canvasWidth / 2, 8);

  let prog = programs[currentProgram];
  let s = (step >= 0) ? prog.steps[step] : null;

  drawCodePanel(prog, s);
  drawStatePanel(prog, s);
  drawNotePanel(prog, s);
}

// left: the program with the arrow and the condition verdict stamp
function drawCodePanel(prog, s) {
  let panelX = 15;
  let panelY = 48;
  let panelW = canvasWidth * 0.52 - 25;
  let panelH = 190;

  fill('white');
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('program.py', panelX + 10, panelY + 5);

  textSize(defaultTextSize);
  let lineHeight = 30;
  for (let i = 0; i < prog.lines.length; i++) {
    let y = panelY + 28 + i * lineHeight;
    if (s && i === s.line) {
      noStroke();
      fill(255, 236, 179);
      rect(panelX + 26, y - 4, panelW - 34, lineHeight - 4, 4);
      fill('darkorange');
      triangle(panelX + 6, y, panelX + 6, y + 16, panelX + 20, y + 8);
    }
    noStroke();
    fill(prog.lines[i].trim().startsWith('#') ? 'gray' : 'midnightblue');
    textAlign(LEFT, TOP);
    text(prog.lines[i], panelX + 32, y);
  }

  // verdict stamp next to the while line when this step is a check
  if (s && s.verdict !== null) {
    let y = panelY + 28 + 1 * lineHeight; // while line is always line 1
    push();
    translate(panelX + panelW - 46, y + 8);
    rotate(-0.12);
    stroke(s.verdict ? 'seagreen' : 'indianred');
    strokeWeight(2.5);
    fill('white');
    rect(-34, -14, 68, 28, 6);
    noStroke();
    fill(s.verdict ? 'seagreen' : 'indianred');
    textAlign(CENTER, CENTER);
    textSize(16);
    text(s.verdict ? 'True' : 'False', 0, 0);
    pop();
  }
}

// right: variable box, trip odometer, console, warning banner
function drawStatePanel(prog, s) {
  let x = canvasWidth * 0.52 + 5;
  let w = canvasWidth - x - 15;
  let y = 48;

  // variable box
  stroke(160);
  strokeWeight(1);
  fill('lemonchiffon');
  rect(x, y, 110, 58, 8);
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(14);
  text(prog.varName, x + 55, y + 7);
  textSize(21);
  fill('midnightblue');
  text(s ? s.varValue : '—', x + 55, y + 28);

  // trip odometer
  let odoX = x + 126;
  let isWarning = s && s.warning;
  stroke(isWarning ? 'indianred' : 160);
  strokeWeight(isWarning ? 3 : 1);
  fill(isWarning ? color(255, 235, 235) : 'white');
  rect(odoX, y, w - 126, 58, 8);
  noStroke();
  fill(isWarning ? 'indianred' : 'black');
  textAlign(CENTER, TOP);
  textSize(14);
  text('trips so far', odoX + (w - 126) / 2, y + 7);
  textSize(21);
  text(s ? (s.trip + (isWarning ? ' ...' : '')) : '0', odoX + (w - 126) / 2, y + 28);

  // console
  let cy = y + 70;
  fill(40);
  stroke(200);
  strokeWeight(1);
  rect(x, cy, w, 120, 8);
  noStroke();
  fill(180);
  textSize(13);
  textAlign(LEFT, TOP);
  text('Output' + (currentProgram === 'Infinite Bug' ? ' (last 5 lines)' : ''), x + 10, cy + 5);
  fill(120, 255, 120);
  textSize(defaultTextSize);
  let oy = cy + 26;
  let outs = s ? s.out : [];
  for (let line of outs) {
    text(line, x + 12, oy);
    oy += 19;
  }
  if (outs.length === 0) {
    fill(150);
    text('(nothing yet)', x + 12, oy);
  }
}

// bottom: note panel plus the infinite-loop warning banner
function drawNotePanel(prog, s) {
  let panelX = 15;
  let panelY = 250;
  let panelW = canvasWidth - 30;

  // warning banner for the infinite preset
  if (s && s.warning) {
    fill(255, 224, 224);
    stroke('indianred');
    strokeWeight(2);
    rect(panelX, panelY, panelW, 38, 8);
    noStroke();
    fill('indianred');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('⚠ Infinite loop! The condition can NEVER become False.', panelX + panelW / 2, panelY + 19);
  }

  let noteY = panelY + 48;
  let noteH = 138;
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(panelX, noteY, panelW, noteH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  if (!s) {
    fill('black');
    text('A while loop CHECKS its condition first, and only runs the body if the check says True.', panelX + 15, noteY + 12, panelW - 30, 46);
    text('Predict: how many times will this loop\'s body run? And how many times will the condition be checked?', panelX + 15, noteY + 48, panelW - 30, 60);
  } else {
    fill('darkorange');
    text('Step ' + (step + 1) + ' of ' + prog.steps.length + ':', panelX + 15, noteY + 12);
    fill('black');
    text(s.note, panelX + 15, noteY + 40, panelW - 30, noteH - 50);
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
