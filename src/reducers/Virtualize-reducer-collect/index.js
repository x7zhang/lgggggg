import { combineReducers } from 'redux';
import rtmReducer from 'RTM-reducer';
import lemsReducer from 'LEMS-reducer';
import lvnetReducer from 'LVNET-reducer';
import vmReducer from 'VM-reducer';

const virtualReducer = combineReducers({
	rtmReducer, lemsReducer, lvnetReducer, vmReducer
});

export default virtualReducer;