
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    
    if (scroll >280) {
        $("#teemtop").addClass("top");
    } else {
        $("#teemtop").removeClass("top");
    }
});