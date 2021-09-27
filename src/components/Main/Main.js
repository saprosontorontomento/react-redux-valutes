import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getValutes } from '../../actions';
import { valutesSelector, dateSelector } from '../../selectors';

import Header from '../Header/Header';
import Valutes from '../Valutes/Valutes';
import './Main.scss'

const Main = () => {
    const dispatch = useDispatch();
    const valutes =  useSelector(valutesSelector);
    const date = useSelector(dateSelector);

    
    console.log(valutes);
    console.log(date);

    useEffect(() => {
        dispatch(getValutes())
        
    }, [dispatch])

  
    return (
        <div className="container">
            <Header/>
            <div className="main">
                <Valutes/>
            </div>
        </div>
    );
};

export default Main;