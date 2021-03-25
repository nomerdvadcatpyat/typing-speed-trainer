import {useState} from "react";
import "./ErrorAlert.scss";

export const ErrorAlert = ({title, children, onClose }) => {
	const [show, setShow] = useState(true);

	return show && (
		<section className="error-alert">
			<div className="cross" onClick={() => {
				setShow(false);
				onClose();
			}}>
				<div className="cross__line cross__first-line"> </div>
				<div className="cross__line cross__second-line"> </div>
			</div>
			<h3>{title}</h3>
			{children}
		</section>
	);
}