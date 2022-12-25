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
  $(".burger").click(() => {
    $(".mobile-menu").addClass("opened");
    $("html").addClass("overflowed");
    $("body").removeClass("scrolled");

    setTimeout(function () {
      $(".block").addClass("block_opened");
    }, 100);
  });

  $(".mobile-menu__side").click(() => {
    $(".mobile-menu").removeClass("opened");
    $("html").removeClass("overflowed");
    $(".block").removeClass("block_opened");
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
});
