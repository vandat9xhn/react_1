//
const initial_state = {
    z_index: 'var(--z-index-lv1)',
};

//
export const reducerDivFix = (state = initial_state, action) => {
    switch (action.type) {
        case 'Z_INDEX':
            return { ...state, z_index: action.payload };

        default:
            return state;
    }
};
