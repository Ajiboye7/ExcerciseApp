import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Practical.css'; 

const SimilarExercise = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="practical-container">
      <h3>Similar Exercises</h3>
      <div className="practical-list">
        {currentExercises.map((exercise) => (
          <Link to={`/exercise/${exercise.id}`} key={exercise.id} className="practical-card-link">
            <div className="practical-card">
              \cal-name">{exercise.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimilarExercise;
