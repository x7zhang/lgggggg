import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


rand =  () => {
	return Math.round(Math.random()*20) - 10;	
}

getModalStyle = () => {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,

		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = thems => ({
	paper: {
		position: 'absolute',
    	width: theme.spacing.unit * 50,
    	backgroundColor: theme.palette.background.paper,
    	boxShadow: theme.shadows[5],
    	padding: theme.spacing.unit * 4,
	},
});

class Popup extends React.Component {
	constructor(props) {
		super(props);
		this.state({
			open: false,
		});

		handleOpen = () => {
			this.setState({open: true})
		};

		handleClose = () => {
			this.setState({open: false})
		};

		render() {
			const { children } = props; // table as children
			return (
				<div>
					<Modal open={this.state.open} onClose={this.handleClose}>
					  {children}
					</Modal>
				</div>
				);
		}

	}
}