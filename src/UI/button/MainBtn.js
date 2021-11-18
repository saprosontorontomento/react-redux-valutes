import React, { useState, useRef } from 'react';
import './MainBtn.scss';

const MainBtn = ({children}) => {

    const [isActive, setIsActive] = useState(false);

    const onChangeClassBtn = () => setIsActive(!isActive);
    const activeClassBtnRef = useRef(null);

    return (
        <div 
            ref={activeClassBtnRef}
            onClick={onChangeClassBtn}
            className={`header__button ${isActive ? 'active' : ''}`}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </div>
    );
};

export default MainBtn;