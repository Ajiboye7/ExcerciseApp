import React from 'react';
import '../style/ExcerciseVideos.css';

const ExerciseVideos = ({ name, videos }) => {
  return (
    <div className="videos-container">
      <h3>Related Videos</h3>
      {videos.length ? (
        <div className='video-header'>
          <h4>Watch <span>{name}</span> Exercise Videos</h4>
          <div className="videos-grid">
            {videos.slice(0, 6).map((video, index) => (
              <div key={index} className="video-card">
                <a href={`https://www.youtube.com/watch?v=${video.video.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img src={video.video.thumbnails[0].url} alt={video.video.title} />
                </a>
                <h3>{video.video.title}</h3>
                <p>{video.video.channelName}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default ExerciseVideos;
