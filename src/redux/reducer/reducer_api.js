const initialState = {
  list: [],
  is_fetch: false,
};

const reducer_getAPI = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_PAGE1':
      const newList = [...action.payload];

      return { ...state, list: newList, is_fetch: true };

    default:
      return state;
  }
};

export default reducer_getAPI;
