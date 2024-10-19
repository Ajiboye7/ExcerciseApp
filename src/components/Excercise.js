/*import React, { useState, useEffect } from 'react';
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

export default Exercise;*/

import { useEffect } from 'react';

const loadFacebookSDK = () => {
  if (!window.FB) {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
};

const FacebookLogin = () => {
  useEffect(() => {
    loadFacebookSDK();

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1498943767275613',  // Your App ID
        cookie     : true,                // Enable cookies to allow the server to access the session
        xfbml      : true,                // Parse social plugins on this page
        version    : 'v17.0'              // Use the latest version of the Graph API
      });
    };
  }, []);


  const loginWithFacebook = () => {
    window.FB.login((response) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        console.log('Access Token:', accessToken);
        // You now have the access token
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email,instagram_basic,instagram_manage_insights' });
  };


  


  return (
    <div>
      <h1>Login with Facebook</h1>
      <button onClick={loginWithFacebook}>Login with Facebook</button>
    </div>
  );
};

export default FacebookLogin;


