$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.backTop').fadeIn();
        } else {
            $('.backTop').fadeOut();
        }
    });
    $('.scrollTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $('.bars').click(function(){
        $('.menutop').slideToggle();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.menutop').addClass('fix'); // add class
        } else {
            $('.menutop').removeClass('fix'); // remove class
        }
    });
    $(window).ready(function() {
        $('.form-login').hide();
        $('.login').click(function() {
            $('.form-login').slideDown(500);
        })
        $('.knot').click(function() {
            $('.form-login').hide();
        })
    });
});

