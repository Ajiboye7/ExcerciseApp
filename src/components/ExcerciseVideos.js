import React from 'react';
import '../style/ExcerciseVideos.css';

const ExerciseVideos = ({ name, videos }) => {
  return (
    <div className="videos-container">
      <h3>Related Videos</h3>
      {videos.l
      ) : (
        <p>No videos found</p>
      )}
    </div>
  );
};

export default ExerciseVideos;
