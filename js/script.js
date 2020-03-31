// $(document).ready(function() {
//     $('a[href^="#"]').click(function(){
//         var elementClick = $(this).attr("href")
//          var destination = $(elementClick).offset().top;
//         if($.browser.safari){
//             $('body').animate( { scrollTop: destination }, 1000);
//           } else {
//             $('html').animate({ scrollTop: destination }, 1000);
//           };
//           return false;
//     });
// }); 

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1500);
      return false;
    });
  });