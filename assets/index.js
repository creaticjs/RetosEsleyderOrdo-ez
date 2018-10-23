

$(document).on('ready', function(){
    var pages = $('.page');


    pages.each(function(){
        $(this).addClass('ready')
    });

    $(".link_page").click(function(){
        var target = $(this).attr('data-page');
        console.log(target)
        $(window).scrollTo($(target).offset().top, 500)
    });
})


var scrollListener = function(){
    var pages = $('.page');
    var scrollY = window.scrollY + 30

    var timeout = null
    pages.each(function(){
        var page_top = $(this).offset().top
        if (scrollY >= page_top
            && scrollY < (page_top + $(this).height()))
        {
            if (!$(this).hasClass('seen')) $(this).addClass('seen')
            if (!$(this).hasClass('focused')) $(this).addClass('focused')
        } else if ($(this).hasClass('focused'))
        {
            $(this).removeClass('focused')
        }
    });
}

$(document).on('scroll', scrollListener)

scrollListener();
