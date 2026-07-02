// Sine Wave Explorer - Plotly.js
// CANVAS_HEIGHT: 490
// Students drag amplitude, frequency, and phase sliders and watch
// y = A*sin(f*x + p) re-plot instantly, with a live substituted
// equation and an optional plain sin(x) reference curve.
// Bloom level: Apply (demonstrate, use, solve) - parameter sliders
// with immediate feedback.

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // --- plot area ---
  const plotDiv = document.createElement('div');
  plotDiv.style.height = '360px';
  plotDiv.style.width = '100%';
  main.appendChild(plotDiv);

  // --- live equation line ---
  const eqDiv = document.createElement('div');
  eqDiv.style.textAlign = 'center';
  eqDiv.style.fontSize = '18px';
  eqDiv.style.height = '24px';
  eqDiv.style.color = 'midnightblue';
  main.appendChild(eqDiv);

  // --- controls ---
  const controls = document.createElement('div');
  controls.style.padding = '6px 14px 4px 14px';
  main.appendChild(controls);

  function makeSlider(label, min, max, step, value) {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '4px';
    const lab = document.createElement('span');
    lab.style.fontSize = '15px';
    lab.style.width = '150px';
    lab.style.display = 'inline-block';
    row.appendChild(lab);
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = value;
    slider.style.flex = '1';
    row.appendChild(slider);
    controls.appendChild(row);
    return { slider, lab, label };
  }

  const amp = makeSlider('Amplitude (A)', 0.5, 3, 0.1, 1);
  const freq = makeSlider('Frequency (f)', 0.5, 4, 0.1, 1);
  const phase = makeSlider('Phase (p)', 0, 6.28, 0.05, 0);

  // reference-curve checkbox
  const checkRow = document.createElement('div');
  checkRow.style.fontSize = '15px';
  checkRow.style.marginTop = '2px';
  const ghostCheck = document.createElement('input');
  ghostCheck.type = 'checkbox';
  ghostCheck.id = 'ghost';
  const ghostLabel = document.createElement('label');
  ghostLabel.htmlFor = 'ghost';
  ghostLabel.textContent = ' show plain sin(x) for comparison';
  checkRow.appendChild(ghostCheck);
  checkRow.appendChild(ghostLabel);
  controls.appendChild(checkRow);

  // --- the curves ---
  const N = 500;
  const xs = [];
  for (let i = 0; i <= N; i++) {
    xs.push(4 * Math.PI * i / N);
  }

  function waveYs(A, f, p) {
    return xs.map(x => A * Math.sin(f * x + p));
  }

  const mainTrace = {
    x: xs,
    y: waveYs(1, 1, 0),
    mode: 'lines',
    name: 'your wave',
    line: { color: 'steelblue', width: 3 },
    hovertemplate: 'x = %{x:.2f}<br>y = %{y:.2f}<extra></extra>'
  };

  const ghostTrace = {
    x: xs,
    y: waveYs(1, 1, 0),
    mode: 'lines',
    name: 'plain sin(x)',
    line: { color: 'silver', width: 2, dash: 'dot' },
    visible: false,
    hoverinfo: 'skip'
  };

  const layout = {
    title: { text: 'Sine Wave Explorer', font: { size: 20 } },
    margin: { l: 50, r: 20, t: 40, b: 40 },
    xaxis: {
      title: { text: 'x (radians)' },
      range: [0, 4 * Math.PI],
      tickvals: [0, Math.PI, 2 * Math.PI, 3 * Math.PI, 4 * Math.PI],
      ticktext: ['0', 'π', '2π', '3π', '4π']
    },
    yaxis: { title: { text: 'y' }, range: [-3.3, 3.3] },
    showlegend: true,
    legend: { x: 1, xanchor: 'right', y: 1 },
    paper_bgcolor: 'aliceblue',
    plot_bgcolor: 'white'
  };

  Plotly.newPlot(plotDiv, [ghostTrace, mainTrace], layout,
    { responsive: true, displayModeBar: false });

  function update() {
    const A = parseFloat(amp.slider.value);
    const f = parseFloat(freq.slider.value);
    const p = parseFloat(phase.slider.value);

    amp.lab.textContent = 'Amplitude (A): ' + A.toFixed(1);
    freq.lab.textContent = 'Frequency (f): ' + f.toFixed(1);
    phase.lab.textContent = 'Phase (p): ' + p.toFixed(2);

    const pTxt = p > 0 ? ' + ' + p.toFixed(2) : '';
    eqDiv.textContent = 'y = ' + A.toFixed(1) + ' × sin(' + f.toFixed(1) + 'x' + pTxt + ')';

    Plotly.restyle(plotDiv, {
      y: [waveYs(1, 1, 0), waveYs(A, f, p)]
    }, [0, 1]);
    Plotly.restyle(plotDiv, { visible: ghostCheck.checked }, [0]);
  }

  amp.slider.addEventListener('input', update);
  freq.slider.addEventListener('input', update);
  phase.slider.addEventListener('input', update);
  ghostCheck.addEventListener('change', update);

  update();
});
