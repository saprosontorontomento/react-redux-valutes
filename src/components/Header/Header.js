import React from 'react';
import './Header.scss';

import { Link } from "react-router-dom";
import MainBtn from '../../UI/button/MainBtn';
import '../../UI/button/MainBtn.scss';

const Header = () => {

    
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav__list" >
                    <li className="nav__item">
                        <Link to='/valutes'><MainBtn>Valutes</MainBtn></Link>
                    </li>
                    <li className="nav__item">
                        {/* <Link to='/news'><button className="header__btn">News</button></Link> */}
                    </li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;