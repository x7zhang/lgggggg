import  React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//common component
import CustomerTable from '../../components/commonUI/table';
import CardHeader from '../../components/commonUI/card/cardHeader';
import CardBody from '../../components/commonUI/card/cardBody';

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

	let tableHeaderColor = 'yellow';
	let tableHead = ['NAME', 'VM', 'SIZE', 'SNAPSHOTS'];
	let tableData = [
		["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
         ["Mason Porter", "Chile", "Gloucester", "$78,615"]
		];
	tableData = addDeleteIcon(tableData);

	addDeleteIcon = (tableData) => {
		for (let i = 0; i < tableData.length(); i++) {
			tableData[i].push(<i class="material-icons">delete</i>)
		}
	}

class Lems extends React.Component {
	constructor(props) {
		super(props);

	};

	//  tabel
	//material-ui
	render() {
		return (
	  	<div>
		  	  <CardHeader color="grey">
		  	    <h4 className={"lems_table"}>LEMS Table</h4>
		  	    <i class="material-icons" md-24>add_circle_outline</i>
		  	  </CardHeader>
		  	  <CardBody>
		  	    <CustomerTable tableHeaderColor = {tableHeaderColor}
		  	    	   tableHead = {tableHead}
		  	    	   tableData = {tableData}

		  	    />
		  	  </CardBody>
		 </div>
	  	);
	}
	  


};


export default Lems; 