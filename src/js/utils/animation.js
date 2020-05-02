$(document).ready(function() {
  let windowHeight = $(window).height();

  $(document).on('scroll', function() {
    $('.text').each(function() {
      let self = $(this),
        height = self.offset().top + self.height();
      if ($(document).scrollTop() + windowHeight >= height) {
        self.addClass('fadeInRight')
      }
    });
  });
});
