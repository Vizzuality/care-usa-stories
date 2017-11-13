import React from "react";

class articleVideo extends React.Component {
  render() {
    return (
      <div className="article-expanded-holder video-content">
        <section className="video-container widget">
          <div className="video-box">
            <video
              loop
              width={420}
              height={270}
              poster="/images/poster-mask.png"
            >
              <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
              <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
            </video>
            <span id="pause">►</span>
          </div>
          <div className="video-content-area">
            <p>
              "I wake up around 4 a.m., do the cleaning, make breakfast for me
              and my younger brother, get ready for school and by 6:15, I leave
              for school."
            </p>
          </div>
        </section>
        <div className="std">
          <p className="marked">
            When she returns from school, the rest of her domestic chores, And
            when she is done, the dark has fallen. In the countryside.
          </p>
          <p className="marked">
            The dark is as absorbing as it is prevailing.
          </p>
          <p>
            The limited number of daylight hours â€“ and the lack of electricity
            â€“ presented a serious challenge to Rehema's studies. "I would have
            to wait for others to fall asleep before I could use the kerosene
            lamp for my studies, and by then I would be so tired that I would
            eventually fall asleep while trying to study," she says. Rehema was
            not doing well in school for one simple reason: She could not study
            at home since there was no electricity.
          </p>
          <p>
            "I would have to wait for others to fall asleep before I could use
            the kerosene lamp for my studies, and by then I would be so tired
            that I would eventually fall asleep while trying to study," she
            says.
          </p>
        </div>
      </div>
    );
  }
}

export default articleVideo;
