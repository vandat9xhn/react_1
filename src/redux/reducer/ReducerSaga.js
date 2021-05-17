const initialState = {
  list: [],
  fetching: false,
  error: null,
};

const reducer_saga = (state = initialState, action) => {
  switch (action.type) {
    case 'API_REQUEST':
      return { ...state, fetching: true };

    case 'API_SUCCESS':
      const newList = [...action.payload];

      return { ...state, list: newList, fetching: false };

    case 'API_FAIL':
      return { ...state, error: action.error, fetching: false };

    default:
      return state;
  }
};

export default reducer_saga;
