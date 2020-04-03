
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1500);
      return false;
    });

    $('.menu__btn').click(function(){
      $('.aside__navigation').toggle("slow");
  })
  });