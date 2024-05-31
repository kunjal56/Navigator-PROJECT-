// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantList from './RestaurantList';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={RestaurantList}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
