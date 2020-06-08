import ru from '../locales/ru.json'
import en from '../locales/en.json'

const locales = {
  'ru': ru,
  'en': en,
}
function setLocale() {
  let localeElements = $('[data-locale]');

  let currentLocale = document.documentElement.lang
  localeElements.each(function () {
    const $this = $(this)
    let key = $this.data().locale;
    $this.text(locales[currentLocale][key]);
  })
};

$(document).ready(function () {
  setLocale()
  $('#lang button').click(function () {
    document.documentElement.lang = $(this).text();
    setLocale();
  });
});
