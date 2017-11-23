new WOW().init();


tan = 360 - parseInt(Math.atan($(window).height() * .2 / $(window).width()) * 180 / 3.14)

$(document).ready(function() {
  $(".rotated").css('-ms-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  $(".rotated").css('-webkit-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  $(".rotated").css('transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  var el = document.getElementsByClassName('big_container')[0];

  var interval = setInterval(function() {
    if (el.style.visibility == 'visible') {
      var conts=document.getElementsByClassName('content');
      var desc=document.getElementsByClassName('hidethis');
      for (var i=0;i<conts.length;i++){
        assign(conts[i],desc[i],i);

      }


      clearInterval(interval);
    }
  }, 100);

})

function assign(a,b, i) {
  setTimeout(function() {
    a.classList.add("part" + (i + 1).toString());

  }, i*1000);
  setTimeout(function() {
    b.classList.add('nomore');
    b.classList.add('animated');
    b.classList.add('fadeInUp');

  }, i*1000+500);
}
$(".square").css('height', $(".square").parent().find('.m9').height() * 1.5)
$(".square").css('width', $(".square").height())
//$(".square").css('right', $(".square").parent().find('.m9').width())
$(".square").css('top', -($(".square").height() - $(".square").parent().find('.m9').height()) / 2)

$(".rect").css('height', $('.rect').width() * .75)