// Control Flow Explorer MicroSim
// CANVAS_HEIGHT: 560
// Students move a score slider and watch exactly one path through an
// if/elif/else flowchart light up. Diamonds are numbered in the order
// Python checks them; diamonds after the first True verdict are labeled
// "never checked" - the key insight about elif chains.
// Bloom level: Understand/Analyze (predict, trace, differentiate) -
// slider input with live path highlighting.
// MicroSim template version 2026.03

// global variables for width and height
let containerWidth;
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 80; // row 1: preset select, row 2: score slider
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Each preset: code lines, a chain of checks, an else action (or null),
// and a result formatter. Checks run top-down; the first True wins.
let programs = {
  'Simple if': {
    code: ['if score >= 50:', '    print("You pass!")'],
    checks: [
      { cond: 'score >= 50', test: s => s >= 50, action: 'print("You pass!")', codeLine: 0, actionLine: 1 }
    ],
    elseAction: null,
    result: s => (s >= 50) ? 'Output: You pass!' : 'Output: (nothing — the body was skipped)'
  },
  'If / Else': {
    code: ['if score >= 50:', '    print("Pass")', 'else:', '    print("Try again")'],
    checks: [
      { cond: 'score >= 50', test: s => s >= 50, action: 'print("Pass")', codeLine: 0, actionLine: 1 }
    ],
    elseAction: { action: 'print("Try again")', codeLine: 2, actionLine: 3 },
    result: s => 'Output: ' + ((s >= 50) ? 'Pass' : 'Try again')
  },
  'Elif Chain': {
    code: ['if score >= 90:', '    grade = "A"', 'elif score >= 80:', '    grade = "B"',
           'elif score >= 70:', '    grade = "C"', 'else:', '    grade = "Try again"'],
    checks: [
      { cond: 'score >= 90', test: s => s >= 90, action: 'grade = "A"', codeLine: 0, actionLine: 1 },
      { cond: 'score >= 80', test: s => s >= 80, action: 'grade = "B"', codeLine: 2, actionLine: 3 },
      { cond: 'score >= 70', test: s => s >= 70, action: 'grade = "C"', codeLine: 4, actionLine: 5 }
    ],
    elseAction: { action: 'grade = "Try again"', codeLine: 6, actionLine: 7 },
    result: s => {
      if (s >= 90) return 'Result: grade = "A"';
      if (s >= 80) return 'Result: grade = "B"';
      if (s >= 70) return 'Result: grade = "C"';
      return 'Result: grade = "Try again"';
    }
  }
};

let programNames = ['Elif Chain', 'If / Else', 'Simple if'];
let currentProgram = 'Elif Chain';

let scoreSlider, programSelect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  programSelect = createSelect();
  programSelect.parent(mainElement);
  programSelect.position(10, drawHeight + 8);
  for (let name of programNames) {
    programSelect.option(name);
  }
  programSelect.changed(() => {
    currentProgram = programSelect.value();
  });

  scoreSlider = createSlider(0, 100, 85, 1);
  scoreSlider.parent(mainElement);
  scoreSlider.position(sliderLeftMargin, drawHeight + 45);
  scoreSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('Move a score slider and watch exactly one path through an if/elif/else flowchart light up. Conditions are checked top-down and numbered; conditions after the first True are marked never checked.', LABEL);
}

// figure out which check wins for the current score
// returns {winner: index or -1 (else), verdicts: [true/false/null per check]}
// null verdict = never checked
function evaluate(prog, score) {
  let verdicts = [];
  let winner = null;
  for (let i = 0; i < prog.checks.length; i++) {
    if (winner === null) {
      let v = prog.checks[i].test(score);
      verdicts.push(v);
      if (v) winner = i;
    } else {
      verdicts.push(null); // short-circuited: never checked
    }
  }
  if (winner === null) winner = -1; // else branch
  return { winner, verdicts };
}

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);

  let score = scoreSlider.value();
  let prog = programs[currentProgram];
  let evalResult = evaluate(prog, score);

  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Control Flow Explorer', canvasWidth / 2, 8);

  drawCodePanel(prog, evalResult);
  drawFlowchart(prog, evalResult, score);

  // result banner
  noStroke();
  fill('darkgreen');
  textAlign(CENTER, TOP);
  textSize(18);
  text(prog.result(score) + '   (score = ' + score + ')', canvasWidth / 2, drawHeight - 34);

  // control labels
  fill('black');
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Score: ' + score, 15, drawHeight + 55);
}

// left: the Python code with the executed lines highlighted
function drawCodePanel(prog, evalResult) {
  let panelX = 15;
  let panelY = 48;
  let panelW = Math.max(210, canvasWidth * 0.3);
  let panelH = 30 + prog.code.length * 28;

  fill('white');
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  fill(100);
  textAlign(LEFT, TOP);
  textSize(14);
  text('program.py', panelX + 10, panelY + 5);

  // which code lines actually ran?
  let ranLines = new Set();
  for (let i = 0; i < prog.checks.length; i++) {
    if (evalResult.verdicts[i] !== null) ranLines.add(prog.checks[i].codeLine);
    if (evalResult.winner === i) ranLines.add(prog.checks[i].actionLine);
  }
  if (evalResult.winner === -1 && prog.elseAction) {
    ranLines.add(prog.elseAction.codeLine);
    ranLines.add(prog.elseAction.actionLine);
  }

  textSize(15);
  for (let i = 0; i < prog.code.length; i++) {
    let y = panelY + 26 + i * 28;
    if (ranLines.has(i)) {
      noStroke();
      fill(220, 242, 220); // pale green = this line ran
      rect(panelX + 6, y - 3, panelW - 12, 25, 4);
    }
    noStroke();
    fill(ranLines.has(i) ? 'midnightblue' : color(150));
    textAlign(LEFT, TOP);
    text(prog.code[i], panelX + 12, y);
  }

  noStroke();
  fill(120);
  textSize(13);
  text('green = this line ran', panelX + 10, panelY + panelH + 6);
}

