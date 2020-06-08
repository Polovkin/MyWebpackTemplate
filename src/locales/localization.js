import ru from '../locales/ru.json'
import en from '../locales/en.json'

const locales = {
  'ru': ru,
  'en': en,
}
console.log(locales);

function setLocale() {
  let currentLocale = localStorage.getItem('lang') ?
    JSON.parse(localStorage.getItem('lang')) :
    document.documentElement.lang


  $('[data-locale]').each(function () {
    const $this = $(this)
    let key = $this.data().locale;
    if (this.nodeName !== 'IMG') {
      $this.text(locales[currentLocale][key]);
    } else {
      $this.attr('src', '/assets/img/' + locales[currentLocale].img[key]);
    }
  })
};

$(document).ready(function () {
  setLocale()
  $('#lang button').click(function () {
    document.documentElement.lang = $(this).text();
    localStorage.setItem('lang', JSON.stringify($(this).text()));
    setLocale();
  });
});
