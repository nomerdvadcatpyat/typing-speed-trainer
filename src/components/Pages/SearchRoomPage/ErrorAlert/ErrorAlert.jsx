import {Alert, Button} from "react-bootstrap";
import {useState} from "react";

export const ErrorAlert = ({ title, children }) => {
	const [show, setShow] = useState(true);

	return (
		<>
			<Alert show={show} variant="success">
				<Alert.Heading>{title}</Alert.Heading>
				{children}
				<div className="d-flex justify-content-end">
					<Button onClick={() => setShow(false)} variant="outline-success">
						Close me y'all!
					</Button>
				</div>
			</Alert>

			{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
		</>
	);
}