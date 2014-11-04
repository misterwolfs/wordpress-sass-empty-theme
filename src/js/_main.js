////$(document).ready(function () {
////	var easter_egg = new Konami();
////	easter_egg.code = function () {
////		oldLocation = window.location;
////
////			window.location = oldLocation + "?pureawesomeness=yesplease";
////
////
////	};
////	easter_egg.load();
////});
//var functions = {
//    home: function () {
//        new StickyNav('#js-menu');
//        calendarEvents.init();
//        splash.init();
//        dashboard.init();
//        countdown.init();
//        //facebookLogin.init();
//        weather.init();
//        grid.init();
//    },
//
//    producten: function () {
//        slider.init();
//        $('.js-show-article').on('click', function (e) {
//            e.preventDefault();
//            $('.article-geschiedenis').toggleClass('show');
//            $('.js-show-article').each(function () {
//                $(this).toggleClass('hidden');
//            });
//        });
//        $('#js-more-thuis').on('click', function (e) {
//            e.preventDefault();
//            $('.mobile-info-content p').css('maxHeight', 0);
//            $('.js-thuis').css('max-height', '20em');
//        });
//        $('#js-more-cafe').on('click', function (e) {
//            e.preventDefault();
//            $('.mobile-info-content p').css('maxHeight', 0);
//            $('.js-cafe').css('max-height', '20em');
//        });
//    },
//
//    acties: function () {
//        weather.init();
//        countdown.init();
//        //console.log('TEST');
//
//    }
//};
//
//(function ($) {
//    'use strict';
//// Use this variable to set up the common and page specific functions. If you
//// rename this variable, you will also need to rename the namespace below.
//    var Roots = {
//        // All pages
//        common: {
//            init: function () {
//                // JavaScript to be fired on all pages
//                $('.autoGrow').each(function () {
//                    //console.log($(this).outerHeight(true));
//                });
//                new Share();
//                /*
//                 Rearange packery blocks after loading of all images
//                 */
//                var $container = $('.js-packery');
//                $container.imagesLoaded(function () {
//                    $container.packery({ "gutter": ".gutter-sizer" });
//                });
//                $(window).resize(function () {
//                    //$container.packery({ "gutter": ".gutter-sizer" });
//                });
//                /*
//                 Open and close mobile menu
//                 */
//                $('.js-menu').click(function () {
//                    $('.js-toggle').toggleClass('open');
//                    var menu = $(this).find('h4');
//                    var text = menu.text();
//                    menu.text(text == "Menu" ? "" : "Menu");
//                    $('.icon').toggleClass('rotate');
//                });
//                $('.box-large.slider').click(function () {
//                    var self = $(this);
//                    self.toggleClass("uncollapsed");
//                    self.toggleClass("collapsed");
//                });
//            }
//        },
//        mobile: {
//            init: function () {
//                TMLMobile.init();
//            }
//        },
//
//        mobile_summer: {
//            init: function () {
//                console.log('mobile');
//                TMLMobile.init();
//                PatchDesktop.init();
//            }
//        },
//        patches_contest: {
//            init: function () {
//                console.log('mobile');
//                TMLDesktop.init();
//                PatchDesktop.init();
//            }
//        },
//
//        mobile_summer_2: {
//            init: function () {
//                TMLMobile.init();
//                PatchDesktop.init();
//            }
//        },
//
//        mobile_agecheck_3: {
//            init: function () {
//                Mobile.init();
//            }
//        },
//        home: {
//            init: function () {
//                functions.home();
//            }
//        },
//        acties: {
//            init: function () {
//                functions.acties();
//            }
//        },
//        actions: {
//            init: function () {
//                functions.acties();
//            }
//        },
//        maes_music: {
//            init: function () {
//                weather.init();
//                countdown.init();
//            }
//        },
//        // About us page, note the change from about-us to about_us.
//        age_check: {
//            init: function () {
//                ageCheckLogin.init();
//                ModalEffects.init();
//                splash.init();
//            }
//        },
//        maes_producten: {
//            init: function () {
//                functions.producten();
//            }
//        },
//        maes_produits: {
//            init: function () {
//                functions.producten();
//            }
//        },
//        tmlbox_product: {
//            init: function () {
//                TMLDesktop.init();
//                //tmlSlider.init();
//            }
//        },
//        tmlbox_contest: {
//            init: function () {
//                TMLDesktop.init();
//            }
//        },
////        patches_contest: {
////            init: function () {
////                PatchDesktop.init();
////            }
////        },
//
//
//        single_post: {
//            init: function () {
//                Detailpage.init();
//            }
//        },
//        single_wedstrijd: {
//            init: function () {
//
//            }
//        }
//    };
//// The routing fires all common scripts, followed by the page specific scripts.
//// Add additional events for more control over timing e.g. a finalize event
//    var UTIL = {
//        fire: function (func, funcname, args) {
//            var namespace = Roots;
//            funcname = (funcname === undefined) ? 'init' : funcname;
//            if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
//                namespace[func][funcname](args);
//            }
//        },
//        loadEvents: function () {
//            UTIL.fire('common');
//            $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function (i, classnm) {
//                UTIL.fire(classnm);
//            });
//        }
//    };
//    $(document).ready(UTIL.loadEvents);
//})(jQuery); // Fully reference jQuery after this point.
