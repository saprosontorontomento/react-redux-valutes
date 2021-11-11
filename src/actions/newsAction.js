import { ADD_NEWS } from './actionTypes';
const axios = require('axios');

export const URL = 'https://jsonplaceholder.typicode.com/posts';

export const getNews = () => { // изменяет, фильтрует. Стреляет из редюсера
    return async (dispatch) => {
        try {
            const resp = await axios.get(URL);
            dispatch({type: ADD_NEWS, payload: resp.data});

        } catch (error) {
            throw new Error(`Не выходит получить новости`);
        }
    }
}
