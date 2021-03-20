import './Select.scss';

export const Select = ({ options, value, onChange, label, className, id, ...otherProps }) => {
	const getJSXOptions = () => {
		return options.map((option, index) => {
			return <option key={index} value={option.value}> {option.title} </option>
		});
	}

	return options && (
		<div className={`select ${className ? className : ''}`}>
			<label className="select__label" htmlFor={id}> {label} </label>
			<select id={id} onChange={onChange} {...otherProps} value={value}>
				{getJSXOptions()}
			</select>
		</div>
	);
}