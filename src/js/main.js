import config from './components/constants/configuration';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Helpers from './components/Helpers';

/**
 * Initialize main banner slider
 */
$(`.${config.selectors.slidesHolder}`).slick(config.slick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.recentSlidesHolder}`).slick(config.recentSlick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.gallerySlick}`).slick(config.gallerySlick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.gallerySlickMiniature}`).slick(config.gallerySlickMiniature);
/**
 * Initialize main article grid
 */
$(`.${config.selectors.articleList}`).masonry(config.masonry);
/**
 * Initialize mobile navigation
 */
new Navigation();

/**
 * Initialize services hover handlers
 */
new Services();