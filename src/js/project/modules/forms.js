(function () {
    function inputValidations(input) {

    }

    const forms = document.querySelectorAll('form')

    if (forms.length) {
        function inputValidation(input) {

            switch (input.type) {
                case 'name': {

                }
            }
        }

        for (let i = 0; i < forms.length; i++) {
            let label = forms[i].querySelectorAll('label')
            for (let i = 0; i < label.length; i++) {
                const errorMsg = label[i].querySelector('.error')
                const input = label[i].querySelector('input')
                if (input) {
                    if (input.type === 'name' || input.type === 'password' || input.type === 'email')
                        input.addEventListener('invalid', function (event) {
                            event.preventDefault();
                            if (!event.target.validity.valid) {
                                errorMsg.style.opacity = '1';
                                setTimeout(function () {
                                    errorMsg.style.opacity = '0';
                                }, 3000)
                            } else {
                                errorMsg.style.opacity = '0';
                            }
                        })
                }
            }

        }
    }
}());

// const send = '/form/send.php';
//
// function sendFormDataXMLHttp(form) {
//   let request = new XMLHttpRequest();
//   request.open('POST', '/form/send.php', true)
//   request.setRequestHeader('accept', 'application/json');
//
//   form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let formData = new FormData(form);
//     request.send(formData);
//
//     request.onreadystatechange = function () {
//       if (request.readyState < 4)
//         console.log('Ответ от сервера полностью загружен')
//       else if (request.readyState === 4) {
//         if (request.status === 200 && request.status < 300) {
//           console.log('200 - 299 = успешная отправка данных!')
//           window.location.href = `http://misha.amemory.pro/`;
//         } else {
//           console.log('что-то пошло не так')
//         }
//       }
//     }
//   });
//
// }
//
// //MASK
// function setCursorPosition(pos, elem) {
//   elem.focus();
//   if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//   else if (elem.createTextRange) {
//     let range = elem.createTextRange();
//     range.collapse(true);
//     range.moveEnd("character", pos);
//     range.moveStart("character", pos);
//     range.select()
//   }
// }
//
// function mask(event) {
//   let matrix = "+38(___)-___-____",
//       i = 0,
//       def = matrix.replace(/\D/g, ""),
//       val = this.value.replace(/\D/g, "");
//   if (def.length >= val.length) val = def;
//   this.value = matrix.replace(/./g, function (a) {
//     return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//   });
//   if (event.type === "blur") {
//     if (this.value.length === 2) this.value = ""
//   } else setCursorPosition(this.value.length, this)
// }


//
// axios({
//   method: 'post',
//   url: '/form/send.php',
//   data: formData,
//   config: {headers: {'Content-Type': 'multipart/form-data'}}
// })
//   .then(function (response) {
//     //handle success
//     //window.location.href = `http://misha.amemory.pro/`;
//   })
//   .catch(function (response) {
//     //handle error
//     // console.log(response);
//   });
