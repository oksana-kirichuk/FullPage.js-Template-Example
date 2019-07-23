var fpApi = $.fn.fullpage;

$('.fullpage-container').fullpage({

});

$('[data-section-anchor]').click(function () {
    var target = $(this).attr('data-section-anchor');
    fpApi.moveTo(target);
})

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



