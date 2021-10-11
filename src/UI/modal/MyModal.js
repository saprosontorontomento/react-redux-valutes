import React from 'react';

import './MyModal.scss';

const MyModal = ({children}) => {
    return (
        <div className='modal modal_active'>
            <div className="modal__content">
                {children}
            </div>
        </div>
    );
};

export default MyModal;