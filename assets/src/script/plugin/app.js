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

            if (scroll > headerHeight.height()) {
                //headerHeight.css("top", 0);
                headerHeight.addClass("navscroll");
            } else {
                //headerHeight.css("top", "-" + headerHeight.height() + "px");
                headerHeight.removeClass("navscroll");
            }

        }).on("load resize",function(e){

            var headerHeight = $("header.header");
            $(".headtitle-bg").css("padding-top", headerHeight.height() + "px");
            $(".headtitle").css("min-height", headerHeight.height() + "px");

        });
    }
});
/* Header Web Navbar Fixed */

/* Header Web Navbar Menu Active Class */
jQuery(function($) {
    if($(window).width() > 991){

        // Menu List Active Class Added
        $('.dfn-menu-list > li.dfn-menu-list-item > a').click(
            function(){
                $('.dfn-menu-list > li.dfn-menu-list-item').removeClass('active');
                $(this).parent().addClass('active');
            }
        );
        // Menu List Active Class Added

        // Header Web ActiveMenuBar Class Added and Removed
        $(document).ready(function(e) {
            $('.dfn-menu-list > li.dfn-menu-list-item > a[data-toggle="dropdown"]').click(function(event) {
                $(this).parent().parent().parent().parent().parent().parent().parent().addClass('activemenubar');
                //event.stopPropagation();
            });
            $(document).click(function(event) {
                if (!$(event.target).hasClass('active')) {
                    $(".header-web").removeClass('activemenubar');
                    $(".header-web li.dfn-menu-list-item").removeClass("active");
                }
            });
        });
        // Header Web ActiveMenuBar Class Added and Removed

    }
});
/* Header Web Navbar Menu Active Class */

/* Header Web Navbar Dropdown Menu */
$(document).ready(function(){
    $(".dfn-menu-list-item")
        .on("show.bs.dropdown", function(){
        $(this).find('.dropdown-menu').addClass('fadeInDown d-block').removeClass('fadeOutUp');
    })
        .on("hide.bs.dropdown", function(){
        $(this).find('.dropdown-menu').removeClass('fadeInDown').addClass('fadeOutUp');
            setTimeout(function () {
                $(".dfn-menu-list-item").find('.dropdown-menu').removeClass("d-block");
            },750);
    });


    if($(window).width() > 991){
        $(window).on("load resize",function(e){
            var dfnNavMenuWidth = $("header.header .dfn-headnav");
            $("header.header .dfn-headnav .megamenu-nav").css("width", dfnNavMenuWidth.width() + "px");
        });
    }
});
/* Header Web Navbar Dropdown Menu */

/* Header Web User Login Dropdown Menu */
$(document).ready(function(){
    $('.signindropdown')
        .on('show.bs.dropdown', function(){
            $(this).find('.dropdown-menu').addClass('fadeIn d-block').removeClass('fadeOut');
        })
        .on('hide.bs.dropdown', function(){
            $(this).find('.dropdown-menu').removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                $(".signindropdown").find('.dropdown-menu').removeClass("d-block");
            },750);
        });

    // Header Web ActiveMenuBar Class Added and Removed
    $('.signindropdown > a[data-toggle="dropdown"]').click(function(event) {
        $(this).parent().parent().parent().parent().parent().addClass('activemenubar');
        //event.stopPropagation();
    });
    $(document).click(function(event) {
        if (!$(event.target).hasClass('active')) {
            $(".header-web").removeClass("activemenubar");
            $(".header-web li.dfn-menu-list-item").removeClass("active");
        }
    });
    // Header Web ActiveMenuBar Class Added and Removed
});
/* Header Web User Login Dropdown Menu */

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