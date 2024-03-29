$(document).ready(function () {
  $(".menu-toggle button").on("click", function () {
    $("body").toggleClass("open");
  });
  $(".menu_nav li, .footer_menu_block li").on("click", function () {
    $("body").removeClass("open");
    let headerHeight = 0;
  if ($(window).width() < 768) {
    headerHeight = 60
  }
    $("html, body").animate({
      scrollTop: $("" + $(this).data("target") + "").offset().top-headerHeight,
    });
  });

  if ($(window).width() > 1399) {
    const pupil = document.querySelector(".fone img");
    window.addEventListener("mousemove", (e) => {
      var rect = pupil.getBoundingClientRect();
      var x = (e.pageX - rect.left) / 50;
      var y = (e.pageY - rect.top) / 50;
      x > 20 ? (x = 20) : "";
      y > 20 ? (y = 20) : "";

      pupil.style.transform =
        "scale(1.05) translate3d(" + x + "px" + "," + y + "px" + ", 0px)";
    });

    var controller = new ScrollMagic.Controller();

    var $block_list = $(".block-list"),
      $block_item = $block_list.find(".block-list__item"),
      block_list_width = $block_list.outerWidth(),
      block_item_width = $block_item.outerWidth(),
      total_width = block_item_width * $block_item.length,
      travel_distance = total_width - block_list_width + 20;

    var scene = new ScrollMagic.Scene({
      triggerElement: "#advantaged",
      duration: "300%",
      triggerHook: 0,
    })
      .setPin(".block-list")
      .addTo(controller);

    scene.on("progress", function (e) {
      var progress = e.progress,
        move = -travel_distance * progress + "px";
      $block_list.css({
        transform: "translateX(" + move + ")",
      });
    });
  }
  const swiftUpElements = document.querySelectorAll(".swift-up-text");

  swiftUpElements.forEach((elem) => {
    const words = elem.textContent.split(" ");
    elem.innerHTML = "";

    words.forEach((el, index) => {
      words[index] = `<span><i>${words[index]}</i></span>`;
    });

    elem.innerHTML = words.join(" ");

    const children = document.querySelectorAll("span > i");
    children.forEach((node, index) => {
      node.style.animationDelay = `${index * 0.3}s`;
    });
  });

  var swiperFaculties = new Swiper("#building .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: "#building .swiper-button-next",
      prevEl: "#building .swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
    },
    loop: true,
    pagination: {
      el: "#building .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      // 767: {
      //   slidesPerView: 1
      // },
      // 991: {
      // },
      // 1250: {
      //   slidesPerView: 2
      // },
    },
  });
});
