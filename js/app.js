(function($) {
    "use strict";


    var menu_btn = document.querySelector(".sidemenu-btn");
    var menu = document.querySelector(".template-main-menu");
    menu_btn.addEventListener("click", hide_btn);

    function hide_btn() {
        menu_btn.style.opacity = "0";
        menu_btn.style.transition = ".6s";
        menu.style.right = "0";
    }
    var close_btn = document.querySelector(".close-btn");
    close_btn.addEventListener("click", close_menu);

    function close_menu() {
        menu_btn.style.opacity = "1";
        menu_btn.style.transition = ".7s";
        menu.style.right = "-100%";
    }


    jQuery(document).ready(function() {

        smc_slick();
        smc_magnificPopup();
        smc_doc_sidebar();
        smc_append();
    });

    jQuery(window).on("load", function() {
        sal();
    });

    $(window).on('resize', function() {
        smc_append();
    });

    function smc_magnificPopup() {
        $('.play').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    }
                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
    }


    function smc_slick() {
        $('.slick-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        variableWidth: true
                    }
                }
            ]
        });
    }

    function smc_doc_sidebar() {
        $('.doc-main-menu li a').click(function(e) {
            e.preventDefault();
            var ul = $(this).parent('li').children('ul');
            var i = $(this).children('i');
            var data_id = $(this).data('id');
            if (data_id != null) {
                $('.inner-section-bottom').fadeOut();
                $("#" + data_id).fadeToggle("slow");
            }

            if (ul.hasClass('d-none')) {
                ul.removeClass('d-none');
            } else {
                ul.addClass('d-none');
            }
            if (i.hasClass('fa-angle-double-down')) {
                i.removeClass('fa-angle-double-down');
                i.addClass('fa-angle-double-up');
            } else if (i.hasClass('fa-angle-double-up')) {
                i.removeClass('fa-angle-double-up');
                i.addClass('fa-angle-double-down');
            } else if (i.hasClass('fa-angle-up')) {
                i.removeClass('fa-angle-up');
                i.addClass('fa-angle-down');
            } else if (i.hasClass('fa-angle-down')) {
                i.removeClass('fa-angle-down');
                i.addClass('fa-angle-up');
            }
        });
    }

    function smc_append() {
        var ww = $(window).width();
        if (ww <= 991) {
            $("#edit-page").appendTo(".doc-inner-section");
        } else {
            $("#edit-page").prependTo(".options");
        }
        if (ww <= 767) {
            $(".doc-inner-section").appendTo("li[data-id='smc-ov']");
        } else {
            $(".doc-inner-section").prependTo(".col-lg-8");
        }
    }


})(jQuery);

// function accordion(id){
//     var id = document.getElementById(id);
//     if (id.className.indexOf("d-none") == -1){
//         id.className += " d-none";
//     }
//     else{
//         id.className = id.className.replace(" d-none", "");
//     }


//     // var img = document.getElementById(img);
//     // var show = document.querySelector('.show');
//     // if (pid.className.indexOf("show") == -1) {
//     //   pid.className += " show";
//     //   pid.style.display = "block";
//     //   img.src = "assets/media/Close.png";
//     //   show.className = show.className.replace(" show", "");
//     //   show.style.display = "none";
//     //   var img_id = show.getAttribute('data-id');
//     //   document.getElementById(img_id).src = "assets/media/Open.png";
//     // } else { 
//     //   pid.className = pid.className.replace(" show", "");
//     //   pid.style.display = "none";
//     //   img.src = "assets/media/Open.png";
//     // }
//   }