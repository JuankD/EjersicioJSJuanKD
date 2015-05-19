$(document).ready(function(){
//selecion de <a>
    $("ul.clearfix > li > a").click(function (evento) {
        evento.preventDefault();
        $(".current-menu-item").removeClass("current-menu-item");
        $(this).parent().addClass("current-menu-item");
    });

//hover con fade
    $("ul.clearfix > li > a").hover(function () {
        $(this).siblings().toggle(600);
    });

//Menu Mobile
    $("#mobile-button").click(function () {
        $(this).hide();
        $("#mobile-close").show();
        $("#menu-container").toggle(500);
    });

    $("#mobile-close").click(function () {
        $(this).hide();
        $("#mobile-button").show();
        $("#menu-container").fadeToggle("slow");
    });
});