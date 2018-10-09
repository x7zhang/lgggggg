import axios from 'axios';

const virtualService = {
	//RTM
	getDefaultRTM: () => {
		return axios
		  .get('/virt/rtm/list', { 
		  	headers: {'Accept': 'application/json'},
		  })

	},

	createRTM: (queryParams) => {
		return axios
		  .post('/virt/rtm/create', Querystring.stringify(queryParams))
	},

	deleteRTM: (queryParams) => {
		return axios
		  .delete('/virt/rtm/delete', {params: Querystring.stringify(queryParams)}) //axios.delete(URL, {params: {foo: 'bar'}}) 
	},

	//LEM
	getListLEM: () => {
		return axios
		  .get('/virt/lem/list', {headers: {'Accept': 'application/json'}})
	},
	createLEM: (queryParams) => {
		return axios
		  .post('/virt/rtm/list', Querystring.stringify(queryParams))
	},

	deleteLEM: (queryParams) => {
		return axios
		  .delete('/virt/lem/delete', {params: Querystring.stringify(queryParams)})
	},

	hasLEM: (queryParams) => {   //??? has function for search or ???
		return axios
		  .get('/virt/lem/exists', Querystring.stringify(queryParams))
	},

	createMultiLEM: (queryParams) => {
		return axios
		  .post('/virt/lem/multi_create', Querystring.stringify(queryParams))
	},

	deleteMultiLEM: (queryParams) => {
		return axios
		  .delete('/virt/lem/multi_delete', {params: Querystring.stringify(queryParams)})
	},
	//rsyncLEM: () => {}

	//Libvirt Network Related Operation
	creatLVNET: (queryParams) => {
		return axios
		  .post('/virt/lvnet', Querystring.stringify(queryParams))
	},

	deleteLVNEt: (queryParams) => {
		return axios
		  .delete('/virt/lvnet/delete', {params: Querystring.stringify(queryParams)})
	},

	hasLVNET: (queryParams) => {
		return axios
		  .get('virt/lvnet/has', Querystring.stringify(queryParams))
	},
	getLVNETDetails: (queryParams) => {
		return axios
		  .get('/virt/lvnet/get', Querystring.stringify(queryParams))
	},


	//VM Related Operation
	getListVM: () => {
		return axios
		  .get('/virt/vm/list', {headers: {}})
	},
	createVM: (queryParams) => {
		return axios
		  .post('/virt/vm/create', Querystring.stringify(queryParams))
	},

	deleteVM: (queryParams) => {
		return axios
		  .delete('/virt/vm/delete', {params: Querystring.stringify(queryParams)})
	},
	hasVM: (queryParams) => {
		return axios
		  .get('/virt/vm/exists', Querystring.stringify(queryParams))
	},
	getVMDetails: (queryParams) => {
		return axios
		  .get('/virt/vm/get', Querystring.stringify(queryParams))
	},

	// Under VM Detail Page
	pauseVM: (queryParams) => {
		return axios
		  .put('/virt/vm/pause', Querystring.stringify(queryParams), {headers: api})
	},
	startVM: (queryParams) => {
		return axios
		  .put('/virt/vm/start', Querystring.stringify(queryParams), {headers: api})
	},
	resumeVM: (queryParams) => {
		return axios
		  .put('/virt/vm/resume', Querystring.stringify(queryParams), {headers: api})
	},
	// Under list of VMs
	shutdownVM: (queryParams) => {
		return axios
		  .put('/virt/vm/shutdown', Querystring.stringify(queryParams), {headers: api})
	},
	destroyVM: (queryParams) => {
		return axios
		  .put('/virt/vm/destroy', Querystring.stringify(queryParams), {headers: api})
	},
	saveVM: (queryParams) => {
		return axios
		  .put('/virt/vm/save', Querystring.stringify(queryParams), {headers: api})
	},
	restoreVM: (queryParams) => {
		return axios
		  .put('/virt/vm/restore', Querystring.stringify(queryParams), {headers: api})
	},
	updateVM: (queryParams) => {
		return axios
		  .put('/virt/vm/update', Querystring.stringify(queryParams), {headers: api})
	},
	resetVM: () => {
		return axios
		  .put('/virt/reset', Querystring.stringify(queryParams), {headers: api})
	},


	// Attach related to be continue...



};

export default virtualService;