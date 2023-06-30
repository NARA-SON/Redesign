$(document).ready(function () {

  let count = 0;

$(".sp2ImgTrain > li").eq(0).clone().appendTo(".sp2ImgTrain");
  $(".sp2ImgTrain > li").eq(1).clone().appendTo(".sp2ImgTrain");
  $(".sp2ImgTrain > li").eq(2).clone().appendTo(".sp2ImgTrain");
  $(".sp2ImgTrain > li").eq(3).clone().appendTo(".sp2ImgTrain");
  $(".sp2ImgTrain > li").eq(0).addClass("on")

  $(".sp2Btn").click(function () {
    count++;
    console.log(count)
    slideMove2(count);
    
    if (count == 4) {
      count = 0
      // $(".sp1ImgTrain li").eq(4).addClass("on")
      setTimeout(function () {
        turnOffTransition2()
        slideMove2(0)
      }, 700)

      setTimeout(function () {
        turnOnTransition2()
      }, 750)
    }

  })

  function slideMove2(slideCount2){
    $(".sp2ImgTrain").css("transform", "translateX(" + (-280 * slideCount2) + "px)");
    $(".sp2ImgTrain li").removeClass("on")
    $(".sp2ImgTrain li").eq(slideCount2).addClass("on")
}

  function turnOffTransition2(){
    $(".sp2ImgTrain").css("transition", "all 0s ease 0s");
    $(".sp2ImgTrain li").css("transition","all 0s ease 0s");
}

  function turnOnTransition2(){
    $(".sp2ImgTrain").css("transition", "all 0.7s ease 0s");
    $(".sp2ImgTrain li").css("transition","all 0.7s ease 0s");
}
  
})