(function() {
  var parameters = {
    square: ['lado'],
    rectangle: ['base', 'altura'],
    diamond: ['D', 'd'],
    parallelogram: ['base', 'altura'],
    trapezoid: ['lado superior', 'base', 'altura'],
    triangle: ['base', 'altura'],
    polygon: ['lado', 'número de lados', 'apotema'],
    circle: ['radio']
  }
  var functions = {
    square: l => l * l,
    rectangle: (b, h) => b * h,
    diamond: (d1, d2) => d1 * d2 / 2,
    parallelogram: (b, h) => b * h,
    trapezoid: (s, b, h) => ((s+b)*h)/2,
    triangle: (b, h) => b * h / 2,
    polygon: (l, n, a) => l * n * a / 2,
    circle: r => Math.PI * Math.pow(r, 2)
  }
  document.getElementById('js-main-container').addEventListener('click', function(e) {
    var el = e.target, figure = '';
    while (el) {
      if (el.id === "js-main-container") {
        return;
      }
      if(el.attributes.rel) {
        figure = el.attributes.rel.value;
        el = null;
      } else {
        el = el.parentNode;
      }
    }
    if(figure !== '') {
      currentParams = [];
      parameters[figure].forEach(function(p) {
        currentParams.push(prompt('Introduzca un valor para ' + p));
      });
      alert('El área de la figura es ' + functions[figure](...currentParams));
    }
  });
}());
