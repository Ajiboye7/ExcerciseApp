/*import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/ExcerciseDetails.css';

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,{
          headers: {
            'X-RapidAPI-Key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        setExercise(response.data);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
        setError('Error fetching exercise details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="exercise-details-container">
      {exercise ? (
        <div className="exercise-details">
          <h3 className="exercise-details-title">{exercise.name}</h3>
          <img src={exercise.gifUrl} alt={exercise.name} className="exercise-details-image" />
          <p className="exercise-details-bodypart">Body Part: {exercise.bodyPart}</p>
          <p className="exercise-details-target">Target: {exercise.target}</p>
          <p className="exercise-details-equipment">Equipment: {exercise.equipment}</p>
        </div>
      ) : (
        <p className="exercise-details-error">No exercise found</p>
      )}
    </div>
  );
};

export default ExerciseDetails;*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Details from './Details';
import ExerciseVideos from '../components/ExcerciseVideos';

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
          headers: {
            'X-RapidAPI-Key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        setExercise(response.data);

        const videoResponse = await axios.get('https://youtube-search-and-download.p.rapidapi.com/search', {
          params: { query: response.data.name, type: 'video' },
          headers: {
            'X-RapidAPI-Key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
        });
        setVideos(videoResponse.data.contents);
      } catch (error) {
        console.error('Error fetching exercise details or videos:', error);
        setError('Error fetching exercise details or videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {exercise ? (
        <>
          <Details 
            bodyPart={exercise.bodyPart} 
            gifUrl={exercise.gifUrl} 
            name={exercise.name} 
            target={exercise.target} 
          />
          <ExerciseVideos 
            videos={videos} 
          />
        </>
      ) : (
        <p>No exercise found</p>
      )}
    </div>
  );
};

export default ExerciseDetails;




