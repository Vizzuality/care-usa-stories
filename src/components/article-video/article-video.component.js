import React from "react";

function ArticleVideo ({ video, getVideoRef, onClickPlay, paused, quote }) {
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
      {quote &&
        <div className="video-content-area">
          <p>
            "{quote}"
          </p>
        </div>
      }
    </section>
  );
}

export default ArticleVideo;
