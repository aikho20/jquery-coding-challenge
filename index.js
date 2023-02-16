$(document).ready(function(){
    var pauseInterval = true;
  
    var interval = window.setInterval(rotateSlides, 3000)
     function rotateSlides(){
      var $firstSlide = $('#carousel').find('div:first');
      var width = $firstSlide.width();
         if(pauseInterval ===true){
      $firstSlide.animate({marginLeft: -width}, 1000, function(){
        var $lastSlide = $('#carousel').find('div:last')
        $lastSlide.after($firstSlide);
        $firstSlide.css({marginLeft: 0})
      });
    }
    }
  
    $('#left-arrow').click(previousSlide);
    $('#right-arrow').click(nextSlide);
    $('.slide-image').click(imageClicked);
    $('.fa-long-arrow-left').click(backNavigation)
  
    function previousSlide(){
      window.clearInterval(interval);
      var $currentSlide = $('#carousel').find('div:first');
      var width = $currentSlide.width();
      var $previousSlide = $('#carousel').find('div:last')
      $previousSlide.css({marginLeft: -width})
      $currentSlide.before($previousSlide);
      $previousSlide.animate({marginLeft: 0}, 1000, function(){
        interval = window.setInterval(rotateSlides, 3000);
      });
    }
  
    function nextSlide(){
      window.clearInterval(interval);
      var $currentSlide = $('#carousel').find('div:first');
      var width = $currentSlide.width();
      $currentSlide.animate({marginLeft: -width}, 1000, function(){
        var $lastSlide = $('#carousel').find('div:last')
        $lastSlide.after($currentSlide);
        $currentSlide.css({marginLeft: 0})
        interval = window.setInterval(rotateSlides, 3000);
      });
    }

    function backNavigation(){
      $('#carousel').removeClass('active-carousel')
      $('.product-carousel__container').removeClass('active')
      $('.product-details__container').removeClass('hide')
    }

    function imageClicked(){
      pauseInterval=false
      $('#carousel').addClass('active-carousel')
      $('.product-carousel__container').addClass('active')
      $('.product-details__container').addClass('hide')
    }

  });