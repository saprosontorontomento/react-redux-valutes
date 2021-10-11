import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/newsAction';
import { newsSelector } from '../../selectors';
import MyModal from '../../UI/modal/MyModal';


import Header from '../Header/Header';
import NewsFilter from './NewsFilter';

import NewsForm from './NewsForm';

import './NewsItem.scss';
import NewsList from './NewsList';

const News = () => {
    const dispatch = useDispatch();
    const newsTest = useSelector(newsSelector);
    console.log(newsTest);

    useEffect(() => {
        dispatch(getNews())
        
    }, [])

    const [news, setNews] = useState([
        {id: 1, title: 'JavaScript', body: 'NEWS NEWS NEWS NEWS'},
        {id: 2, title: 'Python 2', body: ' HA HA HA HA HA'},
        {id: 3, title: 'PHP 3', body: '1'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})



    const sortedNews = useMemo(() => {
        if(filter.sort) {
            return [...news].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return news;
    }, [filter.sort, news]);

    const sortedAndSearchedNews = useMemo(() => {
        return sortedNews.filter(newsItem => newsItem.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedNews]);

    const createNews = (newNews) => {
        setNews([...news, newNews]);
    }

    const removeNews = (newsItem) => {
        setNews(news.filter(item => item.id !== newsItem.id))
    }

    return (
        <div>
            <Header/>
            <MyModal>
                asdasdasd
            </MyModal>
            <NewsForm create={createNews}/>
            <hr />
            <NewsFilter
                filter={filter}
                setFilter={setFilter}
            />
            <NewsList remove={removeNews}  news={sortedAndSearchedNews} title='Список новостей 1'/>
        </div>
    );
};

export default News;