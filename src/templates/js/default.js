//==========================================================================
//common.js
//==========================================================================

//userAgent
//---------------------------------------------------------
function userAgent() {
  const ua = navigator.userAgent;
  if (ua.indexOf('iPhone') != -1 || ua.indexOf('iPod') != -1 || ua.indexOf('Android') != -1 && ua.indexOf('Mobile') != -1) {
    //sp
    $('body').addClass('is-view-sp');
  } else if (ua.indexOf('iPad') != -1 || ua.indexOf('Android') != -1) {
    //tab
    $('body').addClass('is-view-tab');
  } else {
    // pc
    $('body').addClass('is-view-pc');
  }
}

//userAgentIE
//---------------------------------------------------------
function userAgentIE() {
  const ua = window.navigator.userAgent.toLowerCase();
  const uaVersion = window.navigator.appVersion.toLowerCase();
  //ie
  if (ua.indexOf('msie') != -1 || ua.indexOf('trident') !== -1) {
    $('body').addClass('is-view-ie');
  }
}

//pagetop
//---------------------------------------------------------
function pagetop() {
  const pagetopTrigger = $('.js-pagetop');
  pagetopTrigger.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 20) {
      $(".back-to-top").addClass('show');
    } else {
      $(".back-to-top").removeClass('show');
    }
  });
}


//animation
//---------------------------------------------------------
function scrollAnimation() {
  const animationTarget = $('.js-animate');
  animationTarget.addClass('is-animate');
  $(window).on('load scroll', function () {
    animationTarget.each(function () {
      let targetPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > targetPos - windowHeight + 100) {
        $(this).addClass('is-animated');
      }
    });
  });
}

//init
//---------------------------------------------------------
$(function () {
  userAgent();
  userAgentIE();
  pagetop();
  scrollAnimation();
});


//menu_mobile
//---------------------------------------------------------
$(document).ready(function ($) {
  $(".menu-bar-mobile").click(function () {
    $('body').toggleClass("menu_open");
    $(".mobile-main-menu").toggleClass("active");
    $(".backdrop__body-backdrop___1rvky").addClass("active");
  });
  $(".backdrop__body-backdrop___1rvky").click(function () {
    $(".mobile-main-menu").removeClass("active");
    $(".backdrop__body-backdrop___1rvky").removeClass("active");
    $('body').removeClass("menu_open");
  });
  $(window).resize(function () {
    if ($(window).width() > 1023) {
      $(".mobile-main-menu").removeClass("active");
      $(".backdrop__body-backdrop___1rvky").removeClass("active");
    }
  });
  $(".backdrop__body-backdrop___1rvky").removeClass("active");
  $(".ng-has-child a svg").on("click", function () {
    var $this = $(this);
    $this.parent().next().slideToggle();
    $(this).toggleClass("active");
    return false;
  });

});

// 
//sprite svg
//---------------------------------------------------------
function spriteSvg() {
  $.ajax({
    type: 'get',
    url: './templates/images/sprite.svg'
  }).done(function (data) {
    var svg = $(data).find('svg');
    $('body').prepend(svg);
  });
}
$(function () {
  new WOW().init();
  $(".datepick").datepicker({
    dateFormat: "dd-mm-yy"
  });
  $(".datepick").keyup(function() {
    let val = $(this).val().split("-").join("");
    if(val.length >0){
     val = val.replace(/(\d{2})(\d{2})(\d*)/, '$1-$2-$3');
    }
    $(this).val(val);
    });
  
  spriteSvg();
  $('.nav-link').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.nav-link').removeClass('active');
    $('.tab-pane').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
  })
});


// slider swiper
const swiper = new Swiper('.swiper_slidefull', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

/// slider product

const swiper1 = new Swiper('.swiper_product', {
  direction: 'horizontal',
  slidesPerView: 1.3,
  spaceBetween: 15,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
/// slider news

const swiper2 = new Swiper('.swiper_news', {
  direction: 'horizontal',
  slidesPerView: 1.3,
  spaceBetween: 15,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

/**/
$(".wrap_question_js .col-click").each(function () {
  var colclick = $(this),
    contentshow = $('.content_question');
  $(this).find('.title').click(function (e) {

    $('.col-click').removeClass('clicked');

    if ($('.col-click').hasClass('clicked')) {
      $('.col-click').removeClass('clicked');
    } else {
      $(this).parent('.col-click').addClass('clicked');
    }

    if ($(this).hasClass('opened')) {
      $(this).removeClass('opened');
      $(contentshow).hide(500);
    } else {
      $('.col-click .title').removeClass('opened');
      $(this).addClass('opened');
      $(contentshow).hide(500);
      $(colclick).find(contentshow).show(500);
    }
  });
});

/*** btn clicked mobile ***/
$(document).ready(function () {
  var wDW = $(window).width();
  /*Footer*/
  if (wDW > 767) {
    $('.toggle-mn').show();
  } else {
    $('.footer-click > .cliked').click(function () {
      $(this).toggleClass('open_');
      $(this).next('ul').slideToggle("fast");
      $(this).next('div').slideToggle("fast");
    });
  }


});

/*** btn support left ***/
$("a.btn-support").click(function (e) {
  e.stopPropagation();
  $(".support-content").slideToggle();
});



$('#xacnhan').on('change', function () {
  if (this.value == 1) {
    $('#mui1').removeClass("hide");
    $('#mui2').removeClass("hide");
  } 
  else {
    $('#mui1').addClass("hide");
    $('#mui2').addClass("hide");
  }
});