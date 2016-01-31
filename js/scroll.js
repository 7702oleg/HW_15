$(document).ready(function(){
    $('.scroll').click(function(){

        var speed = 700;
        var dataBlock = $(this).data("block");


        var top = $(dataBlock).offset().top;

        $('html, body').animate({scrollTop: top}, speed);

        return false;
    });
});