import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/Practical.css'; 

const Practical = () => {
  const [practicalData, setPracticalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 
  const history = useHistory();

  useEffect(() => {
    const fetchPracticalData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
          params: { limit: '100' },
          headers: {
            'X-RapidAPI-Key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        setPracticalData(response.data);
      } catch (error) {
        console.error('Error fetching practical exercises:', error);
        setError('Error fetching practical exercises. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPracticalData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = practicalData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(practicalData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (id) => {
    history.push(`/exercise/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="practical-container">
      <h3>Practical Exercises</h3>
      <div className="practical-list">
        {currentItems.map((practical) => (
          <div key={practical.id} className="practical-card" onClick={() => handleCardClick(practical.id)}>
            <img src={practical.gifUrl} alt={practical.name} className="practical-image" />
            <div className="practical-details">
              <p className="practical-bodypart">{practical.bodyPart}</p>
              <p className="practical-target">{practical.target}</p>
            </div>
            <p className="practical-name">{practical.name}</p>
          </div>
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

export default Practical;


