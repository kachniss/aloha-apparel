$(function(){ 
    //
    // set banner margin for fixed nav
    //
    function setBannerMargin() {
        var bannerMargin = $("header").height();
        $(".banner").css("margin-top", bannerMargin);
    }

    //
    // show number of items in the cart
    //
    var cartItems = 0;
    $('.js-add-to-cart-btn').click(function(){
        cartItems++;
        $(".js-cart-items").css("visibility", "visible");
        $(".js-cart-items").text(cartItems);
    });

    //
    // sign-up button alert
    //
    // @source https://www.formget.com/email-validation-jquery-codes/ 03/03/2018
    //
    function validateEmail(Email) {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return $.trim(Email).match(pattern) ? true : false;
    }

    function submitClick() {
        var email = $(".js-email").val();
        if (validateEmail(email)) {
            alert("Thanks for subscribing!");          
        } else {
            alert("Please enter a valid email address.");
        }
        $(".js-email").val("");
    }

    $(".js-subscribe-btn").click(function(){
        submitClick();
    });

    // @soucre https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter 03/03/2018
    $(".js-email").keypress(function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            submitClick();
        }
    });

    //
    // smooth scrolling
    //
    // @source https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2 02/26/2018
    //
    $("a[href^='#']").on("click", function(event) {
        var bannerHeight = $("header").height();
        var target = $(this.getAttribute("href"));
        if(target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                scrollTop: target.offset().top - bannerHeight
            }, 1000);
        }
    });

    //
    // Flickity
    //
    $(".main-carousel").flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        draggable: true,
        imagesLoaded: true,
        wrapAround: true
    });
});