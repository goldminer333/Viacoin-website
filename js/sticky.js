$(function() {

    var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 60;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 44
            });
        }
    });
    
});