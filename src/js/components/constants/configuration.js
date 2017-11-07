export default {
    selectors: {
        slidesHolder: 'slides-holder',
        recentSlidesHolder: 'recent-slides-holder',
        recentSlick: 'slick',
        header: 'home',
        articleList: 'article-list',
        contactForm: 'contact-user-data'
    },
    navigation: {
        brakePoint: 768,
        selectors: {
            nav: 'main-menu',
            controls: 'mob-menu',
            openNav: 'open',
            closeNav: 'close',
            menuLink: 'menu-link',
            active: 'active'
        }
    },
    slick: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    },
    recentSlick: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    },
    masonry: {
        isFitWidth: true,
        columnWidth: 324,
        gutter: 28,
        selectors: {
            itemSelector: 'box'

        }
    }
};
