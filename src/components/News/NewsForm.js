import React, { useState } from 'react';

import MyBtn from '../../UI/button/MyBtn';
import MyInput from '../../UI/input/MyInput';

const NewsForm = ({create, loading, setLoading}) => {

    const [newsItem, setNewsItem] = useState({title: '', body: ''});

    const addNewNews = (e) => {
        e.preventDefault();
        const newNews = {
            ...newsItem, 
            id: Date.now()};
        create(newNews)
        setNewsItem({title: '', body: ''});
    }

 
    return (
        <div>
            <form action="">
                <MyInput 
                    value={newsItem.title}
                    onChange={e => setNewsItem({...newsItem, title: e.target.value})}
                    type="text" 
                    placeholder='Название новости' 
                />
                <MyInput 
                    value={newsItem.body}
                    onChange={e => setNewsItem({...newsItem, body: e.target.value})}
                    type="text" 
                    placeholder='Описание новости' 
                />
                
                <MyBtn 
                    onClick={addNewNews}
                    checked={loading} 
                    onChange={() => setLoading(!loading)}>Создать новость</MyBtn>
            </form>
        </div>
    );
};

export default NewsForm;