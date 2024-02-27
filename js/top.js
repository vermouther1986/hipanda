<!--swiper-->
$(document).ready(function() {
var swiper = new Swiper(".mySwiper", {
	    autoplay: true,
        autoplaySpeed: 3000,
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
	    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
	
	
 var mySwiper= document.querySelector('.swiper-container').swiper
  $(".swiper-container").mouseenter(function() {
    mySwiper.autoplay.stop();
    console.log('slider stopped');
  });
  $(".swiper-container").mouseleave(function() {
    mySwiper.autoplay.start();
    console.log('slider started again');
  });
	});


<!--slider-->

//画像の設定




