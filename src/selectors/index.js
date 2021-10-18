const popularValute = ['USD', 'GBP', 'JPY', 'AUD'];

export const valutesSelector = (state) => state.valutes.valutes; //  мост между state и components . Так мне нужно из state что-то и отдает some

export const popularValutesSelector = (state) => {
    return Object.values(state.valutes.valutes).filter(item => {
        return popularValute.includes(item.CharCode)
    });
};

export const newsSelector = (state) => state;
