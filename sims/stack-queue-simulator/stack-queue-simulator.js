// Stack and Queue Simulator MicroSim
// CANVAS_HEIGHT: 510
// The same items feed a stack of plates (vertical, LIFO) and a waiting
// line (horizontal, FIFO). Students remove from each and compare the
// removal orders side by side, with the list-method equivalent shown
// for every operation.
// Bloom level: Understand/Apply (compare, demonstrate, predict).
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

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let plateColors = ['indianred', 'goldenrod', 'teal', 'plum', 'coral', 'steelblue', 'limegreen', 'hotpink'];
let nextLetter = 0;

let stackItems = [];   // top = last element
let queueItems = [];   // front = first element
let stackHistory = []; // letters that left the stack, in order
let queueHistory = [];
let lastOp = 'Click "Add Item" to feed BOTH structures the same item.';

let addButton, popStackButton, popQueueButton, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  var mainElement = document.querySelector('main');
  canvas.parent(mainElement);

  textSize(defaultTextSize);

  addButton = createButton('Add Item');
  addButton.parent(mainElement);
  addButton.position(10, drawHeight + 10);
  addButton.mousePressed(addItem);

  popStackButton = createButton('Remove from Stack');
  popStackButton.parent(mainElement);
  popStackButton.position(100, drawHeight + 10);
  popStackButton.mousePressed(popStack);

  popQueueButton = createButton('Remove from Queue');
  popQueueButton.parent(mainElement);
  popQueueButton.position(255, drawHeight + 10);
  popQueueButton.mousePressed(popQueue);

  resetButton = createButton('Reset');
  resetButton.parent(mainElement);
  resetButton.position(420, drawHeight + 10);
  resetButton.mousePressed(resetAll);

  describe('The same items feed a vertical stack and a horizontal queue. Remove buttons show stack.pop() taking the newest item while queue.pop(0) takes the oldest, with removal histories compared side by side.', LABEL);
}

function resetAll() {
  stackItems = [];
  queueItems = [];
  stackHistory = [];
  queueHistory = [];
  nextLetter = 0;
  lastOp = 'Click "Add Item" to feed BOTH structures the same item.';
}

function addItem() {
  if (stackItems.length >= 6 || nextLetter >= letters.length) {
    lastOp = 'Both structures are full — remove some items first.';
    return;
  }
  let item = { letter: letters[nextLetter], col: plateColors[nextLetter] };
  nextLetter += 1;
  stackItems.push(item);
  queueItems.push(item);
  lastOp = 'stack.append("' + item.letter + '")   and   queue.append("' + item.letter + '")  —  same item joins both.';
}

function popStack() {
  if (stackItems.length === 0) {
    lastOp = 'The stack is empty.';
    return;
  }
  let item = stackItems.pop();
  stackHistory.push(item.letter);
  lastOp = 'stack.pop()  →  "' + item.letter + '"  —  the NEWEST plate (top) leaves first. LIFO!';
}

function popQueue() {
  if (queueItems.length === 0) {
    lastOp = 'The queue is empty.';
    return;
  }
  let item = queueItems.shift();
  queueHistory.push(item.letter);
  lastOp = 'queue.pop(0)  →  "' + item.letter + '"  —  the OLDEST item (front) leaves first. FIFO!';
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
  text('Stack vs Queue', canvasWidth / 2, 8);

  drawStack();
  drawQueue();
  drawHistories();
  drawNotePanel();
}

// left: the stack of plates (bottom-up; top plate leaves first)
function drawStack() {
  let cx = canvasWidth * 0.25;
  let baseY = 300;
  let plateW = Math.min(150, canvasWidth * 0.3);
  let plateH = 30;

  noStroke();
  fill(100);
  textAlign(CENTER, TOP);
  textSize(15);
  text('STACK — plates (LIFO)', cx, 42);
  textSize(13);
  fill(130);
  text('last in, first out', cx, 62);

  // base line
  stroke(150);
  strokeWeight(2);
  line(cx - plateW / 2 - 15, baseY + 4, cx + plateW / 2 + 15, baseY + 4);

  for (let i = 0; i < stackItems.length; i++) {
    let y = baseY - (i + 1) * (plateH + 4);
    stroke(120);
    strokeWeight(1);
    fill(stackItems[i].col);
    rect(cx - plateW / 2, y, plateW, plateH, 12);
    noStroke();
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(16);
    text(stackItems[i].letter, cx, y + plateH / 2);
  }

  // "top" marker
  if (stackItems.length > 0) {
    let topY = baseY - stackItems.length * (plateH + 4);
    noStroke();
    fill('darkorange');
    textSize(13);
    textAlign(LEFT, CENTER);
    text('← top: leaves first', cx + plateW / 2 + 8, topY + plateH / 2);
  } else {
    noStroke();
    fill(160);
    textAlign(CENTER, CENTER);
    textSize(14);
    text('(empty)', cx, baseY - 24);
  }
}

// right: the waiting line (front-left; front leaves first)
function drawQueue() {
  let areaX = canvasWidth * 0.47;
  let areaW = canvasWidth - areaX - 20;
  let y = 190;
  let boxW = Math.min(58, areaW / 6.5);
  let boxH = 46;
  let cx = areaX + areaW / 2;

  noStroke();
  fill(100);
  textAlign(CENTER, TOP);
  textSize(15);
  text('QUEUE — waiting line (FIFO)', cx, 42);
  textSize(13);
  fill(130);
  text('first in, first out', cx, 62);

  for (let i = 0; i < queueItems.length; i++) {
    let x = areaX + i * (boxW + 6);
    stroke(120);
    strokeWeight(1);
    fill(queueItems[i].col);
    rect(x, y, boxW, boxH, 8);
    noStroke();
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(16);
    text(queueItems[i].letter, x + boxW / 2, y + boxH / 2);
  }

  noStroke();
  textSize(13);
  if (queueItems.length > 0) {
    fill('darkorange');
    textAlign(CENTER, TOP);
    text('front: leaves first', areaX + boxW / 2, y + boxH + 8);
    fill(130);
    text('back: joins here', areaX + (queueItems.length - 1) * (boxW + 6) + boxW / 2, y - 22);
  } else {
    fill(160);
    textAlign(CENTER, CENTER);
    text('(empty)', cx, y + boxH / 2);
  }
}

// removal history strips
function drawHistories() {
  let y = 330;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);

  fill(100);
  text('left the stack:', 20, y);
  fill('midnightblue');
  text(stackHistory.length ? stackHistory.join(', ') : '(nobody yet)', 130, y);

  fill(100);
  text('left the queue:', canvasWidth * 0.47, y);
  fill('midnightblue');
  text(queueHistory.length ? queueHistory.join(', ') : '(nobody yet)',
    canvasWidth * 0.47 + 112, y);
}

// note panel with the last operation and a prediction prompt
function drawNotePanel() {
  let panelX = 15;
  let panelY = 356;
  let panelW = canvasWidth - 30;
  let panelH = 92;

  fill(255, 255, 255, 230);
  stroke(200);
  rect(panelX, panelY, panelW, panelH, 10);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
  fill('black');
  text(lastOp, panelX + 14, panelY + 10, panelW - 28, 48);

  fill(120);
  textSize(13);
  let hint;
  if (stackItems.length > 0 || queueItems.length > 0) {
    hint = 'Predict BEFORE you click Remove: which letter will leave each structure?';
  } else {
    hint = 'Add three or four items, then remove from both sides and compare the histories.';
  }
  text(hint, panelX + 14, panelY + 64, panelW - 28, 24);
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
