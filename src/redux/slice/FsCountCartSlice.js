import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//
import { API_FashionCountCart } from '../../api/api_django/fashion/APIFashionToken';

//
const initialState = {
    count_cart: 0,
    is_fetching: false,
    has_fetched: false,
};

//
export const FsCountCartThunk = createAsyncThunk('fs/count_cart', async () => {
    const res = await API_FashionCountCart();

    return res.data;
});

//
export const FsCountCartSlice = createSlice({
    name: 'count_cart',
    initialState: initialState,
    reducers: {
        FsCountUpCartReducer: (state, action) => {
            state.count_cart += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(FsCountCartThunk.pending, (state) => {
            state.is_fetching = true;
        });
        builder.addCase(FsCountCartThunk.fulfilled, (state, action) => {
            state.count_cart = action.payload;
            state.has_fetched = true;
            state.is_fetching = false;
        });
        builder.addCase(FsCountCartThunk.rejected, (state) => {
            state.is_fetching = false;
        });
    },
});

export const { FsCountUpCartReducer } = FsCountCartSlice.actions;

export default FsCountCartSlice.reducer;
