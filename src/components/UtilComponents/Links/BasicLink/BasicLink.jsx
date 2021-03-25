import './BasicLink.scss';
import {Link} from "react-router-dom";

export const BasicLink = ({to, className, onClick, children, ...otherProps}) => {
	return (
		<Link className={`link ${className ? className : ''}`} onClick={onClick && onClick} to={to} {...otherProps}>
			{children}
		</Link>
	);
}