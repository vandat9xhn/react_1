import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from '../saga/ReduxSaga';
//
import reducer_saga from './ReducerSaga';
import reducer_count_cart from './reducer_count_cart';
import PLCompareSlice from '../slice/PLCompareSlice';
import FsCountCartSlice from '../slice/FsCountCartSlice';

//
const rootReducer = combineReducers({
    list2: reducer_saga,
    count_cart_obj: reducer_count_cart,
    pl_compare_obj: PLCompareSlice,
    count_cart_slice_obj: FsCountCartSlice,
});

//
// const devtools_compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//
const customMiddleware = (store) => (next) => (action) => {
    if (Array.isArray(action.payload)) {
        // console.log('Success');
    }

    return next(action);
};

//
const sagaMiddleware = createSagaMiddleware();

//
// const enhance = devtools_compose(
//   applyMiddleware(sagaMiddleware, thunk, customMiddleware),
// );

//
// const store = createStore(rootReducer, enhance);
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, thunk, customMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
