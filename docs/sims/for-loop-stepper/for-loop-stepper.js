// For-Loop Stepper MicroSim
// CANVAS_HEIGHT: 500
// Students step through a for loop one STATEMENT at a time, watching
// the loop variable change, the arrow jump back to the top, and (in the
// Draw Square preset) a turtle draw one square side per trip.
// Bloom level: Understand (trace, explain, predict) - step-through;
// auto-play starts paused and can be paused at any time.
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

// ---------- program definitions and generated step lists ----------
// Each step: {line, i, trip, note, turtle:[list of 'F'/'R' done], out:[], total}
let programs = {};

function buildPrograms() {
  // --- Draw Square ---
  let sq = {
    lines: ['for i in range(4):', '    t.forward(100)', '    t.right(90)', 'print("Done!")'],
    steps: [],
    view: 'turtle'
  };
  let moves = [];
  for (let trip = 0; trip < 4; trip++) {
    sq.steps.push({
      line: 0, i: trip, trip: trip, turtle: moves.slice(), out: [],
      note: (trip === 0)
        ? 'The loop begins. range(4) hands i its first value: 0. Trip 1 starts.'
        : 'Back to the top! range(4) hands i its next value: ' + trip + '. Trip ' + (trip + 1) + ' starts.'
    });
    moves = moves.concat(['F']);
    sq.steps.push({
      line: 1, i: trip, trip: trip, turtle: moves.slice(), out: [],
      note: 'The body runs: the turtle walks forward 100 and draws side ' + (trip + 1) + ' of 4.'
    });
    moves = moves.concat(['R']);
    sq.steps.push({
      line: 2, i: trip, trip: trip, turtle: moves.slice(), out: [],
      note: 'Still trip ' + (trip + 1) + ': the turtle turns right 90° to face the next side.'
    });
  }
  sq.steps.push({
    line: 3, i: null, trip: 4, turtle: moves.slice(), out: ['Done!'],
    note: 'range(4) is used up, so the loop ends. Python moves PAST the loop: 4 trips drew 4 sides.'
  });
  programs['Draw Square'] = sq;

  // --- Countdown ---
  let cd = {
    lines: ['for i in range(3):', '    print(i)', 'print("Liftoff!")'],
    steps: [],
    view: 'console'
  };
  let outs = [];
  for (let trip = 0; trip < 3; trip++) {
    cd.steps.push({
      line: 0, i: trip, trip: trip, out: outs.slice(),
      note: (trip === 0)
        ? 'The loop begins. i gets its first value: 0.'
        : 'Back to the top! i becomes ' + trip + '.'
    });
    outs = outs.concat([String(trip)]);
    cd.steps.push({
      line: 1, i: trip, trip: trip, out: outs.slice(),
      note: 'The body runs: print(i) prints ' + trip + '.'
    });
  }
  outs = outs.concat(['Liftoff!']);
  cd.steps.push({
    line: 2, i: null, trip: 3, out: outs.slice(),
    note: 'range(3) is used up. The loop printed 0, 1, 2 — three trips, and it never printed 3!'
  });
  programs['Countdown'] = cd;

  // --- Running Total ---
  let ac = {
    lines: ['total = 0', 'for i in range(5):', '    total = total + i', 'print(total)'],
    steps: [],
    view: 'total'
  };
  ac.steps.push({
    line: 0, i: null, trip: -1, total: 0, out: [],
    note: 'Start the accumulator at zero. This box will collect the running total.'
  });
  let tot = 0;
  for (let trip = 0; trip < 5; trip++) {
    ac.steps.push({
      line: 1, i: trip, trip: trip, total: tot, out: [],
      note: (trip === 0) ? 'The loop begins: i is 0.' : 'Back to the top: i becomes ' + trip + '.'
    });
    tot += trip;
    ac.steps.push({
      line: 2, i: trip, trip: trip, total: tot, out: [],
      note: 'total + i is ' + (tot - trip) + ' + ' + trip + ' = ' + tot + '. The new total replaces the old one.'
    });
  }
  ac.steps.push({
    line: 3, i: null, trip: 5, total: tot, out: [String(tot)],
    note: 'The loop is done. 0+1+2+3+4 collected into total: ' + tot + '.'
  });
  programs['Running Total'] = ac;
}

