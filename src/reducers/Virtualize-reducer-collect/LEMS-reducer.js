import {

	GET_LEMSLIST_SUCCESS, GET_LEMSLIST_FAILED,
	CREATE_NEW_LEMS, CREATE_LEMS_FAILED, DELETE_LEMS, DELETE_LEMS_FAILED,
	GET_TARGET_LEM, TARGET_LEM_FAILED,

} from '../constants/virtual-const';

const lemsInitialState = { // should be lemsList: []
	lemsList: [
		{
			name: '',
			unit: '',
			size: ,
			rtm_name: ''
		}
	],
	fetching: false,
	fetched: true,
	err: null
};


export default function lemsReducer(state=lemsInitialState, action) {
	switch (action.type) {

		case GET_LEMSLIST_SUCCESS:
		  return {
		  	...state,
		  	lemsList: action.results,
		  	fetching: false,
		  	fetched: true,
		  	err: null
		  };

		case GET_LEMSLIST_FAILED:
		  return {
		  	...state,
		  	fetching: false,
		  	fetched: true,
		  	err: action.err
		  };

		case CREATE_NEW_LEMS:
		  return {
		  	...state,
		  	lemsList = lemsList.append(action.query)
		  };

		case CREATE_LEMS_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };

		case DELETE_LEMS:
		  return {
		  	...state,
		  	lemsList = [lemsList which id/ name != action.query]
		  };

		case DELETE_LEMS_FAILED:
		  return {
		  	...state,
		  	err = action.err
		  };

		case GET_TARGET_LEM:
		  return {
		  	...state,
		  	lemsList = [lemlist which id/name == action.query]
		  };

		case TARGET_LEM_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };

		default:
		  return state;

	}
};