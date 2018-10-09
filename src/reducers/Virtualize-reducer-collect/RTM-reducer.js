import {
	GET_DEFAULT_RTM, GET_DEFAULT_RTM_FAILED,

	//CREATE_NEW_RTM, 
	CREATE_RTM_SUCCESS, CREATE_RTM_FAILED,
	DELETE_RTM_SUCCESS, DELETE_RTM_FAILED,

} from '../constants/virtual-const';


const rtmInitialState = {
	projectedSize: 0,
	allocatedSize: 0,
	LEMS: 0,
	dnaAmplification: 0%,
	rtmStatus: '',
	err: null
};


export default function rtmReducer(state=rtmInitialState, action) {
	switch (action.type) {
		case GET_DEFAULT_RTM:
		  return {           //State should update later
		  	...state,
		  	projectedSize: action.results.projectedSize,
		  	allocatedSize: action.results.allocatedSize,
		  	LEMS: action.results.lems,
		  	dnaAmplification: action.results.dnaAmplification,
		  	rtmStatus: action.results.status
		  };

		case GET_DEFAULT_RTM_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };

		case CREATE_RTM_SUCCESS:
		  return {
		  	...state,
		  	projectedSize: action.query.projectedSize,
		  	allocatedSize: action.query.allocatedSize,
		  	LEMS: action.query.LEMS,
		  	dnaAmplification: action.query.dnaAmplification,
		  	rtmStatus: action.query.rtmStatus,
		  	err: null
		  };

		case CREATE_RTM_FAILED: 
		  return {
		  	err: action.err
		  };

		case DELETE_RTM_SUCCESS:
		  return {
		  	...state,
		  	projectedSize: 0,
			allocatedSize: 0,
			LEMS: 0,
			dnaAmplification: 0%,
			rtmStatus: '',
			err: null
		  };

		case DELETE_RTM_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };


		default:
		  return state; 
	}
}