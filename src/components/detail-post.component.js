import React from "react";

class DetailPost extends React.Component {
  render() {
    return (
      <div className="article-expanded-holder">
        <a href className="map-link __in-article" title="SHOW THIS ON THE MAP">
          <i className="icon-world-map" />
          <span>SHOW THIS ON THE MAP</span>
        </a>
        <div className="std">
          <p>
            The limited number of daylight hours â€“ and the lack of electricity
            presented a serious challenge to Rehema's studies. "I would have to
            wait for others to fall asleep before I could use the kerosene lamp
            for my studies, and by then I would be so tired that I would
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
        <div className="std list">
          <ul>
            <li>
              Before Rehema leaves for school every morning, she has to perform
              chores around the house. "I wake up around 4 a.m., do the
              cleaning, make breakfast for me and my younger brother, get ready
              for school and by 6:15, I leave for school."
            </li>
            <li>
              When she returns from school, the rest of her domestic chores
              begin. And when she is done, the dark has fallen. In the
              countryside, the dark is as absorbing as it is prevailing. The
              limited number of daylight hours – and the lack of electricity –
              presented a serious challenge to Rehema's studies.
            </li>
            <li>
              "I would have to wait for others to fall asleep before I could use
              the kerosene lamp for my studies, and by then I would be so tired
              that I would eventually fall asleep while trying to study," she
              says. Rehema was not doing well in school for one simple reason:
              She could not study at home since there was no electricity.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DetailPost;
