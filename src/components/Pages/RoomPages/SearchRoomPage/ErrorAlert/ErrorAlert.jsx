import {Alert, Button} from "react-bootstrap";
import {useState} from "react";
import "./ErrorAlert.scss";

export const ErrorAlert = ({title, children, onClose, ...otherProps}) => {
	const [show, setShow] = useState(true);

	return show && (
		<div className="error-alert-wrapper">
			<Alert className="error-alert" variant="danger" {...otherProps} onClose={() => {
				setShow(false);
				onClose();
			}} dismissible>
				<Alert.Heading>{title}</Alert.Heading>
				{children}
			</Alert>
		</div>
	);
}