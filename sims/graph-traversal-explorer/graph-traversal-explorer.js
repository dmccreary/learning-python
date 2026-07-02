// Graph Traversal Explorer - vis-network
// CANVAS_HEIGHT: 535
// Students step BFS and DFS over the same 10-node graph, watching
// nodes light up in visit order while the live queue (BFS) or stack
// (DFS) that drives each algorithm is shown beside the graph. After
// BFS completes, the shortest path from A to the goal J highlights.
// Bloom level: Analyze (differentiate, organize, trace).

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // ---------- the graph ----------
  const POS = {
    A: [-300, 0], B: [-160, -120], C: [-160, 120], D: [-20, 0],
    E: [-20, 230], F: [120, -120], G: [120, 120], H: [250, 0],
    I: [250, -230], J: [380, -80]
  };
  const EDGES = [
    ['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'D'], ['C', 'E'],
    ['D', 'F'], ['D', 'G'], ['E', 'G'], ['F', 'H'], ['G', 'H'],
    ['F', 'I'], ['I', 'J'], ['H', 'J']
  ];
  const START = 'A', GOAL = 'J';

  function neighbors(u) {
    const out = [];
    for (const [a, b] of EDGES) {
      if (a === u) out.push(b);
      if (b === u) out.push(a);
    }
    return out.sort();
  }

  // ---------- DOM ----------
  const title = document.createElement('div');
  title.textContent = 'Graph Traversal Explorer - BFS vs DFS';
  title.style.cssText = 'text-align:center;font-size:20px;font-weight:bold;padding:6px 0;height:28px;';
  main.appendChild(title);

  const row = document.createElement('div');
  row.style.cssText = 'display:flex;height:492px;';
  main.appendChild(row);

  const netDiv = document.createElement('div');
  netDiv.style.cssText = 'flex:1;border:1px solid silver;background:aliceblue;';
  row.appendChild(netDiv);

  const panel = document.createElement('div');
  panel.style.cssText = 'width:265px;padding:8px 10px;font-size:14px;';
  row.appendChild(panel);

  const modeSelect = document.createElement('select');
  modeSelect.style.cssText = 'font-size:15px;width:100%;margin-bottom:6px;';
  for (const opt of ['BFS - breadth-first (uses a QUEUE)', 'DFS - depth-first (uses a STACK)']) {
    const o = document.createElement('option');
    o.textContent = opt;
    modeSelect.appendChild(o);
  }
  panel.appendChild(modeSelect);

  const btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex;gap:6px;margin-bottom:8px;';
  panel.appendChild(btnRow);
  const stepBtn = document.createElement('button');
  stepBtn.textContent = 'Step';
  stepBtn.style.cssText = 'flex:1;font-size:15px;padding:5px;cursor:pointer;';
  btnRow.appendChild(stepBtn);
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.style.cssText = 'flex:1;font-size:15px;padding:5px;cursor:pointer;';
  btnRow.appendChild(resetBtn);

  const frontierDiv = document.createElement('div');
  frontierDiv.style.cssText = 'border:1px solid #ddd;border-radius:6px;padding:8px;margin-bottom:8px;font-family:monospace;font-size:14px;min-height:52px;background:#FAFAFA;';
  panel.appendChild(frontierDiv);

  const logDiv = document.createElement('div');
  logDiv.style.cssText = 'font-size:13px;line-height:1.5;color:#333;border-top:1px solid #ddd;padding-top:8px;';
  panel.appendChild(logDiv);

  // ---------- vis-network setup ----------
  function baseNodes() {
    return Object.keys(POS).map(id => ({
      id: id,
      label: id + (id === START ? '\nstart' : (id === GOAL ? '\ngoal' : '')),
      x: POS[id][0], y: POS[id][1], fixed: true, shape: 'circle',
      font: { size: 15, face: 'arial' },
      color: { background: 'white', border: id === GOAL ? '#B8860B' : '#888' },
      borderWidth: id === GOAL ? 3 : 2
    }));
  }
  const nodes = new vis.DataSet(baseNodes());
  const edges = new vis.DataSet(EDGES.map((e, i) => ({
    id: 'e' + i, from: e[0], to: e[1], color: { color: '#999' }, width: 1.5
  })));

  new vis.Network(netDiv, { nodes: nodes, edges: edges }, {
    physics: false,
    interaction: { zoomView: false, dragView: false, dragNodes: false, navigationButtons: true }
  });

  // ---------- traversal traces ----------
  // each step: {current, order, frontier[], added[], note, done, path[]}
  let trace = [];
  let pos = -1;

  function buildTrace() {
    const isBFS = modeSelect.selectedIndex === 0;
    trace = [];
    const discovered = new Set([START]);
    const parent = {};
    let frontier = [START];
    let order = 0;
    while (frontier.length > 0) {
      const u = isBFS ? frontier.shift() : frontier.pop();
      order += 1;
      const added = [];
      const nbrs = isBFS ? neighbors(u) : neighbors(u).slice().reverse();
      for (const v of nbrs) {
        if (!discovered.has(v)) {
          discovered.add(v);
          parent[v] = u;
          frontier.push(v);
          added.push(v);
        }
      }
      trace.push({
        current: u, order: order, frontier: frontier.slice(), added: added,
        note: 'visit ' + u + (added.length ? ' — discovered ' + added.join(', ') : ' — nothing new here'),
        done: false, path: null
      });
    }
    // final step: BFS shortest-path payoff
    if (isBFS) {
      const path = [GOAL];
      let v = GOAL;
      while (v !== START && parent[v] !== undefined) {
        v = parent[v];
        path.unshift(v);
      }
      trace.push({
        current: null, order: order, frontier: [], added: [],
        note: 'BFS bonus: because BFS explores level by level, following the parents backward gives the SHORTEST path from ' + START + ' to ' + GOAL + ': ' + path.join(' → '),
        done: true, path: path
      });
    } else {
      trace.push({
        current: null, order: order, frontier: [], added: [],
        note: 'DFS done. It went DEEP before wide — compare this visit order with BFS on the same graph. DFS finds A path, but not always the shortest one.',
        done: true, path: null
      });
    }
  }

  // ---------- rendering ----------
  const visitNumbers = {}; // id -> visit order

  function resetView() {
    pos = -1;
    for (const k of Object.keys(visitNumbers)) delete visitNumbers[k];
    nodes.update(baseNodes());
    edges.update(EDGES.map((e, i) => ({ id: 'e' + i, color: { color: '#999' }, width: 1.5 })));
    buildTrace();
    renderPanel();
  }

  function renderPanel() {
    const isBFS = modeSelect.selectedIndex === 0;
    const s = pos >= 0 ? trace[pos] : null;
    const frontierName = isBFS ? 'queue (front → back)' : 'stack (bottom → TOP)';
    const items = s ? s.frontier : [START];
    frontierDiv.innerHTML = '<b>' + frontierName + '</b><br/>' +
      (items.length ? items.map(x => '<span style="border:1px solid #B0BEC5;border-radius:4px;padding:1px 7px;margin-right:3px;background:white;">' + x + '</span>').join('') : '<span style="color:#999">(empty)</span>');
    if (!s) {
      logDiv.innerHTML = 'BFS takes the OLDEST waiting node (queue); DFS takes the NEWEST (stack). Same graph, same start — predict how the visit orders will differ, then Step.';
    } else {
      logDiv.innerHTML = '<b>step ' + (pos + 1) + ' of ' + trace.length + ':</b> ' + s.note;
    }
  }

  function stepOnce() {
    if (pos >= trace.length - 1) return;
    pos += 1;
    const s = trace[pos];
    if (s.current) {
      visitNumbers[s.current] = s.order;
      // previous current back to visited green
      const updates = [];
      for (const id of Object.keys(POS)) {
        if (id === s.current) {
          updates.push({ id: id, label: id + '\n#' + s.order, color: { background: '#FFE082', border: '#E65100' }, borderWidth: 3 });
        } else if (visitNumbers[id]) {
          updates.push({ id: id, label: id + '\n#' + visitNumbers[id], color: { background: '#DCF2DC', border: '#2E7D32' }, borderWidth: 2 });
        }
      }
      nodes.update(updates);
    } else if (s.path) {
      // highlight the shortest path
      const updates = [];
      for (const id of Object.keys(POS)) {
        if (s.path.includes(id)) {
          updates.push({ id: id, color: { background: '#C8E6C9', border: '#1B5E20' }, borderWidth: 4 });
        }
      }
      nodes.update(updates);
      const edgeUpdates = [];
      EDGES.forEach((e, i) => {
        for (let k = 0; k < s.path.length - 1; k++) {
          if ((e[0] === s.path[k] && e[1] === s.path[k + 1]) || (e[1] === s.path[k] && e[0] === s.path[k + 1])) {
            edgeUpdates.push({ id: 'e' + i, color: { color: '#1B5E20' }, width: 5 });
          }
        }
      });
      edges.update(edgeUpdates);
    } else {
      // DFS final step: mark last current visited
      const updates = [];
      for (const id of Object.keys(POS)) {
        if (visitNumbers[id]) {
          updates.push({ id: id, label: id + '\n#' + visitNumbers[id], color: { background: '#DCF2DC', border: '#2E7D32' }, borderWidth: 2 });
        }
      }
      nodes.update(updates);
    }
    renderPanel();
  }

  stepBtn.addEventListener('click', stepOnce);
  resetBtn.addEventListener('click', resetView);
  modeSelect.addEventListener('change', resetView);

  resetView();
});
