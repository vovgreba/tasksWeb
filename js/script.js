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

    $('.aside__navigation').toggle("slow");
  })
});

jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu__nav"); // тут указываем ID элемента
    var btn = $(".aside__navigation");
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      btn.hide("slow"); // скрываем его
    }
  });
});