import React from "react";

class ArticleCard extends React.Component {
  render() {
    return (
      <article className="article-item box">
        <a className="holder" href="./html/storie1.html">
          <figure className="article-content">
            <div className="article-layer">
              <img
                src="/images/article/img1.png"
                alt="Rehena and Her Solar Lamp."
              />
              <p>
                <button className="btn" type="button">
                  GO TO STORY
                </button>
              </p>
            </div>
            <figcaption>
              <div className="article-data">
                <p className="cat">
                  <span>Climate Change</span>
                </p>
                <span className="country">CARE UGANDA</span>
              </div>
              <h4>Rehena and Her Solar Lamp.</h4>
              <p>Like many young girls, she dreams of becoming a doctor.</p>
            </figcaption>
          </figure>
        </a>
      </article>
    );
  }
}

export default ArticleCard;
