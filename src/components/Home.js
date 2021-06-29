import React from 'react';
// import Jokes from './Jokes';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return <div>
        <div className="home-container" >
            <img className="chuck-hero" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1624892734/suqh4az2xq9i3hjbdcoo.jpg" alt="chuck norris" />
            <Link className="home-button" to="/quotes">
                Click to see More
            </Link>
            {/* <Jokes /> */}
        </div >


    </div>

}
export default Home;