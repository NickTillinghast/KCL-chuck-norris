import React, { useState } from 'react';
import './Jokes.css';

const Jokes = () => {

    const [likedJoke, setLikedJoke] = useState([]);

    const getLikedJokes = () => {
        let likedJokes = JSON.parse(localStorage.getItem("jokes") || "[]");
        setLikedJoke(likedJokes);
    }

    return (
        <div className="joke-container">
            <button className="btn-jokes" onClick={getLikedJokes}>Get All Liked Jokes</button>
            <ul>
                <li>

                    {likedJoke.map(j => (
                        <ul className="fav-joke-item">{j}</ul>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default Jokes;