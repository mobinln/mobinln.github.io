$(document).ready(function(){
    $("main.inner div.photos").hide();
    $("main.inner div.contact").hide();

    //$(".carousel").carousel();

    $("a#home").click(function(){ 
        $("main.inner div.photos").fadeOut();
        $("main.inner div.contact").fadeOut();
        $("main.inner div.home").fadeToggle();
        $("a#photos").removeClass('active');
        $("a#contact").removeClass('active');
        $(this).addClass('active');
    });
    $("a#photos").click(function(){ 
        $("main.inner div.photos").fadeToggle(); 
        $("main.inner div.home").fadeOut();
        $("main.inner div.contact").fadeOut();
        $("a#home").removeClass('active');
        $("a#contact").removeClass('active');
        $(this).addClass('active');
    });
    $("a#contact").click(function(){ 
        $("main.inner div.contact").fadeToggle(); 
        $("main.inner div.photos").fadeOut();
        $("main.inner div.home").fadeOut();
        $("a#photos").removeClass('active');
        $("a#home").removeClass('active');
        $(this).addClass('active');
    });
});