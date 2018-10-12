import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Input } from 'antd';

//import { getRTM, createNewRTM, deleteSpecificRTM } from '../../actions/virtual-action';
//import { virtualService } from '../../services/virtual-service';
import './virtualStyle/rmt.css';


class Rtm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rtmName: false,
		};
		this.showRTMForm = this.showRTMForm.bind(this);
		this.destroyRTM = this.destroyRTM.bind(this);
	};



	showRTMForm(e) {
		let RTMname;
		if (e.which === 13) {
			console.log("keypresssssssssss");
			RTMname = e.target.value;
		}
		else {
			console.log("clickkkkkkkkkkkkk");
			RTMname = document.getElementById("rtmName").value;
		}
		//let nameInput = document.getElementsByClassName("rtm_name")[0];
		//nameInput.style.display="none";
		this.setState({
			rtmName : RTMname,
		});

	}

	destroyRTM() { //run destroy action
		console.log("destroyyyyyyyy   rtm   !!!!");
		this.setState({ // need to update to props later 
			rtmName : false,
		})
	}



	render() {
		const { rtmName } = this.state;

		return (
			<div className="rtm_form">
				{ !rtmName &&
					(<div className="rtm_name">
						<span>Please Enter RTM Name:</span>
				    	<input type="text" name="rtm_name" id="rtmName" onKeyPress={this.showRTMForm} />
				    	<button onClick={this.showRTMForm}>Submit</button>
				    </div>)
				}
			    { rtmName &&
				    (
				    	<div>
				    	<div className="rtm_data_form">
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
				    	<button onClick={this.destroyRTM} >Destroy</button>
				    	</div>
				    )
				}
			</div>

			);
	}


};
export default Rtm;