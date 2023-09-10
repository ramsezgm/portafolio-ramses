//import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import WebRoutes from './WebRoutes';

function App() {
  return (
    <Router>
      <div className="App max-h-screen">
        <Header />
        <WebRoutes />
      </div>
    </Router>
  );
}

export default App;
