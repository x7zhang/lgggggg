import {
	
	GET_VMLIST_SUCCESS, GET_VMLIST_FAILED,
	CREATE_NEW_VM, CREATE_VM_FAILED, DELETE_VM, DELETE_VM_FAILED,
	GET_TARGET_VM, TARGET_VM_FAILED, 
	GET_VM_DETAILS, GET_VMDETAILS_FAILED,

} from '../constants/virtual-const';

const initialVMState = [ // temperory list
	vmList: [
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
];

export default function vmReducer(state=initialVMState, action) {
	switch (action.type) {
		case GET_VMLIST_SUCCESS:
		  return {
		  	...state,
		  	vmList: action.results,
		  	fetching: false,
		  	fetched: true,
		  	err: null
		  };

		case GET_VMLIST_FAILED:
		  return {
		  	...state,
		  	fetching: false,
		  	fetched: true,
		  	err: action.err
		  };

		case CREATE_NEW_VM:
		  return {
		  	...state,
		  	vmList = vmList.append(action.query)
		  };

		case CREATE_VM_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };

		case DELETE_VM:
		  return {
		  	...state,
		  	vmList = [vmList which id/ name != action.query]
		  };

		case DELETE_VM_FAILED:
		  return {
		  	...state,
		  	err = action.err
		  };

		case GET_TARGET_VM:
		  return {
		  	...state,
		  	vmList = [vmlist which id/name == action.query]
		  };

		case TARGET_VM_FAILED:
		  return {
		  	...state,
		  	err: action.err
		  };
		// case details to be continue...
		
		default:
		  return state;
	}
}