$(window).load(function() {

    var fpApi = $.fn.fullpage;

    $('.fullpage-container').fullpage({
        // fullpage_api.setResponsive(true),
        // result as when activating the responsiveWidth or responsiveHeight options

        responsiveHeight: 600,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Section 1', 'Section 2','Section 3','Section 4','Section 5'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        scrollOverflow: true, // прокрутка если контент превышает высоту слайда

    });

    $('[data-section-anchor]').click(function () {
        var target = $(this).attr('data-section-anchor');
        fpApi.moveTo(target);
    })


    var selectorMobile = document.querySelectorAll('[data-mobile]');

    selectorMobile.forEach(function(mobile) {
        mobile.addEventListener('click', function() {
            var targetMobile = this.getAttribute('data-mobile');

            if(targetMobile === 'close') {
                document.querySelector('.overlay').classList.remove('active');
                document.querySelector('.mobile-nav').classList.remove('active');
            } else {
                document.querySelector('.overlay').classList.add('active');
                document.querySelector('.mobile-nav').classList.add('active');
            }
        }); 
    });



    // $('[data-mobile]').click(function () {
    //     var selectorMobile = $(this).attr('data-mobile');

    //     if (selectorMobile === 'close') {
    //         $('.overlay').removeClass('active');
    //         $('.mobile-nav').removeClass('active');
    //     } else {
    //         $('.overlay').addClass('active');
    //         $('.mobile-nav').addClass('active');
    //     }
    // });
});