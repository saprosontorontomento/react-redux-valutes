import React from 'react';
import './Error.scss';
import image from './error.png';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <Link to="/" >
            <img className="error__img" src={image} alt="error"/>
            </Link>
        </div>
    );
};

export default Error;