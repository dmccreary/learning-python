// Dice Roll Histogram - Chart.js
// CANVAS_HEIGHT: 480
// Students roll a die 1, 100, or 1000 times and watch the bar chart
// flatten toward a uniform distribution - then switch to the sum of
// two dice and discover the triangle centered on 7.
// Bloom level: Analyze (organize, compare, attribute) - experiment
// runner with student-triggered batches.

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // --- build the DOM: chart area, counter line, control row ---
  const chartDiv = document.createElement('div');
  chartDiv.style.height = '400px';
  chartDiv.style.width = '100%';
  chartDiv.style.position = 'relative';
  const canvas = document.createElement('canvas');
  chartDiv.appendChild(canvas);
  main.appendChild(chartDiv);

  const counterDiv = document.createElement('div');
  counterDiv.style.textAlign = 'center';
  counterDiv.style.fontSize = '16px';
  counterDiv.style.height = '26px';
  counterDiv.style.color = '#333';
  main.appendChild(counterDiv);

  const controls = document.createElement('div');
  controls.style.padding = '8px 10px';
  controls.style.display = 'flex';
  controls.style.gap = '8px';
  controls.style.flexWrap = 'nowrap';
  controls.style.alignItems = 'center';
  main.appendChild(controls);

  function makeButton(label, handler) {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.fontSize = '15px';
    b.style.padding = '4px 10px';
    b.addEventListener('click', handler);
    controls.appendChild(b);
    return b;
  }

  makeButton('Roll 1', () => roll(1));
  makeButton('Roll 100', () => roll(100));
  makeButton('Roll 1000', () => roll(1000));
  makeButton('Reset', resetCounts);

  const modeSelect = document.createElement('select');
  modeSelect.style.fontSize = '15px';
  for (const opt of ['One die (1–6)', 'Sum of two dice (2–12)']) {
    const o = document.createElement('option');
    o.textContent = opt;
    modeSelect.appendChild(o);
  }
  modeSelect.addEventListener('change', () => {
    twoDice = modeSelect.selectedIndex === 1;
    resetCounts();
  });
  controls.appendChild(modeSelect);

  // --- state ---
  let twoDice = false;
  let counts = [];
  let totalRolls = 0;

  function labelsForMode() {
    if (twoDice) {
      return Array.from({ length: 11 }, (_, i) => String(i + 2)); // 2..12
    }
    return Array.from({ length: 6 }, (_, i) => String(i + 1)); // 1..6
  }

  function resetCounts() {
    counts = new Array(twoDice ? 11 : 6).fill(0);
    totalRolls = 0;
    chart.data.labels = labelsForMode();
    chart.data.datasets[0].data = counts;
    chart.options.plugins.title.text = twoDice
      ? 'Sum of Two Dice - Roll Counts'
      : 'One Die - Roll Counts';
    chart.options.scales.x.title.text = twoDice ? 'sum of the two dice' : 'die face';
    chart.update();
    updateCounter();
  }

  function roll(n) {
    for (let i = 0; i < n; i++) {
      if (twoDice) {
        const sum = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6));
        counts[sum - 2] += 1;
      } else {
        const face = 1 + Math.floor(Math.random() * 6);
        counts[face - 1] += 1;
      }
    }
    totalRolls += n;
    chart.data.datasets[0].data = counts;
    chart.update();
    updateCounter();
  }

  function updateCounter() {
    if (totalRolls === 0) {
      counterDiv.textContent = 'No rolls yet - predict which bar will be tallest, then roll!';
    } else {
      counterDiv.textContent = 'total rolls: ' + totalRolls.toLocaleString();
    }
  }

  // --- the chart ---
  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelsForMode(),
      datasets: [{
        label: 'times rolled',
        data: [],
        backgroundColor: 'rgba(70, 130, 180, 0.75)',
        borderColor: 'rgb(70, 130, 180)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 250 },
      plugins: {
        title: {
          display: true,
          text: 'One Die - Roll Counts',
          font: { size: 20 }
        },
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              const count = context.parsed.y;
              const pct = totalRolls > 0 ? (100 * count / totalRolls).toFixed(1) : '0.0';
              return count.toLocaleString() + ' rolls  (' + pct + '% of all rolls)';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'number of times rolled' }
        },
        x: {
          title: { display: true, text: 'die face' }
        }
      }
    }
  });

  resetCounts();
});
