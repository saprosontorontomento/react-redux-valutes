const popularValute = ['USD', 'GBP', 'JPY', 'AUD', 'EUR'];

export const valutesSelector = (state) => state.valutes.valutes; //  мост между state и components . Так мне нужно из state что-то и отдает some

export const popularValutesSelector = (state) => {
    return Object.values(state.valutes.valutes).filter(item => {
        return popularValute.includes(item.CharCode)
    });
};

export const newsSelector = (state) => state.news.news;

export const headersSelector = (state) => state.news.headers;
