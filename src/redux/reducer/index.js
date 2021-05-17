import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// 
import reducer_getAPI from './reducer_api';
import watcherSaga from '../saga/ReduxSaga';
import reducer_saga from './ReducerSaga';
import reducer_cart from './reducer_cart';
import reducer_buy from './reducer_buy';
import reducer_cancel from './reducer_cancel';
import reducer_count_cart from './reducer_count_cart';

// Combine reducers
const rootReducer = combineReducers({
  // list1: reducer_getAPI,
  list2: reducer_saga,
  count_cart_obj: reducer_count_cart,
  // cart: reducer_cart,
  // buy: reducer_buy,
  // cancel: reducer_cancel,
});
// window dev
const devtools_compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Custom middleware
const my_middleware = (store) => (next) => (action) => {
  if (Array.isArray(action.payload)) {
    // console.log('Success');
  }

  return next(action);
};
// saga middleware
const sagaMiddleware = createSagaMiddleware();
// Enhance
const enhance = devtools_compose(
  applyMiddleware(sagaMiddleware, thunk, my_middleware),
);

// Store:
const store = createStore(rootReducer, enhance);

sagaMiddleware.run(watcherSaga);
export default store;
