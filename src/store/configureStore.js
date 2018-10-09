import { applyMiddleware , createStore } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

const configureStore = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
);

export default configureStore;