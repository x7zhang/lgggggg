import React from 'react';

class CardHeader extends React.Component {
	//const { classes, className, children, color, plain, stats, icon } = props;


	render() {
		return (
		  <div className={CardHeaderClasses} {...rest}>
		  	{children}
		  </div>
		);
	}
}