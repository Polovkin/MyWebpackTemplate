function formValidation(formsArr) {
  let inputs = [];
  for (let i = 0; i < formsArr.length; i++) {
    inputs.push(formsArr[i])
    //console.log(inputs);
  }

}

(function () {


  const forms = document.querySelectorAll('form')

  for (let i = 0; i < forms.length; i++) {
    let label = forms[i].querySelectorAll('label')
    for (let i = 0; i < label.length; i++) {
      const errorMsg = label[i].querySelector('.error')
      const input = label[i].querySelector('input')
      if (input) {
        input.addEventListener('invalid',function (event) {
          event.preventDefault();
          if (!event.target.validity.valid) {
            errorMsg.style.opacity = '1';
            setTimeout(function () {
              errorMsg.style.opacity = '0';
            }, 3000)
          }
          else {
            errorMsg.style.opacity = '0';
          }

        })
       // if(input.type==='tel') {
       //   function setCursorPosition(pos, elem) {
       //     elem.focus();
       //     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
       //     else if (elem.createTextRange) {
       //       let range = elem.createTextRange();
       //       range.collapse(true);
       //       range.moveEnd("character", pos);
       //       range.moveStart("character", pos);
       //       range.select()
       //     }
       //   }
       //   function mask(event) {
       //     let matrix = "+38(___)-___-____",
       //       i = 0,
       //       def = matrix.replace(/\D/g, ""),
       //       val = this.value.replace(/\D/g, "");
       //     if (def.length >= val.length) val = def;
       //     this.value = matrix.replace(/./g, function (a) {
       //       return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
       //     });
       //     if (event.type === "blur") {
       //       if (this.value.length === 2) this.value = ""
       //     } else setCursorPosition(this.value.length, this)
       //   };
       //   input.addEventListener("input", mask, false);
       //   input.addEventListener("focus", mask, false);
       //   input.addEventListener("blur", mask, false);
       // };
      }
    }
  }

}());
