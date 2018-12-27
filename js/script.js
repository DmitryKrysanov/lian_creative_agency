
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="icon-prev_arrow"></i>', '<i class="icon-next_arrow"></i>'],
        // navText: [
        //     '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
        //     '<span aria-label="' + 'Next' + '">&#x203a;</span>'
        // ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});


