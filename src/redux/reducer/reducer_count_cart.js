//
const initialState = {
    count_cart: 0,
    count_checked: 0,
    has_fetched: false,
};

//
const reducer_count_cart = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNT_CART':
            return {
                count_cart: action.payload,
                has_fetched: true,
            };

        case 'COUNT_CART_CHANGE':
            return {
                count: state.count_cart + action.payload,
                has_fetched: true,
            };

        //
        default:
            return state;
    }
};

export default reducer_count_cart;
