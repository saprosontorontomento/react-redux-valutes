import React, { useState } from 'react';
import BasicButtonGroup from './Button';
// import Button from "@mui/material/Button";


import './Valuttes.scss';
import Button from "@mui/material/Button";

const Valutes = () => {
    
    const [value, setValue] = useState('');
    
    return (
        <div className="main__container">
            <div className="main__box">
                <div className="main__valutes">
                    <Button
                        size="large" 
                        variant={'contained'}
                        >RUB
                    </Button>
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