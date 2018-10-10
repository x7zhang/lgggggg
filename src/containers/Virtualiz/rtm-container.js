import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { getRTM, createNewRTM, deleteSpecificRTM } from '../../actions/virtual-action';
//import { virtualService } from '../../services/virtual-service';
import './virtualStyle/rmt.css';

class Rtm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projectedSize: 0,
			allocatedSize: 0,
			lems: 0,
			dnaAmplification: 0,
			status: null
		}
	}

	componentDidMount() {
		console.log("RTMMMM!!!!!!!!");
		/*
		Promise
		  .all([
		  	virtualService.getRTM()
		  	])
		  .then(
		  	this.setState
		  	)
		  	*/
	}

	createRTM = () => {
		console.log("createRTM clicked!!!");
	}
	render() {
		const {projectedSize, allocatedSize, lems, dnaAmplification, status} = this.state;
		return (
			<div className="RTM">
				<div className="form">
				  <div className="mail">Create</div>
				  <form action="">
				    <input type="text" placeholder="Projected Size" />
				    <input type="text" placeholder ="Allocated Size" />
				    <input type="text" placeholder="LEMS" />
				    <div className="rtmSubmit">Save</div>
				  </form>
				</div>
				<div className="ok_message">
					<span>Done!S</span>
				</div>
			</div>
			);
	}
};

export default Rtm;