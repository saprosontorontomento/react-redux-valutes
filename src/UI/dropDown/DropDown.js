import React, { useRef, useState, useEffect } from 'react';

import Button from "@mui/material/Button";

import Spinner from '../../components/Valutes/Spinner';

import { useDispatch, useSelector } from 'react-redux';
import { getValutes } from '../../actions/valuteAction';
import { valutesSelector } from '../../selectors';
import './DropDown.scss';



const DropDown = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(null)

    const dropDownRef = useRef(null);
    
    const onDropDown = () => setIsActive(!isActive);
    
    const valutes = useSelector(valutesSelector);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getValutes())
        .then(
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [dispatch])


    if (error) {
        return <div className="err">Ошибка : {error.message}</div>
    } else if (!isLoaded) {
        return <Spinner/>
    } else {
        return (
            <div className="dropdown__container">
                <Button
                    variant="contained" 
                    className='dropdown__trigger' 
                    onClick={onDropDown}
                    >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
                    </span>
                </Button>
                <div ref={dropDownRef} className={`dropdown ${isActive ? 'active' : ''}`}>
                    <ul>
                        <div className="dropdown__inputs">
                            <input type="text" className="dropdown__input" placeholder='поиск'/>
                        </div>
                        {   
                            Object.values(valutes).map(item => {
                                return (
                                    <li 
                                        key={item.ID} 
                                        class="dropdown_item"
                                        >
                                        <a href="/#">{item.Name} <span className='dropdown__'>{item.CharCode}</span> </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
};

export default DropDown;