let programNames = ['Draw Square', 'Countdown', 'Running Total'];
let currentProgram = 'Draw Square';
let step = -1;      // -1 = not started
let isPlaying = false; // auto-play state; default paused (required standard)

let nextButton, playButton, resetButton, programSelect;

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
    isPlaying = false;
    playButton.html('Auto-play');
    stepForward();
  });

  playButton = createButton('Auto-play');
  playButton.parent(mainElement);
  playButton.position(105, drawHeight + 10);
  playButton.mousePressed(() => {
    isPlaying = !isPlaying;
    playButton.html(isPlaying ? 'Pause' : 'Auto-play');
  });

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(200, drawHeight + 10);
  resetButton.mousePressed(() => {
    step = -1;
    isPlaying = false;
    playButton.html('Auto-play');
  });

  programSelect = createSelect();
  programSelect.parent(mainElement);
  programSelect.position(270, drawHeight + 10);
  for (let name of programNames) {
    programSelect.option(name);
  }
  programSelect.changed(() => {
    currentProgram = programSelect.value();
    step = -1;
    isPlaying = false;
    playButton.html('Auto-play');
  });

  describe('Step through a Python for loop one statement at a time. The loop variable badge updates, the arrow jumps back to the top on each trip, and a turtle draws one square side per trip.', LABEL);
}

function stepForward() {
  if (step < programs[currentProgram].steps.length - 1) {
    step += 1;
  } else {
    isPlaying = false;
    playButton.html('Auto-play');
  }
}

function draw() {
  updateCanvasSize();

  // advance automatically about once per second while playing
  if (isPlaying && frameCount % 55 === 0) {
    stepForward();
  }

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
  text('For-Loop Stepper', canvasWidth / 2, 8);

  let prog = programs[currentProgram];
  let s = (step >= 0) ? prog.steps[step] : null;

  drawCodePanel(prog, s);
  drawBadges(prog, s);
  if (prog.view === 'turtle') {
    drawTurtleView(s);
  } else {
    drawConsoleView(prog, s);
  }
  drawNotePanel(prog, s);
}

// left: the program with the execution arrow
function drawCodePanel(prog, s) {
  let panelX = 15;
  let panelY = 88;
  let panelW = canvasWidth * 0.46 - 25;
  let panelH = 168;

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
    fill('midnightblue');
    textAlign(LEFT, TOP);
    text(prog.lines[i], panelX + 32, y);
  }
}

// the i-badge and trip counter above the code panel
function drawBadges(prog, s) {
  let y = 48;
  let x = 15;

  // i badge
  fill('white');
  stroke(s && s.i !== null ? 'darkorange' : 180);
  strokeWeight(s && s.i !== null ? 3 : 1);
  rect(x, y, 92, 32, 8);
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(18);
  text('i = ' + (s && s.i !== null ? s.i : '—'), x + 46, y + 15);

  // trip counter
  let totalTrips = { 'Draw Square': 4, 'Countdown': 3, 'Running Total': 5 }[currentProgram];
  fill('white');
  stroke(180);
  strokeWeight(1);
  rect(x + 106, y, 130, 32, 8);
  noStroke();
  fill('black');
  textSize(16);
  let tripText;
  if (!s || s.trip < 0) {
    tripText = 'not started';
  } else if (s.trip >= totalTrips) {
    tripText = 'loop finished';
  } else {
    tripText = 'Trip ' + (s.trip + 1) + ' of ' + totalTrips;
  }
  text(tripText, x + 171, y + 15);
}

// right: mini turtle canvas drawing one side per trip
function drawTurtleView(s) {
  let areaX = canvasWidth * 0.46 + 5;
  let areaY = 48;
  let areaW = canvasWidth - areaX - 15;
  let areaH = 208;

  fill('white');
  stroke(200);
  strokeWeight(1);
  rect(areaX, areaY, areaW, areaH, 8);

  // replay the turtle moves: start left-center area, heading east
  // square is 100x100 turtle units, scale 1.2 for visibility
  let scale = 1.2;
  let sx = areaX + areaW / 2 - 50 * scale;
  let sy = areaY + areaH / 2 - 50 * scale;
  let x = sx, y = sy, heading = 0; // degrees, 0 = east, right turns go clockwise on screen

  let segs = [];
  if (s) {
    for (let m of s.turtle) {
      if (m === 'F') {
        let nx = x + cos(radians(heading)) * 100 * scale;
        let ny = y + sin(radians(heading)) * 100 * scale;
        segs.push([x, y, nx, ny]);
        x = nx; y = ny;
      } else {
        heading += 90;
      }
    }
  }

  for (let g of segs) {
    stroke('seagreen');
    strokeWeight(4);
    line(g[0], g[1], g[2], g[3]);
  }

  // the turtle
  push();
  translate(x, y);
  rotate(radians(heading));
  fill('seagreen');
  stroke('white');
  strokeWeight(1.5);
  triangle(12, 0, -7, -8, -7, 8);
  pop();

  noStroke();
  fill(120);
  textSize(13);
  textAlign(LEFT, TOP);
  text('turtle canvas — one side per trip', areaX + 10, areaY + 6);
}

