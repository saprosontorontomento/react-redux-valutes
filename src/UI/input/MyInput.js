import React from 'react';
import './MyInput.scss';
const MyInput = (props) => {
    return (
        <input type="text" className='my__input'  {...props}/>
    );
};

export default MyInput;