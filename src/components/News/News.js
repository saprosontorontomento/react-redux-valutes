import React, { useState, useMemo } from 'react';
import MyInput from '../../UI/input/MyInput';
import MySelect from '../../UI/select/MySelect';
import Header from '../Header/Header';

import NewsForm from './NewsForm';

import './NewsItem.scss';
import NewsList from './NewsList';

const News = () => {

    const [news, setNews] = useState([
        {id: 1, title: 'JavaScript', body: 'NEWS NEWS NEWS NEWS'},
        {id: 2, title: 'Python 2', body: ' HA HA HA HA HA'},
        {id: 3, title: 'PHP 3', body: '1'},
    ])

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');



    const sortedNews = useMemo(() => {
        if(selectedSort) {
            return [...news].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return news;
    }, [selectedSort, news]);

    const sortedAndSearchedNews = useMemo(() => {
        return sortedNews.filter(newsItem => newsItem.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedNews]);

    const createNews = (newNews) => {
        setNews([...news, newNews]);
    }

    const removeNews = (newsItem) => {
        setNews(news.filter(item => item.id !== newsItem.id))
    }
 
    const sortNews = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div>
            <Header/>
            <div>
                <NewsForm create={createNews}/>
                <hr />
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Поиск'
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortNews}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {sortedAndSearchedNews.length
                ? <NewsList remove={removeNews}  news={sortedAndSearchedNews} title='Список новостей 1'/>
                : <h1 className='news__h1'>Новости не найдены!</h1>
            }
        </div>
    );
};

export default News;