import Inputmask from 'inputmask';
import Validate from 'jquery-validation';


let phoneInput = document.getElementById('main-form__phone');
let phoneInput2 = document.getElementById('pop-up__form__phone');

let im = new Inputmask('(999)-999-99-99');

im.mask(phoneInput);
im.mask(phoneInput2);



$('#main-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 3
    },
    phone: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Введите имя",
      minlength: ("Имя должно быть не короче {0} букв"),
    },
    phone: {
      required: "Введите номер телефона",
    },
  }
});
