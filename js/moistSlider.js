$(document).ready(function () {

  let count = 0;

  if (matchMedia("screen and (min-width:1024px)").matches) {

  $(".msImgTrain > li").eq(0).clone().appendTo(".msImgTrain");
  $(".msImgTrain > li").eq(1).clone().appendTo(".msImgTrain");
  $(".msImgTrain > li").eq(2).clone().appendTo(".msImgTrain");
  // slideMove(1);

  $(".msBtn").click(function(){
    count++;
    slideMove(count);
    if (count == 8) { 
      count = 0
      setTimeout(function () {
        turnOffTransition()
        slideMove(0)
      }, 700)

      setTimeout(function () {
        turnOnTransition()
      },800)
      
    }
    
    console.log(count)

    $(".msTxTrain li").removeClass("on")
    $(".msTxTrain li").eq(count).addClass("on")

  });

  function slideMove(slideCount){
    $(".msImgTrain").css("transform","translateX("+(-(100/11))*slideCount+"%)");
  }
  function turnOffTransition(){
    $(".msImgTrain").css("transition","all 0s ease 0s");
  }
  function turnOnTransition(){
    $(".msImgTrain").css("transition","all 0.7s ease 0s");
  }

}

if (matchMedia("screen and (max-width:767px)").matches) {

  $(".msBtn").click(function(){
    count++;
    slideMoveSurgeMobile(count);
    if (count == 7) {count = 0}
    // if (count < 0) {count = 7}
    // console.log(count)

  });

  function slideMoveSurgeMobile(SurgeCount){
    $(".msImgTrain").css("transform","translateX("+(-(100/8))*SurgeCount+"%)");
    $(".msTxTrain").css("transform","translateX("+(-(100/8))*SurgeCount+"%)");
  }

}


  })