// JSON to Python Type Mapper - custom HTML two-pane editor
// CANVAS_HEIGHT: 440
// Students edit JSON on the left and watch the Python objects it
// becomes on the right, with every type pairing color-coded and
// hover tooltips naming both types. Broken-JSON presets give
// friendly parse-error explanations.
// Bloom level: Understand/Apply (interpret, convert, classify).

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // color per type pairing (JSON -> Python)
  const C = {
    dict: '#B03A8C',    // object -> dict
    list: '#B26A00',    // array -> list
    str: '#2E7D32',     // string -> str
    num: '#1A56B0',     // number -> int/float
    bool: '#7B1FA2',    // true/false -> True/False
    none: '#C62828'     // null -> None
  };

  // ---------- DOM ----------
  const title = document.createElement('div');
  title.textContent = 'JSON to Python Type Mapper';
  title.style.cssText = 'text-align:center;font-size:20px;font-weight:bold;padding:6px 0;height:28px;';
  main.appendChild(title);

  const presetRow = document.createElement('div');
  presetRow.style.cssText = 'display:flex;gap:6px;padding:0 10px 6px 10px;flex-wrap:nowrap;';
  main.appendChild(presetRow);

  const row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:10px;padding:0 10px;height:300px;';
  main.appendChild(row);

  // left pane: editable JSON
  const leftBox = document.createElement('div');
  leftBox.style.cssText = 'flex:1;display:flex;flex-direction:column;';
  row.appendChild(leftBox);
  const leftLabel = document.createElement('div');
  leftLabel.innerHTML = '<b>JSON text</b> (edit me!)';
  leftLabel.style.cssText = 'font-size:14px;height:22px;';
  leftBox.appendChild(leftLabel);
  const jsonArea = document.createElement('textarea');
  jsonArea.spellcheck = false;
  jsonArea.style.cssText = 'flex:1;font-family:monospace;font-size:14px;padding:8px;border:1px solid silver;border-radius:6px;resize:none;background:aliceblue;';
  leftBox.appendChild(jsonArea);

  // right pane: rendered Python
  const rightBox = document.createElement('div');
  rightBox.style.cssText = 'flex:1;display:flex;flex-direction:column;';
  row.appendChild(rightBox);
  const rightLabel = document.createElement('div');
  rightLabel.innerHTML = '<b>Python object</b> (json.loads result)';
  rightLabel.style.cssText = 'font-size:14px;height:22px;';
  rightBox.appendChild(rightLabel);
  const pyPane = document.createElement('pre');
  pyPane.style.cssText = 'flex:1;font-family:monospace;font-size:14px;padding:8px;border:1px solid silver;border-radius:6px;margin:0;overflow:auto;background:white;white-space:pre-wrap;';
  rightBox.appendChild(pyPane);

  // legend strip
  const legend = document.createElement('div');
  legend.style.cssText = 'padding:8px 12px;font-size:13px;line-height:1.7;';
  legend.innerHTML = '<b>type map:</b> ' +
    '<span style="color:' + C.dict + '">object {} → dict</span> &nbsp; ' +
    '<span style="color:' + C.list + '">array [] → list</span> &nbsp; ' +
    '<span style="color:' + C.str + '">"string" → str</span> &nbsp; ' +
    '<span style="color:' + C.num + '">number → int / float</span> &nbsp; ' +
    '<span style="color:' + C.bool + '"><b>true/false → True/False</b></span> &nbsp; ' +
    '<span style="color:' + C.none + '"><b>null → None</b></span>' +
    '<br/><span style="color:#666">Hover any colored piece on the right to see its JSON and Python type names.</span>';
  main.appendChild(legend);

  // ---------- presets ----------
  const presets = {
    'Starter': '{\n  "name": "Monty",\n  "age": 12,\n  "is_student": true,\n  "nickname": null,\n  "hobbies": ["chess", "turtle art"]\n}',
    'Nested data': '{\n  "player": {\n    "name": "Ada",\n    "scores": [95, 87.5, 92],\n    "levels_done": [true, true, false]\n  }\n}',
    'The tricky trio': '{\n  "awake": true,\n  "asleep": false,\n  "dream": null\n}',
    'Broken: single quotes': "{\n  'name': 'Monty'\n}",
    'Broken: trailing comma': '{\n  "name": "Monty",\n  "age": 12,\n}'
  };
  for (const name of Object.keys(presets)) {
    const b = document.createElement('button');
    b.textContent = name;
    b.style.cssText = 'font-size:13px;padding:3px 8px;cursor:pointer;';
    b.addEventListener('click', () => {
      jsonArea.value = presets[name];
      render();
    });
    presetRow.appendChild(b);
  }

  // ---------- rendering the Python literal ----------
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function span(text, color, tip, bold) {
    return '<span style="color:' + color + (bold ? ';font-weight:bold' : '') +
      '" title="' + esc(tip) + '">' + esc(text) + '</span>';
  }

  function toPython(value, indent) {
    const pad = '  '.repeat(indent);
    const padIn = '  '.repeat(indent + 1);
    if (value === null) {
      return span('None', C.none, 'JSON null -> Python None (NoneType)', true);
    }
    if (typeof value === 'boolean') {
      return span(value ? 'True' : 'False', C.bool,
        'JSON ' + value + ' -> Python ' + (value ? 'True' : 'False') + ' (bool) - note the CAPITAL letter!', true);
    }
    if (typeof value === 'number') {
      const kind = Number.isInteger(value) ? 'int' : 'float';
      return span(String(value), C.num, 'JSON number -> Python ' + kind);
    }
    if (typeof value === 'string') {
      return span("'" + value + "'", C.str, 'JSON string -> Python str (Python usually shows single quotes)');
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return span('[]', C.list, 'JSON array -> Python list');
      const items = value.map(v => padIn + toPython(v, indent + 1));
      return span('[', C.list, 'JSON array -> Python list') + '\n' +
        items.join(',\n') + '\n' + pad + span(']', C.list, 'JSON array -> Python list');
    }
    // object -> dict
    const keys = Object.keys(value);
    if (keys.length === 0) return span('{}', C.dict, 'JSON object -> Python dict');
    const items = keys.map(k =>
      padIn + span("'" + k + "'", C.str, 'JSON key (always a string) -> Python str key') +
      ': ' + toPython(value[k], indent + 1));
    return span('{', C.dict, 'JSON object -> Python dict') + '\n' +
      items.join(',\n') + '\n' + pad + span('}', C.dict, 'JSON object -> Python dict');
  }

  // friendly explanations for the two classic JSON mistakes
  function friendlyError(text, err) {
    if (/'[^']*'\s*:/.test(text) || /:\s*'[^']*'/.test(text)) {
      return 'JSON only allows DOUBLE quotes. Python accepts \'single\' or "double", but JSON is stricter - change the single quotes to double quotes.';
    }
    if (/,\s*[}\]]/.test(text)) {
      return 'There is a comma right before a closing } or ]. Python forgives trailing commas - JSON never does. Delete that last comma.';
    }
    return 'JSON could not be parsed: ' + err.message;
  }

  function render() {
    const text = jsonArea.value;
    try {
      const value = JSON.parse(text);
      pyPane.innerHTML = toPython(value, 0);
      pyPane.style.background = 'white';
    } catch (err) {
      pyPane.innerHTML = '<span style="color:#C62828"><b>json.decoder.JSONDecodeError</b></span>\n\n' +
        esc(friendlyError(text, err));
      pyPane.style.background = '#FFF5F5';
    }
  }

  jsonArea.addEventListener('input', render);
  jsonArea.value = presets['Starter'];
  render();
});
