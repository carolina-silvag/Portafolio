$(document).ready(function() {
  /* para cuando el scroll baja*/
  function changeMenuByScroll() {
    if ($(this).scrollTop() > 100) {
      $('.navbar-nav>li>a').css({'padding': '20px'});
    } else {
      $('.navbar-nav>li>a').css({'padding': '30px 20px 30px 20px'});
      $('.btn-up').css({'margin': '20% 0 20% 0'});
    }
    if ($(this).scrollTop() > 600 & $(this).scrollTop() < 1370) {
      $('.backgraundText1').addClass('textBackgraund');
    } else {
      $('.backgraundText1').removeClass('textBackgraund');
    }
    if ($(this).scrollTop() > 1370 & $(this).scrollTop() < 2300) {
      $('.backgraundText2').addClass('textBackgraund');
    } else {
      $('.backgraundText2').removeClass('textBackgraund');
    }
    if ($(this).scrollTop() > 2300) {
      $('.backgraundText3').addClass('textBackgraund');
    } else {
      $('.backgraundText3').removeClass('textBackgraund');
    }
  }
  // llamo a la funcion cuando empieza el programa y coloca el header dependiendo del lugar en cual esta 

  changeMenuByScroll();

  // cada ves que se mueve el scroll

  $(window).scroll(function() {
    changeMenuByScroll();
  });
});

// fondo de presentacion
var arrImagenes = ['assets/images/coder.jpg', 'assets/images/coder2.jpg', 'assets/images/coder3.jpg', 'assets/images/gustos.png' ];
var imagenActual = 'assets/images/coder.jpg';
var idContenedor = 'image';
setInterval(function() {
  do {
    var imgRand = arrImagenes[Math.ceil(Math.random() * (arrImagenes.length - 1))];
  } while (imgRand === imagenActual);
  imagenActual = imgRand;
  cambiarImagenFondo(imagenActual, idContenedor);
}, 10000);


function cambiarImagenFondo(nuevaImagen, contenedor) {
  console.log(nuevaImagen, contenedor);
  contenedor = $('#' + contenedor);
  contenedor.css('background-image', 'url(' + nuevaImagen + ')');
  // cargar imagen primero
  // var tempImagen = new Image();
  // $(tempImagen).load( function(){
  //   contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
  // });
  // tempImagen.src = 'images/' + nuevaImagen;
}

// libro sobre mi

var Page = (function() {      
  var config = {
      $bookBlock: $('#bb-bookblock'),
      $navNext: $('#bb-nav-next'),
      $navPrev: $('#bb-nav-prev'),
      $navFirst: $('#bb-nav-first'),
      $navLast: $('#bb-nav-last')
    },
    init = function() {
      config.$bookBlock.bookblock({
        speed: 1000,
        shadowSides: 0.8,
        shadowFlip: 0.4
      });
      initEvents();
    },
    initEvents = function() {
      var $slides = config.$bookBlock.children();
      // add navigation events
      config.$navNext.on('click touchstart', function() {
        config.$bookBlock.bookblock('next');
        return false;
      });

      config.$navPrev.on('click touchstart', function() {
        config.$bookBlock.bookblock('prev');
        return false;
      });

      config.$navFirst.on('click touchstart', function() {
        config.$bookBlock.bookblock('first');
        return false;
      });

      config.$navLast.on('click touchstart', function() {
        config.$bookBlock.bookblock('last');
        return false;
      });
      
      // add swipe events
      $slides.on({
        ' swipeleft' : function(event) {
          config.$bookBlock.bookblock('next');
          return false;
        },
        ' swiperight' : function(event) {
          config.$bookBlock.bookblock('prev');
          return false;
        }
      });

      // add keyboard events
      $(document).keydown(function(e) {
        var keyCode = e.keyCode || e.which,
          arrow = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
          };

        switch (keyCode) {
        case arrow.left:
          config.$bookBlock.bookblock('prev');
          break;
        case arrow.right:
          config.$bookBlock.bookblock('next');
          break;
        }
      });
    };

  return { init: init };
})();

// carrusel

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});


// para cada diapositiva en el carrusel, copie el ítem de la siguiente diapositiva en la diapositiva.
// Haz lo mismo para el próximo, siguiente artículo.
$('.multi-item-carousel .item').each(function() {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length > 0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
