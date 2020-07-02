const input = document.getElementById('name');
const form = document.getElementById('test');
const elem = document.createElement('div');
elem.id = 'notify';
elem.style.display = 'none';
form.appendChild(elem);


input.addEventListener('invalid', function (event) {
  event.preventDefault();
  if (!event.target.validity.valid) {
    elem.textContent = 'Username should only contain lowercase letters e.g. john';
    elem.className = 'error';
    elem.style.display = 'block';

    input.className = 'invalid animated shake';
  }
});


  window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }

    function mask(event) {
      let matrix = "+38(___)-___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
      } else setCursorPosition(this.value.length, this)
    };
    let input = document.querySelector("#form1__phone");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
  });


// import Inputmask from 'inputmask';
// import Validate from 'jquery-validation';
// inputmask
//
// let phoneInput = document.getElementById('main-form__phone');
// let phoneInput2 = document.getElementById('pop-up__form__phone');
//
// let im = new Inputmask('(999)-999-99-99');
//
// im.mask(phoneInput);
// im.mask(phoneInput2);
//
//
//
// $('#main-form').validate({
//   rules: {
//     name: {
//       required: true,
//       minlength: 3
//     },
//     phone: {
//       required: true,
//     },
//   },
//   messages: {
//     name: {
//       required: "Введите имя",
//       minlength: ("Имя должно быть не короче {0} букв"),
//     },
//     phone: {
//       required: "Введите номер телефона",
//     },
//   }
// });
