import config from './components/constants/configuration';
import Navigation from './components/Navigation';
import Services from './components/Services';

/**
 * Initialize main banner slider
 */
$(`.${config.selectors.slidesHolder}`).slick(config.slick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.recentSlidesHolder}`).slick(config.recentSlick);

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

/**
 * Video controls
 */

var video = $("video"),
    pauseButton = $("#pause");
pauseButton.bind('click', function() {
    if (video.get(0).paused) {
        video.get(0).play();
        pauseButton.html("&#x25fC");
    } else {
        video.get(0).pause();
        pauseButton.html("&#x25BA");
    }
});