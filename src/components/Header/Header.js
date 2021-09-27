import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <button className="header__btn">Valutes</button>
            <button className="header__btn">News</button>
        </div>
    );
};

export default Header;