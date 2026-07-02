// Inheritance Explorer - vis-network
// CANVAS_HEIGHT: 505
// Students click a method call and watch the lookup climb the class
// tree hop by hop until a match highlights green. Overridden parent
// methods are called out as shadowed, and the super() preset shows the
// explicit extra hop up to the parent.
// Bloom level: Analyze (attribute, organize, differentiate).

document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  // ---------- DOM: title bar, network area, right panel ----------
  const title = document.createElement('div');
  title.textContent = 'Inheritance Explorer - Method Lookup';
  title.style.cssText = 'text-align:center;font-size:20px;font-weight:bold;padding:6px 0;height:28px;';
  main.appendChild(title);

  const row = document.createElement('div');
  row.style.cssText = 'display:flex;height:462px;';
  main.appendChild(row);

  const netDiv = document.createElement('div');
  netDiv.style.cssText = 'flex:1;border:1px solid silver;background:aliceblue;';
  row.appendChild(netDiv);

  const panel = document.createElement('div');
  panel.style.cssText = 'width:265px;padding:8px 10px;font-size:14px;overflow-y:hidden;';
  row.appendChild(panel);

  const panelTitle = document.createElement('div');
  panelTitle.innerHTML = '<b>Try a call on d (a Dog):</b>';
  panel.appendChild(panelTitle);

  const buttonBox = document.createElement('div');
  buttonBox.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin:8px 0;';
  panel.appendChild(buttonBox);

  const log = document.createElement('div');
  log.style.cssText = 'font-size:13px;line-height:1.45;color:#333;border-top:1px solid #ddd;padding-top:8px;';
  log.innerHTML = 'Python looks for a method on the object\'s own class FIRST, then climbs to the parent. Predict each hop before you click!';
  panel.appendChild(log);

  // ---------- the class tree ----------
  const COL = {
    idle: { background: 'white', border: '#888' },
    visit: { background: '#FFE082', border: '#E65100' },
    found: { background: '#DCF2DC', border: '#2E7D32' },
    inst: { background: '#E3F0FE', border: '#4682B4' }
  };

  function nodeObj(id, label, x, y, colors) {
    return {
      id: id, label: label, x: x, y: y, shape: 'box', fixed: true,
      font: { face: 'arial', size: 14, multi: 'html', align: 'left' },
      color: { background: colors.background, border: colors.border },
      borderWidth: 2, margin: 10
    };
  }

  const LABELS = {
    Animal: '<b>class Animal</b>\neat()\nspeak()',
    AnimalShadow: '<b>class Animal</b>\neat()\n<i>speak()  (shadowed)</i>',
    Dog: '<b>class Dog(Animal)</b>\nspeak()   # overrides\nfetch()',
    Cat: '<b>class Cat(Animal)</b>\nspeak()',
    d: '<b>d</b> = Dog()'
  };

  const nodes = new vis.DataSet([
    nodeObj('Animal', LABELS.Animal, 0, -150, COL.idle),
    nodeObj('Dog', LABELS.Dog, -130, 20, COL.idle),
    nodeObj('Cat', LABELS.Cat, 130, 20, COL.idle),
    nodeObj('d', LABELS.d, -130, 165, COL.inst)
  ]);

  const edges = new vis.DataSet([
    { id: 'e1', from: 'Dog', to: 'Animal', arrows: 'to', label: 'inherits', font: { size: 11, align: 'middle' }, color: { color: '#888' } },
    { id: 'e2', from: 'Cat', to: 'Animal', arrows: 'to', label: 'inherits', font: { size: 11, align: 'middle' }, color: { color: '#888' } },
    { id: 'e3', from: 'd', to: 'Dog', arrows: 'to', label: 'instance of', font: { size: 11, align: 'middle' }, color: { color: '#4682B4' }, dashes: true }
  ]);

  const network = new vis.Network(netDiv, { nodes: nodes, edges: edges }, {
    physics: false,
    interaction: {
      zoomView: false,
      dragView: false,
      dragNodes: false,
      navigationButtons: true
    }
  });

  // ---------- lookup animation ----------
  let timers = [];

  function resetColors() {
    timers.forEach(clearTimeout);
    timers = [];
    nodes.update([
      { id: 'Animal', label: LABELS.Animal, color: COL.idle },
      { id: 'Dog', label: LABELS.Dog, color: COL.idle },
      { id: 'Cat', label: LABELS.Cat, color: COL.idle },
      { id: 'd', color: COL.inst }
    ]);
  }

  // run a sequence of {node, colorKey, msg, shadowAnimal} hops, 900ms apart
  function runSequence(callLabel, hops) {
    resetColors();
    log.innerHTML = '<b>' + callLabel + '</b><br/>';
    hops.forEach((hop, i) => {
      timers.push(setTimeout(() => {
        if (hop.node) {
          nodes.update({ id: hop.node, color: COL[hop.colorKey] });
        }
        if (hop.shadowAnimal) {
          nodes.update({ id: 'Animal', label: LABELS.AnimalShadow });
        }
        log.innerHTML += (i + 1) + '. ' + hop.msg + '<br/>';
      }, 400 + i * 900));
    });
  }

  function makeCallButton(label, hops) {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = 'font-size:14px;padding:5px 8px;text-align:left;cursor:pointer;';
    b.addEventListener('click', () => runSequence(label, hops));
    buttonBox.appendChild(b);
  }

  makeCallButton('d.fetch()', [
    { node: 'd', colorKey: 'visit', msg: 'start at d — it is a Dog' },
    { node: 'Dog', colorKey: 'visit', msg: 'look in class Dog... fetch() is here!' },
    { node: 'Dog', colorKey: 'found', msg: 'FOUND in Dog. Run it. (Animal was never checked.)' }
  ]);

  makeCallButton('d.speak()', [
    { node: 'd', colorKey: 'visit', msg: 'start at d — it is a Dog' },
    { node: 'Dog', colorKey: 'visit', msg: 'look in class Dog... speak() is here!' },
    { node: 'Dog', colorKey: 'found', shadowAnimal: true,
      msg: 'FOUND in Dog. Animal also has speak(), but Dog\'s version SHADOWS it — the parent\'s copy never runs.' }
  ]);

  makeCallButton('d.eat()', [
    { node: 'd', colorKey: 'visit', msg: 'start at d — it is a Dog' },
    { node: 'Dog', colorKey: 'visit', msg: 'look in class Dog... no eat() here' },
    { node: 'Animal', colorKey: 'visit', msg: 'climb to the parent: class Animal...' },
    { node: 'Animal', colorKey: 'found', msg: 'FOUND in Animal. Dog INHERITS eat() without writing it.' }
  ]);

  makeCallButton('super().speak() inside Dog', [
    { node: 'Dog', colorKey: 'visit', msg: 'Dog.speak() is running...' },
    { node: 'Animal', colorKey: 'visit', msg: 'super() says: skip me, go straight to my PARENT' },
    { node: 'Animal', colorKey: 'found', msg: 'Animal.speak() runs too. super() lets a child ADD to the parent\'s behavior instead of replacing it.' }
  ]);

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.style.cssText = 'font-size:14px;padding:5px 8px;margin-top:2px;cursor:pointer;';
  resetBtn.addEventListener('click', () => {
    resetColors();
    log.innerHTML = 'Python looks for a method on the object\'s own class FIRST, then climbs to the parent. Predict each hop before you click!';
  });
  buttonBox.appendChild(resetBtn);
});
