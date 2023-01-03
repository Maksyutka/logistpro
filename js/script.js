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
      $(".block").addClass("block_opened");
    }, 100);
  });

  $(".mobile-menu__side").click(() => {
    $(".mobile-menu").fadeOut(700);
    $("html").removeClass("overflowed");
    $(".block").removeClass("block_opened");

    setTimeout(function () {
      $(".header").fadeIn();
      $("#toTop").fadeIn();
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

//phone

function phoneNumSelect() {
  $(".input-phone").intlInputPhone();
}

//top anchor button

function upBtnInit() {
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
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
});
