
$(document).ready(function() {
    $('a#go').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal-form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal-close, #overlay').click( function(){
        $('#modal-form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});