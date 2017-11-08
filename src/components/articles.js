import React from "react";
import ArticleCard from "./article-card";

class Articles extends React.Component {
  render() {
    return (
      <section className="article-container">
        <h3>Total Stories</h3>
        <span className="group">(20 Stories)</span>
        <div className="grid">
          <div className="article-list">
            <ArticleCard />
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer">
                    <img
                      src="/images/article/img2.png"
                      alt="Reaping the benefits of training."
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
                        <span>Emergency & disaster</span>
                        <i className="icon-flag" />
                      </p>
                      <span className="country">CARE UGANDA</span>
                    </div>
                    <h4>Reaping the benefits of training.</h4>
                    <p>
                      Like many young girls, she dreams of becoming a doctor.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer">
                    <img
                      src="/images/article/img3.png"
                      alt="Rebuilding Respect One Tree a Time."
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
                    <h4>Rebuilding Respect One Tree a Time.</h4>
                    <p>
                      Like many young girls, she dreams of becoming a doctor.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer">
                    <img
                      src="/images/article/img5.png"
                      alt="The Promise to shield the birth right"
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
                        <i className="icon-flag" />
                      </p>
                      <span className="country">CARE INDIA</span>
                    </div>
                    <h4>The Promise to shield the birth right</h4>
                    <p>
                      Like many young girls, she dreams of becoming a doctor.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="./html/story2.html">
                <figure className="article-content">
                  <div className="article-layer">
                    <img
                      src="/images/article/img6.png"
                      alt="Yes, School Reintegration is possible when you get money."
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
                        <span>Education</span>
                        <i className="icon-flag" />
                      </p>
                      <span className="country">CARE UGANDA</span>
                    </div>
                    <h4>
                      Yes, School Reintegration is possible when you get money.
                    </h4>
                    <p>
                      Like many young girls, she dreams of becoming a doctor.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer">
                    <img
                      src="/images/article/img4.png"
                      alt="Haiyan Survivor Takes Lead in Community Transformation"
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
                        <span>Education</span>
                      </p>
                      <span className="country">CARE PHILLIPINES</span>
                    </div>
                    <h4>
                      Haiyan Survivor Takes Lead in Community Transformation
                    </h4>
                    <p>
                      Like many young girls, she dreams of becoming a doctor.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer no-image">
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
                        <i className="icon-flag" />
                      </p>
                      <span className="country">CARE UGANDA</span>
                    </div>
                    <h4>
                      Haiyan Survivor Takes Lead in Community Transformation
                    </h4>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            <article className="article-item box">
              <a className="holder" href="#">
                <figure className="article-content">
                  <div className="article-layer no-image">
                    <p>
                      <button className="btn" type="button">
                        GO TO STORY
                      </button>
                    </p>
                  </div>
                  <figcaption>
                    <div className="article-data">
                      <p className="cat">
                        <span>Education</span>
                      </p>
                      <span className="country">CARE NIGERIA</span>
                    </div>
                    <h4>Rebuilding Respect One Tree a Time.</h4>
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled
                    </p>
                  </figcaption>
                </figure>
              </a>
            </article>
            {}
            <form
              id="quickDonate"
              className="donate-form box"
              action="#"
              method="post"
            >
              <h4 className="form-title">Quick Donate</h4>
              <fieldset className="holder">
                <input
                  id="donateField"
                  name="donateInput"
                  defaultValue
                  placeholder="$"
                />
                <button
                  id="donateSubmit"
                  className="button"
                  type="button"
                  name="donateBtn"
                >
                  DONATE
                </button>
              </fieldset>
            </form>
          </div>
          <a className="more" href="#">
            SHOW MORE STORIES
          </a>
        </div>
      </section>
    );
  }
}

export default Articles;
