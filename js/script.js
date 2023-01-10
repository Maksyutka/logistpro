// header popup

function headerPopupInit() {
  $(".header__popup").hide();

  $(".header__dropdown").click(() => {
    $(".header__dropdown").toggleClass("active");
    $(".header__popup").slideToggle(300);
  });
}

//mobile menu

function mobileMenuInit() {
  $(".mobile-menu").hide();
  $(".mobile-menu").removeClass("transparent");

  $(".burger").click(() => {
    $(".mobile-menu").fadeIn(700);
    $("html").addClass("overflowed");
    $("body").removeClass("scrolled");
    $("#toTop").fadeOut(700);

    if ($(document).scrollTop() >= 65) {
      $(".header").fadeOut(700);
    }

    setTimeout(function () {
      $(".slideable-page").addClass("slideable-page_opened");
    }, 100);
  });

  $(".mobile-menu__side").click(() => {
    $(".mobile-menu").fadeOut(700);
    $("html").removeClass("overflowed");
    $(".slideable-page").removeClass("slideable-page_opened");

    setTimeout(function () {
      $(".header").fadeIn();
      if ($(window).scrollTop() > 500) {
        $("#toTop").fadeIn();
      }
    }, 700);
  });
}

//mobile menu dropdown

function mobileDropdownInit() {
  $(".mobile-menu__main-dropdown").hide();

  $(".mobile-menu__main-services").click(() => {
    $(".mobile-menu__main-dropdown").slideToggle();
    $(".mobile-menu__main-services").toggleClass("opened");
  });
}

//partners slider init

function partnersSliderInit() {
  $(".partners__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    autoplay: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: "unslick",
      },
    ],
  });
}

$(window).resize(function () {
  if (window.innerWidth > 600) {
    $(".partners__slider").slick("unslick");
  } else {
    $(".partners__slider")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        autoplay: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 600,
            settings: "unslick",
          },
        ],
      });
  }
});

//shippers slider init

function shippersSliderInit() {
  $(".shippers-slider__wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    mobileFirst: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 576,
        settings: "unslick",
      },
    ],
  });
}

$(window).resize(function () {
  if (window.innerWidth > 576) {
    $(".shippers-slider__wrapper").slick("unslick");
  } else {
    $(".shippers-slider__wrapper")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
        autoplay: false,
        mobileFirst: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 576,
            settings: "unslick",
          },
        ],
      });
  }
});

//phone

function phoneNumSelect() {
  $(".input-phone").intlInputPhone();
}

//top anchor button

function upBtnInit() {
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });

  $("#toTop").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
}

// 100vh fix

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// document ready

$(document).ready(function () {
  headerPopupInit();
  mobileMenuInit();
  mobileDropdownInit();
  partnersSliderInit();
  phoneNumSelect();
  upBtnInit();
  shippersSliderInit();
});
