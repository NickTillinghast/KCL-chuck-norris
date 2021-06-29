import React from 'react';
import ApiButton from './components/ApiButton';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/quotes" component={ApiButton} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;

