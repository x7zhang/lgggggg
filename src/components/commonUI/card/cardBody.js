import React from 'react';

class CardBody extends React.Component {
	const { classes, className, children, ...rest} = props;
	return (
		<div className={cardBodyClasses} {...rest}>
		    {children}
		</div>
		);
};

export default CardBody;