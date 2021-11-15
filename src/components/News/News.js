import { Pagination, Stack } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/newsAction';
import { headersSelector, newsSelector } from '../../selectors';
import MyBtn from '../../UI/button/MyBtn';
import { getPageCount, getPagesArray } from '../../utils/pages';
// import MyModal from '../../UI/modal/MyModal';


import Header from '../Header/Header';
import Spinner from '../Valutes/Spinner';
// import NewsFilter from './NewsFilter';

// import NewsForm from './NewsForm';

import './News.scss';
// import NewsList from './NewsList';

const News = () => {
    // const [totalCount, setTotalCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null)

    const [newsInfo, setNewsInfo] = useState([]) ;
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    const dispatch = useDispatch();
    
    const news = useSelector(newsSelector);
    const headers = useSelector(headersSelector);

    let pagesArray = getPagesArray(totalPages)
 
    useMemo(() => {
        const totalCount = headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    }, [headers, limit]);
    
    useEffect(() => {
        dispatch(getNews(limit, page))
    }, [dispatch, limit, page])
 
    console.log(pagesArray);
    console.log(totalPages);

    const handleChange = (value) => {
        setPage(value);
    };
    

    if (error) {
        return <div className="err">Ошибка : {error.message}</div>
    } else if (!isLoaded) {
        return <Spinner/>
    } else {
        return (
            <div>
                <Header/>
                {
                    news.map(item => {
                        return (
                            <div 
                                className="post" 
                                key={item.id}
                            >
                                <div className="post__content">
                                    <strong>{item.id}. {item.title}</strong>
                                    <div>
                                        {item.body}
                                    </div>
                                </div>
                                <div className="post__btns">
                                    <MyBtn>
                                        Удалить
                                    </MyBtn>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='page__wrapper'>
                    {
                        <Stack spacing={2}>
                            <Pagination 
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