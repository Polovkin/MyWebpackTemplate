const input = document.getElementById('name');
const form = document.getElementById('test');
const elem = document.createElement('msg');
elem.id = 'notify';
elem.style.display = 'none';
form.appendChild(elem);

input.addEventListener('invalid', function (event) {
  event.preventDefault();
  console.log(1)
  if (!event.target.validity.valid) {
    elem.textContent = 'Username should only contain lowercase letters e.g. john';
    elem.className = 'error';
    elem.style.display = 'block';

    input.className = 'invalid animated shake';
  }
});
input.addEventListener('input', function(event){
  if ( 'block' === elem.style.display ) {
    input.className = '';
    elem.style.display = 'none';
  }
});
