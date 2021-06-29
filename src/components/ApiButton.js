import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
// import Jokes from './Jokes';
import './ApiButton.css';

const ApiButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [joke, setJoke] = useState({ joke: '' });
    const [likedJoke, setLikedJoke] = useState([]);
    const [error, setError] = useState()


    const url = 'https://api.chucknorris.io/jokes/random'
    const fetchData = async () => {
        setIsLoading(true);
        try {
            // throw new Error('testing')
            const result = await axios.get(url)
            setJoke({ ...joke, joke: result.data.value }, setIsLoading(false));
        }
        catch (ex) {
            setError(ex.message)
        }
    }

    const likeJoke = () => {
        let likedJokes = JSON.parse(localStorage.getItem("jokes") || "[]");
        likedJokes.push(joke.joke);
        localStorage.setItem("jokes", JSON.stringify(likedJokes));
        setLikedJoke(likedJokes);
    }

    return (
        <div className="card">
            {
                error && <div className='data'>Error in Finding Jokes{error}</div>
            }
            {
                !isLoading && <button className='data' onClick={fetchData}>Load</button>
            }
            {
                isLoading && <button className='data' disabled>
                    <FaSpinner />
                    Getting joke</button>
            }
            <div className="joke"><button className='iconStyles' onClick={likeJoke} >Like</button >{joke.joke} </div>
            <div>
                <div className='fav-joke'>
                    <div>
                    </div>
                    {likedJoke.map(j => (
                        <ul>{j}</ul>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ApiButton;

