var main = document.querySelector('.main');
var buttons = document.querySelectorAll('.btn');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler);
}

function clickHandler() {
  main.style.backgroundColor = 'pink';
}
