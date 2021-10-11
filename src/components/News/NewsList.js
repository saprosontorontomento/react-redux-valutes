import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({news, title, remove}) => {

 


    return (
        <div>
            <h1 className='news__h1'>
                 {title}
            </h1>
            {news.map((newsItem, index) => 
                    <NewsItem remove={remove} number={index + 1} newsItem={newsItem} key={newsItem.id}/>
                )}
        </div>
    );
};

export default NewsList;