import {
  combineReducers, createStore, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from '../saga/ReduxSaga';
// 
import reducer_saga from './ReducerSaga';
import reducer_count_cart from './reducer_count_cart';

// Combine reducers
const rootReducer = combineReducers({
  list2: reducer_saga,
  count_cart_obj: reducer_count_cart,
});

// window dev
const devtools_compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Custom middleware
const customMiddleware = (store) => (next) => (action) => {
  if (Array.isArray(action.payload)) {
    // console.log('Success');
  }

  return next(action);
};

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// Enhance
const enhance = devtools_compose(
  applyMiddleware(sagaMiddleware, thunk, customMiddleware),
);

// Store:
const store = createStore(rootReducer, enhance);

sagaMiddleware.run(watcherSaga);

export default store;
