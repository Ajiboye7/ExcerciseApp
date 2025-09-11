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
              <div key={index} className=" 
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
