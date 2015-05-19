$(document).ready(function(){
//selecion de <a>
    $("ul.clearfix > li > a").click(function (evento) {
        evento.preventDefault();
        $(".current-menu-item").removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
    });

//hover con fade
    $("ul.clearfix > li > a").hover(function () {
        $(this).siblings().fadeToggle(800);
    });

//Menu Mobile
    $("#mobile-button").click(function () {
        $(this).hide();
        $("#mobile-close").show();
        $("#menu-container").fadeToggle("solw");
    });

    $("#mobile-close").click(function () {
        $(this).hide();
        $("#mobile-button").show();
        $("#menu-container").fadeToggle("slow");
    });
});