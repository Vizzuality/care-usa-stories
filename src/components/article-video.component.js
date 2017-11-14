import React from "react";

function ArticleVideo ({ video }) {
  console.log(video)
  return (
    <section className="video-container widget">
      <div className="video-box">
        <video
          width={420}
          height={270}
        >
          <source src={`http://${video.url}`} />
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
  );
}

export default ArticleVideo;
