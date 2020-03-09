//Lazy-loading
document.addEventListener('DOMContentLoaded', function() {
  let lazyLoadImages;

  if ('IntersectionObserver' in window) {
    lazyLoadImages = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyLoadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    let lazyLoadThrottleTimeout;
    lazyLoadImages = document.querySelectorAll('.lazy');

    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }

      lazyLoadThrottleTimeout = setTimeout(function() {
        const scrollTop = window.pageYOffset;
        lazyLoadImages.forEach(function(img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyLoadImages.length === 0) {
          document.removeEventListener('scroll', lazyLoad);
          window.removeEventListener('resize', lazyLoad);
          window.removeEventListener('orientationChange', lazyLoad);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationChange', lazyLoad);
  }
});

//Smoth paga scroll
let $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

//Click on header mobile size)
$(document).mouseup(function(e) {
  const container = $('#header');
  if (container.has(e.target).length === 0) {
    $('.header__nav').removeClass('show');
  }
});

//Video auto height
const iframe = $('.main-video-popup iframe');
const width = iframe.width();
iframe.css('height', width / 1.7777 + 'px');



// Css trik
// #bg-image.lazy {
//   background-image: none;
//   background-color: #F1F1FA;
// }
// #bg-image {
//   background-image: url("https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-600,h-400");
//   max-width: 600px;
//   height: 400px;
// }
