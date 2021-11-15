import { ADD_NEWS } from './actionTypes';
const axios = require('axios');

export const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getNews = (limit = 10, page = 1) => { // изменяет, фильтрует. Стреляет из редюсера
    return async (dispatch) => {
        try {
            const resp = await axios.get(URL, {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            dispatch({type: ADD_NEWS, payload: {data: resp.data, headers: resp.headers}});

        } catch (error) {
            throw new Error(`Не выходит получить новости`);
        }
    }
}
