import './BasicLink.scss';
import {Link} from "react-router-dom";

export const BasicLink = ({to, className, children}) => {
	console.log(children)
	return (
		<Link className={`link ${className && className}`} to={to}>
			{children}
		</Link>
	);
}