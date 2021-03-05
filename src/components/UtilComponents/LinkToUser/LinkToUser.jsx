import {Link} from "react-router-dom";
import './LinkToUser.scss';

export const LinkToUser = ({ username, children, className}) => {
	return (
		<Link className={`link-to-user ${className}`} to={`user/?user=${username}`}>
			{children}
		</Link>
	);
}