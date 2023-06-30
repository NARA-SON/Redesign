$(document).ready(function () { 
   // -------베스트셀러 슬라이더 효과적용
    let bestNow = new Swiper('.bestNow', {

    loop: true,
    direction: 'horizontal',
    autoplay: {delay: 3000},
    speed: 1000,
    // centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView:1,
        spaceBetween:0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView:5,
        spaceBetween:20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      },
    on: {
      slideChange: function () {
        console.log(this.activeIndex) 
        $(".bestItem>li").removeClass("inActive")
        $(".bestItem>li").eq(this.activeIndex).addClass("inActive")
        $(".bestItem>li").eq(this.activeIndex + 4).addClass("inActive")
      },
      
    }
    })

  $(".bestNow").mouseover(function () { 
    bestNow.autoplay.stop()
  })
  $(".bestNow").mouseout(function () {
    bestNow.autoplay.start()
  })

})