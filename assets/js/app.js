$(".button-collapse").sideNav();
$('.modal').modal();
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    console.log($(this).scrollTop())
    $("nav#nav").addClass('shadow')
  } else {
    $("nav#nav").removeClass('shadow')
  }
})

function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(23.2026592, 72.5825373),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.MAP
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    title: 'Hello World!'
  });
}