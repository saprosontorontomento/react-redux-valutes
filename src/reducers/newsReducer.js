import { ADD_NEWS } from "../actions/actionTypes";

const initialState = { // что в нём есть или будет. ЧТО ПРИМИТЬСЯ
    news: [],
    headers: {}
};

export default function news(state = initialState, action) { // могу поменять данные с запроса, фильтровать. Раскинули и обработали запрос
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: action.payload.data,
                headers: action.payload.headers,
            }
        default:
            return state;
    }
}