import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Excercise.css'
import back from '../Images/back.jpg';
import cardio from '../Images/cardio.jpg';
import chest from '../Images/chest.jpg';
import neck from '../Images/neck.jpg';
import waist from '../Images/waist.jpg';

const exerciseImages = {
  back: back,
  cardio: cardio,
  chest: chest,
  neck: neck,
  waist: waist,
};

const Exercise = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', {
          headers: {
            'X-RapidAPI-Key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        const filteredData = response.data.filter((_, index) => ![3, 4, 6, 7, 8].includes(index));
        setExerciseData(filteredData);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setError('Error fetching exercises. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseData();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="exercise-container">
      <h3>Exercises keep you healthy</h3>
      <div className="exercise-list">
        {exerciseData.map((exercise, index) => (
          <div className="exercise-item" key={index}>
            <img src={exerciseImages[exercise]} alt={exercise} className="exercise-image" />
            <p className="exercise-name">{exercise}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
