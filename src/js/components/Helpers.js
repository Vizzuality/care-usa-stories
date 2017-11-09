
jQuery(function() {

    $(function() {
        Helpers();
    });

    function Helpers() {
        let win = $(window),
            block = $('.banner-box'),
            galleryWidget = $('.gallery-widget-container'),
            articleList = $('.list'),
            flag = true;

        function resizeHandler() {

            if (win.innerWidth() < 768 && flag) {
                flag = false;
                block.css({
                    'left' : '50%',
                    'right' : '50%',
                    'top' : '50%',
                    'position' : 'relative',
                    'margin-left' : -block.outerWidth()/2,
                    'margin-top' : -block.outerHeight()/2.5
                });
                //Append account and wishlist links to mobile menu
                galleryWidget.prependTo(articleList);

            } else if(win.innerWidth() >= 769 && !flag){
                flag = true;
                block.css({
                    'top': '12.3%',
                    'left': '5.2%',
                    'right': '0',
                    'position' : 'absolute',
                    'margin-left' : '0',
                    'margin-top' : '0'
                });
            }
        }

        resizeHandler();

        win.on('load resize orientationchange', resizeHandler);
    }
});