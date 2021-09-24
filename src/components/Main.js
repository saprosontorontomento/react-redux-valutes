import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getValutes } from '../actions';
import { valutesSelector, dateSelector } from '../selectors';
import BasicButtonGroup from './Button/Button';

const Main = () => {
    const dispatch = useDispatch();
    const valutes =  useSelector(valutesSelector);
    const date = useSelector(dateSelector);

    console.log(valutes);
    console.log(date);

    useEffect(() => {
        dispatch(getValutes())
        
    }, [])
    return (
        <div className="main">
            <div className="main__btn">
                <BasicButtonGroup/>
                <BasicButtonGroup/>
            </div>
        </div>
    );
};

export default Main;