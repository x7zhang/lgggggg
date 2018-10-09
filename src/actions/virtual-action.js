import {
	GET_DEFAULT_RTM, GET_DEFAULT_RTM_FAILED,

	CREATE_NEW_RTM, CREATE_RTM_SUCCESS, CREATE_RTM_FAILED,
	DELETE_RTM_SUCCESS, DELETE_RTM_FAILED,

	GET_LEMSLIST_SUCCESS, GET_LEMSLIST_FAILED,
	CREATE_NEW_LEMS, CREATE_LEMS_FAILED, DELETE_LEMS, DELETE_LEMS_FAILED,
	GET_TARGET_LEM, TARGET_LEM_FAILED,

	CREATE_NEW_LVNET, CREATE_LVNET_FAILED,
	DELETE_LVNET, DELETE_LVNET_FAILED,
	GET_TARGET_LVNET, TARGET_LVNET_FAILED,

	
	GET_VMLIST_SUCCESS, GET_VMLIST_FAILED,
	CREATE_NEW_VM, CREATE_VM_FAILED, DELETE_VM, DELETE_VM_FAILED,
	GET_TARGET_VM, TARGET_VM_FAILED, 
	GET_VM_DETAILS, GET_VMDETAILS_FAILED,

} from '../constants/virtual-const';

import virtualService from '../services/virtual-service';


export const getRTM = () => {
	return dispatch => {
		virtualService
		  .getDefaultRTM()
		  .then(
			  res => {
			  	const results = res.body;
			  	dispatch({
			  		type: GET_DEFAULT_RTM, 
			  		results
			  	});
			  },

			  err => {
			  	dispatch({
			  		type: GET_DEFAULT_RTM_FAILED,
			  		err
			  	})
			  }
			)

	};
};

export const createNewRTM = (query) => {
	return dispatch => {
		dispatch({
			type: CREATE_NEW_RTM
		});
		virtualService
		  .createRTM(query)
		  .then(
		  	  dispatch({
		  	  	type: CREATE_RTM_SUCCESS, //? still need success????
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: CREATE_RTM_FAILED, 
		  	  		err
		  	  	})
		  	  }
		  	)
	};

};


export const deleteSpecificRTM = (query) => {
	return dispatch => {
		virtualService
		  .deleteRTM(query)
		  .then(
		  	  dispatch({
		  	  	type: DELETE_RTM_SUCCESS,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: DELETE_RTM_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const getLEMList = () => {
	return dispatch => {
		virtualService
		  .getListLEM()
		  .then(
		  	  res => {
		  	  	const results = res;
		  	  	dispatch({
		  	  		type: GET_LEMSLIST_SUCCESS, 
		  	  		results
		  	  	})
		  	  },
		  	  err => {
		  	  	dispatch({
		  	  		type: GET_LEMSLIST_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	);
	};
};

export const createNewLEM = (query) => { // create LEM will get respond from backend afte it success???
	return dispatch => {
		virtualService
		  .createLEM(query)
		  .then(
		  	  dispatch({
		  	  	type: CREATE_NEW_LEMS,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: CREATE_LEMS_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const deleteTargetLEM = (query) => {
	return dispatch => {
		virtualService
		  .deleteLEM(query)
		  .then(
		  	  dispatch({
		  	  	type: DELETE_LEMS,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: DELETE_LEMS_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const searchLEM = (query) => {
	return dispatch => {
		virtualService
		  .hasLEM(query)   // search ???? to be continue later
		  .then(
		  	  dispatch({
		  	  	type: GET_TARGET_LEM,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: TARGET_LEM_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const createNewLVNET = (query) => {
	return dispatch => {
		virtualService
		  .creatLVNET(query)
		  .then(
		  	  dispatch({
		  	  	type: CREATE_NEW_LVNET,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: CREATE_LVNET_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const deleteSpecificLVNET = (query) => {
	return dispatch => {
		virtualService
		  .deleteLVNET(query)
		  .then(
		  	  dispatch({
		  	  	type: DELETE_LVNET,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: DELETE_LVNET_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const searchLVNET = (query) => {
	return dispatch => {
		virtualService
		  .hasLVNET(query)   // search ???? to be continue later
		  .then(
		  	  dispatch({
		  	  	type: GET_TARGET_LVNET,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: TARGET_LVNET_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const getVMList = () => {
	return dispatch => {
		virtualService
		  .getListVM()
		  .then(
		  	  res => {
		  	  	const results = res;
		  	  	dispatch({
		  	  		type: GET_VMLIST_SUCCESS, 
		  	  		results
		  	  	})
		  	  },
		  	  err => {
		  	  	dispatch({
		  	  		type: GET_VMLIST_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	);
	};
};

export const createNewVM = (query) => { // create LEM will get respond from backend afte it success???
	return dispatch => {
		virtualService
		  .createVM(query)
		  .then(
		  	  dispatch({
		  	  	type: CREATE_NEW_VM,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: CREATE_VM_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const deleteTargeVM = (query) => {
	return dispatch => {
		virtualService
		  .deleteVM(query)
		  .then(
		  	  dispatch({
		  	  	type: DELETE_VM,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: DELETE_VM_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};

export const searchVM = (query) => {
	return dispatch => {
		virtualService
		  .hasVM(query)   // search ???? to be continue later
		  .then(
		  	  dispatch({
		  	  	type: GET_TARGET_VM,
		  	  	query
		  	  }),
		  	  err => {
		  	  	dispatch({
		  	  		type: TARGET_VM_FAILED,
		  	  		err
		  	  	})
		  	  }
		  	)
	};
};


