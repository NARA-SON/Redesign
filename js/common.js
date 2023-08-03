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

  $(".btnMenu").click(function(){
      if($(".gnb").hasClass("on")==false)
      {$(".gnb").addClass("on")
        $(".btnMenu").addClass("close")}
      else{
        $(".gnb").removeClass("on")
        $(".btnMenu").removeClass("close")
      }
    })

  // 모바일 반응형
    
    $(".mognb .depi").click(function(){
      $(".gnb2dep>ul>li").css("height","30px")
      $(".gnb2dep>ul>li").removeClass("on")

      if($(this).parent().parent().hasClass("on")==true){
        $(this).parent().parent().css("height","40px")
        $(this).parent().parent().removeClass("on")
      }else{
        $(".mognb>li").css("height","40px")
        $(".mognb>li").removeClass("on")

        // let li2dep = $(".gnb2dep>ul>li").length
        let li2dep = $(this).parent().parent().children(".gnb2dep").children("ul").children("li").length
        console.log(li2dep)
        $(this).parent().parent().css("height",(li2dep)*30+40+ "px")
        $(this).parent().parent().addClass("on")
      }
    })

    // $(".mognb ul").click(function(){
    //   return false;
    // })

    $(".mognb .depi2").click(function(){
      if($(this).parent().parent().hasClass("on")==true){
        $(this).parent().parent().css("height","30px")
        $(this).parent().parent().removeClass("on")
      }else{
        $(".gnb2dep>ul>li").css("height","30px")
        $(".gnb2dep>ul>li").removeClass("on")

        let li3dep = $(this).parent().parent().children("ul").children("li").length
        $(this).parent().parent().css("height",(li3dep)*25 + 30 + "px")
        $(this).parent().parent().addClass("on")
      }
      // 1뎁스의 높이를 계산함
      let currentActiveLi3 = $(this).parent().parent().parent().children("li.on").children("ul").children("li").length
      console.log(currentActiveLi3)
      let currentActiveLi2 = $(this).parent().parent().parent().children("li").length
      console.log(currentActiveLi2)
      $(this).parent().parent().parent().parent().parent().height(currentActiveLi3*25+currentActiveLi2*30+40)
    })

    // $(".manCare>ul>li").click(function(){
    //   if($(this).hasClass("on")==true)
    //   {$(this).css("height","30px")
    // $(this).removeClass("on")}
    // else{
    //   $(".manCare>ul>li").css("height","30px")
    //   $(".manCare>ul>li").removeClass("on")

    //   let li4dep = $(this).find("li").length
    //   $(this).css("height",(li4dep + 2)*20 + "px")
    //   $(this).addClass("on")
    // }
    // })

    let count = 0;
    $(".btnProPrev").click(function(){
      count--;
      if(count<0){count=5}
      moveSliderPro(count)
    })

    $(".btnProNext").click(function(){
      count++;
      if(count>5){count=0}
      moveSliderPro(count)
    })

    function moveSliderPro(idx){
      $(".profitlist").css("transform","translateX("+(-40 * idx) + "%)")
    }







})