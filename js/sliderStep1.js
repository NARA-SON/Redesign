$(document).ready(function () {

  let count = 0;

  $(".sp1ImgTrain > li").eq(0).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(1).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(2).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(3).clone().appendTo(".sp1ImgTrain");
  $(".sp1ImgTrain > li").eq(0).addClass("on")

  $(".sp1Btn").click(function () {
    count++;
    console.log(count)
    slideMove(count);
    
    if (count == 4) {
      count = 0
      // $(".sp1ImgTrain li").eq(4).addClass("on")
      setTimeout(function () {
        turnOffTransition()
        slideMove(0)
      }, 700)

      setTimeout(function () {
        turnOnTransition()
      }, 750)
    }

  })

  function slideMove(slideCount){
    $(".sp1ImgTrain").css("transform", "translateX(" + (-280 * slideCount) + "px)");
    $(".sp1ImgTrain li").removeClass("on")
    $(".sp1ImgTrain li").eq(slideCount).addClass("on")
}

  function turnOffTransition(){
    $(".sp1ImgTrain").css("transition", "all 0s ease 0s");
    $(".sp1ImgTrain li").css("transition","all 0s ease 0s");
}

  function turnOnTransition(){
    $(".sp1ImgTrain").css("transition", "all 0.7s ease 0s");
    $(".sp1ImgTrain li").css("transition","all 0.7s ease 0s");
  }
})