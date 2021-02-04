import React from 'react';


export const ControlledInput = (props) => {
	const {onChange, forwardRef, ...otherProps} = props
	return (
		<input
			{...otherProps}
			ref={forwardRef}
			value={otherProps.value}
			onChange={e => onChange(e.target.value)}
		/>
	);
}