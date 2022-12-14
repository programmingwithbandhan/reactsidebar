import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home />} />
          <Route path='/reports' component={<Reports />} />
          <Route path='/products' component={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
