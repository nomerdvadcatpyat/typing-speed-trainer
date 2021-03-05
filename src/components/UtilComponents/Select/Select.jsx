import './Select.scss';
import {Form} from "react-bootstrap";

export const Select = ({ options, value, onChange, label, className, ...otherProps }) => {
	const getJSXOptions = () => {
		return options.map((option, index) => {
			return <option key={index} value={option.value}> {option.title} </option>
		});
	}

	return options && (
		<Form.Group className={`select ${className}`}>
			<Form.Label className="select__label"> {label} </Form.Label>
			<Form.Control as="select" onChange={onChange} {...otherProps} value={value}>
				{getJSXOptions()}
			</Form.Control>
		</Form.Group>
	);
}