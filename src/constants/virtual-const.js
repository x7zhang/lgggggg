// RTM
	// list RTM
export const GET_DEFAULT_RTM = "GET_DEFAULT_RTM";
export const GET_DEFAULT_RTM_FAILED = "GET_DEFAULT_RTM_FAILED";
	
	// create RTM
export const CREATE_NEW_RTM = "CREATE_NEW_RTM";
export const CREATE_RTM_SUCCESS = "CREATE_RTM_SUCCESS";
export const CREATE_RTM_FAILED = "CREATE_RTM_FAILED"; // error message show here
	
	// delete RTM
export const DELETE_RTM_SUCCESS = "DELETE_RTM_SUCCESS";
export const DELETE_RTM_FAILED = "DELETE_RTM_FAILED"; // error message show here 
	

// LEM Management
	// list LEM
export const GET_LEMSLIST_SUCCESS = "GET_LEMSLIST_SUCCESS";
export const GET_LEMSLIST_FAILED = "GET_LEMSLIST_FAILED"; // show error msgs

	// create LEM
export const CREATE_NEW_LEMS = "CREATE_NEW_LEMS";
export const CREATE_LEMS_FAILED = "CREATE_LEMS_FAILED"; // show error msgs

	// delete LEM
export const DELETE_LEMS = "DELETE_LEMS";
export const DELETE_LEMS_FAILED = "DELETE_LEMS_FAILED"; // show error msgs
	// has LEM ==> search part
export const GET_TARGET_LEM = "GET_TARGET_LEM";
export const TARGET_LEM_FAILED = "TARGET_LEM_FAILED"; // or move to function ?

	// multi create LEM  // to be continue
	// multi delete LEM  // to be continue

	// rsync  ??
	// reset  ??

//Libvirt Network Operation

	// create
export const CREATE_NEW_LVNET = "CREATE_NEW_LVNET";
export const CREATE_LVNET_FAILED = "CREATE_LVNET_FAILED";
	// delete
export const DELETE_LVNET = "DELETE_LVNET";
export const DELETE_LVNET_FAILED = "DELETE_LVNET_FAILED";
	// has livvirt network
export const GET_TARGET_LVNET = "GET_TARGET_LVNET";
export const TARGET_LVNET_FAILED = "TARGET_LVNET_FAILED"; // move to function???


// VM Management
	// get vm list
export const GET_VMLIST_SUCCESS = "GET_VMLIST_SUCCESS";
export const GET_VMLIST_FAILED = "GET_VMLIST_FAILED";
	// create vm
export const CREATE_NEW_VM = "CREATE_NEW_VM";
export const CREATE_VM_FAILED = "CREATE_VM_FAILED";
	// delete vm
export const DELETE_VM = "DELETE_VM";
export const DELETE_VM_FAILED = "DELETE_VM_FAILED";
	// has vm
export const GET_TARGET_VM = "GET_TARGET_VM";
export const TARGET_VM_FAILED = "TARGET_VM_FAILED";

	// get vm
export const GET_VM_DETAILS = "GET_VM_DETAILS";
export const GET_VMDETAILS_FAILED = "GET_VMDETAILS_FAILED";
	// to be continue...// pause vm

	// start vm
		// resume vm
		// shutdown vm
		// destroy vm
	// save vm
	// restore vm

	// attach file
	// attach realated 