import React from "react";

class articleQuote extends React.Component {
  render() {
    return (
      <div className="article-expanded-holder quote-content">
        <figure className="quote-area">
          <img
            src="/images/woman-with-child.png"
            alt="I no longer have to use the dangerous and expensive kerosene/paraffin lamps"
          />
          <figcaption>
            <blockquote className="quote">
              <p>
                "I no longer have to use the dangerous and expensive
                kerosene/paraffin lamps,"
              </p>
              <footer>
                <cite>The grandmother says.</cite>
              </footer>
            </blockquote>
          </figcaption>
        </figure>
        <div className="std">
          <p>
            CARE promotes the use of such technologies by empowering women
            entrepreneurs to become last-mile distributors of clean energy
            products to rural populations. When the training was completed in
            Rehema's village, each family received a small loan to purchase a
            clean energy product. Rehema's grandmother chose a solar lamp, which
            has transformed the lives of the entire family.
          </p>
          <p>
            And now that Rehema can do her studies at night, she is performing
            very well in school. She recently climbed to third position, out of
            75 pupils in her class!{" "}
          </p>
          <p>
            "I really enjoy studying nowadays," she says. "I have the option of
            waking up at midnight to study and do extra homework."Now, Rehema
            has gotten a shot in the arm to achieve her dream of becoming a
            doctor.
          </p>
        </div>
      </div>
    );
  }
}

export default articleQuote;
