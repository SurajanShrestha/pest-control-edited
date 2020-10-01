(function($) {
    //Function to animate slider captions
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";
  
      elems.each(function() {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function() {
          $this.removeClass($animationType);
        });
      });
    }
  
    //Variables on page load
    var $myCarousel = $("#carouselExampleIndicators"),
      $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animate__animated']");
  
    //Initialize carousel
    $myCarousel.carousel();
  
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
  
    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animate__animated']"
      );
      doAnimations($animatingElems);
    });
  })(jQuery);

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1) {
        $('.navbar').addClass("fixed");
        $('.fa-bars').addClass("text-dark");
    } 
    else{
        $('.navbar').removeClass("fixed");
        $('.fa-bars').removeClass("text-dark");
    }
});

$('#more-services').on('click',function(e){
  e.preventDefault();
  $('.service-hidden:hidden').slice(0,3).show();
  if($('.service-hidden:hidden').length == 0){
      $("#more-services").hide();
  } 
});