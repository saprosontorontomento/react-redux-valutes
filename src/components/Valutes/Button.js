import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from 'react-redux';

import { getValutes } from '../../actions/valuteAction';
import { popularValutesSelector, valutesSelector } from '../../selectors';
import Spinner from './Spinner';

export default function BasicButtonGroup() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    const valutes = useSelector(valutesSelector);
    const dispatch = useDispatch();
    const popularValutes = useSelector(popularValutesSelector);
    
    // console.log(popularValutes);    
    // console.log(valutes);
    // console.log(Object.values(valutes));

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
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
                popularValutes.map(item => (
                    <Button
                        key={item.ID}
                        size="large" 
                        variant="outlined" 
                        >{item.CharCode}
                    </Button>
                ))
            }
            <Button >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
            </Button>
        </ButtonGroup>
    );
    }
}