import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/newsAction';
import { headersSelector, newsSelector } from '../../selectors';
import MyBtn from '../../UI/button/MyBtn';
import MyInput from '../../UI/input/MyInput';
import { getPageCount } from '../../utils/pages';
// import MyModal from '../../UI/modal/MyModal';
// import NewsForm from './NewsForm';

import Spinner from '../Valutes/Spinner';
import NewsFilter from './NewsFilter';


import './News.scss';
import BackToTop from '../../UI/button/ScrollTop';
import MyPagination from '../../UI/pagination/MyPagination';

const News = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');    
    const [filter, setFilter] = useState({sort: '', query: ''})
    const dispatch = useDispatch();
    
    const news = useSelector(newsSelector);
    const headers = useSelector(headersSelector);
 
    useMemo(() => {
        const totalCount = headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    }, [headers, limit]);
    
    useEffect(() => {
        dispatch(getNews(limit, page))
        .then(
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
            
        )
    }, [dispatch, limit, page])

    const handleChange = (event, value) => {
        setPage(value);
    };
   
    const sortedNews = useMemo(() => {
        if(filter.sort) {
            return [...news].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return news;
    }, [filter.sort, news]);

    const seachedNews = useMemo(() => {
        return sortedNews.filter(item => item.title.toLowerCase().includes(searchQuery))
    }, [sortedNews, searchQuery])

    
    if (error) {
        return <div className="err">Ошибка : {error.message}</div>
    } else if (!isLoaded) {
        return <Spinner/>
    } else {
        return (
            <div className="news">
                <div className="news__search">
                    <BackToTop/>
                    <MyInput
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <NewsFilter
                        filter={filter}
                        setFilter={setFilter}
                />
                {
                    seachedNews.map(item => {
                        return (
                            <div 
                                className="news__post" 
                                key={item.id}
                            >
                                <div>
                                    <strong>{item.id}. {item.title}</strong>
                                    <div>
                                        {item.body}
                                    </div>
                                </div>
                                <div>
                                    <MyBtn>
                                        Удалить
                                    </MyBtn>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    {
                       <MyPagination 
                            page={page} 
                            handleChange={handleChange} 
                            totalPages={totalPages}
                        />
                    }
                </div>
            </div>
        );
    }
};

export default News;


    // const [newsItem, setNewsItem] = useState([]);

    // const [filter, setFilter] = useState({sort: '', query: ''})



    // const sortedNews = useMemo(() => {
    //     if(filter.sort) {
    //         return [...news].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    //     }
    //     return news;
    // }, [filter.sort, news]);

    // const sortedAndSearchedNews = useMemo(() => {
    //     return sortedNews.filter(newsItem => newsItem.title.toLowerCase().includes(filter.query))
    // }, [filter.query, sortedNews]);

    // const createNews = (newNews) => {
    //     setNews([...news, newNews]);
    // }

    // const removeNews = (newsItem) => {
    //     setNewsItem(newsItem.filter(item => item.id !== newsItem.id))
    // }