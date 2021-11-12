import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoNews, getNews } from '../../actions/newsAction';
import { infoNewsSelector, newsSelector } from '../../selectors';
import MyBtn from '../../UI/button/MyBtn';
import { getPageCount, getPagesArray } from '../../utils/pages';
// import MyModal from '../../UI/modal/MyModal';


import Header from '../Header/Header';
// import NewsFilter from './NewsFilter';

// import NewsForm from './NewsForm';

import './NewsItem.scss';
import NewsService from './NewsService';
// import NewsList from './NewsList';

const News = () => {
    // const [totalCount, setTotalCount] = useState(0);
    const [newsInfo, setNewsInfo] = useState([]) ;
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setTimit] = useState(10);
    const [page, setPage] = useState(1);
    let pagesArray = getPagesArray(totalPages)
    console.log(pagesArray);
    
    const dispatch = useDispatch();
    const news = useSelector(newsSelector);

    async function fetchNews() {
        const resp = await NewsService(limit, page);
        setNewsInfo(resp);
        const totalCount = resp.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    }

    console.log(totalPages);

    useEffect(() => {
        dispatch(getNews())
        
    }, [dispatch])

    return (
        <div>
            <Header/>
            <button
                onClick={fetchNews}
            >GET NEWS
            </button>
            <div></div>
            {
                news.map(item => {
                    return (
                        <div className="post" key={item.id}>
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
        </div>
    );
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