import React from "react";

function ArticleVideo ({ video, getVideoRef, onClickPlay, paused }) {
  return (
    <section className="video-container widget">
      <div className="video-box">
        <video
          ref={getVideoRef}
          width={420}
          height={270}
        >
          <source src={`http://${video.url}`} />
        </video>
        <button className="control" onClick={onClickPlay}>
          {paused && <i className="icon-play" />}
          {!paused &&
            <svg version="1.1" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
              <path d="M64 64h160v384h-160zM288 64h160v384h-160z" />
            </svg>
          }
        </button>
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
