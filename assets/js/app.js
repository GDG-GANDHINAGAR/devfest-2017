$(".button-collapse").sideNav();
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    console.log($(this).scrollTop())
    $("nav#nav").addClass('shadow')
  } else {
    $("nav#nav").removeClass('shadow')
  }
})