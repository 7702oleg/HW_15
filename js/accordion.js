$( "#accordion").find('li').click(function() {
    var activeLi = $("#accordion").find(".active");
    var $this = $(this);

    activeLi.find('div').fadeOut(function() {
        activeLi.removeClass('active');
        $this.addClass('active').find('div').fadeIn();
    })
});