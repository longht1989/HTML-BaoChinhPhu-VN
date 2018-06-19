/* ====================================
   Onload functions
   ==================================== */

$(function() {
    /*highlight slider */
    $('#highlight-slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        nextSelector: '#highlight-slider-next',
        prevSelector: '#highlight-slider-prev'
    });
    // slimscroll highlight listing
    $('.zone--highlight .zone__listing .scroll-box').slimscroll({
        height: $('.zone--highlight .zone__featured').height(),
        allowPageScroll: true,
        size: '5px'
    });
    /*sidebar slider */
    $('#sidebar-slider').bxSlider({
        pager: false,
        nextText: '',
        prevText: '',
        nextSelector: '#sidebar-slider-next',
        prevSelector: '#sidebar-slider-prev'
    });
    /*sidebar slider */
    $('#featured-slider').bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '#featured-slider-next',
        prevSelector: '#featured-slider-prev',
        pagerCustom: '#bx-pager'
    });
    /*sponsor slider */
    $('.sponsor').bxSlider({
        nextText: '',
        prevText: '',
        pager: false,
        minSlides: 5,
        maxSlides: 6,
        slideWidth: 180,
        slideMargin: 20,
        auto: true,
        speed: 1000
    });

    // slimscroll box for each area
    $('.normal-area').each(function() {
        $(this).find('.scroll-box').slimscroll({
            height: $(this).find('.zone__featured').height(),
            allowPageScroll: true,
            size: '5px'
        });

    });

    // galleria article
    $(function() {
        // Load the classic theme
        Galleria.loadTheme('../Jscripts/vendor/galleria/themes/classic/galleria.classic.min.js');

        // Initialize Galleria
        Galleria.run('#galleria', {
            height: 540
        });
    });
});
