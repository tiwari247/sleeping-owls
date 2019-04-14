$(function(){
    $(".--js-menu_icon").click(function(){
        var nav = $(".--js-main-nav");
        var icon = $(".--js-menu_icon i");
        if(icon.hasClass("ion-android-menu")){
            icon.addClass("ion-close");
            icon.removeClass("ion-android-menu");
        }else{
            icon.addClass("ion-android-menu");
            icon.removeClass("ion-close");
        }
        nav.slideToggle();
    });
});