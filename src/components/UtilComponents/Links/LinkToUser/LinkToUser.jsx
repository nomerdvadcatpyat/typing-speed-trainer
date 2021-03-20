import {BasicLink} from "../BasicLink/BasicLink";

export const LinkToUser = ({ username, children, className}) => {
	console.log(children);
	return (
		<BasicLink className={`link-to-user ${className && className}`} to={`user/?user=${username}`}>
			{children}
		</BasicLink>
	);
}