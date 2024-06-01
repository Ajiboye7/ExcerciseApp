import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/Practical.css'; 

const Practical = () => {
  const [practicalData, setPracticalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 9;

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
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching practical exercises:', error);
        setError('Error fetching practical exercises. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPracticalData();
  }, []);

  useEffect(() => {
    const filtered = practicalData.filter((exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.target.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, practicalData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="practical-container">
      <h3>Practical Exercises</h3>
      <input
        type="text"
        placeholder="Search exercise..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="practical-list">
        {currentItems.map((practical) => (
          <Link to={`/exercise/${practical.id}`} key={practical.id} className="practical-card-link">
            <div className="practical-card">
              <img src={practical.gifUrl} alt={practical.name} className="practical-image" />
              <div className="practical-details">
                <p className="practical-bodypart"> {practical.bodyPart}</p>
                <p className="practical-target">{practical.target}</p>
              </div>
              <p className="practical-name">{practical.name}</p>
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

export default Practical;




