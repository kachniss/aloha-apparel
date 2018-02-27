$(function(){ 
    //
    // show items in cart
    //
    var cartItems = 0;
    $('.js-cart-button').click(function(){
        cartItems++;
        $(".js-cart-items").css("visibility", "visible");
        $(".js-cart-items").text(cartItems);
    });

    //
    // sign-up button alert
    //
    $(".js-submit-button").click(function(){
        alert("Thanks for subscribing!");
    });

    //
    // smooth scrolling
    //
    // @source https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2 02/26/2018
    //
    var bannerHeight = $("header").height();
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - bannerHeight
            }, 1000);
        }
    });
});

