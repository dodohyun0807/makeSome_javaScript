const todo_button = document.querySelector('#todo_btn');
const input = document.querySelector('#input');
const list = document.querySelector('#todo_list');

todo_button.addEventListener('click', todo_clickButton);

function todo_clickButton() {
  const temp = document.createElement('li');
  temp.innerHTML = input.value;
  list.appendChild(temp);
}
