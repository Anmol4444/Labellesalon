//typing text animation string
var typed = new Typed(".typing-2", {
    strings: ["MENS HAIRCUT", "HAIR EXTENSION", "LADIES HAIR CUT", "WE DO MAKE UP", "HAIR TREATMENT"],
    typeSpeed: 130,
    backSpeed: 60,
    loop: true
});
AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('.arrow').show();
        $('.navbar').addClass("fixed");
    } else {      
        $('.arrow').hide();
        $('.navbar').removeClass("fixed");
    }
});
