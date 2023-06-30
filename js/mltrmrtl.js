$(document).ready(function () { 

$(".moveBs").addClass("mrtl")
  $(".moveBs").each(function(){
    let result = Math.round(Math.random()*1000)%4
    if (result==0)
    {$(this).addClass("mltr")}
    else if(result==1)
    { $(this).addClass("mrtl") }
    else if(result==2)
    { $(this).addClass("mttb") }
    else
    {$(this).addClass("mbtt")}
  })

$(window).scroll(function () {
  let winst = $(window).scrollTop()
  // 스크롤바 위에서 얼만큼 내려왔는지 계산
  let winHeight = $(window).height() * 0.75
  // 브라우저 화면의 높이를 계산

  $(".mltr,.mrtl,.mttb,.mbtt").each(function () {
    if (winst + winHeight > $(this).offset().top) {
      $(this).addClass("on")
    }
    else {
      $(this).removeClass("on")
    }
  })

})
  

})
