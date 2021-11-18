import React from 'react';
import '../../components/News/News.scss';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div className="news__select">
            <select 
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option => 
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option> 
                )}
            </select>
        </div>
       
    );
};

export default MySelect;