
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function($) {
  $.fn.extend({
    cardify: function() {
      return this.each(function() {

        // ocultar text de figcaption
        hideFigcaption(this);

        // Al pasar por la imagen cambia
        $(this).find('figure').mouseover(getInImg);

        // Al salir de la imagen cambia
        $(this).find('figure').mouseleave(getOutImg);
      });
    }
  });
})(jQuery);

// ocultar text de figcaption
function hideFigcaption(element) {
  $('.btn-text').hide();
  $(element).find('figure').css({'width': '100%', 
    'position': 'relative',
    'display': 'inline-block', 
    'color': 'white'});
}

// Al pasar por la imagen cambia
function getInImg() {
  $(this).find('.btn-text').show();
  $(this).find('.btn-text').css({'position': 'absolute',
    'top': '50%',
    'left': '20%',
    'margin': '0',
    'text-align': 'center'});

  $(this).find('.btn-text a').css({
  'background':'transparent url(./assets/images/img2/circle.png) no-repeat 80% 0px',
  'display': 'inline-block',
  'width': '95px',
  'height': '41px',
  'text-decoration': 'none',
  'outline': 'none',
  'font-size': '16px',
  'color': '#555',
  'float': 'left',
  'line-height': '41px'});

  $(this).find('img').css({'filter': 'brightness(30%)', 
    '-webkit-filter': 'brightness(30%)',
    '-moz-filter': 'brightness(30%)', 
    '-o-filter': 'brightness(30%)',
    '-ms-filter': 'brightness(30%)',
    'filter': 'grayscale(30%)',
    'filter': 'url(grayscale.svg)', // Firefox 4+ 
    'filter': 'gray' // IE 6-9
  });
  
}

// Al salir de la imagen cambia
function getOutImg() {
  $(this).find('.btn-text').hide();
  $(this).find('figure').css({'display': 'none', 
    'background-color': 'transparent'});
  $(this).find('img').css({'filter': 'brightness(100%)', 
    '-webkit-filter': 'brightness(100%)'});
}

},{}]},{},[1]);
