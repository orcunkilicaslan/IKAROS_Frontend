"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(t){var o={};function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==_typeof(e)&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,t){t(1),t(2),n.exports=t(3)},function(n,e){$(function(){var n=$("title"),e=(n.text(),$(".headtitle h1").text());$("body").hasClass("home")?$(window).on("load",function(){n.text("IKAROS")}):$(window).on("load",function(){n.text(e.toLocaleUpperCase()+" | IKAROS")}),$(window).focus(function(){$("body").hasClass("home")?n.text("IKAROS"):n.text(e.toLocaleUpperCase()+" | IKAROS")}),$(window).blur(function(){n.text("IKAROS")})}),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")})}),jQuery(function(o){991<o(window).width()&&o(window).on("load resize scroll",function(n){var e=o(window).scrollTop(),t=o("header.header");e>t.height()?t.addClass("navscroll"):t.removeClass("navscroll")}).on("load resize",function(n){var e=o("header.header");o(".headtitle-bg").css("padding-top",e.height()+"px"),o(".headtitle").css("min-height",e.height()+"px")})}),$(window).on("load resize",function(n){if(991<$(window).width()){var e=$("header.header .dfn-headnav");$("header.header .dfn-headnav .megamenu-nav").css("width",e.width()+"px"),$('.dfn-menu-list-item > a[data-toggle="dropdown"]').click(function(){$(".header-web").addClass("activemenubar"),$(document).click(function(n){$(n.target).hasClass("active")||setTimeout(function(){$(".header-web").removeClass("activemenubar"),$(".dfn-menu-list-item").removeClass("active")},750)})}),$(".dfn-menu-list-item").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").addClass("fadeInDown d-block").removeClass("fadeOutUp"),$(".header-web").addClass("activemenubar")}).on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").removeClass("fadeInDown").addClass("fadeOutUp"),setTimeout(function(){$(".dfn-menu-list-item").find(".dropdown-menu").removeClass("d-block")},750)})}}),$(document).ready(function(){$(".signindropdown").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").addClass("fadeIn d-block").removeClass("fadeOut")}).on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").removeClass("fadeIn").addClass("fadeOut"),setTimeout(function(){$(".signindropdown").find(".dropdown-menu").removeClass("d-block")},750)})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(document).ready(function(){jQuery(window).scroll(function(){250<jQuery(this).scrollTop()?jQuery(".bottomtotopbutton").fadeIn(300):jQuery(".bottomtotopbutton").fadeOut(300)}),jQuery(".bottomtotopbutton").click(function(n){return n.preventDefault(),jQuery("html,body").animate({scrollTop:0},300),!1})}),$('.siteformui input[type="text"]').keyup(function(n){var e=$(this).val();$(this).val(e.replace(/^(.)|\s(.)/g,function(n){return n.toUpperCase()}))}),$(document).ready(function(){$(".inputphonemask").inputmask({mask:"+99{1,99}",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputgsmphonemask").inputmask({mask:"0599 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputphonemasktr").inputmask({mask:"0999 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputibanmask").inputmask({mask:"TR99 9999 9999 9999 9999 9999 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputidentitymask").inputmask({mask:"99999999999",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatemask").inputmask({mask:"99/99/9999",placeholder:"MM/DD/YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatedottedmask").inputmask({mask:"99.99.9999",placeholder:"MM.DD.YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputonlytextmask").inputmask({mask:"AAA",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})})},function(n,e){AOS.init()},function(n,e){$(window).on("load",function(n){var e={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"UnknownBrowser",this.OS=this.searchString(this.dataOS)||"UnknownOS"},searchString:function(n){for(var e=0;e<n.length;e++){var t=n[e].string,o=n[e].prop;if(this.versionSearchString=n[e].versionSearch||n[e].identity,t){if(-1!=t.indexOf(n[e].subString))return n[e].identity}else if(o)return n[e].identity}},searchVersion:function(n){var e=n.indexOf(this.versionSearchString);if(-1!=e)return parseFloat(n.substring(e+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};e.init(),"Chrome"===e.browser?$("html").addClass(e.OS+" Chrome Chrome"+e.version):"Firefox"===e.browser?$("html").addClass(e.OS+" Firefox Firefox"+e.version):"MS Edge"===e.browser?($("html").addClass(e.OS+" Edge Edge"+e.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">')):"Explorer"===e.browser&&($("html").addClass(e.OS+" IExplorer IExplorer"+e.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">'))})}]);
//# sourceMappingURL=plugin-app.js.map
