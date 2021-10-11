import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

const MyBtn = ({children, ...props}) => {

    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return (
        <LoadingButton {...props}
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        >
        {children}
        </LoadingButton>
    );
};

export default MyBtn;