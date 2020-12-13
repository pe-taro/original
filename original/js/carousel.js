    `use strict`;
    var mySwiper = new Swiper('.swiper-container', {
});

var mySwiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

var mySwiper = new Swiper('.swiper-container', {
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});


// 固定ヘッダー
$(function () {
  var nav = $("#nav");
  //navの位置
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    if (winTop >= navTop) {
      nav.addClass("fixed");
    } else if (winTop <= navTop) {
      nav.removeClass("fixed");
    }
  });
});





// バーガーメニュー3
$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('is-active');
});
$('.menu__item').on('click', function(){
  $('.menu').toggleClass('is-active');
});


// // スクロール微調整
// var scroll = new SmoothScroll('a[href*="#nav"]', {
//   header: '#header'
// });



jQuery(function ($) {
  //コンテンツを非表示に
  $(".accordion-content").css("display", "none");
  
  //タイトルがクリックされたら
  $(".js-accordion-title").click(function () {
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js-accordion-title").not(this).removeClass("open");
    //クリックされたjs-accordion-title以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
  
  /* 下記でもOK
   $(".accordion-content").css("display", "none");
   $(".js-accordion-title").click(function () {
     $(".js-accordion-title").not(this).removeClass("open").next().slideUp(300);
     $(this).toggleClass("open").next().slideToggle(300);
   });
   */
});