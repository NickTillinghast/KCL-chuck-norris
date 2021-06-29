import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {


  return (
    <BrowserRouter>
      <Route exact path="/quotes" component={QuoteGenerator} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;

