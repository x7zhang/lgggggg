import { combineReducers } from 'redux';
import virtualReducer from './Virtualize-reducer-collect/index';

const rootReducer = combineReducers({
	virtualReducer,
});

export default rootReducer;