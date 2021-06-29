import React from 'react';
import './Jokes.css';

const Jokes = (props) => {

    return (
        <ul>
            <li>
                {props.value}
            </li>
        </ul>
    )
}

export default Jokes;