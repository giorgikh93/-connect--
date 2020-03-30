// let arr = Array.from(historyUl.getElementsByClassName('year'))
// let count = 0.4;

// for (let i = 0; i < arr.length; i++) {
//   arr[i].style.opacity = count - 0.025;
//   count = arr[i].style.opacity;
// }



$('.menuButton').click(function () {
  $('.menu3').slideToggle('normal')
})
$('.hide').hide()
$('.load').click(function () {
  $('.hide').fadeToggle('fast')

})

$('.viewMore').click(function () {
  $('.hide2').fadeToggle('normal')
})


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  responsive: [
    {

      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 638,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});




let visibelDiv = 0;
function showDiv(){
  $(".mybox").hide();
  $(".mybox:eq(" + visibelDiv + ")").show();
}
showDiv()



function showNext(){
  if(visibelDiv == $(".mybox").length-1){
    visibelDiv = 0;
  }else{
    visibelDiv++;
  }
  showDiv()
}
function showPrev(){
  if(visibelDiv == 0){
    visibelDiv = $(".mybox").length-1;
  }else{
    visibelDiv--;
  }
  showDiv()
}


