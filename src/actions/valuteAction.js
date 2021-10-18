import { ADD_VALUTE, ADD_POPULAR_VALUTE } from './actionTypes';
const axios = require('axios');

const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const getValutes = () => { // изменяет, фильтрует. Стреляет из редюсера
    return async (dispatch) => {
        try {
            const resp = await axios.get(URL);
            dispatch({type: ADD_VALUTE, payload: resp.data});

        } catch (error) {
            throw new Error(`Не выходит получить курс валют`);
        }
    }
}

export const getPopularValutes = () => {
    return async (dispatch) => {
        try {
            const resp = await axios.get(URL);
            dispatch({type: ADD_POPULAR_VALUTE, payload: resp.data});
            
        } catch (error) {
            throw new Error(`Не выходит получить популярные валюты`);
        }
    }
}
