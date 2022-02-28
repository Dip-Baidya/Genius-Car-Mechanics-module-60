import React from 'react';
import notfound from '../../images/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%', height: '50%'}} src={notfound} alt="" />
            <Link to="/"><button> Go Back </button></Link>
        </div>
    );
};

export default NotFound;