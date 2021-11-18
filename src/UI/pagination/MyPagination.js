import React from 'react';
import { Pagination, Stack } from '@mui/material';

const MyPagination = ({page, handleChange, totalPages}) => {
    return (
        <div>
            {
                <Stack spacing={2}>
                    <Pagination 
                        sx={{
                            margin: '10px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                        size='large'
                        page={page} 
                        onChange={handleChange}
                        count={totalPages}
                        color="primary" 
                        showFirstButton 
                        showLastButton 
                    />
                </Stack>
            }
        </div>
    );
};

export default MyPagination;