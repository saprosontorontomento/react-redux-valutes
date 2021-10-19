import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from 'react-redux';

import { getPopularValutes } from '../../actions/valuteAction';
import { popularValutesSelector } from '../../selectors';
import Spinner from './Spinner';
import DropDown from '../../UI/dropDown/DropDown';

export default function BasicButtonGroup() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    const dispatch = useDispatch();
    const popularValutes = useSelector(popularValutesSelector);
    

    useEffect(() => {
        dispatch(getPopularValutes())
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
            <DropDown/>
        </ButtonGroup>
    );
    }
}