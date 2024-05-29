import React from 'react';

const ExerciseVideos = ({ videos }) => {
  return (
    <div className="videos-container">
      <h3>Related Videos</h3>
      {videos.length ? (
        videos.map((video, index) => (
          <div key={index} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.video.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.video.thumbnails[0].url} alt={video.video.title} />
              <p>{video.video.title}</p>
            </a>
          </div>
        ))
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default ExerciseVideos;
