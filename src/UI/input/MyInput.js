import React from 'react';
import './MyInput.scss';


import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const MyInput = (props) => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <FormControl fullWidth sx={{ m: 2 }}>
          <InputLabel htmlFor="outlined-adornment-amount">рубли</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">RUB</InputAdornment>}
            label="Amount"
          />
        </FormControl>
    );
};

export default MyInput;