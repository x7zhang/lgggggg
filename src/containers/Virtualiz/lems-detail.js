import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomerTable from '../../components/commonUI/table';
import CardHeader from '../../components/commonUI/card/cardHeader';
import CardBody from '../../components/commonUI/card/cardBody';

//material-ui
import IconButton from '@material-ui/core/IconButton';
import Reply from '@material-ui/icons/Reply';


const styles = {
	  cardCategoryWhite: {
	    "&,& a,& a:hover,& a:focus": {
	      color: "rgba(255,255,255,.62)",
	      margin: "0",
	      fontSize: "14px",
	      marginTop: "0",
	      marginBottom: "0"
	    },
	    "& a,& a:hover,& a:focus": {
	      color: "#FFFFFF"
	    }
	  },
	  cardTitleWhite: {
	    color: "#FFFFFF",
	    marginTop: "0px",
	    minHeight: "auto",
	    fontWeight: "300",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	    marginBottom: "3px",
	    textDecoration: "none",
	    "& small": {
	      color: "#777",
	      fontSize: "65%",
	      fontWeight: "400",
	      lineHeight: "1"
	    }
	  }
	};

let tableData = {[
		Size: 30.00,
		Parent: workspace,
		LEM Type: EXT2,
		Sector Size: 4096,
		DNA Amplification: 18.05%,
		Mode: ReadWrite,
		Status: Online
	]};


class LEMSDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inDetailpage: this.props.detailOpen,
			tableDate: {[
				Size: 30.00,
				Parent: workspace,
				LEM Type: EXT2,
				Sector Size: 4096,
				DNA Amplification: 18.05%,
				Mode: ReadWrite,
				Status: Online
			]},

		};
	}

	componentDidMount() {
		const { handle }  = this.props.match.id;
		axios.get(`/virt/lem/list/${handle}`)
			 .then(
			 	res => {
			 		this.setState({tableData: res})
			 	}
			 	)
	}

	handleBackMainList = () => {
		openDetail = !inDetailpage;
		this.setState({inDetailpage: openDetail});
		this.props.backMainList(openDetail);
	}

	return (
		<CardHeader >
			<IconButton 
			  onClick={this.handleBackMainList}
			>
				<Reply />
			</IconButton>
		</CardHeader>
		  <CustomerTable tableData = {this.state.tableData} />
		);
};

export default LEMSDetail;


