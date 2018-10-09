import {

	CREATE_NEW_LVNET, CREATE_LVNET_FAILED,
	DELETE_LVNET, DELETE_LVNET_FAILED,
	GET_TARGET_LVNET, TARGET_LVNET_FAILED,

} from '../constants/virtual-const';

const initialLVNET = {};

export default function lvnetReducer(state=initialLVNET, action) {
	switch (action.type) {
		case CREATE_NEW_LVNET:
		  return {
		  	...state,
		  	initalState related
		  };

		case CREATE_LVNET_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };

		case DELETE_LVNET:
		  return {
		  	...state,
		  	lvnetList = [lvnetList which id/ name != action.query]
		  };

		case DELETE_LVNET_FAILED:
		  return {
		  	... state,
		  	err: action.err
		  }

		case GET_TARGET_LVNET:
		  return {
		  	...state,
		  	lemsList = [lemlist which id/name == action.query]
		  };

		case TARGET_LVNET_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };
	}
}