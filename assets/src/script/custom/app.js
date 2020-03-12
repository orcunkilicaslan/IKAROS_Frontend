/* Custom Data-Href URL */
$(window).on("load resize",function(e){if($(window).width() > 991){

    $('.datahrefurl[data-href]').on("click", function() {
        document.location = $(this).data('href');
    });

}});
/* Custom Data-Href URL */

/* Footer Brand Logos Box */
$('#footbrandlogosowl').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
    //items:3,
    margin:65,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        992:{
            items:4
        },
        1200:{
            items:7
        }
    }
});
/* Footer Brand Logos Box */

/* Loading Info */
// console.log("Custom App Javascript Loading Successful");
/* Loading Info */