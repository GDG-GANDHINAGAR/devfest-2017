console.log('hello');
var iconNumber = Math.round(80 * ($(window).width() / 1920));
addIcon()
var iconsPlaced = false;
$(window).resize(function() {
  $('.icon').remove();
  iconNumber = Math.round(60 * ($(window).width() / 1920));
  console.log($(window).width(), iconNumber)
  addIcon()
})
$(document).ready(function() {})

function addIcon() {
  for (i = 0; i < iconNumber; i++) {
    currentIcon = randomGenrator(6, true)
    $('.header').append('<img src="assets/img/' + currentIcon + '.svg" alt="" class="icon icon-' + currentIcon + ' dir' + randomGenrator(6, true) + '">')
    if (i == (iconNumber - 1)) {
      iconsPlaced = true
      addStyle();
    }
  }
}

function addStyle() {
  icons = $('.icon')

  for (i = 0; i < icons.length; i++) {
    stylingIcon = icons[i]
    if (stylingIcon) {
      TweenMax.set(stylingIcon, {
        top: randomGenrator($(window).height(), true) - 56,
        left: randomGenrator($(window).width(), true),
        size: 1.5,
      })
    }
    if (i == (icons.length - 1)) {
      iconsPlaced = true
      startMove();
      TweenMax.from('.icon', 1, {
        top: "50%",
        left: "50%",
        opacity: 0,
        ease: Back.easeOut.config(1.7)
      })

    }
  }
}

function startMove() {
  $('.header').mousemove(function(event) {
    if ($(window).width() > 800) {
      window.requestAnimationFrame(startMove)
      var x = event.pageX;
      var y = event.pageY;
      x = (((x / $(window).width()) - 0.5) * 90)
      y = (((y / $(window).height()) - 0.5) * 90)
      $(".dir1").css('transform', "translate(" + x + "px," + y + "px)");
      $(".dir2").css('transform', "translate(" + (x * -1) + "px," + (y * -1) + "px)");
      $(".dir3").css('transform', "translate(" + (x * -1) + "px," + (y) + "px)");
      $(".dir4").css('transform', "translate(" + (x) + "px," + (y * -1) + "px)");
      $(".dir5").css('transform', "translate(" + (x * -0.5) + "px," + (y * -1.5) + "px)");
      $(".dir6").css('transform', "translate(" + (x * -1.5) + "px," + (y) + "px)");
      $(this).unbind(event);
    }
  });
}

function randomGenrator(boundry, round) {
  x = Math.random() * boundry
  if (x == 0) {
    randomGenrator(boundry, round);
  }
  if (round) {
    x = Math.round(x)
    if (x == 0) {
      x = x + 1
    }
  }
  return x
}