// right: the flowchart with the taken path glowing
function drawFlowchart(prog, evalResult, score) {
  let leftEdge = Math.max(210, canvasWidth * 0.3) + 40;
  let diaX = leftEdge + 110;       // diamond center x
  let diaW = 175, diaH = 62;
  let boxX = Math.min(diaX + 240, canvasWidth - 105); // action box center x
  let boxW = 175, boxH = 46;
  let topY = 95;
  let gapY = 96;

  let n = prog.checks.length;

  for (let i = 0; i < n; i++) {
    let cy = topY + i * gapY;
    let verdict = evalResult.verdicts[i];
    let isWinner = evalResult.winner === i;

    // vertical arrow from previous diamond (the False path)
    if (i > 0) {
      let taken = evalResult.verdicts[i - 1] === false;
      drawArrow(diaX, cy - gapY + diaH / 2, diaX, cy - diaH / 2, taken);
      if (evalResult.verdicts[i - 1] === false) {
        noStroke();
        fill('seagreen');
        textSize(13);
        textAlign(LEFT, CENTER);
        text('False', diaX + 8, cy - gapY / 2 - 3);
      }
    }

    // the diamond
    if (verdict === null) {
      stroke(190);
      strokeWeight(1);
      fill(242);
    } else {
      stroke(verdict ? 'seagreen' : 'indianred');
      strokeWeight(2.5);
      fill('white');
    }
    quad(diaX, cy - diaH / 2, diaX + diaW / 2, cy, diaX, cy + diaH / 2, diaX - diaW / 2, cy);
    noStroke();
    fill(verdict === null ? color(160) : 'black');
    textAlign(CENTER, CENTER);
    textSize(15);
    text(prog.checks[i].cond, diaX, cy - 6);
    // verdict or never-checked label inside the diamond
    textSize(13);
    if (verdict === null) {
      fill(160);
      text('never checked', diaX, cy + 14);
    } else {
      fill(verdict ? 'seagreen' : 'indianred');
      text(verdict ? 'True' : 'False', diaX, cy + 14);
    }
    // check-order badge to the left of the diamond
    noStroke();
    fill(verdict === null ? color(180) : 'darkorange');
    textSize(13);
    textAlign(RIGHT, CENTER);
    text('check ' + (i + 1), diaX - diaW / 2 - 8, cy);

    // True branch: arrow right to the action box
    drawArrow(diaX + diaW / 2, cy, boxX - boxW / 2, cy, isWinner);
    if (isWinner) {
      noStroke();
      fill('seagreen');
      textSize(13);
      textAlign(CENTER, BOTTOM);
      text('True', (diaX + diaW / 2 + boxX - boxW / 2) / 2, cy - 5);
    }
    // the action box
    stroke(isWinner ? 'seagreen' : 200);
    strokeWeight(isWinner ? 3 : 1);
    fill(isWinner ? color(220, 242, 220) : 'white');
    rect(boxX - boxW / 2, cy - boxH / 2, boxW, boxH, 8);
    noStroke();
    fill(isWinner ? 'black' : color(150));
    textAlign(CENTER, CENTER);
    textSize(14);
    text(prog.checks[i].action, boxX, cy);
  }

  // the else box (or "nothing happens" box) at the bottom of the chain
  let elseY = topY + n * gapY;
  let lastFalse = evalResult.verdicts[n - 1] === false;
  drawArrow(diaX, elseY - gapY + diaH / 2, diaX, elseY - boxH / 2, lastFalse && evalResult.winner === -1);
  if (lastFalse) {
    noStroke();
    fill('seagreen');
    textSize(13);
    textAlign(LEFT, CENTER);
    text('False', diaX + 8, elseY - gapY / 2 + 6);
  }
  let isElseWinner = evalResult.winner === -1;
  let elseText = prog.elseAction ? prog.elseAction.action : '(nothing happens — skipped)';
  stroke(isElseWinner ? 'seagreen' : 200);
  strokeWeight(isElseWinner ? 3 : 1);
  fill(isElseWinner ? color(220, 242, 220) : 'white');
  rect(diaX - boxW / 2 - 20, elseY - boxH / 2, boxW + 40, boxH, 8);
  noStroke();
  fill(isElseWinner ? 'black' : color(150));
  textAlign(CENTER, CENTER);
  textSize(14);
  text(elseText, diaX, elseY);
}

// arrow helper; taken paths are thick green, others thin gray
function drawArrow(x1, y1, x2, y2, taken) {
  stroke(taken ? 'seagreen' : 200);
  strokeWeight(taken ? 4 : 1.5);
  line(x1, y1, x2, y2);
  // arrowhead
  noStroke();
  fill(taken ? 'seagreen' : color(200));
  if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
    let dir = x2 > x1 ? 1 : -1;
    triangle(x2, y2 - 6, x2, y2 + 6, x2 + dir * 9, y2);
  } else {
    let dir = y2 > y1 ? 1 : -1;
    triangle(x2 - 6, y2, x2 + 6, y2, x2, y2 + dir * 9);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  scoreSlider.size(canvasWidth - sliderLeftMargin - margin);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
