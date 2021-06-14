function initNavbar() {

    var SCROLL_SPEED = 1000;
    var SCROLL_OFFSET = 50;
    var EASING = "swing";

    var $navTop = $("#navbar-top");
    var $navBar = $(".navbar");
    var $navExternal = $(".nav-external");

    $navBar.onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ":not(.external)",
        easing: EASING
    });

    $(window).on("scroll", function(event) {

        var scroll = $(window).scrollTop();

        if (scroll >= $("#home").height()) {
            $navBar.addClass("fixed");
        } else {
            $navBar.removeClass("fixed");
        }
    }).trigger("scroll");

    $navExternal.click(function(e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });

}

function initMembers() {

    var $members = $("#members");
    var $items = $members.find(".items");
    var $filters = $members.find(".filters li a");

    $items.imagesLoaded(function() {
        var $first = document.getElementsByName("tous");
        var $selector = $first.attr("data-filter");
        $items.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s",
            filter: $selector
        });
    });

    $filters.click(function() {
        var $el = $(this);

        $filters.removeClass("active");
        $el.addClass("active");

        var selector = $el.attr("data-filter");
        $items.isotope({
            filter: selector
        });

        return false;
    });

    // $items.find(".item a").venobox({
    //     border: "2rem",
    //     closeBackground: "transparent"
    // });
}

function initAnimations() {
    var $animated = $(".animated");

    $animated.appear({
        force_process: true
    });

    $animated.on("appear", function() {

        var $el = $(this);

        var animation = $el.data("animation");
        var delay = $el.data("delay");

        // Mofile fix
        if ($(window).width() < 768) {
            delay = 0;
        }

        if (delay) {

            setTimeout(function() {
                $el.addClass(animation);
                $el.addClass("showing");
                $el.removeClass("hiding");
            }, delay);
        } else {

            $el.addClass(animation);
            $el.addClass("showing");
            $el.removeClass("hiding");
        }
    });

    // Asso hover animation
    $(".asso").hover(function() {
        $("img", this).addClass("animated tada");
    }, function() {
        $("img", this).removeClass("animated tada");
    });
}

$(document).ready(function() {
    initNavbar();
    initMembers();
    initAnimations();
});

// $(window).on("load", function() {
//     var $loader = $(".loader");
//     $loader.find(".loading").fadeOut();
//     $loader.fadeOut("slow");
// });


//Gère l'affichage de toutes les pages
const menus = document.querySelectorAll("[id*='-menu']");
menus.forEach((item) => {
    item.addEventListener("click", () => {
        hideAll();
        if(item.getAttribute("id") === "presentation-menu-home"){
            var divToShow = document.getElementById('navbar-top');
            divToShow.style.display = "block";
        }
        show(item.getAttribute("data-link"));
    })
});

var waitForEl = function(selector, callback) {
    if (jQuery(selector).length) {
      callback();
    } else {
      setTimeout(function() {
        waitForEl(selector, callback);
      }, 100);
    }
  };
  
  

//Montre seulement l'élément souhaité
function show(element) {
    var divToShow = document.getElementById(element);
    divToShow.style.display = "block";
    //var selector = `div[class="heading"]`;
    //waitForEl(selector, function() {
        //var goTo = divToShow.querySelector(selector);
        divToShow.scrollIntoView(true, {behavior: "smooth", block: "start"});
    //});
  }

//Cache toutes les pages
function hideAll() {
    const list = ['presentation','partenariats','associations','events','contact'];
    list.forEach(element => {  
        var divToHide = document.getElementById(element);
        divToHide.style.display = "none";
    });
}