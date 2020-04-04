$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1500);
    return false;
  });

  $('.menu__btn').click(function () {

    $('.aside__navigation').fadeToggle("slow");
  })
 
  
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".aside__navigation"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
    } 
   
	});
});
