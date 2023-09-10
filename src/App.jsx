//import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import WebRoutes from './WebRoutes'; // Importa el componente WebRoutes

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <WebRoutes />
      </div>
    </Router>
  );
}

export default App;
