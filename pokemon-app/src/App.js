import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './views/HomePage'
import PokemonPage from './views/PokemonPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pokemon/:name" element={<PokemonPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
