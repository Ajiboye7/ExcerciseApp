import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExcerciseVideos';
import SimilarExercise from '../components/SimilarExcercise';

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [videos, setVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        // Fetch exercise details
        const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
          headers
        setSimilarExercises(similarResponse.data);

      } catch (error) {
        console.error('Error fetching exercise details or related data:', error);
        setError('Error fetching exercise details or related data. Please try again later.');
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
            equipment={exercise.equipment}
          />
          <ExerciseVideos 
            videos={videos} 
            name={exercise.name} 
          />
          <SimilarExercise 
            exercises={similarExercises} 
          />
        </>
      ) : (
        <p>No exercise found</p>
      )}
    </div>
  );
};

export default ExerciseDetails;
