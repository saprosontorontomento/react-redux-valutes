import { ADD_VALUTE } from "../actions/actionTypes";

const initialState = { // что в нём есть или будет. ЧТО ПРИМИТЬСЯ
    valutes: [],
    date: null,
    hui: false,
    ebalo: null
};

export default function valute(state = initialState, action) { // могу поменять данные с запроса, фильтровать. Раскинули и обработали запрос
    switch (action.type) {
        case ADD_VALUTE:
            return {
                ...state,
                valutes: action.payload.Valute,
                date: action.payload.Date,
                hui: action.payload.Timestamp
            }
        default:
            return state;
    }
}