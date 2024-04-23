$(".important__slids").slick({
  arrows: true,
  infinite: true,
  touchThreshold: 1000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500, 
  nextArrow: document.querySelector(".slick-next"),
  prevArrow: document.querySelector(".slick-prev"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        adaptiveHeight: true,
      },
    },
  ],
});

$(document).ready(function () {
  const $tabs = $(".medical__tab");
  const $tabContents = $(".medical__content");

  function hideAllTabContents() {
    $tabContents.hide();
  }

  function showTabContent(index) {
    hideAllTabContents();
    $tabContents.eq(index).show();
  }

  $tabs.each(function (index) {
    $(this).on("click", function () {
      $tabs.removeClass("tab--active");
      $(this).addClass("tab--active");
      showTabContent(index);
    });
  });

  showTabContent(0);
});

$(".question__item-parent").click(function () {
  var $parent = $(this).closest(".questions__item");
  var $items = $parent.find(".question__item-answer");
  var $arrow = $(this).find("svg");

  $parent.toggleClass("active");
  $items.slideToggle(200);

  if ($parent.hasClass("active")) {
    $arrow.addClass("up");
  } else {
    $arrow.removeClass("up");
  }

  $(".questions__item")
    .not($parent)
    .removeClass("active")
    .find(".question__item-answer")
    .slideUp(200);
});

$(".partners__slids").slick({
  arrows: true,
  infinite: true,
  touchThreshold: 1000,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  nextArrow: $(".partners__slider").find(".partners-next"),
  prevArrow: $(".partners__slider").find(".partners-prev"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// бургер

$(document).ready(function () {
  $(".header__burger").click(function () {
    $(".header__burger-wrapper").toggleClass("header__burger-wrapper--active");
    $(".header__burger").toggleClass("header__burger--active");
  });
});

//модалка

$(".modal-wrap").on("click", function (event) {
  event.stopPropagation();
});

$(".fancybox").fancybox();


