$(function () {
  $('.slide-preview ul').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in',
  });
  
  $('.commend__list').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'ease-in',
  });

  $('.slide-preview ul').slickLightbox({
    src: 'src',
    caption: 'caption',
    itemSelector: '.slick-slide > img'
  })
})