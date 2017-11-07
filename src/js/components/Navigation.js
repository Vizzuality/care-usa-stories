import c from './constants/configuration';

export default class Navigation {

    constructor() {
        this.header = $(`#${c.selectors.header}`);
        this.init();
    }

    init() {
        this.header.on('click', `.${c.navigation.selectors.openNav}`, function () {
           $(this).closest(`.${c.navigation.selectors.controls}`).addClass(c.navigation.selectors.active);
        });

        this.header.on('click', `.${c.navigation.selectors.closeNav}`, function () {
            $(this).closest(`.${c.navigation.selectors.controls}`).removeClass(c.navigation.selectors.active);
        });

        $(window).on('resize', () => {
            const controls = this.header.find(`.${c.navigation.selectors.controls}`);

            if($(window).width() > c.navigation.brakePoint && controls.hasClass(c.navigation.selectors.active)) {
                controls.removeClass(c.navigation.selectors.active);
            }
        });

        $(document).on('click', `.${c.navigation.selectors.menuLink}`, function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });
    }

}