//
const initialState = {
    is_register: false,
};

//
const reducerLocation = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                is_register: action.payload,
            };

        default:
            return state;
    }
};

export default reducerLocation;
