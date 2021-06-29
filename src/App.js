import React from 'react';
import ApiButton from './components/ApiButton';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
// import Jokes from './components/Jokes';
import './App.css';

function App() {
  // const [favoriteJokes, setFavoriteJokes] = useState('')


  return (
    <BrowserRouter>
      <div>
        <Route exact path="/quotes" component={ApiButton} />
        <Route exact path="/" component={Home} />
        {/* <Jokes showLikedJokes={favoriteJokes => {
          setFavoriteJokes(favoriteJokes)
        }} />
        {favoriteJokes} */}
      </div>
    </BrowserRouter>
  );
}

export default App;

