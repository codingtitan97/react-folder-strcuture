import React, { useState } from 'react';
import LocationSearch from './components/search/SearchComponent'
import Login from './components/login/login';
import Navbar from './components/navbar/Navbar';
import "./App.css"
function App() {

  return (
    <div>
      {/* <Navbar /> */}
      <LocationSearch />
      {/*   <Login /> */}
    </div>
  );
}

export default App;
