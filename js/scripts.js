$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $(".invisible").toggleClass("active")
});
$(".main-navigation li a").click(function () {
    $(".invisible").removeClass("active");
    $(".burger-menu").removeClass("menu-on")
});
