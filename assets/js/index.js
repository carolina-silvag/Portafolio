$(document).ready(function(){
  $('.selection').hide();
  typePantalla();
  var tl = new TimelineLite(),
    inter = 30,
    speed = 1,
    $text = $('.text');
  function animInfinite(text){
    TweenMax.killAll(false, true, false);
    TweenMax.set($text, {autoAlpha:0});
    $text.text(text);
    $('.text').each(function(index,val) {
      
      index = index + 1;
      TweenMax.fromTo(
        $(this), speed, {autoAlpha: 0}, {autoAlpha: 0 + (0.01 * index), delay: 0.1 * index});
     });
    TweenMax.to(
      $('.text:nth-child(30)'), speed, {autoAlpha: 1.5, delay: 3.5, onComplete: subtitleEfect}
    );
  }
  subtitleEfect
  animInfinite('Carolina Silva');
  function typePantalla() {
    if (screen.width < 1024) {
      $('#wrapper').hide();
      $('#name').show();
      $('.bienvenido').fadeOut(4000, function aparecer() {
        $('.fondo').css({'transform': 'translateY(10%)'});
      });
    } else {
      $(window).resize(function() {
      console.log($(window).width());
      })
    }
  }
});

function subtitleEfect() {
  $('.selection').fadeIn(1000, function parpadear() { 
    $('#select').fadeIn(100).delay(150).fadeOut(100, parpadear) 
  });
}
