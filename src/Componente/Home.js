
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../stiluri/Home.css';

const Home = () => {
  return (
    <div className="pagina">
      <div className="header">
        <h1>Welcome, UserName!</h1>
        <div className="button-container">
          <button className="butonadd"><FontAwesomeIcon icon={faPlus} /> Create a post</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
