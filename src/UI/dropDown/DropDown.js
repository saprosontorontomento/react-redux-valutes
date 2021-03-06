import React, { useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Spinner from '../../components/Valutes/Spinner';

import { useDispatch, useSelector } from 'react-redux';
import { getValutes } from '../../actions/valuteAction';
import { valutesSelector } from '../../selectors';
import './DropDown.scss';



const DropDown = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    const dropDownRef = useRef(null);
    const onDropDown = () => setIsActive(!isActive);
    
    const valutes = useSelector(valutesSelector);
    const dispatch = useDispatch()
    
    const arrValutes = Object.values(valutes);
    
    useEffect(() => {
        dispatch(getValutes())
        .then(
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [dispatch])

    const onAddBtn = (e, item) => {
        e.preventDefault();
        console.log(item.CharCode);
    }

    const filteredValutes = arrValutes.filter(valute => {
        return valute.CharCode.toLowerCase().includes(search.toLowerCase());
    })  

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
                    <ArrowDropDownIcon />
                </Button>
                <div ref={dropDownRef} className={`dropdown ${isActive ? 'active' : ''}`}>
                    <ul>
                        <div className="dropdown__inputs">
                            <TextField 
                                sx={{
                                    width: 500,
                                    maxWidth: '100%',
                                }}
                                autoComplete='off'
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                id="outlined-search" 
                                label="Поиск..." 
                                type="search" 
                            />
                        </div>
                        {   
                            filteredValutes.map(item => {
                                return (
                                    <li 
                                        key={item.ID} 
                                        className="dropdown_item"
                                        >
                                        <a href="/#" onClick={(e) => onAddBtn(e, item)}>{item.Name} <span>{item.CharCode}</span> </a>
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