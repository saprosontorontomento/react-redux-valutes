import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../actions/newsAction';
import { newsSelector } from '../../selectors';
import MyBtn from '../../UI/button/MyBtn';
// import MyModal from '../../UI/modal/MyModal';


import Header from '../Header/Header';
// import NewsFilter from './NewsFilter';

// import NewsForm from './NewsForm';

import './NewsItem.scss';
// import NewsList from './NewsList';

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(newsSelector);
    
    

    useEffect(() => {
        dispatch(getNews())
        
    }, [dispatch])

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

    return (
        <div>
            <Header/>
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