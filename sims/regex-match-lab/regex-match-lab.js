// Regex Match Lab - custom HTML live pattern editor
// CANVAS_HEIGHT: 370
// Students type a pattern, watch every match highlight live in the
// sample text, and read the pattern as plain-English chips like
// "a digit, three times, then a dash". A findall result line mirrors
// what re.findall would return.
// Bloom level: Apply/Analyze (use, test, deconstruct).

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // ---------- DOM ----------
  const title = document.createElement('div');
  title.textContent = 'Regex Match Lab';
  title.style.cssText = 'text-align:center;font-size:20px;font-weight:bold;padding:6px 0;height:28px;';
  main.appendChild(title);

  const patRow = document.createElement('div');
  patRow.style.cssText = 'display:flex;gap:8px;align-items:center;padding:0 12px 6px 12px;';
  main.appendChild(patRow);

  const patLabel = document.createElement('span');
  patLabel.innerHTML = '<b>pattern:</b>&nbsp; r"';
  patLabel.style.fontSize = '15px';
  patRow.appendChild(patLabel);

  const patInput = document.createElement('input');
  patInput.value = '\\d{3}-\\d{4}';
  patInput.spellcheck = false;
  patInput.style.cssText = 'flex:1;font-family:monospace;font-size:16px;padding:4px 8px;border:1px solid silver;border-radius:5px;';
  patRow.appendChild(patInput);

  const patClose = document.createElement('span');
  patClose.textContent = '"';
  patClose.style.fontSize = '15px';
  patRow.appendChild(patClose);

  // preset pattern buttons
  const presetRow = document.createElement('div');
  presetRow.style.cssText = 'display:flex;gap:6px;padding:0 12px 8px 12px;align-items:center;flex-wrap:nowrap;';
  main.appendChild(presetRow);
  const presetLabel = document.createElement('span');
  presetLabel.textContent = 'try:';
  presetLabel.style.cssText = 'font-size:13px;color:#666;';
  presetRow.appendChild(presetLabel);

  const presets = [
    { label: 'phone numbers', pat: '\\d{3}-\\d{4}' },
    { label: 'every number', pat: '\\d+' },
    { label: 'Capitalized words', pat: '[A-Z]\\w+' },
    { label: 'cat or dog', pat: 'cat|dog' },
    { label: 'words ending in ing', pat: '\\w+ing' }
  ];
  for (const p of presets) {
    const b = document.createElement('button');
    b.textContent = p.label;
    b.style.cssText = 'font-size:13px;padding:3px 8px;cursor:pointer;';
    b.addEventListener('click', () => { patInput.value = p.pat; render(); });
    presetRow.appendChild(b);
  }

  // plain-English chips strip
  const chipStrip = document.createElement('div');
  chipStrip.style.cssText = 'padding:0 12px 8px 12px;font-size:13px;line-height:2;min-height:34px;';
  main.appendChild(chipStrip);

  // the sample text with highlights
  const textPanel = document.createElement('div');
  textPanel.style.cssText = 'margin:0 12px;padding:10px;border:1px solid silver;border-radius:6px;background:aliceblue;font-family:monospace;font-size:15px;line-height:1.8;height:130px;overflow-y:auto;white-space:pre-wrap;';
  main.appendChild(textPanel);

  // findall result line
  const resultLine = document.createElement('div');
  resultLine.style.cssText = 'padding:8px 12px 2px 12px;font-family:monospace;font-size:14px;color:#1A56B0;';
  main.appendChild(resultLine);

  const hintLine = document.createElement('div');
  hintLine.style.cssText = 'padding:0 12px;font-size:13px;color:#666;';
  hintLine.textContent = 'Edit the pattern one character at a time and watch which matches survive.';
  main.appendChild(hintLine);

  const sampleText = 'Call Ada at 555-0101 or Grace at 555-0202 before 9 tonight.\n' +
    'My cat is sleeping, the dog is barking, and 3 birds are singing.\n' +
    'Wow — coding, drawing, and debugging are all verbs ending in ing!';

  // ---------- plain-English chip tokenizer (chapter-scope regex only) ----------
  const TOKEN_WORDS = {
    '\\d': 'a digit 0-9', '\\w': 'a letter, digit, or _', '\\s': 'a space',
    '.': 'any one character', '^': 'start of line', '$': 'end of line',
    '|': 'OR', '*': 'zero or more times', '+': 'one or more times', '?': 'maybe (0 or 1)'
  };

  function tokenize(pat) {
    const chips = [];
    let i = 0;
    while (i < pat.length) {
      let ch = pat[i];
      if (ch === '\\' && i + 1 < pat.length) {
        const tok = pat.slice(i, i + 2);
        chips.push([tok, TOKEN_WORDS[tok] || 'the character "' + pat[i + 1] + '"']);
        i += 2;
      } else if (ch === '[') {
        const end = pat.indexOf(']', i);
        const tok = end === -1 ? pat.slice(i) : pat.slice(i, end + 1);
        chips.push([tok, 'one character from this set']);
        i += tok.length;
      } else if (ch === '{') {
        const end = pat.indexOf('}', i);
        const tok = end === -1 ? pat.slice(i) : pat.slice(i, end + 1);
        const nums = tok.slice(1, -1);
        chips.push([tok, nums.includes(',') ? nums.replace(',', ' to ') + ' times' : nums + ' times']);
        i += tok.length;
      } else if (TOKEN_WORDS[ch]) {
        chips.push([ch, TOKEN_WORDS[ch]]);
        i += 1;
      } else {
        chips.push([ch, 'the character "' + ch + '"']);
        i += 1;
      }
    }
    return chips;
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ---------- live rendering ----------
  function render() {
    const pat = patInput.value;

    // chips
    if (pat.length === 0) {
      chipStrip.innerHTML = '<span style="color:#999">(empty pattern)</span>';
    } else {
      chipStrip.innerHTML = '<b>read it as:</b> ' + tokenize(pat).map(c =>
        '<span style="background:#FFF3D6;border:1px solid #E0C070;border-radius:10px;padding:2px 8px;margin-right:4px;white-space:nowrap;">' +
        '<code>' + esc(c[0]) + '</code> <span style="color:#555">' + esc(c[1]) + '</span></span>'
      ).join(' ');
    }

    // matches
    let regex;
    try {
      regex = new RegExp(pat, 'g');
    } catch (err) {
      textPanel.innerHTML = esc(sampleText);
      resultLine.innerHTML = '<span style="color:#C62828">re.error: that pattern is not finished yet — ' +
        esc(err.message.replace(/^Invalid regular expression: /, '')) + '</span>';
      return;
    }
    if (pat.length === 0) {
      textPanel.innerHTML = esc(sampleText);
      resultLine.textContent = 're.findall(r"", text)  →  type a pattern above';
      return;
    }

    const matches = [];
    let html = '';
    let last = 0;
    let m;
    let guard = 0;
    while ((m = regex.exec(sampleText)) !== null && guard < 500) {
      guard += 1;
      if (m[0] === '') { regex.lastIndex += 1; continue; } // avoid empty-match loops
      matches.push(m[0]);
      html += esc(sampleText.slice(last, m.index));
      html += '<mark style="background:#FFD54F;border-radius:3px;padding:0 1px;">' + esc(m[0]) + '</mark>';
      last = m.index + m[0].length;
    }
    html += esc(sampleText.slice(last));
    textPanel.innerHTML = html;

    const shown = matches.slice(0, 8).map(s => "'" + s + "'").join(', ') +
      (matches.length > 8 ? ', ...' : '');
    resultLine.textContent = matches.length === 0
      ? 're.findall(...) found 0 matches — []'
      : 're.findall(...) found ' + matches.length + ' match' + (matches.length === 1 ? '' : 'es') + ': [' + shown + ']';
  }

  patInput.addEventListener('input', render);
  render();
});
