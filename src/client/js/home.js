
$(document).on('ready', function() {
  console.log('sanity check!');

    $('.homepage-hover').hover(function() {
       $(this).animate({opacity:'1'});
     }, function() {
       $(this).animate({opacity:'0'});
     });


    // Slider
    var sliderInt = 1;
    var sliderNext = 2;


    $('.slider-image img').hide();
      $('.slider-image > #1').fadeIn(300);

      startSlider();

    function startSlider() {
      var count = $('.slider-image img').size();
      loop = setInterval(function() {

          if(sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
          }
         $('.slider-image img').fadeOut(300);
          $('.slider-image > #' + sliderNext).fadeIn(500);

          sliderInt = sliderNext;
          sliderNext += 1;
      }, 3000);
    }

});
