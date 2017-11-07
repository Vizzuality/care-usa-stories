import c from './constants/configuration';

export default class {

    constructor() {
        this.init();
    }

    init() {
        const serviceLinks = $(`.${c.selectors.servicesLink}`);

        serviceLinks.hover(
            function () {
                $(this).closest(`.${c.selectors.servicesItem}`).addClass(c.selectors.focus);
            },
            function () {
                $(this).closest(`.${c.selectors.servicesItem}`).removeClass(c.selectors.focus);
            }
        );
    }

}
