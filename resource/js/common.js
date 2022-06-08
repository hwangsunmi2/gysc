$(document).ready(function () {
    nav();
    mMenu();
    subDepth2();
    footer_Swiper();
});    
function nav(){
  $('.navigation .gnb ul li').mouseover(function () {
    $(this).children().addClass('active');
    $('.navigation .gnb .show').css('opacity','1');
    $('.navigation .gnb ul li .depth2').css('display','block');
  });
  $('.navigation .gnb ul li').mouseleave(function () {
    $(this).children().removeClass('active');
    $('.navigation .gnb .show').css('opacity','0');
    $('.navigation .gnb ul li .depth2').css('display','none');
  });
}

function mMenu(){
  $('#toggle').click(function() {
    $('body').toggleClass('fixed');
    $('.topBlue').toggleClass('active');
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  var menu = $('.overlay-menu ul li a');
  menu.click(function() {
    $('.depth2').slideUp();
    if($(this).next().is(':hidden')){
      $(this).parent().find(".depth2").slideDown();
    }  
  });

}  

function subDepth2(){
    $('.category > li').setMenu();
  }
  
  $.fn.setMenu = function () {
    var depth1LI = $('> a', this);
    var depth2UL = $('> ul', this);
    
    var menu = $('.depth:first-child', this);
    menu.addClass('active');
    
    if ($('>ul', menu).length > 0) {
      $('>ul', menu).slideDown("fast");
      menu = $('>ul>li:first', li);
      menu.addClass('active');
      if ($('>ul', menu).length > 0) {
        $('>ul', menu).slideDown("fast");
        menu = $('>ul>li:first', li);
        menu.addClass('active');
      } else {
      }
    } else {
    }
    $('a', this).click(function () {
      var depth = $(this).parent();
      var sibling = depth.siblings();
    
      sibling.removeClass('active');
      $('ul', sibling).slideUp("fast");
      depth.toggleClass('active');
    
      var ul = $('>ul', depth);
      if (ul.length > 0) {
        ul.slideToggle("fast", function () {
        });
        return false;
      } else if ($(this).attr('target') != '_blank') {
      }
    });
  }


function footer_Swiper(){
    var bannerSwiper = new Swiper(".banner_zone .mySwiper", {
        loop:true,
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
        navigation: {
          nextEl: ".footerbtn .swiper-button-next",
          prevEl: ".footerbtn .swiper-button-prev",
        },
  });

  $('.footerbtn .swiper-button-pause').click(function(){
		if($(this).hasClass('off')){
			$(this).removeClass('off');
			bannerSwiper.autoplay.start();
		}else{
			$(this).addClass('off');
			bannerSwiper.autoplay.stop();
		}
	});
}

