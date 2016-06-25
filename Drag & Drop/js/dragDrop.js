var container;
var draged;
window.addEventListener('load', init);

function init () {
  var circles = document.getElementsByClassName('circle');
  container = document.querySelector('.container');
  container.addEventListener('dragover', dragSobreContainer, false);
  container.addEventListener('dragleave', dragSalioContainer, false);
  container.addEventListener('drop', manejarDrop, false);

  for (var i in circles) {
    var circle = circles[i];
    var x = random(0, 90);
    var y = random(0, 90);

    if (typeof(circle.style != 'undefined')) {
      circle.style.top += y + '%';
      circle.style.left += x + '%';
      circle.addEventListener('dragstart', dragIniciado, false);
      circle.addEventListener('dragend', dragFinalizado, false);
    }
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dragSobreContainer (ev) {
  ev.preventDefault();
  this.classList.add('over');
  return false;
}

function dragSalioContainer (ev) {
  this.classList.remove('over');
}

function manejarDrop (ev) {
  ev.preventDefault();
  var datos = ev.dataTransfer.getData('text');

  this.innerHTML += datos;
  draged.parentNode.removeChild(draged);
  this.classList.remove('over');
}

function dragIniciado (ev) {
  this.style.backgroundColor = 'blue';
  draged = this;

  var padre = document.createElement('p');
  var clon = this.cloneNode(true);

  padre.appendChild(clon);
  ev.dataTransfer.setData('text', padre.innerHTML);
}

function dragFinalizado (ev) {
  this.style.backgroundColor = 'red';
}
