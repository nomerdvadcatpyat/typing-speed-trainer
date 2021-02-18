import './Select.scss';

export const Select = ({ options, onChange, ...otherProps }) => {
	const getJSXOptions = () => {
		return options.map((option, index) => {
			return <option key={option.id || index} value={option.title}> {option.title} </option>
		});
	}

	return (
		<select onChange={onChange} {...otherProps}>
			{options ? getJSXOptions() : null}
		</select>
	);
}