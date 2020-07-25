// Smoth paga scroll
const $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top,
  }, 500);
  return false;
});

// Click on header mobile size)
$(document).mouseup(function (e) {
  const container = $('#header');
  if (container.has(e.target).length === 0) {
    $('.header__nav').removeClass('show');
  }
});

// Video auto height
const iframe = $('.main-video-popup iframe');
const width = iframe.width();
iframe.css('height', width / 1.7777 + 'px');


