/* Head Blur Tab Page Title */
$(function(){
    var $pageHeadTitleTag       = $('title');
    var $pageHeadTitleTagText   = $pageHeadTitleTag.text();
    var $headerSloganTitle      = $(".headtitle h1").text();
    var $headerDefaultTitle     = "IKAROS";
    var $headerBlurTitle        = "IKAROS";

    if($('body').hasClass('home')){
        $(window).on("load", function(){
            $pageHeadTitleTag.text($headerDefaultTitle)
        });
    }else {
        $(window).on("load", function(){
            $pageHeadTitleTag.text($headerSloganTitle.toLocaleUpperCase() + " | " + $headerDefaultTitle)
        });
    }

    $(window).focus(function(){
        if($('body').hasClass('home')){
            $pageHeadTitleTag.text($headerDefaultTitle)
        }else {
            $pageHeadTitleTag.text($headerSloganTitle.toLocaleUpperCase() + " | " + $headerDefaultTitle)
        }
    });

    $(window).blur(function(){
        $pageHeadTitleTag.text($headerBlurTitle)
    });
});
/* Head Blur Tab Page Title */

/* Header Mobile Navbar Menu */
$(function() {

    // Mobile Menu
    $('#dfn-navtggle').click(function () {
        $('.dfn-megamenu').toggleClass('dfn-canvaskapat');
    });
    $('.dfn-mobilemenu-mask').click(function () {
        $('.dfn-megamenu').removeClass('dfn-canvaskapat');
    });
    // Mobile Menu

});
/* Header Mobile Navbar Menu */

/* Header Web Navbar Fixed */
jQuery(function($) {
    if($(window).width() > 991){

        $(window).on("load resize scroll",function(e){

            //var bodyWidth = window.innerWidth;
            //var bodyHeight = window.innerHeight;
            var scroll = $(window).scrollTop();
            var headerHeight = $("header.header");

            if (scroll > (headerHeight.height() / 3)) {
                headerHeight.addClass("navscroll");
            } else {
                headerHeight.removeClass("navscroll");
            }

        }).on("load resize",function(e){
            var headerHeight = $("header.header");
            $("header + section").css("min-height", headerHeight.height() + "px").css("padding-top", headerHeight.height() + "px");
        });
    }
});
/* Header Web Navbar Fixed */

/* Header Web Navbar Dropdown Menu */
$(window).on("load resize",function(e){if($(window).width() > 991){

    var dfnNavMenuWidth = $("header.header .dfn-headnav");
    $("header.header .dfn-headnav .megamenu-nav").css("width", dfnNavMenuWidth.width() + "px");

    $('.dfn-menu-list-item > a[data-toggle="dropdown"]').click(function() {
        $('.header-web').addClass('activemenubar');

        $(document).click(function(event) {
            if (!$(event.target).hasClass('active')) {
                setTimeout(function () {
                    $('.header-web').removeClass('activemenubar');
                    $(".dfn-menu-list-item").removeClass("active");
                },750);
            }
        });
    });

    $(".dfn-menu-list-item")
        .on("show.bs.dropdown", function(){
            $(this).find('.dropdown-menu').addClass('fadeIn d-block');
            $('.header-web').addClass('activemenubar');
        })
        .on("hide.bs.dropdown", function(){
            $(this).find('.dropdown-menu').removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                $(".dfn-menu-list-item").find('.dropdown-menu').removeClass("fadeOut d-block");
                //$('.header-web').removeClass('activemenubar');
            },750);
        });

}});
/* Header Web Navbar Dropdown Menu */

/* Site Dropdown Menu */
$(window).on("load resize",function(e){if($(window).width() > 767){

    $(".sitedropdown")
        .on("show.bs.dropdown", function(){
            $(this).find('.dropdown-menu').removeClass('fadeOut').addClass('fadeIn d-block');
        })
        .on("hide.bs.dropdown", function(){
            $(this).find('.dropdown-menu').removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                $(".sitedropdown").find('.dropdown-menu').removeClass("fadeOut d-block");
            },750);
        });

}});
/* Site Dropdown Menu */

/* Tooltip */
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
});
/* Tooltip */

/* Footer Scroll to Top Button */
jQuery(document).ready(function() {
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('.bottomtotopbutton').fadeIn(duration);
        } else {
            jQuery('.bottomtotopbutton').fadeOut(duration);
        }
    });

    jQuery('.bottomtotopbutton').click(function(event) {
        event.preventDefault();
        jQuery('html,body').animate({scrollTop: 0}, duration);
        return false;
    })
});
/* Footer to Top Button */

/* Site Forum UI Input Text Transform Capitalize */
$('.siteformui input[type="text"]').keyup(function(evt){
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function($1){ return $1.toUpperCase( ); }));
});
/* Site Forum UI Input Text Transform Capitalize */

/* Site Forum UI Input Mask */
$(document).ready(function(){
    $('.inputphonemask').inputmask({
        mask: '+99{1,99}',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputgsmphonemask').inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputphonemasktr').inputmask({
        mask: '0999 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputibanmask').inputmask({
        mask: 'TR99 9999 9999 9999 9999 9999 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputidentitymask').inputmask({
        mask: '99999999999',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputdatemask').inputmask({
        mask: '99/99/9999',
        placeholder: 'MM/DD/YYYY',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputdatedottedmask').inputmask({
        mask: '99.99.9999',
        placeholder: 'MM.DD.YYYY',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
    $('.inputonlytextmask').inputmask({
        mask: 'AAA',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
});
/* Site Forum UI Input Mask */

/* Loading Info */
// console.log("Plugin App Javascript Loading Successful");
/* Loading Info */