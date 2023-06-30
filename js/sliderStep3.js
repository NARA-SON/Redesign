$(document).ready(function () {

  let count = 0;

$(".sp3ImgTrain > li").eq(0).clone().appendTo(".sp3ImgTrain");
  $(".sp3ImgTrain > li").eq(1).clone().appendTo(".sp3ImgTrain");
  $(".sp3ImgTrain > li").eq(2).clone().appendTo(".sp3ImgTrain");
  $(".sp3ImgTrain > li").eq(0).clone().appendTo(".sp3ImgTrain");
  $(".sp3ImgTrain > li").eq(0).addClass("on")

  $(".sp3Btn").click(function () {
    count++;
    console.log(count)
    slideMove3(count);
    
    if (count == 3) {
      count = 0
      // $(".sp1ImgTrain li").eq(4).addClass("on")
      setTimeout(function () {
        turnOffTransition3()
        slideMove3(0)
      }, 700)

      setTimeout(function () {
        turnOnTransition3()
      }, 750)
    }

  })

  function slideMove3(slideCount){
    $(".sp3ImgTrain").css("transform", "translateX(" + (-280 * slideCount) + "px)");
    $(".sp3ImgTrain li").removeClass("on")
    $(".sp3ImgTrain li").eq(slideCount).addClass("on")
}

  function turnOffTransition3(){
    $(".sp3ImgTrain").css("transition", "all 0s ease 0s");
    $(".sp3ImgTrain li").css("transition","all 0s ease 0s");
}

  function turnOnTransition3(){
    $(".sp3ImgTrain").css("transition", "all 0.7s ease 0s");
    $(".sp3ImgTrain li").css("transition","all 0.7s ease 0s");
}
  
})