// right: console (and total box for the accumulator preset)
function drawConsoleView(prog, s) {
  let areaX = canvasWidth * 0.46 + 5;
  let areaY = 48;
  let areaW = canvasWidth - areaX - 15;
  let areaH = 208;

  // for the accumulator preset, show the total box and growing bar first
  let consoleY = areaY;
  let consoleH = areaH;
  if (prog.view === 'total') {
    let boxH = 86;
    fill('white');
    stroke(200);
    rect(areaX, areaY, areaW, boxH, 8);
    noStroke();
    fill(120);
    textSize(13);
    textAlign(LEFT, TOP);
    text('accumulator', areaX + 10, areaY + 6);

    let tot = (s && s.total !== undefined) ? s.total : null;
    // total variable box
    stroke(s && s.line === 2 ? 'darkorange' : 160);
    strokeWeight(s && s.line === 2 ? 3 : 1);
    fill('lemonchiffon');
    rect(areaX + 12, areaY + 26, 96, 48, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(14);
    text('total', areaX + 60, areaY + 30);
    textSize(20);
    fill('midnightblue');
    text(tot === null ? '—' : tot, areaX + 60, areaY + 48);

    // growing bar, max value 10
    let barX = areaX + 126;
    let barW = areaW - 140;
    stroke(180);
    strokeWeight(1);
    fill(245);
    rect(barX, areaY + 40, barW, 22, 5);
    if (tot !== null && tot > 0) {
      noStroke();
      fill('steelblue');
      rect(barX, areaY + 40, barW * tot / 10, 22, 5);
    }
    noStroke();
    fill(120);
    textSize(12);
    textAlign(LEFT, TOP);
    text('0', barX, areaY + 66);
    textAlign(RIGHT, TOP);
    text('10', barX + barW, areaY + 66);

    consoleY = areaY + boxH + 10;
    consoleH = areaH - boxH - 10;
  }

  // console
  fill(40);
  stroke(200);
  strokeWeight(1);
  rect(areaX, consoleY, areaW, consoleH, 8);
  noStroke();
  fill(180);
  textSize(13);
  textAlign(LEFT, TOP);
  text('Output', areaX + 10, consoleY + 6);
  fill(120, 255, 120);
  textSize(defaultTextSize);
  let oy = consoleY + 28;
  let outs = s ? s.out : [];
  for (let line of outs) {
    text(line, areaX + 12, oy);
    oy += 24;
  }
  if (outs.length === 0) {
    fill(150);
    text('(nothing yet)', areaX + 12, oy);
  }
}

// bottom: the note panel
function drawNotePanel(prog, s) {
  let panelX = 15;
  let panelY = 268;
  let panelW = canvasWidth - 30;
  let panelH = 168;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  if (!s) {
    fill('black');
    text('A for loop repeats its indented body once for each value in range().', panelX + 15, panelY + 14, panelW - 30, 50);
    text('Predict: how many times will the body run, and what values will i take?', panelX + 15, panelY + 46, panelW - 30, 50);
    text('Click Next Step and watch the arrow — especially when it jumps BACK to the top.', panelX + 15, panelY + 92, panelW - 30, 50);
  } else {
    fill('darkorange');
    text('Step ' + (step + 1) + ' of ' + prog.steps.length + ':', panelX + 15, panelY + 14);
    fill('black');
    text(s.note, panelX + 15, panelY + 44, panelW - 30, panelH - 54);
    if (step === prog.steps.length - 1) {
      fill('green');
      text('Try the other programs in the dropdown. Was your prediction right?', panelX + 15, panelY + 116, panelW - 30, 44);
    }
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
