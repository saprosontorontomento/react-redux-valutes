import React from 'react';
import BasicButtonGroup from './Button';

import './Valuttes.scss';

const Valutes = () => {
    return (
        <div className="main__container">
            <div className="main__box">
                <div className="main__valutes">
                    <BasicButtonGroup/>
                </div>
                <div className="main__inputs">
                    <input type="text" className="main__input" />
                </div>
            </div>
            <div className="main__box">
                <div className="main__valutes">
                    <BasicButtonGroup/>
                </div>
                <div className="main__inputs">
                    <input type="text" className="main__input" />
                </div>
            </div>
        </div>
    );
};

export default Valutes;