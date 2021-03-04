import './Select.scss';
import {Form} from "react-bootstrap";

export const Select = ({ options, onChange, label, ...otherProps }) => {
	const getJSXOptions = () => {
		return options.map((option, index) => {
			return <option key={index} value={option}> {option} </option>
		});
	}

	return options && (
		<Form.Group className="select">
			<Form.Label className="select__label"> {label} </Form.Label>
			<Form.Control as="select" onChange={onChange} {...otherProps}>
				{getJSXOptions()}
			</Form.Control>
		</Form.Group>
	);
}