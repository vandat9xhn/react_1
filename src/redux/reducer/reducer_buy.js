const initialState = {
    list: [],
    is_fetch: false,
};

//
const reducer_buy = (state = initialState, action) => {
    const {list} = state

    switch (action.type) {
        //
        case 'GET_BUY':
            return { list: action.payload, is_fetch: true };

        //
        case 'ADD_BUY':
            return {...state, list: [...list, action.payload]};

        //
        case 'CHANGE_BUY':
            return { ...state, list: action.payload};
        
        //
        case 'DELETE_BUY':
            const pack_ix = action.payload
            list.splice(pack_ix, 1)
            return { ...state, list: list};

        //
        default:
            return state;
    }
};

export default reducer_buy;
