import React from 'react';
import './Header.scss';

import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <Link to='/valutes'><button className="header__btn">Valutes</button></Link>
            <Link to='/#'><button className="header__btn">News</button></Link>
        </div>
    );
};

export default Header;