import {BasicLink} from "../BasicLink/BasicLink";

export const LinkToUser = ({ username, children, className}) => {
	return (
		<BasicLink className={`link-to-user link_transition-opacity ${className && className}`} to={`user/?user=${username}`}>
			{children}
		</BasicLink>
	);
}