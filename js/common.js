$(document).ready(function(){

  // --------헤더 스크롤바 부드럽게
  $(window).scroll(function(){

    let winTop = $(window).scrollTop();

    if(winTop>=400){
      $("header").addClass("sma")
    }else{
      $("header").removeClass("sma")
    }
  })

  // --------헤더 호버 제어시킴
    $(".gnb").mouseover(function(){
    $("header").addClass("on")
  })

  $(".gnb").mouseout(function(){
    $("header").removeClass("on")
  })

  // -------전체 스크롤바 부드럽게
  $("main>div").on("wheel DOMMouseScroll", function (event) { 
    
    let E = event.originalEvent;
    let delta = 0;

    if (E.detail) {delta = E.detail * -40}
    else {delta = E.wheelDelta}
      
    if (delta < 0) {
      if ($(this).next().length != 0)
      {let posTop = $(this).next().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)}
      } else {
      if ($(this).prev().length != 0)
      {let posTop = $(this).prev().offset().top
      $("html,body").stop().animate({ scrollTop: posTop }, 1000)}
      }
      return false
  })

    // -------TOP버튼
  $(".btnTop").click(function () { 
    $("html, body")
      .animate({ scrollTop: 0 }, 1000)
  })





})