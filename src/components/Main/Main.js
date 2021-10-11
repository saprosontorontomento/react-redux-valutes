import React from 'react';


import Header from '../Header/Header';
import Valutes from '../Valutes/Valutes';
import './Main.scss'

const Main = () => {
    // const dispatch = useDispatch();
    // const valutes =  useSelector(valutesSelector);
    // const date = useSelector(dateSelector);


  
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