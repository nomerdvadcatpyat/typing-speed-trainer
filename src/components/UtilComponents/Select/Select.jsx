import './Select.scss';

export const Select = ({ options, onChange, ...otherProps }) => {
	const getJSXOptions = () => {
		return options.map((option, index) => {
			return <option key={index} value={option}> {option} </option>
		});
	}

	return (
		<select onChange={onChange} {...otherProps}>
			{options ? getJSXOptions() : null}
		</select>
	);
}