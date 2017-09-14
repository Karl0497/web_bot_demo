new WOW().init();


tan = 360 - parseInt(Math.atan($(window).height() * .2 / $(window).width()) * 180 / 3.14)

$(document).ready(function() {
  $(".rotated").css('-ms-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  $(".rotated").css('-webkit-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  $(".rotated").css('transform', 'rotate(' + tan + 'deg)') /* IE 9 */
  var el = document.getElementsByClassName('big_container')[0];

  var interval = setInterval(function() {
    if (el.style.visibility == 'visible') {
      var typetext = document.getElementsByClassName('content');

      for (var i = 0; i < typetext.length; i++) {
        assign(typetext[i], i);

      }



      clearInterval(interval);
    }
  }, 100);

})

function assign(a, i) {
  setTimeout(function() {
    a.classList.add("part" + (i + 1).toString());
  }, i*1000);
}
$(".square").css('height', $(".square").parent().find('.m9').height() * 1.5)
$(".square").css('width', $(".square").height())
//$(".square").css('right', $(".square").parent().find('.m9').width())
$(".square").css('top', -($(".square").height() - $(".square").parent().find('.m9').height()) / 2)

$(".rect").css('height', $('.rect').width() * .75)
