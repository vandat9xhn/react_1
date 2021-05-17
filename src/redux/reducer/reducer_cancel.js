const initialState = {
    list: [],
    is_fetch: false,
};

//
const reducer_cancel = (state = initialState, action) => {
    const {list} = state

    switch (action.type) {
        //
        case 'GET_CANCEL':
            return { list: action.payload, is_fetch: true };

        //
        case 'ADD_CANCEL':
            return {...state, list: [...list, action.payload]};

        //
        case 'CHANGE_CANCEL':
            return { ...state, list: action.payload};
        
        //
        case 'DELETE_CANCEL':
            const pack_ix = action.payload
            list.splice(pack_ix, 1)
            return { ...state, list: list};

        //
        default:
            return state;
    }
};

export default reducer_cancel;
