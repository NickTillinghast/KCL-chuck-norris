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

    let iconStyles = { color: "black", fontSize: ".9em", padding: "10px", marginRight: "20px" }
    let favoriteJokes = [];

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
        const newState = [...likedJoke, joke.joke]
        setLikedJoke(
            newState
        );
        localStorage.setItem("jokes", JSON.stringify(newState))
        favoriteJokes = localStorage.getItem("jokes", JSON.stringify(newState));
        console.log(newState)
        console.log(favoriteJokes)
    }
    // const favoritesList = (favoriteJokes.map((joke) => (
    //     <p>Hello, {joke} from the world</p>
    // )))


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
            <div className="joke" ><button style={iconStyles} onClick={likeJoke} >Like</button >{joke.joke} </div>
            <div>
                <div className='fav-joke'>
                    <div>
                        {favoriteJokes.map((item, index) => {
                            return <div key={index}>
                                <h3>{item}</h3>
                            </div>
                        })}
                    </div>
                    {/* <div>{favoriteJokes}</div> */}
                </div>
            </div>


        </div>

    )
}

export default ApiButton;

