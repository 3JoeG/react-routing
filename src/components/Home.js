import React from 'react';
import {Router, Link } from '@reach/router';

const Home = () => {
    return (
        <div>
          <h2 className="text-center"> In the nav bar add a word or number</h2>
          <p className="text-center">ex. localhost:3000/(your word or number here)> </p>

          <h2 className="text-center"> To add color add this:</h2>
          <p className="text-center">localhost:3000/(word or number)/(text color)/(background color)</p>  
        </div>
    );
};



export default Home;