$(document).ready(function () {

  let count = 0;

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


  })