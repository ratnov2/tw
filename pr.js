let input1 = document.querySelector('.input1');
let text = document.querySelector('.text');
input1.addEventListener('blur', func);


function func() {
  window.div = document.createElement('div');
  let box = document.createElement('button');
  window.p = document.createElement('p');
  let x = document.createElement('button');

  x.addEventListener('click', func7);

  box.addEventListener('click', func6);
  div.classList.add('check');
  document.body.append(div);

  p.innerHTML = input1.value;
  p.style.margin = '0';
  p.style.fontSize = '19px';
  p.style.color = '#C99E10';
  p.style.width = '180px';
  p.style.position = 'relative';
  p.addEventListener('dblclick', func4);


  box.classList.add('divCheck')
  div.appendChild(box);

  div.appendChild(p);


  x.innerHTML = 'x';
  x.classList.add('divX');

  x.addEventListener('mouseover', func2);
  x.addEventListener('mouseout', func3);
  div.appendChild(x);
  // div.addEventListener('click', func2);
  input1.value = '';

}

text.addEventListener('click', () => {
  console.dir('r');
})
function func2() {
  this.style.color = '#fac515';
  this.style.backgroundColor = '#cc492f';
}
function func3() {
  this.style.color = '';
  this.style.backgroundColor = '';
}
function func4() {
  window.input2 = document.createElement('input');
  input2.value = this.innerHTML;
  input2.addEventListener('blur', func5);
  this.replaceWith(input2);
}

function func5() {
  let pot = document.createElement('p');
  pot.innerHTML = this.value;
  pot.addEventListener('dblclick', func4)
  pot.style.margin = '0';
  pot.style.fontSize = '19px';
  pot.style.color = '#C99E10';
  pot.style.width = '180px';
  pot.style.position = 'relative';
  this.replaceWith(pot);
}
function func6() {
  this.nextSibling.style.textDecoration = 'line-through';
  this.style.display = 'none';
}
function func7() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}