import React, { useState } from 'react';
import BasicButtonGroup from './Button';

import './Valuttes.scss';

const Valutes = () => {


    const [value, setValue] = useState('RUB');


    return (
        <div className="main__container">
            <div className="main__box">
                <div className="main__valutes">
                    <BasicButtonGroup/>
                </div>
                <div className="main__inputs">
                    <input 
                        type="text" 
                        className="main__input" 
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
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