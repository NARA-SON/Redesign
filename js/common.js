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

  // 모바일 반응형
  if (matchMedia("screen and (max-width: 760px)").matches) {

    $(".btnMenu").click(function(){
      if($(".gnb").hasClass("on")==false)
      {$(".gnb").addClass("on")
        $(".btnMenu").addClass("close")}
      else{
        $(".gnb").removeClass("on")
        $(".btnMenu").removeClass("close")
      }
    })

    $(".gnb>li").click(function(){
      if($(this).hasClass("on")==true)
      {$(this).css("height","30px")
    $(this).removeClass("on")}
    else{
      $(".gnb>li").css("height","30px")
      $(".gnb>li").removeClass("on")

      let li2dep = $(".gnb2dep>ul>li>a").length
      $(this).css("height",(li2dep + 1)*30 + "px")
      $(this).addClass("on")
    }
    })

    $(".gnb ul").click(function(){
      return false;
    })

    $(".gnb2dep>ul>li").click(function(){
      if($(this).hasClass("on")==true)
      {$(this).css("height","30px")
    $(this).removeClass("on")}
    else{
      $(".gnb2dep>ul>li").css("height","30px")
      $(".gnb2dep>ul>li").removeClass("on")

      let li3dep = $(this).find("li").length
      $(this).css("height",(li3dep + 2)*20 + "px")
      $(this).addClass("on")
    }
    })

    $(".manCare>ul>li").click(function(){
      if($(this).hasClass("on")==true)
      {$(this).css("height","30px")
    $(this).removeClass("on")}
    else{
      $(".manCare>ul>li").css("height","30px")
      $(".manCare>ul>li").removeClass("on")

      let li4dep = $(this).find("li").length
      $(this).css("height",(li4dep + 2)*20 + "px")
      $(this).addClass("on")
    }
    })

    let count = 0;
    $(".btnProPrev").click(function(){
      count--;
      if(count<0){count=0}
      moveSliderPro(count)
    })

    $(".btnProNext").click(function(){
      count++;
      if(count>2){count=2}
      moveSliderPro(count)
    })

    function moveSliderPro(idx){
      $(".profitlist").css("transform","translateX("+(-34.5 * idx) + "%)")
    }


  }




})