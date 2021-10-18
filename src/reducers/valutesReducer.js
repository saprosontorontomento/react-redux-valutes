import { ADD_VALUTE, ADD_POPULAR_VALUTE } from "../actions/actionTypes";

const initialState = { // что в нём есть или будет. ЧТО ПРИМИТЬСЯ
    valutes: [],
};

export default function valute(state = initialState, action) { // могу поменять данные с запроса, фильтровать. Раскинули и обработали запрос
    switch (action.type) {
        case ADD_VALUTE:
            return {
                ...state,
                valutes: action.payload.Valute,
            }
        case ADD_POPULAR_VALUTE: 
            return {
                ...state,
                valutes: action.payload.Valute
            }
        default:
            return state;
    }
}