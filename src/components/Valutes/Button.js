import React, { useEffect, useRef, useState } from 'react';
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
    const [activeButton, setActiveButton] = useState(null)

    const dispatch = useDispatch();
    const popularValutes = useSelector(popularValutesSelector);
    
    const btnRef = useRef(null)
    const handleActiveButton = (id) => setActiveButton(id); 
    const onValuteValue = (item) => {
        console.log(item.Value);
    }

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
        <ButtonGroup 
            ref={btnRef}
            variant="contained" 
            aria-label="outlined primary button group"
        >
            {/* <Button
                size="large" 
                onClick={handleActiveButton}
                variant={"contained"}
                >RUB
            </Button> */}
            {
                popularValutes.map(item => (
                    <Button
                        sx={{
                            
                        }}
                        key={item.ID}
                        size="large" 
                        onClick={() => {
                            handleActiveButton(item.ID);
                            onValuteValue(item);
                        }}
                        variant={activeButton === item.ID ? "contained" : "outlined"}
                        >{item.CharCode}
                    </Button>
                ))
            }
            <DropDown/>
        </ButtonGroup>
    );
    }
}