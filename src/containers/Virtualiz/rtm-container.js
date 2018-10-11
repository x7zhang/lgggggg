import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Input } from 'antd';

//import { getRTM, createNewRTM, deleteSpecificRTM } from '../../actions/virtual-action';
//import { virtualService } from '../../services/virtual-service';
import './virtualStyle/rmt.css';


const Search = Input.Search;
/*
CreateRTM = (props) => {
		console.log("createRTM clicked!!!");
		return (
			<div>
			<button onKeyPress={props.nameRTM}>
				<Icon type="edit" theme="outlined" onClick={this.createRTM}/>
			</button>
			<Search
		      placeholder="Please enter your name"
		      onSearch={value => console.log(value)}
		      style={{ width: 200 }}
		    />
		    </div>
			);
 
	}
	
	DisplayRTM = (props) => {
		const {projectedSize, allocatedSize, lems, dnaAmplification, status} = this.state;
		return (
			<div>
			  <div>
			     {projectedSize}
			  </div>
			  <div>
			     availablesize
			  </div>
			  <div>
			     numdisks
			  </div>
			  <div>
			     nowrites
			  </div>
			  <div>
			     online
			  </div>
			</div>
		);
	}
	*/

function Greeting() {
	const rtmForm = false;

		if (rtmForm) {
			return (
					<div className="RTMdisplay">
			    <div>
				  <div>
				     projectedSize
				  </div>
				  <div>
				     availablesize
				  </div>
				  <div>
				     numdisks
				  </div>
				  <div>
				     nowrites
				  </div>
				  <div>
				     online
				  </div>
				</div>
			  </div>
		
				)
		}
		else {
			return (
					<div className="nameEnter">
			    <Search
		      placeholder="Please enter your name"
		      style={{ width: 200 }}
		    	/>
			  </div>
				)
		}
					
}
class Rtm extends React.Component {
	constructor(props) {
		super(props); // RTM_name === none ? create => active : getRTM()
		this.state = {
			projectedSize: 0,
			allocatedSize: 0,
			lems: 0,
			dnaAmplification: 0,
			status: null,
			rtmName: null,
			rtmForm: false,
		}
	};

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
	};

	keyPressCreateName = (e) => {
		if (e.which === 13) { 
			console.log("key presssssssssssss");
			//this.displayRTM();
		}
	}

	

	RTMTable = (props) => {
		const rtmName = !props.rtmForm;
		if (rtmName) {
			return <createRTM />;
		}
		return <displayRTM/>

	}
	render() {
		
		return (
			<Greeting />
			);
	}
};

export default Rtm;