$(document).ready(function () {
  nav();
  mMenu();
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
      } else {}
    } else {}
    $('a', this).click(function () {
      var depth = $(this).parent();
      var sibling = depth.siblings();

      sibling.removeClass('active');
      $('ul', sibling).slideUp("fast");
      depth.toggleClass('active');

      var ul = $('>ul', depth);
      if (ul.length > 0) {
        ul.slideToggle("fast", function () {});
        return false;
      } else if ($(this).attr('target') != '_blank') {}
    });
  }
  subDepth2();
  footer_Swiper();

});

function nav() {
  $('.navigation .gnb ul li').mouseover(function () {
    $(this).children().addClass('active');
    $('header .list').css('display', 'block');
    $('.navigation .gnb ul li .depth2').css('display', 'block');
  });
  $('.navigation .gnb ul li').mouseleave(function () {
    $(this).children().removeClass('active');
    $('header .list').css('display', 'none');
    $('.navigation .gnb ul li .depth2').css('display', 'none');
  });
}

function mMenu() {
  $('#toggle').click(function () {
    $('body').toggleClass('fixed');
    $('.topBlue').toggleClass('active');
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  var menu = $('.overlay-menu ul li a');
  menu.click(function () {
    $('.depth2').slideUp();
    if ($(this).next().is(':hidden')) {
      $(this).parent().find(".depth2").slideDown();
    }
  });

}

function subDepth2() {
  $('.category > li').setMenu();
}




function footer_Swiper() {
  var bannerSwiper = new Swiper(".banner_zone .mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: ".footerbtn .swiper-button-next",
      prevEl: ".footerbtn .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  $('.footerbtn .swiper-button-pause').click(function () {
    if ($(this).hasClass('off')) {
      $(this).removeClass('off');
      bannerSwiper.autoplay.start();
    } else {
      $(this).addClass('off');
      bannerSwiper.autoplay.stop();
    }
  });


  //resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
  $(window).resize(function () {
    var width = $(window).width();
    if (width <= 720) {
      $(".table-wrap").mouseover(function () {
        $(this).addClass("scroll");
      });
      $(".table-wrap").scroll(function () {
        $(this).addClass("scroll");
      });
      // $(".table__inner").mouseout(function(){
      // 	$(this).removeClass("scroll");
      // });
    }

  });

  $(window).trigger("resize"); //강제로 호출하는 함수
}






  
// 마우스 커서 위치 담을 변수
/*
var mouseX = 0;
var mouseY = 0; 

function getMousePosition(e){
    var eObj = window.event? window.event : e; // IE, FF 에 따라 이벤트 처리 하기
    mouseX = eObj.clientX;
    mouseY = eObj.clientY + document.documentElement.scrollTop; // 화면을 스크롤 했을때를 위한 처리 (스크롤 한 만큼 마우스 Y좌표에 + )
    // documentElement 가 안된다면 body 바꿔야 한다. 크롬의 경우.. (자동파악 로직 필요)
}

function moveImg(){
    // 이미지 위치 파악하기
    var m_x = parseInt(document.getElementById('img1').style.left.replace('px', ''));
    var m_y = parseInt(document.getElementById('img1').style.top.replace('px', ''));

    // 이미지 움직이기
    document.getElementById('img1').style.left = Math.round(m_x + 2 + ((mouseX - m_x) / 5)) + 'px';
    document.getElementById('img1').style.top = Math.round(m_y + 2 + ((mouseY - m_y) / 5)) + 'px';

    // 부드럽게 따라오는 공식 대략..
    // 현재 이미지위치 = 현재이미지 위치 + (이미지 위치기준 마우스 커서 위치 / 적절한 나누기 값)
    // 반복 처리 해주면 됩니다.
     
    // ※ 이미지 위치 기준 마우스 커서 위치란?
    // 이미지를 기준으로 그 이미지에서 커서가 얼마나 떨어져 있는지 여부
}

document.onmousemove = getMousePosition; // 마우스가 움직이면 getMousePosition 함수 실행
setInterval("moveImg()", 10); // moveImg 함수 반복 실행하여 이미지 움직이기

*/
