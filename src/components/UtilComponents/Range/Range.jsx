import React from "react";
import './Range.scss';

export const Range = ({id, label, min, max, className, value, onChange}) => {
	return (
		<div className={`range-wrapper ${className ? className : ''}`}>
			<label className="range-wrapper__label" htmlFor={id}>{label}</label>
			<input
				className="range-wrapper__range"
				type="range"
				id={id}
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}