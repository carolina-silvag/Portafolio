$('.perfil').hide();
$('.portafolio').hide();
$('.contact').hide();
$('.chat').hide();

$('#home').click(sectionHome);
$('#perfil').click(sectionPerfil);
$('#portafolio').click(sectionPortafolio);
$('#contact').click(sectionContact);
$('#chat').click(sectionChat);

function sectionHome() {
  $('.home').show();
  $('.perfil').hide();
  $('.portafolio').hide();
  $('.contact').hide();
  $('.chat').hide();
  /*$('.home').css({'display': 'block'});*/
}

function sectionPerfil() {
  $('.perfil').show();
  $('.home').hide();
  $('.portafolio').hide();
  $('.contact').hide();
  $('.chat').hide();
  /*$('.perfil').css({'display': 'block'});*/
}

function sectionPortafolio() {
  $('.portafolio').show();
  $('.perfil').hide();
  $('.home').hide();
  $('.contact').hide();
  $('.chat').hide();
  /*$('.home').css({'display': 'block'});*/
}

function sectionContact() {
  $('.contact').show();
  $('.home').hide();
  $('.perfil').hide();
  $('.portafolio').hide();
  $('.chat').hide();
  /*$('.perfil').css({'display': 'block'});*/
}

function sectionChat() {
  $('.chat').show();
  $('.home').hide();
  $('.perfil').hide();
  $('.portafolio').hide();
  $('.contact').hide();
  /*$('.perfil').css({'display': 'block'});*/
}
