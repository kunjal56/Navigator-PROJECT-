// components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from '../services/api';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // axios.get('/restaurants')
    //   .then(response => {
    //     setRestaurants(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <Link to="/restaurants/add">Add Restaurant</Link>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <Link to={`/restaurants/${restaurant.id}`}>
              {restaurant.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
