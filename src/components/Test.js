import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getValutes } from '../actions';
import { valutesSelector, dateSelector } from '../selectors';

const Test = () => {
    const dispatch = useDispatch();
    const valutes =  useSelector(valutesSelector);
    const date = useSelector(dateSelector);

    console.log(valutes);
    console.log(date);

    useEffect(() => {
        dispatch(getValutes())
        
    }, [])
    return (
        <div>
            hyi
        </div>
    );
};

export default Test;