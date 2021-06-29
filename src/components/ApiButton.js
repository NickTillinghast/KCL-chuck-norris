import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
// import Jokes from './Jokes';
import axios from 'axios';
import './ApiButton.css';

const ApiButton = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [joke, setInitialJoke] = useState({ joke: '' });
    const [likedJoke, setLikedJoke] = useState([]);
    const [error, setError] = useState()


    const url = 'https://api.chucknorris.io/jokes/random'
    const fetchData = async () => {
        setIsLoading(true);
        try {
            // throw new Error('testing')
            const result = await axios.get(url)
            setInitialJoke({ ...joke, joke: result.data.value }, setIsLoading(false));
        }
        catch (ex) {
            setError(ex.message)
        }
    }

    const likeJokeAction = () => {
        let likedJokes = JSON.parse(localStorage.getItem("jokes") || "[]");
        likedJokes.push(joke.joke);
        localStorage.setItem("jokes", JSON.stringify(likedJokes));
        setLikedJoke(likedJokes);
    }

    // const showLikedJokes = () => {
    //     let likedJokes = JSON.parse(localStorage.getItem("jokes") || "[]");
    //     setLikedJoke(likedJokes);
    // }

    return (
        <div className="card">
            {
                error && <div className='btn-joke'>Error in Finding Jokes{error}</div>
            }
            {
                !isLoading && <button className='btn-joke' onClick={fetchData}>Load</button>
            }
            {
                isLoading && <button className='btn-joke' disabled>
                    <FaSpinner />
                    Getting joke</button>
            }
            <div className="joke">
                <button className='iconStyles' onClick={likeJokeAction} >
                    Like
                </button>
                <div>
                    {joke.joke}
                </div>
            </div>
            <div>
                <div className='fav-joke'>
                    <div>
                    </div>
                    {/* <button onClick={() => showLikedJokes(likedJoke)}>Click for Favorites</button> */}
                    {likedJoke.map(j => (
                        <ul className="fav-joke-item">{j}</ul>
                    ))}
                    {/* <Jokes /> */}
                </div>
            </div>
        </div>

    )
}

export default ApiButton;

